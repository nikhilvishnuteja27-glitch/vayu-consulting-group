'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useSpring } from 'framer-motion'

const PHASES = [
  { n: '01', name: 'Assess',   tag: 'Initiative Scoping',        body: 'A structured assessment of scope, required capabilities, timeline, and risk profile. No assumptions. No templates from the last engagement.',              accent: 'Define the mission with precision.' },
  { n: '02', name: 'Assemble', tag: 'Team Construction',         body: 'VCG builds the exact team your initiative demands — right specialists, right seniority, right structure. Selected for the specific challenge.',               accent: 'Right people, right moment.'       },
  { n: '03', name: 'Embed',    tag: 'Integration & Activation',  body: 'The team integrates into your environment — your tools, rhythms, and stakeholders. No ramp-up theater. Execution begins from day one.',                        accent: 'Inside your world from Day 1.'    },
  { n: '04', name: 'Deliver',  tag: 'Accountable Execution',     body: 'Operational accountability from kickoff through completion. Milestones held. Quality non-negotiable. Results and capability transfer — not reports.',           accent: 'Outcomes, not outputs.'           },
]

function PhaseColumn({ phase, idx }: { phase: (typeof PHASES)[0]; idx: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-6% 0px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.78, delay: idx * 0.09, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex flex-col"
      style={{ minWidth: 0 }}
    >
      {/* Node badge */}
      <div className="relative mb-7 flex items-center">
        <div
          className="flex items-center justify-center rounded-full flex-shrink-0 z-10"
          style={{
            width: 34, height: 34,
            background: idx === 0 ? '#F5F3EE' : '#1A1D22',
            border: `1px solid ${idx === 0 ? '#F5F3EE' : 'rgba(255,255,255,0.12)'}`,
            boxShadow: idx === 0 ? '0 0 0 4px rgba(200,169,110,0.15), 0 4px 16px rgba(0,0,0,0.40)' : '0 2px 8px rgba(0,0,0,0.30)',
          }}
        >
          <span className="font-mono" style={{
            fontSize: '0.5625rem', letterSpacing: '0.08em',
            color: idx === 0 ? '#0B0B0D' : 'rgba(245,243,238,0.36)',
            fontWeight: 400,
          }}>
            {phase.n}
          </span>
        </div>
      </div>

      <p className="font-body font-normal mb-2" style={{ fontSize: '0.625rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(245,243,238,0.24)' }}>
        {phase.tag}
      </p>

      <h3 className="font-display font-normal mb-3" style={{ fontSize: 'clamp(1.5rem, 2vw, 2rem)', lineHeight: 1.1, letterSpacing: '-0.024em', color: '#F5F3EE' }}>
        {phase.name}
      </h3>

      <div className="mb-4" style={{ width: 24, height: 1, background: '#C8A96E', opacity: 0.60 }} />

      <p className="font-body font-light flex-1" style={{ fontSize: '0.875rem', lineHeight: 1.82, color: 'rgba(245,243,238,0.50)' }}>
        {phase.body}
      </p>

      <p className="font-display italic mt-5 pt-4" style={{ fontSize: '0.875rem', borderTop: '1px solid rgba(255,255,255,0.06)', color: 'rgba(245,243,238,0.30)', letterSpacing: '-0.005em' }}>
        {phase.accent}
      </p>

      {/* Ghost ordinal */}
      <div className="absolute bottom-0 right-0 font-display font-normal select-none pointer-events-none" style={{ fontSize: '5rem', lineHeight: 1, letterSpacing: '-0.06em', color: 'rgba(255,255,255,0.025)' }} aria-hidden>
        {phase.n}
      </div>
    </motion.div>
  )
}

function TimelineLine() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 80%', 'end 55%'] })
  const scaleX = useSpring(scrollYProgress, { stiffness: 60, damping: 22, restDelta: 0.001 })

  return (
    <div ref={ref} className="relative h-px w-full" style={{ background: 'rgba(255,255,255,0.06)' }}>
      <motion.div
        className="absolute top-0 left-0 h-full origin-left"
        style={{ scaleX, background: 'linear-gradient(90deg, #C8A96E 0%, #D4B483 55%, rgba(200,169,110,0.18) 100%)' }}
      />
    </div>
  )
}

export function ExecutionModel() {
  const headerRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-10% 0px' })

  return (
    <section id="execution" className="relative section-pad overflow-hidden" style={{ background: '#0B0B0D' }}>
      <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 50% at 100% 40%, rgba(200,169,110,0.025) 0%, transparent 70%)' }} />

      <div className="container-site relative z-10">
        <div className="rule mb-10 md:mb-12" />

        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 18 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 md:mb-16"
        >
          <div>
            <p className="vcg-label mb-4">How We Operate</p>
            <h2 className="font-display font-normal" style={{ fontSize: 'clamp(1.9rem, 3.2vw, 3.2rem)', lineHeight: 1.1, letterSpacing: '-0.028em', color: '#F5F3EE' }}>
              The Execution Model
            </h2>
          </div>
          <p className="font-body font-light md:text-right" style={{ fontSize: '1rem', lineHeight: 1.75, maxWidth: '38ch', color: 'rgba(245,243,238,0.48)' }}>
            Four distinct phases. Full accountability.<br className="hidden md:block" />
            No ambiguity from first conversation to final delivery.
          </p>
        </motion.div>

        {/* Desktop horizontal timeline */}
        <div className="hidden md:block">
          <TimelineLine />
          <div className="grid grid-cols-4 gap-8 mt-8">
            {PHASES.map((phase, i) => <PhaseColumn key={phase.n} phase={phase} idx={i} />)}
          </div>
        </div>

        {/* Mobile vertical stack */}
        <div className="md:hidden space-y-10">
          {PHASES.map((phase, i) => (
            <div key={phase.n} className="relative pl-10">
              {i < PHASES.length - 1 && (
                <div className="absolute left-[16px] top-9 bottom-0 w-px" style={{ background: 'linear-gradient(to bottom, rgba(200,169,110,0.50), rgba(200,169,110,0.04))' }} />
              )}
              <div className="absolute left-0 top-0 flex items-center justify-center rounded-full" style={{ width: 34, height: 34, background: i === 0 ? '#F5F3EE' : '#1A1D22', border: `1px solid ${i === 0 ? '#F5F3EE' : 'rgba(255,255,255,0.12)'}` }}>
                <span className="font-mono" style={{ fontSize: '0.5625rem', letterSpacing: '0.08em', color: i === 0 ? '#0B0B0D' : 'rgba(245,243,238,0.36)', fontWeight: 400 }}>{phase.n}</span>
              </div>
              <p className="font-body font-normal mb-1.5" style={{ fontSize: '0.625rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(245,243,238,0.24)' }}>{phase.tag}</p>
              <h3 className="font-display font-normal mb-3" style={{ fontSize: '1.65rem', lineHeight: 1.1, letterSpacing: '-0.022em', color: '#F5F3EE' }}>{phase.name}</h3>
              <div style={{ width: 24, height: 1, background: '#C8A96E', opacity: 0.60, marginBottom: '0.75rem' }} />
              <p className="font-body font-light" style={{ fontSize: '0.9375rem', lineHeight: 1.78, color: 'rgba(245,243,238,0.50)', marginBottom: '0.75rem' }}>{phase.body}</p>
              <p className="font-display italic" style={{ fontSize: '0.875rem', color: 'rgba(245,243,238,0.28)', letterSpacing: '-0.005em' }}>{phase.accent}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
