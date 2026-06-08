'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useContactModal } from '@/context/ContactModalContext'

const STAGES = [
  { label: 'Initiative Approved',     note: 'The board is aligned. Budget is allocated. Expectations are set.' },
  { label: 'Teams Mobilized',         note: 'Everyone attends the kick-off. Energy is real. Progress feels imminent.' },
  { label: 'Ownership Fragments',     note: 'Three people believe they own the same decision. Nobody does.' },
  { label: 'Meetings Multiply',       note: 'Status updates replace execution. Decks replace deliverables.' },
  { label: 'Visibility Declines',     note: 'No one knows what is actually happening. Reports are optimistic by habit.' },
  { label: 'Momentum Disappears',     note: 'The energy of the kick-off is gone. People stop asking about deadlines.' },
  { label: 'Deadlines Move',          note: 'The first slip becomes the second. Then the third. Each one is explained.' },
  { label: 'Budget Consumed',         note: 'Significant investment. Unclear outcomes. More budget requested.' },
  { label: 'Outcomes Missed',         note: 'The initiative is declared complete. The problem remains.' },
]

export function ExecutionGap() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.12 })
  const closingRef = useRef<HTMLDivElement>(null)
  const closingInView = useInView(closingRef, { once: true, amount: 0.5 })
  const { openModal } = useContactModal()

  return (
    <section
        ref={ref}
        id="execution-gap"
        className="relative section-pad overflow-hidden"
        style={{ background: '#FFFFFF', borderTop: '1px solid rgba(17,18,20,0.07)' }}
      >
        <div className="container-site">

          {/* Opening challenge */}
          <div className="mb-16">
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0 }}
              className="vcg-label-dark mb-6"
            >
              The Problem
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <p
                className="font-display font-normal italic"
                style={{
                  fontSize: 'clamp(1.5rem, 2.4vw, 2.4rem)',
                  lineHeight: 1.2,
                  letterSpacing: '-0.022em',
                  color: 'rgba(17,18,20,0.38)',
                }}
              >
                You know this feeling.
              </p>
            </motion.div>
          </div>

          {/* Two-column layout: cascade left, framing right */}
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-16 lg:gap-20">

            {/* Cascade */}
            <div>
              {STAGES.map((stage, i) => {
                // Progressive visual weight
                const isFinal   = i === STAGES.length - 1
                const isCritical = i >= 6
                const labelOpacity = 0.28 + (i / (STAGES.length - 1)) * 0.62
                const noteOpacity  = isFinal ? 0.72 : 0.36 + (i / (STAGES.length - 1)) * 0.14

                return (
                  <motion.div
                    key={stage.label}
                    initial={{ opacity: 0, x: -8 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.50, delay: 0.12 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-start gap-5 mb-0"
                  >
                    {/* Connector */}
                    <div className="flex flex-col items-center flex-shrink-0 mt-1">
                      <div
                        style={{
                          width: isFinal ? 8 : 6,
                          height: isFinal ? 8 : 6,
                          borderRadius: '50%',
                          background: isFinal ? '#111214' : isCritical ? 'rgba(17,18,20,0.40)' : 'rgba(17,18,20,0.18)',
                          flexShrink: 0,
                        }}
                      />
                      {i < STAGES.length - 1 && (
                        <motion.div
                          initial={{ scaleY: 0 }}
                          animate={inView ? { scaleY: 1 } : {}}
                          transition={{ duration: 0.4, delay: 0.16 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                          style={{
                            width: 1,
                            height: 40,
                            background: `rgba(17,18,20,${0.06 + (i / STAGES.length) * 0.08})`,
                            transformOrigin: 'top',
                          }}
                        />
                      )}
                    </div>

                    {/* Content */}
                    <div className="pb-0" style={{ paddingBottom: i < STAGES.length - 1 ? '0' : 0 }}>
                      <p
                        className="font-body"
                        style={{
                          fontSize: isFinal ? '1.0625rem' : '0.9375rem',
                          fontWeight: isFinal ? 500 : isCritical ? 500 : 400,
                          color: `rgba(17,18,20,${labelOpacity})`,
                          letterSpacing: '-0.008em',
                          lineHeight: 1.3,
                          marginBottom: '0.2rem',
                        }}
                      >
                        {stage.label}
                        {isFinal && (
                          <span style={{ fontStyle: 'italic', fontWeight: 400, marginLeft: '0.4em', color: 'rgba(17,18,20,0.45)', fontSize: '0.875em' }}>
                            — the problem remains.
                          </span>
                        )}
                      </p>
                      {!isFinal && (
                        <p
                          className="font-body font-light"
                          style={{
                            fontSize: '0.8125rem',
                            lineHeight: 1.68,
                            color: `rgba(17,18,20,${noteOpacity})`,
                            paddingBottom: i < STAGES.length - 1 ? '0.5rem' : 0,
                          }}
                        >
                          {stage.note}
                        </p>
                      )}
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Right — framing + tension */}
            <div className="flex flex-col justify-between">
              <div>
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.65, delay: 0.20, ease: [0.16, 1, 0.3, 1] }}
                  className="font-display font-normal"
                  style={{
                    fontSize: 'clamp(1.5rem, 2.2vw, 2.1rem)',
                    lineHeight: 1.18,
                    letterSpacing: '-0.022em',
                    color: 'rgba(17,18,20,0.32)',
                    maxWidth: '28ch',
                  }}
                >
                  Most organizations do not have a strategy problem.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.65, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
                  className="font-display font-normal mt-4"
                  style={{
                    fontSize: 'clamp(1.5rem, 2.2vw, 2.1rem)',
                    lineHeight: 1.18,
                    letterSpacing: '-0.022em',
                    color: '#111214',
                    maxWidth: '28ch',
                  }}
                >
                  They have an execution problem.
                </motion.p>
              </div>

              {/* Closing — VCG introduction */}
              <motion.div
                ref={closingRef}
                initial={{ opacity: 0, y: 14 }}
                animate={closingInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, delay: 0.10, ease: [0.16, 1, 0.3, 1] }}
                className="mt-16 pt-8"
                style={{ borderTop: '1px solid rgba(17,18,20,0.08)' }}
              >
                <p className="font-body font-normal mb-4" style={{ fontSize: '0.9375rem', color: '#111214', lineHeight: 1.72 }}>
                  VCG was built for this exact moment.
                </p>
                <p className="font-body font-light mb-7" style={{ fontSize: '0.875rem', color: 'rgba(17,18,20,0.48)', lineHeight: 1.78, maxWidth: '36ch' }}>
                  Not to observe it. Not to report on it. To enter the initiative, assume ownership of execution, and deliver the outcome.
                </p>
                <button
                  onClick={openModal}
                  className="inline-flex items-center gap-2 font-body font-normal transition-colors duration-200 group"
                  style={{ fontSize: '0.8125rem', color: 'rgba(17,18,20,0.38)' }}
                  onMouseEnter={e => (e.currentTarget as HTMLButtonElement).style.color = '#111214'}
                  onMouseLeave={e => (e.currentTarget as HTMLButtonElement).style.color = 'rgba(17,18,20,0.38)'}
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
