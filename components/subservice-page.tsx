import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import type { Service, Subservice } from '@/content/types'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { CtaBand } from '@/components/cta-band'
import { FaqSection } from '@/components/faq-section'
import { QuickAnswer } from '@/components/quick-answer'
import { SectionHeading } from '@/components/section-heading'
import { WhatsAppButton } from '@/components/whatsapp-button'

type PageLink = { name: string; description: string; href: string }

type Props = {
  service: Service
  subservice: Subservice
  crumbs: { name: string; href: string }[]
  childPages?: PageLink[]
  related: PageLink[]
  relatedTitle: string
  backHref: string
  backLabel: string
}

export function SubservicePageView({
  service,
  subservice,
  crumbs,
  childPages,
  related,
  relatedTitle,
  backHref,
  backLabel,
}: Props) {
  return (
    <>
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-8 md:pt-12 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <Breadcrumbs items={crumbs} />
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

      {childPages && childPages.length > 0 && (
        <section aria-labelledby="child-heading" className="mx-auto max-w-7xl px-5 py-20 md:py-28">
          <SectionHeading id="child-heading" eyebrow={subservice.name} title={`${subservice.name} services we offer`} />
          <ul className="mt-12 grid gap-6 md:grid-cols-3">
            {childPages.map((item) => (
              <PageCard key={item.href} item={item} />
            ))}
          </ul>
        </section>
      )}

      <section aria-labelledby="related-heading" className="mx-auto max-w-7xl px-5 py-20 md:py-28">
        <SectionHeading id="related-heading" eyebrow={service.name} title={relatedTitle} />
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {related.map((item) => (
            <PageCard key={item.href} item={item} />
          ))}
        </ul>
        <Link href={backHref} className="mt-10 inline-flex items-center gap-2 font-semibold text-primary">
          {backLabel}
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </section>

      <FaqSection faqs={subservice.faqs} title={`${subservice.name} FAQs`} />
      <CtaBand />
    </>
  )
}

function PageCard({ item }: { item: PageLink }) {
  return (
    <li>
      <Link
        href={item.href}
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
  )
}
