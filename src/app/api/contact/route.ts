import { NextRequest, NextResponse } from 'next/server'

const VALID_INQUIRY_TYPES = new Set([
  'Transformation / Critical Initiative',
  'Program Recovery',
  'Project or Delivery Team',
  'Specialized Talent',
  'Other',
])

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

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { name, email, phone, message, inquiryType, website } = body

  // Honeypot — bots fill hidden fields; humans don't
  if (website) {
    return NextResponse.json({ success: true })
  }

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Required fields missing' }, { status: 400 })
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
  }

  const safeInquiryType = VALID_INQUIRY_TYPES.has(inquiryType) ? inquiryType : null

  // Dev-only diagnostic log — no personal information logged in production
  if (process.env.NODE_ENV !== 'production') {
    console.log('📬 VCG Contact Form (dev):', { inquiryType: safeInquiryType, messageLength: String(message).length })
  }

  const { GRAPH_TENANT_ID, GRAPH_CLIENT_ID, GRAPH_CLIENT_SECRET, GRAPH_SENDER_ADDRESS } = process.env
  const graphReady = GRAPH_TENANT_ID && GRAPH_CLIENT_ID && GRAPH_CLIENT_SECRET && GRAPH_SENDER_ADDRESS

  if (!graphReady) {
    if (process.env.NODE_ENV !== 'production') {
      return NextResponse.json({ success: true })
    }
    console.error('VCG contact: Graph configuration missing')
    return NextResponse.json({ error: 'Email service unavailable' }, { status: 503 })
  }

  const subjectType = safeInquiryType ? ` — ${safeInquiryType}` : ''
  const subject = sanitizeSubject(`New Enquiry — ${name}${subjectType}`)

  const htmlContent = `
          <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#0A1432">
            <div style="border-bottom:3px solid #C8A96E;padding-bottom:16px;margin-bottom:24px">
              <h2 style="margin:0;font-size:22px">New Website Enquiry</h2>
              <p style="margin:4px 0 0;color:#555;font-size:13px">via vayuconsultinggroup.com</p>
            </div>
            <table style="width:100%;border-collapse:collapse;font-size:15px">
              <tr><td style="padding:8px 0;color:#666;width:130px;font-weight:600">Name</td><td>${escapeHtml(name)}</td></tr>
              <tr><td style="padding:8px 0;color:#666;font-weight:600">Email</td><td><a href="mailto:${escapeHtml(email)}" style="color:#4F6FFF">${escapeHtml(email)}</a></td></tr>
              <tr><td style="padding:8px 0;color:#666;font-weight:600">Phone</td><td>${phone ? escapeHtml(String(phone)) : '—'}</td></tr>
              ${safeInquiryType ? `<tr><td style="padding:8px 0;color:#666;font-weight:600">Inquiry Type</td><td>${escapeHtml(safeInquiryType)}</td></tr>` : ''}
            </table>
            <div style="margin-top:24px">
              <p style="font-weight:600;color:#666;margin-bottom:8px">Message</p>
              <div style="background:#f5f7fb;padding:16px;border-radius:4px;white-space:pre-wrap;font-size:15px;line-height:1.6">${escapeHtml(String(message))}</div>
            </div>
            <p style="margin-top:24px;font-size:12px;color:#aaa">Reply directly to this email to respond to ${escapeHtml(name)}.</p>
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
      console.error('VCG contact: token acquisition failed', tokenRes.status)
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
            toRecipients: [{ emailAddress: { address: process.env.CONTACT_EMAIL ?? 'info@vayuconsultinggroup.com' } }],
            replyTo: [{ emailAddress: { address: email } }],
          },
          saveToSentItems: false,
        }),
      }
    )
    if (!mailRes.ok) {
      console.error('VCG contact: sendMail failed', mailRes.status)
      return NextResponse.json({ error: 'Email service unavailable' }, { status: 503 })
    }
  } catch (err) {
    console.error('VCG contact: Graph error', err instanceof Error ? err.message : 'unknown')
    return NextResponse.json({ error: 'Email service unavailable' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
