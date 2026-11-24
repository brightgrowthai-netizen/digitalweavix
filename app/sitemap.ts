import type { MetadataRoute } from 'next'
import { getPosts, getServices } from '@/lib/cms'
import { absoluteUrl } from '@/content/site'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [services, posts] = await Promise.all([getServices(), getPosts()])
  const now = new Date()
  const staticPages = ['/', '/services', '/portfolio', '/blog', '/about', '/contact'].map((path) => ({
    url: absoluteUrl(path),
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: path === '/' ? 1 : 0.8,
  }))
  const servicePages = services.flatMap((s) => [
    { url: absoluteUrl(`/services/${s.slug}`), lastModified: now, changeFrequency: 'weekly' as const, priority: 0.95 },
    ...s.subServices.flatMap((sub) => [
      { url: absoluteUrl(`/services/${s.slug}/${sub.slug}`), lastModified: now, changeFrequency: 'monthly' as const, priority: 0.85 },
      ...(sub.children ?? []).map((child) => ({
        url: absoluteUrl(`/services/${s.slug}/${sub.slug}/${child.slug}`),
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      })),
    ]),
  ])
  const postPages = posts.map((p) => ({
    url: absoluteUrl(`/blog/${p.slug}`),
    lastModified: new Date(p.updatedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))
  return [...staticPages, ...servicePages, ...postPages]
}
