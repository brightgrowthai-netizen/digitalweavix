export type FAQ = { question: string; answer: string }

export type Feature = { title: string; description: string }

export type SubService = {
  slug: string
  name: string
  shortDescription: string
  metaTitle: string
  metaDescription: string
  keywords: string[]
  quickAnswer: string
  intro: string
  benefits: Feature[]
  deliverables: string[]
  faqs: FAQ[]
}

export type ServiceIcon = 'palette' | 'printer' | 'megaphone'

export type Service = {
  slug: string
  name: string
  pageTitle?: string
  icon: ServiceIcon
  tagline: string
  shortDescription: string
  metaTitle: string
  metaDescription: string
  keywords: string[]
  heroImage: string
  heroAlt: string
  quickAnswer: string
  intro: string[]
  benefits: Feature[]
  process: Feature[]
  stats: { value: string; label: string }[]
  subServices: SubService[]
  faqs: FAQ[]
}

export type PortfolioItem = {
  slug: string
  title: string
  client: string
  service: string
  category: string
  image: string
  alt: string
  summary: string
  result: string
}

export type BlogPost = {
  slug: string
  title: string
  metaDescription: string
  excerpt: string
  category: string
  service: string
  publishedAt: string
  updatedAt: string
  readingMinutes: number
  image: string
  imageAlt: string
  keyTakeaways: string[]
  sections: { heading: string; paragraphs: string[] }[]
  faqs: FAQ[]
}

export type Testimonial = {
  quote: string
  name: string
  role: string
}
