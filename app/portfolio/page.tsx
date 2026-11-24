import type { Metadata } from 'next'
import { getPortfolio } from '@/lib/cms'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { PortfolioGrid } from '@/components/portfolio-grid'
import { FaqSection } from '@/components/faq-section'
import { CtaBand } from '@/components/cta-band'
import type { FAQ } from '@/content/types'

export const metadata: Metadata = {
  title: 'Portfolio: Branding, Print & Digital Marketing Case Studies',
  description:
    'See Digital Weavix portfolio work: logos, brand identities, packaging, business cards, banners, merchandise, SEO and paid ads campaigns with measurable results.',
  alternates: { canonical: '/portfolio' },
}

const faqs: FAQ[] = [
  {
    question: 'Can I see more examples in my industry?',
    answer:
      'Yes. We have worked with restaurants, clinics, real estate, retail, e-commerce, education and professional services. Message us on WhatsApp with your industry and we will share relevant samples.',
  },
  {
    question: 'Do you sign NDAs for confidential projects?',
    answer: 'Yes. We sign NDAs on request and never publish client work without written permission.',
  },
]

export default async function PortfolioPage() {
  const items = await getPortfolio()

  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pb-8 pt-8 md:pt-12">
        <Breadcrumbs items={[{ name: 'Portfolio', href: '/portfolio' }]} />
        <h1 className="mt-8 max-w-3xl text-balance text-4xl font-bold md:text-6xl">Our portfolio: work that looks great and performs</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {items.length} selected projects across graphic design, printing and digital marketing.
        </p>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-14">
        <PortfolioGrid items={items} />
      </section>
      <FaqSection faqs={faqs} title="Portfolio FAQs" />
      <CtaBand title="Want results like these?" />
    </>
  )
}
