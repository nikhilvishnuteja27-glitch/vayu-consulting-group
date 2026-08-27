import type { Metadata } from 'next'
import { ExecutionIntelligence } from '@/components/sections/ExecutionIntelligence'
import { ExecutionModel }        from '@/components/sections/ExecutionModel'
import { EngagementStructure }   from '@/components/sections/EngagementStructure'
import { AIExecution }           from '@/components/sections/AIExecution'
import { AfterEngagement }       from '@/components/sections/AfterEngagement'
import { CTA }                   from '@/components/sections/CTA'

export const metadata: Metadata = {
  title: 'How We Work — Vayu Consulting Group',
  description:
    'The VCG operating model: Execution Intelligence, the Assess–Assemble–Embed–Deliver framework, engagement structure, AI-augmented execution, and what changes after VCG is engaged.',
  alternates: {
    canonical: 'https://www.vayuconsultinggroup.com/how-we-work',
  },
}

export default function HowWeWorkPage() {
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
          <p className="vcg-label" style={{ marginBottom: '1.25rem' }}>Operating Model</p>
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
            How We Work
          </h1>
          <p
            className="font-body font-light"
            style={{ fontSize: '1rem', lineHeight: 1.78, color: 'rgba(245,243,238,0.44)', maxWidth: '50ch' }}
          >
            What actually happens once VCG is engaged. The Execution Intelligence model, the engagement framework, and what changes when execution is owned.
          </p>
        </div>
      </section>

      {/* Execution Intelligence — the model foundation */}
      <ExecutionIntelligence />

      {/* The VCG Execution Model — Assess / Assemble / Embed / Deliver */}
      <ExecutionModel />

      {/* Engagement Structure — the 6-step process */}
      <EngagementStructure />

      {/* AI-Augmented Execution */}
      <AIExecution />

      {/* After Engagement — what changes */}
      <AfterEngagement />

      {/* CTA */}
      <CTA />
    </>
  )
}
