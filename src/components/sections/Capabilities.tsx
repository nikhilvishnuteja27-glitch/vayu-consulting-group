'use client'

import { useRef } from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import { Code2, BrainCircuit, BarChart3, Target, Layers, RefreshCw, Search, Package } from 'lucide-react'
import { staggerContainer, fadeUp } from '@/lib/animations'
import type { LucideIcon } from 'lucide-react'

const CAPABILITIES = [
  { n: '01', Icon: Code2,        title: 'Software Engineering',      body: 'Full-stack, platform, and infrastructure engineers embedded directly into your delivery pipeline.' },
  { n: '02', Icon: BrainCircuit, title: 'AI & Machine Learning',     body: 'Applied AI specialists who design, build, and operationalize intelligent systems at enterprise scale.' },
  { n: '03', Icon: BarChart3,    title: 'Strategic Consulting',      body: 'Senior operators who clarify direction, identify leverage points, and build executable roadmaps.' },
  { n: '04', Icon: Target,       title: 'Program Leadership',        body: 'Delivery leads who own outcomes — not just timelines. Full accountability from kickoff to completion.' },
  { n: '05', Icon: Layers,       title: 'Technical Architecture',    body: 'Systems architects who design for scale, resilience, and the demands of the next five years.' },
  { n: '06', Icon: RefreshCw,    title: 'Enterprise Transformation', body: 'Transformation specialists who drive organizational change from strategy through sustained adoption.' },
  { n: '07', Icon: Search,       title: 'Operational Intelligence',  body: 'Analysts and operators who convert complexity into decision-ready clarity and measurable action.' },
  { n: '08', Icon: Package,      title: 'Product Execution',         body: 'Product operators who close the gap between product vision and shipped, working capability.' },
]

function TiltCard({ n, Icon, title, body, delay }: { n: string; Icon: LucideIcon; title: string; body: string; delay: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [5, -5]), { stiffness: 180, damping: 22 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-5, 5]), { stiffness: 180, damping: 22 })

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }
  function onMouseLeave() { x.set(0); y.set(0) }

  return (
    <motion.div variants={fadeUp} custom={delay} style={{ perspective: '800px' }}>
      <motion.div
        ref={cardRef}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        style={{
          rotateX, rotateY,
          transformStyle: 'preserve-3d',
          position: 'relative',
          background: '#1A1D22',
          border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: '6px',
          padding: '1.625rem',
          display: 'flex',
          flexDirection: 'column',
          cursor: 'default',
          willChange: 'transform',
          overflow: 'hidden',
          transition: 'border-color 0.28s ease',
        }}
        whileHover={{ borderColor: 'rgba(255,255,255,0.14)' }}
      >
        {/* Ordinal watermark */}
        <span
          className="absolute font-mono select-none pointer-events-none"
          style={{ top: '1.25rem', right: '1.25rem', fontSize: '0.5625rem', letterSpacing: '0.10em', color: 'rgba(255,255,255,0.07)', fontWeight: 400 }}
          aria-hidden
        >{n}</span>

        {/* Icon */}
        <div className="mb-5 w-9 h-9 rounded-[5px] flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.05)' }}>
          <Icon size={16} strokeWidth={1.4} style={{ color: 'rgba(245,243,238,0.38)' }} />
        </div>

        {/* Title */}
        <h3 className="font-display font-normal mb-3" style={{ fontSize: '1.125rem', lineHeight: 1.24, letterSpacing: '-0.016em', color: '#F5F3EE' }}>
          {title}
        </h3>

        {/* Body */}
        <p className="font-body font-light flex-1" style={{ fontSize: '0.875rem', lineHeight: 1.82, color: 'rgba(245,243,238,0.50)' }}>
          {body}
        </p>

        {/* Footer tag */}
        <div className="mt-5 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <span className="vcg-label" style={{ fontSize: '0.5625rem' }}>Capability</span>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function Capabilities() {
  const { ref, inView } = useInView()

  return (
    <section
      id="capabilities"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative section-pad overflow-hidden"
      style={{ background: '#111214' }}
    >
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'rgba(255,255,255,0.06)' }} aria-hidden />

      {/* Ghost section ordinal */}
      <div
        className="absolute top-0 right-0 font-display font-normal select-none pointer-events-none"
        style={{ fontSize: 'clamp(12rem, 22vw, 22rem)', lineHeight: 0.85, letterSpacing: '-0.06em', color: 'rgba(255,255,255,0.020)', paddingRight: 'clamp(1rem, 2vw, 2rem)' }}
        aria-hidden
      >03</div>

      <div className="container-site relative z-10">
        <div className="rule mb-10 md:mb-14" />

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
        >
          <div>
            <p className="vcg-label mb-4">What We Do</p>
            <h2 className="font-display font-normal" style={{ fontSize: 'clamp(2rem, 3.4vw, 3.4rem)', lineHeight: 1.07, letterSpacing: '-0.032em', color: '#F5F3EE', maxWidth: '22ch' }}>
              Enterprise Capability, On Demand
            </h2>
          </div>
          <p className="font-body font-light md:text-right" style={{ fontSize: '1rem', lineHeight: 1.80, maxWidth: '42ch', color: 'rgba(245,243,238,0.48)' }}>
            From individual specialists to full delivery teams —<br className="hidden md:block" />
            assembled with the precision your initiative requires.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
        >
          {CAPABILITIES.map((cap, i) => (
            <TiltCard key={cap.n} {...cap} delay={i} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
