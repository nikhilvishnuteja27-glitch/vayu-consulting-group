import { Hero }                  from '@/components/sections/Hero'
import { EditorialProblem }      from '@/components/sections/EditorialProblem'
import { EICenterpiece }         from '@/components/sections/EICenterpiece'
import { CapabilityDiscovery }   from '@/components/sections/CapabilityDiscovery'
import { ExecutionAtRisk }       from '@/components/sections/ExecutionAtRisk'
import { OperatingDifference }   from '@/components/sections/OperatingDifference'
import { PerspectivesPreview }   from '@/components/sections/PerspectivesPreview'
import { CTA }                   from '@/components/sections/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <EditorialProblem />
      <EICenterpiece />
      <CapabilityDiscovery />
      <ExecutionAtRisk />
      <OperatingDifference />
      <PerspectivesPreview />
      <CTA />
    </>
  )
}
