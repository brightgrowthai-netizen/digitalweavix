import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { getPortfolio, getPosts, getService, getServices, getTestimonials } from '@/lib/cms'
import { serviceSchema } from '@/lib/schema'
import { JsonLd } from '@/components/json-ld'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { QuickAnswer } from '@/components/quick-answer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { SectionHeading } from '@/components/section-heading'
import { ServiceIcon } from '@/components/service-icon'
import { ProcessSteps } from '@/components/process-steps'
import { PortfolioGrid } from '@/components/portfolio-grid'
import { Testimonials } from '@/components/testimonials'
import { FaqSection } from '@/components/faq-section'
import { CtaBand } from '@/components/cta-band'

type Props = { params: Promise<{ service: string }> }

export async function generateStaticParams() {
  const services = await getServices()
  return services.map((s) => ({ service: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service: slug } = await params
  const service = await getService(slug)
  if (!service) return {}
  return {
    title: { absolute: service.metaTitle },
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `/services/${service.slug}`,
      images: [{ url: service.heroImage, alt: service.heroAlt }],
    },
  }
}

export default async function ServicePage({ params }: Props) {
  const { service: slug } = await params
  const service = await getService(slug)
  if (!service) notFound()

  const [portfolio, testimonials, posts, services] = await Promise.all([
    getPortfolio(service.slug),
    getTestimonials(),
    getPosts(service.slug),
    getServices(),
  ])
  const otherServices = services.filter((s) => s.slug !== service.slug)
  const quoteMessage = `Hi Digital Weavix, I'd like a free quote for ${service.name.toLowerCase()}.`

  return (
    <>
      <JsonLd data={serviceSchema(service)} />

      <section className="relative overflow-hidden">
        <div aria-hidden="true" className="absolute -right-32 top-10 size-96 rounded-full bg-primary/15 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-8 md:pt-12 lg:grid-cols-2">
          <div>
            <Breadcrumbs items={[{ name: 'Services', href: '/services' }, { name: service.name, href: `/services/${service.slug}` }]} />
            <span className="mt-8 flex size-14 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
              <ServiceIcon name={service.icon} className="size-7" />
            </span>
            <h1 className="mt-5 text-balance text-4xl font-bold leading-tight md:text-6xl">{service.name} Services</h1>
            <p className="mt-4 font-display text-xl font-medium text-primary">{service.tagline}</p>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">{service.shortDescription}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <WhatsAppButton size="lg" label="Get a free quote" message={quoteMessage} />
              <a href="#portfolio" className="inline-flex h-13 items-center gap-2 rounded-full border border-foreground/20 px-7 font-semibold hover:bg-foreground/5">
                View portfolio
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image src={service.heroImage} alt={service.heroAlt} title={`${service.name} by Digital Weavix`} fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-5 pb-12">
          <dl className="grid grid-cols-2 gap-6 rounded-3xl border border-border bg-card p-8 md:grid-cols-4">
            {service.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <dt className="text-sm text-muted-foreground">{stat.label}</dt>
                <dd className="order-first font-display text-3xl font-bold text-primary md:text-4xl">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-[1.3fr_1fr]">
        <div className="flex flex-col gap-5">
          <QuickAnswer>{service.quickAnswer}</QuickAnswer>
          {service.intro.map((p) => (
            <p key={p.slice(0, 40)} className="text-lg leading-relaxed text-muted-foreground">
              {p}
            </p>
          ))}
        </div>
        <aside aria-labelledby="sub-heading" className="self-start rounded-3xl border border-border bg-card p-7">
          <h2 id="sub-heading" className="text-xl font-bold">{service.name} services we offer</h2>
          <ul className="mt-5 flex flex-col">
            {service.subServices.map((sub) => (
              <li key={sub.slug} className="border-b border-border last:border-0">
                <Link href={`/services/${service.slug}/${sub.slug}`} className="group flex items-center justify-between gap-3 py-3 font-medium hover:text-primary">
                  {sub.name}
                  <ArrowRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </section>

      <section aria-labelledby="benefits-heading" className="py-20">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading id="benefits-heading" eyebrow="Why it works" title={`Why businesses choose our ${service.name.toLowerCase()}`} />
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {service.benefits.map((b) => (
              <li key={b.title} className="rounded-2xl border border-border bg-card p-7">
                <CheckCircle2 className="size-7 text-primary" aria-hidden="true" />
                <h3 className="mt-4 text-xl font-bold">{b.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{b.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="subs-heading" className="bg-muted py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading
            id="subs-heading"
            eyebrow="Specialist services"
            title={`Everything you need in ${service.name.toLowerCase()}`}
            description="Explore each service in detail, with pricing guidance, deliverables and answers to common questions."
          />
          <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {service.subServices.map((sub) => (
              <li key={sub.slug}>
                <Link href={`/services/${service.slug}/${sub.slug}`} className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary">
                  <h3 className="text-lg font-bold group-hover:text-primary">{sub.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{sub.shortDescription}</p>
                  <span className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Learn more <ArrowRight className="size-4" aria-hidden="true" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ProcessSteps steps={service.process} title={`Our ${service.name.toLowerCase()} process`} />

      <section id="portfolio" aria-labelledby="portfolio-heading" className="scroll-mt-24 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading id="portfolio-heading" eyebrow="Portfolio" title={`Recent ${service.name.toLowerCase()} projects`} description="Real work for real businesses, and the results it delivered." />
          <div className="mt-12">
            <PortfolioGrid items={portfolio} />
          </div>
        </div>
      </section>

      <Testimonials items={testimonials} />

      <FaqSection faqs={service.faqs} title={`${service.name} FAQs`} />

      {posts.length > 0 && (
        <section aria-labelledby="related-heading" className="border-t border-border py-16">
          <div className="mx-auto max-w-7xl px-5">
            <h2 id="related-heading" className="text-2xl font-bold">Related guides</h2>
            <ul className="mt-6 grid gap-4 md:grid-cols-3">
              {posts.map((post) => (
                <li key={post.slug}>
                  <Link href={`/blog/${post.slug}`} className="block rounded-2xl border border-border bg-card p-5 font-semibold hover:border-primary hover:text-primary">
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
            <h2 className="mt-12 text-2xl font-bold">Explore our other services</h2>
            <ul className="mt-6 flex flex-wrap gap-3">
              {otherServices.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 font-medium hover:border-primary hover:text-primary">
                    <ServiceIcon name={s.icon} className="size-4" />
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <CtaBand title={`Let's talk ${service.name.toLowerCase()}`} message={quoteMessage} />
    </>
  )
}
