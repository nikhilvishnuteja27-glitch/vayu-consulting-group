import type { Metadata } from 'next'
import type { ReactNode, CSSProperties } from 'react'

export const metadata: Metadata = {
  title: 'Privacy Policy — Vayu Consulting Group',
  description:
    'Privacy Policy for vayuconsultinggroup.com — how Vayu Consulting Group Inc. collects, uses, and handles personal information.',
  alternates: {
    canonical: 'https://www.vayuconsultinggroup.com/privacy',
  },
  openGraph: {
    title: 'Privacy Policy — Vayu Consulting Group',
    description:
      'Privacy Policy for vayuconsultinggroup.com — how Vayu Consulting Group Inc. collects, uses, and handles personal information.',
    url: 'https://www.vayuconsultinggroup.com/privacy',
    type: 'website',
  },
}

// ── Style constants ──────────────────────────────────────────

const sectionDiv: CSSProperties = {
  marginTop: '2.5rem',
  paddingTop: '2.5rem',
  borderTop: '1px solid rgba(17,18,20,0.07)',
}

const headingStyle: CSSProperties = {
  fontWeight: 500,
  fontSize: '0.9375rem',
  letterSpacing: '-0.008em',
  color: '#111214',
  marginBottom: '1rem',
}

const pStyle: CSSProperties = {
  fontSize: '0.9375rem',
  lineHeight: 1.82,
  color: 'rgba(17,18,20,0.62)',
  marginTop: '0.75rem',
}

const subHeadStyle: CSSProperties = {
  fontWeight: 500,
  fontSize: '0.875rem',
  letterSpacing: '-0.005em',
  color: '#111214',
  marginTop: '1.25rem',
  marginBottom: '0.375rem',
}

const liStyle: CSSProperties = {
  fontSize: '0.9375rem',
  lineHeight: 1.82,
  color: 'rgba(17,18,20,0.62)',
  marginBottom: '0.625rem',
}

const linkStyle: CSSProperties = {
  color: '#111214',
  textDecoration: 'underline',
  textDecorationColor: 'rgba(17,18,20,0.28)',
  fontWeight: 400,
}

// ── Helper components ────────────────────────────────────────

function S({ n, title, children, first }: { n: string; title: string; children: ReactNode; first?: boolean }) {
  return (
    <div style={first ? undefined : sectionDiv}>
      <h2 className="font-body" style={headingStyle}>{n}.&nbsp; {title}</h2>
      {children}
    </div>
  )
}

function P({ children }: { children: ReactNode }) {
  return <p className="font-body font-light" style={pStyle}>{children}</p>
}

function Sub({ children }: { children: ReactNode }) {
  return <p className="font-body" style={subHeadStyle}>{children}</p>
}

function E({ email }: { email: string }) {
  return <a href={`mailto:${email}`} style={linkStyle}>{email}</a>
}

// ── Page ─────────────────────────────────────────────────────

export default function PrivacyPage() {
  return (
    <>
      {/* Dark page header */}
      <section style={{ background: '#0B0B0D', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div
          className="container-site"
          style={{
            paddingTop: 'clamp(8rem, 14vw, 12rem)',
            paddingBottom: 'clamp(3.5rem, 5vw, 5rem)',
          }}
        >
          <p className="vcg-label" style={{ marginBottom: '1.25rem' }}>Legal</p>
          <h1
            className="font-display font-normal"
            style={{
              fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
              lineHeight: 1.06,
              letterSpacing: '-0.030em',
              color: '#F5F3EE',
              marginBottom: '1rem',
            }}
          >
            Privacy Policy
          </h1>
          <p
            className="font-body font-light"
            style={{ fontSize: '0.875rem', color: 'rgba(245,243,238,0.36)', letterSpacing: '0.005em' }}
          >
            Vayu Consulting Group Inc.&nbsp;&nbsp;·&nbsp;&nbsp;Effective Date: August 27, 2026
          </p>
        </div>
      </section>

      {/* White content */}
      <section style={{ background: '#FFFFFF' }}>
        <div
          className="container-site"
          style={{
            paddingTop: 'clamp(3.5rem, 6vw, 5.5rem)',
            paddingBottom: 'clamp(4.5rem, 8vw, 7.5rem)',
          }}
        >
          <div style={{ maxWidth: '720px' }}>

            <S n="1" title="Introduction" first>
              <P>This Privacy Policy describes how Vayu Consulting Group Inc. (&ldquo;Vayu Consulting Group,&rdquo; &ldquo;VCG,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) collects, uses, and handles personal information obtained through the vayuconsultinggroup.com website (the &ldquo;Website&rdquo;).</P>
              <P>By using the Website, you acknowledge that you have read this Privacy Policy.</P>
              <P>Questions, concerns, or requests regarding this Privacy Policy may be directed to us at <E email="info@vayuconsultinggroup.com" />.</P>
            </S>

            <S n="2" title="Information We Collect">
              <P>We collect personal information only when you voluntarily provide it to us.</P>
              <Sub>Contact Inquiries</Sub>
              <P>When you submit a contact form through the Website, we collect the information you provide, which may include your name, email address, phone number (if provided), and the message or description of your inquiry.</P>
              <Sub>Candidate and Network Applicant Inquiries</Sub>
              <P>If you submit a profile through the VCG Network application form on the Website, or contact us at <E email="info@vayuconsultinggroup.com" />, we collect the personal information you voluntarily provide. This may include your name, email address, phone number, location, primary professional role, a description of your core skills and experience, years of professional experience, LinkedIn profile URL, engagement preference, and availability. We do not collect government-issued identification, financial information, or detailed immigration documentation through the Website.</P>
              <P>This information is collected for the purpose of evaluating your suitability for potential engagements through the VCG professional network. Submission does not constitute an offer of employment or placement. Where applicable, specific privacy practices for formal onboarding processes will be communicated at the time of collection.</P>
              <Sub>Technical Information</Sub>
              <P>Our hosting infrastructure automatically processes certain technical data when you visit the Website &mdash; such as IP addresses, browser type, and access timestamps &mdash; as part of standard website delivery and security operations. This data is processed by our infrastructure provider and is not used by VCG for marketing or behavioral profiling.</P>
            </S>

            <S n="3" title="How We Use Your Information">
              <P>We use personal information submitted through the Website&rsquo;s contact form to respond to your inquiry, communicate with you about potential or existing business engagements, and maintain records of our business communications.</P>
              <P>We use candidate and network applicant information to evaluate professional profiles for potential engagements through the VCG network, to follow up with candidates, and to maintain records of professional inquiries. Candidate information is retained for as long as reasonably necessary for these purposes.</P>
              <P>We do not use your personal information for third-party advertising, behavioral targeting, or any purpose materially inconsistent with the reason you provided it.</P>
            </S>

            <S n="4" title="How We Share Your Information">
              <P><strong style={{ fontWeight: 500, color: '#111214' }}>We do not sell personal information collected through the Website.</strong> We do not use personal information collected through the Website for third-party behavioral advertising.</P>
              <P>We share personal information only as necessary to operate the Website and conduct our business:</P>
              <ul style={{ marginTop: '1rem', paddingLeft: '1.375rem', listStyleType: 'disc' }}>
                <li style={liStyle}><strong style={{ fontWeight: 500, color: '#111214' }}>Email and Communications Service Providers:</strong> Contact form submissions are transmitted to us through email and communications service providers that support our business operations. These providers process data on our behalf and are not authorized to use your information for their own independent purposes.</li>
                <li style={liStyle}><strong style={{ fontWeight: 500, color: '#111214' }}>Hosting and Infrastructure:</strong> The Website is hosted by Vercel Inc. As our infrastructure provider, Vercel may process technical data associated with your visit to the Website in accordance with Vercel&rsquo;s own privacy practices.</li>
                <li style={{ ...liStyle, marginBottom: 0 }}><strong style={{ fontWeight: 500, color: '#111214' }}>Legal Compliance:</strong> We may disclose information when required by applicable law, valid legal process, court order, or governmental authority, or when reasonably necessary to protect the rights, property, or safety of VCG or others.</li>
              </ul>
            </S>

            <S n="5" title="Cookies and Tracking Technologies">
              <P>Vayu Consulting Group uses Google Analytics 4 to understand how visitors use this Website and to inform improvements to the Website. Google Analytics may collect information such as pages viewed, approximate geographic location, device and browser type, referral source, and similar usage information. Google Analytics may use cookies or similar technologies as part of its measurement.</P>
              <P>We do not use Google Analytics for advertising, remarketing, or behavioral profiling.</P>
              <P>Google&rsquo;s own privacy practices govern how Google processes data collected through Google Analytics. For information on how Google handles this data, please review the Google Privacy Policy at <a href="https://policies.google.com/privacy" style={linkStyle} target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a>.</P>
              <P>We do not use Meta Pixel, LinkedIn Insight Tag, or other advertising or behavioral tracking technologies on this Website. Our website hosting infrastructure may also process technical information &mdash; such as IP addresses and access timestamps &mdash; as part of standard website delivery and security operations.</P>
            </S>

            <S n="6" title="Data Retention">
              <P>We retain personal information submitted through the Website for as long as reasonably necessary for the purposes for which it was collected, to support legitimate business communications and needs, and to comply with applicable legal or recordkeeping obligations. We do not retain personal information beyond what is necessary for these purposes.</P>
            </S>

            <S n="7" title="Your Privacy Requests">
              <P>If you have provided personal information through the Website and would like to request access to, correction of, or deletion of that information, please contact us at <E email="info@vayuconsultinggroup.com" />. We will respond to reasonable requests and will honor rights required by applicable law, subject to legitimate business and legal retention requirements.</P>
            </S>

            <S n="8" title="Children's Privacy">
              <P>The Website is not directed toward children under 18 years of age. We do not knowingly solicit or collect personal information from minors through the Website. If you believe we have inadvertently received information from a minor, please contact us at <E email="info@vayuconsultinggroup.com" />.</P>
            </S>

            <S n="9" title="Third-Party Links">
              <P>The Website contains links to third-party platforms, including LinkedIn. These links are provided for convenience only. VCG is not responsible for the privacy practices or content of third-party websites. We encourage you to review the applicable privacy policies of any third-party platform before providing personal information.</P>
            </S>

            <S n="10" title="Changes to This Privacy Policy">
              <P>We may update this Privacy Policy from time to time. The current version will be posted on this page with an updated effective date. We encourage you to review this page periodically. Your continued use of the Website following a posted update constitutes your acknowledgment of the revised policy.</P>
            </S>

            <S n="11" title="Contact">
              <P>For questions, concerns, or requests related to this Privacy Policy:</P>
              <div
                style={{
                  marginTop: '1.25rem',
                  padding: '1.25rem 1.5rem',
                  background: '#F5F3EE',
                  borderRadius: '4px',
                  border: '1px solid rgba(17,18,20,0.07)',
                }}
              >
                <p
                  className="font-body"
                  style={{ fontWeight: 500, fontSize: '0.9375rem', color: '#111214', marginBottom: '4px' }}
                >
                  Vayu Consulting Group Inc.
                </p>
                <E email="info@vayuconsultinggroup.com" />
              </div>
            </S>

          </div>
        </div>
      </section>
    </>
  )
}
