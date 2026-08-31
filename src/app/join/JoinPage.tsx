'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { TalentForm } from '@/components/sections/TalentForm'

const EASE = [0.16, 1, 0.3, 1] as const

/* ── Data ────────────────────────────────────────────────────── */

const DIMENSIONS = [
  {
    name: 'Ownership',
    body: 'Takes responsibility for outcomes beyond the immediate task. When the path ahead is unclear, creates clarity rather than waiting for it. Does not transfer accountability to process, ambiguity, or the organization.',
  },
  {
    name: 'Judgment',
    body: 'Can operate effectively when information is incomplete and tradeoffs are real. Knows when to decide, when to escalate, and how to distinguish between productive caution and avoidance.',
  },
  {
    name: 'Execution Discipline',
    body: 'Turns direction into structured action. Manages complexity without creating administrative overhead. Keeps work moving when the environment resists it.',
  },
  {
    name: 'Communication',
    body: 'Makes complexity understandable to the people who need to act on it. Adapts precision to the audience. Does not confuse output volume with clarity of message.',
  },
  {
    name: 'Professional Depth',
    body: 'Brings meaningful functional, technical, program, or domain capability — grounded in direct delivery experience rather than advisory or academic background alone.',
  },
  {
    name: 'Adaptability',
    body: 'Can operate effectively across different organizations, industries, and enterprise environments without requiring extensive onboarding to become useful.',
  },
]

const CAPABILITY_AREAS = [
  {
    group: 'Transformation & Program Leadership',
    items: [
      'Transformation leadership and program direction',
      'Program and project management',
      'PMO leadership and governance infrastructure',
      'Business analysis and requirements definition',
      'Organizational change and adoption',
      'Workstream delivery leadership',
    ],
  },
  {
    group: 'Technology & Digital Delivery',
    items: [
      'Enterprise technology and systems implementation',
      'Cloud migration and infrastructure programs',
      'Data and analytics delivery',
      'AI adoption and deployment',
      'Product and platform delivery',
      'Enterprise architecture',
      'Engineering delivery leadership',
    ],
  },
  {
    group: 'Functional & Specialized Expertise',
    items: [
      'Finance, operations, and supply chain transformation',
      'Risk, compliance, and regulatory programs',
      'HR and talent programs',
      'Strategy-to-execution translation',
      'Specialized domain and industry leadership',
    ],
  },
]

const ENGAGEMENT_MODELS = [
  {
    name: 'Consulting Engagement',
    body: 'Work directly on VCG-led consulting and transformation engagements as an embedded member of the delivery team. VCG manages client accountability. You own the workstream or domain assigned.',
  },
  {
    name: 'Project & Delivery Assignment',
    body: 'Placed within a client initiative as part of a purpose-built delivery team assembled by VCG. Scope is project-defined. Duration is set by initiative requirements.',
  },
  {
    name: 'Specialized Contribution',
    body: 'Deployed for a specific domain, functional, or technical need within an initiative where specialized depth is the primary requirement. Engagement is structured around the defined need.',
  },
]

const STANDARD = [
  {
    claim: 'Own the outcome, not just the task.',
    body: 'Delivery accountability cannot be transferred to process, meeting cadence, or organizational complexity. What you are accountable for, you own — from start to verified completion.',
  },
  {
    claim: 'Surface issues before they become problems.',
    body: 'Early, accurate visibility is a professional obligation — not an optional leadership style. An issue identified late costs more to resolve and compromises the people who needed to know sooner.',
  },
  {
    claim: 'Communicate with precision.',
    body: 'The people around you need accurate information to make good decisions. Ambiguity created by imprecise communication is a delivery risk that compounds.',
  },
  {
    claim: 'Work across organizational boundaries.',
    body: 'Most execution breakdowns cross functional lines. The ability to operate effectively with people who do not report to you is not a soft skill — it is a delivery requirement.',
  },
  {
    claim: 'Use evidence, not optimism.',
    body: 'Progress is assessed against observable fact, not the plan as intended. Optimism without evidence is a form of risk concealment that erodes the trust the engagement depends on.',
  },
  {
    claim: 'Leave the environment stronger.',
    body: 'Clients and teams you work within should have better capability, process, or structure after the engagement than before it. The work does not leave with you.',
  },
]

const EXPECTATIONS = [
  {
    n: '01',
    text: 'Clear engagement context before commitment. VCG will provide accurate information about the engagement, client environment, and scope before asking for your commitment.',
  },
  {
    n: '02',
    text: 'Defined role and accountability. Before any engagement begins, your scope of ownership, reporting structure, and expectations will be agreed upon and documented.',
  },
  {
    n: '03',
    text: 'Professional communication throughout. VCG will communicate honestly about the status of any opportunity — including when it does not proceed or when timing shifts.',
  },
  {
    n: '04',
    text: 'Respect for professional expertise. VCG engages professionals for their capability. That expertise is the starting point, not a position to be overridden.',
  },
  {
    n: '05',
    text: 'Transparent next steps. After your profile is submitted, you will know what to expect, including realistic timelines for review and follow-up.',
  },
  {
    n: '06',
    text: 'No commitment without clarity. VCG will not ask you to agree to an engagement without clarity on the client, scope, structure, and terms.',
  },
]

/* ── Sub-components ──────────────────────────────────────────── */

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.10 })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 14 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}

function StandardRow({ s, index }: { s: (typeof STANDARD)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.12 })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.50, delay: index * 0.06, ease: EASE }}
      style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        paddingTop: '1.375rem',
        paddingBottom: '1.375rem',
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '0.75rem',
      }}
      className="md:grid-cols-[240px_1fr] md:gap-10"
    >
      <p
        className="font-body font-medium"
        style={{ fontSize: '0.875rem', color: '#F5F3EE', letterSpacing: '-0.004em', lineHeight: 1.35 }}
      >
        {s.claim}
      </p>
      <p
        className="font-body font-light"
        style={{ fontSize: '0.875rem', lineHeight: 1.82, color: 'rgba(245,243,238,0.44)' }}
      >
        {s.body}
      </p>
    </motion.div>
  )
}

/* ── Page ────────────────────────────────────────────────────── */

export default function JoinPage() {
  const dimRef   = useRef<HTMLElement>(null)
  const dimInView = useInView(dimRef,   { once: true, amount: 0.08 })
  const capRef   = useRef<HTMLElement>(null)
  const capInView = useInView(capRef,   { once: true, amount: 0.08 })
  const modRef   = useRef<HTMLElement>(null)
  const modInView = useInView(modRef,   { once: true, amount: 0.08 })
  const expRef   = useRef<HTMLElement>(null)
  const expInView = useInView(expRef,   { once: true, amount: 0.08 })

  return (
    <>
      {/* ── 1. Hero — Obsidian ───────────────────────────── */}
      <section style={{ background: '#0B0B0D', overflow: 'hidden', position: 'relative' }}>
        <div
          aria-hidden
          style={{
            position: 'absolute',
            top: 0,
            right: '8%',
            bottom: 0,
            width: '1px',
            background: 'linear-gradient(180deg, transparent 0%, rgba(200,169,110,0.12) 40%, rgba(200,169,110,0.12) 60%, transparent 100%)',
          }}
        />
        <div
          className="container-site"
          style={{ paddingTop: 'clamp(8rem,14vw,12rem)', paddingBottom: 'clamp(4rem,6vw,6rem)', position: 'relative', zIndex: 1 }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.55, delay: 0.20 }}
            className="vcg-label"
            style={{ marginBottom: '1.75rem' }}
          >
            Join VCG
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.80, delay: 0.30, ease: EASE }}
            className="font-display font-normal"
            style={{
              fontSize: 'clamp(2.6rem, 4.6vw, 5rem)',
              lineHeight: 1.04,
              letterSpacing: '-0.038em',
              color: '#F5F3EE',
              marginBottom: '1.5rem',
              maxWidth: '20ch',
            }}
          >
            The work VCG takes on demands people who can own it.
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.60, delay: 0.46, ease: EASE }}
            style={{
              width: 'clamp(2rem,4vw,3.5rem)',
              height: '1px',
              background: 'rgba(200,169,110,0.40)',
              marginBottom: '1.5rem',
              transformOrigin: 'left',
            }}
            aria-hidden
          />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.70, delay: 0.56, ease: EASE }}
            className="font-body font-light"
            style={{ fontSize: '1rem', lineHeight: 1.82, color: 'rgba(245,243,238,0.42)', maxWidth: '54ch' }}
          >
            VCG connects experienced consulting, transformation, delivery, and technology professionals with enterprise initiatives that require demonstrated execution capability. This is not a job board. It is a professional relationship built around the quality of the work.
          </motion.p>
        </div>
      </section>

      {/* ── 2. Who VCG Looks For — Warm White ────────────── */}
      <section ref={dimRef} style={{ background: '#F5F3EE', borderTop: '1px solid rgba(17,18,20,0.07)' }}>
        <div
          className="container-site"
          style={{ paddingTop: 'clamp(4rem,6vw,6rem)', paddingBottom: 'clamp(4rem,6vw,6rem)' }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20">
            {/* Left */}
            <Reveal>
              <div>
                <p className="vcg-label-dark" style={{ marginBottom: '1.25rem' }}>Professional Profile</p>
                <h2
                  className="font-display font-normal"
                  style={{
                    fontSize: 'clamp(1.6rem, 2.4vw, 2.4rem)',
                    lineHeight: 1.10,
                    letterSpacing: '-0.024em',
                    color: '#111214',
                    maxWidth: '22ch',
                    marginBottom: '1.25rem',
                  }}
                >
                  Six characteristics that define the professionals VCG seeks.
                </h2>
                <p
                  className="font-body font-light"
                  style={{ fontSize: '0.875rem', lineHeight: 1.80, color: 'rgba(17,18,20,0.46)', maxWidth: '32ch' }}
                >
                  These are not assessment criteria or HR competencies. They are the observable qualities that determine whether a professional can operate effectively inside the kind of work VCG does.
                </p>
              </div>
            </Reveal>
            {/* Right — staggered grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
              {DIMENSIONS.map((d, i) => (
                <motion.div
                  key={d.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={dimInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.55, delay: 0.10 + i * 0.06, ease: EASE }}
                  style={{
                    padding: '1.5rem 0',
                    paddingRight: i % 2 === 0 ? '2rem' : '0',
                    paddingLeft: i % 2 === 1 ? '2rem' : '0',
                    borderTop: '1px solid rgba(17,18,20,0.08)',
                    borderLeft: i % 2 === 1 ? '1px solid rgba(17,18,20,0.08)' : 'none',
                  }}
                >
                  <p
                    className="font-body font-medium"
                    style={{ fontSize: '0.875rem', color: '#111214', letterSpacing: '-0.005em', marginBottom: '0.625rem' }}
                  >
                    {d.name}
                  </p>
                  <p
                    className="font-body font-light"
                    style={{ fontSize: '0.875rem', lineHeight: 1.80, color: 'rgba(17,18,20,0.50)' }}
                  >
                    {d.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Capability Landscape — White ──────────────── */}
      <section ref={capRef} style={{ background: '#FFFFFF', borderTop: '1px solid rgba(17,18,20,0.08)' }}>
        <div
          className="container-site"
          style={{ paddingTop: 'clamp(4rem,6vw,6rem)', paddingBottom: 'clamp(4rem,6vw,6rem)' }}
        >
          <Reveal>
            <div style={{ marginBottom: '2.5rem' }}>
              <p className="vcg-label-dark" style={{ marginBottom: '1.25rem' }}>Capability Areas</p>
              <h2
                className="font-display font-normal"
                style={{
                  fontSize: 'clamp(1.6rem, 2.4vw, 2.4rem)',
                  lineHeight: 1.10,
                  letterSpacing: '-0.024em',
                  color: '#111214',
                  marginBottom: '0.875rem',
                  maxWidth: '36ch',
                }}
              >
                Where VCG may engage specialized professionals.
              </h2>
              <p
                className="font-body font-light"
                style={{ fontSize: '0.875rem', lineHeight: 1.78, color: 'rgba(17,18,20,0.44)', maxWidth: '58ch' }}
              >
                This represents the landscape of capability VCG&rsquo;s work may require — not a current listing of open roles. Specific engagement opportunities depend on active client and program demand.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {CAPABILITY_AREAS.map((area, ai) => (
              <motion.div
                key={area.group}
                initial={{ opacity: 0, y: 10 }}
                animate={capInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.58, delay: 0.12 + ai * 0.08, ease: EASE }}
                style={{
                  paddingTop: '1.75rem',
                  paddingBottom: '1.75rem',
                  paddingRight: '2rem',
                  paddingLeft: ai > 0 ? '2rem' : '0',
                  borderTop: '2px solid rgba(17,18,20,0.10)',
                  borderLeft: ai > 0 ? '1px solid rgba(17,18,20,0.07)' : 'none',
                }}
              >
                <p
                  className="font-body font-medium"
                  style={{ fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#111214', marginBottom: '1rem' }}
                >
                  {area.group}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                  {area.items.map((item) => (
                    <div
                      key={item}
                      style={{
                        padding: '0.5rem 0',
                        borderTop: '1px solid rgba(17,18,20,0.05)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.625rem',
                      }}
                    >
                      <div
                        style={{ width: '3px', height: '3px', borderRadius: '50%', background: 'rgba(17,18,20,0.20)', flexShrink: 0 }}
                        aria-hidden
                      />
                      <p
                        className="font-body font-light"
                        style={{ fontSize: '0.875rem', lineHeight: 1.62, color: 'rgba(17,18,20,0.54)' }}
                      >
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Engagement Models — Carbon ────────────────── */}
      <section ref={modRef} style={{ background: '#111214', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div
          className="container-site"
          style={{ paddingTop: 'clamp(4rem,6vw,6rem)', paddingBottom: 'clamp(4rem,6vw,6rem)' }}
        >
          <Reveal>
            <div style={{ marginBottom: '3rem' }}>
              <p className="vcg-label" style={{ marginBottom: '1.25rem' }}>Engagement Structure</p>
              <h2
                className="font-display font-normal"
                style={{
                  fontSize: 'clamp(1.7rem, 2.6vw, 2.7rem)',
                  lineHeight: 1.10,
                  letterSpacing: '-0.026em',
                  color: '#F5F3EE',
                  marginBottom: '0.875rem',
                  maxWidth: '28ch',
                }}
              >
                Three ways professionals may work with VCG.
              </h2>
              <p
                className="font-body font-light"
                style={{ fontSize: '0.9375rem', lineHeight: 1.78, color: 'rgba(245,243,238,0.38)', maxWidth: '54ch' }}
              >
                Relationship structure, duration, and terms depend on the specific engagement. VCG does not guarantee placement, ongoing assignment, or specific engagement type. All arrangements are confirmed in writing before engagement begins.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {ENGAGEMENT_MODELS.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 10 }}
                animate={modInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.16 + i * 0.08, ease: EASE }}
                style={{
                  paddingTop: '1.75rem',
                  paddingBottom: '1.75rem',
                  paddingRight: '2rem',
                  paddingLeft: i > 0 ? '2rem' : '0',
                  borderTop: '1px solid rgba(255,255,255,0.07)',
                  borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                }}
              >
                <p
                  className="font-body font-medium"
                  style={{ fontSize: '0.875rem', color: '#F5F3EE', letterSpacing: '-0.004em', marginBottom: '0.75rem' }}
                >
                  {m.name}
                </p>
                <p
                  className="font-body font-light"
                  style={{ fontSize: '0.875rem', lineHeight: 1.82, color: 'rgba(245,243,238,0.44)' }}
                >
                  {m.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. VCG Talent Standard — Obsidian ────────────── */}
      <section style={{ background: '#0B0B0D', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div
          className="container-site"
          style={{ paddingTop: 'clamp(4rem,6vw,6rem)', paddingBottom: 'clamp(4rem,6vw,6rem)' }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20">
            <Reveal>
              <div>
                <p className="vcg-label" style={{ marginBottom: '1.25rem' }}>The Standard</p>
                <h2
                  className="font-display font-normal"
                  style={{
                    fontSize: 'clamp(1.6rem, 2.4vw, 2.4rem)',
                    lineHeight: 1.10,
                    letterSpacing: '-0.024em',
                    color: '#F5F3EE',
                    maxWidth: '22ch',
                    marginBottom: '1.25rem',
                  }}
                >
                  What representing VCG requires.
                </h2>
                <p
                  className="font-body font-light"
                  style={{ fontSize: '0.875rem', lineHeight: 1.80, color: 'rgba(245,243,238,0.34)', maxWidth: '32ch' }}
                >
                  These are professional expectations — not aspirational values. They apply to every engagement VCG undertakes.
                </p>
              </div>
            </Reveal>

            <div>
              {STANDARD.map((s, i) => (
                <StandardRow key={s.claim} s={s} index={i} />
              ))}
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. What to Expect — Warm White ───────────────── */}
      <section ref={expRef} style={{ background: '#F5F3EE', borderTop: '1px solid rgba(17,18,20,0.07)' }}>
        <div
          className="container-site"
          style={{ paddingTop: 'clamp(4rem,6vw,6rem)', paddingBottom: 'clamp(4rem,6vw,6rem)' }}
        >
          <Reveal>
            <div style={{ marginBottom: '2.5rem' }}>
              <p className="vcg-label-dark" style={{ marginBottom: '1.25rem' }}>What You Should Expect</p>
              <h2
                className="font-display font-normal"
                style={{
                  fontSize: 'clamp(1.6rem, 2.4vw, 2.4rem)',
                  lineHeight: 1.10,
                  letterSpacing: '-0.024em',
                  color: '#111214',
                  marginBottom: '0.875rem',
                  maxWidth: '28ch',
                }}
              >
                Six commitments VCG makes to the professionals it works with.
              </h2>
              <p
                className="font-body font-light"
                style={{ fontSize: '0.875rem', lineHeight: 1.78, color: 'rgba(17,18,20,0.44)', maxWidth: '54ch' }}
              >
                The relationship must not be one-directional. These are the commitments VCG holds itself to in every professional engagement — independent of engagement type or duration.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
            {EXPECTATIONS.map((e, i) => (
              <motion.div
                key={e.n}
                initial={{ opacity: 0 }}
                animate={expInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.46, delay: 0.10 + i * 0.05, ease: EASE }}
                style={{
                  paddingTop: '1.5rem',
                  paddingBottom: '1.5rem',
                  paddingRight: i % 2 === 0 ? '3rem' : '0',
                  paddingLeft: i % 2 === 1 ? '3rem' : '0',
                  borderTop: '1px solid rgba(17,18,20,0.08)',
                  borderLeft: i % 2 === 1 ? '1px solid rgba(17,18,20,0.08)' : 'none',
                  display: 'grid',
                  gridTemplateColumns: '28px 1fr',
                  gap: '0.875rem',
                  alignItems: 'start',
                }}
              >
                <span
                  className="font-mono"
                  style={{ fontSize: '0.375rem', letterSpacing: '0.14em', color: 'rgba(17,18,20,0.22)', paddingTop: '0.18rem' }}
                >
                  {e.n}
                </span>
                <p
                  className="font-body font-light"
                  style={{ fontSize: '0.875rem', lineHeight: 1.82, color: 'rgba(17,18,20,0.52)' }}
                >
                  {e.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. Expression of Interest + Form — White ──────── */}
      <section style={{ background: '#FFFFFF', borderTop: '1px solid rgba(17,18,20,0.08)' }}>
        <div
          className="container-site"
          style={{ paddingTop: 'clamp(4rem,6vw,6rem)', paddingBottom: 'clamp(5rem,8vw,7rem)' }}
        >
          <Reveal>
            <div style={{ maxWidth: '760px' }}>
              <p className="vcg-label-dark" style={{ marginBottom: '1.25rem' }}>Join the VCG Talent Network</p>
              <h2
                className="font-display font-normal"
                style={{
                  fontSize: 'clamp(1.6rem, 2.4vw, 2.4rem)',
                  lineHeight: 1.10,
                  letterSpacing: '-0.022em',
                  color: '#111214',
                  marginBottom: '0.875rem',
                  maxWidth: '30ch',
                }}
              >
                Express your interest.
              </h2>
              <p
                className="font-body font-light"
                style={{ fontSize: '0.9375rem', lineHeight: 1.80, color: 'rgba(17,18,20,0.50)', marginBottom: '0.625rem', maxWidth: '54ch' }}
              >
                All submissions are reviewed against current and anticipated engagement requirements. VCG will be in contact if there is a relevant match.
              </p>
              <p
                className="font-body font-light"
                style={{ fontSize: '0.8125rem', lineHeight: 1.72, color: 'rgba(17,18,20,0.36)', marginBottom: '2.5rem', maxWidth: '54ch' }}
              >
                Submission does not constitute acceptance into the network, a guarantee of placement, guaranteed review, or guaranteed response. All inquiries are treated confidentially.
              </p>

              <TalentForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
