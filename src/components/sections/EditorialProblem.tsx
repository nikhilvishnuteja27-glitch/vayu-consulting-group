'use client'

import { useRef, useState, useCallback, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { useContactModal } from '@/context/ContactModalContext'
import { ExecutionFailureDiagram } from '@/components/sections/problem/ExecutionFailureDiagram'

const EASE = [0.16, 1, 0.3, 1] as const

const SIGNALS = [
  {
    signal: 'Ownership fragments.',
    note: 'Three people believe they own the same decision. Nobody does. Nothing gets resolved.',
  },
  {
    signal: 'Status updates replace execution.',
    note: 'Meetings multiply. Decks replace deliverables. Progress becomes a report rather than a result.',
  },
  {
    signal: 'Leadership loses visibility.',
    note: 'No one knows what is actually happening. Status reports are optimistic by habit.',
  },
  {
    signal: 'Deadlines move. Again.',
    note: 'The first slip becomes the second. Each one arrives with an explanation.',
  },
  {
    signal: 'The initiative completes. The problem remains.',
    note: 'The original ambition — the reason it was funded — has been quietly reduced to something achievable.',
  },
]

// ── SignalRow ───────────────────────────────────────────────────────────────
// Each row owns its own IntersectionObserver and notifies the parent
// when it enters or leaves the 40% visibility threshold.
//
// On mobile, each row renders its own compact diagram below the text so the
// relevant visual state is always co-located with the statement being read.

interface SignalRowProps {
  index: number
  item: { signal: string; note: string }
  isLast: boolean
  sectionInView: boolean
  onEnter: (i: number) => void
  onLeave: (i: number) => void
}

function SignalRow({ index, item, isLast, sectionInView, onEnter, onLeave }: SignalRowProps) {
  const ref = useRef<HTMLDivElement>(null)
  // 0.40 threshold: activates while a reasonable portion of the item is visible.
  // Lower than 0.55 reduces empty-Set intervals between adjacent rows on desktop.
  const inView = useInView(ref, { once: false, amount: 0.40 })

  useEffect(() => {
    if (inView) onEnter(index)
    else onLeave(index)
  }, [inView, index, onEnter, onLeave])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -6 }}
      animate={sectionInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.48, delay: 0.14 + index * 0.07, ease: EASE }}
      style={{
        borderTop: '1px solid rgba(17,18,20,0.07)',
        padding: '1.125rem 0',
        paddingLeft: '1.25rem',
        borderLeft: isLast ? '2px solid #C8A96E' : '2px solid rgba(17,18,20,0.08)',
      }}
    >
      <p
        className="font-body font-medium"
        style={{ fontSize: '0.9375rem', color: '#111214', letterSpacing: '-0.005em', marginBottom: '0.25rem', lineHeight: 1.3 }}
      >
        {item.signal}
      </p>
      <p
        className="font-body font-light"
        style={{ fontSize: '0.8125rem', color: 'rgba(17,18,20,0.48)', lineHeight: 1.70 }}
      >
        {item.note}
      </p>

      {/* Mobile — compact diagram co-located with its statement.
          Desktop — hidden here; diagram lives in the sticky right column. */}
      <div className="block lg:hidden" style={{ marginTop: '0.875rem' }}>
        <ExecutionFailureDiagram activeState={index + 1} compact />
      </div>
    </motion.div>
  )
}

// ── EditorialProblem ────────────────────────────────────────────────────────

export function EditorialProblem() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.10 })
  const closingRef = useRef<HTMLDivElement>(null)
  const closingInView = useInView(closingRef, { once: true, amount: 0.5 })
  const { openModal } = useContactModal()

  // ── Desktop state management ──────────────────────────────────────────────
  //
  // activeState: 0 = reference (no signal in view), 1–5 = failure states
  //
  // Algorithm:
  //   • activeItemsRef: Set of signal indices currently meeting the 0.40 threshold
  //   • handleEnter adds to Set → state = highest index + 1
  //   • handleLeave removes from Set:
  //       – Set still has items → state = highest remaining index + 1
  //       – Set is empty       → mark signalsEmpty; do NOT change activeState
  //         (retains the last failure state so gaps between rows don't flash state 0)
  //   • sentinelRef / aboveSignals: a 1px div at the top of the signal list.
  //     When signalsEmpty && aboveSignals → setActiveState(0).
  //     This is the ONLY path back to state 0, ensuring it only fires when the
  //     user has genuinely scrolled back above the signal sequence.

  const [activeState, setActiveState] = useState(0)
  const [signalsEmpty, setSignalsEmpty] = useState(true)
  const activeItemsRef = useRef(new Set<number>())

  const sentinelRef = useRef<HTMLDivElement>(null)
  // Fires when the top edge of the signal list re-enters the viewport while scrolling back up
  const aboveSignals = useInView(sentinelRef, { once: false, amount: 0.5 })

  const handleEnter = useCallback((i: number) => {
    activeItemsRef.current.add(i)
    setSignalsEmpty(false)
    setActiveState(Math.max(...activeItemsRef.current) + 1)
  }, [])

  const handleLeave = useCallback((i: number) => {
    activeItemsRef.current.delete(i)
    if (activeItemsRef.current.size > 0) {
      setActiveState(Math.max(...activeItemsRef.current) + 1)
    } else {
      // Set is empty — retain current activeState (no flash to state 0).
      // The sentinel useEffect below handles restoring state 0.
      setSignalsEmpty(true)
    }
  }, [])

  // Restore state 0 only when genuinely above all signals
  useEffect(() => {
    if (signalsEmpty && aboveSignals) setActiveState(0)
  }, [signalsEmpty, aboveSignals])

  return (
    <section
      ref={ref}
      id="execution-problem"
      style={{ background: '#FFFFFF', borderTop: '1px solid rgba(17,18,20,0.07)' }}
    >
      <div className="container-site" style={{ paddingTop: 'clamp(4rem,7vw,7rem)', paddingBottom: 'clamp(4rem,7vw,7rem)' }}>

        <div className="grid grid-cols-1 lg:grid-cols-[5fr_4fr] gap-12 lg:gap-20">

          {/* ── Left column: all editorial content ── */}
          <div>
            {/* Section opener */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.70, ease: EASE }}
              className="mb-12"
            >
              <p className="vcg-label-dark mb-6">The Problem</p>
              <p
                className="font-display font-normal"
                style={{ fontSize: 'clamp(1.8rem, 3.2vw, 3.4rem)', lineHeight: 1.08, letterSpacing: '-0.030em', color: '#111214', maxWidth: '18ch' }}
              >
                Most organizations do not have a strategy problem.
              </p>
              <p
                className="font-display font-normal italic mt-2"
                style={{ fontSize: 'clamp(1.8rem, 3.2vw, 3.4rem)', lineHeight: 1.08, letterSpacing: '-0.030em', color: 'rgba(17,18,20,0.32)', maxWidth: '18ch' }}
              >
                They have an execution problem.
              </p>
            </motion.div>

            {/* Signal list */}
            <div>
              {/* Sentinel — 1px anchor at the top of the signal sequence.
                  When this is in view AND no signals are active, state reverts to 0. */}
              <div ref={sentinelRef} style={{ height: 1, marginBottom: -1 }} />

              {SIGNALS.map((item, i) => (
                <SignalRow
                  key={i}
                  index={i}
                  item={item}
                  isLast={i === SIGNALS.length - 1}
                  sectionInView={inView}
                  onEnter={handleEnter}
                  onLeave={handleLeave}
                />
              ))}
              <div style={{ borderTop: '1px solid rgba(17,18,20,0.07)' }} />
            </div>

            {/* Structural framing paragraphs + closing CTA */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.70, delay: 0.12, ease: EASE }}
              style={{ marginTop: '2.5rem' }}
            >
              <p
                className="font-body font-light"
                style={{ fontSize: '1rem', lineHeight: 1.84, color: 'rgba(17,18,20,0.44)', maxWidth: '52ch' }}
              >
                This sequence is not a project management failure. It is a structural failure — the predictable result of missing accountability, absent decision architecture, degraded visibility, unmanaged dependencies, and drift from original outcomes.
              </p>
              <p
                className="font-body font-light mt-5"
                style={{ fontSize: '1rem', lineHeight: 1.84, color: 'rgba(17,18,20,0.44)', maxWidth: '52ch' }}
              >
                Each failure has a name. Each name maps to a structural condition. Each condition can be established before execution begins.
              </p>

              <div style={{ marginTop: '2rem', paddingTop: '1.75rem', borderTop: '1px solid rgba(17,18,20,0.08)' }}>
                <p
                  className="font-display font-normal italic"
                  style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.55rem)', lineHeight: 1.28, letterSpacing: '-0.018em', color: 'rgba(17,18,20,0.36)', maxWidth: '38ch' }}
                >
                  &ldquo;The gap between strategic intent and delivered outcomes is not inevitable. It is structural — and structural problems have structural solutions.&rdquo;
                </p>
              </div>

              <div ref={closingRef} style={{ marginTop: '2rem' }}>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={closingInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.60, delay: 0.08, ease: EASE }}
                >
                  <button
                    onClick={openModal}
                    className="inline-flex items-center gap-2 font-body font-normal transition-colors duration-200"
                    style={{ fontSize: '0.8125rem', color: 'rgba(17,18,20,0.40)' }}
                    onMouseEnter={e => (e.currentTarget as HTMLButtonElement).style.color = '#111214'}
                    onMouseLeave={e => (e.currentTarget as HTMLButtonElement).style.color = 'rgba(17,18,20,0.40)'}
                  >
                    If this describes your initiative →
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* ── Right column: sticky diagram (desktop only) ── */}
          <div className="hidden lg:block">
            <div style={{ position: 'sticky', top: 'clamp(6rem, 12vh, 9rem)' }}>
              <ExecutionFailureDiagram activeState={activeState} />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
