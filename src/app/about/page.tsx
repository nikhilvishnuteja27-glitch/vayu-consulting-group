import type { Metadata } from 'next'
import { FounderPerspective } from '@/components/sections/FounderPerspective'
import { WhyVCG }             from '@/components/sections/WhyVCG'
import { CTA }                from '@/components/sections/CTA'

export const metadata: Metadata = {
  title: 'About — Vayu Consulting Group',
  description:
    'Vayu Consulting Group Inc. is an execution consulting firm built to close the gap between strategy and delivered outcomes. What VCG is, why it exists, and how it operates.',
  alternates: {
    canonical: 'https://vayuconsultinggroup.com/about',
  },
}

export default function AboutPage() {
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
          <p className="vcg-label" style={{ marginBottom: '1.25rem' }}>The Company</p>
          <h1
            className="font-display font-normal"
            style={{
              fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
              lineHeight: 1.06,
              letterSpacing: '-0.030em',
              color: '#F5F3EE',
              marginBottom: '1.25rem',
              maxWidth: '22ch',
            }}
          >
            About VCG
          </h1>
          <p
            className="font-body font-light"
            style={{ fontSize: '1rem', lineHeight: 1.78, color: 'rgba(245,243,238,0.44)', maxWidth: '50ch' }}
          >
            Vayu Consulting Group Inc. is an execution consulting firm built to close the gap between strategy and delivered outcomes.
          </p>
        </div>
      </section>

      {/* Why VCG exists — origin and purpose */}
      <FounderPerspective />

      {/* Operating principles */}
      <WhyVCG />

      {/* CTA */}
      <CTA />
    </>
  )
}
