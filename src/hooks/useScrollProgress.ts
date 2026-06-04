'use client'

import { useEffect, useState } from 'react'

export function useScrollProgress() {
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      setScrolled(y > 80)
      const total = document.body.scrollHeight - window.innerHeight
      setProgress(total > 0 ? y / total : 0)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return { scrolled, progress }
}
