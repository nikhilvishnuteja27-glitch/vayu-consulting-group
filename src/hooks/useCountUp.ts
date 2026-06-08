'use client'

import { useEffect, useRef, useState } from 'react'

interface CountUpOptions {
  end: number
  duration?: number
  decimals?: number
  prefix?: string
  suffix?: string
  startWhen?: boolean
}

export function useCountUp({
  end,
  duration = 1600,
  decimals = 0,
  prefix = '',
  suffix = '',
  startWhen = true,
}: CountUpOptions) {
  const [value, setValue] = useState(() => prefix + end.toFixed(decimals) + suffix)
  const rafRef = useRef<number>(0)
  const started = useRef(false)

  useEffect(() => {
    if (!startWhen || started.current) return
    started.current = true

    const start = performance.now()

    function update(now: number) {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = eased * end
      setValue(prefix + current.toFixed(decimals) + suffix)
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(update)
      }
    }

    rafRef.current = requestAnimationFrame(update)
    return () => cancelAnimationFrame(rafRef.current)
  }, [startWhen, end, duration, decimals, prefix, suffix])

  return value
}
