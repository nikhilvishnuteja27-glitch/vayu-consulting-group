import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { name, email, phone, message } = body

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Required fields missing' }, { status: 400 })
  }

  // Always log the submission
  console.log('📬 VCG Contact Form:', { name, email, phone, snippet: message.slice(0, 80) })

  // Send email if SMTP is configured in .env.local
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
        to: process.env.CONTACT_EMAIL ?? 'info@vayuconsultinggroup.com',
        replyTo: email,
        subject: `New Enquiry — ${name}`,
        html: `
          <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#0A1432">
            <div style="border-bottom:3px solid #C8A96E;padding-bottom:16px;margin-bottom:24px">
              <h2 style="margin:0;font-size:22px">New Website Enquiry</h2>
              <p style="margin:4px 0 0;color:#555;font-size:13px">via vayuconsultinggroup.com</p>
            </div>
            <table style="width:100%;border-collapse:collapse;font-size:15px">
              <tr><td style="padding:8px 0;color:#666;width:130px;font-weight:600">Name</td><td>${name}</td></tr>
              <tr><td style="padding:8px 0;color:#666;font-weight:600">Email</td><td><a href="mailto:${email}" style="color:#4F6FFF">${email}</a></td></tr>
              <tr><td style="padding:8px 0;color:#666;font-weight:600">Phone</td><td>${phone || '—'}</td></tr>
            </table>
            <div style="margin-top:24px">
              <p style="font-weight:600;color:#666;margin-bottom:8px">Message</p>
              <div style="background:#f5f7fb;padding:16px;border-radius:4px;white-space:pre-wrap;font-size:15px;line-height:1.6">${message}</div>
            </div>
            <p style="margin-top:24px;font-size:12px;color:#aaa">Reply directly to this email to respond to ${name}.</p>
          </div>`,
      })
    } catch (err) {
      console.error('SMTP send failed:', err)
      // Don't surface SMTP errors to the user
    }
  }

  return NextResponse.json({ success: true })
}
