export interface Perspective {
  slug: string
  number: string
  title: string
  subtitle: string
  deck: string
  date: string
  dateISO: string
  readingTime: string
  href: string
  description: string
  seoTitle: string
  socialDescription: string
  pullQuotes: [string, string, string]
}

export const PERSPECTIVES: Perspective[] = [
  {
    slug: 'execution-intelligence',
    number: '01',
    title: 'Execution Intelligence: Why Strategy Breaks Between Decision and Delivery',
    subtitle: 'Structural conditions for delivery are distinct from strategy — and they require a separate decision.',
    deck: 'Why sound enterprise strategies can still fail in delivery — and five structural conditions that shape execution reliability.',
    date: 'August 2026',
    dateISO: '2026-08-01',
    readingTime: '8 min read',
    href: '/perspectives/execution-intelligence',
    description: 'A framework for five structural conditions that affect whether an enterprise initiative delivers its intended outcome — and why strategy approval and execution readiness are not the same decision.',
    seoTitle: 'Execution Intelligence: Why Strategy Breaks Between Decision and Delivery',
    socialDescription: 'Strategic intent is concentrated. Execution is distributed. Between them is a structural gap that can shape whether an initiative delivers — one that can be addressed before problems become visible.',
    pullQuotes: [
      'Concentrated accountability means a single individual or structure is responsible for the outcome from authorization to delivery — not for activities, not for workstreams, but for the outcome itself.',
      'Strategy approval and execution readiness are not the same decision.',
      'Functional accountability and integrated accountability are related but different. The presence of the first does not ensure the second.',
    ],
  },
  {
    slug: 'transformation-stall',
    number: '02',
    title: 'Why Critical Transformations Stall — Even When the Strategy Is Right',
    subtitle: 'A transformation can be progressing against plan while its execution conditions are heading somewhere different. Status and trajectory are not the same question.',
    deck: 'Why a transformation can be active, governed, and progressing while losing execution integrity — and what executives should be asking about trajectory alongside status.',
    date: 'August 2026',
    dateISO: '2026-08-01',
    readingTime: '8 min read',
    href: '/perspectives/transformation-stall',
    description: 'How enterprise transformations can lose execution integrity before it surfaces in program reporting — and why current status and forward trajectory are different analytical questions.',
    seoTitle: 'Why Transformations Stall — and How Status Can Diverge From Trajectory',
    socialDescription: 'Program governance can tell you where your transformation is. A different question — where current execution conditions are taking it — requires a different kind of examination.',
    pullQuotes: [
      'Status describes where a transformation is. Trajectory describes where current execution conditions are taking it.',
      'Drift accumulates through individually rational decisions. The difficulty is accumulation.',
      'Local recovery and integrated execution health are different levels of analysis.',
    ],
  },
  {
    slug: 'ai-execution-accountability',
    number: '03',
    title: 'AI Will Accelerate Enterprise Execution. It Will Not Replace Accountability.',
    subtitle: 'As AI systems take on more of what enterprise execution requires, the organizational design question becomes more consequential — who has authority, who validates, and who owns the outcome.',
    deck: 'Where AI can support enterprise execution, where organizational accountability must remain explicit, and why accountability architecture becomes more consequential as AI capability expands.',
    date: 'August 2026',
    dateISO: '2026-08-01',
    readingTime: '8 min read',
    href: '/perspectives/ai-execution-accountability',
    description: 'A framework for understanding where AI can support enterprise execution — and why expanding AI capability makes explicit accountability architecture more consequential, not less.',
    seoTitle: 'AI in Enterprise Execution — and Why Organizational Accountability Must Be Designed',
    socialDescription: 'AI can support synthesis, analysis, and decision inputs at scale. It does not establish who is accountable for what it influences. As AI participation in execution expands, that organizational design question becomes more important to address explicitly.',
    pullQuotes: [
      'One way to understand AI\'s role in enterprise execution is as an amplifier of the execution system it enters.',
      'The question for enterprise leadership is not only what can be automated. It is also what accountability structure must exist around what is automated.',
      'Accountability does not transfer to the system that provided the input.',
    ],
  },
]
