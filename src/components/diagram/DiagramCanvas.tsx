'use client'

import { useId } from 'react'

/**
 * DiagramCanvas — lightweight SVG wrapper for VCG execution diagrams.
 *
 * Accessibility contract:
 *   decorative=true  → aria-hidden="true", no title/desc rendered
 *   decorative=false → role="img", title and/or desc surfaced to screen readers
 *
 * Individual diagram components own:
 *   - useInView triggering
 *   - narrative state and timing
 *   - animation sequencing
 *
 * DiagramCanvas does NOT own animation. It provides the accessible SVG shell.
 */

interface DiagramCanvasProps {
  viewBox: string
  decorative?: boolean
  title?: string
  description?: string
  width?: string | number
  height?: string | number
  preserveAspectRatio?: string
  className?: string
  style?: React.CSSProperties
  children: React.ReactNode
}

export function DiagramCanvas({
  viewBox,
  decorative = false,
  title,
  description,
  width = '100%',
  height,
  preserveAspectRatio = 'xMidYMid meet',
  className,
  style,
  children,
}: DiagramCanvasProps) {
  const titleId = useId()
  const descId  = useId()

  const labelledBy = [
    title       && titleId,
    description && descId,
  ].filter(Boolean).join(' ') || undefined

  if (decorative) {
    return (
      <svg
        viewBox={viewBox}
        width={width}
        height={height}
        preserveAspectRatio={preserveAspectRatio}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className={className}
        style={style}
      >
        {children}
      </svg>
    )
  }

  return (
    <svg
      viewBox={viewBox}
      width={width}
      height={height}
      preserveAspectRatio={preserveAspectRatio}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby={labelledBy}
      className={className}
      style={style}
    >
      {title       && <title id={titleId}>{title}</title>}
      {description && <desc  id={descId}>{description}</desc>}
      {children}
    </svg>
  )
}
