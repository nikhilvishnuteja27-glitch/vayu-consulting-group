'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, CheckCircle, Mail, Phone, User, MessageSquare, ArrowRight, ChevronDown } from 'lucide-react'
import { trackEvent } from '@/lib/analytics'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

const INQUIRY_TYPES = [
  'Transformation / Critical Initiative',
  'Program Recovery',
  'Project or Delivery Team',
  'Specialized Talent',
  'Other',
]

const inputBase: React.CSSProperties = {
  background: '#1A1D22',
  borderColor: 'rgba(255,255,255,0.10)',
  fontSize: '0.9rem',
  color: '#F5F3EE',
}

function Field({ label, icon: Icon, type = 'text', name, value, onChange, placeholder, required }: {
  label: string; icon: React.ElementType; type?: string; name: string
  value: string; onChange: (v: string) => void; placeholder: string; required?: boolean
}) {
  return (
    <div>
      <label className="vcg-label mb-2" htmlFor={`contact-${name}`}>
        {label}
        {required && <span style={{ color: 'rgba(245,243,238,0.40)', marginLeft: 4 }}>*</span>}
      </label>
      <div className="relative">
        <div className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: 'rgba(245,243,238,0.24)' }}>
          <Icon size={13} strokeWidth={1.5} />
        </div>
        <input
          id={`contact-${name}`}
          type={type}
          name={name}
          value={value}
          required={required}
          onChange={e => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full rounded-[4px] border font-body font-light focus:outline-none transition-colors"
          style={{ ...inputBase, padding: '0.625rem 0.875rem 0.625rem 2.25rem' }}
          onFocus={e => (e.currentTarget.style.borderColor = 'rgba(245,243,238,0.30)')}
          onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.10)')}
        />
      </div>
    </div>
  )
}

function SelectField({ label, name, value, onChange }: {
  label: string; name: string; value: string; onChange: (v: string) => void
}) {
  return (
    <div>
      <label className="vcg-label mb-2" htmlFor={`contact-${name}`}>{label}</label>
      <div className="relative">
        <select
          id={`contact-${name}`}
          name={name}
          value={value}
          onChange={e => onChange(e.target.value)}
          className="w-full rounded-[4px] border font-body font-light focus:outline-none transition-colors appearance-none"
          style={{
            ...inputBase,
            padding: '0.625rem 2.25rem 0.625rem 0.875rem',
            color: value ? '#F5F3EE' : 'rgba(245,243,238,0.34)',
          }}
          onFocus={e => (e.currentTarget.style.borderColor = 'rgba(245,243,238,0.30)')}
          onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.10)')}
        >
          <option value="" style={{ background: '#1A1D22' }}>Select (optional)</option>
          {INQUIRY_TYPES.map(t => (
            <option key={t} value={t} style={{ background: '#1A1D22' }}>{t}</option>
          ))}
        </select>
        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: 'rgba(245,243,238,0.24)' }}>
          <ChevronDown size={12} strokeWidth={1.5} />
        </div>
      </div>
    </div>
  )
}

const EMPTY_FORM = { name: '', email: '', phone: '', inquiryType: '', message: '', website: '' }

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [form, setForm] = useState(EMPTY_FORM)
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const panelRef = useRef<HTMLDivElement>(null)
  const submittingRef = useRef(false)
  const set = (k: keyof typeof form) => (v: string) => setForm(f => ({ ...f, [k]: v }))

  const handleClose = useCallback(() => {
    onClose()
    setTimeout(() => { setForm(EMPTY_FORM); setStatus('idle') }, 350)
  }, [onClose])

  // Focus trap + Escape key
  useEffect(() => {
    if (!isOpen) return
    const timer = setTimeout(() => {
      panelRef.current?.querySelector<HTMLElement>('input, select, button:not([aria-label="Close"])')?.focus()
    }, 60)
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { handleClose(); return }
      if (e.key !== 'Tab') return
      const panel = panelRef.current
      if (!panel) return
      const focusable = Array.from(panel.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([tabindex="-1"]), textarea, select, [tabindex]:not([tabindex="-1"])'
      ))
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => { clearTimeout(timer); document.removeEventListener('keydown', onKeyDown) }
  }, [isOpen, handleClose])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (submittingRef.current) return
    submittingRef.current = true
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        trackEvent('contact_form_submit_success', { form_name: 'contact' })
        setStatus('sent')
      } else {
        setStatus('error')
      }
    } catch { setStatus('error') }
    finally { submittingRef.current = false }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6"
          style={{ background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(12px)' }}
          onClick={e => { if (e.target === e.currentTarget) handleClose() }}
        >
          <motion.div
            ref={panelRef}
            key="panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.36, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-lg rounded-[6px] relative"
            style={{
              background: '#15171B',
              border: '1px solid rgba(255,255,255,0.10)',
              boxShadow: '0 40px 100px rgba(0,0,0,0.60), 0 8px 24px rgba(0,0,0,0.40)',
              maxHeight: '90dvh',
              overflowY: 'auto',
              overflowX: 'hidden',
            }}
          >
            {/* Header */}
            <div className="flex items-start justify-between px-7 pt-7 pb-5" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
              <div>
                <p className="vcg-label mb-2">Client Inquiry</p>
                <h3
                  id="contact-modal-title"
                  className="font-display font-normal"
                  style={{ fontSize: '1.5rem', lineHeight: 1.14, letterSpacing: '-0.022em', color: '#F5F3EE' }}
                >
                  Discuss Your Initiative
                </h3>
                <p className="mt-1.5 font-body font-light" style={{ fontSize: '0.8125rem', color: 'rgba(245,243,238,0.36)' }}>
                  We respond within one business day.
                </p>
                <a
                  href="tel:+13122700009"
                  className="mt-1 inline-block font-body font-light transition-colors duration-200"
                  style={{ fontSize: '0.8125rem', color: 'rgba(245,243,238,0.28)' }}
                  onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(245,243,238,0.65)'}
                  onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(245,243,238,0.28)'}
                >
                  (312) 270-0009
                </a>
              </div>
              <button
                onClick={handleClose}
                className="mt-1 cursor-pointer p-1 rounded transition-colors duration-200"
                style={{ color: 'rgba(245,243,238,0.24)' }}
                aria-label="Close"
                onMouseEnter={e => (e.currentTarget as HTMLButtonElement).style.color = 'rgba(245,243,238,0.65)'}
                onMouseLeave={e => (e.currentTarget as HTMLButtonElement).style.color = 'rgba(245,243,238,0.24)'}
              >
                <X size={17} strokeWidth={1.5} />
              </button>
            </div>

            {/* Success state */}
            {status === 'sent' ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="px-7 py-14 flex flex-col items-center text-center"
              >
                <div className="mb-5" style={{ color: 'rgba(245,243,238,0.60)' }}>
                  <CheckCircle size={38} strokeWidth={1.2} />
                </div>
                <h4 className="font-display font-normal mb-2" style={{ fontSize: '1.25rem', letterSpacing: '-0.018em', color: '#F5F3EE' }}>
                  Message received.
                </h4>
                <p className="font-body font-light" style={{ fontSize: '0.9375rem', maxWidth: '30ch', lineHeight: 1.72, color: 'rgba(245,243,238,0.50)' }}>
                  A member of our team will be in touch shortly.
                </p>
                <button onClick={handleClose} className="mt-8 btn-primary" style={{ padding: '0.5625rem 1.5rem', fontSize: '0.875rem' }}>
                  Close
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="px-7 py-6 space-y-4">
                {/* Honeypot — hidden from real users, filled by bots */}
                <div style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }} aria-hidden="true">
                  <label htmlFor="contact-website">Website</label>
                  <input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" value={form.website} onChange={e => set('website')(e.target.value)} />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Full Name" icon={User} name="name" value={form.name} onChange={set('name')} placeholder="Jane Smith" required />
                  <Field label="Email Address" icon={Mail} type="email" name="email" value={form.email} onChange={set('email')} placeholder="jane@company.com" required />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Phone Number" icon={Phone} type="tel" name="phone" value={form.phone} onChange={set('phone')} placeholder="+1 (555) 000-0000" />
                  <SelectField label="What Can We Help With?" name="inquiryType" value={form.inquiryType} onChange={set('inquiryType')} />
                </div>

                <div>
                  <label className="vcg-label mb-2" htmlFor="contact-message">
                    Message<span style={{ color: 'rgba(245,243,238,0.40)', marginLeft: 4 }}>*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute left-3.5 top-3.5 pointer-events-none" style={{ color: 'rgba(245,243,238,0.24)' }}>
                      <MessageSquare size={13} strokeWidth={1.5} />
                    </div>
                    <textarea
                      id="contact-message"
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      placeholder="Tell us about your initiative — scope, timeline, key challenges…"
                      required
                      rows={4}
                      className="w-full rounded-[4px] border font-body font-light focus:outline-none transition-colors resize-none"
                      style={{ ...inputBase, padding: '0.625rem 0.875rem 0.625rem 2.25rem', lineHeight: 1.68 }}
                      onFocus={e => (e.currentTarget.style.borderColor = 'rgba(245,243,238,0.30)')}
                      onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.10)')}
                    />
                  </div>
                </div>

                {status === 'error' && (
                  <p role="alert" className="font-body font-light" style={{ fontSize: '0.8125rem', color: 'rgba(240,100,100,0.80)' }}>
                    Couldn&apos;t send. Please email us at{' '}
                    <a href="mailto:info@vayuconsultinggroup.com" className="underline">info@vayuconsultinggroup.com</a>
                  </p>
                )}

                <div className="flex items-center justify-between pt-1">
                  <div>
                    <p className="font-body font-light" style={{ fontSize: '0.75rem', color: 'rgba(245,243,238,0.22)' }}>
                      Confidential. No obligation.
                    </p>
                    <p className="font-body font-light" style={{ fontSize: '0.6875rem', color: 'rgba(245,243,238,0.18)', marginTop: '3px' }}>
                      By submitting, you acknowledge our{' '}
                      <a
                        href="/privacy"
                        style={{ color: 'rgba(245,243,238,0.34)', textDecoration: 'underline', textDecorationColor: 'rgba(245,243,238,0.20)' }}
                        onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(245,243,238,0.60)'}
                        onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(245,243,238,0.34)'}
                      >
                        Privacy Policy
                      </a>.
                    </p>
                  </div>
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="btn-primary inline-flex items-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed"
                    style={{ padding: '0.5625rem 1.25rem', fontSize: '0.875rem' }}
                  >
                    {status === 'sending' ? 'Sending…' : <><span>Send Message</span><ArrowRight size={13} strokeWidth={1.5} /></>}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
