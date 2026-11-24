import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { CheckCircle2 } from 'lucide-react'
import { getService, getServices } from '@/lib/cms'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { FaqSection } from '@/components/faq-section'
import { CtaBand } from '@/components/cta-band'
import { QuickAnswer } from '@/components/quick-answer'
import { SectionHeading } from '@/components/section-heading'
import { WhatsAppButton } from '@/components/whatsapp-button'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  const services = await getServices()
  return services.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = await getService(slug)
  if (!service) return {}
  return {
    title: `${service.name} Services`,
    description: service.description,
    alternates: { canonical: `/services/${service.slug}` },
  }
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const service = await getService(slug)
  if (!service) notFound()

  return (
    <>
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-8 md:pt-12 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <Breadcrumbs items={[{ name: 'Services', href: '/services' }, { name: service.name, href: `/services/${service.slug}` }]} />
          <h1 className="mt-8 text-balance text-4xl font-bold leading-tight md:text-6xl">{service.title}</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{service.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <WhatsAppButton
              size="lg"
              label="Get a free quote"
              message={`Hi Digital Weavix, I'd like a free quote for ${service.name}.`}
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
        <QuickAnswer>{service.quickAnswer}</QuickAnswer>
      </section>

      <section aria-labelledby="subservices-heading" className="bg-muted py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading
            id="subservices-heading"
            eyebrow={service.name}
            title={`Our ${service.name.toLowerCase()} sub-services`}
          />
          <ul className="mt-12 grid gap-6 md:grid-cols-2">
            {service.subservices.map((sub) => (
              <li key={sub.slug} className="rounded-2xl border border-border bg-card p-8">
                <h3 className="text-2xl font-bold">
                  <Link href={`/services/${service.slug}/${sub.slug}`} className="hover:text-primary">
                    {sub.name}
                  </Link>
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{sub.description}</p>
                <ul className="mt-6 flex flex-col gap-2.5">
                  {sub.points.map((point) => (
                    <li key={point} className="flex gap-3 leading-relaxed">
                      <CheckCircle2 className="mt-1 size-4 shrink-0 text-primary" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href={`/services/${service.slug}/${sub.slug}`}
                    className="inline-flex h-11 items-center rounded-full px-5 font-semibold text-primary hover:underline"
                  >
                    Learn more
                  </Link>
                  <WhatsAppButton
                    variant="outline"
                    label={`Quote for ${sub.name}`}
                    message={`Hi Digital Weavix, I'd like a quote for ${sub.name}.`}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FaqSection faqs={service.faqs} title={`${service.name} FAQs`} />
      <CtaBand />
    </>
  )
}
