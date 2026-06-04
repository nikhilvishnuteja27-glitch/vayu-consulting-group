'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const LINES = [
  { text: 'Every enterprise has a plan.',      delay: 0.0,  italic: false },
  { text: 'Most never close the gap between',  delay: 0.08, italic: false },
  { text: 'ambition and delivery.',            delay: 0.16, italic: true  },
]
const PUNCHLINE = 'That gap is where VCG operates.'

function WordLine({ text, baseDelay, italic, inView }: { text: string; baseDelay: number; italic: boolean; inView: boolean }) {
  return (
    <div
      className="flex flex-wrap"
      style={{
        gap: '0 0.3em',
        fontFamily: 'var(--font-display-var), serif',
        fontStyle: italic ? 'italic' : 'normal',
        fontWeight: 400,
        fontSize: 'clamp(2rem, 4.5vw, 4.2rem)',
        lineHeight: 1.12,
        letterSpacing: '-0.030em',
        color: italic ? 'rgba(245,243,238,0.40)' : 'rgba(245,243,238,0.82)',
      }}
    >
      {text.split(' ').map((word, i) => (
        <span key={i} style={{ display: 'inline-block', overflow: 'hidden', lineHeight: 1.3 }}>
          <motion.span
            style={{ display: 'inline-block' }}
            initial={{ y: '105%', opacity: 0 }}
            animate={inView ? { y: '0%', opacity: 1 } : { y: '105%', opacity: 0 }}
            transition={{ duration: 0.72, delay: baseDelay + i * 0.055, ease: [0.16, 1, 0.3, 1] }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </div>
  )
}

export function Statement() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.35 })
  const punchlineWords = PUNCHLINE.split(' ')
  const punchlineDelay = 0.28

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{
        background: '#111214',
        padding: 'clamp(5rem, 10vw, 9rem) 0',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      {/* Left amber accent line */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={inView ? { scaleY: 1 } : {}}
        transition={{ duration: 1.1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'absolute',
          left: 'clamp(1.5rem, 5vw, 3rem)',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '2px',
          height: '60%',
          background: 'linear-gradient(to bottom, transparent, rgba(200,169,110,0.55) 30%, rgba(200,169,110,0.55) 70%, transparent)',
          transformOrigin: 'top',
        }}
        aria-hidden
      />

      <div className="container-site">
        <div style={{ maxWidth: '72ch' }}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0 }}
            className="vcg-label mb-10"
          >
            Our Premise
          </motion.p>

          <div className="space-y-1">
            {LINES.map((line, i) => (
              <WordLine key={i} text={line.text} baseDelay={line.delay} italic={line.italic} inView={inView} />
            ))}
          </div>

          {/* Punchline */}
          <div
            className="mt-8 flex flex-wrap"
            style={{
              gap: '0 0.3em',
              fontFamily: 'var(--font-display-var), serif',
              fontWeight: 400,
              fontSize: 'clamp(2rem, 4.5vw, 4.2rem)',
              lineHeight: 1.12,
              letterSpacing: '-0.030em',
              color: '#F5F3EE',
            }}
          >
            {punchlineWords.map((word, i) => (
              <span key={i} style={{ display: 'inline-block', overflow: 'hidden', lineHeight: 1.3 }}>
                <motion.span
                  style={{
                    display: 'inline-block',
                    color: word === 'gap' ? '#C8A96E' : undefined,
                  }}
                  initial={{ y: '105%', opacity: 0 }}
                  animate={inView ? { y: '0%', opacity: 1 } : { y: '105%', opacity: 0 }}
                  transition={{ duration: 0.80, delay: punchlineDelay + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </div>

          {/* Attribution */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="mt-10 flex items-center gap-3"
          >
            <div style={{ width: '24px', height: '1px', background: 'rgba(245,243,238,0.16)' }} />
            <span className="font-body font-light" style={{ fontSize: '0.8125rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(245,243,238,0.26)' }}>
              Vayu Consulting Group
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
