'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, ArrowRight } from 'lucide-react'
import { trackEvent } from '@/lib/analytics'

const inputStyle: React.CSSProperties = {
  width: '100%',
  background: '#FFFFFF',
  border: '1px solid rgba(17,18,20,0.12)',
  borderRadius: '4px',
  fontSize: '0.9rem',
  padding: '0.625rem 0.875rem',
  color: '#111214',
  fontFamily: 'var(--font-body-var), sans-serif',
  fontWeight: 300,
  outline: 'none',
  transition: 'border-color 0.18s',
}

const labelStyle: React.CSSProperties = {
  fontFamily: 'var(--font-body-var), sans-serif',
  fontSize: '0.625rem',
  fontWeight: 500,
  letterSpacing: '0.18em',
  textTransform: 'uppercase' as const,
  color: 'rgba(17,18,20,0.40)',
  display: 'block',
  marginBottom: '0.5rem',
}

function F({ label, htmlFor, children }: { label: string; htmlFor?: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={htmlFor} style={labelStyle}>{label}</label>
      {children}
    </div>
  )
}

function Input({ id, type = 'text', value, onChange, placeholder, required, autoComplete }: {
  id?: string; type?: string; value: string; onChange: (v: string) => void
  placeholder?: string; required?: boolean; autoComplete?: string
}) {
  return (
    <input
      id={id}
      type={type}
      value={value}
      required={required}
      autoComplete={autoComplete}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      style={inputStyle}
      onFocus={e => (e.currentTarget.style.borderColor = 'rgba(17,18,20,0.32)')}
      onBlur={e => (e.currentTarget.style.borderColor = 'rgba(17,18,20,0.12)')}
    />
  )
}

function Select({ id, value, onChange, children, required }: {
  id?: string; value: string; onChange: (v: string) => void
  children: React.ReactNode; required?: boolean
}) {
  return (
    <select
      id={id}
      value={value}
      required={required}
      onChange={e => onChange(e.target.value)}
      style={{ ...inputStyle, appearance: 'none' as const, backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='rgba(17,18,20,0.36)' stroke-width='1.5'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.875rem center', paddingRight: '2.25rem' }}
      onFocus={e => (e.currentTarget.style.borderColor = 'rgba(17,18,20,0.32)')}
      onBlur={e => (e.currentTarget.style.borderColor = 'rgba(17,18,20,0.12)')}
    >
      {children}
    </select>
  )
}

const EMPTY = {
  name: '', email: '', phone: '', location: '',
  primaryRole: '', coreSkills: '', yearsExperience: '',
  linkedIn: '', engagementPreference: '', availability: '',
  website: '', // honeypot
}

export function TalentForm() {
  const [form, setForm] = useState(EMPTY)
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const submittingRef = useRef(false)
  const set = (k: keyof typeof form) => (v: string) => setForm(f => ({ ...f, [k]: v }))

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (submittingRef.current) return
    submittingRef.current = true
    setStatus('sending')
    try {
      const res = await fetch('/api/careers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        trackEvent('talent_form_submit_success', { form_name: 'talent' })
        setStatus('sent')
      } else {
        setStatus('error')
      }
    } catch { setStatus('error') }
    finally { submittingRef.current = false }
  }

  return (
    <AnimatePresence mode="wait">
      {status === 'sent' ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="py-16 flex flex-col items-start"
        >
          <div className="mb-5" style={{ color: 'rgba(17,18,20,0.30)' }}>
            <CheckCircle size={36} strokeWidth={1.2} />
          </div>
          <h3 className="font-display font-normal mb-3" style={{ fontSize: '1.5rem', letterSpacing: '-0.018em', color: '#111214' }}>
            Profile received.
          </h3>
          <p className="font-body font-light" style={{ fontSize: '0.9375rem', maxWidth: '42ch', lineHeight: 1.78, color: 'rgba(17,18,20,0.52)' }}>
            Thank you for your interest in the VCG professional network. We review all submissions and will be in touch if there is a relevant engagement match.
          </p>
          <p className="font-body font-light mt-4" style={{ fontSize: '0.875rem', color: 'rgba(17,18,20,0.36)', lineHeight: 1.72 }}>
            If you would like to share a resume, please send it to{' '}
            <a href="mailto:info@vayuconsultinggroup.com" style={{ color: '#111214', textDecoration: 'underline', textDecorationColor: 'rgba(17,18,20,0.28)' }}>
              info@vayuconsultinggroup.com
            </a>{' '}
            with your name in the subject line.
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={handleSubmit}
          noValidate
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
        >
          {/* Honeypot — hidden from real users */}
          <div style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }} aria-hidden="true">
            <label htmlFor="talent-website">Website</label>
            <input id="talent-website" name="website" type="text" tabIndex={-1} autoComplete="off" value={form.website} onChange={e => set('website')(e.target.value)} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <F label="Full Name *" htmlFor="tf-name">
              <Input id="tf-name" value={form.name} onChange={set('name')} placeholder="Jane Smith" required autoComplete="name" />
            </F>
            <F label="Email Address *" htmlFor="tf-email">
              <Input id="tf-email" type="email" value={form.email} onChange={set('email')} placeholder="jane@email.com" required autoComplete="email" />
            </F>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <F label="Phone Number" htmlFor="tf-phone">
              <Input id="tf-phone" type="tel" value={form.phone} onChange={set('phone')} placeholder="+1 (555) 000-0000" autoComplete="tel" />
            </F>
            <F label="Location" htmlFor="tf-location">
              <Input id="tf-location" value={form.location} onChange={set('location')} placeholder="City, Province / State" autoComplete="address-level2" />
            </F>
          </div>

          <F label="Primary Role / Title *" htmlFor="tf-role">
            <Input id="tf-role" value={form.primaryRole} onChange={set('primaryRole')} placeholder="e.g. Transformation Executive, Program Director, PMO Lead" required />
          </F>

          <F label="Core Skills &amp; Experience *" htmlFor="tf-skills">
            <textarea
              id="tf-skills"
              value={form.coreSkills}
              required
              onChange={e => set('coreSkills')(e.target.value)}
              placeholder="Briefly describe your domain expertise, industries, and the types of initiatives you have led…"
              rows={4}
              style={{ ...inputStyle, lineHeight: 1.72, resize: 'vertical' }}
              onFocus={e => (e.currentTarget.style.borderColor = 'rgba(17,18,20,0.32)')}
              onBlur={e => (e.currentTarget.style.borderColor = 'rgba(17,18,20,0.12)')}
            />
          </F>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <F label="Years of Senior Experience *" htmlFor="tf-years">
              <Select id="tf-years" value={form.yearsExperience} onChange={set('yearsExperience')} required>
                <option value="" disabled>Select</option>
                <option value="5–10 years">5–10 years</option>
                <option value="10–15 years">10–15 years</option>
                <option value="15–20 years">15–20 years</option>
                <option value="20+ years">20+ years</option>
              </Select>
            </F>
            <F label="LinkedIn Profile URL" htmlFor="tf-linkedin">
              <Input id="tf-linkedin" type="url" value={form.linkedIn} onChange={set('linkedIn')} placeholder="https://linkedin.com/in/yourprofile" autoComplete="url" />
            </F>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <F label="Engagement Preference *" htmlFor="tf-engagement">
              <Select id="tf-engagement" value={form.engagementPreference} onChange={set('engagementPreference')} required>
                <option value="" disabled>Select</option>
                <option value="Full-time embedded">Full-time embedded</option>
                <option value="Part-time / fractional">Part-time / fractional</option>
                <option value="Either">Either</option>
              </Select>
            </F>
            <F label="Availability *" htmlFor="tf-availability">
              <Select id="tf-availability" value={form.availability} onChange={set('availability')} required>
                <option value="" disabled>Select</option>
                <option value="Available now">Available now</option>
                <option value="Within 30 days">Within 30 days</option>
                <option value="Within 60–90 days">Within 60–90 days</option>
                <option value="Currently engaged">Currently engaged</option>
              </Select>
            </F>
          </div>

          {/* Resume instruction */}
          <div style={{ padding: '1rem 1.25rem', background: 'rgba(17,18,20,0.04)', borderRadius: '4px', border: '1px solid rgba(17,18,20,0.07)' }}>
            <p className="font-body font-light" style={{ fontSize: '0.8125rem', lineHeight: 1.72, color: 'rgba(17,18,20,0.50)' }}>
              <strong style={{ fontWeight: 500, color: '#111214' }}>Resume / CV:</strong>{' '}
              After submitting this form, please email your resume to{' '}
              <a href="mailto:info@vayuconsultinggroup.com" style={{ color: '#111214', textDecoration: 'underline', textDecorationColor: 'rgba(17,18,20,0.28)' }}>
                info@vayuconsultinggroup.com
              </a>{' '}
              — include your name in the subject line.
            </p>
          </div>

          {status === 'error' && (
            <p role="alert" className="font-body font-light" style={{ fontSize: '0.8125rem', color: 'rgba(180,40,40,0.85)' }}>
              Submission failed. Please email us directly at{' '}
              <a href="mailto:info@vayuconsultinggroup.com" style={{ textDecoration: 'underline' }}>info@vayuconsultinggroup.com</a>.
            </p>
          )}

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2" style={{ borderTop: '1px solid rgba(17,18,20,0.07)' }}>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="btn-dark inline-flex items-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed"
              style={{ padding: '0.625rem 1.5rem', fontSize: '0.875rem' }}
            >
              {status === 'sending' ? 'Submitting…' : <><span>Submit Profile</span><ArrowRight size={13} strokeWidth={1.5} /></>}
            </button>
            <p className="font-body font-light" style={{ fontSize: '0.75rem', color: 'rgba(17,18,20,0.32)' }}>
              By submitting, you acknowledge our{' '}
              <a href="/privacy" style={{ color: 'rgba(17,18,20,0.52)', textDecoration: 'underline' }}>Privacy Policy</a>.
            </p>
          </div>
        </motion.form>
      )}
    </AnimatePresence>
  )
}
