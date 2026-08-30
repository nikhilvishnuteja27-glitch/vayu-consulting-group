'use client'

import { motion, useReducedMotion } from 'framer-motion'
import type { MotionProps } from 'framer-motion'

/**
 * SIGNAL — an active execution indicator in a VCG diagram.
 * Represents execution movement through a path or activation at a node.
 *
 * pulse=true (default): applies a gentle opacity breathe animation.
 *   Respects prefers-reduced-motion — shows static amber dot when reduced.
 *
 * Parent-supplied `animate` / `transition` override the default pulse,
 * allowing the parent diagram to take control of signal state.
 */

interface SignalProps {
  cx: number
  cy: number
  r?: number
  pulse?: boolean
  opacity?: number
  style?: React.CSSProperties
  // Motion — parent can override internal pulse when needed
  animate?: MotionProps['animate']
  transition?: MotionProps['transition']
}

export function Signal({
  cx,
  cy,
  r = 2.5,
  pulse = true,
  opacity,
  style,
  animate: animateProp,
  transition: transitionProp,
}: SignalProps) {
  const prefersReduced = useReducedMotion()

  const defaultAnimate = pulse && !prefersReduced
    ? { opacity: [0.5, 1, 0.5] }
    : { opacity: opacity ?? 1 }

  const defaultTransition = pulse && !prefersReduced
    ? { duration: 3, repeat: Infinity, ease: 'easeInOut' as const }
    : undefined

  return (
    <motion.circle
      cx={cx}
      cy={cy}
      r={r}
      fill="var(--diagram-signal)"
      opacity={pulse && !prefersReduced ? undefined : (opacity ?? 1)}
      style={style}
      animate={animateProp ?? defaultAnimate}
      transition={transitionProp ?? defaultTransition}
    />
  )
}
