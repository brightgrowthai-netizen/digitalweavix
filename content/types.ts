export type FAQ = { question: string; answer: string }

export type PortfolioItem = {
  slug: string
  title: string
  client: string
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

export type Subservice = {
  slug: string
  name: string
  description: string
  points: string[]
}

export type Service = {
  slug: string
  name: string
  title: string
  description: string
  quickAnswer: string
  image: string
  imageAlt: string
  subservices: Subservice[]
  faqs: FAQ[]
}
