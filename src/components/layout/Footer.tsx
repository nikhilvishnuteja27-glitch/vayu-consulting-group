'use client'

import { VCGMark } from '@/components/layout/VCGMark'

const NAV_SECTIONS = [
  {
    label: 'Company',
    links: [
      { label: 'What We Do',  href: '#what-we-deliver' },
      { label: 'The Model',   href: '#model'           },
      { label: 'Why VCG',     href: '#why-vcg'         },
      { label: 'Perspectives', href: '#insights'       },
    ],
  },
  {
    label: 'Engage',
    links: [
      { label: 'Discuss Your Initiative', href: '#cta'                                        },
      { label: 'info@vayuconsultinggroup.com', href: 'mailto:info@vayuconsultinggroup.com'   },
      { label: '(312) 270-0009',       href: 'tel:+13122700009'                              },
    ],
  },
]

function scrollTo(href: string) {
  if (href.startsWith('#')) {
    const el = document.getElementById(href.replace('#', ''))
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

export function Footer() {
  return (
    <footer style={{ background: '#0B0B0D', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="container-site py-14 md:py-16">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">

          {/* Brand */}
          <div className="col-span-2 md:col-span-2">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-3 cursor-pointer mb-5"
              aria-label="Vayu Consulting Group"
            >
              <VCGMark size={22} variant="light" />
              <span className="font-body font-normal" style={{ fontSize: '0.5625rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(245,243,238,0.26)' }}>
                VCG
              </span>
            </button>
            <p className="font-body font-light" style={{ fontSize: '0.8rem', lineHeight: 1.80, color: 'rgba(245,243,238,0.22)', maxWidth: '32ch' }}>
              Execution Intelligence for organizations that cannot afford failure.
            </p>
            <p className="mt-4 font-body font-light" style={{ fontSize: '0.75rem', lineHeight: 1.72, color: 'rgba(245,243,238,0.16)', maxWidth: '38ch' }}>
              North America operations. Global capability network.
            </p>
          </div>

          {/* Navigation columns */}
          {NAV_SECTIONS.map(section => (
            <div key={section.label}>
              <p className="vcg-label mb-5">{section.label}</p>
              <ul className="space-y-3">
                {section.links.map(link => (
                  <li key={link.label}>
                    {link.href.startsWith('#') ? (
                      <button
                        onClick={() => scrollTo(link.href)}
                        className="font-body font-light transition-colors duration-200 text-left cursor-pointer"
                        style={{ fontSize: '0.875rem', color: 'rgba(245,243,238,0.28)' }}
                        onMouseEnter={e => (e.currentTarget as HTMLButtonElement).style.color = 'rgba(245,243,238,0.62)'}
                        onMouseLeave={e => (e.currentTarget as HTMLButtonElement).style.color = 'rgba(245,243,238,0.28)'}
                      >
                        {link.label}
                      </button>
                    ) : (
                      <a
                        href={link.href}
                        className="font-body font-light transition-colors duration-200"
                        style={{ fontSize: '0.875rem', color: 'rgba(245,243,238,0.28)' }}
                        onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(245,243,238,0.62)'}
                        onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(245,243,238,0.28)'}
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          <p className="font-body font-light" style={{ fontSize: '0.6875rem', letterSpacing: '0.06em', color: 'rgba(245,243,238,0.14)' }}>
            © {new Date().getFullYear()} Vayu Consulting Group. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            {/* LinkedIn */}
            <a
              href="https://linkedin.com/company/vayu-consulting-group"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors duration-200"
              style={{ color: 'rgba(245,243,238,0.18)' }}
              onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(245,243,238,0.45)'}
              onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(245,243,238,0.18)'}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              <span className="font-body font-light" style={{ fontSize: '0.6875rem', letterSpacing: '0.06em' }}>LinkedIn</span>
            </a>

            {/* Join the network — subtle, in footer only */}
            <a
              href="mailto:careers@vayuconsultinggroup.com"
              className="font-body font-light transition-colors duration-200"
              style={{ fontSize: '0.6875rem', letterSpacing: '0.06em', color: 'rgba(245,243,238,0.14)' }}
              onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(245,243,238,0.38)'}
              onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(245,243,238,0.14)'}
            >
              Join the VCG Network
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}
