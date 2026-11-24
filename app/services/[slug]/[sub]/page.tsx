import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { getServices, getSubservice } from '@/lib/cms'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { CtaBand } from '@/components/cta-band'
import { FaqSection } from '@/components/faq-section'
import { QuickAnswer } from '@/components/quick-answer'
import { SectionHeading } from '@/components/section-heading'
import { WhatsAppButton } from '@/components/whatsapp-button'

type Props = { params: Promise<{ slug: string; sub: string }> }

export async function generateStaticParams() {
  const services = await getServices()
  return services.flatMap((service) =>
    service.subservices.map((sub) => ({ slug: service.slug, sub: sub.slug })),
  )
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, sub } = await params
  const match = await getSubservice(slug, sub)
  if (!match) return {}
  const { service, subservice } = match
  return {
    title: `${subservice.name} | ${service.name}`,
    description: subservice.description,
    alternates: { canonical: `/services/${service.slug}/${subservice.slug}` },
  }
}

export default async function SubservicePage({ params }: Props) {
  const { slug, sub } = await params
  const match = await getSubservice(slug, sub)
  if (!match) notFound()
  const { service, subservice } = match

  const siblings = service.subservices.filter((item) => item.slug !== subservice.slug)

  return (
    <>
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-8 md:pt-12 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <Breadcrumbs
            items={[
              { name: 'Services', href: '/services' },
              { name: service.name, href: `/services/${service.slug}` },
              { name: subservice.name, href: `/services/${service.slug}/${subservice.slug}` },
            ]}
          />
          <h1 className="mt-8 text-balance text-4xl font-bold leading-tight md:text-6xl">{subservice.title}</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{subservice.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <WhatsAppButton
              size="lg"
              label="Get a free quote"
              message={`Hi Digital Weavix, I'd like a free quote for ${subservice.name}.`}
            />
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
          <Image
            src={service.image}
            alt={service.imageAlt}
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 pb-16">
        <QuickAnswer>{subservice.quickAnswer}</QuickAnswer>
      </section>

      <section aria-labelledby="included-heading" className="bg-muted py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading id="included-heading" eyebrow={subservice.name} title="What is included" />
          <ul className="mt-12 grid gap-4 md:grid-cols-3">
            {subservice.points.map((point) => (
              <li key={point} className="flex gap-3 rounded-2xl border border-border bg-card p-6 leading-relaxed">
                <CheckCircle2 className="mt-1 size-5 shrink-0 text-primary" aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="related-heading" className="mx-auto max-w-7xl px-5 py-20 md:py-28">
        <SectionHeading
          id="related-heading"
          eyebrow={service.name}
          title={`More ${service.name.toLowerCase()} services`}
        />
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {siblings.map((item) => (
            <li key={item.slug}>
              <Link
                href={`/services/${service.slug}/${item.slug}`}
                className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-colors hover:border-primary"
              >
                <h3 className="text-xl font-bold">{item.name}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{item.description}</p>
                <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-primary">
                  View details
                  <ArrowRight className="size-4" aria-hidden="true" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href={`/services/${service.slug}`}
          className="mt-10 inline-flex items-center gap-2 font-semibold text-primary"
        >
          Back to all {service.name} services
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </section>

      <FaqSection faqs={subservice.faqs} title={`${subservice.name} FAQs`} />
      <CtaBand />
    </>
  )
}
