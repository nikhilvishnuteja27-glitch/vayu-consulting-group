'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { EIFrameworkDiagram } from '@/components/ei/EIFrameworkDiagram'

const EASE = [0.16, 1, 0.3, 1] as const

export function EICenterpiece() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section
      ref={ref}
      id="ei-centerpiece"
      style={{ background: '#0B0B0D', borderTop: '1px solid rgba(255,255,255,0.05)' }}
    >
      {/* Specular hairline */}
      <div
        className="absolute left-0 right-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg,transparent,rgba(255,255,255,0.07) 40%,rgba(255,255,255,0.10) 50%,rgba(255,255,255,0.07) 60%,transparent)' }}
        aria-hidden
      />

      <div className="container-site" style={{ paddingTop: 'clamp(4.5rem,8vw,7.5rem)', paddingBottom: 'clamp(4.5rem,8vw,7.5rem)' }}>

        <div className="grid grid-cols-1 lg:grid-cols-[5fr_6fr] gap-12 lg:gap-20 items-start">

          {/* Left — label + definition */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.70, ease: EASE }}
            >
              <p className="vcg-label mb-6">Execution Intelligence</p>
              <h2
                className="font-display font-normal"
                style={{ fontSize: 'clamp(1.7rem, 2.8vw, 2.8rem)', lineHeight: 1.10, letterSpacing: '-0.028em', color: '#F5F3EE', maxWidth: '22ch', marginBottom: '1.5rem' }}
              >
                The structural conditions for reliable execution.
              </h2>
              <p
                className="font-body font-light"
                style={{ fontSize: '0.9375rem', lineHeight: 1.82, color: 'rgba(245,243,238,0.42)', maxWidth: '44ch', marginBottom: '2rem' }}
              >
                Execution Intelligence is the discipline of establishing and maintaining the structural conditions — ownership, decision architecture, visibility, dependency control, and outcome alignment — that determine whether an enterprise initiative delivers what it was designed to achieve.
              </p>

              <Link
                href="/execution-intelligence"
                className="inline-flex items-center gap-2 font-body font-normal transition-all duration-200 group"
                style={{ fontSize: '0.875rem', color: '#C8A96E', textDecoration: 'none', letterSpacing: '0.01em' }}
                onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.opacity = '0.75'}
                onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.opacity = '1'}
              >
                Explore Execution Intelligence
                <ArrowRight size={13} strokeWidth={1.5} className="transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

          {/* Right — framework diagram */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.70, delay: 0.14, ease: EASE }}
          >
            <EIFrameworkDiagram size="homepage" dark={true} />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
