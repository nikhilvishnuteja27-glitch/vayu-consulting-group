import { Hero } from '@/components/sections/Hero'
import { Statement } from '@/components/sections/Statement'
import { Positioning } from '@/components/sections/Positioning'
import { Capabilities } from '@/components/sections/Capabilities'
import { ExecutionModel } from '@/components/sections/ExecutionModel'
import { AIInfrastructure } from '@/components/sections/AIInfrastructure'
import { TrustSignals } from '@/components/sections/TrustSignals'
import { CTA } from '@/components/sections/CTA'
import { Marquee } from '@/components/ui/Marquee'

const MARQUEE_ITEMS = [
  'Strategy',
  'Execution',
  'Technology',
  'Intelligence',
  'Accountability',
  'Delivery',
  'Precision',
  'Leadership',
  'Enterprise',
  'Innovation',
]

export default function Home() {
  return (
    <>
      <Hero />
      <Statement />

      {/* Marquee strip — architectural section divider */}
      <div className="marquee-strip" aria-hidden>
        <Marquee items={MARQUEE_ITEMS} speed={42} />
      </div>

      <Positioning />
      <Capabilities />
      <ExecutionModel />
      <AIInfrastructure />
      <TrustSignals />
      <CTA />
    </>
  )
}
