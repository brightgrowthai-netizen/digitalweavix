import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getServices } from '@/lib/cms'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { ServiceIcon } from '@/components/service-icon'
import { FaqSection } from '@/components/faq-section'
import { CtaBand } from '@/components/cta-band'
import type { FAQ } from '@/content/types'

export const metadata: Metadata = {
  title: 'Services: Graphic Design, Printing & Digital Marketing',
  description:
    'Explore every Digital Weavix service: logo and brand identity design, packaging, business card and flyer printing, banners, SEO, social media marketing, Google Ads and more.',
  alternates: { canonical: '/services' },
}

const faqs: FAQ[] = [
  {
    question: 'Can I combine design, printing and marketing in one package?',
    answer:
      'Yes. Many clients start with a logo and brand identity, print their business cards and signage with us, then launch SEO and social media campaigns. Bundled packages are cheaper than buying each service separately. Message us on WhatsApp for a custom bundle quote.',
  },
  {
    question: 'Which service should I start with?',
    answer:
      'If you are new or rebranding, start with graphic design so every printed and digital asset uses a strong, consistent identity. If your brand is already established, digital marketing usually delivers the fastest growth. We will recommend the best starting point on a free WhatsApp consultation.',
  },
  {
    question: 'Do you offer monthly retainers?',
    answer:
      'Yes. We offer monthly retainers for SEO, social media management, paid ads and ongoing design support, with no long-term lock-in. One-off projects such as logos, packaging and print runs are quoted as fixed prices.',
  },
]

export default async function ServicesPage() {
  const services = await getServices()
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pb-12 pt-8 md:pt-12">
        <Breadcrumbs items={[{ name: 'Services', href: '/services' }]} />
        <h1 className="mt-8 max-w-3xl text-balance text-4xl font-bold md:text-6xl">Creative and growth services built to work together</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          From your first logo to your thousandth customer: design, print and digital marketing under one roof.
        </p>
      </section>
      <section className="mx-auto flex max-w-7xl flex-col gap-8 px-5 pb-12">
        {services.map((service, index) => (
          <article key={service.slug} className="grid overflow-hidden rounded-3xl border border-border bg-card lg:grid-cols-2">
            <div className={`relative aspect-[16/10] lg:aspect-auto ${index % 2 ? 'lg:order-2' : ''}`}>
              <Image src={service.heroImage} alt={service.heroAlt} title={`${service.name} by Digital Weavix`} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
            <div className="p-8 md:p-12">
              <span className="flex size-12 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <ServiceIcon name={service.icon} className="size-6" />
              </span>
              <h2 className="mt-5 text-3xl font-bold">{service.name}</h2>
              <p className="mt-2 font-display font-medium text-primary">{service.tagline}</p>
              <p className="mt-4 leading-relaxed text-muted-foreground">{service.shortDescription}</p>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {service.subServices.map((sub) => (
                  <li key={sub.slug}>
                    <Link href={`/services/${service.slug}/${sub.slug}`} className="text-sm font-medium hover:text-primary">
                      {sub.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link href={`/services/${service.slug}`} className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary/90">
                Explore {service.name.toLowerCase()}
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </article>
        ))}
      </section>
      <FaqSection faqs={faqs} title="Questions about our services" />
      <CtaBand />
    </>
  )
}
