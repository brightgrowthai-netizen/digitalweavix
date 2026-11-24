import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, BadgeCheck, Layers, Rocket, ShieldCheck, Star } from 'lucide-react'
import { getPortfolio, getPosts, getServices, getTestimonials } from '@/lib/cms'
import { siteConfig } from '@/content/site'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { SectionHeading } from '@/components/section-heading'
import { ServiceIcon } from '@/components/service-icon'
import { PortfolioGrid } from '@/components/portfolio-grid'
import { Testimonials } from '@/components/testimonials'
import { FaqSection } from '@/components/faq-section'
import { CtaBand } from '@/components/cta-band'
import { QuickAnswer } from '@/components/quick-answer'
import type { FAQ } from '@/content/types'

export const metadata = {
  alternates: { canonical: '/' },
}

const homeFaqs: FAQ[] = [
  {
    question: 'What does Digital Weavix do?',
    answer:
      'Digital Weavix is a full-service creative agency offering three connected services: graphic design (logos, branding, packaging, social media creatives), printing (business cards, flyers, brochures, banners, merchandise) and digital marketing (SEO, social media marketing, Google Ads, Meta Ads and content). One team handles your brand from first sketch to printed product to online growth.',
  },
  {
    question: 'Why choose one agency for design, printing and marketing?',
    answer:
      'Using one agency keeps your brand consistent across every touchpoint, removes hand-off delays between designers, printers and marketers, and usually costs less than hiring three separate vendors. Your logo, print and ads are built from the same brand system, so customers recognise you everywhere.',
  },
  {
    question: 'How do I get a quote from Digital Weavix?',
    answer:
      'Tap any WhatsApp button on this website and tell us what you need. We reply with questions, a clear price and a timeline, usually within 15 minutes during business hours. There are no forms to fill in and no obligation.',
  },
  {
    question: 'Do you work with small businesses and startups?',
    answer:
      'Yes. Most of our clients are startups, small and medium businesses, and growing e-commerce brands. We offer flexible packages, from a single logo or one box of business cards to monthly SEO and social media retainers.',
  },
  {
    question: 'Do you work with clients outside my city?',
    answer:
      'Yes. Design and digital marketing are delivered fully online, and we ship printed products to your door. We work with clients worldwide over WhatsApp, email and video calls.',
  },
  {
    question: 'How quickly can you deliver?',
    answer:
      'First logo and design concepts are usually ready within 48 hours. Standard printing takes 3 to 5 business days after proof approval, with express options available. SEO and marketing campaigns launch within one to two weeks of kickoff.',
  },
]

const reasons = [
  { icon: Layers, title: 'Design, print and marketing under one roof', description: 'One brief, one team, one consistent brand. No more chasing three different vendors.' },
  { icon: Rocket, title: 'Built to generate revenue', description: 'Every design and campaign is tied to a business goal: more calls, more sales, more footfall.' },
  { icon: ShieldCheck, title: 'Transparent pricing, no surprises', description: 'Fixed quotes before we start, unlimited reasonable revisions on design, and clear monthly reports.' },
  { icon: BadgeCheck, title: 'Print-ready quality guarantee', description: 'Professional pre-press checks on every file, premium stock, and a reprint if we get it wrong.' },
]

export default async function HomePage() {
  const [services, portfolio, testimonials, posts] = await Promise.all([
    getServices(),
    getPortfolio(),
    getTestimonials(),
    getPosts(),
  ])

  return (
    <>
      <section className="relative overflow-hidden">
        <div aria-hidden="true" className="absolute -left-40 top-20 size-[28rem] rounded-full bg-primary/15 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-12 md:pt-20 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium">
              <Star className="size-4 fill-primary text-primary" aria-hidden="true" />
              Rated 4.9/5 by 150+ growing brands
            </p>
            <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.05] md:text-6xl">
              Branding <span className="text-primary">&amp; Digital Marketing</span> Agency in Ahmedabad
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              {siteConfig.tagline} Digital Weavix builds your brand, prints it beautifully and puts it in front of the
              customers searching for you on Google, Instagram and beyond.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <WhatsAppButton size="lg" label="Get a free quote" />
              <Link
                href="/portfolio"
                className="inline-flex h-13 items-center gap-2 rounded-full border border-foreground/20 px-7 font-semibold hover:bg-foreground/5"
              >
                See our work
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
            <dl className="mt-12 grid grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-4">
              {siteConfig.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-sm text-muted-foreground">{stat.label}</dt>
                  <dd className="order-first font-display text-3xl font-bold">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
              <Image
                src="/images/hero-studio.png"
                alt="Digital Weavix creative studio with brand designs, printed materials and marketing dashboards"
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-4 rounded-2xl border border-border bg-card p-5 shadow-xl md:-left-10">
              <p className="font-display text-3xl font-bold text-primary">+312%</p>
              <p className="text-sm text-muted-foreground">Average organic traffic growth</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 pb-8">
        <QuickAnswer>
          Digital Weavix is a one-stop creative agency for <strong>graphic design</strong> (logos, branding, packaging),{' '}
          <strong>printing</strong> (business cards, flyers, banners, merchandise) and <strong>digital marketing</strong>{' '}
          (SEO, social media, Google and Meta Ads). Get a free quote on WhatsApp in minutes.
        </QuickAnswer>
      </section>

      <section aria-labelledby="services-heading" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading
            id="services-heading"
            eyebrow="What we do"
            title="Three services. One brand that wins."
            description="Pick one service or combine all three. Everything we create works together to make your business look premium and sell more."
          />
          <ul className="mt-14 grid gap-6 lg:grid-cols-3">
            {services.map((service) => (
              <li key={service.slug}>
                <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={service.heroImage}
                      alt={service.heroAlt}
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <span className="flex size-12 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                      <ServiceIcon name={service.icon} className="size-6" />
                    </span>
                    <h3 className="mt-5 text-2xl font-bold">
                      <Link href={`/services/${service.slug}`} className="after:absolute after:inset-0 relative">
                        {service.name}
                      </Link>
                    </h3>
                    <p className="mt-3 leading-relaxed text-muted-foreground">{service.shortDescription}</p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {service.subServices.slice(0, 5).map((sub) => (
                        <li key={sub.slug}>
                          <Link
                            href={`/services/${service.slug}/${sub.slug}`}
                            className="relative z-10 inline-block rounded-full bg-muted px-3 py-1 text-xs font-medium hover:bg-primary hover:text-primary-foreground"
                          >
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-auto flex items-center gap-2 pt-6 font-semibold text-primary">
                      Explore {service.name.toLowerCase()}
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </p>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="why-heading" className="bg-muted py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2">
          <div className="relative aspect-square overflow-hidden rounded-3xl">
            <Image
              src="/images/about-team.png"
              alt="Digital Weavix designers and marketers collaborating around a table of printed proofs"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading
              id="why-heading"
              eyebrow="Why Digital Weavix"
              title="Why businesses switch to us and stay"
              description="Most agencies do one thing. We connect design, print and digital marketing so every rupee, dollar or dirham you spend works harder."
            />
            <ul className="mt-10 grid gap-6 sm:grid-cols-2">
              {reasons.map((reason) => (
                <li key={reason.title}>
                  <reason.icon className="size-7 text-primary" aria-hidden="true" />
                  <h3 className="mt-3 text-lg font-bold">{reason.title}</h3>
                  <p className="mt-1.5 leading-relaxed text-muted-foreground">{reason.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section aria-labelledby="portfolio-heading" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              id="portfolio-heading"
              eyebrow="Portfolio"
              title="Work that moved the numbers"
              description="A selection of branding, print and digital marketing projects with real results."
            />
            <Link href="/portfolio" className="inline-flex items-center gap-2 font-semibold text-primary">
              View full portfolio
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-12">
            <PortfolioGrid items={portfolio.slice(0, 6)} />
          </div>
        </div>
      </section>

      <Testimonials items={testimonials} />

      <section aria-labelledby="blog-heading" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading
            id="blog-heading"
            eyebrow="Insights"
            title="Guides from our designers and marketers"
            description="Straight answers to the questions our clients ask most."
          />
          <ul className="mt-12 grid gap-6 md:grid-cols-3">
            {posts.slice(0, 3).map((post) => (
              <li key={post.slug}>
                <article className="group h-full overflow-hidden rounded-2xl border border-border bg-card">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image src={post.image} alt={post.imageAlt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-semibold uppercase tracking-widest text-primary">{post.category}</p>
                    <h3 className="mt-2 text-lg font-bold leading-snug">
                      <Link href={`/blog/${post.slug}`} className="hover:text-primary">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="bg-muted">
        <FaqSection faqs={homeFaqs} title="Questions about working with Digital Weavix" />
      </div>

      <CtaBand />
    </>
  )
}
