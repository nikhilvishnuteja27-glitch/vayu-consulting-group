import type { Metadata } from 'next'
import Link from 'next/link'
import { PERSPECTIVES } from '@/lib/perspectives'

export const metadata: Metadata = {
  title: 'Perspectives — Vayu Consulting Group',
  description: 'Original thinking from VCG on execution, transformation governance, and the operating systems required to move critical initiatives from decision to delivered outcome.',
  alternates: {
    canonical: 'https://www.vayuconsultinggroup.com/perspectives',
  },
  openGraph: {
    title: 'Perspectives — Vayu Consulting Group',
    description: 'Original thinking from VCG on execution, transformation governance, and the operating systems required to move critical initiatives from decision to delivered outcome.',
    url: 'https://www.vayuconsultinggroup.com/perspectives',
  },
}

export default function PerspectivesPage() {
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
          <p className="vcg-label" style={{ marginBottom: '1.25rem' }}>Perspectives</p>
          <h1
            className="font-display font-normal"
            style={{
              fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
              lineHeight: 1.06,
              letterSpacing: '-0.030em',
              color: '#F5F3EE',
              marginBottom: '1.25rem',
              maxWidth: '22ch',
            }}
          >
            Original thinking on execution.
          </h1>
          <p
            className="font-body font-light"
            style={{
              fontSize: '1rem',
              lineHeight: 1.78,
              color: 'rgba(245,243,238,0.44)',
              maxWidth: '54ch',
            }}
          >
            VCG&rsquo;s analytical perspective on execution, transformation governance, and the operating systems required to move critical initiatives from decision to delivered outcome.
          </p>
        </div>
      </section>

      {/* Article list */}
      <section style={{ background: '#FFFFFF' }}>
        <div
          className="container-site"
          style={{
            paddingTop: 'clamp(3.5rem, 6vw, 5.5rem)',
            paddingBottom: 'clamp(5rem, 9vw, 8rem)',
          }}
        >
          <div style={{ maxWidth: '820px' }}>
            {PERSPECTIVES.map((p, i) => (
              <Link
                key={p.slug}
                href={p.href}
                style={{ textDecoration: 'none', display: 'block' }}
              >
                <article
                  style={{
                    paddingTop: '2.25rem',
                    paddingBottom: '2.25rem',
                    borderTop: '1px solid rgba(17,18,20,0.08)',
                    borderBottom: i === PERSPECTIVES.length - 1 ? '1px solid rgba(17,18,20,0.08)' : 'none',
                    cursor: 'pointer',
                    transition: 'opacity 0.18s',
                  }}
                  className="perspective-entry"
                >
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'auto 1fr',
                      gap: '0 2.5rem',
                      alignItems: 'start',
                    }}
                  >
                    {/* Number */}
                    <span
                      className="font-mono"
                      style={{
                        fontSize: '0.75rem',
                        letterSpacing: '0.06em',
                        color: 'rgba(17,18,20,0.28)',
                        paddingTop: '0.25rem',
                        userSelect: 'none',
                      }}
                    >
                      {p.number}
                    </span>

                    {/* Content */}
                    <div>
                      <h2
                        className="font-display font-normal"
                        style={{
                          fontSize: 'clamp(1.2rem, 2vw, 1.6rem)',
                          lineHeight: 1.18,
                          letterSpacing: '-0.020em',
                          color: '#111214',
                          marginBottom: '0.75rem',
                          maxWidth: '52ch',
                        }}
                      >
                        {p.title}
                      </h2>
                      <p
                        className="font-body font-light"
                        style={{
                          fontSize: '0.9375rem',
                          lineHeight: 1.76,
                          color: 'rgba(17,18,20,0.52)',
                          maxWidth: '60ch',
                          marginBottom: '1.25rem',
                        }}
                      >
                        {p.deck}
                      </p>
                      <div className="flex items-center gap-3">
                        <span
                          className="font-body font-light"
                          style={{ fontSize: '0.8125rem', color: 'rgba(17,18,20,0.32)', letterSpacing: '0.02em' }}
                        >
                          {p.date}
                        </span>
                        <span style={{ color: 'rgba(17,18,20,0.18)', fontSize: '0.75rem' }}>·</span>
                        <span
                          className="font-body font-light"
                          style={{ fontSize: '0.8125rem', color: 'rgba(17,18,20,0.32)', letterSpacing: '0.02em' }}
                        >
                          {p.readingTime}
                        </span>
                        <span style={{ color: 'rgba(17,18,20,0.18)', fontSize: '0.75rem' }}>·</span>
                        <span
                          className="font-body"
                          style={{ fontSize: '0.8125rem', color: '#C8A96E', letterSpacing: '0.02em' }}
                        >
                          Read →
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
