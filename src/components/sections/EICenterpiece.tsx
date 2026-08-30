'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { ExecutionIntelligenceMap } from '@/components/sections/execution-intelligence/ExecutionIntelligenceMap'

const EASE = [0.16, 1, 0.3, 1] as const

const DIMS = [
  {
    n: 'I',
    label: 'Accountability',
    body: 'Unambiguous ownership of each initiative component — not responsibility matrices, but a single named person accountable for every outcome.',
  },
  {
    n: 'II',
    label: 'Decision Architecture',
    body: 'Pre-established frameworks that determine which decisions require escalation, which require consultation, and which are permanently delegated.',
  },
  {
    n: 'III',
    label: 'Executive Visibility',
    body: 'The structural observation layer through which senior leadership maintains accurate awareness of real execution state — designed to see actual conditions rather than relying on voluntary disclosure.',
  },
  {
    n: 'IV',
    label: 'Dependency Ownership',
    body: 'Explicit identification and active management of cross-functional and external dependencies as primary execution variables, not secondary concerns.',
  },
  {
    n: 'V',
    label: 'Outcome Discipline',
    body: 'Progress measured against original intended outcomes — not against revised targets that have silently absorbed scope, time, or budget changes.',
  },
]

export function EICenterpiece() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })
  const [hoveredDim, setHoveredDim] = useState<number | null>(null)

  return (
    <section
      ref={ref}
      id="ei-centerpiece"
      style={{ background: '#0B0B0D', borderTop: '1px solid rgba(255,255,255,0.05)' }}
    >
      {/* Specular hairline */}
      <div
        className="absolute left-0 right-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg,transparent,rgba(255,255,255,0.07) 40%,rgba(255,255,255,0.10) 50%,rgba(255,255,255,0.07) 60%,transparent)' }}
        aria-hidden
      />

      <div className="container-site" style={{ paddingTop: 'clamp(4.5rem,8vw,7.5rem)', paddingBottom: 'clamp(4.5rem,8vw,7.5rem)' }}>

        <div className="grid grid-cols-1 lg:grid-cols-[5fr_6fr] gap-12 lg:gap-20 items-start">

          {/* Left — label + definition + dimension index */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.70, ease: EASE }}
            >
              <p className="vcg-label mb-6">Execution Intelligence</p>
              <h2
                className="font-display font-normal"
                style={{ fontSize: 'clamp(1.7rem, 2.8vw, 2.8rem)', lineHeight: 1.10, letterSpacing: '-0.028em', color: '#F5F3EE', maxWidth: '22ch', marginBottom: '1.5rem' }}
              >
                The structural conditions for reliable execution.
              </h2>
              <p
                className="font-body font-light"
                style={{ fontSize: '0.9375rem', lineHeight: 1.82, color: 'rgba(245,243,238,0.42)', maxWidth: '44ch', marginBottom: '2rem' }}
              >
                Execution Intelligence is the discipline of establishing and maintaining the structural conditions — ownership, decision architecture, visibility, dependency control, and outcome alignment — that determine whether an enterprise initiative delivers what it was designed to achieve.
              </p>

              <Link
                href="/execution-intelligence"
                className="inline-flex items-center gap-2 font-body font-normal transition-all duration-200 group"
                style={{ fontSize: '0.875rem', color: 'var(--color-amber-500)', textDecoration: 'none', letterSpacing: '0.01em' }}
                onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.opacity = '0.75'}
                onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.opacity = '1'}
              >
                Explore Execution Intelligence
                <ArrowRight size={13} strokeWidth={1.5} className="transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </motion.div>

            {/* Dimension index — hover highlights corresponding region in the diagram */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.22, ease: EASE }}
              style={{ marginTop: '2.5rem' }}
            >
              {DIMS.map((dim, i) => (
                <div
                  key={dim.n}
                  style={{
                    borderTop: '1px solid rgba(245,243,238,0.06)',
                    padding: '0.875rem 0',
                    opacity: hoveredDim === null || hoveredDim === i ? 1 : 0.28,
                    transition: 'opacity 0.18s ease',
                    cursor: 'default',
                  }}
                  onMouseEnter={() => setHoveredDim(i)}
                  onMouseLeave={() => setHoveredDim(null)}
                >
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.625rem', marginBottom: '0.3rem' }}>
                    <span style={{ fontFamily: 'var(--font-mono-var, monospace)', fontSize: '0.5rem', color: 'rgba(200,169,110,0.60)', letterSpacing: '0.10em', flexShrink: 0 }}>
                      {dim.n}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-body-var, sans-serif)',
                        fontSize: '0.8125rem',
                        fontWeight: 500,
                        color: hoveredDim === i ? 'var(--color-amber-500)' : '#F5F3EE',
                        letterSpacing: '-0.005em',
                        transition: 'color 0.18s ease',
                      }}
                    >
                      {dim.label}
                    </span>
                  </div>
                  <p style={{ fontFamily: 'var(--font-body-var, sans-serif)', fontSize: '0.8125rem', fontWeight: 300, color: 'rgba(245,243,238,0.38)', lineHeight: 1.72, margin: 0 }}>
                    {dim.body}
                  </p>
                </div>
              ))}
              <div style={{ borderTop: '1px solid rgba(245,243,238,0.06)' }} />
            </motion.div>
          </div>

          {/* Right — framework diagram */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.70, delay: 0.14, ease: EASE }}
          >
            <ExecutionIntelligenceMap hoveredDim={hoveredDim} />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
