'use client'

import { useScroll, useSpring, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

const SUPPRESS_ROUTES = new Set(['/privacy', '/terms'])

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })
  const pathname = usePathname()

  if (SUPPRESS_ROUTES.has(pathname)) return null

  return (
    <motion.div
      style={{
        scaleX,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        background: 'rgba(245,243,238,0.55)',
        transformOrigin: '0%',
        zIndex: 9999,
      }}
    />
  )
}
