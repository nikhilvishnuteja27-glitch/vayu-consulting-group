import { NextRequest, NextResponse } from 'next/server'

const VALID_YEARS = new Set(['5–10 years', '10–15 years', '15–20 years', '20+ years'])
const VALID_ENGAGEMENT = new Set(['Full-time embedded', 'Part-time / fractional', 'Either'])
const VALID_AVAILABILITY = new Set(['Available now', 'Within 30 days', 'Within 60–90 days', 'Currently engaged'])

function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function sanitizeSubject(str: string): string {
  return str.replace(/[\r\n]/g, ' ').trim().slice(0, 200)
}

function row(label: string, value: string | undefined | null): string {
  if (!value) return ''
  return `<tr><td style="padding:8px 0;color:#666;width:160px;font-weight:600;vertical-align:top">${label}</td><td style="padding:8px 0">${escapeHtml(value)}</td></tr>`
}

export async function POST(req: NextRequest) {
  const body = await req.json()
  const {
    name, email, phone, location,
    primaryRole, coreSkills, yearsExperience,
    linkedIn, engagementPreference, availability,
    website, // honeypot
  } = body

  // Honeypot — bots fill hidden fields; humans don't
  if (website) {
    return NextResponse.json({ success: true })
  }

  if (!name || !email || !primaryRole || !coreSkills || !yearsExperience || !engagementPreference || !availability) {
    return NextResponse.json({ error: 'Required fields missing' }, { status: 400 })
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
  }

  // Validate enumerated fields against allowed values
  const safeYears        = VALID_YEARS.has(yearsExperience) ? yearsExperience : null
  const safeEngagement   = VALID_ENGAGEMENT.has(engagementPreference) ? engagementPreference : null
  const safeAvailability = VALID_AVAILABILITY.has(availability) ? availability : null

  if (!safeYears || !safeEngagement || !safeAvailability) {
    return NextResponse.json({ error: 'Invalid field values' }, { status: 400 })
  }

  // Dev-only diagnostic log — no personal information in production
  if (process.env.NODE_ENV !== 'production') {
    console.log('📋 VCG Candidate Submission (dev):', {
      primaryRole: primaryRole?.slice(0, 40),
      yearsExperience: safeYears,
      engagementPreference: safeEngagement,
      availability: safeAvailability,
    })
  }

  const { GRAPH_TENANT_ID, GRAPH_CLIENT_ID, GRAPH_CLIENT_SECRET, GRAPH_SENDER_ADDRESS } = process.env
  const graphReady = GRAPH_TENANT_ID && GRAPH_CLIENT_ID && GRAPH_CLIENT_SECRET && GRAPH_SENDER_ADDRESS

  if (!graphReady) {
    if (process.env.NODE_ENV !== 'production') {
      return NextResponse.json({ success: true })
    }
    console.error('VCG careers: Graph configuration missing')
    return NextResponse.json({ error: 'Email service unavailable' }, { status: 503 })
  }

  const subject = sanitizeSubject(`Network Application — ${name} — ${primaryRole}`)

  const htmlContent = `
          <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#0A1432">
            <div style="border-bottom:3px solid #C8A96E;padding-bottom:16px;margin-bottom:24px">
              <h2 style="margin:0;font-size:22px">VCG Network Application</h2>
              <p style="margin:4px 0 0;color:#555;font-size:13px">via vayuconsultinggroup.com/join</p>
            </div>
            <table style="width:100%;border-collapse:collapse;font-size:15px">
              ${row('Name', name)}
              ${row('Email', `<a href="mailto:${escapeHtml(email)}" style="color:#4F6FFF">${escapeHtml(email)}</a>`)}
              ${row('Phone', phone)}
              ${row('Location', location)}
              ${row('Primary Role', primaryRole)}
              ${row('Experience', safeYears)}
              ${row('Engagement', safeEngagement)}
              ${row('Availability', safeAvailability)}
              ${linkedIn ? row('LinkedIn', `<a href="${escapeHtml(linkedIn)}" style="color:#4F6FFF">${escapeHtml(linkedIn)}</a>`) : ''}
            </table>
            <div style="margin-top:24px">
              <p style="font-weight:600;color:#666;margin-bottom:8px">Core Skills &amp; Experience</p>
              <div style="background:#f5f7fb;padding:16px;border-radius:4px;white-space:pre-wrap;font-size:15px;line-height:1.6">${escapeHtml(String(coreSkills))}</div>
            </div>
            <p style="margin-top:24px;font-size:12px;color:#aaa">Reply directly to this email to respond to ${escapeHtml(name)}. Resume may follow separately to careers@vayuconsultinggroup.com.</p>
          </div>`

  try {
    const tokenRes = await fetch(
      `https://login.microsoftonline.com/${GRAPH_TENANT_ID}/oauth2/v2.0/token`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          grant_type: 'client_credentials',
          client_id: GRAPH_CLIENT_ID,
          client_secret: GRAPH_CLIENT_SECRET,
          scope: 'https://graph.microsoft.com/.default',
        }),
      }
    )
    if (!tokenRes.ok) {
      console.error('VCG careers: token acquisition failed', tokenRes.status)
      return NextResponse.json({ error: 'Email service unavailable' }, { status: 503 })
    }
    const { access_token } = (await tokenRes.json()) as { access_token: string }

    const mailRes = await fetch(
      `https://graph.microsoft.com/v1.0/users/${encodeURIComponent(GRAPH_SENDER_ADDRESS)}/sendMail`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${access_token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: {
            subject,
            body: { contentType: 'HTML', content: htmlContent },
            toRecipients: [{ emailAddress: { address: process.env.CAREERS_EMAIL ?? 'info@vayuconsultinggroup.com' } }],
            replyTo: [{ emailAddress: { address: email } }],
          },
          saveToSentItems: false,
        }),
      }
    )
    if (!mailRes.ok) {
      console.error('VCG careers: sendMail failed', mailRes.status)
      return NextResponse.json({ error: 'Email service unavailable' }, { status: 503 })
    }
  } catch (err) {
    console.error('VCG careers: Graph error', err instanceof Error ? err.message : 'unknown')
    return NextResponse.json({ error: 'Email service unavailable' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
