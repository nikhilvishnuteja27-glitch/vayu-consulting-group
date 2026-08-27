import { Hero }                  from '@/components/sections/Hero'
import { ExecutionGap }          from '@/components/sections/ExecutionGap'
import { WhatVCGDoes }           from '@/components/sections/WhatVCGDoes'
import { ExecutionIntelligence } from '@/components/sections/ExecutionIntelligence'
import { ExecutionModel }        from '@/components/sections/ExecutionModel'
import { WhenToCall }            from '@/components/sections/WhenToCall'
import { VCGDifference }         from '@/components/sections/VCGDifference'
import { WhyVCG }                from '@/components/sections/WhyVCG'
import { CTA }                   from '@/components/sections/CTA'

export default function Home() {
  return (
    <>
      {/* Obsidian — Problem */}
      <Hero />

      {/* White — Diagnosis */}
      <ExecutionGap />

      {/* Warm White — Engagement paths */}
      <WhatVCGDoes />

      {/* White — Category positioning */}
      <ExecutionIntelligence />

      {/* Warm White — Branded framework */}
      <ExecutionModel />

      {/* Warm White — Self-identification */}
      <WhenToCall />

      {/* Obsidian — Model contrast */}
      <VCGDifference />

      {/* White — Conviction */}
      <WhyVCG />

      {/* Obsidian — Action */}
      <CTA />
    </>
  )
}
