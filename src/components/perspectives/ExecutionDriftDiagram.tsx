export function ExecutionDriftDiagram() {
  return (
    <figure style={{ margin: '2.5rem 0', padding: '2rem 1.5rem 1.75rem', background: '#F5F3EE', borderRadius: '4px', border: '1px solid rgba(17,18,20,0.07)' }}>
      <svg
        viewBox="0 0 640 280"
        width="100%"
        height="auto"
        aria-label="Execution Drift diagram: two paths diverge over time — Transformation as Designed and Transformation as Executed"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Y-axis label */}
        <text x="14" y="48" fontSize="9" fontFamily="'DM Mono', monospace" fill="rgba(17,18,20,0.32)" letterSpacing="0.05em" textAnchor="middle" transform="rotate(-90,14,140)">EXECUTION TRAJECTORY</text>

        {/* X-axis line */}
        <line x1="52" y1="238" x2="612" y2="238" stroke="rgba(17,18,20,0.10)" strokeWidth="1" />

        {/* X-axis labels */}
        <text x="52"  y="254" fontSize="9" fontFamily="'DM Mono', monospace" fill="rgba(17,18,20,0.30)" letterSpacing="0.04em" textAnchor="middle">AUTHORIZATION</text>
        <text x="220" y="254" fontSize="9" fontFamily="'DM Mono', monospace" fill="rgba(17,18,20,0.30)" letterSpacing="0.04em" textAnchor="middle">EARLY EXECUTION</text>
        <text x="400" y="254" fontSize="9" fontFamily="'DM Mono', monospace" fill="rgba(17,18,20,0.30)" letterSpacing="0.04em" textAnchor="middle">MID-TRANSFORMATION</text>
        <text x="590" y="254" fontSize="9" fontFamily="'DM Mono', monospace" fill="rgba(17,18,20,0.30)" letterSpacing="0.04em" textAnchor="middle">DELIVERY</text>

        {/* "As Designed" path — stays level */}
        <path
          d="M52,110 C120,110 180,108 220,107 C310,105 360,103 400,101 C470,98 530,97 590,95"
          fill="none"
          stroke="#111214"
          strokeWidth="1.5"
          strokeDasharray="6 4"
          opacity="0.35"
        />

        {/* "As Executed" path — drifts downward */}
        <path
          d="M52,110 C100,112 160,118 220,126 C300,138 360,152 400,168 C460,190 520,208 590,224"
          fill="none"
          stroke="#C8A96E"
          strokeWidth="2"
        />

        {/* Fill between the paths */}
        <path
          d="M52,110 C100,112 160,118 220,126 C300,138 360,152 400,168 C460,190 520,208 590,224 L590,95 C530,97 470,98 400,101 C360,103 310,105 220,107 C180,108 120,110 52,110 Z"
          fill="#C8A96E"
          opacity="0.07"
        />

        {/* Drift gap annotation at mid-point */}
        <line x1="400" y1="101" x2="400" y2="168" stroke="rgba(17,18,20,0.18)" strokeWidth="1" strokeDasharray="3 3" />
        <text x="406" y="130" fontSize="8" fontFamily="'DM Mono', monospace" fill="rgba(17,18,20,0.40)" letterSpacing="0.04em">ACCUMULATED</text>
        <text x="406" y="140" fontSize="8" fontFamily="'DM Mono', monospace" fill="rgba(17,18,20,0.40)" letterSpacing="0.04em">DRIFT</text>

        {/* Dot markers at origin */}
        <circle cx="52" cy="110" r="3.5" fill="#111214" opacity="0.45" />

        {/* Legend */}
        <line x1="52" y1="274" x2="72" y2="274" stroke="#111214" strokeWidth="1.5" strokeDasharray="5 3" opacity="0.35" />
        <text x="76" y="277" fontSize="8.5" fontFamily="'DM Mono', monospace" fill="rgba(17,18,20,0.38)" letterSpacing="0.04em">Transformation as designed</text>
        <line x1="260" y1="274" x2="280" y2="274" stroke="#C8A96E" strokeWidth="2" />
        <text x="284" y="277" fontSize="8.5" fontFamily="'DM Mono', monospace" fill="rgba(17,18,20,0.38)" letterSpacing="0.04em">Transformation as executed</text>
      </svg>
      <figcaption style={{ marginTop: '0.75rem', fontSize: '0.75rem', fontFamily: 'var(--font-body)', color: 'rgba(17,18,20,0.36)', lineHeight: 1.55 }}>
        Execution drift accumulates through individually rational decisions. Status reporting captures where the executed path is; it does not surface where the gap is heading.
      </figcaption>
    </figure>
  )
}
