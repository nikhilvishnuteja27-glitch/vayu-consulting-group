import type { Metadata } from 'next'
import type { CSSProperties, ReactNode } from 'react'
import { CTA } from '@/components/sections/CTA'

export const metadata: Metadata = {
  title: 'What We Do — Vayu Consulting Group',
  description:
    'VCG engages through three paths: Consulting & Transformation, Project & Delivery Teams, and Specialized Talent. Each structured around what the initiative actually requires.',
  alternates: {
    canonical: 'https://vayuconsultinggroup.com/what-we-do',
  },
}

// ── Style constants ──────────────────────────────────────────

const headingStyle: CSSProperties = {
  fontWeight: 500,
  fontSize: '1rem',
  letterSpacing: '-0.010em',
  color: '#111214',
  marginBottom: '0.875rem',
}

const pStyle: CSSProperties = {
  fontSize: '0.9375rem',
  lineHeight: 1.82,
  color: 'rgba(17,18,20,0.56)',
}

function P({ children }: { children: ReactNode }) {
  return <p className="font-body font-light" style={pStyle}>{children}</p>
}

// ── Page ─────────────────────────────────────────────────────

export default function WhatWeDoPage() {
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
          <p className="vcg-label" style={{ marginBottom: '1.25rem' }}>Engagement Model</p>
          <h1
            className="font-display font-normal"
            style={{
              fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
              lineHeight: 1.06,
              letterSpacing: '-0.030em',
              color: '#F5F3EE',
              marginBottom: '1.5rem',
              maxWidth: '22ch',
            }}
          >
            What We Do
          </h1>
          <p
            className="font-body font-light"
            style={{ fontSize: '1rem', lineHeight: 1.78, color: 'rgba(245,243,238,0.44)', maxWidth: '52ch' }}
          >
            VCG engages through three distinct paths. The work determines the structure. Every engagement begins with the same question: what does this initiative need to succeed?
          </p>
        </div>
      </section>

      {/* Primary path — Consulting & Transformation */}
      <section style={{ background: '#FFFFFF', borderTop: '1px solid rgba(17,18,20,0.05)' }}>
        <div
          className="container-site"
          style={{
            paddingTop: 'clamp(3.5rem, 6vw, 5.5rem)',
            paddingBottom: 'clamp(3.5rem, 6vw, 5.5rem)',
          }}
        >
          <div style={{ maxWidth: '900px' }}>

            <div id="consulting">
              <div className="flex items-center gap-4 mb-6">
                <span
                  className="font-mono"
                  style={{ fontSize: '0.5625rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(17,18,20,0.26)', fontWeight: 400 }}
                >
                  01
                </span>
                <span
                  className="font-body"
                  style={{ fontSize: '0.625rem', letterSpacing: '0.16em', textTransform: 'uppercase', fontWeight: 500, color: 'rgba(17,18,20,0.36)' }}
                >
                  Primary Engagement Model
                </span>
              </div>
              <h2
                className="font-display font-normal"
                style={{ fontSize: 'clamp(1.8rem, 3vw, 2.75rem)', lineHeight: 1.08, letterSpacing: '-0.026em', color: '#111214', marginBottom: '1.25rem', maxWidth: '28ch' }}
              >
                Consulting &amp; Transformation
              </h2>
              <P>Embedded execution leadership for organizations facing enterprise transformation, program recovery, operating model change, or strategic initiative delivery. VCG assumes delivery accountability — not an advisory role — from initiation through verified outcome. Senior operators embedded inside your environment, accountable for results.</P>
            </div>

            {/* Capability areas grid */}
            <div style={{ marginTop: '2.5rem' }}>
              <p className="vcg-label-dark" style={{ marginBottom: '1.5rem' }}>Capability Areas</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-0">
                {[
                  {
                    title: 'Enterprise Transformation',
                    body: 'Multi-year change programs requiring embedded execution leadership — not external advisors observing from a distance.',
                  },
                  {
                    title: 'Program Recovery',
                    body: 'Critical initiatives that have lost momentum, direction, or accountability — requiring immediate intervention and delivery continuity.',
                  },
                  {
                    title: 'AI Adoption & Enterprise AI Execution',
                    body: 'Organizations deploying AI capabilities at scale, requiring delivery leadership that understands both the technology and the organizational complexity surrounding it.',
                  },
                  {
                    title: 'Operating Model Execution',
                    body: 'Organizations scaling operations faster than their execution infrastructure allows — requiring governance and delivery capability deployed immediately.',
                  },
                  {
                    title: 'Transformation Governance & PMO',
                    body: 'Building or rebuilding the accountability structures that make major initiatives consistently deliverable — from first milestone to final outcome.',
                  },
                  {
                    title: 'Leadership Augmentation',
                    body: 'Senior execution leadership embedded into a critical initiative immediately — without the timeline, cost, and risk of a permanent hire.',
                  },
                ].map(item => (
                  <div key={item.title} style={{ paddingTop: '1.25rem', paddingBottom: '1.25rem', borderTop: '1px solid rgba(17,18,20,0.07)' }}>
                    <p className="font-body" style={{ fontWeight: 500, fontSize: '0.875rem', color: '#111214', marginBottom: '0.375rem', letterSpacing: '-0.005em' }}>
                      {item.title}
                    </p>
                    <P>{item.body}</P>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Secondary paths */}
      <section style={{ background: '#F5F3EE', borderTop: '1px solid rgba(17,18,20,0.07)' }}>
        <div
          className="container-site"
          style={{
            paddingTop: 'clamp(3.5rem, 6vw, 5.5rem)',
            paddingBottom: 'clamp(3.5rem, 6vw, 5.5rem)',
          }}
        >
          <p className="vcg-label-dark" style={{ marginBottom: '1.5rem' }}>Additional Capability Paths</p>

          <div style={{ maxWidth: '900px' }}>

            {/* Path 02 */}
            <div id="delivery-teams" style={{ paddingBottom: '3rem', borderBottom: '1px solid rgba(17,18,20,0.07)' }}>
              <div className="flex items-center gap-4 mb-5">
                <span className="font-mono" style={{ fontSize: '0.5625rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(17,18,20,0.26)', fontWeight: 400 }}>02</span>
              </div>
              <h2 className="font-body" style={headingStyle}>Project &amp; Delivery Teams</h2>
              <P>Purpose-built teams assembled around complex programs, workstreams, and enterprise initiatives. VCG constructs the exact combination of expertise an initiative requires — the right specialists, at the right seniority, with the right accountability structure.</P>
              <div style={{ marginTop: '1.25rem' }}>
                <P>Organizations engage this path when an initiative requires more than a single embedded leader — when a program demands a coordinated team with defined accountability, embedded delivery infrastructure, and the capacity to execute across multiple workstreams simultaneously.</P>
              </div>
              <ul style={{ marginTop: '1.25rem', paddingLeft: '1.25rem', listStyleType: 'disc' }}>
                {[
                  'Enterprise programs requiring multi-workstream delivery leadership',
                  'Technical delivery programs where execution and organizational complexity intersect',
                  'Transformation initiatives requiring both program governance and embedded operators',
                  'Programs where existing teams need delivery infrastructure and accountability structure built around them',
                ].map((item, i) => (
                  <li key={i} className="font-body font-light" style={{ fontSize: '0.9375rem', lineHeight: 1.78, color: 'rgba(17,18,20,0.54)', marginBottom: '0.375rem' }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Path 03 */}
            <div id="specialized-talent" style={{ paddingTop: '3rem' }}>
              <div className="flex items-center gap-4 mb-5">
                <span className="font-mono" style={{ fontSize: '0.5625rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(17,18,20,0.26)', fontWeight: 400 }}>03</span>
              </div>
              <h2 className="font-body" style={headingStyle}>Specialized Talent</h2>
              <P>Individual professional capability for organizations that need targeted expertise, additional capacity, or specialist skills on a defined engagement — without the timeline, cost, and risk of a permanent hire.</P>
              <div style={{ marginTop: '1.25rem' }}>
                <P>VCG professionals placed through this path carry the same operating standards as those in full consulting engagements. Delivery focus and accountability are not relaxed by the engagement structure.</P>
                <div style={{ marginTop: '1.25rem', padding: '1.25rem 1.5rem', background: 'rgba(17,18,20,0.04)', borderRadius: '4px', border: '1px solid rgba(17,18,20,0.07)' }}>
                  <p className="font-body font-light" style={{ fontSize: '0.875rem', lineHeight: 1.75, color: 'rgba(17,18,20,0.50)' }}>
                    <strong style={{ fontWeight: 500, color: '#111214' }}>This path is not</strong> a general staffing or workforce augmentation service. Specialized Talent engagements are for organizations that need a specific, senior-level professional with defined delivery experience — not general headcount.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </>
  )
}
