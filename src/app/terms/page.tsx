import type { Metadata } from 'next'
import type { ReactNode, CSSProperties } from 'react'

export const metadata: Metadata = {
  title: 'Terms of Use — Vayu Consulting Group',
  description:
    'Terms of Use for vayuconsultinggroup.com — governing access to and use of the Vayu Consulting Group website.',
  alternates: {
    canonical: 'https://www.vayuconsultinggroup.com/terms',
  },
  openGraph: {
    title: 'Terms of Use — Vayu Consulting Group',
    description:
      'Terms of Use for vayuconsultinggroup.com — governing access to and use of the Vayu Consulting Group website.',
    url: 'https://www.vayuconsultinggroup.com/terms',
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

const capsStyle: CSSProperties = {
  fontSize: '0.8125rem',
  lineHeight: 1.80,
  color: 'rgba(17,18,20,0.62)',
  letterSpacing: '0.01em',
  marginTop: '0.75rem',
  fontFamily: 'var(--font-body-var), sans-serif',
  fontWeight: 300,
}

const liStyle: CSSProperties = {
  fontSize: '0.9375rem',
  lineHeight: 1.82,
  color: 'rgba(17,18,20,0.62)',
  marginBottom: '0.5rem',
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

function Cap({ children }: { children: ReactNode }) {
  return <p style={capsStyle}>{children}</p>
}

// ── Page ─────────────────────────────────────────────────────

export default function TermsPage() {
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
            Terms of Use
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

            <S n="1" title="Acceptance" first>
              <P>By accessing or using the vayuconsultinggroup.com website (the &ldquo;Website&rdquo;), you agree to be bound by these Terms of Use (&ldquo;Terms&rdquo;). If you do not agree to these Terms, please do not use the Website.</P>
              <P>The Website is intended for use by individuals who are at least 18 years of age.</P>
            </S>

            <S n="2" title="About the Website">
              <P>The Website is operated by Vayu Consulting Group Inc. (&ldquo;Vayu Consulting Group,&rdquo; &ldquo;VCG,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) as an informational and marketing website. It is provided for general informational purposes only.</P>
              <P>Nothing on the Website constitutes an offer to provide consulting services, a binding commitment, or an agreement of any kind. Any engagement between VCG and a client, vendor, contractor, or other party is governed exclusively by a separately executed written agreement between the parties. If you have entered into a separate written agreement with VCG, that agreement governs the applicable business relationship and controls in the event of any conflict with these Terms with respect to that relationship.</P>
            </S>

            <S n="3" title="Intellectual Property">
              <P>All content on the Website &mdash; including text, descriptions, methodology descriptions, graphics, design, layout, logos, original copy, and other materials &mdash; is owned by or licensed to Vayu Consulting Group Inc. and is subject to applicable intellectual property and other laws.</P>
              <P>&ldquo;Vayu Consulting Group,&rdquo; &ldquo;VCG,&rdquo; and related branding and materials on the Website are the proprietary property of Vayu Consulting Group Inc.</P>
              <P>You may not reproduce, copy, distribute, publish, modify, create derivative works from, or otherwise exploit any content from the Website for commercial purposes without VCG&rsquo;s prior written consent. Standard search engine indexing and ordinary personal browsing are permitted.</P>
            </S>

            <S n="4" title="No Professional Advice or Consulting Relationship">
              <P>Content on the Website is provided for general informational purposes only. Nothing on the Website constitutes consulting, legal, financial, tax, or other professional advice, and nothing on the Website creates a consulting relationship between you and VCG. Any consulting engagement requires a separately executed written agreement.</P>
            </S>

            <S n="5" title="Accuracy of Information">
              <P>VCG makes reasonable efforts to keep Website content accurate and current. However, VCG makes no representation or warranty regarding the completeness, accuracy, or timeliness of any Website content. VCG reserves the right to modify or remove content at any time without notice.</P>
            </S>

            <S n="6" title="Third-Party Links">
              <P>The Website may contain links to third-party platforms, including LinkedIn. These links are provided for convenience only. VCG does not control, endorse, or accept responsibility for any third-party website, its content, products, or services. Your use of third-party websites is at your own risk and subject to those websites&rsquo; applicable terms and policies.</P>
            </S>

            <S n="7" title="Prohibited Uses">
              <P>You may not use the Website to:</P>
              <ul style={{ marginTop: '1rem', paddingLeft: '1.375rem', listStyleType: 'disc' }}>
                <li style={liStyle}>Violate any applicable federal, state, or local law or regulation</li>
                <li style={liStyle}>Systematically harvest, scrape, or extract Website content using automated tools for commercial or competitive purposes</li>
                <li style={liStyle}>Attempt to gain unauthorized access to any portion of the Website or its underlying systems or infrastructure</li>
                <li style={liStyle}>Impersonate VCG or any VCG representative</li>
                <li style={liStyle}>Transmit malware, viruses, or other harmful or disruptive code</li>
                <li style={liStyle}>Frame or mirror the Website within another website or application without VCG&rsquo;s prior written consent</li>
                <li style={{ ...liStyle, marginBottom: 0 }}>Engage in conduct that damages, disables, or impairs the Website or interferes with others&rsquo; use of it</li>
              </ul>
            </S>

            <S n="8" title="Disclaimer of Warranties">
              <Cap>THE WEBSITE IS PROVIDED ON AN &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; BASIS. TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, VCG DISCLAIMS ALL WARRANTIES &mdash; EXPRESS OR IMPLIED &mdash; INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. VCG DOES NOT WARRANT THAT THE WEBSITE WILL OPERATE WITHOUT INTERRUPTION OR BE FREE OF ERRORS.</Cap>
            </S>

            <S n="9" title="Limitation of Liability">
              <P>These limitations apply solely to your use of this Website. They do not modify or limit VCG&rsquo;s obligations under any separately executed client, vendor, contractor, employment, or other written agreement.</P>
              <Cap>TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, VCG AND ITS AFFILIATES, OFFICERS, EMPLOYEES, AND AGENTS WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF OR INABILITY TO USE THIS WEBSITE, EVEN IF VCG HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</Cap>
            </S>

            <S n="10" title="Governing Law">
              <P>These Terms are governed by the laws of the State of Illinois, without regard to its conflict of laws principles. Any dispute arising from these Terms or your use of the Website shall be subject to the jurisdiction of the appropriate state or federal courts in Illinois.</P>
            </S>

            <S n="11" title="Changes to These Terms">
              <P>VCG may modify these Terms at any time. Revised Terms will be posted on this page with an updated effective date. Your continued use of the Website following any modification constitutes your acceptance of the revised Terms.</P>
            </S>

            <S n="12" title="Contact">
              <P>For questions about these Terms:</P>
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
                <a
                  href="mailto:info@vayuconsultinggroup.com"
                  style={linkStyle}
                >
                  info@vayuconsultinggroup.com
                </a>
              </div>
            </S>

          </div>
        </div>
      </section>
    </>
  )
}
