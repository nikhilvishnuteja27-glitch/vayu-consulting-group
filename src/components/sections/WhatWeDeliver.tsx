'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const OUTCOMES = [
  {
    n: '01',
    title: 'Enterprise Transformation',
    body: 'Organizations navigating multi-year change that requires embedded execution leadership — not external advisors observing from a distance.',
  },
  {
    n: '02',
    title: 'Program Recovery',
    body: 'Critical initiatives that have lost momentum, direction, or accountability — requiring immediate intervention, ownership reset, and delivery continuity.',
  },
  {
    n: '03',
    title: 'AI Adoption',
    body: 'Organizations deploying AI capabilities at scale, requiring delivery leadership that understands both the technology and the organizational complexity surrounding it.',
  },
  {
    n: '04',
    title: 'Operational Scaling',
    body: 'Companies scaling operations faster than their execution infrastructure allows — requiring governance and delivery capability that can be deployed immediately.',
  },
  {
    n: '05',
    title: 'Execution Governance',
    body: 'Organizations building or rebuilding the accountability structures that make major initiatives consistently deliverable — from first milestone to final outcome.',
  },
  {
    n: '06',
    title: 'Leadership Augmentation',
    body: 'Senior execution leadership embedded into a critical initiative immediately — without the timeline, cost, and risk of a permanent hire.',
  },
]

function OutcomeRow({ outcome, index, inView }: { outcome: (typeof OUTCOMES)[0]; index: number; inView: boolean }) {
  const isEven = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.55, delay: 0.15 + index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      className="relative group"
      style={{ borderTop: '1px solid rgba(17,18,20,0.08)' }}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-[80px_1fr_1fr] gap-4 md:gap-10 py-7 cursor-default transition-all duration-300"
      >
        {/* Number */}
        <div className="flex items-start">
          <span className="font-mono" style={{ fontSize: '0.5625rem', letterSpacing: '0.10em', color: 'rgba(17,18,20,0.25)', fontWeight: 400, paddingTop: '0.2em' }}>
            {outcome.n}
          </span>
        </div>

        {/* Title */}
        <div>
          <h3
            className="font-body font-medium transition-colors duration-200"
            style={{ fontSize: '1.0625rem', letterSpacing: '-0.010em', color: 'rgba(17,18,20,0.82)', lineHeight: 1.3 }}
          >
            {outcome.title}
          </h3>
        </div>

        {/* Body */}
        <div>
          <p className="font-body font-light" style={{ fontSize: '0.9375rem', lineHeight: 1.78, color: 'rgba(17,18,20,0.50)' }}>
            {outcome.body}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export function WhatWeDeliver() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section
      ref={ref}
      id="what-we-deliver"
      className="relative section-pad"
      style={{ background: '#F5F3EE', borderTop: '1px solid rgba(17,18,20,0.07)' }}
    >
      <div className="container-site">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="vcg-label-dark mb-5">What We Deliver</p>
            <h2
              className="font-display font-normal"
              style={{ fontSize: 'clamp(1.9rem, 3.2vw, 3.2rem)', lineHeight: 1.08, letterSpacing: '-0.030em', color: '#111214', maxWidth: '22ch' }}
            >
              Outcomes, not services.
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.72, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-body font-light md:text-right"
            style={{ fontSize: '0.9375rem', lineHeight: 1.78, maxWidth: '40ch', color: 'rgba(17,18,20,0.48)' }}
          >
            VCG does not sell consulting services. We deliver specific outcomes — and remain accountable until they are achieved.
          </motion.p>
        </div>

        {/* Outcomes list */}
        <div>
          {OUTCOMES.map((outcome, i) => (
            <OutcomeRow key={outcome.n} outcome={outcome} index={i} inView={inView} />
          ))}
          <div style={{ borderTop: '1px solid rgba(17,18,20,0.08)' }} />
        </div>

        {/* Footer link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.55, delay: 0.65 }}
          className="mt-10"
        >
          <button
            onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            className="inline-flex items-center gap-2 font-body font-normal transition-colors duration-200 group"
            style={{ fontSize: '0.875rem', color: 'rgba(17,18,20,0.38)' }}
            onMouseEnter={e => (e.currentTarget as HTMLButtonElement).style.color = '#111214'}
            onMouseLeave={e => (e.currentTarget as HTMLButtonElement).style.color = 'rgba(17,18,20,0.38)'}
          >
            Discuss your initiative
            <ArrowRight size={13} strokeWidth={1.5} className="transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </motion.div>

      </div>
    </section>
  )
}
