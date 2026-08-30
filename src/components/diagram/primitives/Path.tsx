'use client'

import { motion } from 'framer-motion'
import type { MotionProps } from 'framer-motion'
import { pathDraw } from '@/lib/animations'

/**
 * PATH — a structural execution relationship between entities in a VCG diagram.
 *
 * variant="structural" : default relationship line (subtle warm-white)
 * variant="signal"     : active execution relationship (amber)
 *
 * animated=true        : opts into pathLength drawing animation.
 *   - Sets default `variants` to `pathDraw` and `initial` to "hidden".
 *   - Parent diagram must set `animate="visible"` (or equivalent) to trigger.
 *   - Parent-supplied `initial` / `variants` always override these defaults.
 */

type PathVariant = 'structural' | 'signal'

const VARIANT_STROKE: Record<PathVariant, string> = {
  structural: 'var(--diagram-path)',
  signal:     'var(--diagram-signal)',
}

const DEFAULT_STROKE_WIDTH: Record<PathVariant, number> = {
  structural: 1,
  signal:     1.5,
}

interface PathProps {
  d: string
  variant?: PathVariant
  animated?: boolean
  strokeWidth?: number
  strokeDasharray?: string | number
  opacity?: number
  style?: React.CSSProperties
  // Motion — parent diagram drives animation via these
  initial?: MotionProps['initial']
  animate?: MotionProps['animate']
  variants?: MotionProps['variants']
  transition?: MotionProps['transition']
  exit?: MotionProps['exit']
}

export function Path({
  d,
  variant = 'structural',
  animated = false,
  strokeWidth,
  strokeDasharray,
  opacity,
  style,
  initial: initialProp,
  animate,
  variants: variantsProp,
  transition,
  exit,
}: PathProps) {
  const resolvedVariants = variantsProp ?? (animated ? pathDraw : undefined)
  const resolvedInitial  = initialProp  ?? (animated ? 'hidden' : undefined)

  return (
    <motion.path
      d={d}
      stroke={VARIANT_STROKE[variant]}
      strokeWidth={strokeWidth ?? DEFAULT_STROKE_WIDTH[variant]}
      strokeDasharray={strokeDasharray}
      strokeLinecap="round"
      fill="none"
      opacity={opacity}
      style={style}
      initial={resolvedInitial}
      animate={animate}
      variants={resolvedVariants}
      transition={transition}
      exit={exit}
    />
  )
}
