'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useContactModal } from '@/context/ContactModalContext'

const EASE = [0.16, 1, 0.3, 1] as const

const SIGNALS = [
  {
    signal: 'Ownership fragments.',
    note: 'Three people believe they own the same decision. Nobody does. Nothing gets resolved.',
  },
  {
    signal: 'Status updates replace execution.',
    note: 'Meetings multiply. Decks replace deliverables. Progress becomes a report rather than a result.',
  },
  {
    signal: 'Leadership loses visibility.',
    note: 'No one knows what is actually happening. Status reports are optimistic by habit.',
  },
  {
    signal: 'Deadlines move. Again.',
    note: 'The first slip becomes the second. Each one arrives with an explanation.',
  },
  {
    signal: 'The initiative completes. The problem remains.',
    note: 'The original ambition — the reason it was funded — has been quietly reduced to something achievable.',
  },
]

export function EditorialProblem() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.10 })
  const closingRef = useRef<HTMLDivElement>(null)
  const closingInView = useInView(closingRef, { once: true, amount: 0.5 })
  const { openModal } = useContactModal()

  return (
    <section
      ref={ref}
      id="execution-problem"
      style={{ background: '#FFFFFF', borderTop: '1px solid rgba(17,18,20,0.07)' }}
    >
      <div className="container-site" style={{ paddingTop: 'clamp(4rem,7vw,7rem)', paddingBottom: 'clamp(4rem,7vw,7rem)' }}>

        {/* Asymmetric two-column */}
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_4fr] gap-12 lg:gap-20">

          {/* Left — editorial opener + signals */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.70, ease: EASE }}
              className="mb-12"
            >
              <p className="vcg-label-dark mb-6">The Problem</p>
              <p
                className="font-display font-normal"
                style={{ fontSize: 'clamp(1.8rem, 3.2vw, 3.4rem)', lineHeight: 1.08, letterSpacing: '-0.030em', color: '#111214', maxWidth: '18ch' }}
              >
                Most organizations do not have a strategy problem.
              </p>
              <p
                className="font-display font-normal italic mt-2"
                style={{ fontSize: 'clamp(1.8rem, 3.2vw, 3.4rem)', lineHeight: 1.08, letterSpacing: '-0.030em', color: 'rgba(17,18,20,0.32)', maxWidth: '18ch' }}
              >
                They have an execution problem.
              </p>
            </motion.div>

            {/* Signal list */}
            <div>
              {SIGNALS.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -6 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.48, delay: 0.14 + i * 0.07, ease: EASE }}
                  style={{
                    borderTop: '1px solid rgba(17,18,20,0.07)',
                    padding: '1.125rem 0',
                    paddingLeft: '1.25rem',
                    borderLeft: i === SIGNALS.length - 1 ? '2px solid #C8A96E' : '2px solid rgba(17,18,20,0.08)',
                  }}
                >
                  <p className="font-body font-medium" style={{ fontSize: '0.9375rem', color: '#111214', letterSpacing: '-0.005em', marginBottom: '0.25rem', lineHeight: 1.3 }}>
                    {item.signal}
                  </p>
                  <p className="font-body font-light" style={{ fontSize: '0.8125rem', color: 'rgba(17,18,20,0.48)', lineHeight: 1.70 }}>
                    {item.note}
                  </p>
                </motion.div>
              ))}
              <div style={{ borderTop: '1px solid rgba(17,18,20,0.07)' }} />
            </div>
          </div>

          {/* Right — structural framing */}
          <div className="flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.70, delay: 0.12, ease: EASE }}
            >
              <p
                className="font-body font-light"
                style={{ fontSize: '1rem', lineHeight: 1.84, color: 'rgba(17,18,20,0.44)', maxWidth: '38ch' }}
              >
                This sequence is not a project management failure. It is a structural failure — the predictable result of missing accountability, absent decision architecture, degraded visibility, unmanaged dependencies, and drift from original outcomes.
              </p>
              <p
                className="font-body font-light mt-5"
                style={{ fontSize: '1rem', lineHeight: 1.84, color: 'rgba(17,18,20,0.44)', maxWidth: '38ch' }}
              >
                Each failure has a name. Each name maps to a structural condition. Each condition can be established before execution begins.
              </p>

              <div style={{ marginTop: '2rem', paddingTop: '1.75rem', borderTop: '1px solid rgba(17,18,20,0.08)' }}>
                <p className="font-display font-normal italic" style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.55rem)', lineHeight: 1.28, letterSpacing: '-0.018em', color: 'rgba(17,18,20,0.36)', maxWidth: '28ch' }}>
                  &ldquo;The gap between strategic intent and delivered outcomes is not inevitable. It is structural — and structural problems have structural solutions.&rdquo;
                </p>
              </div>
            </motion.div>

            <motion.div
              ref={closingRef}
              initial={{ opacity: 0, y: 10 }}
              animate={closingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.60, delay: 0.08, ease: EASE }}
              className="mt-10 lg:mt-0"
            >
              <button
                onClick={openModal}
                className="inline-flex items-center gap-2 font-body font-normal transition-colors duration-200"
                style={{ fontSize: '0.8125rem', color: 'rgba(17,18,20,0.34)' }}
                onMouseEnter={e => (e.currentTarget as HTMLButtonElement).style.color = '#111214'}
                onMouseLeave={e => (e.currentTarget as HTMLButtonElement).style.color = 'rgba(17,18,20,0.34)'}
              >
                If this describes your initiative →
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
