import type { MetadataRoute } from 'next'
import { getPosts, getServices } from '@/lib/cms'
import { absoluteUrl } from '@/content/site'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [posts, services] = await Promise.all([getPosts(), getServices()])
  const now = new Date()
  const staticPages = ['/', '/services', '/portfolio', '/blog', '/about', '/contact'].map((path) => ({
    url: absoluteUrl(path),
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: path === '/' ? 1 : 0.8,
  }))
  const servicePages = services.map((service) => ({
    url: absoluteUrl(`/services/${service.slug}`),
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))
  const subservicePages = services.flatMap((service) =>
    service.subservices.map((sub) => ({
      url: absoluteUrl(`/services/${service.slug}/${sub.slug}`),
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
  )
  const postPages = posts.map((p) => ({
    url: absoluteUrl(`/blog/${p.slug}`),
    lastModified: new Date(p.updatedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))
  return [...staticPages, ...servicePages, ...subservicePages, ...postPages]
}
