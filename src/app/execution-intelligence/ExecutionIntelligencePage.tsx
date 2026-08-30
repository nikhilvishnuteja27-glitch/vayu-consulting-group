'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { EIFrameworkDiagram } from '@/components/ei/EIFrameworkDiagram'
import { useContactModal } from '@/context/ContactModalContext'

const EASE = [0.16, 1, 0.3, 1] as const

/* ── Data ────────────────────────────────────────────────────── */

const DIMENSIONS = [
  {
    n: 'I',
    label: 'Accountability',
    definition: 'The unambiguous assignment of ownership for each initiative component — distinct from responsibility matrices and organizational hierarchy.',
    why: 'Distributed accountability creates a predictable failure mode: when decisions stall or workstreams drift, there is no single individual empowered and responsible to resolve them. Committees can be accountable to no one, which means they are accountable to nothing.',
    failure: 'Multiple parties believe they own the same decision. Nobody makes it. The initiative accumulates unresolved ownership conflicts that degrade execution velocity without appearing in any status report.',
    strong: 'A single named individual is accountable for each major workstream — not a team, not a committee, but a person. That person has both the authority and accountability to resolve conflicts. Their name is known before the initiative begins.',
    questions: [
      'If I asked any member of this initiative "who makes the final call on X," would I get a consistent answer?',
      'Can you name the single individual accountable for each major workstream — not the team, not the committee, but the person?',
    ],
    relationship: 'Accountability failures manifest in Executive Visibility — leadership learns about problems late because no one with genuine ownership was tracking them.',
  },
  {
    n: 'II',
    label: 'Decision Architecture',
    definition: 'The pre-established framework that determines which decisions require escalation, which require consultation, and which are permanently delegated.',
    why: 'Without decision architecture, decisions accumulate. Meetings multiply. The velocity of execution degrades as every judgment requires renegotiation. Governance structures that cannot operate at execution speed become bottlenecks.',
    failure: 'Governance lag. Decision-making structures cannot operate at the velocity required by execution. Decisions that should take hours take weeks. The initiative pauses at each junction point waiting for authority that was never formally established.',
    strong: 'Decision rights are defined before execution begins. The framework specifies escalation thresholds and permanently delegates routine decisions. The question of who decides what is answered before it needs to be answered urgently.',
    questions: [
      'How long does a decision typically wait before reaching the person with authority to make it?',
      'Are there decisions currently pending that have been awaiting resolution for more than two weeks?',
    ],
    relationship: 'Decision Architecture failures create Accountability ambiguity — when no one knows who decides, no one is accountable for the outcome. They also degrade Executive Visibility by creating bottlenecks that obscure initiative state.',
  },
  {
    n: 'III',
    label: 'Executive Visibility',
    definition: 'The structured mechanism through which leadership maintains accurate, current awareness of initiative state — without relying on voluntary information-seeking or filtered status reports.',
    why: 'When leadership relies on periodic status reports, their visibility is mediated by the optimism, selection, and interpretation of those closer to execution. They see a representation of the initiative. By the time problems are visible in the formal reporting chain, they have typically been developing for weeks.',
    failure: 'Optimism gradient. Reported status progressively deviates from actual initiative state. Leadership discovers problems late — after they have compounded. The gap between reported confidence and actual execution reality widens over time.',
    strong: 'Leadership has structured access to execution-level indicators — not filtered status reports. Escalation is structural, not dependent on whether someone chooses to surface a problem. Bad news travels upward at the same speed as good news.',
    questions: [
      'How did you learn about the most recent significant risk that emerged on this initiative?',
      'If this initiative is off track, when will you know — and how?',
    ],
    relationship: 'Executive Visibility is the observation layer for all other dimensions. It reveals failures in Accountability, Decision Architecture, Dependency Ownership, and Outcome Discipline — but only if it is structured to see them rather than relying on voluntary disclosure.',
  },
  {
    n: 'IV',
    label: 'Dependency Ownership',
    definition: 'The explicit identification and active management of cross-functional, cross-organizational, and external dependencies as primary execution variables — not secondary logistics.',
    why: 'Most execution failures occur at handoff points — between teams, phases, organizations. Dependencies are the seams of the initiative. When seams are unmanaged, they fail. Each party assumes the other is managing the dependency, and neither is.',
    failure: 'Seam failure. Execution breaks at handoff points. A workstream that was on schedule in isolation suddenly cannot proceed because a dependency — from another team, another vendor, another initiative — has not been managed as a primary concern.',
    strong: 'Each dependency has a named owner. Its current status is visible. Risks at handoff points are tracked as primary execution variables, escalated proactively, and managed with the same rigor as workstream milestones.',
    questions: [
      'Which dependencies outside your direct control could stop this initiative from delivering on its current timeline?',
      'Who owns each of those dependencies, and what is their current status?',
    ],
    relationship: 'Dependency Ownership problems often manifest as Decision Architecture failures — when a dependency risks missing, no one knows whose authority it is to escalate or resolve. They are also often invisible to Executive Visibility until they have already caused damage.',
  },
  {
    n: 'V',
    label: 'Outcome Discipline',
    definition: 'The practice of measuring progress against the original intended outcomes — not against revised delivery targets that have silently absorbed scope, time, or budget changes.',
    why: 'Initiatives drift. Targets shift. Ambitions compress. The mechanism is gradual: one small scope reduction, one timeline extension, one budget reallocation — each explained individually, each appearing reasonable in isolation. The cumulative effect is a program that completes on its revised terms while the original problem remains unsolved.',
    failure: 'Deliverable completion without outcome achievement. The initiative reaches completion. Agreed deliverables are submitted. The original business change was not produced. The definition of success was silently rewritten during execution.',
    strong: 'The definition of success is documented at the start and reviewed regularly against original intent. Changes to scope, timeline, or outcomes require explicit acknowledgment and authorization — not silent absorption into revised plans.',
    questions: [
      'Is the definition of success today the same as it was when this initiative launched?',
      'What has changed in the intended outcomes since the initiative began, and who authorized those changes?',
    ],
    relationship: 'Outcome Discipline failures are often the last to become visible — they emerge after the initiative closes. Executive Visibility should be structured to surface these deviations while correction is still possible.',
  },
]

const FAILURE_PATTERNS = [
  {
    n: '01',
    name: 'Ownership Diffusion',
    dim: 'I — Accountability',
    body: 'Accountability is distributed across multiple parties without a single point of resolution. When decisions stall or workstreams drift, there is no individual empowered to resolve them. The initiative accumulates ownership conflicts that degrade execution velocity without appearing in any status report.',
  },
  {
    n: '02',
    name: 'Governance Lag',
    dim: 'II — Decision Architecture',
    body: 'Decision-making structures cannot operate at the velocity required by execution. Decisions that should take hours take weeks. The initiative pauses at each junction, waiting for authority that was never formally established — accumulating delay that compounds into missed milestones.',
  },
  {
    n: '03',
    name: 'Optimism Gradient',
    dim: 'III — Executive Visibility',
    body: 'Reported status progressively deviates from actual initiative state. Leadership sees a representation of the initiative filtered through layers of optimism, selection, and interpretation. By the time problems are visible in formal reporting, they have typically been developing for weeks.',
  },
  {
    n: '04',
    name: 'Seam Failure',
    dim: 'IV — Dependency Ownership',
    body: 'Execution breaks at handoff points between teams, phases, or organizations. Each party assumes the other is managing the dependency. The seams of the initiative — the most structurally vulnerable points — receive the least attention until they fail.',
  },
  {
    n: '05',
    name: 'Deliverable Completion Without Outcome Achievement',
    dim: 'V — Outcome Discipline',
    body: 'Completion of agreed deliverables does not produce the intended business change. The definition of success was silently rewritten during execution — one small scope reduction, one timeline extension, one budget reallocation at a time — until the program that completed is not the program that was approved.',
  },
]

const ASSESSMENT_QUESTIONS = [
  { dim: 'Accountability',       q: 'If I asked any member of this initiative "who makes the final call on X," would I get a consistent answer?' },
  { dim: 'Accountability',       q: 'Can you name the single individual accountable for each major workstream — not the team, not the committee, but the person?' },
  { dim: 'Decision Architecture', q: 'How long does a decision typically wait before reaching the person with authority to make it?' },
  { dim: 'Decision Architecture', q: 'Are there decisions currently pending that have been awaiting resolution for more than two weeks?' },
  { dim: 'Executive Visibility', q: 'How did you learn about the most recent significant risk that emerged on this initiative?' },
  { dim: 'Executive Visibility', q: 'If this initiative is off track, when will you know — and how?' },
  { dim: 'Dependency Ownership', q: 'Which dependencies outside your direct control could stop this initiative from delivering on its current timeline?' },
  { dim: 'Dependency Ownership', q: 'Who owns each of those dependencies, and what is their current status?' },
  { dim: 'Outcome Discipline',   q: 'Is the definition of success today the same as it was when this initiative launched?' },
  { dim: 'Outcome Discipline',   q: 'What has changed in the intended outcomes since the initiative began, and who authorized those changes?' },
]

/* ── Sub-components ──────────────────────────────────────────── */

function FailurePatternRow({ fp, index }: { fp: (typeof FAILURE_PATTERNS)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.50, delay: 0.08 * index, ease: EASE }}
      style={{
        borderTop: '1px solid rgba(17,18,20,0.08)',
        paddingTop: '1.5rem',
        paddingBottom: '1.5rem',
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        gap: '1.5rem',
        alignItems: 'start',
      }}
    >
      <div style={{ paddingTop: '0.15rem', width: '2.5rem', flexShrink: 0 }}>
        <span className="font-mono" style={{ fontSize: '0.5rem', letterSpacing: '0.14em', color: '#C8A96E', opacity: 0.65 }}>{fp.n}</span>
      </div>
      <div>
        <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-2">
          <p className="font-body font-medium" style={{ fontSize: '0.9375rem', color: '#111214', letterSpacing: '-0.005em' }}>{fp.name}</p>
          <span className="font-mono" style={{ fontSize: '0.4375rem', letterSpacing: '0.14em', textTransform: 'uppercase' as const, color: '#C8A96E', opacity: 0.65 }}>{fp.dim}</span>
        </div>
        <p className="font-body font-light" style={{ fontSize: '0.875rem', lineHeight: 1.80, color: 'rgba(17,18,20,0.52)', maxWidth: '66ch' }}>{fp.body}</p>
      </div>
    </motion.div>
  )
}

function AssessmentRow({ q, index }: { q: (typeof ASSESSMENT_QUESTIONS)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.42, delay: Math.min(index * 0.04, 0.28), ease: EASE }}
      style={{
        borderTop: '1px solid rgba(17,18,20,0.07)',
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        gap: '1.25rem',
        padding: '1.125rem 0',
        alignItems: 'baseline',
      }}
    >
      <span className="font-mono" style={{ fontSize: '0.5rem', letterSpacing: '0.12em', color: 'rgba(17,18,20,0.22)', flexShrink: 0, minWidth: '2rem' }}>
        {String(index + 1).padStart(2, '0')}
      </span>
      <div>
        <p className="font-mono mb-1" style={{ fontSize: '0.4375rem', letterSpacing: '0.16em', textTransform: 'uppercase' as const, color: '#C8A96E', opacity: 0.65 }}>
          {q.dim}
        </p>
        <p className="font-body font-light" style={{ fontSize: '0.9375rem', lineHeight: 1.72, color: 'rgba(17,18,20,0.65)' }}>
          {q.q}
        </p>
      </div>
    </motion.div>
  )
}

function SectionReveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.10 })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}

function DimensionCard({ dim, index }: { dim: (typeof DIMENSIONS)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.08 })
  const isEven = index % 2 === 1

  return (
    <div
      ref={ref}
      style={{
        borderTop: '1px solid rgba(17,18,20,0.07)',
        paddingTop: 'clamp(3rem,5vw,4.5rem)',
        paddingBottom: 'clamp(3rem,5vw,4.5rem)',
      }}
    >
      {isEven ? (
        /* Even: full-width editorial layout */
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: EASE }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono" style={{ fontSize: '0.5rem', letterSpacing: '0.14em', color: '#C8A96E', opacity: 0.6 }}>{dim.n}</span>
            <span className="font-body font-medium" style={{ fontSize: '0.625rem', letterSpacing: '0.16em', textTransform: 'uppercase' as const, color: '#C8A96E' }}>{dim.label}</span>
          </div>
          <p
            className="font-display font-normal"
            style={{ fontSize: 'clamp(1.5rem, 2.6vw, 2.6rem)', lineHeight: 1.10, letterSpacing: '-0.026em', color: '#111214', maxWidth: '32ch', marginBottom: '1.5rem' }}
          >
            {dim.definition}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {[
              { label: 'Why It Matters', body: dim.why },
              { label: 'Failure Signal', body: dim.failure },
              { label: 'Strong Execution', body: dim.strong },
              { label: 'Relationship to Other Dimensions', body: dim.relationship },
            ].map(row => (
              <div key={row.label}>
                <p className="vcg-label-dark mb-2">{row.label}</p>
                <p className="font-body font-light" style={{ fontSize: '0.9rem', lineHeight: 1.80, color: 'rgba(17,18,20,0.54)' }}>{row.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 pt-6" style={{ borderTop: '1px solid rgba(17,18,20,0.07)' }}>
            <p className="vcg-label-dark mb-4">Executive Questions</p>
            {dim.questions.map((q, qi) => (
              <p key={qi} className="font-body font-light mb-3" style={{ fontSize: '0.9rem', lineHeight: 1.74, color: 'rgba(17,18,20,0.54)' }}>
                <span className="font-mono" style={{ fontSize: '0.5rem', letterSpacing: '0.14em', color: 'rgba(17,18,20,0.25)', marginRight: '0.625rem' }}>{String(qi + 1).padStart(2, '0')}</span>
                {q}
              </p>
            ))}
          </div>
        </motion.div>
      ) : (
        /* Odd: split label / content layout */
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: EASE }}
          className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8 lg:gap-16"
        >
          <div>
            <span className="font-mono block mb-2" style={{ fontSize: '0.5rem', letterSpacing: '0.14em', color: '#C8A96E', opacity: 0.6 }}>{dim.n}</span>
            <span className="font-body font-medium block" style={{ fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: '#C8A96E', lineHeight: 1.3 }}>{dim.label}</span>
          </div>
          <div>
            <p
              className="font-display font-normal mb-5"
              style={{ fontSize: 'clamp(1.3rem, 2.2vw, 2.1rem)', lineHeight: 1.14, letterSpacing: '-0.022em', color: '#111214' }}
            >
              {dim.definition}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
              {[
                { label: 'Why It Matters', body: dim.why },
                { label: 'Failure Signal', body: dim.failure },
                { label: 'Strong Execution', body: dim.strong },
                { label: 'Relationship to Other Dimensions', body: dim.relationship },
              ].map(row => (
                <div key={row.label}>
                  <p className="vcg-label-dark mb-2">{row.label}</p>
                  <p className="font-body font-light" style={{ fontSize: '0.875rem', lineHeight: 1.78, color: 'rgba(17,18,20,0.52)' }}>{row.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-5" style={{ borderTop: '1px solid rgba(17,18,20,0.07)' }}>
              <p className="vcg-label-dark mb-3">Executive Questions</p>
              {dim.questions.map((q, qi) => (
                <p key={qi} className="font-body font-light mb-3" style={{ fontSize: '0.875rem', lineHeight: 1.74, color: 'rgba(17,18,20,0.52)' }}>
                  <span className="font-mono" style={{ fontSize: '0.5rem', letterSpacing: '0.14em', color: 'rgba(17,18,20,0.22)', marginRight: '0.5rem' }}>{String(qi + 1).padStart(2, '0')}</span>
                  {q}
                </p>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}

/* ── Page ────────────────────────────────────────────────────── */

export default function ExecutionIntelligencePage() {
  const { openModal } = useContactModal()

  return (
    <>
      {/* ── 1. Hero ───────────────────────────────────────── */}
      <section style={{ background: '#0B0B0D', borderBottom: '1px solid rgba(255,255,255,0.06)', overflow: 'hidden' }}>
        {/* Dot grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(245,243,238,0.4) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
            opacity: 0.018,
            maskImage: 'radial-gradient(ellipse 80% 60% at 30% 50%, black, transparent)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 30% 50%, black, transparent)',
          }}
          aria-hidden
        />

        <div className="container-site relative" style={{ paddingTop: 'clamp(9rem,15vw,13rem)', paddingBottom: 'clamp(4.5rem,7vw,6.5rem)' }}>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-end">

            {/* Left — headline + definition */}
            <div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.55, delay: 0.20 }}
                className="vcg-label mb-7"
                style={{ letterSpacing: '0.22em' }}
              >
                Execution Intelligence
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.80, delay: 0.30, ease: EASE }}
                className="font-display font-normal mb-7"
                style={{ fontSize: 'clamp(2.2rem, 4vw, 4.2rem)', lineHeight: 1.06, letterSpacing: '-0.036em', color: '#F5F3EE' }}
              >
                Strategy defines where to go. Execution determines whether you get there.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.70, delay: 0.48, ease: EASE }}
                className="font-body font-light"
                style={{ fontSize: 'clamp(0.9375rem, 1.2vw, 1.05rem)', lineHeight: 1.84, color: 'rgba(245,243,238,0.45)', maxWidth: '50ch' }}
              >
                Execution Intelligence is the discipline of establishing and maintaining the structural conditions — ownership, decision architecture, visibility, dependency control, and outcome alignment — that determine whether an enterprise initiative delivers what it was designed to achieve.
              </motion.p>
            </div>

            {/* Right — gap flow diagram */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.55, ease: EASE }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0, maxWidth: '420px' }}>
                {/* Strategic Intent */}
                <div
                  style={{
                    padding: '1.125rem 1.375rem',
                    border: '1px solid rgba(255,255,255,0.10)',
                    borderRadius: '3px 3px 0 0',
                    background: 'rgba(255,255,255,0.04)',
                  }}
                >
                  <p className="font-mono" style={{ fontSize: '0.4375rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(245,243,238,0.30)', marginBottom: '0.3rem' }}>Starting Point</p>
                  <p className="font-body font-normal" style={{ fontSize: '0.9375rem', color: '#F5F3EE', letterSpacing: '-0.005em' }}>Strategic Intent</p>
                </div>

                {/* Gap zone */}
                <div
                  style={{
                    padding: '1.25rem 1.375rem',
                    borderLeft: '1px solid rgba(255,255,255,0.06)',
                    borderRight: '1px solid rgba(255,255,255,0.06)',
                    background: 'rgba(200,169,110,0.04)',
                    borderTop: 'none',
                    borderBottom: 'none',
                  }}
                >
                  <p className="font-mono" style={{ fontSize: '0.4375rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#C8A96E', opacity: 0.65, marginBottom: '0.625rem' }}>The Execution Gap</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                    {['Ownership fragmented', 'Decisions delayed', 'Visibility degraded', 'Dependencies unmanaged', 'Outcomes redefined'].map(item => (
                      <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                        <div style={{ width: '1px', height: '12px', background: 'rgba(200,169,110,0.25)', flexShrink: 0 }} />
                        <p className="font-body font-light" style={{ fontSize: '0.75rem', color: 'rgba(245,243,238,0.32)', lineHeight: 1.4 }}>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Delivered outcome */}
                <div
                  style={{
                    padding: '1.125rem 1.375rem',
                    border: '1px solid rgba(255,255,255,0.10)',
                    borderRadius: '0 0 3px 3px',
                    background: '#111214',
                  }}
                >
                  <p className="font-mono" style={{ fontSize: '0.4375rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(245,243,238,0.28)', marginBottom: '0.3rem' }}>End State</p>
                  <p className="font-body font-normal" style={{ fontSize: '0.9375rem', color: '#F5F3EE', letterSpacing: '-0.005em' }}>Delivered Outcome</p>
                </div>

                <p className="font-body font-light mt-4" style={{ fontSize: '0.75rem', lineHeight: 1.72, color: 'rgba(245,243,238,0.25)' }}>
                  Execution Intelligence addresses the structural conditions that determine whether strategic intent reaches delivered outcome — and whether the gap between them produces failure or controlled execution.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── 2. Framework Visual ───────────────────────────── */}
      <section style={{ background: '#FFFFFF', borderTop: '1px solid rgba(17,18,20,0.07)' }}>
        <div className="container-site" style={{ paddingTop: 'clamp(4.5rem,7vw,6.5rem)', paddingBottom: 'clamp(4.5rem,7vw,6.5rem)' }}>
          <SectionReveal>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-8 mb-10">
              <div>
                <p className="vcg-label-dark mb-5">The Five-Dimension Framework</p>
                <h2
                  className="font-display font-normal"
                  style={{ fontSize: 'clamp(1.7rem, 2.6vw, 2.7rem)', lineHeight: 1.10, letterSpacing: '-0.026em', color: '#111214', maxWidth: '28ch' }}
                >
                  Five structural dimensions that determine whether an initiative delivers what it was designed to achieve.
                </h2>
              </div>
              <div className="flex items-end">
                <p className="font-body font-light" style={{ fontSize: '0.9375rem', lineHeight: 1.82, color: 'rgba(17,18,20,0.50)', maxWidth: '46ch' }}>
                  Execution Intelligence is not a methodology. It is a diagnostic framework — a set of structural conditions whose presence or absence reliably predicts execution outcomes. The five dimensions operate simultaneously. Weakness in any one creates exposure in all others.
                </p>
              </div>
            </div>
          </SectionReveal>
          <SectionReveal delay={0.10}>
            <EIFrameworkDiagram size="full" dark={false} />
          </SectionReveal>
        </div>
      </section>

      {/* ── 3. Five Dimensions ────────────────────────────── */}
      <section style={{ background: '#F5F3EE' }}>
        <div className="container-site" style={{ paddingBottom: 'clamp(4.5rem,7vw,6.5rem)' }}>
          {DIMENSIONS.map((dim, i) => (
            <DimensionCard key={dim.n} dim={dim} index={i} />
          ))}
        </div>
      </section>

      {/* ── 4. Failure Patterns ──────────────────────────── */}
      <section style={{ background: '#FFFFFF', borderTop: '1px solid rgba(17,18,20,0.07)' }}>
        <div className="container-site" style={{ paddingTop: 'clamp(4.5rem,7vw,6.5rem)', paddingBottom: 'clamp(4.5rem,7vw,6.5rem)' }}>
          <SectionReveal>
            <p className="vcg-label-dark mb-5">Failure Patterns</p>
            <h2
              className="font-display font-normal mb-12"
              style={{ fontSize: 'clamp(1.7rem, 2.6vw, 2.7rem)', lineHeight: 1.10, letterSpacing: '-0.026em', color: '#111214', maxWidth: '32ch' }}
            >
              Five patterns account for most enterprise execution failures.
            </h2>
          </SectionReveal>
          <div>
            {FAILURE_PATTERNS.map((fp, i) => (
              <FailurePatternRow key={fp.n} fp={fp} index={i} />
            ))}
            <div style={{ borderTop: '1px solid rgba(17,18,20,0.08)' }} />
          </div>
        </div>
      </section>

      {/* ── 5. Executive Self-Assessment ─────────────────── */}
      <section style={{ background: '#FFFFFF', borderTop: '1px solid rgba(17,18,20,0.07)' }}>
        <div className="container-site" style={{ paddingTop: 'clamp(4.5rem,7vw,6.5rem)', paddingBottom: 'clamp(4.5rem,7vw,6.5rem)' }}>
          <SectionReveal>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-8 mb-10">
              <div>
                <p className="vcg-label-dark mb-5">Executive Self-Assessment</p>
                <h2
                  className="font-display font-normal"
                  style={{ fontSize: 'clamp(1.7rem, 2.6vw, 2.7rem)', lineHeight: 1.10, letterSpacing: '-0.026em', color: '#111214', maxWidth: '28ch' }}
                >
                  Questions worth asking before the initiative reaches a critical threshold.
                </h2>
              </div>
              <div className="flex items-end">
                <p className="font-body font-light" style={{ fontSize: '0.9375rem', lineHeight: 1.82, color: 'rgba(17,18,20,0.46)', maxWidth: '44ch' }}>
                  These questions are not a scoring instrument or a maturity model. They are a structured diagnostic — a set of questions that surface structural gaps before they become execution failures. They require honest answers, not optimistic ones.
                </p>
              </div>
            </div>
          </SectionReveal>

          <div>
            {ASSESSMENT_QUESTIONS.map((q, i) => (
              <AssessmentRow key={i} q={q} index={i} />
            ))}
            <div style={{ borderTop: '1px solid rgba(17,18,20,0.07)' }} />
          </div>
        </div>
      </section>

      {/* ── 6. AI Role ───────────────────────────────────── */}
      <section style={{ background: '#0B0B0D', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container-site" style={{ paddingTop: 'clamp(4.5rem,7vw,6.5rem)', paddingBottom: 'clamp(4.5rem,7vw,6.5rem)' }}>
          <SectionReveal>
            <p className="vcg-label mb-5">AI and Execution</p>
            <h2
              className="font-display font-normal mb-8"
              style={{ fontSize: 'clamp(1.7rem, 2.6vw, 2.7rem)', lineHeight: 1.10, letterSpacing: '-0.026em', color: '#F5F3EE', maxWidth: '32ch' }}
            >
              AI improves execution intelligence. Human leadership remains accountable for execution decisions.
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-16">
            <SectionReveal delay={0.08}>
              <div style={{ paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                <p className="font-body font-medium mb-5" style={{ fontSize: '0.625rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(245,243,238,0.40)' }}>
                  Where AI Supports Execution Intelligence
                </p>
                {[
                  'Synthesis of initiative-level information into structured visibility',
                  'Risk pattern identification across dependency chains',
                  'Status normalization and anomaly surfacing across workstreams',
                  'Decision preparation — assembling relevant context for specific judgments',
                  'Executive reporting — translating execution-level data into leadership-level signals',
                  'Knowledge retrieval — recovering prior decisions, constraints, and commitments',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 mb-4">
                    <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(245,243,238,0.22)', flexShrink: 0, marginTop: '0.55em' }} />
                    <p className="font-body font-light" style={{ fontSize: '0.9rem', lineHeight: 1.72, color: 'rgba(245,243,238,0.45)' }}>{item}</p>
                  </div>
                ))}
              </div>
            </SectionReveal>

            <SectionReveal delay={0.14}>
              <div style={{ paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.14)', marginTop: '1.5rem' }} className="md:mt-0">
                <p className="font-body font-medium mb-5" style={{ fontSize: '0.625rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#C8A96E' }}>
                  What Human Leadership Retains
                </p>
                {[
                  'Judgment — the application of experience to ambiguous situations',
                  'Decisions — the exercise of authority and accountability for choices made',
                  'Tradeoffs — the resolution of competing legitimate interests',
                  'Escalation — the determination of when a situation requires higher authority',
                  'Stakeholder alignment — the relational and political dimensions of execution',
                  'Accountability — the personal ownership of outcomes regardless of AI involvement',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 mb-4">
                    <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(200,169,110,0.55)', flexShrink: 0, marginTop: '0.55em' }} />
                    <p className="font-body font-normal" style={{ fontSize: '0.9rem', lineHeight: 1.72, color: '#F5F3EE' }}>{item}</p>
                  </div>
                ))}
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ── 7. EI vs VCG Model ───────────────────────────── */}
      <section style={{ background: '#FFFFFF', borderTop: '1px solid rgba(17,18,20,0.07)' }}>
        <div className="container-site" style={{ paddingTop: 'clamp(4.5rem,7vw,6.5rem)', paddingBottom: 'clamp(4.5rem,7vw,6.5rem)' }}>
          <SectionReveal>
            <p className="vcg-label-dark mb-5">Two Distinct Things</p>
            <h2
              className="font-display font-normal mb-10"
              style={{ fontSize: 'clamp(1.7rem, 2.6vw, 2.7rem)', lineHeight: 1.10, letterSpacing: '-0.026em', color: '#111214', maxWidth: '32ch' }}
            >
              Execution Intelligence defines what must be true. The VCG model defines how VCG makes it true.
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <SectionReveal delay={0.08}>
              <div style={{ paddingTop: '2rem', paddingRight: '2rem', borderTop: '2px solid rgba(17,18,20,0.12)', paddingBottom: '2.5rem' }}>
                <p className="font-mono mb-4" style={{ fontSize: '0.5rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(17,18,20,0.36)' }}>Execution Intelligence</p>
                <p
                  className="font-display font-normal mb-4"
                  style={{ fontSize: 'clamp(1.25rem, 2vw, 2rem)', lineHeight: 1.14, letterSpacing: '-0.018em', color: '#111214' }}
                >
                  The structural conditions for reliable execution.
                </p>
                <p className="font-body font-light" style={{ fontSize: '0.9rem', lineHeight: 1.80, color: 'rgba(17,18,20,0.50)', maxWidth: '42ch' }}>
                  A diagnostic framework that identifies the five structural dimensions — Accountability, Decision Architecture, Executive Visibility, Dependency Ownership, and Outcome Discipline — whose presence or absence reliably determines whether enterprise initiatives deliver intended outcomes.
                </p>
                <p className="font-body font-light mt-4" style={{ fontSize: '0.9rem', lineHeight: 1.80, color: 'rgba(17,18,20,0.50)', maxWidth: '42ch' }}>
                  Execution Intelligence is not a VCG product. It is a field of practice — applicable to any organization managing complex initiatives, regardless of who is involved in execution.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.14}>
              <div
                style={{
                  paddingTop: '2rem',
                  paddingLeft: '2rem',
                  borderTop: '2px solid #C8A96E',
                  paddingBottom: '2.5rem',
                  borderLeft: '1px solid rgba(17,18,20,0.07)',
                }}
              >
                <p className="font-mono mb-4" style={{ fontSize: '0.5rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#C8A96E', opacity: 0.80 }}>VCG Execution Model</p>
                <p
                  className="font-display font-normal mb-4"
                  style={{ fontSize: 'clamp(1.25rem, 2vw, 2rem)', lineHeight: 1.14, letterSpacing: '-0.018em', color: '#111214' }}
                >
                  How VCG establishes and maintains those conditions.
                </p>
                <p className="font-body font-light" style={{ fontSize: '0.9rem', lineHeight: 1.80, color: 'rgba(17,18,20,0.50)', maxWidth: '42ch' }}>
                  VCG's engagement model — Assess → Assemble → Embed → Deliver — is designed specifically to establish the five EI dimensions in each initiative and maintain them through delivery. Each phase serves a structural purpose, not a project management function.
                </p>
                <Link
                  href="/how-we-work"
                  className="inline-flex items-center gap-2 font-body font-normal transition-colors duration-200 group mt-5"
                  style={{ fontSize: '0.8125rem', color: 'rgba(17,18,20,0.36)', textDecoration: 'none' }}
                  onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = '#111214'}
                  onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(17,18,20,0.36)'}
                >
                  See How VCG Works
                  <ArrowRight size={12} strokeWidth={1.5} className="transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ── 8. CTA ───────────────────────────────────────── */}
      <section style={{ background: '#0B0B0D', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div
          className="absolute left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg,transparent,rgba(255,255,255,0.07) 40%,rgba(255,255,255,0.10) 50%,rgba(255,255,255,0.07) 60%,transparent)' }}
          aria-hidden
        />
        <div className="container-site" style={{ paddingTop: 'clamp(5rem,9vw,8rem)', paddingBottom: 'clamp(5rem,9vw,8rem)' }}>
          <SectionReveal>
            <p className="vcg-label mb-6">Start Here</p>
            <h2
              className="font-display font-normal mb-6"
              style={{ fontSize: 'clamp(2.2rem, 4.2vw, 4.5rem)', lineHeight: 1.05, letterSpacing: '-0.038em', color: '#F5F3EE', maxWidth: '22ch' }}
            >
              When execution becomes the constraint.
            </h2>
            <p className="font-body font-light mb-9" style={{ fontSize: '1rem', lineHeight: 1.82, color: 'rgba(245,243,238,0.40)', maxWidth: '48ch' }}>
              Every VCG engagement begins with a confidential assessment of the initiative and what structural conditions are missing. The conversation is the starting point — not a proposal, not a pitch.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <button onClick={openModal} className="btn-primary">
                Discuss Your Initiative
              </button>
              <Link
                href="/how-we-work"
                className="inline-flex items-center gap-2 font-body font-normal transition-colors duration-200 group"
                style={{ fontSize: '0.875rem', color: 'rgba(245,243,238,0.26)', textDecoration: 'none' }}
                onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(245,243,238,0.60)'}
                onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(245,243,238,0.26)'}
              >
                See How VCG Works
                <ArrowRight size={13} strokeWidth={1.5} className="transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  )
}
