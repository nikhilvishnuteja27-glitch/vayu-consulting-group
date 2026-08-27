import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'VCG Perspectives — Original thinking on execution and transformation'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function PerspectivesOGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#0B0B0D',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '72px 80px',
          fontFamily: 'serif',
        }}
      >
        {/* Accent rule */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '2px',
            background: '#C8A96E',
          }}
        />

        {/* Label */}
        <div
          style={{
            fontSize: '13px',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: '#C8A96E',
            marginBottom: '24px',
            fontFamily: 'sans-serif',
            fontWeight: 400,
          }}
        >
          VCG Perspectives
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: '52px',
            lineHeight: 1.10,
            letterSpacing: '-0.025em',
            color: '#F5F3EE',
            maxWidth: '760px',
            marginBottom: '28px',
          }}
        >
          Original thinking on execution and transformation.
        </div>

        {/* Footer */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <div
            style={{
              fontSize: '15px',
              color: 'rgba(245,243,238,0.38)',
              fontFamily: 'sans-serif',
              fontWeight: 300,
            }}
          >
            vayuconsultinggroup.com/perspectives
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
