'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const PILLARS = [
  {
    n: '01',
    tag: 'People',
    title: 'Embedded Leadership',
    body: 'Senior operators who assume delivery responsibility from day one. Not advisors who observe — executives who own the outcome and are accountable for it.',
    items: ['Program Directors', 'Transformation Leaders', 'Delivery Executives', 'Domain Specialists'],
  },
  {
    n: '02',
    tag: 'Systems',
    title: 'Execution Infrastructure',
    body: 'Governance architecture, decision frameworks, and accountability structures built specifically for the initiative — not adapted from a previous engagement.',
    items: ['Execution Frameworks', 'Governance Architecture', 'Decision Infrastructure', 'Accountability Systems'],
  },
  {
    n: '03',
    tag: 'Intelligence',
    title: 'AI-Enabled Governance',
    body: 'Real-time program visibility, decision support, and coordination infrastructure that keeps leadership informed and execution on course at every stage.',
    items: ['Decision Support', 'Program Visibility', 'Governance Acceleration', 'Coordination Infrastructure'],
  },
]

function OSLayer({ label, tag, items, delay, inView }: {
  label: string; tag: string; items: string[]; delay: number; inView: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
      className="flex items-stretch"
      style={{ border: '1px solid rgba(17,18,20,0.08)', borderRadius: '3px', overflow: 'hidden' }}
    >
      {/* Tag */}
      <div
        className="flex items-center justify-center flex-shrink-0"
        style={{
          width: '80px',
          background: 'rgba(17,18,20,0.04)',
          borderRight: '1px solid rgba(17,18,20,0.07)',
          padding: '0.75rem 0.5rem',
        }}
      >
        <span
          className="font-body font-medium"
          style={{
            fontSize: '0.5625rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'rgba(17,18,20,0.36)',
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
            transform: 'rotate(180deg)',
          }}
        >
          {tag}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-5 py-4">
        <span className="font-body font-medium" style={{ fontSize: '0.9375rem', color: '#111214', letterSpacing: '-0.008em' }}>
          {label}
        </span>
        <div className="flex flex-wrap gap-1.5">
          {items.map(item => (
            <span
              key={item}
              className="font-body font-light"
              style={{
                fontSize: '0.625rem',
                letterSpacing: '0.06em',
                color: 'rgba(17,18,20,0.38)',
                padding: '0.2rem 0.5rem',
                background: 'rgba(17,18,20,0.04)',
                borderRadius: '2px',
                whiteSpace: 'nowrap',
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export function ExecutionIntelligence() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.18 })
  const diagramRef = useRef<HTMLDivElement>(null)
  const diagramInView = useInView(diagramRef, { once: true, amount: 0.25 })

  return (
    <section
      ref={ref}
      id="execution-intelligence"
      className="relative section-pad"
      style={{ background: '#FFFFFF', borderTop: '1px solid rgba(17,18,20,0.07)' }}
    >
      <div className="container-site">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-8 mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="vcg-label-dark mb-5">What Is Execution Intelligence</p>
            <h2
              className="font-display font-normal"
              style={{ fontSize: 'clamp(1.9rem, 3vw, 3rem)', lineHeight: 1.1, letterSpacing: '-0.030em', color: '#111214' }}
            >
              A new category of organizational capability.
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.72, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-end"
          >
            <p className="font-body font-light" style={{ fontSize: '1rem', lineHeight: 1.82, color: 'rgba(17,18,20,0.52)', maxWidth: '48ch' }}>
              Execution Intelligence is the systematic capability to close the gap between strategic intent and measurable outcomes — through embedded leadership, AI-enabled governance, and accountable delivery ownership.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16 items-start">

          {/* Three pillars */}
          <div className="space-y-8">
            {PILLARS.map((pillar, i) => (
              <motion.div
                key={pillar.n}
                initial={{ opacity: 0, y: 18 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, delay: 0.14 + i * 0.10, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono" style={{ fontSize: '0.5rem', letterSpacing: '0.12em', color: 'rgba(17,18,20,0.24)', fontWeight: 400 }}>{pillar.n}</span>
                  <span className="font-body font-medium" style={{ fontSize: '0.625rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(17,18,20,0.36)' }}>{pillar.tag}</span>
                </div>
                <h3 className="font-display font-normal mb-3" style={{ fontSize: 'clamp(1.25rem, 1.8vw, 1.7rem)', letterSpacing: '-0.020em', lineHeight: 1.15, color: '#111214' }}>
                  {pillar.title}
                </h3>
                <p className="font-body font-light" style={{ fontSize: '0.9375rem', lineHeight: 1.80, color: 'rgba(17,18,20,0.54)' }}>
                  {pillar.body}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Execution Operating System — Proof Diagram */}
          <div ref={diagramRef}>
            <motion.p
              initial={{ opacity: 0 }}
              animate={diagramInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="vcg-label-dark mb-5"
            >
              Execution Operating System
            </motion.p>

            <div className="space-y-1.5">
              <OSLayer
                label="Embedded Leadership"
                tag="People"
                items={['Program Directors', 'Transformation Leaders', 'Delivery Executives']}
                delay={0.10}
                inView={diagramInView}
              />
              <OSLayer
                label="Execution Infrastructure"
                tag="Systems"
                items={['Governance Architecture', 'Execution Frameworks', 'Accountability Systems']}
                delay={0.20}
                inView={diagramInView}
              />
              <OSLayer
                label="AI-Enabled Governance"
                tag="Intelligence"
                items={['Decision Support', 'Program Visibility', 'Governance Acceleration']}
                delay={0.30}
                inView={diagramInView}
              />
            </div>

            {/* Arrow connector */}
            <motion.div
              initial={{ opacity: 0, scaleY: 0 }}
              animate={diagramInView ? { opacity: 1, scaleY: 1 } : {}}
              transition={{ duration: 0.45, delay: 0.44, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center my-1.5"
              style={{ transformOrigin: 'top' }}
              aria-hidden
            >
              <div style={{ width: 1, height: 20, background: 'rgba(17,18,20,0.14)' }} />
              <svg width="8" height="5" viewBox="0 0 8 5" fill="none" style={{ opacity: 0.30 }}>
                <path d="M0 0L4 5L8 0" stroke="#111214" strokeWidth="1.2" />
              </svg>
            </motion.div>

            {/* Outcome layer */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={diagramInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.52, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center justify-between px-5 py-4 rounded-[3px]"
              style={{ background: '#111214', border: '1px solid #111214' }}
            >
              <span className="font-body font-medium" style={{ fontSize: '0.9375rem', color: '#F5F3EE', letterSpacing: '-0.008em' }}>
                Measurable Outcomes
              </span>
              <span className="font-body font-light" style={{ fontSize: '0.625rem', letterSpacing: '0.10em', textTransform: 'uppercase', color: 'rgba(245,243,238,0.36)' }}>
                Delivered
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={diagramInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.65 }}
              className="font-body font-light mt-4"
              style={{ fontSize: '0.75rem', lineHeight: 1.78, color: 'rgba(17,18,20,0.32)' }}
            >
              The three layers of Execution Intelligence operate simultaneously — not sequentially. People, Systems, and Intelligence are deployed together from day one.
            </motion.p>
          </div>

        </div>
      </div>
    </section>
  )
}
