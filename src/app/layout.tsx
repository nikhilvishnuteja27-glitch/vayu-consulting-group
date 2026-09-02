import type { Metadata } from 'next'
import { Instrument_Serif, DM_Sans, DM_Mono } from 'next/font/google'
import './globals.css'
import { Navigation }            from '@/components/layout/Navigation'
import { Footer }                from '@/components/layout/Footer'
import { ScrollProgress }        from '@/components/layout/ScrollProgress'
import { ContactModalProvider }  from '@/context/ContactModalContext'
import { ContactModalRoot }      from '@/components/layout/ContactModalRoot'
import { MotionProvider }        from '@/components/layout/MotionProvider'
import { GoogleAnalytics }       from '@/components/analytics/GoogleAnalytics'

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
  metadataBase: new URL('https://www.vayuconsultinggroup.com'),
  title: 'Vayu Consulting Group | Execution Intelligence & Enterprise Delivery',
  description: 'Execution Intelligence for organizations that cannot afford failure. VCG embeds senior operators, AI-enabled governance, and delivery infrastructure into critical initiatives until outcomes are achieved.',
  keywords: ['execution intelligence', 'enterprise transformation', 'program recovery', 'consulting', 'delivery'],
  openGraph: {
    title:       'Vayu Consulting Group | Execution Intelligence & Enterprise Delivery',
    description: 'Execution Intelligence for organizations where delivery certainty is non-negotiable.',
    type:        'website',
    url:         'https://www.vayuconsultinggroup.com',
    siteName:    'Vayu Consulting Group',
  },
  alternates: {
    canonical: 'https://www.vayuconsultinggroup.com',
  },
  robots: {
    index:  true,
    follow: true,
  },
  twitter: {
    card: 'summary_large_image',
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://www.vayuconsultinggroup.com/#organization',
      name: 'Vayu Consulting Group',
      legalName: 'Vayu Consulting Group Inc.',
      url: 'https://www.vayuconsultinggroup.com',
      email: 'info@vayuconsultinggroup.com',
      telephone: '+13122700009',
      sameAs: ['https://linkedin.com/company/vayu-consulting-group'],
      description: 'Execution consulting firm that closes the gap between strategy and delivered outcomes through embedded senior operators and AI-enabled delivery infrastructure.',
      address: [
        {
          '@type': 'PostalAddress',
          name: 'Headquarters',
          streetAddress: '585 Heritage Dr, Unit 201',
          addressLocality: 'Hoffman Estates',
          addressRegion: 'IL',
          postalCode: '60169',
          addressCountry: 'US',
        },
        {
          '@type': 'PostalAddress',
          name: 'Tirupati Office',
          streetAddress: '22/6/167/2 Sai Ganesh Layout, Akarampalli',
          addressLocality: 'Tirupati',
          addressRegion: 'Andhra Pradesh',
          postalCode: '517501',
          addressCountry: 'IN',
        },
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.vayuconsultinggroup.com/#website',
      name: 'Vayu Consulting Group',
      url: 'https://www.vayuconsultinggroup.com',
      publisher: { '@id': 'https://www.vayuconsultinggroup.com/#organization' },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body className="antialiased overflow-x-hidden" style={{ background: '#0B0B0D', color: '#F5F3EE' }}>
        {/* Skip navigation link — hidden off-screen by default, visible on keyboard focus */}
        <a
          href="#main-content"
          className="skip-link"
          style={{
            position: 'absolute',
            left: '-9999px',
            top: 'auto',
            width: '1px',
            height: '1px',
            overflow: 'hidden',
          }}
        >
          Skip to main content
        </a>
        <GoogleAnalytics />
        <MotionProvider>
          <ContactModalProvider>
            <ScrollProgress />
            <Navigation />
            <main id="main-content">{children}</main>
            <Footer />
            {/* Single ContactModal instance for the entire site */}
            <ContactModalRoot />
          </ContactModalProvider>
        </MotionProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  )
}
