import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Page Not Found — Vayu Consulting Group',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <>
      <section style={{ background: '#0B0B0D', borderBottom: '1px solid rgba(255,255,255,0.06)', minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        <div
          className="container-site"
          style={{
            paddingTop: 'clamp(8rem, 14vw, 12rem)',
            paddingBottom: 'clamp(4rem, 7vw, 7rem)',
          }}
        >
          <p
            className="font-mono"
            style={{ fontSize: '0.5625rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(245,243,238,0.24)', marginBottom: '1.5rem' }}
          >
            404
          </p>
          <h1
            className="font-display font-normal"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              lineHeight: 1.06,
              letterSpacing: '-0.030em',
              color: '#F5F3EE',
              marginBottom: '1.25rem',
              maxWidth: '22ch',
            }}
          >
            Page not found.
          </h1>
          <p
            className="font-body font-light"
            style={{ fontSize: '1rem', lineHeight: 1.78, color: 'rgba(245,243,238,0.40)', maxWidth: '44ch', marginBottom: '2.5rem' }}
          >
            The page you are looking for does not exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Link href="/" className="btn-primary" style={{ padding: '0.625rem 1.5rem', fontSize: '0.875rem' }}>
              Return to Homepage
            </Link>
            <Link
              href="/what-we-do"
              className="font-body font-light transition-colors duration-200"
              style={{ fontSize: '0.875rem', color: 'rgba(245,243,238,0.34)', paddingTop: '0.625rem', textDecoration: 'underline', textDecorationColor: 'rgba(245,243,238,0.16)' }}
              onMouseEnter={undefined}
            >
              What We Do
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
