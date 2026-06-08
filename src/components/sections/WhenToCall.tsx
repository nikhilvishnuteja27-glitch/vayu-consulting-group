'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useContactModal } from '@/context/ContactModalContext'

const TRIGGERS = [
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
    trigger: 'The outcome is at risk — not the timeline.',
    detail: 'The initiative will likely reach completion. But the original ambition — the reason it was funded — is quietly being reduced.',
  },
  {
    trigger: 'A critical leadership role is vacant.',
    detail: 'A program of this importance cannot wait six months for a hire to be identified, onboarded, and operational.',
  },
]

export function WhenToCall() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })
  const { openModal } = useContactModal()

  return (
    <section
        ref={ref}
        id="when-to-call"
        className="relative section-pad"
        style={{ background: '#F5F3EE', borderTop: '1px solid rgba(17,18,20,0.07)' }}
      >
        <div className="container-site">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.70, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12"
          >
            <p className="vcg-label-dark mb-5">When To Engage</p>
            <h2
              className="font-display font-normal mb-5"
              style={{ fontSize: 'clamp(1.9rem, 3vw, 3rem)', lineHeight: 1.1, letterSpacing: '-0.028em', color: '#111214', maxWidth: '32ch' }}
            >
              The right time to engage VCG is before the situation becomes a crisis.
            </h2>
            <p className="font-display font-normal italic" style={{ fontSize: 'clamp(1.2rem, 2vw, 1.9rem)', lineHeight: 1.2, letterSpacing: '-0.022em', color: 'rgba(17,18,20,0.36)' }}>
              The second-best time is now.
            </p>
          </motion.div>

          {/* Triggers */}
          <div className="space-y-0">
            {TRIGGERS.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.48, delay: 0.12 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-2 md:gap-12 py-5"
                style={{ borderTop: '1px solid rgba(17,18,20,0.08)' }}
              >
                <p className="font-body font-medium" style={{ fontSize: '0.9375rem', color: '#111214', letterSpacing: '-0.005em', lineHeight: 1.3 }}>
                  {item.trigger}
                </p>
                <p className="font-body font-light" style={{ fontSize: '0.9375rem', lineHeight: 1.78, color: 'rgba(17,18,20,0.50)' }}>
                  {item.detail}
                </p>
              </motion.div>
            ))}
            <div style={{ borderTop: '1px solid rgba(17,18,20,0.08)' }} />
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.60, delay: 0.60, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-5"
          >
            <button onClick={openModal} className="btn-dark">
              Discuss Your Initiative
            </button>
            <p className="font-body font-light" style={{ fontSize: '0.8125rem', color: 'rgba(17,18,20,0.34)', lineHeight: 1.6 }}>
              Every VCG engagement begins with a confidential assessment.<br className="hidden sm:block" />
              No templates. No prior assumptions.
            </p>
          </motion.div>

        </div>
    </section>
  )
}
