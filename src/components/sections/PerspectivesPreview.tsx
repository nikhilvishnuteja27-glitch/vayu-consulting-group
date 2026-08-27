'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { PERSPECTIVES } from '@/lib/perspectives'

const featured = PERSPECTIVES[0]

export function PerspectivesPreview() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.25 })

  return (
    <section
      ref={ref}
      style={{
        background: '#F5F3EE',
        borderTop: '1px solid rgba(17,18,20,0.06)',
      }}
    >
      <div
        className="container-site"
        style={{
          paddingTop: 'clamp(4rem, 7vw, 6rem)',
          paddingBottom: 'clamp(4rem, 7vw, 6rem)',
        }}
      >
        {/* Label row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            marginBottom: '2.5rem',
          }}
        >
          <p className="vcg-label-dark">Perspectives</p>
          <Link
            href="/perspectives"
            className="font-body"
            style={{
              fontSize: '0.8125rem',
              color: 'rgba(17,18,20,0.45)',
              textDecoration: 'none',
              letterSpacing: '0.01em',
            }}
          >
            View All Perspectives →
          </Link>
        </motion.div>

        {/* Featured article */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.10, ease: [0.16, 1, 0.3, 1] }}
          style={{
            borderTop: '1px solid rgba(17,18,20,0.10)',
            paddingTop: '2rem',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'auto 1fr',
              gap: '0 2.25rem',
              alignItems: 'start',
            }}
          >
            {/* Article number */}
            <span
              className="font-mono"
              style={{
                fontSize: '0.75rem',
                letterSpacing: '0.06em',
                color: 'rgba(17,18,20,0.28)',
                paddingTop: '0.2rem',
                userSelect: 'none',
              }}
            >
              {featured.number}
            </span>

            {/* Content */}
            <div>
              <Link href={featured.href} style={{ textDecoration: 'none' }}>
                <h2
                  className="font-display font-normal"
                  style={{
                    fontSize: 'clamp(1.35rem, 2.2vw, 1.85rem)',
                    lineHeight: 1.14,
                    letterSpacing: '-0.022em',
                    color: '#111214',
                    maxWidth: '44ch',
                    marginBottom: '0.875rem',
                    transition: 'color 0.15s',
                  }}
                >
                  {featured.title}
                </h2>
              </Link>
              <p
                className="font-body font-light"
                style={{
                  fontSize: '0.9375rem',
                  lineHeight: 1.76,
                  color: 'rgba(17,18,20,0.52)',
                  maxWidth: '58ch',
                  marginBottom: '1.5rem',
                }}
              >
                {featured.deck}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                <Link
                  href={featured.href}
                  className="font-body"
                  style={{
                    fontSize: '0.875rem',
                    color: '#111214',
                    textDecoration: 'none',
                    fontWeight: 400,
                    letterSpacing: '0.01em',
                    borderBottom: '1px solid rgba(17,18,20,0.22)',
                    paddingBottom: '1px',
                  }}
                >
                  Read Perspective →
                </Link>
                <span
                  className="font-body font-light"
                  style={{ fontSize: '0.8125rem', color: 'rgba(17,18,20,0.30)' }}
                >
                  {featured.readingTime}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
