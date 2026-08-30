import type { Metadata } from 'next'
import { ArticleLayout, P, H2, H3, Pull, SectionDiv, Diagnostic } from '@/components/perspectives/ArticleLayout'
import { ExecutionDriftDiagram } from '@/components/perspectives/ExecutionDriftDiagram'
import { PERSPECTIVES } from '@/lib/perspectives'

const perspective = PERSPECTIVES.find(p => p.slug === 'transformation-stall')!

export const metadata: Metadata = {
  title: perspective.seoTitle,
  description: perspective.description,
  alternates: {
    canonical: `https://www.vayuconsultinggroup.com${perspective.href}`,
  },
  openGraph: {
    title: perspective.seoTitle,
    description: perspective.socialDescription,
    url: `https://www.vayuconsultinggroup.com${perspective.href}`,
    type: 'article',
    authors: ['Vayu Consulting Group'],
  },
  other: {
    'article:author': 'Vayu Consulting Group',
  },
}

export default function TransformationStallArticle() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: perspective.title,
    description: perspective.description,
    author: { '@type': 'Organization', name: 'Vayu Consulting Group', url: 'https://www.vayuconsultinggroup.com' },
    publisher: { '@type': 'Organization', name: 'Vayu Consulting Group', url: 'https://www.vayuconsultinggroup.com' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://www.vayuconsultinggroup.com${perspective.href}` },
    image: 'https://www.vayuconsultinggroup.com/perspectives/opengraph-image',
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ArticleLayout perspective={perspective}>

        <P>A transformation program can be active, governed, and progressing against plan while the structural conditions that would allow it to converge on its intended outcome are changing underneath.</P>

        <P>Current-state reporting and trajectory analysis are related but different analytical activities. Reporting can accurately describe where a program is. The question this article addresses is distinct: what are present execution conditions implying about where the program is heading?</P>

        <P>Major transformation programs can enter a period between genuinely healthy execution and undeniable visible difficulty. During that period, the transformation appears active — milestones are being hit or recovered, workstreams are staffed, governance is functioning. The structural conditions supporting reliable delivery, however, may be deteriorating. That period, and how executive leadership can recognize it before consequences become fixed, is the subject of this perspective.</P>

        <SectionDiv />

        <H2>Visible Difficulty and Deteriorating Execution Are Not the Same Event</H2>

        <P>When a transformation encounters visible difficulty — missed milestones, budget pressure, formal recovery planning, executive escalation, scope reduction — it has crossed a threshold that program governance is designed to detect. Reporting shifts. Conversations that were manageable become urgent. Sponsors who were informed become more directly involved.</P>

        <P>Visible consequences, however, can emerge after the execution conditions producing them have been developing for some time. The moment of visible difficulty is a single event. The conditions that can produce it may develop across a period preceding it.</P>

        <P>This is not an argument that transformation difficulty is always foreseeable. Strategies encounter problems because external conditions shift, market assumptions prove wrong, or technology constraints emerge that no planning could have anticipated. Those are challenges of a different kind.</P>

        <P>The relevant category here is narrower: transformation programs where the strategy remains viable, the constraints are not primarily external, but execution is losing structural integrity — and that loss has not yet surfaced through the program's reporting.</P>

        <SectionDiv />

        <H2>Execution Drift</H2>

        <P>The concept that best describes this dynamic might be called execution drift — offered here as VCG analytical language rather than an established industry term. It refers to the accumulated divergence between the execution structure a transformation was designed to operate through and the way execution is actually proceeding.</P>

        <ExecutionDriftDiagram />

        <P>Execution drift is distinct from ordinary plan variance. A formally revised scope decision, a reconsidered timeline, a deliberately changed sequencing are forms of managed adaptation — the transformation is changing through deliberate reconsideration. Drift concerns something different: accumulated exceptions, unresolved assumptions, aging dependencies, and persistent workarounds that alter how execution operates without equivalent integrated reconsideration. The execution structure is changing, but that change is not being tracked as a change.</P>

        <Pull>{perspective.pullQuotes[1]}</Pull>

        <P>A decision required before a workstream can proceed gets deferred because the right stakeholders are not yet aligned; it gets carried forward through successive planning cycles. A dependency date moves because a partner team is behind, and downstream work resequences to absorb the delay. A temporary workaround is created to allow a milestone to be recovered; the workaround persists and becomes part of normal execution. A scope assumption intended to be resolved early remains open while work continues on surrounding components.</P>

        <P>None of these decisions is individually irresponsible. The difficulty is accumulation.</P>

        <P>As these exceptions aggregate, the transformation becomes progressively different from its original execution design. Dependencies that were meant to be resolved have aged. Decisions that were meant to precede certain work have been absorbed as operational assumptions. Workarounds that were temporary have become structural.</P>

        <P>The transformation may still be delivering. Reported milestones may remain stable. What has changed is not visible status — it is trajectory.</P>

        <SectionDiv />

        <H2>Why Local Recovery Can Obscure Integrated Health</H2>

        <P>Delivery teams managing complex programs develop real capacity for recovering from execution friction. When a dependency slips, they resequence. When a resource shortfall emerges, they absorb it. When a milestone is at risk, they find a path to recover it.</P>

        <P>When a team successfully recovers a milestone through local adjustment — resequencing, adding a compensating process, creating a workaround — the program's reported status accurately reflects the recovery. The milestone returns to plan. From the executive view, the program has navigated a problem.</P>

        <P>The recovery is real. The analytical question is at a different level: what did the local adjustment change about conditions elsewhere in the program?</P>

        <P>A local resequencing that absorbs one delay may compress work that later needed more time. A workaround that allows a milestone to be recovered may introduce a dependency elsewhere. A team that has compensated for a recurring shortfall in another workstream's output may have built that compensation into its own execution path — a dependency that does not yet appear in formal tracking.</P>

        <Pull>{perspective.pullQuotes[2]}</Pull>

        <P>A program can be recovering well at the local level while integrated execution conditions warrant separate examination.</P>

        <SectionDiv />

        <H2>Status Versus Trajectory</H2>

        <Pull>{perspective.pullQuotes[0]}</Pull>

        <P>Status reporting and trajectory analysis are structurally different activities, and governance can be organized to address both. The distinction this section is concerned with is narrower: a current status can be accurate while the forward execution trajectory is weakening. These conditions can coexist.</P>

        <P>A program dashboard reports current state against plan. Status reporting may also include forward-looking elements — risk registers, dependency logs, lookahead schedules. The point is not that these instruments are insufficient; it is that tracking where a program is, and assessing where current execution conditions are taking it, require examining different things.</P>

        <P>Consider a program reporting its current milestone as on track while three decisions required before the next phase can proceed remain unresolved. The status report is accurate. The trajectory — what current execution conditions imply about delivery confidence going forward — is materially different from what the on-track status conveys. Those decisions are aging. The window to resolve them without affecting subsequent work is narrowing. When that window closes, the choice may no longer be between a resolved decision and an unresolved one — it may be between a resolved decision and a scope or schedule adjustment.</P>

        <P>The period when status is stable but trajectory is weakening is when execution choices may still be available that become progressively constrained once unresolved conditions materialize as scope, schedule, budget, or readiness consequences. It is also the period when trajectory-specific questions may require active examination rather than emerging through routine reporting.</P>

        <SectionDiv />

        <H2>Decision Aging and Dependency Aging</H2>

        <P>Two conditions that characterize the gap between status and trajectory are worth distinguishing.</P>

        <H3>Decision aging</H3>

        <P>Decision aging occurs when a decision persists unresolved beyond the point at which dependent work requires it. As that work continues, the cost of the decision remaining unresolved increases. In programs where governance does not specifically track decision age and forward consequences, the decision may remain compatible with stable reported status until the milestone it was expected to inform is directly affected — at which point options for resolving it cleanly may already be constrained.</P>

        <H3>Dependency aging</H3>

        <P>Dependency aging occurs when a cross-functional dependency — a commitment by one workstream that another's progress requires — persists without confirmed resolution. Early, an unresolved dependency can often be addressed through coordination. As it ages, it can become structural: the workstream requiring it has built around it through workarounds, or is carrying it as deferred risk that is increasingly load-bearing. The point at which such a dependency surfaces in formal escalation may be later than the point at which addressing it was straightforward.</P>

        <P>Both conditions may remain compatible with stable reported status in programs where governance is not specifically organized to track their age and forward dependencies. Their significance is not what they indicate at the moment of observation, but what they imply about what the program will require next.</P>

        <SectionDiv />

        <H2>The Narrowing of Options</H2>

        <P>The consequence of accumulated drift is not a fixed cost — it is a reduction in available choices.</P>

        <P>Early in a transformation, significant structural decisions remain open. Sequencing can be changed. Dependencies can be renegotiated before downstream work has committed to them. Assumptions can be resolved before being absorbed into multiple workstreams. Resources can be reallocated before their absence has been compensated for in ways that are difficult to undo.</P>

        <P>As execution proceeds and drift accumulates, some of those choices may no longer be available without affecting scope, schedule, budget, or operational readiness — not because the transformation has failed, but because decisions that preceded each of those constraints were carried forward without resolution until they were no longer independent of one another.</P>

        <P>Visible difficulty can emerge after the execution conditions producing it have been developing for some time. Recognition can follow from indicators — amber milestones, budget pressure, escalating risks — at a point after the structural conditions behind them have already been in motion. Earlier examination of trajectory, when choices remain open, may leave more options available than examination at the point when visible indicators require response.</P>

        <SectionDiv />

        <H2>What Executive Leadership Should Be Asking</H2>

        <P>Current-state reporting and trajectory analysis require examining different things. The following are trajectory questions — distinct from, and complementary to, the questions that standard status reporting is organized to answer.</P>

        <Diagnostic
          title="Trajectory diagnostic — five questions"
          items={[
            'What decisions are aging? Which decisions that dependent work requires have remained unresolved, and for how long? At what point do they become scope or schedule consequences rather than decisions to be made?',
            'Where are teams operating on persistent workarounds? A workaround created for a specific problem is different from a pattern of workarounds that have become part of normal execution. The second may indicate that an underlying structural condition — a dependency, an authority gap, a resource constraint — is being absorbed rather than resolved.',
            'What assumptions have been carried forward without resolution? In complex programs, assumptions intended to be resolved early can persist through multiple planning cycles. Those assumptions are implicit decisions, and they accumulate drift in the same way explicit decisions do.',
            'Where might the execution layer contain forward-looking information that is summarized differently at the reporting level? The execution layer may hold information about forward risk, decision confidence, and dependency resolution that is compressed in ways that make it less visible above it. Understanding that information directly, where material, is distinct from reviewing the summary.',
            'What choices are available now that may become constrained if current conditions continue? If present execution conditions persist, what sequencing, resource, or dependency decisions that are currently open will become less so in the next phase?',
          ]}
        />

        <P>These questions address trajectory. Alongside the indicators that program governance is organized to surface, they offer a different view of where a transformation is heading — and what it may require next.</P>

      </ArticleLayout>
    </>
  )
}
