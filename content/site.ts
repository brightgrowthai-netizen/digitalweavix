export const siteConfig = {
  name: 'Digital Weavix',
  legalName: 'Digital Weavix',
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.digitalweavix.com').replace(/\/$/, ''),
  tagline: 'Design that sells. Print that impresses. Marketing that grows.',
  description:
    'Digital Weavix is a full-service digital marketing, graphic design and printing agency. We create logos, brand identities and packaging, print business cards, flyers and banners, and grow businesses with SEO, social media marketing and Google Ads.',
  logo: '/images/logo-placeholder.svg',
  ogImage: '/images/hero-studio.webp',
  whatsappNumber: '15551234567',
  whatsappDisplay: '+1 (555) 123-4567',
  email: 'hello@digitalweavix.com',
  address: {
    street: '',
    city: '',
    region: '',
    postalCode: '',
    country: '',
  },
  areaServed: ['Worldwide'],
  openingHours: ['Mo-Sa 09:00-19:00'],
  openingHoursLabel: 'Monday to Saturday, 9:00 AM - 7:00 PM',
  priceRange: '$$',
  social: {
    instagram: 'https://www.instagram.com/digitalweavix',
    facebook: 'https://www.facebook.com/digitalweavix',
    linkedin: 'https://www.linkedin.com/company/digitalweavix',
    behance: 'https://www.behance.net/digitalweavix',
  },
  stats: [
    { value: '500+', label: 'Projects delivered' },
    { value: '150+', label: 'Brands grown' },
    { value: '48h', label: 'First design concepts' },
    { value: '4.9/5', label: 'Average client rating' },
  ],
} as const

export function whatsappLink(message = `Hi ${siteConfig.name}, I'd like a free quote.`) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`
}

export function absoluteUrl(path = '/') {
  return `${siteConfig.url}${path.startsWith('/') ? path : `/${path}`}`
}
