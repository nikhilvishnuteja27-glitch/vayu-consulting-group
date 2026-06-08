'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useContactModal } from '@/context/ContactModalContext'

const SCENARIOS = [
  {
    n: '01',
    condition: 'Your transformation has stalled.',
    detail: 'The initiative was approved. Investment was committed. The original outcomes are no longer being discussed in leadership reviews.',
  },
  {
    n: '02',
    condition: 'Your PMO is producing activity, not progress.',
    detail: 'Reports are generated weekly. Milestones are documented. The outcomes the program was funded to deliver are quietly receding.',
  },
  {
    n: '03',
    condition: 'An AI initiative has been approved — and delivery has not.',
    detail: 'The technology is selected. The organizational complexity surrounding deployment has not been addressed.',
  },
  {
    n: '04',
    condition: 'Integration leadership is required now.',
    detail: 'A merger or acquisition is in motion. The organization cannot wait six months for a permanent hire to be in place and operational.',
  },
  {
    n: '05',
    condition: 'Your operating model needs to change.',
    detail: 'The strategy is clear. The execution infrastructure required to make that change operational, measurable, and permanent does not yet exist.',
  },
  {
    n: '06',
    condition: 'A critical program has slipped — and the board is asking questions.',
    detail: 'Internal teams cannot answer them with confidence. The situation requires a different kind of response.',
  },
]

export function BuiltFor() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })
  const { openModal } = useContactModal()

  return (
    <section
        ref={ref}
        id="built-for"
        className="relative section-pad"
        style={{ background: '#F5F3EE', borderTop: '1px solid rgba(17,18,20,0.07)' }}
      >
        <div className="container-site">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.70, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="vcg-label-dark mb-5">Built For</p>
              <h2
                className="font-display font-normal"
                style={{ fontSize: 'clamp(1.9rem, 3vw, 3rem)', lineHeight: 1.1, letterSpacing: '-0.030em', color: '#111214', maxWidth: '26ch' }}
              >
                Organizations where execution certainty is non-negotiable.
              </h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.70, delay: 0.10, ease: [0.16, 1, 0.3, 1] }}
              className="font-body font-light md:text-right"
              style={{ fontSize: '0.9375rem', lineHeight: 1.78, maxWidth: '38ch', color: 'rgba(17,18,20,0.46)' }}
            >
              VCG is not the right partner for every situation. We are built for a specific one — where the initiative is material, the stakes are real, and the need for delivery certainty is non-negotiable.
            </motion.p>
          </div>

          {/* Scenarios grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {SCENARIOS.map((scenario, i) => (
              <motion.div
                key={scenario.n}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.50, delay: 0.12 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="relative py-6 cursor-default"
                style={{
                  borderTop: '1px solid rgba(17,18,20,0.07)',
                  paddingRight: (i % 2 === 0) ? 'clamp(1.5rem, 4vw, 3.5rem)' : 0,
                  paddingLeft: (i % 2 === 1) ? 'clamp(1.5rem, 4vw, 3.5rem)' : 0,
                }}
              >
                {/* Left border for right-column items on desktop */}
                {i % 2 === 1 && (
                  <div
                    className="hidden md:block absolute top-0 left-0 w-px h-full"
                    style={{ background: 'rgba(17,18,20,0.07)' }}
                    aria-hidden
                  />
                )}
                <div className="flex items-start gap-4">
                  <span className="font-mono flex-shrink-0 mt-0.5" style={{ fontSize: '0.5rem', letterSpacing: '0.12em', color: 'rgba(17,18,20,0.22)', fontWeight: 400 }}>
                    {scenario.n}
                  </span>
                  <div>
                    <p className="font-body font-medium mb-1.5" style={{ fontSize: '0.9375rem', color: '#111214', letterSpacing: '-0.005em', lineHeight: 1.3 }}>
                      {scenario.condition}
                    </p>
                    <p className="font-body font-light" style={{ fontSize: '0.8125rem', lineHeight: 1.75, color: 'rgba(17,18,20,0.46)' }}>
                      {scenario.detail}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom border + micro-CTA */}
          <div style={{ borderTop: '1px solid rgba(17,18,20,0.07)' }} />
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.50, delay: 0.55 }}
            className="mt-8"
          >
            <button
              onClick={openModal}
              className="inline-flex items-center gap-2 font-body font-normal transition-colors duration-200"
              style={{ fontSize: '0.8125rem', color: 'rgba(17,18,20,0.34)' }}
              onMouseEnter={e => (e.currentTarget as HTMLButtonElement).style.color = '#111214'}
              onMouseLeave={e => (e.currentTarget as HTMLButtonElement).style.color = 'rgba(17,18,20,0.34)'}
            >
              If any of these describe your current situation →
            </button>
          </motion.div>

        </div>
    </section>
  )
}
