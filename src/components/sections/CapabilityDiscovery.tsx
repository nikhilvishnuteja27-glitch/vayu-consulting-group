'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const EASE = [0.16, 1, 0.3, 1] as const

const PROBLEMS = [
  'Transformation at risk of stalling before outcomes are achieved.',
  'Program in active recovery — timelines slipped, ownership fragmented.',
  'Execution leadership vacancy at a critical moment.',
  'AI adoption initiative without accountability for delivery.',
]

export function CapabilityDiscovery() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.10 })

  return (
    <section
      ref={ref}
      id="capability-discovery"
      style={{ background: '#F5F3EE', borderTop: '1px solid rgba(17,18,20,0.07)' }}
    >
      <div className="container-site" style={{ paddingTop: 'clamp(4.5rem,8vw,7.5rem)', paddingBottom: 'clamp(4.5rem,8vw,7.5rem)' }}>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.60, ease: EASE }}
          className="mb-12"
        >
          <p className="vcg-label-dark mb-5">What We Do</p>
          <h2
            className="font-display font-normal"
            style={{ fontSize: 'clamp(1.7rem, 2.6vw, 2.75rem)', lineHeight: 1.10, letterSpacing: '-0.026em', color: '#111214', maxWidth: '28ch' }}
          >
            Three engagement paths. One accountability standard.
          </h2>
        </motion.div>

        {/* Asymmetric: 60% primary / 40% secondary */}
        <div className="grid grid-cols-1 lg:grid-cols-[7fr_5fr] gap-0 lg:gap-10 items-start">

          {/* Primary — Consulting & Transformation */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.70, delay: 0.08, ease: EASE }}
            style={{
              paddingBottom: '2.5rem',
              borderBottom: '1px solid rgba(17,18,20,0.10)',
            }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="font-mono" style={{ fontSize: '0.5rem', letterSpacing: '0.14em', color: 'rgba(17,18,20,0.24)' }}>01</span>
              <span className="font-body font-medium" style={{ fontSize: '0.5625rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(17,18,20,0.36)' }}>Primary Engagement Model</span>
            </div>
            <h3
              className="font-display font-normal mb-4"
              style={{ fontSize: 'clamp(1.5rem, 2.4vw, 2.35rem)', lineHeight: 1.08, letterSpacing: '-0.022em', color: '#111214' }}
            >
              Consulting &amp; Transformation
            </h3>
            <p
              className="font-body font-light mb-6"
              style={{ fontSize: '0.9375rem', lineHeight: 1.82, color: 'rgba(17,18,20,0.52)', maxWidth: '52ch' }}
            >
              Embedded execution leadership for enterprise transformation, program recovery, and AI adoption initiatives. VCG assumes delivery accountability — not an advisory role — from initiation through verified outcome.
            </p>

            {/* Problem entries */}
            <div className="mb-6" style={{ borderTop: '1px solid rgba(17,18,20,0.07)' }}>
              {PROBLEMS.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.40, delay: 0.22 + i * 0.05 }}
                  style={{
                    borderBottom: '1px solid rgba(17,18,20,0.07)',
                    padding: '0.75rem 0 0.75rem 1rem',
                    borderLeft: '2px solid rgba(17,18,20,0.08)',
                  }}
                >
                  <p className="font-body font-light" style={{ fontSize: '0.8125rem', color: 'rgba(17,18,20,0.48)', lineHeight: 1.60 }}>
                    {p}
                  </p>
                </motion.div>
              ))}
            </div>

            <Link
              href="/what-we-do"
              className="inline-flex items-center gap-2 font-body font-normal transition-colors duration-200 group"
              style={{ fontSize: '0.8125rem', color: 'rgba(17,18,20,0.36)', textDecoration: 'none' }}
              onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = '#111214'}
              onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(17,18,20,0.36)'}
            >
              Explore Consulting &amp; Transformation
              <ArrowRight size={12} strokeWidth={1.5} className="transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Secondary paths */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.70, delay: 0.20, ease: EASE }}
            className="mt-8 lg:mt-0"
          >
            <p className="vcg-label-dark mb-6">Additional Capability Paths</p>

            {/* Path 02 */}
            <div style={{ paddingBottom: '1.75rem', marginBottom: '1.75rem', borderBottom: '1px solid rgba(17,18,20,0.08)' }}>
              <div className="flex items-center gap-3 mb-3">
                <span className="font-mono" style={{ fontSize: '0.5rem', letterSpacing: '0.14em', color: 'rgba(17,18,20,0.20)' }}>02</span>
              </div>
              <h3 className="font-body font-medium mb-2" style={{ fontSize: '0.9375rem', color: '#111214', letterSpacing: '-0.008em' }}>
                Project &amp; Delivery Teams
              </h3>
              <p className="font-body font-light mb-4" style={{ fontSize: '0.875rem', lineHeight: 1.78, color: 'rgba(17,18,20,0.48)' }}>
                Purpose-built teams assembled around complex programs — the right specialists at the right seniority for what the initiative requires.
              </p>
              <Link
                href="/what-we-do#teams"
                className="inline-flex items-center gap-1.5 font-body font-normal transition-colors duration-200 group"
                style={{ fontSize: '0.75rem', color: 'rgba(17,18,20,0.32)', textDecoration: 'none' }}
                onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = '#111214'}
                onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(17,18,20,0.32)'}
              >
                Explore Project Teams
                <ArrowRight size={11} strokeWidth={1.5} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </div>

            {/* Path 03 */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="font-mono" style={{ fontSize: '0.5rem', letterSpacing: '0.14em', color: 'rgba(17,18,20,0.20)' }}>03</span>
              </div>
              <h3 className="font-body font-medium mb-2" style={{ fontSize: '0.9375rem', color: '#111214', letterSpacing: '-0.008em' }}>
                Specialized Talent
              </h3>
              <p className="font-body font-light mb-4" style={{ fontSize: '0.875rem', lineHeight: 1.78, color: 'rgba(17,18,20,0.48)' }}>
                Individual professional capability for targeted expertise or additional capacity on a defined engagement — without the timeline of a permanent hire.
              </p>
              <Link
                href="/what-we-do#talent"
                className="inline-flex items-center gap-1.5 font-body font-normal transition-colors duration-200 group"
                style={{ fontSize: '0.75rem', color: 'rgba(17,18,20,0.32)', textDecoration: 'none' }}
                onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = '#111214'}
                onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(17,18,20,0.32)'}
              >
                Explore Specialized Talent
                <ArrowRight size={11} strokeWidth={1.5} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
