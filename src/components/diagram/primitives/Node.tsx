'use client'

import { motion } from 'framer-motion'
import type { MotionProps } from 'framer-motion'

/**
 * NODE — a structural entity in a VCG execution diagram.
 * Represents an owner, decision point, workstream, team, system, or dependency.
 *
 * Variant controls fill via the diagram semantic token system.
 * Animation is driven by the parent diagram via `variants` / `animate` props.
 */

export type NodeVariant = 'default' | 'active' | 'exposure' | 'resolution' | 'outcome'

const VARIANT_FILL: Record<NodeVariant, string> = {
  default:    'var(--diagram-node)',
  active:     'var(--diagram-node-active)',
  exposure:   'var(--diagram-exposure)',
  resolution: 'var(--diagram-resolution)',
  outcome:    'var(--diagram-outcome)',
}

interface NodeProps {
  cx: number
  cy: number
  r?: number
  variant?: NodeVariant
  opacity?: number
  style?: React.CSSProperties
  // Motion — parent diagram drives animation via these
  initial?: MotionProps['initial']
  animate?: MotionProps['animate']
  variants?: MotionProps['variants']
  transition?: MotionProps['transition']
  exit?: MotionProps['exit']
}

export function Node({
  cx,
  cy,
  r = 3,
  variant = 'default',
  opacity,
  style,
  initial,
  animate,
  variants,
  transition,
  exit,
}: NodeProps) {
  return (
    <motion.circle
      cx={cx}
      cy={cy}
      r={r}
      fill={VARIANT_FILL[variant]}
      opacity={opacity}
      style={style}
      initial={initial}
      animate={animate}
      variants={variants}
      transition={transition}
      exit={exit}
    />
  )
}
