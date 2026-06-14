import type { MetadataRoute } from 'next'
import { site } from '@/lib/site'
export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url
  return [
    { url: base, lastModified: new Date(), priority: 1 },
    { url: `${base}/about`, lastModified: new Date(), priority: 0.8 },
    { url: `${base}/services`, lastModified: new Date(), priority: 0.9 },
    { url: `${base}/work`, lastModified: new Date(), priority: 0.7 },
    { url: `${base}/contact`, lastModified: new Date(), priority: 0.7 },
  ]
}
