'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useCountUp } from '@/hooks/useCountUp'

function StatTile({ end, prefix, suffix, label, inView }: { end: number; prefix?: string; suffix?: string; label: string; inView: boolean }) {
  const display = useCountUp({ end, prefix: prefix ?? '', suffix: suffix ?? '', startWhen: inView, duration: 1400 })
  return (
    <div>
      <div className="font-display font-normal" style={{ fontSize: '1.55rem', letterSpacing: '-0.028em', color: '#F5F3EE', lineHeight: 1 }}>
        {display}
      </div>
      <div className="font-body font-light mt-1" style={{ fontSize: '0.72rem', letterSpacing: '0.04em', color: 'rgba(245,243,238,0.30)' }}>
        {label}
      </div>
    </div>
  )
}

function AnimatedStats({ inView }: { inView: boolean }) {
  return (
    <div className="mt-8 p-5 rounded-[4px]" style={{ background: '#1A1D22', border: '1px solid rgba(255,255,255,0.07)' }}>
      <p className="vcg-label mb-4">Engagement Scale</p>
      <div className="grid grid-cols-2 gap-5">
        <StatTile end={12}  suffix="+"  label="Industries"             inView={inView} />
        <StatTile end={2}   prefix="$"  suffix="B+" label="Programs Managed"   inView={inView} />
        <StatTile end={40}  suffix="+"  label="Specialists On-Demand" inView={inView} />
        <StatTile end={100} suffix="%" label="Accountability Rate"   inView={inView} />
      </div>
    </div>
  )
}

const SIGNALS = [
  { label: 'Enterprise-Grade',     detail: 'Every engagement is structured for organizational rigor — governed, documented, and delivered to enterprise standard.' },
  { label: 'Accountable Delivery', detail: 'VCG assumes operational ownership from day one. We hold milestones, not just advisory distance.' },
  { label: 'Confidential by Default', detail: 'Client engagements are conducted with full discretion. Confidentiality is structural, not contractual.' },
  { label: 'Scalable from Day One', detail: 'From a single embedded specialist to a 40-person cross-functional delivery unit — scaled to match the initiative.' },
]

const INDUSTRIES = [
  'Financial Services', 'Healthcare & Life Sciences', 'Technology & SaaS',
  'Government & Public Sector', 'Energy & Utilities', 'Retail & Consumer',
  'Manufacturing & Supply Chain', 'Media & Telecommunications',
]

function Row({ signal, index }: { signal: (typeof SIGNALS)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-5% 0px' })

  return (
    <div ref={ref} className="relative">
      <motion.div
        className="absolute top-0 left-0 h-px"
        style={{ background: 'rgba(255,255,255,0.07)', width: '100%' }}
        initial={{ scaleX: 0, transformOrigin: 'left' }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.1, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: index * 0.08 + 0.55 }}
        className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-3 md:gap-14 py-6"
      >
        <div className="font-body font-medium" style={{ fontSize: '0.9375rem', letterSpacing: '0.01em', color: 'rgba(245,243,238,0.75)' }}>
          {signal.label}
        </div>
        <div className="font-body font-light" style={{ fontSize: '0.9375rem', lineHeight: 1.78, color: 'rgba(245,243,238,0.48)' }}>
          {signal.detail}
        </div>
      </motion.div>
    </div>
  )
}

export function TrustSignals() {
  const headerRef   = useRef<HTMLDivElement>(null)
  const headerInView  = useInView(headerRef, { once: true, margin: '-10% 0px' })
  const industriesRef = useRef<HTMLDivElement>(null)
  const industriesInView = useInView(industriesRef, { once: true, margin: '-10% 0px' })
  const quoteRef    = useRef<HTMLDivElement>(null)
  const quoteInView   = useInView(quoteRef, { once: true, margin: '-10% 0px' })

  return (
    <section id="trust" className="relative section-pad" style={{ background: '#0B0B0D' }}>
      {/* Ghost section ordinal */}
      <div
        className="absolute bottom-0 right-0 font-display font-normal select-none pointer-events-none"
        style={{ fontSize: 'clamp(12rem, 22vw, 22rem)', lineHeight: 0.85, letterSpacing: '-0.06em', color: 'rgba(255,255,255,0.018)', paddingRight: 'clamp(1rem, 2vw, 2rem)' }}
        aria-hidden
      >06</div>

      <div className="container-site relative z-10">
        <div className="rule mb-10 md:mb-12" />

        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-16 lg:gap-24">

          {/* Left — trust signals */}
          <div>
            <motion.div
              ref={headerRef}
              initial={{ opacity: 0, y: 18 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mb-12"
            >
              <p className="vcg-label mb-4">Why VCG</p>
              <h2 className="font-display font-normal" style={{ fontSize: 'clamp(1.9rem, 3.2vw, 3.2rem)', lineHeight: 1.1, letterSpacing: '-0.028em', color: '#F5F3EE', maxWidth: '28ch' }}>
                Trusted Where Precision Is Non-Negotiable
              </h2>
            </motion.div>

            <div>
              {SIGNALS.map((s, i) => <Row key={s.label} signal={s} index={i} />)}
              <div className="border-t" style={{ borderColor: 'rgba(255,255,255,0.06)' }} />
            </div>

            {/* Pull quote */}
            <motion.div
              ref={quoteRef}
              initial={{ opacity: 0, y: 16 }}
              animate={quoteInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="mt-16"
            >
              <div className="w-px h-10 mb-6" style={{ background: 'rgba(245,243,238,0.14)' }} />
              <blockquote
                className="font-display italic"
                style={{ fontSize: 'clamp(1.1rem, 2vw, 1.65rem)', lineHeight: 1.48, letterSpacing: '-0.01em', color: 'rgba(245,243,238,0.42)', maxWidth: '48ch' }}
              >
                &ldquo;The gap between what an organization plans and what it delivers is where we operate.&rdquo;
              </blockquote>
            </motion.div>
          </div>

          {/* Right — Industries */}
          <motion.div
            ref={industriesRef}
            initial={{ opacity: 0, y: 18 }}
            animate={industriesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="vcg-label mb-6">Industries Served</p>

            <div className="space-y-0.5">
              {INDUSTRIES.map((industry, i) => (
                <motion.div
                  key={industry}
                  initial={{ opacity: 0, x: 12 }}
                  animate={industriesInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center gap-3 px-4 py-3 rounded-[3px] transition-all duration-200 cursor-default"
                  style={{ background: 'transparent' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = '#1A1D22' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = 'transparent' }}
                >
                  <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'rgba(245,243,238,0.22)' }} />
                  <span className="font-body font-light" style={{ fontSize: '0.9375rem', color: 'rgba(245,243,238,0.55)' }}>
                    {industry}
                  </span>
                </motion.div>
              ))}
            </div>

            <AnimatedStats inView={industriesInView} />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
