'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Menu } from 'lucide-react'
import { cn } from '@/lib/utils'
import { VCGMark } from '@/components/layout/VCGMark'
import { ContactModal } from '@/components/layout/ContactModal'

const NAV_LINKS = [
  { label: 'Home',       href: '#home',         sectionId: 'home'         },
  { label: 'What We Do', href: '#capabilities', sectionId: 'capabilities' },
  { label: 'Who We Are', href: '#positioning',  sectionId: 'positioning'  },
  { label: 'Industries', href: '#trust',        sectionId: 'trust'        },
]

function scrollTo(href: string) {
  if (href === '#home') { window.scrollTo({ top: 0, behavior: 'smooth' }); return }
  const el = document.getElementById(href.replace('#', ''))
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function Navigation() {
  const [scrolled,       setScrolled]       = useState(false)
  const [mobileOpen,     setMobileOpen]     = useState(false)
  const [contactOpen,    setContactOpen]    = useState(false)
  const [activeSection,  setActiveSection]  = useState('home')

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    handler()
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    const sectionIds = NAV_LINKS.map(l => l.sectionId)
    const observers: IntersectionObserver[] = []
    sectionIds.forEach(id => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { threshold: 0.35 }
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

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-400',
          scrolled ? 'glass-nav' : 'bg-transparent'
        )}
      >
        <div className="container-site">
          <div className="flex items-center justify-between h-[68px] md:h-[76px]">

            {/* Blade mark + wordmark */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="cursor-pointer flex items-center gap-3"
              aria-label="VCG — Vayu Consulting Group — Home"
            >
              <VCGMark size={28} variant="light" />
              <span
                className="font-body font-normal hidden sm:block"
                style={{ fontSize: '0.6875rem', letterSpacing: '0.20em', textTransform: 'uppercase', color: 'rgba(245,243,238,0.40)' }}
              >
                VCG
              </span>
            </button>

            {/* Desktop links */}
            <motion.div
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06, delayChildren: 0.30 } } }}
              initial="hidden"
              animate="visible"
              className="hidden md:flex items-center gap-10"
            >
              {NAV_LINKS.map(link => (
                <motion.button
                  key={link.href}
                  variants={{
                    hidden:  { opacity: 0, y: -5 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
                  }}
                  onClick={() => scrollTo(link.href)}
                  className={cn('nav-link', activeSection === link.sectionId && 'nav-link-active')}
                >
                  {link.label}
                </motion.button>
              ))}
            </motion.div>

            {/* CTA + hamburger */}
            <div className="flex items-center gap-4">
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                onClick={() => setContactOpen(true)}
                className="hidden md:inline-flex btn-primary"
                style={{ padding: '0.5rem 1.4rem', fontSize: '0.8125rem' }}
              >
                Contact Us
              </motion.button>

              <button
                onClick={() => setMobileOpen(true)}
                className="md:hidden cursor-pointer p-1"
                style={{ color: 'rgba(245,243,238,0.45)' }}
                aria-label="Open menu"
              >
                <Menu size={20} strokeWidth={1.5} />
              </button>
            </div>

          </div>
        </div>
      </motion.nav>

      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-50 flex flex-col"
            style={{ background: '#0B0B0D' }}
          >
            <div className="container-site" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
              <div className="flex items-center justify-between h-[68px]">
                <VCGMark size={24} variant="light" />
                <button
                  onClick={() => setMobileOpen(false)}
                  className="cursor-pointer p-1"
                  style={{ color: 'rgba(245,243,238,0.38)' }}
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
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.40, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => { scrollTo(link.href); setMobileOpen(false) }}
                  className="text-left py-5 border-b cursor-pointer transition-colors duration-200"
                  style={{
                    borderColor: 'rgba(255,255,255,0.07)',
                    fontSize: 'clamp(1.75rem, 7vw, 2.5rem)',
                    letterSpacing: '-0.025em',
                    lineHeight: 1.15,
                    fontFamily: 'var(--font-display-var), serif',
                    fontWeight: 400,
                    color: activeSection === link.sectionId ? '#F5F3EE' : 'rgba(245,243,238,0.35)',
                  }}
                  onMouseEnter={e => (e.currentTarget as HTMLButtonElement).style.color = '#F5F3EE'}
                  onMouseLeave={e => (e.currentTarget as HTMLButtonElement).style.color = activeSection === link.sectionId ? '#F5F3EE' : 'rgba(245,243,238,0.35)'}
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.32, duration: 0.40 }}
                onClick={() => { setMobileOpen(false); setTimeout(() => setContactOpen(true), 300) }}
                className="mt-8 self-start btn-primary"
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
