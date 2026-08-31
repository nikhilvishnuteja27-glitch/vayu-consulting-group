'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useContactModal } from '@/context/ContactModalContext'

const EASE = [0.16, 1, 0.3, 1] as const

const SCENARIOS = [
  {
    trigger: 'The initiative is behind schedule — and slippage has become normal.',
    detail: 'No one is asking why anymore. The original deadline has become a reference point rather than a commitment anyone intends to keep.',
  },
  {
    trigger: 'Accountability is fragmented.',
    detail: 'A steering committee reviews progress. A project manager tracks it. Neither one owns the outcome.',
  },
  {
    trigger: 'Leadership has lost visibility.',
    detail: 'Status reports are produced on schedule. They do not reflect what is actually happening inside the program.',
  },
  {
    trigger: 'Your team is capable. The system connecting them is not.',
    detail: 'Individual contributors are performing. Coordination, governance, and delivery infrastructure are absent.',
  },
  {
    trigger: 'The outcome is at risk — not just the timeline.',
    detail: 'The initiative will likely reach completion. But the original ambition — the reason it was funded — is being quietly reduced.',
  },
  {
    trigger: 'A critical execution leadership role is vacant.',
    detail: 'A program of this importance cannot wait six months for a hire to be identified, onboarded, and effective.',
  },
]

export function ExecutionAtRisk() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.12 })
  const { openModal } = useContactModal()

  return (
    <section
      ref={ref}
      id="execution-at-risk"
      style={{ background: '#FFFFFF', borderTop: '1px solid rgba(17,18,20,0.07)' }}
    >
      <div className="container-site" style={{ paddingTop: 'clamp(4.5rem,8vw,7.5rem)', paddingBottom: 'clamp(4.5rem,8vw,7.5rem)' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.70, ease: EASE }}
          className="mb-12"
          style={{ maxWidth: '720px' }}
        >
          <p className="vcg-label-dark mb-5">When Execution Is At Risk</p>
          <p
            className="font-display font-normal"
            style={{ fontSize: 'clamp(1.5rem, 2.4vw, 2.4rem)', lineHeight: 1.12, letterSpacing: '-0.024em', color: '#111214' }}
          >
            The right time to engage VCG is before the situation becomes a crisis.
          </p>
          <p
            className="font-display font-normal italic mt-2"
            style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.9rem)', lineHeight: 1.2, letterSpacing: '-0.018em', color: 'rgba(17,18,20,0.30)' }}
          >
            The second-best time is now.
          </p>
        </motion.div>

        {/* Diagnostic grid — 3 columns × 2 rows */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {SCENARIOS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.48, delay: 0.10 + i * 0.05, ease: EASE }}
              className={`${i % 3 < 2 ? 'md:pr-8' : ''} ${i % 3 > 0 ? 'md:pl-8' : ''}`}
              style={{
                borderTop: '1px solid rgba(17,18,20,0.07)',
                paddingTop: '1.75rem',
                paddingBottom: '1.75rem',
              }}
            >
              <span
                className="font-mono"
                style={{ fontSize: '0.4375rem', letterSpacing: '0.14em', color: 'rgba(17,18,20,0.20)', display: 'block', marginBottom: '0.875rem' }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <p
                className="font-body font-medium"
                style={{ fontSize: '0.9375rem', color: '#111214', letterSpacing: '-0.005em', lineHeight: 1.28, marginBottom: '0.625rem' }}
              >
                {item.trigger}
              </p>
              <p
                className="font-body font-light"
                style={{ fontSize: '0.875rem', lineHeight: 1.78, color: 'rgba(17,18,20,0.48)' }}
              >
                {item.detail}
              </p>
            </motion.div>
          ))}
        </div>
        <div style={{ borderTop: '1px solid rgba(17,18,20,0.07)' }} />

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.55, ease: EASE }}
          className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-5"
        >
          <button onClick={openModal} className="btn-dark">
            Discuss Your Initiative
          </button>
          <p className="font-body font-light" style={{ fontSize: '0.8125rem', color: 'rgba(17,18,20,0.32)', lineHeight: 1.6 }}>
            Every VCG engagement begins with a confidential assessment.<br className="hidden sm:block" />
            No templates. No prior assumptions.
          </p>
        </motion.div>

      </div>
    </section>
  )
}
