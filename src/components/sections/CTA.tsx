'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { staggerContainer, fadeUp } from '@/lib/animations'
import { useContactModal } from '@/context/ContactModalContext'

export function CTA() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })
  const { openModal } = useContactModal()

  return (
    <section
        id="cta"
        ref={ref}
        className="relative section-pad overflow-hidden"
        style={{ background: '#0B0B0D' }}
      >
        {/* Specular top hairline */}
        <div
          className="absolute top-0 left-0 right-0 h-px pointer-events-none"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.07) 40%, rgba(255,255,255,0.11) 50%, rgba(255,255,255,0.07) 60%, transparent)' }}
          aria-hidden
        />

        <div className="container-site relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="max-w-2xl"
          >
            <motion.p variants={fadeUp} custom={0} className="vcg-label">
              Start Here
            </motion.p>

            <motion.h2
              variants={fadeUp}
              custom={1}
              className="font-display font-normal mt-6"
              style={{
                fontSize: 'clamp(2.2rem, 4vw, 3.8rem)',
                lineHeight: 1.06,
                letterSpacing: '-0.036em',
                color: '#F5F3EE',
              }}
            >
              Close the gap between strategy and results.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="mt-6 font-body font-light"
              style={{ fontSize: '1.0625rem', lineHeight: 1.80, color: 'rgba(245,243,238,0.42)', maxWidth: '48ch' }}
            >
              Bring execution intelligence into your next critical initiative.
              The conversation begins with a confidential assessment of your
              initiative and what it requires to succeed.
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={3}
              className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-5"
            >
              <button
                onClick={openModal}
                className="btn-primary"
              >
                Discuss Your Initiative
              </button>
              <a
                href="mailto:info@vayuconsultinggroup.com"
                className="inline-flex items-center gap-2 font-body font-normal transition-colors duration-200 group"
                style={{ fontSize: '0.875rem', color: 'rgba(245,243,238,0.26)' }}
                onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(245,243,238,0.60)'}
                onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(245,243,238,0.26)'}
              >
                info@vayuconsultinggroup.com
                <ArrowRight size={12} strokeWidth={1.5} className="transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </motion.div>

            <motion.p
              variants={fadeUp}
              custom={4}
              className="mt-8 font-body font-light"
              style={{ fontSize: '0.8rem', color: 'rgba(245,243,238,0.18)', letterSpacing: '0.01em' }}
            >
              Confidential. No obligation. North America operations.
            </motion.p>
          </motion.div>
        </div>
    </section>
  )
}
