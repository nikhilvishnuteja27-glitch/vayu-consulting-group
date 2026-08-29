'use client'

import { useContactModal } from '@/context/ContactModalContext'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import Link from 'next/link'

const LINE_EASE = [0.16, 1, 0.3, 1] as const

function LineReveal({ children, delay, style }: { children: React.ReactNode; delay: number; style?: React.CSSProperties }) {
  return (
    <div style={{ overflow: 'hidden', lineHeight: 1.08, paddingBottom: '0.04em' }}>
      <motion.div
        initial={{ y: '108%', opacity: 0 }}
        animate={{ y: '0%', opacity: 1 }}
        transition={{ duration: 0.90, delay, ease: LINE_EASE }}
        style={style}
      >
        {children}
      </motion.div>
    </div>
  )
}

export function Hero() {
  const prefersReduced = useReducedMotion()
  const { openModal } = useContactModal()

  return (
    <section
        id="home"
        className="relative min-h-screen flex flex-col overflow-hidden"
        style={{ background: '#0B0B0D' }}
      >
        {/* Architectural dot grid — left zone */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(245,243,238,0.45) 1px, transparent 1px)',
            backgroundSize: '52px 52px',
            opacity: 0.022,
            maskImage: 'radial-gradient(ellipse 70% 60% at 30% 45%, black 10%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 30% 45%, black 10%, transparent 70%)',
          }}
          aria-hidden
        />

        {/* Abstract structural element — right side */}
        <div
          className="absolute top-0 right-0 bottom-0 pointer-events-none hidden md:block"
          style={{ width: '42%', overflow: 'hidden' }}
          aria-hidden
        >
          {/* Node network — SVG structure */}
          <svg
            viewBox="0 0 420 680"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ position: 'absolute', top: '8%', right: '-2%', width: '100%', height: '84%', opacity: 0.11 }}
          >
            {/* Grid lines horizontal */}
            {[0,1,2,3,4,5,6].map(r => (
              <line key={`h${r}`} x1="20" y1={r * 96 + 48} x2="400" y2={r * 96 + 48} stroke="#F5F3EE" strokeWidth="0.5"/>
            ))}
            {/* Grid lines vertical */}
            {[0,1,2,3].map(c => (
              <line key={`v${c}`} x1={c * 128 + 20} y1="48" x2={c * 128 + 20} y2="624" stroke="#F5F3EE" strokeWidth="0.5"/>
            ))}
            {/* Nodes at intersections — varying size */}
            {[0,1,2,3,4,5,6].flatMap(r =>
              [0,1,2,3].map(c => {
                const key = `n${r}${c}`
                const highlight = (r === 2 && c === 1) || (r === 4 && c === 2) || (r === 1 && c === 3)
                return <circle key={key} cx={c * 128 + 20} cy={r * 96 + 48} r={highlight ? 3.5 : 2} fill="#F5F3EE" opacity={highlight ? 0.9 : 0.5} />
              })
            )}
            {/* Accent connecting lines */}
            <line x1="148" y1="240" x2="276" y2="432" stroke="#C8A96E" strokeWidth="0.6" opacity="0.5"/>
            <line x1="276" y1="144" x2="404" y2="336" stroke="#C8A96E" strokeWidth="0.6" opacity="0.5"/>
          </svg>

          {/* Gradient fade — left edge to blend into content */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(90deg, #0B0B0D 0%, transparent 35%, transparent 80%, #0B0B0D 100%)',
            }}
          />
        </div>

        <div className="container-site flex-1 flex flex-col relative z-10" style={{ paddingTop: '5rem' }}>

          {/* Top meta — minimal dash only */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.28, duration: 0.7 }}
            className="flex items-center gap-3 pt-14 md:pt-16"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.28, duration: 0.6, ease: LINE_EASE }}
              style={{ width: '20px', height: '1px', background: 'rgba(245,243,238,0.14)', transformOrigin: 'left' }}
            />
            <span className="vcg-label" style={{ color: 'rgba(245,243,238,0.22)' }}>Vayu Consulting Group</span>
          </motion.div>

          {/* Main content */}
          <div className="flex-1 flex flex-col justify-center py-10">

            {/* Problem statement — line by line */}
            <h1 className="sr-only">Critical initiatives fail for one reason. No one owns the execution.</h1>
            <div aria-hidden style={{ fontSize: 'clamp(3rem, 7.8vw, 8rem)', letterSpacing: '-0.044em' }}>

              <LineReveal
                delay={0.42}
                style={{ fontFamily: 'var(--font-display-var), serif', fontWeight: 400, color: 'rgba(245,243,238,0.50)' }}
              >
                Critical initiatives
              </LineReveal>

              <LineReveal
                delay={0.56}
                style={{ fontFamily: 'var(--font-display-var), serif', fontWeight: 400, color: 'rgba(245,243,238,0.50)' }}
              >
                fail for one reason.
              </LineReveal>

              {/* Breathing space */}
              <div style={{ height: 'clamp(0.6rem, 1.2vw, 1.1rem)' }} />

              <LineReveal
                delay={0.78}
                style={{ fontFamily: 'var(--font-display-var), serif', fontWeight: 400, color: '#F5F3EE' }}
              >
                No one owns
              </LineReveal>

              <LineReveal
                delay={0.90}
                style={{ fontFamily: 'var(--font-display-var), serif', fontWeight: 400, fontStyle: 'italic', color: '#F5F3EE' }}
              >
                the execution.
              </LineReveal>
            </div>

            {/* Rule */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.22, duration: 1.0, ease: LINE_EASE }}
              style={{
                marginTop: '2.75rem',
                height: '1px',
                background: 'linear-gradient(90deg, rgba(255,255,255,0.09), rgba(255,255,255,0.02) 60%, transparent)',
                maxWidth: '54ch',
                transformOrigin: 'left',
              }}
            />

            {/* Intro to category + CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.30, duration: 0.75, ease: LINE_EASE }}
              style={{ marginTop: '1.75rem' }}
            >
              <p
                className="font-body font-light"
                style={{
                  fontSize: 'clamp(0.9375rem, 1.15vw, 1.0625rem)',
                  lineHeight: 1.84,
                  color: 'rgba(245,243,238,0.44)',
                  maxWidth: '54ch',
                }}
              >
                VCG deploys{' '}
                <span style={{ color: 'rgba(245,243,238,0.70)', fontStyle: 'italic' }}>Execution Intelligence</span>
                {' '}— senior operators, AI-enabled governance, and delivery infrastructure —
                into your most critical initiatives until measurable outcomes are achieved.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.46, duration: 0.6 }}
                className="mt-9 flex flex-col sm:flex-row items-start sm:items-center gap-5"
              >
                <button onClick={openModal} className="btn-primary">
                  Discuss Your Initiative
                </button>
                <Link
                  href="/how-we-work"
                  className="inline-flex items-center gap-2 font-body font-normal transition-all duration-200 group"
                  style={{ fontSize: '0.875rem', color: 'rgba(245,243,238,0.26)', letterSpacing: '0.01em', textDecoration: 'none' }}
                  onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(245,243,238,0.58)'}
                  onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(245,243,238,0.26)'}
                >
                  See How VCG Works
                  <ArrowRight size={13} strokeWidth={1.5} className="transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </motion.div>
          </div>

        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.8 }}
          className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          aria-hidden
        >
          <motion.div
            animate={prefersReduced ? {} : { y: [0, 5, 0] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
            style={{ color: 'rgba(245,243,238,0.10)' }}
          >
            <ChevronDown size={14} strokeWidth={1.5} />
          </motion.div>
        </motion.div>
    </section>
  )
}
