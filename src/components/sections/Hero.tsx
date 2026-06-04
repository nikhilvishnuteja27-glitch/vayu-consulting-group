'use client'

import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, ChevronDown, Check, Loader2, Clock } from 'lucide-react'
import { ContactModal } from '@/components/layout/ContactModal'

const STATS = [
  { value: '12+',   label: 'Industries'       },
  { value: '$2B+',  label: 'Programs Managed' },
  { value: 'Day 1', label: 'Execution Starts' },
]

const ENGAGEMENT_PHASES = [
  { n: '01', label: 'Initiative Assessment', status: 'complete', detail: 'Scope defined'  },
  { n: '02', label: 'Team Assembly',         status: 'active',   detail: 'In progress'    },
  { n: '03', label: 'Embedded Execution',    status: 'queued',   detail: 'Scheduled'      },
  { n: '04', label: 'Delivery & Transfer',   status: 'pending',  detail: 'Pending'        },
] as const

/**
 * WordReveal — each word slides up through an overflow-hidden mask.
 */
function WordReveal({
  text,
  baseDelay = 0,
  style,
}: {
  text: string
  baseDelay?: number
  style?: React.CSSProperties
}) {
  const words = text.split(' ')
  return (
    <span style={{ display: 'inline-flex', flexWrap: 'wrap', columnGap: '0.3em', rowGap: 0 }}>
      {words.map((word, i) => (
        <span key={i} style={{ display: 'inline-block', overflow: 'hidden', lineHeight: 1.2, paddingBottom: '0.04em' }}>
          <motion.span
            style={{ display: 'inline-block', ...style }}
            initial={{ y: '110%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            transition={{ duration: 0.78, delay: baseDelay + i * 0.065, ease: [0.16, 1, 0.3, 1] }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  )
}

export function Hero() {
  const prefersReduced = useReducedMotion()
  const [contactOpen, setContactOpen] = useState(false)
  const [activePulse,  setActivePulse]  = useState(false)

  useEffect(() => {
    const id = setInterval(() => setActivePulse(p => !p), 3800)
    return () => clearInterval(id)
  }, [])

  return (
    <>
      <section
        id="home"
        className="relative min-h-screen flex flex-col overflow-hidden"
        style={{ background: '#0B0B0D', paddingTop: '5rem' }}
      >
        {/* Very subtle architectural dot grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(245,243,238,0.50) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
            opacity: 0.028,
            maskImage: 'radial-gradient(ellipse 80% 70% at 55% 35%, black 10%, transparent 75%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 55% 35%, black 10%, transparent 75%)',
          }}
          aria-hidden
        />

        {/* Thin diagonal rule — architectural */}
        <div
          className="absolute pointer-events-none hidden lg:block"
          style={{
            top: '18%', right: '36%', width: '1px', height: '64%',
            background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.04) 30%, rgba(255,255,255,0.04) 70%, transparent)',
            transform: 'rotate(12deg)',
          }}
          aria-hidden
        />

        {/* Main content */}
        <div className="container-site flex-1 flex flex-col relative z-10">

          {/* Top meta row */}
          <div className="flex items-start justify-between pt-12 md:pt-16">
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3"
            >
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.25, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                style={{ width: '20px', height: '1px', background: 'rgba(245,243,238,0.18)', transformOrigin: 'left' }}
              />
              <span className="vcg-label">Enterprise Capability Infrastructure</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="hidden md:flex items-start gap-3"
            >
              <div style={{ width: '1px', height: '28px', background: 'rgba(255,255,255,0.07)', marginTop: '2px' }} />
              <span className="font-body font-light text-right" style={{ fontSize: '0.75rem', lineHeight: 1.7, color: 'rgba(245,243,238,0.24)' }}>
                Strategy &amp; Technology<br />Consulting
              </span>
            </motion.div>
          </div>

          {/* Headline + Panel */}
          <div className="flex-1 flex flex-col lg:flex-row lg:items-center gap-14 lg:gap-20 py-10 md:py-0">

            {/* LEFT — Headline */}
            <div className="flex-1 flex flex-col justify-center">

              {/* Kicker */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="flex items-center gap-2.5 mb-7"
              >
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.3, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  style={{ width: '32px', height: '1px', background: 'rgba(245,243,238,0.18)', transformOrigin: 'left' }}
                />
                <span className="font-body font-normal" style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(245,243,238,0.28)' }}>
                  Where Strategy Meets Execution
                </span>
              </motion.div>

              {/* HEADLINE */}
              <div style={{ fontSize: 'clamp(3.2rem, 7.2vw, 7.2rem)', lineHeight: 1.02, letterSpacing: '-0.042em' }}>
                <div style={{ display: 'block', marginBottom: '0.04em' }}>
                  <WordReveal
                    text="Elite Capability."
                    baseDelay={0.45}
                    style={{ color: '#F5F3EE', fontFamily: 'var(--font-display-var), serif', fontWeight: 400 }}
                  />
                </div>
                <div style={{ display: 'block', marginBottom: '0.04em' }}>
                  <WordReveal
                    text="Accountable Delivery."
                    baseDelay={0.60}
                    style={{ color: '#F5F3EE', fontFamily: 'var(--font-display-var), serif', fontWeight: 400 }}
                  />
                </div>
                <div style={{ display: 'block' }}>
                  <WordReveal
                    text="On Demand."
                    baseDelay={0.78}
                    style={{
                      color: '#C8A96E',
                      fontFamily: 'var(--font-display-var), serif',
                      fontStyle: 'italic',
                      fontWeight: 400,
                    }}
                  />
                </div>
              </div>

              {/* Animated rule */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.10, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  marginTop: '2.5rem', height: '1px',
                  background: 'linear-gradient(90deg, rgba(255,255,255,0.10), rgba(255,255,255,0.03) 55%, transparent)',
                  maxWidth: '42ch', transformOrigin: 'left',
                }}
              />

              {/* Sub-copy + CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.18, duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
                style={{ marginTop: '1.75rem' }}
              >
                <p
                  className="font-body font-light"
                  style={{ fontSize: 'clamp(0.9375rem, 1.2vw, 1.0625rem)', lineHeight: 1.82, color: 'rgba(245,243,238,0.55)', maxWidth: '44ch' }}
                >
                  VCG deploys elite talent, AI-powered systems, and execution
                  frameworks to deliver what organizations cannot build alone.
                </p>

                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.38, duration: 0.6 }}
                  className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4"
                >
                  <button onClick={() => setContactOpen(true)} className="btn-primary">
                    Begin a Conversation
                  </button>
                  <button
                    onClick={() => document.getElementById('positioning')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                    className="inline-flex items-center gap-2 font-body font-normal transition-all duration-200 group"
                    style={{ fontSize: '0.875rem', color: 'rgba(245,243,238,0.28)', letterSpacing: '0.01em' }}
                    onMouseEnter={e => (e.currentTarget as HTMLButtonElement).style.color = 'rgba(245,243,238,0.65)'}
                    onMouseLeave={e => (e.currentTarget as HTMLButtonElement).style.color = 'rgba(245,243,238,0.28)'}
                  >
                    Discover our approach
                    <ArrowRight size={13} strokeWidth={1.5} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </button>
                </motion.div>
              </motion.div>
            </div>

            {/* RIGHT — Engagement Framework card (dark solid, no glass) */}
            <motion.div
              initial={{ opacity: 0, x: 32, y: 8 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 1.22, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
              className="hidden lg:block flex-shrink-0"
              style={{ width: '296px' }}
            >
              <div
                style={{
                  background: '#15171B',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '6px',
                  overflow: 'hidden',
                }}
              >
                {/* Card header */}
                <div style={{ padding: '1.25rem 1.5rem 1rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <div className="flex items-center justify-between">
                    <p className="font-body font-medium" style={{ fontSize: '0.5625rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(245,243,238,0.30)' }}>
                      Engagement Framework
                    </p>
                    <div className="flex items-center gap-1.5">
                      <motion.div
                        animate={{ opacity: activePulse ? 1 : 0.30 }}
                        transition={{ duration: 0.7 }}
                        style={{ width: 5, height: 5, borderRadius: '50%', background: '#C8A96E' }}
                      />
                      <span style={{ fontSize: '0.45rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(245,243,238,0.22)', fontFamily: 'var(--font-body-var)' }}>
                        Active
                      </span>
                    </div>
                  </div>
                </div>

                {/* Phase list */}
                <div style={{ padding: '0.75rem 1rem' }}>
                  {ENGAGEMENT_PHASES.map((phase) => {
                    const isComplete = phase.status === 'complete'
                    const isActive   = phase.status === 'active'
                    return (
                      <div
                        key={phase.n}
                        style={{
                          display: 'flex', alignItems: 'center', gap: 10,
                          padding: '8px 10px', borderRadius: 6, marginBottom: 2,
                          background: isActive ? 'rgba(200,169,110,0.06)' : 'transparent',
                          border: `1px solid ${isActive ? 'rgba(200,169,110,0.16)' : 'transparent'}`,
                        }}
                      >
                        {/* Status icon */}
                        <div style={{
                          width: 18, height: 18, borderRadius: '50%', flexShrink: 0,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          background: isComplete ? 'rgba(245,243,238,0.88)' : isActive ? '#C8A96E' : 'rgba(255,255,255,0.06)',
                          border: isComplete || isActive ? 'none' : '1px solid rgba(255,255,255,0.12)',
                        }}>
                          {isComplete && <Check size={8} strokeWidth={2.5} style={{ color: '#0B0B0D' }} />}
                          {isActive && (
                            <motion.div animate={{ rotate: 360 }} transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}>
                              <Loader2 size={8} strokeWidth={2.5} style={{ color: '#0B0B0D' }} />
                            </motion.div>
                          )}
                          {!isComplete && !isActive && <Clock size={8} strokeWidth={1.8} style={{ color: 'rgba(245,243,238,0.24)' }} />}
                        </div>

                        {/* Label */}
                        <div className="font-body font-normal flex-1" style={{
                          fontSize: '0.78rem',
                          color: isComplete ? 'rgba(245,243,238,0.38)' : isActive ? 'rgba(245,243,238,0.88)' : 'rgba(245,243,238,0.24)',
                          textDecoration: isComplete ? 'line-through' : 'none',
                          textDecorationColor: 'rgba(245,243,238,0.16)',
                        }}>
                          {phase.label}
                        </div>

                        {/* Phase tag */}
                        <span style={{
                          fontSize: '0.45rem', letterSpacing: '0.08em', textTransform: 'uppercase',
                          color: isActive ? 'rgba(200,169,110,0.60)' : 'rgba(245,243,238,0.16)',
                          fontFamily: 'var(--font-body-var)',
                          whiteSpace: 'nowrap',
                        }}>
                          {isActive ? phase.detail : phase.n}
                        </span>
                      </div>
                    )
                  })}
                </div>

                {/* Progress bar */}
                <div style={{ padding: '0 1.25rem 1rem' }}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span style={{ fontSize: '0.45rem', letterSpacing: '0.10em', textTransform: 'uppercase', color: 'rgba(245,243,238,0.22)', fontFamily: 'var(--font-body-var)' }}>Progress</span>
                    <span style={{ fontSize: '0.45rem', letterSpacing: '0.06em', color: 'rgba(245,243,238,0.32)', fontFamily: 'var(--font-body-var)' }}>Phase 2 of 4</span>
                  </div>
                  <div style={{ height: 2, background: 'rgba(255,255,255,0.06)', borderRadius: 999, overflow: 'hidden' }}>
                    <motion.div
                      initial={{ width: '0%' }}
                      animate={{ width: '38%' }}
                      transition={{ delay: 1.5, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                      style={{ height: '100%', background: '#C8A96E', borderRadius: 999 }}
                    />
                  </div>
                </div>

                {/* Stats strip */}
                <div style={{ padding: '0.75rem 1.5rem 1.25rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                  <div className="grid grid-cols-3">
                    {STATS.map(({ value, label }, i) => (
                      <div key={label} className="text-center py-1.5" style={i > 0 ? { borderLeft: '1px solid rgba(255,255,255,0.06)' } : {}}>
                        <div className="font-display font-normal" style={{ fontSize: '1rem', letterSpacing: '-0.025em', color: '#F5F3EE', lineHeight: 1 }}>
                          {value}
                        </div>
                        <div className="mt-1 font-body font-light" style={{ fontSize: '0.42rem', letterSpacing: '0.10em', textTransform: 'uppercase', color: 'rgba(245,243,238,0.28)', lineHeight: 1.2 }}>
                          {label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Mobile stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="flex flex-col md:flex-row items-start md:items-end justify-between pb-14 md:pb-16 gap-8 lg:hidden"
          >
            <p className="font-body font-light" style={{ fontSize: '0.8125rem', maxWidth: '30ch', lineHeight: 1.78, color: 'rgba(245,243,238,0.28)' }}>
              From scoping through delivery —<br />complete operational accountability.
            </p>
            <div className="flex gap-2">
              {STATS.map(({ value, label }) => (
                <div
                  key={label}
                  className="px-4 py-3 rounded-lg text-center"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  <div className="font-display font-normal" style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)', letterSpacing: '-0.025em', color: '#F5F3EE', lineHeight: 1.1 }}>
                    {value}
                  </div>
                  <div className="mt-1 font-body" style={{ fontSize: '0.5625rem', letterSpacing: '0.10em', textTransform: 'uppercase', color: 'rgba(245,243,238,0.28)' }}>
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.0, duration: 0.8 }}
          className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          aria-hidden
        >
          <span className="font-body" style={{ fontSize: '0.45rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(245,243,238,0.18)', fontWeight: 500 }}>
            scroll
          </span>
          <motion.div
            animate={prefersReduced ? {} : { y: [0, 5, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            style={{ color: 'rgba(245,243,238,0.14)' }}
          >
            <ChevronDown size={14} strokeWidth={1.5} />
          </motion.div>
        </motion.div>
      </section>

      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  )
}
