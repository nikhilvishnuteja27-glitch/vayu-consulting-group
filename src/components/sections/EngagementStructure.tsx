'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const STEPS = [
  {
    n: '01',
    title: 'Initiative Assessment',
    body: 'A structured evaluation of scope, complexity, current state, and accountability gaps. Confidential and specific to this initiative — not templated from a previous one. Typically completed within five to ten business days.',
  },
  {
    n: '02',
    title: 'Execution Diagnosis',
    body: 'We identify precisely where execution has broken down — where ownership is unclear, where governance is absent, and where delivery infrastructure is missing or inadequate. This becomes the foundation of the engagement.',
  },
  {
    n: '03',
    title: 'Team Construction',
    body: 'VCG assembles the execution team this initiative requires — the right operators, at the right seniority, with the right domain capability. Not the available team. The right team.',
  },
  {
    n: '04',
    title: 'Embedded Activation',
    body: 'The team integrates into your environment — your tools, your governance, your stakeholder structure. Delivery begins immediately. There is no orientation period.',
  },
  {
    n: '05',
    title: 'Governance and Visibility',
    body: 'VCG establishes real-time program intelligence and accountability infrastructure. Leadership sees what is happening. Issues surface before they become problems. Decisions get made.',
  },
  {
    n: '06',
    title: 'Outcome Ownership',
    body: 'The engagement concludes when the defined outcome is achieved and verified — not when the initial timeline expires, not when the first milestone lands. This is the structure of every VCG engagement.',
  },
]

function Step({ step, index, inView }: { step: (typeof STEPS)[0]; index: number; inView: boolean }) {
  const isFinal = index === STEPS.length - 1
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: 0.12 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="relative"
    >
      {/* Connector line on desktop */}
      {!isFinal && (
        <div
          className="hidden md:block absolute top-3 left-[calc(1.5rem+1px)]"
          style={{
            width: 'calc(100% - 1.5rem)',
            height: '1px',
            background: 'rgba(17,18,20,0.07)',
          }}
          aria-hidden
        />
      )}

      <div className="flex items-center gap-2 mb-4">
        {/* Node */}
        <div
          className="flex-shrink-0 flex items-center justify-center rounded-full"
          style={{
            width: 24,
            height: 24,
            background: index === 0 ? '#111214' : '#FFFFFF',
            border: `1px solid ${index === 0 ? '#111214' : 'rgba(17,18,20,0.18)'}`,
            position: 'relative',
            zIndex: 1,
          }}
        >
          <span
            className="font-mono"
            style={{
              fontSize: '0.45rem',
              letterSpacing: '0.06em',
              color: index === 0 ? '#F5F3EE' : 'rgba(17,18,20,0.38)',
              fontWeight: 400,
            }}
          >
            {step.n}
          </span>
        </div>
      </div>

      <h3
        className="font-body font-medium mb-3"
        style={{ fontSize: '0.9375rem', color: '#111214', letterSpacing: '-0.008em', lineHeight: 1.25 }}
      >
        {step.title}
      </h3>
      <p
        className="font-body font-light"
        style={{
          fontSize: '0.8125rem',
          lineHeight: 1.78,
          color: 'rgba(17,18,20,0.50)',
          borderLeft: isFinal ? '2px solid rgba(17,18,20,0.14)' : 'none',
          paddingLeft: isFinal ? '0.875rem' : 0,
        }}
      >
        {step.body}
      </p>
    </motion.div>
  )
}

export function EngagementStructure() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section
      ref={ref}
      id="engagement-structure"
      className="relative section-pad"
      style={{ background: '#FFFFFF', borderTop: '1px solid rgba(17,18,20,0.07)' }}
    >
      <div className="container-site">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.70, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="vcg-label-dark mb-5">How An Engagement Works</p>
            <h2
              className="font-display font-normal"
              style={{ fontSize: 'clamp(1.9rem, 3vw, 3rem)', lineHeight: 1.1, letterSpacing: '-0.028em', color: '#111214', maxWidth: '24ch' }}
            >
              A defined structure. Not a template — a discipline.
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.70, delay: 0.10, ease: [0.16, 1, 0.3, 1] }}
            className="font-body font-light md:text-right"
            style={{ fontSize: '0.875rem', lineHeight: 1.78, maxWidth: '36ch', color: 'rgba(17,18,20,0.42)' }}
          >
            Every VCG engagement follows this structure. The sequence does not change. The specificity of each step does — to match the precise demands of your initiative.
          </motion.p>
        </div>

        {/* Steps — 6-column desktop, vertical mobile */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8 md:gap-5">
          {STEPS.map((step, i) => (
            <Step key={step.n} step={step} index={i} inView={inView} />
          ))}
        </div>

      </div>
    </section>
  )
}
