'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const CAPABILITIES = [
  {
    title: 'Decision Support',
    body: 'Program intelligence converted into leadership-ready clarity in real time. Executives see what matters, not what happened last week.',
  },
  {
    title: 'Execution Visibility',
    body: 'AI-enabled status and risk reporting that surfaces what is moving, what is stalling, and why — before it becomes a problem.',
  },
  {
    title: 'Governance Acceleration',
    body: 'Automated accountability structures that maintain delivery rigor across complex initiatives without creating administrative overhead.',
  },
]

export function AIExecution() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.25 })

  return (
    <section
      ref={ref}
      id="ai"
      className="relative section-pad overflow-hidden"
      style={{ background: '#0B0B0D' }}
    >
      {/* Top specular hairline */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.07) 40%, rgba(255,255,255,0.10) 50%, rgba(255,255,255,0.07) 60%, transparent)' }}
        aria-hidden
      />

      <div className="container-site relative z-10">

        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="vcg-label mb-5">AI-Augmented Execution</p>
            <h2
              className="font-display font-normal"
              style={{ fontSize: 'clamp(1.9rem, 3.2vw, 3.2rem)', lineHeight: 1.1, letterSpacing: '-0.030em', color: '#F5F3EE' }}
            >
              AI is not what we sell.
            </h2>
            <h2
              className="font-display font-normal italic"
              style={{ fontSize: 'clamp(1.9rem, 3.2vw, 3.2rem)', lineHeight: 1.1, letterSpacing: '-0.030em', color: 'rgba(245,243,238,0.40)' }}
            >
              It is how we operate.
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.72, delay: 0.10, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-end"
          >
            <p className="font-body font-light" style={{ fontSize: '1rem', lineHeight: 1.82, color: 'rgba(245,243,238,0.45)', maxWidth: '44ch' }}>
              VCG integrates AI capabilities as operational infrastructure — embedded into governance, visibility, and coordination at every stage of delivery. Not as an add-on. Not as a separate workstream.
            </p>
          </motion.div>
        </div>

        {/* Capabilities — three columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {CAPABILITIES.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.20 + i * 0.09, ease: [0.16, 1, 0.3, 1] }}
              className="relative py-8"
              style={{
                borderTop: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              {i > 0 && (
                <div
                  className="hidden md:block absolute top-0 left-0 w-px h-full"
                  style={{ background: 'rgba(255,255,255,0.06)' }}
                  aria-hidden
                />
              )}
              <div style={{ paddingLeft: i > 0 ? 'clamp(1.5rem, 4vw, 3rem)' : 0, paddingRight: i < 2 ? 'clamp(1.5rem, 4vw, 3rem)' : 0 }}>
                <h3
                  className="font-body font-medium mb-3"
                  style={{ fontSize: '1rem', letterSpacing: '-0.008em', color: '#F5F3EE' }}
                >
                  {cap.title}
                </h3>
                <p className="font-body font-light" style={{ fontSize: '0.875rem', lineHeight: 1.82, color: 'rgba(245,243,238,0.42)' }}>
                  {cap.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Positioning note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.55, delay: 0.55 }}
          className="mt-12 pt-8"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <p className="font-body font-light" style={{ fontSize: '0.8125rem', color: 'rgba(245,243,238,0.24)', maxWidth: '64ch', lineHeight: 1.78, letterSpacing: '0.005em' }}>
            VCG does not position AI as a product or a competitive differentiator.
            AI is the infrastructure that allows us to maintain execution quality,
            visibility, and accountability at the scale complex initiatives demand.
          </p>
        </motion.div>

      </div>
    </section>
  )
}
