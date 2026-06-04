'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, CheckCircle, Mail, Phone, User, MessageSquare, ArrowRight } from 'lucide-react'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

function Field({ label, icon: Icon, type = 'text', name, value, onChange, placeholder, required }: {
  label: string; icon: React.ElementType; type?: string; name: string
  value: string; onChange: (v: string) => void; placeholder: string; required?: boolean
}) {
  return (
    <div>
      <label className="vcg-label mb-2">
        {label}
        {required && <span style={{ color: 'rgba(245,243,238,0.40)', marginLeft: 4 }}>*</span>}
      </label>
      <div className="relative">
        <div className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: 'rgba(245,243,238,0.24)' }}>
          <Icon size={13} strokeWidth={1.5} />
        </div>
        <input
          type={type}
          name={name}
          value={value}
          required={required}
          onChange={e => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full rounded-[4px] border font-body font-light focus:outline-none transition-colors"
          style={{
            background: '#1A1D22',
            borderColor: 'rgba(255,255,255,0.10)',
            fontSize: '0.9rem',
            padding: '0.625rem 0.875rem 0.625rem 2.25rem',
            color: '#F5F3EE',
          }}
          onFocus={e => (e.currentTarget.style.borderColor = 'rgba(245,243,238,0.30)')}
          onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.10)')}
        />
      </div>
    </div>
  )
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const set = (k: keyof typeof form) => (v: string) => setForm(f => ({ ...f, [k]: v }))

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      setStatus(res.ok ? 'sent' : 'error')
    } catch { setStatus('error') }
  }

  function handleClose() {
    onClose()
    setTimeout(() => { setForm({ name: '', email: '', phone: '', message: '' }); setStatus('idle') }, 350)
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
            key="panel"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.36, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-lg rounded-[6px] overflow-hidden relative"
            style={{
              background: '#15171B',
              border: '1px solid rgba(255,255,255,0.10)',
              boxShadow: '0 40px 100px rgba(0,0,0,0.60), 0 8px 24px rgba(0,0,0,0.40)',
            }}
          >
            {/* Header */}
            <div className="flex items-start justify-between px-7 pt-7 pb-5" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
              <div>
                <p className="vcg-label mb-2">Get In Touch</p>
                <h3 className="font-display font-normal" style={{ fontSize: '1.5rem', lineHeight: 1.14, letterSpacing: '-0.022em', color: '#F5F3EE' }}>
                  Contact VCG
                </h3>
                <p className="mt-1.5 font-body font-light" style={{ fontSize: '0.8125rem', color: 'rgba(245,243,238,0.36)' }}>
                  We respond within one business day.
                </p>
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
              <form onSubmit={handleSubmit} className="px-7 py-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Full Name"     icon={User}  name="name"  value={form.name}  onChange={set('name')}  placeholder="Jane Smith"        required />
                  <Field label="Email Address" icon={Mail}  type="email" name="email" value={form.email} onChange={set('email')} placeholder="jane@company.com" required />
                </div>
                <Field label="Phone Number" icon={Phone} type="tel" name="phone" value={form.phone} onChange={set('phone')} placeholder="+1 (555) 000-0000" />

                <div>
                  <label className="vcg-label mb-2">
                    Message<span style={{ color: 'rgba(245,243,238,0.40)', marginLeft: 4 }}>*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute left-3.5 top-3.5 pointer-events-none" style={{ color: 'rgba(245,243,238,0.24)' }}>
                      <MessageSquare size={13} strokeWidth={1.5} />
                    </div>
                    <textarea
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      placeholder="Tell us about your initiative — scope, timeline, key challenges…"
                      required
                      rows={4}
                      className="w-full rounded-[4px] border font-body font-light focus:outline-none transition-colors resize-none"
                      style={{
                        background: '#1A1D22',
                        borderColor: 'rgba(255,255,255,0.10)',
                        fontSize: '0.9rem',
                        padding: '0.625rem 0.875rem 0.625rem 2.25rem',
                        lineHeight: 1.68,
                        color: '#F5F3EE',
                      }}
                      onFocus={e => (e.currentTarget.style.borderColor = 'rgba(245,243,238,0.30)')}
                      onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.10)')}
                    />
                  </div>
                </div>

                {status === 'error' && (
                  <p className="font-body font-light" style={{ fontSize: '0.8125rem', color: 'rgba(240,100,100,0.80)' }}>
                    Couldn&apos;t send. Please email us at{' '}
                    <a href="mailto:info@vayuconsultinggroup.com" className="underline">info@vayuconsultinggroup.com</a>
                  </p>
                )}

                <div className="flex items-center justify-between pt-1">
                  <p className="font-body font-light" style={{ fontSize: '0.75rem', color: 'rgba(245,243,238,0.22)' }}>
                    Confidential. No obligation.
                  </p>
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
