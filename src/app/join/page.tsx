import type { Metadata } from 'next'
import type { CSSProperties, ReactNode } from 'react'
import { TalentForm } from '@/components/sections/TalentForm'

export const metadata: Metadata = {
  title: 'Join VCG — Vayu Consulting Group',
  description:
    'The VCG professional network connects senior operators, transformation executives, program managers, and specialists with enterprise engagements that require demonstrated delivery capability.',
  alternates: {
    canonical: 'https://vayuconsultinggroup.com/join',
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
  color: 'rgba(17,18,20,0.58)',
  marginTop: '0.75rem',
}

const liStyle: CSSProperties = {
  fontSize: '0.9375rem',
  lineHeight: 1.82,
  color: 'rgba(17,18,20,0.58)',
  marginBottom: '0.5rem',
}

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

// ── Page ─────────────────────────────────────────────────────

export default function JoinPage() {
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
          <p className="vcg-label" style={{ marginBottom: '1.25rem' }}>Professional Network</p>
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
            Join the VCG Network
          </h1>
          <p
            className="font-body font-light"
            style={{ fontSize: '1rem', lineHeight: 1.78, color: 'rgba(245,243,238,0.44)', maxWidth: '50ch' }}
          >
            VCG builds its engagements from a network of senior professionals with verified delivery experience. If you have operated at the level where execution accountability is real, we would like to hear from you.
          </p>
        </div>
      </section>

      {/* Informational content */}
      <section style={{ background: '#FFFFFF' }}>
        <div
          className="container-site"
          style={{
            paddingTop: 'clamp(3.5rem, 6vw, 5.5rem)',
            paddingBottom: 'clamp(3rem, 5vw, 4.5rem)',
          }}
        >
          <div style={{ maxWidth: '720px' }}>

            <S n="1" title="What the VCG Network Is" first>
              <P>The VCG professional network is a roster of senior operators, transformation executives, program managers, delivery leaders, and specialists whose experience and capabilities are reviewed for alignment with VCG&rsquo;s delivery standards and client requirements.</P>
              <P>Network membership is not a job offer or a guarantee of placement. It is a professional relationship that positions the right people for the right engagements when those engagements arise. Placement depends on actual client and project demand — not on submission alone.</P>
            </S>

            <S n="2" title="Who VCG Looks For">
              <P>VCG seeks professionals who have been directly accountable for delivering outcomes — not advising on them, not supporting those who are, but personally responsible for results in senior operational roles.</P>
              <P>Relevant experience typically includes one or more of:</P>
              <ul style={{ marginTop: '1rem', paddingLeft: '1.375rem', listStyleType: 'disc' }}>
                <li style={liStyle}>Enterprise transformation and program leadership</li>
                <li style={liStyle}>Program recovery and delivery reset</li>
                <li style={liStyle}>AI adoption, enterprise technology delivery, and digital transformation</li>
                <li style={liStyle}>Operating model design and operational scaling</li>
                <li style={liStyle}>Transformation governance, PMO leadership, and accountability infrastructure</li>
                <li style={liStyle}>Organizational change management at scale</li>
                <li style={{ ...liStyle, marginBottom: 0 }}>Workstream and domain delivery leadership within complex programs</li>
              </ul>
              <P>Senior experience is required. VCG engagements are high-stakes, time-sensitive, and accountability-driven.</P>
            </S>

            <S n="3" title="Candidate Expectations">
              <P>VCG&rsquo;s operating standard is direct accountability for outcomes. Network professionals are expected to operate with clarity about what they own, make decisions rather than defer them, and remain present and accountable through to delivery.</P>
              <P>Engagements are project-based. Duration and structure are defined by each initiative. VCG does not represent ongoing employment.</P>
            </S>

          </div>
        </div>
      </section>

      {/* Candidate submission form */}
      <section style={{ background: '#F5F3EE', borderTop: '1px solid rgba(17,18,20,0.07)' }}>
        <div
          className="container-site"
          style={{
            paddingTop: 'clamp(3.5rem, 6vw, 5.5rem)',
            paddingBottom: 'clamp(4.5rem, 8vw, 7.5rem)',
          }}
        >
          <div style={{ maxWidth: '760px' }}>
            <p className="vcg-label-dark" style={{ marginBottom: '1.25rem' }}>Submit Your Profile</p>
            <h2
              className="font-display font-normal"
              style={{ fontSize: 'clamp(1.5rem, 2.4vw, 2.25rem)', lineHeight: 1.1, letterSpacing: '-0.022em', color: '#111214', marginBottom: '0.875rem', maxWidth: '30ch' }}
            >
              Express your interest.
            </h2>
            <p className="font-body font-light" style={{ fontSize: '0.9375rem', lineHeight: 1.80, color: 'rgba(17,18,20,0.52)', marginBottom: '2.5rem', maxWidth: '54ch' }}>
              All submissions are reviewed. We respond to profiles that align with current and anticipated engagement needs. All inquiries are treated confidentially.
            </p>
            <TalentForm />
          </div>
        </div>
      </section>
    </>
  )
}
