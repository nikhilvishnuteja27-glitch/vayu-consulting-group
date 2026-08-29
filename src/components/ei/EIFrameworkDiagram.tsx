'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1] as const

interface EIFrameworkDiagramProps {
  size?: 'homepage' | 'full'
  dark?: boolean
}

export function EIFrameworkDiagram({ size = 'full', dark = true }: EIFrameworkDiagramProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.20 })

  const isHomepage = size === 'homepage'
  const borderColor = dark ? 'rgba(255,255,255,0.09)' : 'rgba(17,18,20,0.09)'
  const borderStrong = dark ? 'rgba(255,255,255,0.14)' : 'rgba(17,18,20,0.14)'
  const numColor = dark ? 'rgba(200,169,110,0.55)' : 'rgba(154,114,48,0.55)'
  const labelColor = dark ? '#C8A96E' : '#9A7230'
  const dimTitleColor = dark ? '#F5F3EE' : '#111214'
  const dimBodyColor = dark ? 'rgba(245,243,238,0.45)' : 'rgba(17,18,20,0.50)'
  const cellBg = dark ? 'rgba(255,255,255,0.025)' : 'rgba(17,18,20,0.025)'
  const cellBgHover = dark ? 'rgba(255,255,255,0.045)' : 'rgba(17,18,20,0.04)'
  const evBg = dark ? 'rgba(200,169,110,0.06)' : 'rgba(200,169,110,0.07)'
  const evBorder = 'rgba(200,169,110,0.22)'

  const monoSz = isHomepage ? '0.4375rem' : '0.5rem'
  const titleSz = isHomepage ? '0.75rem' : '0.9375rem'
  const bodySz = isHomepage ? '0.6875rem' : '0.8125rem'

  const DIMENSIONS = [
    { n: 'I',   label: 'Accountability',      body: 'Unambiguous ownership of each initiative component — not responsibility matrices, but a single named person accountable for every outcome.' },
    { n: 'II',  label: 'Decision Architecture', body: 'Pre-established frameworks that determine which decisions require escalation, which require consultation, and which are permanently delegated.' },
    { n: 'IV',  label: 'Dependency Ownership', body: 'Explicit identification and active management of cross-functional and external dependencies as primary execution variables, not secondary concerns.' },
    { n: 'V',   label: 'Outcome Discipline',   body: 'Progress measured against original intended outcomes — not against revised targets that have silently absorbed scope, time, or budget changes.' },
  ]

  return (
    <div ref={ref}>
      {/* Executive Visibility — observation layer */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.60, delay: 0.05, ease: EASE }}
        style={{
          background: evBg,
          border: `1px solid ${evBorder}`,
          borderRadius: '3px 3px 0 0',
          padding: isHomepage ? '0.875rem 1.25rem' : '1.125rem 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          marginBottom: 0,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span style={{ fontFamily: 'var(--font-mono-var)', fontSize: monoSz, color: labelColor, letterSpacing: '0.08em', fontWeight: 400 }}>III</span>
          <span style={{ fontFamily: 'var(--font-body-var)', fontSize: titleSz, fontWeight: 500, color: labelColor, letterSpacing: '-0.005em' }}>Executive Visibility</span>
        </div>
        <span
          style={{
            fontFamily: 'var(--font-mono-var)',
            fontSize: isHomepage ? '0.375rem' : '0.4375rem',
            letterSpacing: '0.16em',
            textTransform: 'uppercase' as const,
            color: labelColor,
            opacity: 0.65,
          }}
        >
          Observation Layer
        </span>
      </motion.div>

      {/* 2×2 grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '1px',
          background: borderColor,
          border: `1px solid ${borderColor}`,
          borderTop: 'none',
          borderRadius: '0 0 3px 3px',
          overflow: 'hidden',
        }}
      >
        {DIMENSIONS.map((dim, i) => (
          <motion.div
            key={dim.n}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.55, delay: 0.15 + i * 0.08, ease: EASE }}
            style={{
              background: cellBg,
              padding: isHomepage ? '1rem 1.125rem' : '1.375rem 1.5rem',
              borderTop: i >= 2 ? `1px solid ${borderColor}` : 'none',
              transition: 'background 0.18s',
              cursor: 'default',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = cellBgHover }}
            onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = cellBg }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <span style={{ fontFamily: 'var(--font-mono-var)', fontSize: monoSz, color: numColor, letterSpacing: '0.08em', fontWeight: 400 }}>{dim.n}</span>
              <span style={{ fontFamily: 'var(--font-body-var)', fontSize: isHomepage ? '0.6875rem' : '0.8125rem', fontWeight: 500, color: dimTitleColor, letterSpacing: '-0.005em', lineHeight: 1.2 }}>
                {dim.label}
              </span>
            </div>
            {!isHomepage && (
              <p style={{ fontFamily: 'var(--font-body-var)', fontSize: bodySz, fontWeight: 300, color: dimBodyColor, lineHeight: 1.70, margin: 0 }}>
                {dim.body}
              </p>
            )}
          </motion.div>
        ))}
      </div>

      {/* Connector note */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.55 }}
        style={{
          fontFamily: 'var(--font-body-var)',
          fontSize: isHomepage ? '0.625rem' : '0.6875rem',
          fontWeight: 300,
          color: dark ? 'rgba(245,243,238,0.25)' : 'rgba(17,18,20,0.30)',
          lineHeight: 1.65,
          marginTop: isHomepage ? '0.75rem' : '1rem',
        }}
      >
        {isHomepage
          ? 'Executive Visibility observes all four dimensions simultaneously — the mechanism by which leadership maintains accurate awareness of initiative state.'
          : 'The five dimensions operate simultaneously, not sequentially. Executive Visibility (III) is the observation layer — it does not add structure, it reveals whether structure exists.'}
      </motion.p>
    </div>
  )
}
