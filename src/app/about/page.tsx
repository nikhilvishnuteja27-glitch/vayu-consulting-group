import type { Metadata } from 'next'
import AboutPage from './AboutPage'

export const metadata: Metadata = {
  title: 'About VCG — Vayu Consulting Group',
  description:
    'An execution consulting firm built to close the gap between strategy and delivered outcomes. Structured around operating principles, embedded delivery, and a defined talent standard.',
  alternates: {
    canonical: 'https://www.vayuconsultinggroup.com/about',
  },
  openGraph: {
    title: 'About VCG — Vayu Consulting Group',
    description:
      'An execution consulting firm built to close the gap between strategy and delivered outcomes. Structured around operating principles, embedded delivery, and a defined talent standard.',
    url: 'https://www.vayuconsultinggroup.com/about',
    type: 'website',
  },
}

export default function Page() {
  return <AboutPage />
}
