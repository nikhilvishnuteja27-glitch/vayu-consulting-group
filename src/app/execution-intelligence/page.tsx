import type { Metadata } from 'next'
import ExecutionIntelligencePage from './ExecutionIntelligencePage'

export const metadata: Metadata = {
  title: 'Execution Intelligence — Vayu Consulting Group',
  description:
    'A diagnostic framework built on five structural dimensions — Accountability, Decision Architecture, Executive Visibility, Dependency Ownership, and Outcome Discipline — that determine whether enterprise initiatives deliver.',
  alternates: {
    canonical: 'https://www.vayuconsultinggroup.com/execution-intelligence',
  },
  openGraph: {
    title: 'Execution Intelligence — Vayu Consulting Group',
    description:
      'A diagnostic framework built on five structural dimensions — Accountability, Decision Architecture, Executive Visibility, Dependency Ownership, and Outcome Discipline — that determine whether enterprise initiatives deliver.',
    url: 'https://www.vayuconsultinggroup.com/execution-intelligence',
    type: 'website',
  },
}

export default function Page() {
  return <ExecutionIntelligencePage />
}
