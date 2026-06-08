'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function Insights() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section
      ref={ref}
      id="insights"
      className="relative section-pad"
      style={{ background: '#FFFFFF', borderTop: '1px solid rgba(17,18,20,0.07)' }}
    >
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-14 lg:gap-24 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="vcg-label-dark mb-5">Perspectives</p>
            <h2
              className="font-display font-normal mb-6"
              style={{ fontSize: 'clamp(1.9rem, 3.2vw, 3.2rem)', lineHeight: 1.1, letterSpacing: '-0.030em', color: '#111214', maxWidth: '24ch' }}
            >
              Building the body of work on Execution Intelligence.
            </h2>
            <p className="font-body font-light mb-8" style={{ fontSize: '1rem', lineHeight: 1.82, color: 'rgba(17,18,20,0.50)', maxWidth: '42ch' }}>
              Frameworks, field perspectives, and analysis on organizational execution — published as VCG establishes the category.
            </p>
            <a
              href="https://linkedin.com/company/vayu-consulting-group"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body font-normal transition-colors duration-200 group"
              style={{ fontSize: '0.875rem', color: 'rgba(17,18,20,0.40)' }}
              onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = '#111214'}
              onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(17,18,20,0.40)'}
            >
              Follow on LinkedIn
              <ArrowRight size={13} strokeWidth={1.5} className="transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* Right — coming soon card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.72, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="p-8 rounded-[4px]"
              style={{ background: '#F5F3EE', border: '1px solid rgba(17,18,20,0.07)' }}
            >
              <p className="vcg-label-dark mb-6">First Perspective — Coming 2025</p>

              <h3
                className="font-display font-normal mb-4"
                style={{ fontSize: 'clamp(1.2rem, 2vw, 1.75rem)', lineHeight: 1.2, letterSpacing: '-0.020em', color: '#111214' }}
              >
                Why Transformations Fail Before They Begin
              </h3>

              <p className="font-body font-light" style={{ fontSize: '0.9375rem', lineHeight: 1.78, color: 'rgba(17,18,20,0.48)' }}>
                A field perspective on the accountability gaps that determine initiative outcomes before the first milestone is set.
              </p>

              <div
                className="mt-6 pt-5 flex items-center gap-3"
                style={{ borderTop: '1px solid rgba(17,18,20,0.07)' }}
              >
                <div
                  className="px-2.5 py-1 rounded-[3px]"
                  style={{ background: 'rgba(17,18,20,0.06)' }}
                >
                  <span className="font-body" style={{ fontSize: '0.625rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(17,18,20,0.36)', fontWeight: 500 }}>
                    Execution Intelligence
                  </span>
                </div>
                <span className="font-body font-light" style={{ fontSize: '0.75rem', color: 'rgba(17,18,20,0.28)' }}>
                  Field Perspective
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
