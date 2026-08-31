'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useContactModal } from '@/context/ContactModalContext'

const EASE = [0.16, 1, 0.3, 1] as const

/* ── Data ────────────────────────────────────────────────────── */

const PROBLEMS = [
  {
    n: '01',
    label: 'Transformation at Risk',
    body: 'Strategy is defined. The initiative has launched. Delivery is fragmenting across functions — ownership is unclear, decisions accumulate, and progress reports no longer reflect what is actually happening. The gap between strategic intent and execution reality is widening.',
  },
  {
    n: '02',
    label: 'Program Recovery',
    body: 'A critical program has lost momentum, accountability, or both. Timelines have slipped. The explanation cycle has begun. The original outcome — the reason the program was funded — is at risk of being quietly redefined into something achievable.',
  },
  {
    n: '03',
    label: 'Fragmented Accountability',
    body: 'Multiple teams own activities. No single individual owns the integrated outcome. Decisions that should take hours take weeks. Status meetings multiply. The organization is working. The initiative is not delivering.',
  },
  {
    n: '04',
    label: 'Execution Leadership Vacancy',
    body: 'A critical initiative requires senior execution leadership now. The permanent hire timeline is measured in months — longer than the window in which the initiative can absorb the gap. A capable interim with genuine delivery accountability is needed immediately.',
  },
  {
    n: '05',
    label: 'Technology & AI Execution',
    body: 'A technology or AI initiative has moved from planning into implementation. Execution complexity — organizational change, integration, adoption, governance — has grown beyond what the existing team structure was built to manage.',
  },
]

const CAPABILITIES = [
  {
    title: 'Enterprise Transformation',
    body: 'Multi-year change programs requiring embedded execution leadership — not external advisors observing from a distance.',
  },
  {
    title: 'Program Recovery',
    body: 'Critical initiatives that have lost momentum, direction, or accountability — requiring immediate intervention and delivery continuity.',
  },
  {
    title: 'Technology & AI Execution',
    body: 'Organizations deploying technology or AI capabilities at scale, requiring delivery leadership that understands both the implementation and the organizational complexity surrounding it.',
  },
  {
    title: 'Operating Model Execution',
    body: 'Organizations scaling operations faster than their execution infrastructure allows — requiring governance and delivery capability deployed into the gap.',
  },
  {
    title: 'Transformation Governance',
    body: 'Building or rebuilding the accountability structures that make major initiatives consistently deliverable — from first milestone to final outcome.',
  },
  {
    title: 'Leadership Augmentation',
    body: 'Senior execution leadership embedded into a critical initiative immediately — without the timeline, cost, and risk of a permanent hire.',
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

function ProblemRow({ prob, index }: { prob: (typeof PROBLEMS)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.48, delay: index * 0.06, ease: EASE }}
      style={{
        borderTop: '1px solid rgba(17,18,20,0.07)',
        display: 'grid',
        gridTemplateColumns: '40px 1fr',
        gap: '1.5rem',
        padding: '1.5rem 0',
        alignItems: 'start',
      }}
    >
      <span className="font-mono" style={{ fontSize: '0.4375rem', letterSpacing: '0.14em', color: 'rgba(17,18,20,0.24)', paddingTop: '0.2rem' }}>
        {prob.n}
      </span>
      <div>
        <p className="font-body font-medium mb-1.5" style={{ fontSize: '0.9375rem', color: '#111214', letterSpacing: '-0.005em' }}>
          {prob.label}
        </p>
        <p className="font-body font-light" style={{ fontSize: '0.875rem', lineHeight: 1.80, color: 'rgba(17,18,20,0.50)', maxWidth: '62ch' }}>
          {prob.body}
        </p>
      </div>
    </motion.div>
  )
}

/* ── Page ────────────────────────────────────────────────────── */

export default function WhatWeDoPage() {
  const { openModal } = useContactModal()

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
            What We Do
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.80, delay: 0.30, ease: EASE }}
            className="font-display font-normal mb-7"
            style={{ fontSize: 'clamp(2.4rem, 4.2vw, 4.5rem)', lineHeight: 1.06, letterSpacing: '-0.036em', color: '#F5F3EE', maxWidth: '22ch' }}
          >
            Where strategy must become execution.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.70, delay: 0.46, ease: EASE }}
            className="font-body font-light"
            style={{ fontSize: '1rem', lineHeight: 1.82, color: 'rgba(245,243,238,0.40)', maxWidth: '52ch' }}
          >
            VCG engages through three paths — Consulting & Transformation, Project & Delivery Teams, and Specialized Talent — each structured around what the initiative actually requires to deliver its intended outcome.
          </motion.p>
        </div>
      </section>

      {/* ── 2. Executive Problems — White ────────────────── */}
      <section style={{ background: '#FFFFFF', borderTop: '1px solid rgba(17,18,20,0.07)' }}>
        <div className="container-site" style={{ paddingTop: 'clamp(4rem,6vw,6rem)', paddingBottom: 'clamp(4rem,6vw,6rem)' }}>
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-8 mb-12">
              <div>
                <p className="vcg-label-dark mb-5">When Organizations Engage VCG</p>
                <h2
                  className="font-display font-normal"
                  style={{ fontSize: 'clamp(1.7rem, 2.6vw, 2.7rem)', lineHeight: 1.10, letterSpacing: '-0.026em', color: '#111214', maxWidth: '28ch' }}
                >
                  Five situations that define when execution requires outside ownership.
                </h2>
              </div>
              <div className="flex items-end">
                <p className="font-body font-light" style={{ fontSize: '0.9375rem', lineHeight: 1.82, color: 'rgba(17,18,20,0.46)', maxWidth: '46ch' }}>
                  These are not abstract categories. They are the recognizable conditions that precede an engagement — the point at which internal capability, bandwidth, or structure is no longer sufficient to own the outcome.
                </p>
              </div>
            </div>
          </Reveal>
          <div>
            {PROBLEMS.map((p, i) => (
              <ProblemRow key={p.n} prob={p} index={i} />
            ))}
            <div style={{ borderTop: '1px solid rgba(17,18,20,0.07)' }} />
          </div>
        </div>
      </section>

      {/* ── 3. Consulting & Transformation — White ───────── */}
      <section id="consulting" style={{ background: '#FFFFFF', borderTop: '1px solid rgba(17,18,20,0.10)' }}>
        <div className="container-site" style={{ paddingTop: 'clamp(4rem,6vw,6rem)', paddingBottom: 'clamp(4rem,6vw,6rem)' }}>
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono" style={{ fontSize: '0.4375rem', letterSpacing: '0.14em', color: '#C8A96E', opacity: 0.65 }}>01</span>
              <span className="font-body font-medium" style={{ fontSize: '0.625rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#C8A96E' }}>Primary Engagement Model</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-8 mb-10">
              <div>
                <h2
                  className="font-display font-normal"
                  style={{ fontSize: 'clamp(1.9rem, 3vw, 3rem)', lineHeight: 1.08, letterSpacing: '-0.028em', color: '#111214', maxWidth: '22ch' }}
                >
                  Consulting & Transformation
                </h2>
              </div>
              <div className="flex items-end">
                <p className="font-body font-light" style={{ fontSize: '0.9375rem', lineHeight: 1.82, color: 'rgba(17,18,20,0.50)', maxWidth: '48ch' }}>
                  Embedded execution leadership for organizations facing enterprise transformation, program recovery, operating model change, or strategic initiative delivery. VCG assumes delivery accountability — not an advisory role — from initiation through verified outcome.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="vcg-label-dark mb-5">Capability Areas</p>
            {/* 3-column capability architecture — grouped by delivery domain */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              {([
                { label: 'Transformation', items: CAPABILITIES.slice(0, 2) },
                { label: 'Technology & Operating Model', items: CAPABILITIES.slice(2, 4) },
                { label: 'Governance & Talent', items: CAPABILITIES.slice(4, 6) },
              ] as const).map((group, gi) => (
                <div
                  key={group.label}
                  style={{
                    paddingTop: '1.5rem',
                    paddingBottom: '1.5rem',
                    paddingRight: gi < 2 ? '2rem' : '0',
                    paddingLeft: gi > 0 ? '2rem' : '0',
                    borderTop: '2px solid rgba(17,18,20,0.10)',
                    borderLeft: gi > 0 ? '1px solid rgba(17,18,20,0.07)' : 'none',
                  }}
                >
                  <p
                    className="font-mono"
                    style={{ fontSize: '0.375rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(17,18,20,0.28)', marginBottom: '1rem' }}
                  >
                    {group.label}
                  </p>
                  {group.items.map((cap) => (
                    <div
                      key={cap.title}
                      style={{
                        paddingTop: '1rem',
                        paddingBottom: '1rem',
                        borderTop: '1px solid rgba(17,18,20,0.07)',
                      }}
                    >
                      <p
                        className="font-body font-medium"
                        style={{ fontSize: '0.875rem', color: '#111214', letterSpacing: '-0.005em', marginBottom: '0.5rem' }}
                      >
                        {cap.title}
                      </p>
                      <p
                        className="font-body font-light"
                        style={{ fontSize: '0.8125rem', lineHeight: 1.78, color: 'rgba(17,18,20,0.50)' }}
                      >
                        {cap.body}
                      </p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 4. Delivery Paths — Warm White ───────────────── */}
      <section style={{ background: '#F5F3EE', borderTop: '1px solid rgba(17,18,20,0.08)' }}>
        <div className="container-site" style={{ paddingTop: 'clamp(4rem,6vw,6rem)', paddingBottom: 'clamp(4rem,6vw,6rem)' }}>
          <Reveal>
            <p className="vcg-label-dark mb-10">Additional Capability Paths</p>
          </Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">

            {/* Path 02 */}
            <Reveal delay={0.04}>
              <div id="teams" style={{ paddingRight: '3rem', paddingBottom: '2.5rem', paddingTop: '2rem', borderTop: '2px solid rgba(17,18,20,0.12)' }}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono" style={{ fontSize: '0.4375rem', letterSpacing: '0.14em', color: 'rgba(17,18,20,0.26)' }}>02</span>
                </div>
                <h2
                  className="font-display font-normal mb-5"
                  style={{ fontSize: 'clamp(1.5rem, 2.2vw, 2.2rem)', lineHeight: 1.10, letterSpacing: '-0.022em', color: '#111214' }}
                >
                  Project & Delivery Teams
                </h2>
                <p className="font-body font-light mb-4" style={{ fontSize: '0.9375rem', lineHeight: 1.80, color: 'rgba(17,18,20,0.52)', maxWidth: '44ch' }}>
                  Purpose-built teams assembled around complex programs, workstreams, and enterprise initiatives. VCG constructs the exact combination of expertise an initiative requires — the right specialists, at the right seniority, with a defined accountability structure.
                </p>
                <p className="font-body font-light" style={{ fontSize: '0.875rem', lineHeight: 1.78, color: 'rgba(17,18,20,0.44)', maxWidth: '44ch' }}>
                  This path is appropriate when a program demands coordinated team capability across multiple workstreams simultaneously — not a single embedded leader, but an integrated delivery structure.
                </p>
              </div>
            </Reveal>

            {/* Path 03 */}
            <Reveal delay={0.10}>
              <div id="talent" style={{ paddingLeft: '3rem', paddingBottom: '2.5rem', paddingTop: '2rem', borderTop: '2px solid rgba(17,18,20,0.12)', borderLeft: '1px solid rgba(17,18,20,0.08)' }}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono" style={{ fontSize: '0.4375rem', letterSpacing: '0.14em', color: 'rgba(17,18,20,0.26)' }}>03</span>
                </div>
                <h2
                  className="font-display font-normal mb-5"
                  style={{ fontSize: 'clamp(1.5rem, 2.2vw, 2.2rem)', lineHeight: 1.10, letterSpacing: '-0.022em', color: '#111214' }}
                >
                  Specialized Talent
                </h2>
                <p className="font-body font-light mb-4" style={{ fontSize: '0.9375rem', lineHeight: 1.80, color: 'rgba(17,18,20,0.52)', maxWidth: '44ch' }}>
                  Individual professional capability for organizations that need targeted expertise, additional capacity, or specialist skills — without the timeline and cost of a permanent hire.
                </p>
                <p className="font-body font-light" style={{ fontSize: '0.875rem', lineHeight: 1.78, color: 'rgba(17,18,20,0.44)', maxWidth: '44ch' }}>
                  Professionals placed through this path carry the same operating standards as those in full consulting engagements. This path is for specific, senior-level capability — not general headcount.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 5. How Paths Connect — Carbon ────────────────── */}
      <section style={{ background: '#111214', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container-site" style={{ paddingTop: 'clamp(4rem,6vw,6rem)', paddingBottom: 'clamp(4rem,6vw,6rem)' }}>
          <Reveal>
            <p className="vcg-label mb-6">Three Paths. One Standard.</p>
            <h2
              className="font-display font-normal mb-8"
              style={{ fontSize: 'clamp(1.7rem, 2.6vw, 2.7rem)', lineHeight: 1.10, letterSpacing: '-0.026em', color: '#F5F3EE', maxWidth: '28ch' }}
            >
              These are not three separate businesses. They are three ways of deploying the same accountability.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
              {/* Left — flow diagram */}
              <div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 0 }}>
                  <div style={{ padding: '1rem 1.5rem', border: '1px solid rgba(255,255,255,0.10)', background: 'rgba(255,255,255,0.04)', borderRadius: '2px', width: '100%', maxWidth: '340px' }}>
                    <p className="font-mono" style={{ fontSize: '0.375rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(245,243,238,0.28)', marginBottom: '0.25rem' }}>Starting point</p>
                    <p className="font-body font-normal" style={{ fontSize: '0.9375rem', color: '#F5F3EE', letterSpacing: '-0.005em' }}>Critical Initiative</p>
                  </div>
                  <div style={{ width: '1px', height: '24px', background: 'rgba(255,255,255,0.10)', marginLeft: '1.5rem' }} aria-hidden />
                  <div style={{ padding: '0.875rem 1.5rem', border: '1px solid rgba(200,169,110,0.30)', background: 'rgba(200,169,110,0.05)', borderRadius: '2px', width: '100%', maxWidth: '340px' }}>
                    <p className="font-mono" style={{ fontSize: '0.375rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C8A96E', opacity: 0.65, marginBottom: '0.25rem' }}>Primary</p>
                    <p className="font-body font-normal" style={{ fontSize: '0.875rem', color: '#F5F3EE', letterSpacing: '-0.003em' }}>Consulting & Transformation Leadership</p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', width: '100%', maxWidth: '340px', gap: 0 }}>
                    <div style={{ marginLeft: '1.5rem', marginTop: 0, display: 'flex', flexDirection: 'column' }}>
                      <div style={{ width: '1px', height: '12px', background: 'rgba(255,255,255,0.08)' }} aria-hidden />
                      <div style={{ width: '80px', height: '1px', background: 'rgba(255,255,255,0.08)' }} aria-hidden />
                    </div>
                    <div style={{ marginLeft: 'auto', marginTop: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                      <div style={{ width: '1px', height: '12px', background: 'rgba(255,255,255,0.08)' }} aria-hidden />
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', width: '100%', maxWidth: '340px' }}>
                    {[
                      { label: 'Where needed', name: 'Delivery Capability' },
                      { label: 'Where needed', name: 'Specialized Expertise' },
                    ].map(p => (
                      <div key={p.name} style={{ padding: '0.75rem 1rem', border: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.02)', borderRadius: '2px' }}>
                        <p className="font-mono" style={{ fontSize: '0.35rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(245,243,238,0.22)', marginBottom: '0.2rem' }}>{p.label}</p>
                        <p className="font-body font-light" style={{ fontSize: '0.75rem', color: 'rgba(245,243,238,0.50)', letterSpacing: '-0.003em', lineHeight: 1.3 }}>{p.name}</p>
                      </div>
                    ))}
                  </div>
                  <div style={{ width: '1px', height: '24px', background: 'rgba(255,255,255,0.10)', marginLeft: '1.5rem' }} aria-hidden />
                  <div style={{ padding: '1rem 1.5rem', border: '1px solid rgba(255,255,255,0.10)', background: '#0B0B0D', borderRadius: '2px', width: '100%', maxWidth: '340px' }}>
                    <p className="font-mono" style={{ fontSize: '0.375rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(245,243,238,0.28)', marginBottom: '0.25rem' }}>Objective</p>
                    <p className="font-body font-normal" style={{ fontSize: '0.9375rem', color: '#F5F3EE', letterSpacing: '-0.005em' }}>Delivered Outcome</p>
                  </div>
                </div>
              </div>

              {/* Right — text */}
              <div>
                <p className="font-body font-light mb-6" style={{ fontSize: '0.9375rem', lineHeight: 1.82, color: 'rgba(245,243,238,0.44)', maxWidth: '44ch' }}>
                  Consulting & Transformation is the primary engagement model. VCG's execution leadership sits at the center of the initiative — owning delivery accountability across the full scope.
                </p>
                <p className="font-body font-light mb-6" style={{ fontSize: '0.9375rem', lineHeight: 1.82, color: 'rgba(245,243,238,0.44)', maxWidth: '44ch' }}>
                  Where the initiative requires additional delivery capacity or specialized expertise, VCG assembles that capability around the consulting engagement — extending reach without fragmenting accountability.
                </p>
                <p className="font-body font-light mb-10" style={{ fontSize: '0.9375rem', lineHeight: 1.82, color: 'rgba(245,243,238,0.44)', maxWidth: '44ch' }}>
                  Project & Delivery Teams and Specialized Talent also operate as standalone paths — when a program's need is specifically a delivery team or targeted expertise rather than full execution leadership.
                </p>
                <div style={{ paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                  <p className="font-body font-light mb-3" style={{ fontSize: '0.8125rem', lineHeight: 1.72, color: 'rgba(245,243,238,0.30)', maxWidth: '44ch' }}>
                    VCG's approach across all three paths is informed by the structural conditions of Execution Intelligence — the framework that identifies what must be true for reliable delivery.
                  </p>
                  <Link
                    href="/execution-intelligence"
                    className="inline-flex items-center gap-2 font-body font-normal transition-colors duration-200 group"
                    style={{ fontSize: '0.8125rem', color: 'rgba(245,243,238,0.36)', textDecoration: 'none' }}
                    onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(245,243,238,0.70)'}
                    onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(245,243,238,0.36)'}
                  >
                    Explore Execution Intelligence
                    <ArrowRight size={12} strokeWidth={1.5} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 6. CTA ───────────────────────────────────────── */}
      <section style={{ background: '#0B0B0D', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div
          className="absolute left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg,transparent,rgba(255,255,255,0.07) 40%,rgba(255,255,255,0.10) 50%,rgba(255,255,255,0.07) 60%,transparent)' }}
          aria-hidden
        />
        <div className="container-site" style={{ paddingTop: 'clamp(5rem,9vw,8rem)', paddingBottom: 'clamp(5rem,9vw,8rem)' }}>
          <Reveal>
            <p className="vcg-label mb-6">Start Here</p>
            <h2
              className="font-display font-normal mb-6"
              style={{ fontSize: 'clamp(2.2rem, 4vw, 4rem)', lineHeight: 1.06, letterSpacing: '-0.036em', color: '#F5F3EE', maxWidth: '24ch' }}
            >
              Every engagement begins with the initiative, not with a services catalog.
            </h2>
            <p className="font-body font-light mb-9" style={{ fontSize: '1rem', lineHeight: 1.82, color: 'rgba(245,243,238,0.40)', maxWidth: '48ch' }}>
              The first conversation is a confidential assessment of what the initiative requires and whether VCG is the right engagement structure to provide it.
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
                <ArrowRight size={12} strokeWidth={1.5} className="transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
