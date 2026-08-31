'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1] as const

const CONTRAST = [
  { standard: 'Assesses. Recommends. Advises.',         vcg: 'Assumes delivery ownership.'               },
  { standard: 'Operates from a distance.',              vcg: 'Operates embedded inside the initiative.'  },
  { standard: 'Produces documentation.',                vcg: 'Produces outcomes.'                        },
  { standard: 'Exits at implementation.',               vcg: 'Remains through delivery.'                 },
  { standard: 'Measured by deliverables submitted.',    vcg: 'Defined by outcomes achieved.'             },
]

export function OperatingDifference() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.18 })

  return (
    <section
      ref={ref}
      id="operating-difference"
      style={{ background: '#111214', borderTop: '1px solid rgba(255,255,255,0.05)' }}
    >
      {/* Specular hairline */}
      <div
        className="absolute left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg,transparent,rgba(255,255,255,0.07) 40%,rgba(255,255,255,0.10) 50%,rgba(255,255,255,0.07) 60%,transparent)' }}
        aria-hidden
      />

      <div className="container-site relative" style={{ paddingTop: 'clamp(4.5rem,8vw,7.5rem)', paddingBottom: 'clamp(4.5rem,8vw,7.5rem)' }}>

        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.70, ease: EASE }}
          >
            <p className="vcg-label mb-5">A Different Operating Model</p>
            <h2
              className="font-display font-normal"
              style={{ fontSize: 'clamp(1.7rem, 2.8vw, 2.8rem)', lineHeight: 1.10, letterSpacing: '-0.028em', color: '#F5F3EE' }}
            >
              The consulting industry was designed to advise. VCG was designed to deliver.
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.70, delay: 0.10, ease: EASE }}
            className="flex items-end"
          >
            <p className="font-body font-light" style={{ fontSize: '0.9375rem', lineHeight: 1.80, color: 'rgba(245,243,238,0.40)', maxWidth: '44ch' }}>
              These are not variations of the same model. Advisory engagements conclude when the contract ends. VCG engagements are defined by delivery outcomes, accountability structures, and verified transition criteria.
            </p>
          </motion.div>
        </div>

        {/* Comparison table */}
        <div>
          {/* Column headers */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="grid grid-cols-2 gap-px mb-1"
          >
            <div style={{ paddingBottom: '0.625rem' }}>
              <span className="font-body" style={{ fontSize: '0.5625rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(245,243,238,0.20)' }}>
                The Standard Model
              </span>
            </div>
            <div style={{ paddingBottom: '0.625rem', paddingLeft: '1.5rem' }}>
              <span className="font-body font-medium" style={{ fontSize: '0.5625rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C8A96E' }}>
                VCG
              </span>
            </div>
          </motion.div>

          {/* Rows */}
          {CONTRAST.map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.42, delay: 0.22 + i * 0.06 }}
              className="grid grid-cols-2 gap-px"
              style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
            >
              <div className="py-4 pr-4">
                <p className="font-body font-light" style={{ fontSize: '0.9rem', color: 'rgba(245,243,238,0.28)', lineHeight: 1.50 }}>
                  {row.standard}
                </p>
              </div>
              <div className="py-4 pl-4 md:pl-6" style={{ borderLeft: '1px solid rgba(255,255,255,0.06)' }}>
                <p className="font-body font-normal" style={{ fontSize: '0.9rem', color: '#F5F3EE', lineHeight: 1.50 }}>
                  {row.vcg}
                </p>
              </div>
            </motion.div>
          ))}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }} />
        </div>

        {/* Conviction */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.55, delay: 0.72 }}
          className="mt-12 pt-8"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <p
            className="font-display font-normal italic"
            style={{ fontSize: 'clamp(1rem, 1.6vw, 1.45rem)', lineHeight: 1.40, letterSpacing: '-0.014em', color: 'rgba(245,243,238,0.44)', maxWidth: '54ch' }}
          >
            &ldquo;Our operators have been accountable for outcomes — not advisors who studied them.
            That distinction shapes everything: how we structure engagements, how we measure success, and when we consider an engagement complete.&rdquo;
          </p>
        </motion.div>

      </div>
    </section>
  )
}
