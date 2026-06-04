'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import { fadeUp, staggerContainer } from '@/lib/animations'
import { ArrowRight, ShieldCheck, Zap, Users, Target } from 'lucide-react'

const DIFFERENTIATORS = [
  { Icon: Target,      title: 'Full-Stack Accountability',  body: 'We own outcomes from day one through delivery — not advisory distance. Milestones are held, not managed.' },
  { Icon: Users,       title: 'Precision Team Assembly',    body: 'Every specialist is hand-matched to your initiative at the exact seniority level your challenge demands. No generalists.' },
  { Icon: Zap,         title: 'Zero Ramp-Up',              body: 'VCG teams integrate into your environment and begin executing immediately. There is no orientation theater.' },
  { Icon: ShieldCheck, title: 'Enterprise Governance',      body: 'Every engagement is structured, documented, and governed to the standard of your most critical initiative.' },
]

export function Positioning() {
  const { ref, inView } = useInView()

  return (
    <section
      id="positioning"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative section-pad"
      style={{ background: '#0B0B0D' }}
    >
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'rgba(255,255,255,0.06)' }} />

      {/* Ghost section ordinal */}
      <div
        className="absolute top-0 right-0 font-display font-normal select-none pointer-events-none"
        style={{ fontSize: 'clamp(12rem, 22vw, 22rem)', lineHeight: 0.85, letterSpacing: '-0.06em', color: 'rgba(255,255,255,0.018)', paddingRight: 'clamp(1rem, 2vw, 2rem)' }}
        aria-hidden
      >02</div>

      <div className="container-site relative z-10">
        <div className="rule mb-10 md:mb-12" />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-16 lg:gap-20 items-start">

          {/* Left — narrative */}
          <motion.div variants={staggerContainer} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
            <motion.p variants={fadeUp} custom={0} className="vcg-label mb-5">Who We Are</motion.p>

            <motion.h2
              variants={fadeUp}
              custom={1}
              className="font-display font-normal"
              style={{ fontSize: 'clamp(1.9rem, 3.2vw, 3.4rem)', lineHeight: 1.08, letterSpacing: '-0.03em', color: '#F5F3EE' }}
            >
              The capability layer that turns strategic ambition into operational reality.
            </motion.h2>

            <motion.div variants={fadeUp} custom={2}>
              <div className="mt-6 h-px w-16" style={{ background: 'rgba(245,243,238,0.14)' }} />
            </motion.div>

            <div className="mt-7 space-y-4 max-w-[52ch]">
              {[
                'VCG operates as an embedded execution partner — the connective tissue between an organization\'s vision and its operational delivery.',
                'We deploy the precise combination of senior professionals, AI-powered systems, and execution frameworks that your initiative demands.',
                'We build, lead, and deliver — with accountability at every stage, not just at the end.',
              ].map((para, i) => (
                <motion.p
                  key={i}
                  variants={fadeUp}
                  custom={i + 3}
                  className="font-body font-light"
                  style={{ fontSize: '1.0625rem', lineHeight: 1.82, color: 'rgba(245,243,238,0.55)' }}
                >
                  {para}
                </motion.p>
              ))}
            </div>

            <motion.div variants={fadeUp} custom={6} className="mt-10 flex items-center gap-6">
              <a
                href="#cta"
                onClick={e => { e.preventDefault(); document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth', block: 'start' }) }}
                className="inline-flex items-center gap-2 font-body font-medium transition-colors duration-200 group"
                style={{ fontSize: '0.9rem', color: 'rgba(245,243,238,0.42)' }}
                onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(245,243,238,0.82)'}
                onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(245,243,238,0.42)'}
              >
                Begin a conversation
                <ArrowRight size={14} strokeWidth={1.5} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#capabilities"
                onClick={e => { e.preventDefault(); document.getElementById('capabilities')?.scrollIntoView({ behavior: 'smooth', block: 'start' }) }}
                className="font-body font-light transition-colors duration-200"
                style={{ fontSize: '0.875rem', color: 'rgba(245,243,238,0.24)' }}
                onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(245,243,238,0.55)'}
                onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(245,243,238,0.24)'}
              >
                View capabilities →
              </a>
            </motion.div>
          </motion.div>

          {/* Right — differentiator cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 content-start"
          >
            {DIFFERENTIATORS.map(({ Icon, title, body }, i) => (
              <motion.div
                key={title}
                variants={fadeUp}
                custom={i + 1}
                className="p-5 rounded-[4px] border transition-all duration-300 cursor-default"
                style={{ background: '#1A1D22', borderColor: 'rgba(255,255,255,0.07)' }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = 'rgba(255,255,255,0.14)'; el.style.background = '#1E2128' }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = 'rgba(255,255,255,0.07)'; el.style.background = '#1A1D22' }}
              >
                <div className="w-8 h-8 rounded-[3px] flex items-center justify-center mb-3" style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(245,243,238,0.42)' }}>
                  <Icon size={16} strokeWidth={1.5} />
                </div>
                <h3 className="font-body font-medium mb-2" style={{ fontSize: '0.9375rem', color: '#F5F3EE', letterSpacing: '-0.005em' }}>
                  {title}
                </h3>
                <p className="font-body font-light" style={{ fontSize: '0.84rem', lineHeight: 1.72, color: 'rgba(245,243,238,0.48)' }}>
                  {body}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
