import 'server-only'
import { portfolio, testimonials } from '@/content/portfolio'
import { posts } from '@/content/blog'

/**
 * Single content access layer. Every page reads content through these functions,
 * so swapping the local content files for a headless CMS (e.g. Sanity) only
 * requires changing the implementations here.
 */
export async function getPortfolio() {
  return portfolio
}

export async function getTestimonials() {
  return testimonials
}

export async function getPosts() {
  return [...posts].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
}

export async function getPost(slug: string) {
  return posts.find((post) => post.slug === slug)
}
