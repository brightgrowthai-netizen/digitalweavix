import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check, CheckCircle2 } from 'lucide-react'
import type { PortfolioItem, Service, SubService } from '@/content/types'
import { subServiceSchema } from '@/lib/schema'
import { JsonLd } from '@/components/json-ld'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { QuickAnswer } from '@/components/quick-answer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { SectionHeading } from '@/components/section-heading'
import { PortfolioGrid } from '@/components/portfolio-grid'
import { FaqSection } from '@/components/faq-section'
import { CtaBand } from '@/components/cta-band'

type Props = {
  service: Service
  sub: SubService
  path: string
  breadcrumbs: { name: string; href: string }[]
  portfolio: PortfolioItem[]
  siblings: { name: string; href: string }[]
}

export function SubServiceView({ service, sub, path, breadcrumbs, portfolio, siblings }: Props) {
  const quoteMessage = `Hi Digital Weavix, I'd like a free quote for ${sub.name}.`

  return (
    <>
      <JsonLd data={subServiceSchema(service, sub, path)} />

      <section className="relative overflow-hidden">
        <div aria-hidden="true" className="absolute -left-32 top-0 size-96 rounded-full bg-primary/15 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-8 md:pt-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <Breadcrumbs items={breadcrumbs} />
            <p className="mt-8 text-sm font-semibold uppercase tracking-widest text-primary">{service.name}</p>
            <h1 className="mt-3 text-balance text-4xl font-bold leading-tight md:text-5xl">{sub.name}</h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">{sub.shortDescription}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <WhatsAppButton size="lg" label="Get a free quote" message={quoteMessage} />
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image src={service.heroImage} alt={service.heroAlt} fill priority sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-[1.4fr_1fr]">
        <div className="flex flex-col gap-6">
          <QuickAnswer>{sub.quickAnswer}</QuickAnswer>
          <p className="text-lg leading-relaxed text-muted-foreground">{sub.intro}</p>
        </div>
        <aside aria-labelledby="deliverables-heading" className="self-start rounded-3xl bg-secondary p-7 text-secondary-foreground">
          <h2 id="deliverables-heading" className="text-xl font-bold">What you get</h2>
          <ul className="mt-5 flex flex-col gap-3">
            {sub.deliverables.map((d) => (
              <li key={d} className="flex gap-3 leading-relaxed text-secondary-foreground/85">
                <Check className="mt-1 size-4 shrink-0 text-primary" aria-hidden="true" />
                {d}
              </li>
            ))}
          </ul>
          <WhatsAppButton className="mt-6 w-full" label="Start on WhatsApp" message={quoteMessage} />
        </aside>
      </section>

      <section aria-labelledby="benefits-heading" className="py-16">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading id="benefits-heading" eyebrow="Benefits" title={`Why choose Digital Weavix for ${sub.name}`} />
          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            {sub.benefits.map((b) => (
              <li key={b.title} className="rounded-2xl border border-border bg-card p-7">
                <CheckCircle2 className="size-7 text-primary" aria-hidden="true" />
                <h3 className="mt-4 text-xl font-bold">{b.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{b.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {sub.children && sub.children.length > 0 && (
        <section aria-labelledby="children-heading" className="pb-16">
          <div className="mx-auto max-w-7xl px-5">
            <SectionHeading id="children-heading" eyebrow="Specialist services" title={`Explore our ${sub.name} services`} />
            <ul className="mt-10 grid gap-5 md:grid-cols-2">
              {sub.children.map((child) => (
                <li key={child.slug}>
                  <Link href={`${path}/${child.slug}`} className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary">
                    <h3 className="text-lg font-bold group-hover:text-primary">{child.name}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{child.shortDescription}</p>
                    <span className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-primary">
                      Learn more <ArrowRight className="size-4" aria-hidden="true" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section aria-labelledby="portfolio-heading" className="bg-muted py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading id="portfolio-heading" eyebrow="Portfolio" title={`${service.name} work we're proud of`} />
          <div className="mt-12">
            <PortfolioGrid items={portfolio} />
          </div>
        </div>
      </section>

      <FaqSection faqs={sub.faqs} title={`${sub.name} FAQs`} />

      {siblings.length > 0 && (
        <section aria-labelledby="siblings-heading" className="border-t border-border py-16">
          <div className="mx-auto max-w-7xl px-5">
            <h2 id="siblings-heading" className="text-2xl font-bold">More {service.name.toLowerCase()} services</h2>
            <ul className="mt-6 flex flex-wrap gap-3">
              {siblings.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 font-medium hover:border-primary hover:text-primary">
                    {s.name}
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <CtaBand title={`Get your ${sub.name} started today`} message={quoteMessage} />
    </>
  )
}
