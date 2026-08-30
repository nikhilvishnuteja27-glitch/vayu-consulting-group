import type { Metadata } from 'next'
import WhatWeDoPage from './WhatWeDoPage'

export const metadata: Metadata = {
  title: 'What We Do — Vayu Consulting Group',
  description:
    'VCG engages through Consulting & Transformation, Project & Delivery Teams, and Specialized Talent — each path structured around what the initiative requires to deliver its intended outcome.',
  alternates: {
    canonical: 'https://www.vayuconsultinggroup.com/what-we-do',
  },
  openGraph: {
    title: 'What We Do — Vayu Consulting Group',
    description:
      'VCG engages through Consulting & Transformation, Project & Delivery Teams, and Specialized Talent — each path structured around what the initiative requires to deliver its intended outcome.',
    url: 'https://www.vayuconsultinggroup.com/what-we-do',
    type: 'website',
  },
}

export default function Page() {
  return <WhatWeDoPage />
}
