import type { Metadata } from 'next'
import JoinPage from './JoinPage'

export const metadata: Metadata = {
  title: 'Join VCG — Vayu Consulting Group',
  description:
    'VCG connects experienced consulting, transformation, delivery, and technology professionals with enterprise initiatives that require demonstrated execution capability. Express your interest in the VCG talent network.',
  alternates: {
    canonical: 'https://www.vayuconsultinggroup.com/join',
  },
  openGraph: {
    title: 'Join VCG — Vayu Consulting Group',
    description:
      'For professionals who have been accountable for enterprise outcomes. Explore how to work with VCG on consulting, transformation, delivery, and specialized capability engagements.',
    url: 'https://www.vayuconsultinggroup.com/join',
    siteName: 'Vayu Consulting Group',
    type: 'website',
  },
}

export default function Page() {
  return <JoinPage />
}
