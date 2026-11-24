import { absoluteUrl, siteConfig } from '@/content/site'
import type { BlogPost, FAQ } from '@/content/types'

const orgId = `${siteConfig.url}/#organization`

function postalAddress() {
  const { street, city, region, postalCode, country } = siteConfig.address
  if (!city && !country) return undefined
  return {
    '@type': 'PostalAddress',
    streetAddress: street || undefined,
    addressLocality: city || undefined,
    addressRegion: region || undefined,
    postalCode: postalCode || undefined,
    addressCountry: country || undefined,
  }
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'ProfessionalService'],
    '@id': orgId,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: absoluteUrl(siteConfig.logo),
    image: absoluteUrl(siteConfig.ogImage),
    description: siteConfig.description,
    slogan: siteConfig.tagline,
    email: siteConfig.email,
    telephone: `+${siteConfig.whatsappNumber}`,
    priceRange: siteConfig.priceRange,
    address: postalAddress(),
    areaServed: siteConfig.areaServed,
    openingHours: siteConfig.openingHours,
    sameAs: Object.values(siteConfig.social),
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      telephone: `+${siteConfig.whatsappNumber}`,
      email: siteConfig.email,
      availableLanguage: ['English'],
    },
    knowsAbout: [
      'Graphic Design',
      'Logo Design',
      'Brand Identity',
      'Packaging Design',
      'Commercial Printing',
      'Large Format Printing',
      'Search Engine Optimization',
      'Local SEO',
      'Generative Engine Optimization',
      'Social Media Marketing',
      'Google Ads',
      'Content Marketing',
    ],
  }
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    publisher: { '@id': orgId },
    inLanguage: 'en',
  }
}

export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.href),
    })),
  }
}

export function faqSchema(faqs: FAQ[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }
}

export function articleSchema(post: BlogPost) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription,
    image: absoluteUrl(post.image),
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: { '@type': 'Organization', name: siteConfig.name, url: siteConfig.url },
    publisher: { '@id': orgId },
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
  }
}
