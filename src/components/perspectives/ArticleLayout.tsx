'use client'

import type { ReactNode, CSSProperties } from 'react'
import Link from 'next/link'
import { useContactModal } from '@/context/ContactModalContext'
import type { Perspective } from '@/lib/perspectives'

// ── Typography constants ──────────────────────────────────────

export const articlePros: CSSProperties = {
  fontSize: '1rem',
  lineHeight: 1.84,
  color: 'rgba(17,18,20,0.70)',
  marginTop: '1.25rem',
}

export const articleH2: CSSProperties = {
  fontWeight: 500,
  fontSize: '1.125rem',
  letterSpacing: '-0.012em',
  color: '#111214',
  marginTop: '2.75rem',
  marginBottom: '0.25rem',
}

export const articlePull: CSSProperties = {
  fontSize: 'clamp(1.05rem, 1.4vw, 1.2rem)',
  lineHeight: 1.6,
  fontStyle: 'italic',
  letterSpacing: '-0.012em',
  color: 'rgba(17,18,20,0.55)',
  borderLeft: '2px solid #C8A96E',
  paddingLeft: '1.25rem',
  margin: '2rem 0',
}

// ── Helper sub-components ─────────────────────────────────────

export function P({ children, style }: { children: ReactNode; style?: CSSProperties }) {
  return (
    <p className="font-body" style={{ ...articlePros, ...style }}>
      {children}
    </p>
  )
}

export function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-body" style={articleH2}>
      {children}
    </h2>
  )
}

export function Pull({ children }: { children: ReactNode }) {
  return (
    <blockquote className="font-display font-normal" style={articlePull}>
      {children}
    </blockquote>
  )
}

export function SectionDiv() {
  return (
    <div style={{ marginTop: '2.5rem', borderTop: '1px solid rgba(17,18,20,0.07)' }} />
  )
}

export function Diagnostic({ title, items }: { title: string; items: string[] }) {
  return (
    <div
      style={{
        marginTop: '2rem',
        marginBottom: '0.5rem',
        padding: '1.5rem 1.75rem',
        background: '#F5F3EE',
        borderRadius: '4px',
        border: '1px solid rgba(17,18,20,0.07)',
      }}
    >
      <p className="font-body" style={{ fontWeight: 500, fontSize: '0.8125rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(17,18,20,0.42)', marginBottom: '1rem' }}>
        {title}
      </p>
      <ul style={{ paddingLeft: '1.25rem', listStyleType: 'disc' }}>
        {items.map((item, i) => (
          <li key={i} className="font-body" style={{ fontSize: '0.9375rem', lineHeight: 1.78, color: 'rgba(17,18,20,0.65)', marginBottom: i < items.length - 1 ? '0.625rem' : 0 }}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

// ── Article CTA ───────────────────────────────────────────────

function ArticleCTA() {
  const { openModal } = useContactModal()
  return (
    <div
      style={{
        marginTop: '3.5rem',
        paddingTop: '2.5rem',
        borderTop: '1px solid rgba(17,18,20,0.08)',
      }}
    >
      <p className="font-body font-light" style={{ fontSize: '0.8125rem', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'rgba(17,18,20,0.36)', marginBottom: '0.875rem' }}>
        Facing an execution challenge?
      </p>
      <button
        onClick={openModal}
        className="btn-dark"
        style={{ marginRight: '1.5rem' }}
      >
        Discuss Your Initiative
      </button>
      <Link
        href="/perspectives"
        className="font-body"
        style={{ fontSize: '0.875rem', color: 'rgba(17,18,20,0.50)', textDecoration: 'none' }}
      >
        ← All Perspectives
      </Link>
    </div>
  )
}

// ── Main layout ───────────────────────────────────────────────

interface ArticleLayoutProps {
  perspective: Perspective
  children: ReactNode
}

export function ArticleLayout({ perspective, children }: ArticleLayoutProps) {
  return (
    <>
      {/* Dark header */}
      <section style={{ background: '#0B0B0D', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div
          className="container-site"
          style={{
            paddingTop: 'clamp(8rem, 14vw, 12rem)',
            paddingBottom: 'clamp(3.5rem, 5vw, 5rem)',
          }}
        >
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8" style={{ opacity: 0.4 }}>
            <Link
              href="/perspectives"
              className="font-body"
              style={{ fontSize: '0.75rem', letterSpacing: '0.10em', textTransform: 'uppercase', color: '#F5F3EE', textDecoration: 'none' }}
            >
              Perspectives
            </Link>
            <span style={{ color: 'rgba(245,243,238,0.4)', fontSize: '0.75rem' }}>·</span>
            <span className="font-mono" style={{ fontSize: '0.75rem', color: 'rgba(245,243,238,0.6)', letterSpacing: '0.05em' }}>
              {perspective.number}
            </span>
          </div>

          <h1
            className="font-display font-normal"
            style={{
              fontSize: 'clamp(2rem, 3.8vw, 3.25rem)',
              lineHeight: 1.08,
              letterSpacing: '-0.028em',
              color: '#F5F3EE',
              maxWidth: '24ch',
              marginBottom: '1.5rem',
            }}
          >
            {perspective.title}
          </h1>

          <p
            className="font-body font-light"
            style={{
              fontSize: 'clamp(0.9375rem, 1.2vw, 1.05rem)',
              lineHeight: 1.72,
              color: 'rgba(245,243,238,0.52)',
              maxWidth: '52ch',
              marginBottom: '2rem',
            }}
          >
            {perspective.deck}
          </p>

          <div className="flex items-center gap-4">
            <span className="font-body font-light" style={{ fontSize: '0.8125rem', color: 'rgba(245,243,238,0.32)', letterSpacing: '0.02em' }}>
              {perspective.date}
            </span>
            <span style={{ color: 'rgba(245,243,238,0.18)', fontSize: '0.75rem' }}>·</span>
            <span className="font-body font-light" style={{ fontSize: '0.8125rem', color: 'rgba(245,243,238,0.32)', letterSpacing: '0.02em' }}>
              {perspective.readingTime}
            </span>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section style={{ background: '#FFFFFF' }}>
        <div
          className="container-site"
          style={{
            paddingTop: 'clamp(3.5rem, 6vw, 5.5rem)',
            paddingBottom: 'clamp(5rem, 8vw, 8rem)',
          }}
        >
          <div style={{ maxWidth: '700px' }}>
            {children}
            <ArticleCTA />
          </div>
        </div>
      </section>
    </>
  )
}
