import type { Metadata } from 'next'
import { Instrument_Serif, DM_Sans, DM_Mono } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { ScrollProgress } from '@/components/layout/ScrollProgress'

const display = Instrument_Serif({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-display-var',
  display: 'swap',
})

const body = DM_Sans({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  variable: '--font-body-var',
  display: 'swap',
})

const mono = DM_Mono({
  weight: ['300', '400'],
  subsets: ['latin'],
  variable: '--font-mono-var',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'VCG — Vayu Consulting Group',
  description: 'Enterprise Capability Infrastructure. VCG deploys elite talent, systems, and operational intelligence to execute what organizations cannot build alone.',
  keywords: ['consulting', 'enterprise', 'technology', 'strategy', 'AI', 'execution'],
  openGraph: {
    title: 'VCG — Vayu Consulting Group',
    description: 'Enterprise Capability Infrastructure. Where strategy becomes execution.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body className="antialiased overflow-x-hidden" style={{ background: '#0B0B0D', color: '#F5F3EE' }}>
        <ScrollProgress />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
