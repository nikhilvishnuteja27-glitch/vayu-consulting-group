'use client'

import { motion, useReducedMotion } from 'framer-motion'

interface Props {
  activeState: number  // 0=reference, 1–5=failure states
  compact?: boolean    // mobile: fixed state, essential labels only, smaller padding
}

const EASE = [0.16, 1, 0.3, 1] as const

// ViewBox "0 44 400 168" — execution axis at y=120 (center of visible range 44→212)
// Content span: STATUS/VISIBILITY labels at y=66; D5 label at y=185 — both within bounds.
const IX = 44,  IY = 120   // INTENT
const OX = 356, OY = 120   // INTENDED OUTCOME
const FX = 148, FY = 120   // fork / fragmentation point (state 1)
const OBS_Y = 74            // observation / status layer

// State 1 — three diverging branch endpoints
const BT = { x: 334, y: 66  }   // upper
const BM = { x: 334, y: 120 }   // middle
const BB = { x: 334, y: 174 }   // lower

// State 4 — displaced outcome
const O4O = { x: 296, y: 120 }  // original position (hollow, faint)
const O4S = { x: 364, y: 120 }  // shifted position (further right)

// State 5 — delivered output (below the execution axis)
const D5 = { x: 254, y: 168 }

export function ExecutionFailureDiagram({ activeState, compact = false }: Props) {
  const prefersReduced = useReducedMotion()
  const tr = { duration: prefersReduced ? 0 : 0.38, ease: EASE }
  const vis = (s: number) => ({ opacity: activeState === s ? 1 : 0 })

  // Compact mode uses a larger font so labels stay legible at ~375px device width.
  // (7px SVG units × scale ≈ 6.6px actual; 9.5px × scale ≈ 8.9px actual — legible.)
  // Non-essential decorative labels are suppressed in compact mode entirely.
  const labelSz = compact ? 9.5 : 7
  const mono = (extra?: React.CSSProperties): React.CSSProperties => ({
    fontFamily: 'var(--font-mono-var, monospace)',
    fontSize: labelSz,
    letterSpacing: '0.10em',
    ...extra,
  })

  return (
    <div
      aria-hidden="true"
      style={{
        background: '#0B0B0D',
        padding: compact ? '1rem 0.875rem 0.875rem' : '1.25rem 1rem 1rem',
      }}
    >
      <svg
        viewBox="0 44 400 168"
        width="100%"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: 'block' }}
      >
        {/* INTENT node — always present as structural anchor */}
        <circle cx={IX} cy={IY} r={4.5} fill="var(--diagram-node)" opacity={0.82} />
        {/* STRATEGIC INTENT label — kept in compact since it anchors the whole diagram */}
        <text x={10} y={IY - 11} fill="var(--diagram-node)" opacity={0.50} style={mono()}>
          STRATEGIC INTENT
        </text>

        {/* ── STATE 0: Reference — coherent execution path ──────── */}
        <motion.g animate={vis(0)} transition={tr}>
          <line
            x1={IX} y1={IY} x2={OX} y2={OY}
            stroke="var(--diagram-path)" strokeWidth={1} opacity={0.66}
          />
          <circle cx={OX} cy={OY} r={5}  fill="var(--diagram-outcome)" opacity={0.88} />
          <circle cx={OX} cy={OY} r={13} stroke="var(--diagram-outcome)" strokeWidth={0.6} opacity={0.32} />
          <text x={OX} y={OY + 24} textAnchor="middle" fill="var(--diagram-outcome)" opacity={0.62} style={mono()}>
            INTENDED OUTCOME
          </text>
        </motion.g>

        {/* ── STATE 1: Ownership Fragments ─────────────────────── */}
        {/* Path forks at accountability boundary — three equally ambiguous routes.    */}
        {/* Geometry carries the meaning; no label needed in compact mode.             */}
        <motion.g animate={vis(1)} transition={tr}>
          <line
            x1={IX} y1={IY} x2={FX} y2={FY}
            stroke="var(--diagram-path)" strokeWidth={1} opacity={0.58}
          />
          <path
            d={`M ${FX},${FY} C ${FX+44},${FY} ${FX+76},${BT.y} ${BT.x},${BT.y}`}
            stroke="var(--diagram-path)" strokeWidth={0.9} opacity={0.45}
          />
          <line
            x1={FX} y1={FY} x2={BM.x} y2={BM.y}
            stroke="var(--diagram-path)" strokeWidth={0.9} opacity={0.45}
          />
          <path
            d={`M ${FX},${FY} C ${FX+44},${FY} ${FX+76},${BB.y} ${BB.x},${BB.y}`}
            stroke="var(--diagram-path)" strokeWidth={0.9} opacity={0.45}
          />
          <circle cx={FX} cy={FY} r={3.5} fill="var(--diagram-exposure)" opacity={0.80} />
          <circle cx={BT.x} cy={BT.y} r={3} fill="var(--diagram-node)" opacity={0.52} />
          <circle cx={BM.x} cy={BM.y} r={3} fill="var(--diagram-node)" opacity={0.52} />
          <circle cx={BB.x} cy={BB.y} r={3} fill="var(--diagram-node)" opacity={0.52} />
          <circle cx={OX} cy={OY} r={11} stroke="var(--diagram-outcome)" strokeWidth={0.5} opacity={0.18} />
          {/* Decorative label — suppressed in compact; 3 branches speak for themselves */}
          {!compact && (
            <text x={FX - 2} y={FY - 12} fill="var(--diagram-node)" opacity={0.28} style={mono({ fontSize: 6 })}>
              OWNERSHIP
            </text>
          )}
        </motion.g>

        {/* ── STATE 2: Status Replaces Execution ───────────────── */}
        {/* Reporting layer continues clean; execution layer breaks down.              */}
        {/* STATUS / EXECUTION labels are essential — both lines look similar          */}
        {/* without them; kept in compact at larger size.                              */}
        <motion.g animate={vis(2)} transition={tr}>
          <line
            x1={IX} y1={OBS_Y} x2={OX} y2={OBS_Y}
            stroke="var(--diagram-path)" strokeWidth={1} opacity={0.66}
          />
          <line
            x1={IX} y1={OBS_Y} x2={IX} y2={IY}
            stroke="var(--diagram-path)" strokeWidth={0.6} opacity={0.30}
          />
          <line
            x1={IX} y1={IY} x2={OX} y2={OY}
            stroke="var(--diagram-path)" strokeWidth={1} strokeDasharray="6 9" opacity={0.36}
          />
          {/* Essential: distinguishes reporting from execution */}
          <text x={OX - 4} y={OBS_Y - 8} textAnchor="end" fill="var(--diagram-node)" opacity={0.56} style={mono()}>
            STATUS
          </text>
          <text x={OX - 4} y={OY + 16} textAnchor="end" fill="var(--diagram-node)" opacity={0.34} style={mono()}>
            EXECUTION
          </text>
          <circle cx={OX} cy={OY} r={9} stroke="var(--diagram-outcome)" strokeWidth={0.5} opacity={0.22} />
        </motion.g>

        {/* ── STATE 3: Leadership Loses Visibility ─────────────── */}
        {/* Observation layer disconnects in the middle — structural break.            */}
        {/* VISIBILITY label is essential — names the layer that breaks.               */}
        <motion.g animate={vis(3)} transition={tr}>
          <line
            x1={IX} y1={OBS_Y} x2={148} y2={OBS_Y}
            stroke="var(--diagram-path)" strokeWidth={1} opacity={0.62}
          />
          <line
            x1={IX} y1={OBS_Y} x2={IX} y2={IY}
            stroke="var(--diagram-path)" strokeWidth={0.6} opacity={0.30}
          />
          <line x1={156} y1={OBS_Y - 5} x2={156} y2={OBS_Y + 5} stroke="var(--diagram-path)" strokeWidth={0.5} opacity={0.24} />
          <line x1={240} y1={OBS_Y - 5} x2={240} y2={OBS_Y + 5} stroke="var(--diagram-path)" strokeWidth={0.5} opacity={0.24} />
          <line
            x1={248} y1={OBS_Y} x2={OX} y2={OBS_Y}
            stroke="var(--diagram-path)" strokeWidth={0.9} strokeDasharray="4 6" opacity={0.30}
          />
          <line
            x1={IX} y1={IY} x2={OX} y2={OY}
            stroke="var(--diagram-path)" strokeWidth={1} strokeDasharray="5 8" opacity={0.33}
          />
          {/* Essential: names the layer that structurally breaks */}
          <text x={50} y={OBS_Y - 8} fill="var(--diagram-node)" opacity={0.54} style={mono()}>
            VISIBILITY
          </text>
          <circle cx={OX} cy={OY} r={9} stroke="var(--diagram-outcome)" strokeWidth={0.5} opacity={0.18} />
        </motion.g>

        {/* ── STATE 4: Deadlines Move ───────────────────────────── */}
        {/* Original outcome marker remains faint; destination shifts further right.   */}
        {/* In compact mode: label omitted — geometry + signal text carry the meaning. */}
        <motion.g animate={vis(4)} transition={tr}>
          <line
            x1={IX} y1={IY} x2={O4O.x} y2={O4O.y}
            stroke="var(--diagram-path)" strokeWidth={1} strokeDasharray="5 8" opacity={0.40}
          />
          <circle cx={O4O.x} cy={O4O.y} r={9}  stroke="var(--diagram-outcome)" strokeWidth={0.6} fill="none" opacity={0.28} />
          <line
            x1={O4O.x + 12} y1={O4O.y} x2={O4S.x - 8} y2={O4S.y}
            stroke="var(--diagram-path)" strokeWidth={0.7} strokeDasharray="3 5" opacity={0.36}
          />
          <circle cx={O4S.x} cy={O4S.y} r={5}  fill="var(--diagram-outcome)" opacity={0.76} />
          <circle cx={O4S.x} cy={O4S.y} r={12} stroke="var(--diagram-outcome)" strokeWidth={0.6} fill="none" opacity={0.32} />
          {/* Omitted in compact — shifted amber ring vs. hollow original is self-evident */}
          {!compact && (
            <text x={O4S.x} y={O4S.y + 24} textAnchor="middle" fill="var(--diagram-outcome)" opacity={0.52} style={mono()}>
              INTENDED OUTCOME
            </text>
          )}
        </motion.g>

        {/* ── STATE 5: Initiative Completes. Problem Remains. ───── */}
        {/* Execution arrives somewhere. The original outcome is still unreached.      */}
        {/* Both labels essential — otherwise two nodes look ambiguously equivalent.   */}
        <motion.g animate={vis(5)} transition={tr}>
          <path
            d={`M ${IX},${IY} C ${IX+88},${IY} ${IX+160},${D5.y} ${D5.x},${D5.y}`}
            stroke="var(--diagram-path)" strokeWidth={1} strokeDasharray="5 7" opacity={0.48}
          />
          <circle cx={D5.x} cy={D5.y} r={5}  fill="var(--diagram-node)" opacity={0.84} />
          <line
            x1={D5.x + 10} y1={D5.y - 8} x2={OX - 14} y2={OY + 12}
            stroke="var(--diagram-path)" strokeWidth={0.5} strokeDasharray="3 6" opacity={0.20}
          />
          <circle cx={OX} cy={OY} r={11} stroke="var(--diagram-outcome)" strokeWidth={0.7} fill="none" opacity={0.46} />
          <circle cx={OX} cy={OY} r={4}  stroke="var(--diagram-outcome)" strokeWidth={0.6} fill="none" opacity={0.30} />
          {/* Essential: without labels the two nodes don't tell apart delivered vs. intended */}
          <text x={D5.x} y={D5.y + 17} textAnchor="middle" fill="var(--diagram-node)" opacity={0.58} style={mono()}>
            DELIVERED OUTPUT
          </text>
          <text x={OX} y={OY - 22} textAnchor="middle" fill="var(--diagram-outcome)" opacity={0.54} style={mono()}>
            INTENDED OUTCOME
          </text>
        </motion.g>
      </svg>
    </div>
  )
}
