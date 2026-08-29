'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { PERSPECTIVES } from '@/lib/perspectives'
import { EIFrameworkDiagram } from '@/components/ei/EIFrameworkDiagram'
import { useContactModal } from '@/context/ContactModalContext'

const [p01, p02, p03] = PERSPECTIVES

function ArticleRow({ perspective, index }: { perspective: typeof PERSPECTIVES[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      style={{
        display: 'grid',
        gridTemplateColumns: 'auto 1fr auto',
        gap: '0 2rem',
        alignItems: 'start',
        paddingTop: '1.75rem',
        paddingBottom: '1.75rem',
        borderBottom: '1px solid rgba(17,18,20,0.07)',
      }}
    >
      <span className="font-mono" style={{ fontSize: '0.75rem', letterSpacing: '0.06em', color: 'rgba(17,18,20,0.28)', paddingTop: '0.25rem', userSelect: 'none' }}>
        {perspective.number}
      </span>
      <div>
        <Link href={perspective.href} style={{ textDecoration: 'none' }}>
          <h3
            className="font-display font-normal"
            style={{
              fontSize: 'clamp(1.05rem, 1.6vw, 1.3rem)',
              lineHeight: 1.2,
              letterSpacing: '-0.018em',
              color: '#111214',
              marginBottom: '0.5rem',
            }}
          >
            {perspective.title}
          </h3>
        </Link>
        <p className="font-body font-light" style={{ fontSize: '0.875rem', lineHeight: 1.72, color: 'rgba(17,18,20,0.48)', maxWidth: '60ch' }}>
          {perspective.deck}
        </p>
      </div>
      <Link
        href={perspective.href}
        className="font-body"
        style={{
          fontSize: '0.8125rem',
          color: 'rgba(17,18,20,0.40)',
          textDecoration: 'none',
          whiteSpace: 'nowrap',
          paddingTop: '0.25rem',
          letterSpacing: '0.01em',
        }}
      >
        Read →
      </Link>
    </motion.div>
  )
}

export function InsightsHub() {
  const { openModal } = useContactModal()

  const heroRef = useRef<HTMLElement>(null)
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 })

  const featuredRef = useRef<HTMLDivElement>(null)
  const featuredInView = useInView(featuredRef, { once: true, amount: 0.2 })

  const ctaRef = useRef<HTMLElement>(null)
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.3 })

  return (
    <>
      {/* Hero — Obsidian */}
      <section
        ref={heroRef}
        style={{ background: '#0B0B0D', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
      >
        <div
          className="container-site"
          style={{
            paddingTop: 'clamp(8rem, 14vw, 12rem)',
            paddingBottom: 'clamp(4rem, 6vw, 6rem)',
          }}
        >
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="vcg-label"
            style={{ marginBottom: '2rem' }}
          >
            Insights
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-normal"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              lineHeight: 1.06,
              letterSpacing: '-0.030em',
              color: '#F5F3EE',
              maxWidth: '22ch',
              marginBottom: '1.5rem',
            }}
          >
            Execution Intelligence, published.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="font-body font-light"
            style={{
              fontSize: 'clamp(0.9375rem, 1.2vw, 1.05rem)',
              lineHeight: 1.76,
              color: 'rgba(245,243,238,0.45)',
              maxWidth: '52ch',
            }}
          >
            Research and analysis on how major enterprise initiatives succeed or fail in delivery — and what executive leadership can do about it.
          </motion.p>
        </div>
      </section>

      {/* Featured article — P01 */}
      <section style={{ background: '#FFFFFF', borderBottom: '1px solid rgba(17,18,20,0.06)' }}>
        <div
          className="container-site"
          style={{
            paddingTop: 'clamp(4rem, 7vw, 6rem)',
            paddingBottom: 'clamp(4rem, 7vw, 6rem)',
          }}
        >
          <div ref={featuredRef}>
            <motion.p
              initial={{ opacity: 0 }}
              animate={featuredInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4 }}
              className="vcg-label-dark"
              style={{ marginBottom: '2.5rem' }}
            >
              Featured
            </motion.p>

            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start"
            >
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={featuredInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="font-mono" style={{ fontSize: '0.75rem', letterSpacing: '0.06em', color: 'rgba(17,18,20,0.28)' }}>
                  {p01.number}
                </span>

                <Link href={p01.href} style={{ textDecoration: 'none', display: 'block' }}>
                  <h2
                    className="font-display font-normal"
                    style={{
                      fontSize: 'clamp(1.5rem, 2.6vw, 2.25rem)',
                      lineHeight: 1.1,
                      letterSpacing: '-0.024em',
                      color: '#111214',
                      marginTop: '0.75rem',
                      marginBottom: '1rem',
                      maxWidth: '22ch',
                    }}
                  >
                    {p01.title}
                  </h2>
                </Link>

                <p
                  className="font-body font-light"
                  style={{
                    fontSize: '0.9375rem',
                    lineHeight: 1.76,
                    color: 'rgba(17,18,20,0.50)',
                    maxWidth: '46ch',
                    marginBottom: '1.75rem',
                  }}
                >
                  {p01.deck}
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                  <Link
                    href={p01.href}
                    className="font-body"
                    style={{
                      fontSize: '0.875rem',
                      color: '#111214',
                      textDecoration: 'none',
                      borderBottom: '1px solid rgba(17,18,20,0.22)',
                      paddingBottom: '1px',
                      letterSpacing: '0.01em',
                    }}
                  >
                    Read Perspective →
                  </Link>
                  <span className="font-body font-light" style={{ fontSize: '0.8125rem', color: 'rgba(17,18,20,0.28)' }}>
                    {p01.readingTime}
                  </span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={featuredInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
              >
                <EIFrameworkDiagram dark={false} size="homepage" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Article list — P02, P03 */}
      <section style={{ background: '#F5F3EE', borderBottom: '1px solid rgba(17,18,20,0.06)' }}>
        <div
          className="container-site"
          style={{
            paddingTop: 'clamp(3.5rem, 5vw, 5rem)',
            paddingBottom: 'clamp(3.5rem, 5vw, 5rem)',
          }}
        >
          <p className="vcg-label-dark" style={{ marginBottom: '0.5rem' }}>Continue Reading</p>
          <div style={{ borderTop: '1px solid rgba(17,18,20,0.10)', marginTop: '2rem' }}>
            {[p02, p03].map((p, i) => (
              <ArticleRow key={p.slug} perspective={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Connected thinking pathway */}
      <section style={{ background: '#111214', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div
          className="container-site"
          style={{
            paddingTop: 'clamp(3.5rem, 5vw, 5rem)',
            paddingBottom: 'clamp(3.5rem, 5vw, 5rem)',
          }}
        >
          <p className="vcg-label" style={{ marginBottom: '2rem' }}>A Connected Analytical Framework</p>
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {PERSPECTIVES.map((p) => (
              <div key={p.slug}>
                <span className="font-mono" style={{ fontSize: '0.7rem', letterSpacing: '0.08em', color: 'rgba(200,169,110,0.55)' }}>
                  {p.number}
                </span>
                <p className="font-body font-light" style={{ fontSize: '0.8125rem', lineHeight: 1.72, color: 'rgba(245,243,238,0.38)', marginTop: '0.5rem' }}>
                  {p.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EI connection — Warm White */}
      <section ref={ctaRef} style={{ background: '#F5F3EE' }}>
        <div
          className="container-site"
          style={{
            paddingTop: 'clamp(4rem, 6vw, 6rem)',
            paddingBottom: 'clamp(4rem, 6vw, 6rem)',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            style={{ maxWidth: '52ch' }}
          >
            <p className="vcg-label-dark" style={{ marginBottom: '1.5rem' }}>Execution Intelligence</p>
            <p
              className="font-display font-normal"
              style={{
                fontSize: 'clamp(1.35rem, 2.2vw, 1.85rem)',
                lineHeight: 1.18,
                letterSpacing: '-0.020em',
                color: '#111214',
                marginBottom: '1.25rem',
              }}
            >
              These perspectives are the analytical foundation for how VCG works with executive leadership.
            </p>
            <p
              className="font-body font-light"
              style={{
                fontSize: '0.9375rem',
                lineHeight: 1.76,
                color: 'rgba(17,18,20,0.50)',
                marginBottom: '2rem',
              }}
            >
              If a current initiative raises the questions this research addresses, we work with a small number of leadership teams at any time.
            </p>
            <button onClick={openModal} className="btn-dark">
              Discuss Your Initiative
            </button>
          </motion.div>
        </div>
      </section>
    </>
  )
}
