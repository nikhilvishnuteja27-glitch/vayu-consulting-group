'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const PARAGRAPHS = [
  'VCG exists because of a pattern.',
  'We observed organizations — well-funded, strategically clear, staffed with capable people — consistently fail to deliver what they had committed to deliver.',
  'Not because the strategy was wrong. Not because the people were incapable. Because no one owned the execution. No one remained accountable for the outcome from start to finish. No one stayed until the work was done.',
  'Strategy firms conclude at the strategy. Implementation partners arrive after the critical decisions have already been made. The gap between them — where initiatives stall, fragment, and quietly miss their original ambition — is unaddressed.',
  'VCG was built to occupy that gap.',
  'Not as advisors who recommend and exit. As execution owners — embedded in the initiative, accountable for outcomes, and present until those outcomes are verified and delivered.',
]

const CLOSING = [
  'The market does not need another consulting firm.',
  'It needs execution ownership.',
  'That is why VCG exists.',
]

export function FounderPerspective() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section
      ref={ref}
      id="founder-perspective"
      className="relative section-pad"
      style={{ background: '#F5F3EE', borderTop: '1px solid rgba(17,18,20,0.07)' }}
    >
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">

          {/* Left — label */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="vcg-label-dark mb-5">Why VCG Exists</p>
            <div className="w-px h-16 mt-2" style={{ background: 'rgba(17,18,20,0.10)' }} />
          </motion.div>

          {/* Right — editorial copy */}
          <div className="space-y-5">
            {PARAGRAPHS.map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.62, delay: 0.06 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="font-body font-light"
                style={{
                  fontSize: i === 0 ? '1.125rem' : '0.9375rem',
                  fontWeight: i === 4 ? 500 : 300,
                  lineHeight: 1.82,
                  color: i === 4 ? '#111214' : 'rgba(17,18,20,0.55)',
                  letterSpacing: i === 0 ? '-0.005em' : 0,
                }}
              >
                {para}
              </motion.p>
            ))}

            {/* Closing — three-line declaration */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="pt-6"
              style={{ borderTop: '1px solid rgba(17,18,20,0.08)' }}
            >
              {CLOSING.map((line, i) => (
                <p
                  key={i}
                  className="font-display font-normal"
                  style={{
                    fontSize: 'clamp(1.05rem, 1.6vw, 1.45rem)',
                    lineHeight: 1.45,
                    letterSpacing: '-0.016em',
                    color: i === 2 ? '#111214' : 'rgba(17,18,20,0.38)',
                    marginBottom: i < CLOSING.length - 1 ? '0.1em' : '0',
                  }}
                >
                  {line}
                </p>
              ))}

              <p
                className="font-body font-light mt-5"
                style={{ fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(17,18,20,0.26)' }}
              >
                — Vayu Consulting Group
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
