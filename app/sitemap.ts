import type { MetadataRoute } from 'next'
import { getPosts } from '@/lib/cms'
import { absoluteUrl } from '@/content/site'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts()
  const now = new Date()
  const staticPages = ['/', '/portfolio', '/blog', '/about', '/contact'].map((path) => ({
    url: absoluteUrl(path),
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: path === '/' ? 1 : 0.8,
  }))
  const postPages = posts.map((p) => ({
    url: absoluteUrl(`/blog/${p.slug}`),
    lastModified: new Date(p.updatedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))
  return [...staticPages, ...postPages]
}
