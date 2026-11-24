import 'server-only'
import { graphicDesign } from '@/content/services/graphic-design'
import { printing } from '@/content/services/printing'
import { digitalMarketing } from '@/content/services/digital-marketing'
import { portfolio, testimonials } from '@/content/portfolio'
import { posts } from '@/content/blog'

/**
 * Single content access layer. Every page reads content through these functions,
 * so swapping the local content files for a headless CMS (e.g. Sanity) only
 * requires changing the implementations here.
 */
const services = [graphicDesign, printing, digitalMarketing]

export async function getServices() {
  return services
}

export async function getService(slug: string) {
  return services.find((service) => service.slug === slug)
}

export async function getSubService(serviceSlug: string, subSlug: string) {
  const service = await getService(serviceSlug)
  const subService = service?.subServices.find((sub) => sub.slug === subSlug)
  return service && subService ? { service, subService } : undefined
}

export async function getNestedSubService(serviceSlug: string, subSlug: string, childSlug: string) {
  const result = await getSubService(serviceSlug, subSlug)
  const subService = result?.subService.children?.find((child) => child.slug === childSlug)
  return result && subService ? { service: result.service, parent: result.subService, subService } : undefined
}

export async function getPortfolio(serviceSlug?: string) {
  return serviceSlug ? portfolio.filter((item) => item.service === serviceSlug) : portfolio
}

export async function getTestimonials() {
  return testimonials
}

export async function getPosts(serviceSlug?: string) {
  const sorted = [...posts].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
  return serviceSlug ? sorted.filter((post) => post.service === serviceSlug) : sorted
}

export async function getPost(slug: string) {
  return posts.find((post) => post.slug === slug)
}
