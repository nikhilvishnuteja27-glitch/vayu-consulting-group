'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Menu } from 'lucide-react'
import { cn } from '@/lib/utils'
import { VCGMark } from '@/components/layout/VCGMark'
import { useContactModal } from '@/context/ContactModalContext'

const NAV_LINKS = [
  { label: 'What We Do',   href: '#what-we-deliver', sectionId: 'what-we-deliver' },
  { label: 'How We Work',  href: '#model',           sectionId: 'model'           },
  { label: 'Perspectives', href: '#insights',        sectionId: 'insights'        },
]

function scrollTo(href: string) {
  if (href === '#home') { window.scrollTo({ top: 0, behavior: 'smooth' }); return }
  const el = document.getElementById(href.replace('#', ''))
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function Navigation() {
  const { openModal }                      = useContactModal()
  const [scrollY,       setScrollY]       = useState(0)
  const [mobileOpen,    setMobileOpen]    = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handler = () => setScrollY(window.scrollY)
    handler()
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    const sectionIds = [...NAV_LINKS.map(l => l.sectionId), 'home']
    const observers: IntersectionObserver[] = []
    sectionIds.forEach(id => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { threshold: 0.30 }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach(o => o.disconnect())
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  // Past the hero (≈ 100vh) → light nav; on hero → transparent/dark
  const heroHeight = typeof window !== 'undefined' ? window.innerHeight * 0.82 : 700
  const isLight  = scrollY > heroHeight
  const scrolled = scrollY > 60

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isLight
            ? 'nav-light'
            : scrolled ? 'glass-nav' : 'bg-transparent'
        )}
      >
        <div className="container-site">
          <div className="flex items-center justify-between h-[68px] md:h-[74px]">

            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="cursor-pointer flex items-center gap-3"
              aria-label="Vayu Consulting Group — Execution Intelligence"
            >
              <VCGMark size={26} variant={isLight ? 'dark' : 'light'} />
              <span
                className="font-body font-normal hidden sm:block"
                style={{
                  fontSize: '0.625rem',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: isLight ? 'rgba(17,18,20,0.38)' : 'rgba(245,243,238,0.38)',
                  transition: 'color 0.3s',
                }}
              >
                VCG
              </span>
            </button>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-9">
              {NAV_LINKS.map(link => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={cn(
                    isLight ? 'nav-link-dark' : 'nav-link',
                    isLight
                      ? activeSection === link.sectionId ? 'nav-link-dark-active' : ''
                      : activeSection === link.sectionId ? 'nav-link-active' : ''
                  )}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* CTA + hamburger */}
            <div className="flex items-center gap-4">
              <button
                onClick={openModal}
                className={cn('hidden md:inline-flex', isLight ? 'btn-dark' : 'btn-primary')}
                style={{ padding: '0.5rem 1.35rem', fontSize: '0.8rem' }}
              >
                Contact
              </button>

              <button
                onClick={() => setMobileOpen(true)}
                className="md:hidden cursor-pointer p-1"
                style={{ color: isLight ? 'rgba(17,18,20,0.48)' : 'rgba(245,243,238,0.45)' }}
                aria-label="Open menu"
              >
                <Menu size={20} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.20 }}
            className="fixed inset-0 z-50 flex flex-col"
            style={{ background: '#0B0B0D' }}
          >
            <div className="container-site" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
              <div className="flex items-center justify-between h-[68px]">
                <VCGMark size={24} variant="light" />
                <button
                  onClick={() => setMobileOpen(false)}
                  className="cursor-pointer p-1"
                  style={{ color: 'rgba(245,243,238,0.36)' }}
                  aria-label="Close menu"
                >
                  <X size={20} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            <div className="flex flex-col justify-center flex-1 container-site pb-16">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => { scrollTo(link.href); setMobileOpen(false) }}
                  className="text-left py-5 border-b cursor-pointer transition-colors duration-200"
                  style={{
                    borderColor: 'rgba(255,255,255,0.07)',
                    fontSize: 'clamp(1.6rem, 6.5vw, 2.4rem)',
                    letterSpacing: '-0.022em',
                    lineHeight: 1.15,
                    fontFamily: 'var(--font-display-var), serif',
                    fontWeight: 400,
                    color: activeSection === link.sectionId ? '#F5F3EE' : 'rgba(245,243,238,0.32)',
                  }}
                  onMouseEnter={e => (e.currentTarget as HTMLButtonElement).style.color = '#F5F3EE'}
                  onMouseLeave={e => (e.currentTarget as HTMLButtonElement).style.color = activeSection === link.sectionId ? '#F5F3EE' : 'rgba(245,243,238,0.32)'}
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.28, duration: 0.38 }}
                onClick={() => { setMobileOpen(false); setTimeout(openModal, 280) }}
                className="mt-9 self-start btn-primary"
              >
                Discuss Your Initiative
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
