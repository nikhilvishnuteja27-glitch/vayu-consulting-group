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
  const safeYears       = VALID_YEARS.has(yearsExperience) ? yearsExperience : null
  const safeEngagement  = VALID_ENGAGEMENT.has(engagementPreference) ? engagementPreference : null
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

  const smtpReady = process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS
  if (smtpReady) {
    try {
      const nodemailer = await import('nodemailer')
      const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT ?? 587),
        secure: process.env.SMTP_SECURE === 'true',
        auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      })
      await transport.sendMail({
        from: `"VCG Website" <${process.env.SMTP_USER}>`,
        to: process.env.CAREERS_EMAIL ?? 'careers@vayuconsultinggroup.com',
        replyTo: email,
        subject: sanitizeSubject(`Network Application — ${name} — ${primaryRole}`),
        html: `
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
          </div>`,
      })
    } catch (err) {
      console.error('SMTP careers send failed:', err)
    }
  }

  return NextResponse.json({ success: true })
}
