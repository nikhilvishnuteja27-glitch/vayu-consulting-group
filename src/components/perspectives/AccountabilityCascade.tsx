export function AccountabilityCascade() {
  const layers = [
    { label: 'INFORMATION', sub: 'Synthesis and pattern recognition at scale', fill: 'rgba(17,18,20,0.05)' },
    { label: 'INTELLIGENCE', sub: 'Analysis, scenario modeling, decision inputs', fill: 'rgba(17,18,20,0.09)' },
    { label: 'DECISION', sub: 'Judgment under uncertainty — requires authority', fill: 'rgba(200,169,110,0.14)' },
    { label: 'ACCOUNTABILITY', sub: 'Outcome ownership — cannot be delegated to a system', fill: 'rgba(17,18,20,0.88)' },
  ]

  const rowH = 54
  const gap = 8
  const svgH = layers.length * rowH + (layers.length - 1) * gap + 80

  return (
    <figure style={{ margin: '2.5rem 0', padding: '2rem 1.5rem 1.75rem', background: '#F5F3EE', borderRadius: '4px', border: '1px solid rgba(17,18,20,0.07)' }}>
      <svg
        viewBox={`0 0 580 ${svgH}`}
        width="100%"
        height="auto"
        aria-label="Four-layer model: Information, Intelligence, Decision, Accountability"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Side label */}
        <text x="12" y={svgH / 2 - 8} fontSize="8" fontFamily="'DM Mono', monospace" fill="rgba(17,18,20,0.28)" letterSpacing="0.08em" textAnchor="middle" transform={`rotate(-90,12,${svgH / 2 - 8})`}>AI TERRITORY</text>
        <line x1="22" y1="16" x2="22" y2={(rowH + gap) * 2 - 10} stroke="rgba(17,18,20,0.14)" strokeWidth="1" />

        {/* Boundary marker between DECISION and ACCOUNTABILITY */}
        <line
          x1="28"
          y1={(rowH + gap) * 2 + rowH / 2 + gap / 2}
          x2="556"
          y2={(rowH + gap) * 2 + rowH / 2 + gap / 2}
          stroke="#C8A96E"
          strokeWidth="1.5"
          strokeDasharray="4 3"
          opacity="0.7"
        />
        <text
          x="558"
          y={(rowH + gap) * 2 + rowH / 2 + gap / 2 + 4}
          fontSize="7.5"
          fontFamily="'DM Mono', monospace"
          fill="#C8A96E"
          letterSpacing="0.06em"
          textAnchor="end"
          opacity="0.85"
        >
          ORGANIZATIONAL BOUNDARY
        </text>

        {layers.map((layer, i) => {
          const y = i * (rowH + gap)
          const isLast = i === layers.length - 1
          const textColor = isLast ? '#F5F3EE' : 'rgba(17,18,20,0.80)'
          const subColor = isLast ? 'rgba(245,243,238,0.50)' : 'rgba(17,18,20,0.38)'
          const borderColor = isLast ? 'transparent' : 'rgba(17,18,20,0.10)'

          return (
            <g key={layer.label}>
              <rect x="28" y={y} width="528" height={rowH} rx="3" fill={layer.fill} stroke={borderColor} strokeWidth="1" />
              <text x="48" y={y + rowH / 2 - 5} fontSize="10" fontFamily="'DM Mono', monospace" fill={textColor} fontWeight="500" letterSpacing="0.10em">
                {layer.label}
              </text>
              <text x="48" y={y + rowH / 2 + 9} fontSize="9.5" fontFamily="var(--font-body, sans-serif)" fill={subColor} letterSpacing="0.01em">
                {layer.sub}
              </text>
              {/* Arrow connector */}
              {!isLast && (
                <path
                  d={`M286,${y + rowH + 1} L286,${y + rowH + gap - 1}`}
                  stroke="rgba(17,18,20,0.18)"
                  strokeWidth="1"
                  markerEnd="url(#arrow)"
                />
              )}
            </g>
          )
        })}

        <defs>
          <marker id="arrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
            <path d="M0,1 L6,3 L0,5 Z" fill="rgba(17,18,20,0.18)" />
          </marker>
        </defs>
      </svg>
      <figcaption style={{ marginTop: '0.75rem', fontSize: '0.75rem', fontFamily: 'var(--font-body)', color: 'rgba(17,18,20,0.36)', lineHeight: 1.55 }}>
        AI systems can increasingly support the upper layers of this model at scale. The organizational design question is what structure governs the boundary between intelligence and decision — and who owns the outcome at the accountability layer.
      </figcaption>
    </figure>
  )
}
