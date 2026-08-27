export interface Perspective {
  slug: string
  number: string
  title: string
  deck: string
  date: string
  dateISO: string
  readingTime: string
  href: string
  description: string
}

export const PERSPECTIVES: Perspective[] = [
  {
    slug: 'execution-intelligence',
    number: '001',
    title: 'Execution Intelligence: Why Strategy Breaks Between Decision and Delivery',
    deck: 'Organizations rarely fail because their strategy was wrong. They fail because responsibility fragmented between strategic decision and delivered outcome.',
    date: 'August 2026',
    dateISO: '2026-08-27',
    readingTime: '9 min read',
    href: '/perspectives/execution-intelligence',
    description: 'The strategy-to-execution gap is not a capability deficiency. It is an accountability and ownership problem — and it is predictable, structural, and addressable.',
  },
  {
    slug: 'transformation-stalls',
    number: '002',
    title: 'Why Critical Transformations Stall — Even When the Strategy Is Right',
    deck: 'A sound strategy does not guarantee successful transformation. The failure modes are structural, consistent across programs, and addressable before they materialize.',
    date: 'August 2026',
    dateISO: '2026-08-27',
    readingTime: '10 min read',
    href: '/perspectives/transformation-stalls',
    description: 'Six structural failure modes that cause well-conceived transformations to stall, and the operating principles that address each of them.',
  },
  {
    slug: 'ai-accountability',
    number: '003',
    title: 'AI Will Accelerate Enterprise Execution. It Will Not Replace Accountability.',
    deck: 'AI can materially improve execution infrastructure. It cannot assume organizational accountability. Understanding this distinction determines how to deploy it effectively.',
    date: 'August 2026',
    dateISO: '2026-08-27',
    readingTime: '10 min read',
    href: '/perspectives/ai-accountability',
    description: 'Where AI creates genuine value in complex program delivery — and where organizational accountability remains the irreplaceable constraint.',
  },
]
