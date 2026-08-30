'use client'

import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import type { TargetAndTransition } from 'framer-motion'
import { DiagramCanvas, Node, Path } from '@/components/diagram'

const EASE = [0.16, 1, 0.3, 1] as const

// ─── Network geometry ─────────────────────────────────────────────────────────
// ViewBox: 400 × 600
// Execution flow:  INTENT → N1 → JUNCTION → N6 → OUTCOME
// Secondary structure establishes the surrounding network without naming each point.

const N = {
  // Main signal route
  intent: { cx: 50,  cy: 96  },
  n1:     { cx: 172, cy: 54  },
  jxn:    { cx: 228, cy: 238 },
  n6:     { cx: 166, cy: 376 },
  out:    { cx: 346, cy: 498 },
  // Structural periphery
  n2:     { cx: 302, cy: 100 },
  n3:     { cx: 90,  cy: 228 },
  n5:     { cx: 346, cy: 188 },
  n7:     { cx: 304, cy: 332 },
  n8:     { cx: 98,  cy: 455 },
} as const

// Signal keyframes — 8 steps so cx, cy, opacity all align
const SIG = {
  cx: [50,  50,  172, 228, 166, 346, 346, 346],
  cy: [96,  96,  54,  238, 376, 498, 498, 498],
  op: [0,   1,   1,   1,   1,   1,   1,   0  ],
  t:  [0,   0.05, 0.22, 0.42, 0.67, 0.85, 0.93, 1.0],
}

const LABEL_STYLE: React.CSSProperties = {
  fontFamily: 'var(--font-mono-var, monospace)',
  fontSize: 6.5,
  letterSpacing: '0.14em',
}

// ─── Desktop / tablet network ─────────────────────────────────────────────────

export function ExecutionNetwork() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })
  const prefersReduced = useReducedMotion()

  return (
    <div ref={ref} style={{ position: 'relative', width: '100%', height: '100%' }}>

      {/* Gradient — masks left and right edges to blend into hero background */}
      <div
        aria-hidden
        style={{
          position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
          background: 'linear-gradient(90deg, #0B0B0D 0%, transparent 28%, transparent 80%, #0B0B0D 100%)',
        }}
      />

      {/* Network diagram */}
      <motion.div
        style={{ position: 'absolute', top: '6%', right: '-2%', width: '104%', height: '88%' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={prefersReduced ? { duration: 0 } : { duration: 1.4, ease: EASE }}
      >
        <DiagramCanvas
          viewBox="0 0 400 600"
          decorative
          width="100%"
          height="100%"
          style={{ display: 'block' }}
        >
          {/* ─── Secondary structural paths (background, very restrained) ─── */}
          <Path d={`M ${N.intent.cx},${N.intent.cy} L ${N.n3.cx},${N.n3.cy}`} variant="structural" opacity={0.28} strokeWidth={0.75} />
          <Path d={`M ${N.n3.cx},${N.n3.cy} L ${N.jxn.cx},${N.jxn.cy}`}       variant="structural" opacity={0.28} strokeWidth={0.75} />
          <Path d={`M ${N.n1.cx},${N.n1.cy} L ${N.n2.cx},${N.n2.cy}`}         variant="structural" opacity={0.22} strokeWidth={0.75} />
          <Path d={`M ${N.n2.cx},${N.n2.cy} L ${N.n5.cx},${N.n5.cy}`}         variant="structural" opacity={0.20} strokeWidth={0.75} />
          <Path d={`M ${N.n5.cx},${N.n5.cy} L ${N.jxn.cx},${N.jxn.cy}`}       variant="structural" opacity={0.22} strokeWidth={0.75} />
          <Path d={`M ${N.jxn.cx},${N.jxn.cy} L ${N.n7.cx},${N.n7.cy}`}       variant="structural" opacity={0.24} strokeWidth={0.75} />
          <Path d={`M ${N.n7.cx},${N.n7.cy} L ${N.out.cx},${N.out.cy}`}        variant="structural" opacity={0.28} strokeWidth={0.75} />
          <Path d={`M ${N.n6.cx},${N.n6.cy} L ${N.n8.cx},${N.n8.cy}`}         variant="structural" opacity={0.18} strokeWidth={0.75} />

          {/* ─── Main signal route (slightly more legible) ─── */}
          <Path d={`M ${N.intent.cx},${N.intent.cy} L ${N.n1.cx},${N.n1.cy}`} variant="structural" opacity={0.46} />
          <Path d={`M ${N.n1.cx},${N.n1.cy} L ${N.jxn.cx},${N.jxn.cy}`}       variant="structural" opacity={0.46} />
          <Path d={`M ${N.jxn.cx},${N.jxn.cy} L ${N.n6.cx},${N.n6.cy}`}       variant="structural" opacity={0.44} />
          <Path d={`M ${N.n6.cx},${N.n6.cy} L ${N.out.cx},${N.out.cy}`}        variant="structural" opacity={0.46} />

          {/* ─── Peripheral nodes ─── */}
          <Node cx={N.n2.cx}  cy={N.n2.cy}  r={2.5} variant="default" opacity={0.30} />
          <Node cx={N.n3.cx}  cy={N.n3.cy}  r={2.5} variant="default" opacity={0.33} />
          <Node cx={N.n5.cx}  cy={N.n5.cy}  r={2.5} variant="default" opacity={0.28} />
          <Node cx={N.n7.cx}  cy={N.n7.cy}  r={2.5} variant="default" opacity={0.28} />
          <Node cx={N.n8.cx}  cy={N.n8.cy}  r={2}   variant="default" opacity={0.20} />

          {/* ─── Route nodes ─── */}
          <Node cx={N.n1.cx}  cy={N.n1.cy}  r={3.5} variant="default" opacity={0.50} />
          <Node cx={N.n6.cx}  cy={N.n6.cy}  r={3.5} variant="default" opacity={0.46} />

          {/* Junction — structural decision point */}
          <Node cx={N.jxn.cx} cy={N.jxn.cy} r={4.0} variant="default" opacity={0.58} />

          {/* Intent — entry */}
          <Node cx={N.intent.cx} cy={N.intent.cy} r={4.5} variant="default" opacity={0.64} />

          {/* Outcome — destination. Larger, with outer ring */}
          <Node cx={N.out.cx} cy={N.out.cy} r={5}   variant="default" opacity={0.54} />
          <circle
            cx={N.out.cx} cy={N.out.cy} r={12}
            fill="none"
            stroke="var(--diagram-outcome)"
            strokeWidth={0.5}
            opacity={prefersReduced ? 0.40 : 0.20}
          />

          {/* ─── Micro-labels ─── */}
          <text
            x={8} y={91}
            fill="var(--diagram-node)"
            opacity={0.52}
            style={LABEL_STYLE}
          >
            STRATEGIC INTENT
          </text>
          <text
            x={N.out.cx} y={N.out.cy + 20}
            textAnchor="middle"
            fill="var(--diagram-outcome)"
            opacity={prefersReduced ? 0.52 : 0.28}
            style={LABEL_STYLE}
          >
            OUTCOME
          </text>

          {/* ─── Traveling signal (normal motion) ─── */}
          {!prefersReduced && inView && (
            // cx/cy are animated as SVG presentation attributes by Framer Motion's buildSVGAttrs
            // at runtime but are absent from TargetAndTransition's type definition. The narrowest
            // correct cast is `as unknown as TargetAndTransition` — not `as any`.
            <motion.circle
              r={2.5}
              fill="var(--diagram-signal)"
              animate={{ cx: SIG.cx, cy: SIG.cy, opacity: SIG.op } as unknown as TargetAndTransition}
              transition={{
                duration: 9,
                times: SIG.t,
                ease: 'easeInOut',
                delay: 1.2,
                repeat: Infinity,
                repeatDelay: 6,
              }}
            />
          )}

          {/* ─── Reduced motion: static amber signal at outcome ─── */}
          {prefersReduced && (
            <circle
              cx={N.out.cx} cy={N.out.cy}
              r={3}
              fill="var(--diagram-signal)"
              opacity={0.80}
            />
          )}
        </DiagramCanvas>
      </motion.div>
    </div>
  )
}

// ─── Mobile compact execution path ───────────────────────────────────────────
// 4 nodes, horizontal, 48px height.
// Communicates: INTENT → structural execution → OUTCOME.

const MOB = {
  t:  { cx: 30,  cy: 24 },
  m1: { cx: 118, cy: 24 },
  m2: { cx: 210, cy: 24 },
  o:  { cx: 294, cy: 24 },
}

const MOB_SIG = {
  cx: [30, 30, 118, 210, 294, 294, 294],
  cy: [24, 24, 24,  24,  24,  24,  24 ],
  op: [0,  1,  1,   1,   1,   1,   0  ],
  t:  [0,  0.06, 0.32, 0.58, 0.82, 0.93, 1.0],
}

export function MobileExecutionPath() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })
  const prefersReduced = useReducedMotion()

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={prefersReduced ? { duration: 0 } : { duration: 1.0 }}
      >
        <DiagramCanvas
          viewBox="0 0 324 48"
          decorative
          width="100%"
          height={48}
          style={{ display: 'block' }}
        >
          {/* Structural paths */}
          <Path d={`M ${MOB.t.cx},${MOB.t.cy} L ${MOB.m1.cx},${MOB.m1.cy}`}  variant="structural" opacity={0.42} />
          <Path d={`M ${MOB.m1.cx},${MOB.m1.cy} L ${MOB.m2.cx},${MOB.m2.cy}`} variant="structural" opacity={0.42} />
          <Path d={`M ${MOB.m2.cx},${MOB.m2.cy} L ${MOB.o.cx},${MOB.o.cy}`}   variant="structural" opacity={0.42} />

          {/* Nodes */}
          <Node cx={MOB.t.cx}  cy={MOB.t.cy}  r={4}   variant="default" opacity={0.60} />
          <Node cx={MOB.m1.cx} cy={MOB.m1.cy} r={3}   variant="default" opacity={0.44} />
          <Node cx={MOB.m2.cx} cy={MOB.m2.cy} r={3.5} variant="default" opacity={0.50} />
          <Node cx={MOB.o.cx}  cy={MOB.o.cy}  r={4.5} variant="default" opacity={0.55} />

          {/* Outcome ring */}
          <circle
            cx={MOB.o.cx} cy={MOB.o.cy} r={10}
            fill="none"
            stroke="var(--diagram-outcome)"
            strokeWidth={0.5}
            opacity={prefersReduced ? 0.45 : 0.22}
          />

          {/* Traveling signal */}
          {!prefersReduced && inView && (
            <motion.circle
              r={2}
              fill="var(--diagram-signal)"
              animate={{ cx: MOB_SIG.cx, cy: MOB_SIG.cy, opacity: MOB_SIG.op } as unknown as TargetAndTransition}
              transition={{
                duration: 5.5,
                times: MOB_SIG.t,
                ease: 'easeInOut',
                delay: 0.8,
                repeat: Infinity,
                repeatDelay: 5,
              }}
            />
          )}

          {/* Reduced motion: static signal at outcome */}
          {prefersReduced && (
            <circle
              cx={MOB.o.cx} cy={MOB.o.cy}
              r={2}
              fill="var(--diagram-signal)"
              opacity={0.80}
            />
          )}
        </DiagramCanvas>
      </motion.div>
    </div>
  )
}
