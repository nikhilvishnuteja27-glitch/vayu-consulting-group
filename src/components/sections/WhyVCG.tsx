'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useContactModal } from '@/context/ContactModalContext'

const PRINCIPLES = [
  {
    claim: 'We own delivery.',
    evidence: 'Every engagement begins with a named accountability structure before work begins — not assigned when something goes wrong. Ownership is defined, documented, and enforced.',
  },
  {
    claim: 'We operate embedded.',
    evidence: 'Our operators work inside your environment — in your tools, alongside your teams, within your governance structure. Not from a presentation room. Not in a weekly call.',
  },
  {
    claim: 'We stay until outcomes are achieved.',
    evidence: 'Most consulting engagements conclude when the contract ends. Ours conclude when the outcome is achieved. This is not a slogan. It is the structure of every engagement.',
  },
  {
    claim: 'Our operators have delivered.',
    evidence: 'Every VCG professional has led delivery in senior operational roles. They have been accountable for outcomes — not advisors who studied them.',
  },
  {
    claim: 'We measure outcomes. Not activities.',
    evidence: 'Success is defined at the start and verified at the end. Hours logged, decks produced, and meetings attended are not measures of execution intelligence.',
  },
]

const INDUSTRIES = [
  'Healthcare & Life Sciences',
  'Financial Services',
  'Technology & SaaS',
  'Manufacturing',
  'Energy & Utilities',
  'Public Sector',
]

function PrincipleRow({ principle, index, inView }: { principle: (typeof PRINCIPLES)[0]; index: number; inView: boolean }) {
  return (
    <div className="relative">
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.90, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-0 left-0 h-px w-full"
        style={{ background: 'rgba(17,18,20,0.08)', transformOrigin: 'left' }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.52, delay: index * 0.07 + 0.50 }}
        className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-3 md:gap-12 py-6"
      >
        <div className="font-body font-medium" style={{ fontSize: '0.9375rem', color: '#111214', letterSpacing: '-0.005em', lineHeight: 1.3 }}>
          {principle.claim}
        </div>
        <div className="font-body font-light" style={{ fontSize: '0.9375rem', lineHeight: 1.80, color: 'rgba(17,18,20,0.50)' }}>
          {principle.evidence}
        </div>
      </motion.div>
    </div>
  )
}

export function WhyVCG() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.12 })
  const industriesRef = useRef<HTMLDivElement>(null)
  const industriesInView = useInView(industriesRef, { once: true, amount: 0.25 })
  const { openModal } = useContactModal()

  return (
    <section
        ref={ref}
        id="why-vcg"
        className="relative section-pad"
        style={{ background: '#FFFFFF', borderTop: '1px solid rgba(17,18,20,0.07)' }}
      >
        <div className="container-site">

          {/* Strategic tension opener */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16 max-w-3xl"
          >
            <p className="vcg-label-dark mb-6">Why VCG</p>
            <div className="space-y-2">
              <p
                className="font-display font-normal"
                style={{ fontSize: 'clamp(1.3rem, 2.2vw, 2.1rem)', lineHeight: 1.2, letterSpacing: '-0.022em', color: 'rgba(17,18,20,0.35)' }}
              >
                Most consulting engagements end before outcomes are achieved.
              </p>
              <p
                className="font-display font-normal"
                style={{ fontSize: 'clamp(1.3rem, 2.2vw, 2.1rem)', lineHeight: 1.2, letterSpacing: '-0.022em', color: '#111214' }}
              >
                Ours are structured to conclude only when they are.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-16 lg:gap-24">

            {/* Left — principles */}
            <div>
              <div>
                {PRINCIPLES.map((p, i) => (
                  <PrincipleRow key={p.claim} principle={p} index={i} inView={inView} />
                ))}
                <div style={{ borderTop: '1px solid rgba(17,18,20,0.08)' }} />
              </div>

              {/* Conviction statement */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.70, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
                className="mt-12"
              >
                <div className="w-px h-10 mb-5" style={{ background: 'rgba(17,18,20,0.14)' }} />
                <blockquote
                  className="font-display italic mb-7"
                  style={{ fontSize: 'clamp(1rem, 1.7vw, 1.5rem)', lineHeight: 1.52, letterSpacing: '-0.012em', color: 'rgba(17,18,20,0.38)', maxWidth: '44ch' }}
                >
                  &ldquo;Most organizations do not have a strategy problem. They have an execution problem. VCG exists to close that gap.&rdquo;
                </blockquote>
                <button
                  onClick={openModal}
                  className="inline-flex items-center gap-2 font-body font-normal transition-colors duration-200"
                  style={{ fontSize: '0.8125rem', color: 'rgba(17,18,20,0.36)' }}
                  onMouseEnter={e => (e.currentTarget as HTMLButtonElement).style.color = '#111214'}
                  onMouseLeave={e => (e.currentTarget as HTMLButtonElement).style.color = 'rgba(17,18,20,0.36)'}
                >
                  Discuss your initiative →
                </button>
              </motion.div>
            </div>

            {/* Right — industries + geography */}
            <motion.div
              ref={industriesRef}
              initial={{ opacity: 0, y: 14 }}
              animate={industriesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.72, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="vcg-label-dark mb-6">Industries</p>
              <div className="space-y-0.5 mb-8">
                {INDUSTRIES.map((industry, i) => (
                  <motion.div
                    key={industry}
                    initial={{ opacity: 0, x: 8 }}
                    animate={industriesInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.40, delay: 0.18 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-center gap-3 px-4 py-3 rounded-[3px] transition-all duration-200 cursor-default"
                    style={{ background: 'transparent' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = '#F5F3EE' }}
                    onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = 'transparent' }}
                  >
                    <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'rgba(17,18,20,0.22)' }} />
                    <span className="font-body font-light" style={{ fontSize: '0.9375rem', color: 'rgba(17,18,20,0.58)' }}>
                      {industry}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="p-5 rounded-[4px]" style={{ background: '#F5F3EE', border: '1px solid rgba(17,18,20,0.08)' }}>
                <p className="vcg-label-dark mb-3">Geographic Focus</p>
                <p className="font-body font-normal mb-1.5" style={{ fontSize: '0.9375rem', color: '#111214' }}>
                  North America — Primary
                </p>
                <p className="font-body font-light" style={{ fontSize: '0.8125rem', color: 'rgba(17,18,20,0.42)', lineHeight: 1.72 }}>
                  Operator network extends globally. VCG engagements are focused, not dispersed.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
    </section>
  )
}
