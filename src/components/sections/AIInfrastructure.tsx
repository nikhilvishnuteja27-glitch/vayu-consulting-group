'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Users, Zap, Database, Brain, ArrowRight } from 'lucide-react'
import { staggerContainer, fadeUp } from '@/lib/animations'

const FEATURES = [
  { Icon: Users,    title: 'AI-Augmented Teams',          body: 'Every VCG engagement is staffed with AI-literate operators who leverage modern tooling to accelerate delivery and eliminate unnecessary overhead.' },
  { Icon: Zap,      title: 'Intelligent Execution Systems', body: 'We design and deploy AI-powered workflows, automation frameworks, and decision systems that make your operations measurably more effective.' },
  { Icon: Database, title: 'Model & Data Integration',     body: 'From LLM integration to data pipeline architecture, VCG\'s technical teams operate across the full modern AI stack with production fluency.' },
]

const STACK_LAYERS = [
  { label: 'Business Outcomes',      sub: 'Revenue · Efficiency · Risk Reduction',        accent: '#C8A96E',               barOpacity: 1.00 },
  { label: 'AI-Augmented Teams',     sub: 'Delivery Acceleration · Decision Support',     accent: 'rgba(245,243,238,0.65)', barOpacity: 0.75 },
  { label: 'Intelligent Automation', sub: 'Workflow Engines · Process Optimization',      accent: 'rgba(245,243,238,0.42)', barOpacity: 0.55 },
  { label: 'Model & Data Layer',     sub: 'LLM Integration · Vector Stores · Pipelines',  accent: 'rgba(245,243,238,0.26)', barOpacity: 0.38 },
]

function StackLayer({ layer, idx, inView }: { layer: (typeof STACK_LAYERS)[0]; idx: number; inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -14 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: 0.3 + idx * 0.08, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className="flex items-center gap-4 py-3.5"
      style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
    >
      <div className="w-1 h-8 rounded-full flex-shrink-0" style={{ background: layer.accent, opacity: layer.barOpacity }} />
      <div className="flex-1 min-w-0">
        <div className="font-body font-normal" style={{ fontSize: '0.9375rem', color: '#F5F3EE' }}>{layer.label}</div>
        <div className="font-body font-light mt-0.5" style={{ fontSize: '0.75rem', letterSpacing: '0.02em', color: 'rgba(245,243,238,0.42)' }}>{layer.sub}</div>
      </div>
      <Brain size={12} strokeWidth={1.3} style={{ color: layer.accent, opacity: layer.barOpacity, flexShrink: 0 }} />
    </motion.div>
  )
}

export function AIInfrastructure() {
  const headerRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-10% 0px' })
  const gridRef = useRef<HTMLDivElement>(null)
  const gridInView = useInView(gridRef, { once: true, margin: '-10% 0px' })
  const stackRef = useRef<HTMLDivElement>(null)
  const stackInView = useInView(stackRef, { once: true, margin: '-10% 0px' })

  return (
    <section id="ai" className="relative section-pad overflow-hidden" style={{ background: '#111214' }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'rgba(255,255,255,0.06)' }} aria-hidden />

      <div className="container-site relative z-10">
        <div className="rule mb-10 md:mb-12" />

        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 16 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <p className="vcg-label mb-4">Services — AI Infrastructure</p>
          <h2 className="font-display font-normal" style={{ fontSize: 'clamp(1.9rem, 3.2vw, 3.2rem)', lineHeight: 1.08, letterSpacing: '-0.030em', maxWidth: '24ch', color: '#F5F3EE' }}>
            Built for the Intelligence Era
          </h2>
          <p className="mt-4 font-body font-light" style={{ fontSize: '1.0625rem', lineHeight: 1.78, maxWidth: '54ch', color: 'rgba(245,243,238,0.50)' }}>
            VCG integrates AI capabilities as a core operational layer — not an add-on — across every engagement.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-10 lg:gap-16">

          {/* Feature cards */}
          <motion.div
            ref={gridRef}
            variants={staggerContainer}
            initial="hidden"
            animate={gridInView ? 'visible' : 'hidden'}
            className="space-y-3"
          >
            {FEATURES.map(({ Icon, title, body }, i) => (
              <motion.div
                key={title}
                variants={fadeUp}
                custom={i}
                className="flex gap-5 p-5 rounded-[4px] border transition-all duration-260 cursor-default"
                style={{ background: '#1A1D22', borderColor: 'rgba(255,255,255,0.07)' }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = 'rgba(255,255,255,0.14)'; el.style.background = '#1E2128'; el.style.transform = 'translateY(-1px)' }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = 'rgba(255,255,255,0.07)'; el.style.background = '#1A1D22'; el.style.transform = 'translateY(0)' }}
              >
                <div className="w-9 h-9 rounded-[4px] flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: 'rgba(255,255,255,0.05)', color: 'rgba(245,243,238,0.40)' }}>
                  <Icon size={16} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-body font-medium mb-1.5" style={{ fontSize: '1rem', letterSpacing: '-0.01em', color: '#F5F3EE' }}>{title}</h3>
                  <p className="font-body font-light" style={{ fontSize: '0.9rem', lineHeight: 1.80, color: 'rgba(245,243,238,0.50)' }}>{body}</p>
                </div>
              </motion.div>
            ))}

            <motion.div variants={fadeUp} custom={3} className="pt-2">
              <a
                href="#cta"
                onClick={e => { e.preventDefault(); document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth', block: 'start' }) }}
                className="inline-flex items-center gap-2 font-body font-normal transition-colors duration-200 group"
                style={{ fontSize: '0.875rem', color: 'rgba(245,243,238,0.30)' }}
                onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(245,243,238,0.72)'}
                onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(245,243,238,0.30)'}
              >
                Discuss AI integration for your initiative
                <ArrowRight size={13} strokeWidth={1.5} className="transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </motion.div>
          </motion.div>

          {/* AI Stack */}
          <motion.div
            ref={stackRef}
            initial={{ opacity: 0, y: 14 }}
            animate={stackInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="rounded-[4px] border p-6" style={{ background: '#1A1D22', borderColor: 'rgba(255,255,255,0.07)' }}>
              <p className="vcg-label mb-5">VCG AI Integration Stack</p>

              <div>
                {STACK_LAYERS.map((layer, i) => (
                  <StackLayer key={layer.label} layer={layer} idx={i} inView={stackInView} />
                ))}
              </div>

              <div className="mt-5 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="grid grid-cols-3 gap-3 text-center">
                  {[
                    { value: '40+',  label: 'AI Tools' },
                    { value: '3×',   label: 'Faster' },
                    { value: '100%', label: 'Production' },
                  ].map((stat, i) => (
                    <div key={stat.label} style={i > 0 ? { borderLeft: '1px solid rgba(255,255,255,0.06)' } : {}}>
                      <div className="font-display font-normal" style={{ fontSize: '1.3rem', letterSpacing: '-0.025em', color: '#F5F3EE' }}>{stat.value}</div>
                      <div className="mt-0.5 font-body font-light" style={{ fontSize: '0.5625rem', letterSpacing: '0.09em', textTransform: 'uppercase', color: 'rgba(245,243,238,0.30)' }}>{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
