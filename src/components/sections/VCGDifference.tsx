'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const STANDARD_MODEL = [
  'Assesses. Recommends. Advises.',
  'Operates from a distance.',
  'Produces documentation.',
  'Exits at implementation.',
  'Measured by deliverables.',
  'Concludes when the contract ends.',
]

const VCG_MODEL = [
  'Assumes delivery ownership.',
  'Operates embedded inside the initiative.',
  'Produces outcomes.',
  'Remains through delivery.',
  'Measured only by outcomes achieved.',
  'Concludes when the outcome is delivered.',
]

export function VCGDifference() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.20 })

  return (
    <section
      ref={ref}
      id="vcg-difference"
      className="relative section-pad overflow-hidden"
      style={{ background: '#0B0B0D', borderTop: '1px solid rgba(255,255,255,0.05)' }}
    >
      {/* Specular hairline */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.07) 40%, rgba(255,255,255,0.10) 50%, rgba(255,255,255,0.07) 60%, transparent)' }}
        aria-hidden
      />

      <div className="container-site relative z-10">

        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.70, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="vcg-label mb-5">A Different Operating Model</p>
            <h2
              className="font-display font-normal"
              style={{ fontSize: 'clamp(1.9rem, 3vw, 3rem)', lineHeight: 1.1, letterSpacing: '-0.028em', color: '#F5F3EE' }}
            >
              The consulting industry has a delivery problem.
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.70, delay: 0.10, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-end"
          >
            <p className="font-body font-light" style={{ fontSize: '0.9375rem', lineHeight: 1.78, color: 'rgba(245,243,238,0.42)', maxWidth: '42ch' }}>
              The standard engagement model was designed to advise. VCG was designed to deliver. These are not variations of the same model — they are different models entirely.
            </p>
          </motion.div>
        </div>

        {/* Comparison table */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">

          {/* Standard model */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.70, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="pr-0 md:pr-10"
            style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
          >
            <div className="pt-6 pb-4">
              <p
                className="font-body font-normal mb-6"
                style={{ fontSize: '0.625rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(245,243,238,0.25)' }}
              >
                The Standard Model
              </p>
              <div className="space-y-4">
                {STANDARD_MODEL.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.45, delay: 0.22 + i * 0.06 }}
                    className="flex items-baseline gap-3"
                  >
                    <div className="w-1 h-1 rounded-full flex-shrink-0 mt-1.5" style={{ background: 'rgba(245,243,238,0.16)' }} />
                    <p className="font-body font-light" style={{ fontSize: '0.9375rem', color: 'rgba(245,243,238,0.34)', lineHeight: 1.5 }}>
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* VCG model */}
          <motion.div
            initial={{ opacity: 0, x: 12 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.70, delay: 0.20, ease: [0.16, 1, 0.3, 1] }}
            className="pl-0 md:pl-10"
            style={{ borderTop: '1px solid rgba(255,255,255,0.14)' }}
          >
            <div className="pt-6 pb-4">
              <p
                className="font-body font-normal mb-6"
                style={{ fontSize: '0.625rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(245,243,238,0.55)' }}
              >
                VCG
              </p>
              <div className="space-y-4">
                {VCG_MODEL.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.45, delay: 0.28 + i * 0.06 }}
                    className="flex items-baseline gap-3"
                  >
                    <div className="w-1 h-1 rounded-full flex-shrink-0 mt-1.5" style={{ background: 'rgba(245,243,238,0.55)' }} />
                    <p className="font-body font-normal" style={{ fontSize: '0.9375rem', color: '#F5F3EE', lineHeight: 1.5 }}>
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.60, delay: 0.75 }}
          className="mt-12 pt-8"
          style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
        >
          <p
            className="font-display font-normal italic"
            style={{ fontSize: 'clamp(1rem, 1.6vw, 1.45rem)', lineHeight: 1.4, letterSpacing: '-0.014em', color: 'rgba(245,243,238,0.45)', maxWidth: '52ch' }}
          >
            &ldquo;This is not a better version of the standard consulting model. It is a different model entirely.&rdquo;
          </p>
        </motion.div>

      </div>
    </section>
  )
}
