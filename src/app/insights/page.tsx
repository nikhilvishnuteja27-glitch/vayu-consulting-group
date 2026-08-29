import type { Metadata } from 'next'
import { InsightsHub } from '@/components/sections/InsightsHub'

export const metadata: Metadata = {
  title: 'Insights — Vayu Consulting Group',
  description: 'Research and analysis on enterprise execution — how major initiatives succeed or fail in delivery, and what executive leadership can do about it.',
  alternates: {
    canonical: 'https://www.vayuconsultinggroup.com/insights',
  },
  openGraph: {
    title: 'Insights — Vayu Consulting Group',
    description: 'Research and analysis on enterprise execution — how major initiatives succeed or fail in delivery, and what executive leadership can do about it.',
    url: 'https://www.vayuconsultinggroup.com/insights',
    type: 'website',
  },
}

export default function InsightsPage() {
  return <InsightsHub />
}
