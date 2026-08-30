'use client'

import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1] as const

// ── Coordinates (ViewBox 0 0 480 500) ─────────────────────────────────────────
const OBS_Y   = 50              // Executive Visibility observation line
const ACC     = { x:  98, y: 158 } // I — Accountability
const DA      = { x: 382, y: 158 } // II — Decision Architecture
const DA_IN1  = { x: 328, y:  96 } // DA convergence input A
const DA_IN2  = { x: 436, y:  96 } // DA convergence input B
const EXEC    = { x: 240, y: 252 } // Execution State (central hub)
const DEP_L   = { x:  84, y: 336 } // IV — left workstream
const DEP_C   = { x: 240, y: 336 } // IV — center owned interface
const DEP_R   = { x: 396, y: 336 } // IV — right workstream
const OUTD    = { x: 240, y: 410 } // V — Outcome Discipline
const OUT     = { x: 240, y: 470 } // Outcome destination

const MONO: React.CSSProperties = {
  fontFamily: 'var(--font-mono-var, monospace)',
  fontSize: 7,
  letterSpacing: '0.10em',
}
const MONO_SM: React.CSSProperties = {
  fontFamily: 'var(--font-mono-var, monospace)',
  fontSize: 5.5,
  letterSpacing: '0.14em',
}

// hoveredDim: 0=Accountability, 1=DecisionArch, 2=ExecViz, 3=DepOwn, 4=OutcomeDisc
interface Props {
  hoveredDim: number | null
}

export function ExecutionIntelligenceMap({ hoveredDim }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.20 })
  const prefersReduced = useReducedMotion()

  // Establishment transition for each group (staggered entry)
  const esTr = (delay: number) =>
    prefersReduced ? { duration: 0 } : { delay, duration: 0.50, ease: EASE }

  // Hover-driven opacity for each dimension group
  const gOp = (dimIdx: number) =>
    hoveredDim === null ? 1 : hoveredDim === dimIdx ? 1 : 0.22

  const evOp   = hoveredDim === null ? 1 : hoveredDim === 2 ? 1 : 0.22
  const execOp = hoveredDim === null ? 1 : 0.50
  const outOp  = hoveredDim === null ? 0.88 : hoveredDim === 4 ? 1 : 0.22

  // CSS transition for inner hover groups — clean separation from motion.g establishment
  const hTr = prefersReduced ? undefined : 'opacity 0.18s ease'

  const nodeColor = (idx: number) =>
    hoveredDim === idx ? 'var(--diagram-node-active)' : 'var(--diagram-node)'
  const pathColor = (idx: number) =>
    hoveredDim === idx ? 'var(--diagram-signal)' : 'var(--diagram-path)'
  const textColor = (idx: number) =>
    hoveredDim === idx ? 'var(--diagram-signal)' : 'var(--diagram-node)'
  const hl = (idx: number) => hoveredDim === idx

  return (
    <div ref={ref} aria-hidden="true">

      {/* ── Desktop / tablet diagram ────────────────────────────────────── */}
      <div className="hidden md:block">
        <svg
          viewBox="0 0 480 500"
          width="100%"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: 'block' }}
        >
          {/* ── EXECUTIVE VISIBILITY — observation layer (dim 2) ─────────── */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={esTr(0.05)}
          >
            <g style={{ opacity: evOp, transition: hTr }}>
              {/* Observation line — spans the full system width */}
              <line
                x1={60} y1={OBS_Y} x2={420} y2={OBS_Y}
                stroke={hl(2) ? 'var(--diagram-signal)' : 'var(--diagram-boundary)'}
                strokeWidth={0.9} opacity={0.72}
              />
              <text x={62} y={OBS_Y - 10} fill={textColor(2)} opacity={0.48} style={MONO}>
                III — EXECUTIVE VISIBILITY
              </text>
              <text x={420} y={OBS_Y - 10} textAnchor="end" fill={textColor(2)} opacity={0.22} style={MONO_SM}>
                OBSERVATION LAYER
              </text>
              {/* Vertical connectors to ACC and DA — observation relationship */}
              <line
                x1={ACC.x} y1={OBS_Y + 1} x2={ACC.x} y2={ACC.y - 12}
                stroke={hl(2) ? 'var(--diagram-signal)' : 'var(--diagram-boundary)'}
                strokeWidth={0.65} opacity={0.48}
              />
              <line
                x1={DA.x} y1={OBS_Y + 1} x2={DA.x} y2={DA.y - 12}
                stroke={hl(2) ? 'var(--diagram-signal)' : 'var(--diagram-boundary)'}
                strokeWidth={0.65} opacity={0.48}
              />
            </g>
          </motion.g>

          {/* ── ACCOUNTABILITY — I (dim 0) ───────────────────────────────── */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={esTr(0.22)}
          >
            <g style={{ opacity: gOp(0), transition: hTr }}>
              <circle cx={ACC.x} cy={ACC.y} r={5.5} fill={nodeColor(0)} opacity={0.82} />
              <text x={10} y={ACC.y + 20} fill={textColor(0)} opacity={0.40} style={MONO}>
                I — ACCOUNTABILITY
              </text>
              {/* Path to Execution State */}
              <line
                x1={ACC.x + 4} y1={ACC.y + 5} x2={EXEC.x - 4} y2={EXEC.y - 8}
                stroke={pathColor(0)} strokeWidth={0.9} opacity={hl(0) ? 0.65 : 0.34}
              />
            </g>
          </motion.g>

          {/* ── DECISION ARCHITECTURE — II (dim 1) ───────────────────────── */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={esTr(0.26)}
          >
            <g style={{ opacity: gOp(1), transition: hTr }}>
              {/* Convergence inputs — multiple decisions routed to one framework */}
              <line
                x1={DA_IN1.x} y1={DA_IN1.y} x2={DA.x} y2={DA.y - 10}
                stroke={pathColor(1)} strokeWidth={0.6} opacity={0.24}
              />
              <line
                x1={DA_IN2.x} y1={DA_IN2.y} x2={DA.x} y2={DA.y - 10}
                stroke={pathColor(1)} strokeWidth={0.6} opacity={0.24}
              />
              <circle cx={DA_IN1.x} cy={DA_IN1.y} r={2.5} fill="var(--diagram-node)" opacity={0.26} />
              <circle cx={DA_IN2.x} cy={DA_IN2.y} r={2.5} fill="var(--diagram-node)" opacity={0.26} />
              <circle cx={DA.x} cy={DA.y} r={5.5} fill={nodeColor(1)} opacity={0.82} />
              <text x={470} y={DA.y + 20} textAnchor="end" fill={textColor(1)} opacity={0.40} style={MONO}>
                II — DECISION ARCHITECTURE
              </text>
              {/* Path to Execution State */}
              <line
                x1={DA.x - 4} y1={DA.y + 5} x2={EXEC.x + 4} y2={EXEC.y - 8}
                stroke={pathColor(1)} strokeWidth={0.9} opacity={hl(1) ? 0.65 : 0.34}
              />
            </g>
          </motion.g>

          {/* ── EXECUTION STATE — central hub (always present) ───────────── */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={esTr(0.50)}
          >
            <g style={{ opacity: execOp, transition: hTr }}>
              <circle cx={EXEC.x} cy={EXEC.y} r={7}  fill="var(--diagram-node)" opacity={0.66} />
              <circle cx={EXEC.x} cy={EXEC.y} r={15} stroke="var(--diagram-node)" strokeWidth={0.5} opacity={0.14} />
              <text x={EXEC.x} y={EXEC.y + 27} textAnchor="middle" fill="var(--diagram-node)" opacity={0.24} style={MONO_SM}>
                EXECUTION STATE
              </text>
            </g>
          </motion.g>

          {/* Vertical spine: EXEC → DEP (belongs to dim 3) */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={esTr(0.62)}
          >
            <g style={{ opacity: gOp(3), transition: hTr }}>
              <line
                x1={EXEC.x} y1={EXEC.y + 10} x2={DEP_C.x} y2={DEP_C.y - 7}
                stroke={pathColor(3)} strokeWidth={0.9} opacity={hl(3) ? 0.58 : 0.32}
              />
            </g>
          </motion.g>

          {/* ── DEPENDENCY OWNERSHIP — IV (dim 3) ────────────────────────── */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={esTr(0.68)}
          >
            <g style={{ opacity: gOp(3), transition: hTr }}>
              {/* Workstream nodes — cross-functional endpoints */}
              <circle cx={DEP_L.x} cy={DEP_L.y} r={3.5} fill="var(--diagram-node)" opacity={0.36} />
              <circle cx={DEP_R.x} cy={DEP_R.y} r={3.5} fill="var(--diagram-node)" opacity={0.36} />
              {/* Bridge — the owned interface between workstreams */}
              <line
                x1={DEP_L.x} y1={DEP_L.y} x2={DEP_R.x} y2={DEP_R.y}
                stroke={pathColor(3)} strokeWidth={0.9} opacity={hl(3) ? 0.68 : 0.40}
              />
              {/* Center ownership point */}
              <circle cx={DEP_C.x} cy={DEP_C.y} r={4.5} fill={nodeColor(3)} opacity={0.72} />
              <text x={DEP_C.x} y={DEP_C.y - 12} textAnchor="middle" fill={textColor(3)} opacity={0.38} style={MONO}>
                IV — DEPENDENCY OWNERSHIP
              </text>
            </g>
          </motion.g>

          {/* Vertical spine: DEP → OUTD (belongs to dim 4) */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={esTr(0.80)}
          >
            <g style={{ opacity: gOp(4), transition: hTr }}>
              <line
                x1={DEP_C.x} y1={DEP_C.y + 7} x2={OUTD.x} y2={OUTD.y - 8}
                stroke={pathColor(4)} strokeWidth={0.9} opacity={hl(4) ? 0.58 : 0.32}
              />
            </g>
          </motion.g>

          {/* ── OUTCOME DISCIPLINE — V (dim 4) ───────────────────────────── */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={esTr(0.86)}
          >
            <g style={{ opacity: gOp(4), transition: hTr }}>
              <circle cx={OUTD.x} cy={OUTD.y} r={5.5} fill={nodeColor(4)} opacity={0.76} />
              <text x={OUTD.x + 14} y={OUTD.y + 4} fill={textColor(4)} opacity={0.38} style={MONO}>
                V — OUTCOME DISCIPLINE
              </text>
              {/* Path to Outcome */}
              <line
                x1={OUTD.x} y1={OUTD.y + 8} x2={OUT.x} y2={OUT.y - 9}
                stroke={pathColor(4)} strokeWidth={0.9} opacity={hl(4) ? 0.62 : 0.38}
              />
            </g>
          </motion.g>

          {/* ── OUTCOME destination ──────────────────────────────────────── */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={esTr(1.05)}
          >
            <g style={{ opacity: outOp, transition: hTr }}>
              <circle cx={OUT.x} cy={OUT.y} r={5.5}  fill="var(--diagram-outcome)" opacity={0.84} />
              <circle cx={OUT.x} cy={OUT.y} r={14}   stroke="var(--diagram-outcome)" strokeWidth={0.5} opacity={0.20} />
              <text x={OUT.x} y={OUT.y + 24} textAnchor="middle" fill="var(--diagram-outcome)" opacity={0.40} style={MONO}>
                OUTCOME
              </text>
            </g>
          </motion.g>
        </svg>
      </div>

      {/* ── Mobile — Executive Visibility as observation frame ───────────── */}
      {/* EV wraps the execution spine visually: amber border enclosing all dims  */}
      {/* This preserves the conceptual hierarchy: EV observes the structure,     */}
      {/* it is not the first step in a sequential execution process.             */}
      <div className="block md:hidden">
        <div style={{
          border: '1px solid rgba(200,169,110,0.18)',
          background: 'rgba(200,169,110,0.016)',
        }}>
          {/* EV header — the observation layer label */}
          <div style={{
            padding: '0.5rem 0.875rem',
            borderBottom: '1px solid rgba(200,169,110,0.12)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '0.5rem',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontFamily: 'var(--font-mono-var, monospace)', fontSize: '0.4375rem', color: 'var(--color-amber-500)', letterSpacing: '0.10em' }}>III</span>
              <span style={{ fontFamily: 'var(--font-body-var, sans-serif)', fontSize: '0.6875rem', fontWeight: 500, color: 'var(--color-amber-500)' }}>Executive Visibility</span>
            </div>
            <span style={{ fontFamily: 'var(--font-mono-var, monospace)', fontSize: '0.375rem', letterSpacing: '0.14em', color: 'rgba(200,169,110,0.50)' }}>
              OBSERVATION LAYER
            </span>
          </div>

          {/* Execution spine — inside the observation scope */}
          <div style={{ position: 'relative', padding: '1.125rem 0.875rem 1.125rem 2.5rem' }}>
            {/* Spine line */}
            <div style={{
              position: 'absolute',
              left: '1.25rem',
              top: '1.125rem',
              bottom: '1.125rem',
              width: '1px',
              background: 'rgba(245,243,238,0.08)',
            }} />

            {/* Dimension nodes */}
            {[
              { n: 'I',   label: 'Accountability'        },
              { n: 'II',  label: 'Decision Architecture' },
              { n: 'IV',  label: 'Dependency Ownership'  },
              { n: 'V',   label: 'Outcome Discipline'    },
            ].map((d, i) => (
              <div
                key={d.n}
                style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: i < 3 ? '1.125rem' : '0.875rem' }}
              >
                <div style={{
                  position: 'absolute',
                  left: '-1.375rem',
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: 'rgba(245,243,238,0.26)',
                }} />
                <span style={{ fontFamily: 'var(--font-mono-var, monospace)', fontSize: '0.4375rem', color: 'rgba(245,243,238,0.24)', letterSpacing: '0.10em' }}>{d.n}</span>
                <span style={{ fontFamily: 'var(--font-body-var, sans-serif)', fontSize: '0.6875rem', fontWeight: 500, color: 'rgba(245,243,238,0.46)', letterSpacing: '-0.005em' }}>{d.label}</span>
              </div>
            ))}

            {/* Outcome destination */}
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
              <div style={{
                position: 'absolute',
                left: '-1.5rem',
                width: '9px',
                height: '9px',
                borderRadius: '50%',
                background: 'var(--diagram-outcome)',
                boxShadow: '0 0 0 3px rgba(200,169,110,0.13)',
                opacity: 0.82,
              }} />
              <span style={{ fontFamily: 'var(--font-mono-var, monospace)', fontSize: '0.5rem', color: 'var(--diagram-outcome)', letterSpacing: '0.12em', opacity: 0.68 }}>
                OUTCOME
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
