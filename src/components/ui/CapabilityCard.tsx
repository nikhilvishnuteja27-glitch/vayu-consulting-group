'use client'

import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/animations'
import { Tag } from './Tag'
import type { LucideIcon } from 'lucide-react'

interface CapabilityCardProps {
  number: string
  icon: LucideIcon
  title: string
  description: string
  delay?: number
}

export function CapabilityCard({ number, icon: Icon, title, description, delay = 0 }: CapabilityCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      custom={delay}
      className="group relative p-6 rounded-[2px] border border-white/[0.07] bg-[#111827] cursor-default transition-all duration-300"
      style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.03), transparent), #111827' }}
      whileHover={{ y: -2, borderColor: 'rgba(200,169,110,0.3)' }}
    >
      <div
        className="absolute top-4 right-5 font-mono text-white/20 select-none"
        style={{ fontSize: '0.6875rem', letterSpacing: '0.15em', fontWeight: 500 }}
      >
        {number}
      </div>
      <div className="mb-4 text-white/50 transition-colors duration-300 group-hover:text-[#c8a96e]">
        <Icon size={24} strokeWidth={1.5} />
      </div>
      <h3
        className="font-display font-normal text-white/90 mb-2"
        style={{ fontSize: 'clamp(1.25rem, 2vw, 1.75rem)', lineHeight: 1.2, letterSpacing: '-0.015em' }}
      >
        {title}
      </h3>
      <p className="text-white/45 font-body font-light leading-relaxed" style={{ fontSize: '0.875rem' }}>
        {description}
      </p>
      <div className="mt-4 pt-4 border-t border-white/[0.05]">
        <Tag>Capability</Tag>
      </div>
    </motion.div>
  )
}
