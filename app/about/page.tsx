import type { Metadata } from 'next'
import Image from 'next/image'
import { Award, HeartHandshake, Lightbulb, Target } from 'lucide-react'
import { siteConfig } from '@/content/site'
import { getTestimonials } from '@/lib/cms'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { SectionHeading } from '@/components/section-heading'
import { Testimonials } from '@/components/testimonials'
import { FaqSection } from '@/components/faq-section'
import { CtaBand } from '@/components/cta-band'
import type { FAQ } from '@/content/types'

export const metadata: Metadata = {
  title: 'About Us: The Team Behind Digital Weavix',
  description:
    'Meet Digital Weavix, a team of designers, print specialists and digital marketers helping businesses look premium and grow faster since day one.',
  alternates: { canonical: '/about' },
}

const values = [
  { icon: Target, title: 'Results first', description: 'Beautiful is not enough. Every project is measured by calls, sales and growth.' },
  { icon: Lightbulb, title: 'Original ideas', description: 'No templates, no stock logos. Every concept is crafted for your brand and audience.' },
  { icon: HeartHandshake, title: 'Honest partnership', description: 'Clear pricing, realistic timelines and straight advice, even when it means saying no.' },
  { icon: Award, title: 'Craft and quality', description: 'Pixel-perfect design files and premium print finishes, checked by humans before delivery.' },
]

const faqs: FAQ[] = [
  {
    question: 'Who works on my project?',
    answer:
      'A dedicated project lead coordinates a small team of specialists: brand designers, a pre-press and print expert, and SEO or ads specialists depending on your needs. You talk to the same people throughout.',
  },
  {
    question: 'What industries do you specialise in?',
    answer:
      'We work across retail, food and beverage, healthcare, real estate, education, beauty, e-commerce and B2B services. Our process adapts to any industry because it starts with understanding your customers.',
  },
]

export default async function AboutPage() {
  const testimonials = await getTestimonials()
  return (
    <>
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-8 md:pt-12 lg:grid-cols-2">
        <div>
          <Breadcrumbs items={[{ name: 'About', href: '/about' }]} />
          <h1 className="mt-8 text-balance text-4xl font-bold md:text-6xl">We weave design, print and digital into growth</h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Digital Weavix was founded on a simple idea: businesses should not need three agencies to look great and
            grow. We bring graphic designers, print specialists and digital marketers together so your brand stays
            consistent from your logo to your packaging to your Google ranking.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Today we have delivered {siteConfig.stats[0].value} projects for {siteConfig.stats[1].value} brands, with an
            average client rating of {siteConfig.stats[3].value}.
          </p>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
          <Image src="/images/about-team.png" alt="The Digital Weavix team reviewing brand designs and print proofs together" fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
        </div>
      </section>
      <section aria-labelledby="values-heading" className="bg-muted py-20">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading id="values-heading" eyebrow="Our values" title="What we stand for" />
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <li key={v.title} className="rounded-2xl border border-border bg-card p-7">
                <v.icon className="size-8 text-primary" aria-hidden="true" />
                <h3 className="mt-4 text-xl font-bold">{v.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{v.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Testimonials items={testimonials} />
      <FaqSection faqs={faqs} title="About Digital Weavix" />
      <CtaBand />
    </>
  )
}
