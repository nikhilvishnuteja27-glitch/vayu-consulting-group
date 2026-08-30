'use client'

/**
 * BOUNDARY — an organizational, system, or ownership boundary in a VCG diagram.
 *
 * Renders as a dashed rect consuming `--diagram-boundary`.
 * Static by design — boundaries are structural, not animated.
 * An optional label renders above the boundary using the mono typeface.
 *
 * Label positioning:
 *   labelX defaults to `x`
 *   labelY defaults to `y - 6` (above the top edge)
 */

interface BoundaryProps {
  x: number
  y: number
  width: number
  height: number
  rx?: number
  label?: string
  labelX?: number
  labelY?: number
  style?: React.CSSProperties
  className?: string
}

export function Boundary({
  x,
  y,
  width,
  height,
  rx = 2,
  label,
  labelX,
  labelY,
  style,
  className,
}: BoundaryProps) {
  const lx = labelX ?? x
  const ly = labelY ?? y - 6

  return (
    <g className={className} style={style}>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx={rx}
        fill="none"
        stroke="var(--diagram-boundary)"
        strokeWidth={0.75}
        strokeDasharray="4 3"
      />
      {label && (
        <text
          x={lx}
          y={ly}
          fill="var(--diagram-boundary)"
          style={{
            fontFamily: 'var(--font-mono-var, monospace)',
            fontSize: 7,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
          }}
        >
          {label}
        </text>
      )}
    </g>
  )
}
