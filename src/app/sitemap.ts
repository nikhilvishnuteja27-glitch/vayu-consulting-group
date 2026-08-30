import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.vayuconsultinggroup.com'

  return [
    {
      url: base,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${base}/execution-intelligence`,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${base}/what-we-do`,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${base}/how-we-work`,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${base}/about`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${base}/join`,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${base}/insights`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${base}/perspectives/execution-intelligence`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${base}/perspectives/transformation-stall`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${base}/perspectives/ai-execution-accountability`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${base}/privacy`,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${base}/terms`,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
