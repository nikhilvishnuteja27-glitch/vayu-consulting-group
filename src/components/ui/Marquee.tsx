'use client'

import { useRef } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

interface MarqueeProps {
  items: string[]
  speed?: number          // seconds per full cycle
  separator?: string
  className?: string
}

export function Marquee({
  items,
  speed = 36,
  separator = '·',
  className = '',
}: MarqueeProps) {
  const prefersReduced = useReducedMotion()
  const content = items.join(`  ${separator}  `)
  // Duplicate for seamless loop
  const fullText = `${content}  ${separator}  ${content}  ${separator}  `

  return (
    <div
      className={`overflow-hidden select-none ${className}`}
      aria-hidden
    >
      <motion.div
        style={{
          display: 'inline-flex',
          whiteSpace: 'nowrap',
          willChange: 'transform',
        }}
        animate={prefersReduced ? {} : { x: [0, '-50%'] }}
        transition={
          prefersReduced
            ? {}
            : {
                duration: speed,
                ease: 'linear',
                repeat: Infinity,
                repeatType: 'loop',
              }
        }
      >
        <span style={{ display: 'inline-block', paddingRight: '0.5em' }}>
          {fullText}
        </span>
        <span style={{ display: 'inline-block', paddingRight: '0.5em' }} aria-hidden>
          {fullText}
        </span>
      </motion.div>
    </div>
  )
}
