import type { Metadata } from 'next'
import HowWeWorkPage from './HowWeWorkPage'

export const metadata: Metadata = {
  title: 'How We Work — Vayu Consulting Group',
  description:
    "VCG's engagement model — Assess, Assemble, Embed, Deliver — is structured to establish execution accountability before work begins and maintain it through verified outcome.",
  alternates: {
    canonical: 'https://www.vayuconsultinggroup.com/how-we-work',
  },
  openGraph: {
    title: 'How We Work — Vayu Consulting Group',
    description:
      "VCG's engagement model — Assess, Assemble, Embed, Deliver — is structured to establish execution accountability before work begins and maintain it through verified outcome.",
    url: 'https://www.vayuconsultinggroup.com/how-we-work',
    type: 'website',
  },
}

export default function Page() {
  return <HowWeWorkPage />
}
