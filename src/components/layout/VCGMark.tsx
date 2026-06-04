'use client'

/**
 * VCGMark — Vayu Consulting Group blade mark.
 *
 * Exact paths from the official brand SVG, cropped tight to content.
 * Original viewBox: 0 0 1024 1024  (content lives in ~195–780, ~240–635)
 * Cropped viewBox:  195 240 590 400  → aspect ratio ≈ 1.475 : 1
 *
 * Props:
 *   size     — rendered HEIGHT in px (width calculated from aspect ratio)
 *   variant  — 'light'  warm-white fill, for dark backgrounds  (default)
 *              'dark'   obsidian fill,   for light backgrounds
 */

const VB_X = 195, VB_Y = 240, VB_W = 590, VB_H = 400
const ASPECT = VB_W / VB_H   // ≈ 1.475

interface VCGMarkProps {
  size?:    number
  variant?: 'light' | 'dark'
}

export function VCGMark({ size = 36, variant = 'light' }: VCGMarkProps) {
  const h   = size
  const w   = Math.round(size * ASPECT)
  const col = variant === 'dark' ? '#0B0B0D' : '#F5F3EE'

  return (
    <svg
      width={w}
      height={h}
      viewBox={`${VB_X} ${VB_Y} ${VB_W} ${VB_H}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="VCG — Vayu Consulting Group"
      role="img"
      style={{ display: 'block', flexShrink: 0 }}
    >
      {/* Upper blade */}
      <path
        fill={col}
        d="M240 420C342 414 400 352 466 318C535 282 641 275 760 260C642 310 566 345 500 390C420 445 335 468 240 420Z"
      />
      {/* Lower blade */}
      <path
        fill={col}
        d="M210 580C318 572 397 528 468 480C547 427 623 409 700 430C634 466 591 509 538 544C462 594 346 620 210 580Z"
      />
    </svg>
  )
}
