'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useSpring } from 'framer-motion'

const PHASES = [
  {
    n: '01',
    name: 'Assess',
    tag: 'Initiative Scoping',
    body: 'A structured assessment of scope, required capabilities, timeline, and risk profile. No assumptions. No templates from a previous engagement. This initiative is treated as the specific challenge it is.',
    accent: 'Define the mission with precision.',
  },
  {
    n: '02',
    name: 'Assemble',
    tag: 'Team Construction',
    body: 'VCG builds the exact team this initiative demands — right specialists, right seniority, right accountability structure. Not the available team. The right team.',
    accent: 'Right people. Right moment.',
  },
  {
    n: '03',
    name: 'Embed',
    tag: 'Integration & Activation',
    body: 'The team integrates into your environment — your tools, your rhythms, your stakeholders. No ramp-up theater. No orientation period. Execution begins on day one.',
    accent: 'Inside your world from Day One.',
  },
  {
    n: '04',
    name: 'Deliver',
    tag: 'Accountable Execution',
    body: 'Full operational accountability from kickoff through outcome. Milestones held. Quality non-negotiable. The engagement concludes when the outcome is achieved — not when the initial timeline expires.',
    accent: 'Outcomes. Not reports.',
  },
]

function PhaseCard({ phase, idx }: { phase: (typeof PHASES)[0]; idx: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-6% 0px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex flex-col"
      style={{ minWidth: 0 }}
    >
      {/* Phase header */}
      <div className="flex items-baseline gap-3 mb-5">
        <span className="font-mono" style={{ fontSize: '0.5rem', letterSpacing: '0.12em', color: 'rgba(17,18,20,0.24)', fontWeight: 400 }}>
          {phase.n}
        </span>
        <span className="font-body font-normal" style={{ fontSize: '0.625rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(17,18,20,0.28)' }}>
          {phase.tag}
        </span>
      </div>

      {/* Phase name — large, ownable */}
      <div style={{ overflow: 'hidden', marginBottom: '1rem' }}>
        <motion.h3
          initial={{ y: '80%', opacity: 0 }}
          animate={inView ? { y: '0%', opacity: 1 } : {}}
          transition={{ duration: 0.75, delay: idx * 0.08 + 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-normal"
          style={{
            fontSize: 'clamp(2rem, 3vw, 2.8rem)',
            lineHeight: 1.0,
            letterSpacing: '-0.032em',
            color: '#111214',
          }}
        >
          {phase.name}
        </motion.h3>
      </div>

      {/* Amber line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.6, delay: idx * 0.08 + 0.30, ease: [0.16, 1, 0.3, 1] }}
        style={{ width: '28px', height: '2px', background: '#C8A96E', transformOrigin: 'left', marginBottom: '1rem' }}
      />

      {/* Body */}
      <p className="font-body font-light flex-1" style={{ fontSize: '0.875rem', lineHeight: 1.85, color: 'rgba(17,18,20,0.52)' }}>
        {phase.body}
      </p>

      {/* Accent */}
      <p
        className="font-display italic mt-5 pt-4"
        style={{ fontSize: '0.875rem', borderTop: '1px solid rgba(17,18,20,0.08)', color: 'rgba(17,18,20,0.30)', letterSpacing: '-0.005em' }}
      >
        {phase.accent}
      </p>
    </motion.div>
  )
}

function TimelineLine() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 80%', 'end 50%'] })
  const scaleX = useSpring(scrollYProgress, { stiffness: 55, damping: 20, restDelta: 0.001 })

  return (
    <div ref={ref} className="relative h-px w-full" style={{ background: 'rgba(17,18,20,0.10)' }}>
      <motion.div
        className="absolute top-0 left-0 h-full origin-left"
        style={{ scaleX, background: 'linear-gradient(90deg, #C8A96E 0%, rgba(200,169,110,0.40) 75%, transparent 100%)' }}
      />
    </div>
  )
}

export function ExecutionModel() {
  const headerRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-10% 0px' })

  return (
    <section id="model" className="relative section-pad overflow-hidden" style={{ background: '#F5F3EE', borderTop: '1px solid rgba(17,18,20,0.07)' }}>

      <div className="container-site relative z-10">

        {/* Framework header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 14 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 md:mb-16"
        >
          <div>
            {/* Branded framework name */}
            <div className="flex items-center gap-3 mb-4">
              <span className="vcg-label-dark">How We Operate</span>
              <div style={{ height: '1px', width: '24px', background: 'rgba(17,18,20,0.14)' }} />
              <span className="font-body font-normal" style={{ fontSize: '0.5625rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(17,18,20,0.30)' }}>
                Proprietary Framework
              </span>
            </div>
            <h2
              className="font-display font-normal"
              style={{ fontSize: 'clamp(1.9rem, 3.2vw, 3.2rem)', lineHeight: 1.08, letterSpacing: '-0.030em', color: '#111214' }}
            >
              The VCG Execution Model
            </h2>
          </div>
          <p
            className="font-body font-light md:text-right"
            style={{ fontSize: '0.9375rem', lineHeight: 1.78, maxWidth: '38ch', color: 'rgba(17,18,20,0.46)' }}
          >
            Four phases. Full accountability. No ambiguity from first conversation to final outcome.
          </p>
        </motion.div>

        {/* Desktop — horizontal with timeline */}
        <div className="hidden md:block">
          <TimelineLine />
          {/* Phase names bar */}
          <div className="grid grid-cols-4 gap-6 mt-2 mb-8">
            {PHASES.map((phase, i) => (
              <div key={phase.n} className="flex items-center gap-2">
                <div
                  style={{
                    width: 8, height: 8, borderRadius: '50%', flexShrink: 0,
                    background: i === 0 ? '#111214' : 'rgba(17,18,20,0.20)',
                    border: i === 0 ? 'none' : '1px solid rgba(17,18,20,0.20)',
                    marginTop: '-4px',
                    position: 'relative', top: '-4px',
                  }}
                />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-4 gap-6">
            {PHASES.map((phase, i) => <PhaseCard key={phase.n} phase={phase} idx={i} />)}
          </div>
        </div>

        {/* Mobile — vertical */}
        <div className="md:hidden space-y-10">
          {PHASES.map((phase, i) => (
            <div key={phase.n} className="relative pl-10">
              {i < PHASES.length - 1 && (
                <div
                  className="absolute left-[7px] top-8 bottom-0 w-px"
                  style={{ background: 'linear-gradient(to bottom, rgba(200,169,110,0.55), rgba(200,169,110,0.04))' }}
                />
              )}
              {/* Node */}
              <div
                className="absolute left-0 top-0 flex items-center justify-center rounded-full"
                style={{
                  width: 16, height: 16,
                  background: i === 0 ? '#111214' : '#FFFFFF',
                  border: `1px solid ${i === 0 ? '#111214' : 'rgba(17,18,20,0.20)'}`,
                }}
              />
              <span className="font-body font-normal mb-1 block" style={{ fontSize: '0.5625rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(17,18,20,0.28)' }}>
                {phase.tag}
              </span>
              <h3 className="font-display font-normal mb-2" style={{ fontSize: '2rem', lineHeight: 1.05, letterSpacing: '-0.028em', color: '#111214' }}>
                {phase.name}
              </h3>
              <div style={{ width: 24, height: 2, background: '#C8A96E', marginBottom: '0.75rem' }} />
              <p className="font-body font-light mb-3" style={{ fontSize: '0.9375rem', lineHeight: 1.80, color: 'rgba(17,18,20,0.52)' }}>
                {phase.body}
              </p>
              <p className="font-display italic" style={{ fontSize: '0.875rem', color: 'rgba(17,18,20,0.30)', letterSpacing: '-0.005em' }}>
                {phase.accent}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
