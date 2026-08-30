'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExecutionModel }  from '@/components/sections/ExecutionModel'
import { AIExecution }     from '@/components/sections/AIExecution'
import { AfterEngagement } from '@/components/sections/AfterEngagement'
import { CTA }             from '@/components/sections/CTA'

const EASE = [0.16, 1, 0.3, 1] as const

const PHASES = [
  {
    n: 'I',
    label: 'Assess',
    body: 'The engagement begins before work begins. VCG conducts a structured execution assessment — examining the accountability structure, decision pathways, dependency exposures, and the gap between stated plan and likely delivery trajectory. The assessment produces the foundation the engagement is built on. Work that starts without it starts without a map.',
  },
  {
    n: 'II',
    label: 'Assemble',
    body: 'Each initiative demands a specific combination of capability. VCG selects operators based on demonstrated experience with the type of execution challenge the initiative presents — not on role profile or credential alone. The team structure, accountability model, and operating protocols are defined before deployment begins. Assembly is not staffing. It is construction.',
  },
  {
    n: 'III',
    label: 'Embed',
    body: 'VCG operators work inside your environment. This means access to your systems, your meetings, your people, and your decision-making processes — not a weekly status call from outside. Embedded operation is not a preference. It is the mechanism by which genuine execution accountability becomes possible. Advisors observe. Operators occupy.',
  },
  {
    n: 'IV',
    label: 'Deliver',
    body: 'The engagement ends when the outcome is verified — not when a contract term expires or a set of deliverables is produced. Exit criteria are defined at the outset and confirmed at close. Until then, accountability remains in place. The objective is a verified outcome, not a concluded engagement.',
  },
]

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

function PhaseRow({ phase, index }: { phase: (typeof PHASES)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.12 })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.52, delay: index * 0.06, ease: EASE }}
    >
      <div style={{ borderTop: '1px solid rgba(17,18,20,0.07)', paddingTop: '2rem', paddingBottom: '2rem' }}>
        <div className="grid grid-cols-1 lg:grid-cols-[160px_1fr] gap-4 lg:gap-12">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-mono" style={{ fontSize: '0.4375rem', letterSpacing: '0.14em', color: 'rgba(17,18,20,0.26)' }}>Phase {phase.n}</span>
            </div>
            <p className="font-body font-medium" style={{ fontSize: '0.9375rem', color: '#111214', letterSpacing: '-0.006em' }}>
              {phase.label}
            </p>
          </div>
          <p className="font-body font-light" style={{ fontSize: '0.9375rem', lineHeight: 1.82, color: 'rgba(17,18,20,0.50)', maxWidth: '60ch' }}>
            {phase.body}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default function HowWeWorkPage() {
  return (
    <>
      {/* ── 1. Hero — Obsidian ───────────────────────────── */}
      <section style={{ background: '#0B0B0D', borderBottom: '1px solid rgba(255,255,255,0.06)', overflow: 'hidden' }}>
        <div
          className="container-site relative"
          style={{ paddingTop: 'clamp(8rem,14vw,12rem)', paddingBottom: 'clamp(4rem,6vw,6rem)' }}
        >
          <div
            className="absolute inset-0 pointer-events-none hidden lg:block"
            style={{
              backgroundImage: `
                linear-gradient(rgba(245,243,238,0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(245,243,238,0.03) 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px',
              maskImage: 'radial-gradient(ellipse 60% 70% at 90% 30%, black 10%, transparent 70%)',
              WebkitMaskImage: 'radial-gradient(ellipse 60% 70% at 90% 30%, black 10%, transparent 70%)',
            }}
            aria-hidden
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.55, delay: 0.20 }}
            className="vcg-label mb-7"
          >
            How We Work
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.80, delay: 0.30, ease: EASE }}
            className="font-display font-normal mb-7"
            style={{ fontSize: 'clamp(2.4rem, 4.2vw, 4.5rem)', lineHeight: 1.06, letterSpacing: '-0.036em', color: '#F5F3EE', maxWidth: '24ch' }}
          >
            What engagement looks like from the inside.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.70, delay: 0.46, ease: EASE }}
            className="font-body font-light"
            style={{ fontSize: '1rem', lineHeight: 1.82, color: 'rgba(245,243,238,0.40)', maxWidth: '52ch' }}
          >
            VCG is not a vendor relationship or an advisory mandate. It is an embedded execution structure — accountable for outcomes, structured around delivery, and present until the outcome is verified.
          </motion.p>
        </div>
      </section>

      {/* ── 2. ExecutionModel — Warm White (existing) ──── */}
      <ExecutionModel />

      {/* ── 3. Phase depth — White ───────────────────────── */}
      <section style={{ background: '#FFFFFF', borderTop: '1px solid rgba(17,18,20,0.08)' }}>
        <div className="container-site" style={{ paddingTop: 'clamp(4rem,6vw,6rem)', paddingBottom: 'clamp(4rem,6vw,6rem)' }}>
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-8 mb-10">
              <div>
                <p className="vcg-label-dark mb-5">In Practice</p>
                <h2
                  className="font-display font-normal"
                  style={{ fontSize: 'clamp(1.7rem, 2.6vw, 2.7rem)', lineHeight: 1.10, letterSpacing: '-0.026em', color: '#111214', maxWidth: '28ch' }}
                >
                  What each phase demands — operationally.
                </h2>
              </div>
              <div className="flex items-end">
                <p className="font-body font-light" style={{ fontSize: '0.9375rem', lineHeight: 1.82, color: 'rgba(17,18,20,0.46)', maxWidth: '46ch' }}>
                  The four-phase model is the structure. This is what operating inside each phase actually requires — from the organization and from VCG.
                </p>
              </div>
            </div>
          </Reveal>
          <div>
            {PHASES.map((p, i) => (
              <PhaseRow key={p.n} phase={p} index={i} />
            ))}
            <div style={{ borderTop: '1px solid rgba(17,18,20,0.07)' }} />
          </div>
        </div>
      </section>

      {/* ── 4. AIExecution — Obsidian (existing) ─────────── */}
      <AIExecution />

      {/* ── 5. AfterEngagement — White (existing) ─────────── */}
      <AfterEngagement />

      {/* ── 6. CTA — Obsidian (existing) ─────────────────── */}
      <CTA />
    </>
  )
}
