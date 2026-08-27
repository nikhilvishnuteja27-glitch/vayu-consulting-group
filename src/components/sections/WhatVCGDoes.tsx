'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function WhatVCGDoes() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.10 })

  return (
    <section
      ref={ref}
      id="what-vcg-does"
      className="relative section-pad"
      style={{ background: '#F5F3EE', borderTop: '1px solid rgba(17,18,20,0.07)' }}
    >
      <div className="container-site">

        {/* Section label + heading */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.70, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <p className="vcg-label-dark mb-5">What We Do</p>
          <h2
            className="font-display font-normal"
            style={{ fontSize: 'clamp(1.9rem, 3vw, 3rem)', lineHeight: 1.1, letterSpacing: '-0.028em', color: '#111214', maxWidth: '26ch' }}
          >
            Three engagement paths. One operating principle.
          </h2>
        </motion.div>

        {/* Primary path — Consulting & Transformation */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.70, delay: 0.10, ease: [0.16, 1, 0.3, 1] }}
          style={{
            paddingBottom: '2.75rem',
            borderBottom: '1px solid rgba(17,18,20,0.10)',
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-16 items-end">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="font-mono"
                  style={{ fontSize: '0.5625rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(17,18,20,0.26)', fontWeight: 400 }}
                >
                  01
                </span>
                <span
                  className="font-body"
                  style={{ fontSize: '0.625rem', letterSpacing: '0.16em', textTransform: 'uppercase', fontWeight: 500, color: 'rgba(17,18,20,0.36)' }}
                >
                  Primary Engagement Model
                </span>
              </div>
              <h3
                className="font-display font-normal mb-4"
                style={{ fontSize: 'clamp(1.5rem, 2.4vw, 2.25rem)', lineHeight: 1.1, letterSpacing: '-0.022em', color: '#111214' }}
              >
                Consulting &amp; Transformation
              </h3>
              <p
                className="font-body font-light"
                style={{ fontSize: '0.9375rem', lineHeight: 1.82, color: 'rgba(17,18,20,0.52)', maxWidth: '58ch' }}
              >
                Embedded execution leadership for enterprise transformation, program recovery, and AI adoption. VCG assumes delivery accountability — not an advisory role — from initiation through verified outcome. Senior operators embedded inside your initiative. Accountable for results.
              </p>
            </div>
            <Link
              href="/what-we-do#consulting"
              className="inline-flex items-center gap-2 font-body font-normal transition-colors duration-200 group whitespace-nowrap self-end"
              style={{ fontSize: '0.8125rem', color: 'rgba(17,18,20,0.36)' }}
              onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = '#111214'}
              onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(17,18,20,0.36)'}
            >
              Explore Consulting
              <ArrowRight size={12} strokeWidth={1.5} className="transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>

        {/* Secondary paths row */}
        <div className="pt-8">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.50, delay: 0.22 }}
            className="vcg-label-dark mb-7"
          >
            Additional Capability Paths
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">

            {/* Path 02 */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
              style={{
                paddingTop: '1.75rem',
                paddingBottom: '1.75rem',
                paddingRight: 'clamp(0px, 4vw, 3rem)',
                borderTop: '1px solid rgba(17,18,20,0.08)',
                borderRight: '1px solid rgba(17,18,20,0.07)',
              }}
              className="pr-0 md:pr-10"
            >
              <span
                className="font-mono block mb-3"
                style={{ fontSize: '0.5625rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(17,18,20,0.22)', fontWeight: 400 }}
              >
                02
              </span>
              <h3
                className="font-body font-medium mb-3"
                style={{ fontSize: '0.9375rem', letterSpacing: '-0.008em', color: '#111214', lineHeight: 1.25 }}
              >
                Project &amp; Delivery Teams
              </h3>
              <p
                className="font-body font-light"
                style={{ fontSize: '0.875rem', lineHeight: 1.80, color: 'rgba(17,18,20,0.48)' }}
              >
                Purpose-built teams assembled around complex programs and enterprise initiatives — the right specialists at the right seniority for what the initiative requires.
              </p>
            </motion.div>

            {/* Path 03 */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.36, ease: [0.16, 1, 0.3, 1] }}
              style={{
                paddingTop: '1.75rem',
                paddingBottom: '1.75rem',
                paddingLeft: 'clamp(0px, 4vw, 3rem)',
                borderTop: '1px solid rgba(17,18,20,0.08)',
              }}
              className="pl-0 md:pl-10"
            >
              <span
                className="font-mono block mb-3"
                style={{ fontSize: '0.5625rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(17,18,20,0.22)', fontWeight: 400 }}
              >
                03
              </span>
              <h3
                className="font-body font-medium mb-3"
                style={{ fontSize: '0.9375rem', letterSpacing: '-0.008em', color: '#111214', lineHeight: 1.25 }}
              >
                Specialized Talent
              </h3>
              <p
                className="font-body font-light"
                style={{ fontSize: '0.875rem', lineHeight: 1.80, color: 'rgba(17,18,20,0.48)' }}
              >
                Individual professional capability for organizations that need targeted expertise or additional capacity on a defined engagement — without the timeline of a permanent hire.
              </p>
            </motion.div>

          </div>

          {/* Page link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.50, delay: 0.50 }}
            className="mt-8 pt-6"
            style={{ borderTop: '1px solid rgba(17,18,20,0.07)' }}
          >
            <Link
              href="/what-we-do"
              className="inline-flex items-center gap-2 font-body font-normal transition-colors duration-200 group"
              style={{ fontSize: '0.8125rem', color: 'rgba(17,18,20,0.36)' }}
              onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = '#111214'}
              onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(17,18,20,0.36)'}
            >
              Explore All Engagement Paths
              <ArrowRight size={12} strokeWidth={1.5} className="transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
