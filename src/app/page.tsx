import { Hero }                  from '@/components/sections/Hero'
import { BuiltFor }              from '@/components/sections/BuiltFor'
import { ExecutionGap }          from '@/components/sections/ExecutionGap'
import { WhenToCall }            from '@/components/sections/WhenToCall'
import { ExecutionIntelligence } from '@/components/sections/ExecutionIntelligence'
import { ExecutionModel }        from '@/components/sections/ExecutionModel'
import { EngagementStructure }   from '@/components/sections/EngagementStructure'
import { WhatWeDeliver }         from '@/components/sections/WhatWeDeliver'
import { VCGDifference }         from '@/components/sections/VCGDifference'
import { WhyVCG }                from '@/components/sections/WhyVCG'
import { FounderPerspective }    from '@/components/sections/FounderPerspective'
import { Insights }              from '@/components/sections/Insights'
import { AIExecution }           from '@/components/sections/AIExecution'
import { AfterEngagement }       from '@/components/sections/AfterEngagement'
import { CTA }                   from '@/components/sections/CTA'

export default function Home() {
  return (
    <>
      {/* Obsidian — Problem */}
      <Hero />

      {/* White — Self-identification */}
      <BuiltFor />

      {/* White — Diagnosis */}
      <ExecutionGap />

      {/* Warm White — Urgency */}
      <WhenToCall />

      {/* Warm White — Category + Proof */}
      <ExecutionIntelligence />

      {/* White — Branded framework */}
      <ExecutionModel />

      {/* Warm White — Process clarity */}
      <EngagementStructure />

      {/* White — Outcomes */}
      <WhatWeDeliver />

      {/* Obsidian — Model contrast */}
      <VCGDifference />

      {/* Warm White — Conviction */}
      <WhyVCG />

      {/* White — Origin */}
      <FounderPerspective />

      {/* White — Category building */}
      <Insights />

      {/* Obsidian — Infrastructure */}
      <AIExecution />

      {/* White — Emotional resolution / success state */}
      <AfterEngagement />

      {/* Obsidian — Action */}
      <CTA />
    </>
  )
}
