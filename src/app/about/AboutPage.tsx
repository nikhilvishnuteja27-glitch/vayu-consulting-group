'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FounderPerspective } from '@/components/sections/FounderPerspective'
import { CTA }                from '@/components/sections/CTA'

const EASE = [0.16, 1, 0.3, 1] as const

/* ── Data ────────────────────────────────────────────────────── */

const PRINCIPLES = [
  {
    claim: 'We own delivery.',
    practice: 'Accountability is structured at the start — named, visible, and organizationally confirmed before work begins. When accountability is unclear or fragmenting, VCG creates structure rather than waiting for the client to resolve it.',
  },
  {
    claim: 'We operate embedded.',
    practice: 'Your internal teams gain access to an operator who understands your environment from the inside. Decisions that previously required external sign-off are resolved within the operating structure. Observation from outside is replaced by participation from within.',
  },
  {
    claim: 'We structure engagements around outcomes.',
    practice: 'The scope of an engagement is defined by what needs to be true when VCG exits — not by time periods or deliverable lists. Scope drift is measured against the outcome definition, not the contract terms. Engagements conclude when success criteria are met.',
  },
  {
    claim: 'Our operators have delivered.',
    practice: 'Recommendations are made by people who have been accountable for equivalent decisions before. Advice gives way to action. Escalations are resolved faster because the operator guiding the resolution has navigated equivalent complexity before.',
  },
  {
    claim: 'We measure outcomes. Not activities.',
    practice: 'Progress is measured against the outcome defined at the start of the engagement and verified at the end. Hours logged, reports produced, and meetings attended are inputs — they do not appear in the outcome assessment.',
  },
]

const COMMITMENTS = [
  {
    n: '01',
    text: 'We will tell you what we find — not what you want to hear. The diagnostic is honest.',
  },
  {
    n: '02',
    text: 'We will define accountability before we begin — not when something goes wrong.',
  },
  {
    n: '03',
    text: 'We will stay until the outcome is verified. Not until the contract term expires.',
  },
  {
    n: '04',
    text: 'We will measure what matters. Not what is easy to measure.',
  },
  {
    n: '05',
    text: 'We will work inside your environment. Not from a presentation room or a weekly call.',
  },
  {
    n: '06',
    text: 'We will transfer capability when we exit. The outcome does not leave with us.',
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

function PrincipleRow({ principle, index }: { principle: (typeof PRINCIPLES)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.12 })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.50, delay: index * 0.06, ease: EASE }}
    >
      <div
        style={{
          borderTop: '1px solid rgba(17,18,20,0.07)',
          paddingTop: '1.75rem',
          paddingBottom: '1.75rem',
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '0.75rem',
        }}
        className="md:grid-cols-[240px_1fr] md:gap-12"
      >
        <p className="font-display font-normal" style={{ fontSize: 'clamp(1rem, 1.4vw, 1.125rem)', color: '#111214', letterSpacing: '-0.018em', lineHeight: 1.22 }}>
          {principle.claim}
        </p>
        <p className="font-body font-light" style={{ fontSize: '0.9375rem', lineHeight: 1.82, color: 'rgba(17,18,20,0.50)' }}>
          {principle.practice}
        </p>
      </div>
    </motion.div>
  )
}

function CommitmentRow({ c, index }: { c: (typeof COMMITMENTS)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.46, delay: index * 0.06, ease: EASE }}
      style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        paddingTop: '1.25rem',
        paddingBottom: '1.25rem',
        display: 'grid',
        gridTemplateColumns: '36px 1fr',
        gap: '1.25rem',
        alignItems: 'start',
      }}
    >
      <span className="font-mono" style={{ fontSize: '0.4375rem', letterSpacing: '0.14em', color: 'rgba(245,243,238,0.26)', paddingTop: '0.18rem' }}>
        {c.n}
      </span>
      <p className="font-body font-light" style={{ fontSize: '0.9375rem', lineHeight: 1.80, color: 'rgba(245,243,238,0.54)' }}>
        {c.text}
      </p>
    </motion.div>
  )
}

/* ── Page ────────────────────────────────────────────────────── */

export default function AboutPage() {
  return (
    <>
      {/* ── 1. Hero — Obsidian ───────────────────────────── */}
      <section style={{ background: '#0B0B0D', borderBottom: '1px solid rgba(255,255,255,0.06)', overflow: 'hidden' }}>
        <div
          className="container-site relative"
          style={{ paddingTop: 'clamp(8rem,14vw,12rem)', paddingBottom: 'clamp(4rem,6vw,6rem)' }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.55, delay: 0.20 }}
            className="vcg-label mb-7"
          >
            About VCG
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.80, delay: 0.30, ease: EASE }}
            className="font-display font-normal mb-7"
            style={{ fontSize: 'clamp(2.4rem, 4.2vw, 4.5rem)', lineHeight: 1.06, letterSpacing: '-0.036em', color: '#F5F3EE', maxWidth: '26ch' }}
          >
            An execution consulting firm built to close the gap.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.70, delay: 0.46, ease: EASE }}
            className="font-body font-light"
            style={{ fontSize: '1rem', lineHeight: 1.82, color: 'rgba(245,243,238,0.40)', maxWidth: '52ch' }}
          >
            Vayu Consulting Group exists because organizations with clear strategies and capable people consistently fail to deliver what they committed to deliver. The gap is execution ownership. VCG was built to occupy that gap.
          </motion.p>
        </div>
      </section>

      {/* ── 2. Why VCG Exists — Warm White (existing) ──── */}
      <FounderPerspective />

      {/* ── 3. Operating Principles — White ─────────────── */}
      <section style={{ background: '#FFFFFF', borderTop: '1px solid rgba(17,18,20,0.07)' }}>
        <div className="container-site" style={{ paddingTop: 'clamp(4rem,6vw,6rem)', paddingBottom: 'clamp(4rem,6vw,6rem)' }}>
          <Reveal>
            <div className="mb-12 max-w-3xl">
              <p className="vcg-label-dark mb-6">How VCG Operates</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
                <p
                  className="font-display font-normal"
                  style={{ fontSize: 'clamp(1.3rem, 2.2vw, 2.1rem)', lineHeight: 1.20, letterSpacing: '-0.022em', color: 'rgba(17,18,20,0.35)' }}
                >
                  Consulting engagements can conclude before execution is complete.
                </p>
                <p
                  className="font-display font-normal"
                  style={{ fontSize: 'clamp(1.3rem, 2.2vw, 2.1rem)', lineHeight: 1.20, letterSpacing: '-0.022em', color: '#111214' }}
                >
                  Ours are structured to conclude only when they are.
                </p>
              </div>
            </div>
          </Reveal>
          <div>
            {PRINCIPLES.map((p, i) => (
              <PrincipleRow key={p.claim} principle={p} index={i} />
            ))}
            <div style={{ borderTop: '1px solid rgba(17,18,20,0.07)' }} />
          </div>
        </div>
      </section>

      {/* ── 4. Client Responsibility — Carbon ───────────── */}
      <section style={{ background: '#111214', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container-site" style={{ paddingTop: 'clamp(4rem,6vw,6rem)', paddingBottom: 'clamp(4rem,6vw,6rem)' }}>
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-8 mb-10">
              <div>
                <p className="vcg-label mb-5">What VCG Commits To</p>
                <h2
                  className="font-display font-normal"
                  style={{ fontSize: 'clamp(1.7rem, 2.6vw, 2.7rem)', lineHeight: 1.10, letterSpacing: '-0.026em', color: '#F5F3EE', maxWidth: '22ch' }}
                >
                  Six commitments that structure every engagement.
                </h2>
              </div>
              <div className="flex items-end">
                <p className="font-body font-light" style={{ fontSize: '0.9375rem', lineHeight: 1.82, color: 'rgba(245,243,238,0.40)', maxWidth: '44ch' }}>
                  These are not aspirations. They are the operating standards that apply to every engagement, verified against the outcome defined at the start.
                </p>
              </div>
            </div>
          </Reveal>
          <div>
            {COMMITMENTS.map((c, i) => (
              <CommitmentRow key={c.n} c={c} index={i} />
            ))}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }} />
          </div>
        </div>
      </section>

      {/* ── 5. Talent Standard + Company — Warm White ──── */}
      <section style={{ background: '#F5F3EE', borderTop: '1px solid rgba(17,18,20,0.07)' }}>
        <div className="container-site" style={{ paddingTop: 'clamp(4rem,6vw,6rem)', paddingBottom: 'clamp(4rem,6vw,6rem)' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">

            {/* Talent Standard */}
            <Reveal>
              <div>
                <p className="vcg-label-dark mb-6">Talent Standard</p>
                <div className="space-y-4">
                  <p className="font-body font-light" style={{ fontSize: '0.9375rem', lineHeight: 1.82, color: 'rgba(17,18,20,0.52)' }}>
                    VCG professionals are selected on the basis of demonstrated delivery experience — not advisory background, credential, or academic record alone.
                  </p>
                  <p className="font-body font-light" style={{ fontSize: '0.9375rem', lineHeight: 1.82, color: 'rgba(17,18,20,0.52)' }}>
                    The evaluation criterion is accountability: whether the individual has been responsible for delivering outcomes in complex environments, and whether they did so.
                  </p>
                  <p className="font-body font-light" style={{ fontSize: '0.9375rem', lineHeight: 1.82, color: 'rgba(17,18,20,0.52)' }}>
                    VCG does not staff engagements from a bench of available consultants. Operator selection is initiative-specific — driven by the demands of the program, not availability.
                  </p>
                  <p className="font-body font-medium" style={{ fontSize: '0.9375rem', lineHeight: 1.60, color: '#111214', letterSpacing: '-0.005em' }}>
                    VCG does not place consultants. It places operators.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Company Information */}
            <Reveal delay={0.08}>
              <div>
                <p className="vcg-label-dark mb-6">Company</p>
                <div className="space-y-6">
                  <div>
                    <p className="font-body font-medium mb-1" style={{ fontSize: '0.875rem', color: '#111214', letterSpacing: '-0.004em' }}>
                      Vayu Consulting Group Inc.
                    </p>
                    <p className="font-body font-light" style={{ fontSize: '0.875rem', lineHeight: 1.78, color: 'rgba(17,18,20,0.48)' }}>
                      Incorporated in the State of Illinois.
                    </p>
                  </div>
                  <div>
                    <p className="font-body font-medium mb-1" style={{ fontSize: '0.875rem', color: '#111214', letterSpacing: '-0.004em' }}>
                      Operations
                    </p>
                    <p className="font-body font-light" style={{ fontSize: '0.875rem', lineHeight: 1.78, color: 'rgba(17,18,20,0.48)' }}>
                      North America.
                    </p>
                  </div>
                  <div>
                    <p className="font-body font-medium mb-1" style={{ fontSize: '0.875rem', color: '#111214', letterSpacing: '-0.004em' }}>
                      Engagements
                    </p>
                    <p className="font-body font-light" style={{ fontSize: '0.875rem', lineHeight: 1.78, color: 'rgba(17,18,20,0.48)' }}>
                      Confidential. Initiated by direct contact.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 6. CTA — Obsidian (existing) ─────────────────── */}
      <CTA />
    </>
  )
}
