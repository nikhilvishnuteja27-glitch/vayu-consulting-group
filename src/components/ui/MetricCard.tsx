'use client'

import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/animations'

interface MetricCardProps {
  label: string
  description: string
  delay?: number
}

export function MetricCard({ label, description, delay = 0 }: MetricCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      custom={delay}
      className="text-left"
    >
      <div
        className="font-display font-normal text-white/90"
        style={{ fontSize: 'clamp(1.25rem, 2vw, 1.75rem)', lineHeight: 1.2, letterSpacing: '-0.015em' }}
      >
        {label}
      </div>
      <div className="mt-1 text-white/45 font-body" style={{ fontSize: '0.875rem', lineHeight: 1.6 }}>
        {description}
      </div>
    </motion.div>
  )
}
