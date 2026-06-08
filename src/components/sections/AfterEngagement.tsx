'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const OUTCOMES = [
  { text: 'Leadership sees the truth before issues become crises.',           weight: 'normal' },
  { text: 'Decisions happen faster because accountability is visible.',       weight: 'normal' },
  { text: 'Teams move with confidence because expectations are explicit.',    weight: 'normal' },
  { text: 'Governance becomes operational rather than ceremonial.',           weight: 'normal' },
  { text: 'Critical initiatives stop consuming energy and start producing outcomes.', weight: 'medium' },
  { text: 'Execution becomes measurable.',                                    weight: 'medium' },
  { text: 'Momentum becomes sustainable.',                                    weight: 'medium' },
]

export function AfterEngagement() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.20 })

  return (
    <section
      ref={ref}
      id="after-engagement"
      className="relative section-pad"
      style={{ background: '#FFFFFF', borderTop: '1px solid rgba(17,18,20,0.07)' }}
    >
      <div className="container-site">
        <div className="max-w-3xl">

          {/* Label + headline */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
            className="mb-14"
          >
            <p className="vcg-label-dark mb-6">After Engagement</p>
            <h2
              className="font-display font-normal"
              style={{
                fontSize: 'clamp(2rem, 3.4vw, 3.4rem)',
                lineHeight: 1.08,
                letterSpacing: '-0.030em',
                color: '#111214',
              }}
            >
              What changes when execution is owned.
            </h2>
          </motion.div>

          {/* Outcome statements */}
          <div className="space-y-5">
            {OUTCOMES.map((outcome, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.60, delay: 0.14 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-baseline gap-5"
              >
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={inView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.45, delay: 0.16 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="flex-shrink-0"
                  style={{ width: 20, height: 1, background: 'rgba(17,18,20,0.14)', transformOrigin: 'left', marginTop: '0.6em' }}
                />
                <p
                  className="font-body"
                  style={{
                    fontSize: outcome.weight === 'medium' ? 'clamp(1.1rem, 1.6vw, 1.4rem)' : 'clamp(1rem, 1.4vw, 1.2rem)',
                    fontWeight: outcome.weight === 'medium' ? 400 : 300,
                    lineHeight: 1.5,
                    letterSpacing: '-0.010em',
                    color: outcome.weight === 'medium' ? 'rgba(17,18,20,0.72)' : 'rgba(17,18,20,0.50)',
                  }}
                >
                  {outcome.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* North star — the payoff */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.70, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="mt-14 pt-10"
            style={{ borderTop: '1px solid rgba(17,18,20,0.08)' }}
          >
            <p
              className="font-display font-normal"
              style={{
                fontSize: 'clamp(1.4rem, 2.4vw, 2.2rem)',
                lineHeight: 1.2,
                letterSpacing: '-0.022em',
                color: 'rgba(17,18,20,0.30)',
              }}
            >
              The objective is not activity.
            </p>
            <p
              className="font-display font-normal"
              style={{
                fontSize: 'clamp(1.4rem, 2.4vw, 2.2rem)',
                lineHeight: 1.2,
                letterSpacing: '-0.022em',
                color: '#111214',
              }}
            >
              The objective is certainty.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
