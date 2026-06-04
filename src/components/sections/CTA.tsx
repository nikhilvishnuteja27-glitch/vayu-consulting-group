'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'
import { staggerContainer, fadeUp } from '@/lib/animations'

export function CTA() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section
      id="cta"
      ref={ref}
      className="relative section-pad overflow-hidden"
      style={{ background: '#111214' }}
    >
      {/* Very subtle architectural dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(245,243,238,0.60) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
          opacity: 0.018,
        }}
        aria-hidden
      />

      {/* Specular top hairline */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08) 40%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0.08) 60%, transparent)' }}
        aria-hidden
      />

      <div className="container-site relative z-10">
        <div className="rule mb-12" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-2xl mx-auto text-center"
        >
          <motion.p variants={fadeUp} custom={0} className="vcg-label" style={{ textAlign: 'center', display: 'block' }}>
            Start Here
          </motion.p>

          <motion.h2
            variants={fadeUp}
            custom={1}
            className="font-display font-normal mt-6"
            style={{ fontSize: 'clamp(2rem, 3.8vw, 3.6rem)', lineHeight: 1.06, letterSpacing: '-0.036em', color: '#F5F3EE' }}
          >
            Ready to close the execution gap?
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="mt-5 font-body font-light"
            style={{ fontSize: '1.0625rem', lineHeight: 1.80, color: 'rgba(245,243,238,0.42)' }}
          >
            Tell us what you&rsquo;re building. We&rsquo;ll show you exactly how VCG closes
            the distance between ambition and delivery.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={3}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="mailto:info@vayuconsultinggroup.com" className="btn-primary inline-flex items-center gap-2.5">
              <Mail size={14} strokeWidth={1.5} />
              Begin a Conversation
            </a>

            <a
              href="mailto:info@vayuconsultinggroup.com?subject=Capability Overview Request"
              className="inline-flex items-center gap-2 font-body font-light transition-colors duration-200 group"
              style={{ fontSize: '0.875rem', color: 'rgba(245,243,238,0.28)' }}
              onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(245,243,238,0.60)'}
              onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(245,243,238,0.28)'}
            >
              Request Capability Overview
              <ArrowRight size={13} strokeWidth={1.5} className="transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </motion.div>

          <motion.p
            variants={fadeUp}
            custom={4}
            className="mt-8 font-body font-light"
            style={{ fontSize: '0.8125rem', letterSpacing: '0.01em', color: 'rgba(245,243,238,0.18)' }}
          >
            Engagements begin with a confidential capability assessment. No obligation.
          </motion.p>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          variants={fadeUp}
          custom={5}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mt-20 pt-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          {[
            { value: '12+',   label: 'Industries' },
            { value: 'Day 1', label: 'Execution Starts' },
            { value: '$2B+',  label: 'Programs Managed' },
            { value: '100%',  label: 'Accountability' },
          ].map(stat => (
            <div key={stat.label}>
              <div className="font-display font-normal" style={{ fontSize: 'clamp(1.5rem, 2.2vw, 2rem)', letterSpacing: '-0.028em', color: 'rgba(245,243,238,0.80)' }}>
                {stat.value}
              </div>
              <div className="mt-1 font-body" style={{ fontSize: '0.625rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(245,243,238,0.24)' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
