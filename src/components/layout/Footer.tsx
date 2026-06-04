'use client'

import { VCGMark } from '@/components/layout/VCGMark'

export function Footer() {
  return (
    <footer style={{ background: '#0B0B0D', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="container-site py-14 md:py-16">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5">
              <VCGMark size={24} variant="light" />
              <span className="font-body font-normal" style={{ fontSize: '0.625rem', letterSpacing: '0.20em', textTransform: 'uppercase', color: 'rgba(245,243,238,0.28)' }}>
                VCG
              </span>
            </div>
            <p className="mt-5 font-body font-light" style={{ fontSize: '0.8rem', lineHeight: 1.80, color: 'rgba(245,243,238,0.24)' }}>
              Enterprise capability infrastructure<br />for organizations that demand results.
            </p>
          </div>

          {/* Services */}
          <div>
            <p className="vcg-label mb-5">Services</p>
            <ul className="space-y-3">
              {[
                { label: 'Software Engineering',  href: '#capabilities' },
                { label: 'AI & Machine Learning', href: '#ai'           },
                { label: 'Strategic Consulting',  href: '#capabilities' },
                { label: 'Program Leadership',    href: '#capabilities' },
              ].map(item => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={e => { e.preventDefault(); document.getElementById(item.href.replace('#',''))?.scrollIntoView({ behavior: 'smooth', block: 'start' }) }}
                    className="font-body font-light transition-colors duration-200 cursor-pointer"
                    style={{ fontSize: '0.875rem', color: 'rgba(245,243,238,0.30)' }}
                    onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(245,243,238,0.65)'}
                    onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(245,243,238,0.30)'}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="vcg-label mb-5">Company</p>
            <ul className="space-y-3">
              {[
                { label: 'Who We Are',  href: '#positioning' },
                { label: 'How We Work', href: '#execution'   },
                { label: 'Industries',  href: '#trust'       },
                { label: 'Careers',     href: 'mailto:careers@vayuconsultinggroup.com' },
              ].map(item => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={item.href.startsWith('#') ? (e => { e.preventDefault(); document.getElementById(item.href.replace('#',''))?.scrollIntoView({ behavior: 'smooth', block: 'start' }) }) : undefined}
                    className="font-body font-light transition-colors duration-200 cursor-pointer"
                    style={{ fontSize: '0.875rem', color: 'rgba(245,243,238,0.30)' }}
                    onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(245,243,238,0.65)'}
                    onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(245,243,238,0.30)'}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Engage */}
          <div>
            <p className="vcg-label mb-5">Engage</p>
            <ul className="space-y-3">
              <li>
                <a
                  href="#cta"
                  onClick={e => { e.preventDefault(); document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth', block: 'start' }) }}
                  className="font-body font-light transition-colors duration-200 cursor-pointer"
                  style={{ fontSize: '0.875rem', color: 'rgba(245,243,238,0.45)' }}
                  onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(245,243,238,0.80)'}
                  onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(245,243,238,0.45)'}
                >
                  Begin a Conversation
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@vayuconsultinggroup.com"
                  className="font-body font-light transition-colors duration-200"
                  style={{ fontSize: '0.875rem', color: 'rgba(245,243,238,0.28)' }}
                  onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(245,243,238,0.58)'}
                  onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(245,243,238,0.28)'}
                >
                  info@vayuconsultinggroup.com
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/company/vayu-consulting-group"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors duration-200"
                  style={{ color: 'rgba(245,243,238,0.24)' }}
                  onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(245,243,238,0.55)'}
                  onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(245,243,238,0.24)'}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  <span className="font-body font-light" style={{ fontSize: '0.875rem' }}>LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <p className="font-body" style={{ fontSize: '0.6875rem', letterSpacing: '0.06em', color: 'rgba(245,243,238,0.16)' }}>
            © {new Date().getFullYear()} Vayu Consulting Group. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="mailto:info@vayuconsultinggroup.com" className="font-body transition-colors duration-200" style={{ fontSize: '0.6875rem', letterSpacing: '0.06em', color: 'rgba(245,243,238,0.16)' }}
              onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(245,243,238,0.40)'}
              onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(245,243,238,0.16)'}
            >
              info@vayuconsultinggroup.com
            </a>
            <a href="#" className="font-body transition-colors duration-200" style={{ fontSize: '0.6875rem', letterSpacing: '0.06em', color: 'rgba(245,243,238,0.16)' }}
              onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(245,243,238,0.40)'}
              onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(245,243,238,0.16)'}
            >
              Privacy
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}
