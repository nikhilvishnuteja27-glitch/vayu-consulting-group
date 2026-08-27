import { ImageResponse } from 'next/og'

export const alt = 'Vayu Consulting Group — Execution Intelligence'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
          background: '#0B0B0D',
          padding: '80px',
          position: 'relative',
        }}
      >
        {/* Top label */}
        <div
          style={{
            position: 'absolute',
            top: '80px',
            left: '80px',
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
          }}
        >
          <div style={{ width: '24px', height: '1px', background: 'rgba(245,243,238,0.20)' }} />
          <span
            style={{
              color: 'rgba(245,243,238,0.28)',
              fontSize: '11px',
              letterSpacing: '0.18em',
              fontFamily: 'sans-serif',
              textTransform: 'uppercase',
            }}
          >
            Vayu Consulting Group
          </span>
        </div>

        {/* Accent line */}
        <div
          style={{
            width: '48px',
            height: '2px',
            background: '#C8A96E',
            marginBottom: '28px',
            opacity: 0.7,
          }}
        />

        {/* Headline */}
        <div
          style={{
            color: '#F5F3EE',
            fontSize: '72px',
            fontFamily: 'serif',
            fontWeight: 400,
            lineHeight: 1.06,
            letterSpacing: '-0.032em',
            marginBottom: '24px',
            maxWidth: '900px',
          }}
        >
          Execution Intelligence
        </div>

        {/* Subline */}
        <div
          style={{
            color: 'rgba(245,243,238,0.38)',
            fontSize: '22px',
            fontFamily: 'sans-serif',
            fontWeight: 300,
            letterSpacing: '0.01em',
            lineHeight: 1.5,
          }}
        >
          For organizations that cannot afford failure.
        </div>

        {/* Bottom right — URL */}
        <div
          style={{
            position: 'absolute',
            bottom: '48px',
            right: '80px',
            color: 'rgba(245,243,238,0.16)',
            fontSize: '12px',
            fontFamily: 'sans-serif',
            letterSpacing: '0.06em',
          }}
        >
          vayuconsultinggroup.com
        </div>
      </div>
    ),
    { ...size }
  )
}
