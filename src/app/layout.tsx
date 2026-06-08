import type { Metadata } from 'next'
import { Instrument_Serif, DM_Sans, DM_Mono } from 'next/font/google'
import './globals.css'
import { Navigation }            from '@/components/layout/Navigation'
import { Footer }                from '@/components/layout/Footer'
import { ScrollProgress }        from '@/components/layout/ScrollProgress'
import { ContactModalProvider }  from '@/context/ContactModalContext'
import { ContactModalRoot }      from '@/components/layout/ContactModalRoot'

const display = Instrument_Serif({
  weight: ['400'],
  style:  ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-display-var',
  display: 'swap',
})

const body = DM_Sans({
  weight:  ['300', '400', '500'],
  subsets: ['latin'],
  variable: '--font-body-var',
  display: 'swap',
})

const mono = DM_Mono({
  weight:  ['300', '400'],
  subsets: ['latin'],
  variable: '--font-mono-var',
  display: 'swap',
})

export const metadata: Metadata = {
  title:       'VCG — Vayu Consulting Group',
  description: 'Execution Intelligence for organizations that cannot afford failure. VCG embeds senior operators, AI-enabled governance, and delivery infrastructure into critical initiatives until outcomes are achieved.',
  keywords:    ['execution intelligence', 'enterprise transformation', 'program recovery', 'consulting', 'delivery'],
  openGraph: {
    title:       'VCG — Vayu Consulting Group',
    description: 'Execution Intelligence for organizations where delivery certainty is non-negotiable.',
    type:        'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body className="antialiased overflow-x-hidden" style={{ background: '#0B0B0D', color: '#F5F3EE' }}>
        <ContactModalProvider>
          <ScrollProgress />
          <Navigation />
          <main>{children}</main>
          <Footer />
          {/* Single ContactModal instance for the entire site */}
          <ContactModalRoot />
        </ContactModalProvider>
      </body>
    </html>
  )
}
