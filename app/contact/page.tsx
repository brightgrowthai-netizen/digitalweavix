import type { Metadata } from 'next'
import { Clock, Mail, MessageCircle, Zap } from 'lucide-react'
import { siteConfig } from '@/content/site'
import { getServices } from '@/lib/cms'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { FaqSection } from '@/components/faq-section'
import type { FAQ } from '@/content/types'

export const metadata: Metadata = {
  title: 'Contact Us on WhatsApp for a Free Quote',
  description:
    'Get a free quote for graphic design, printing or digital marketing. Message Digital Weavix on WhatsApp and get a reply within minutes.',
  alternates: { canonical: '/contact' },
}

const faqs: FAQ[] = [
  {
    question: 'How fast do you reply on WhatsApp?',
    answer: `Usually within 15 minutes during business hours (${siteConfig.openingHoursLabel}). Messages sent outside these hours are answered first thing the next working day.`,
  },
  {
    question: 'What should I include in my first message?',
    answer:
      'Tell us what you need (for example a logo, 500 business cards or SEO), your deadline and your budget range if you have one. Reference images or links to brands you like help us quote faster.',
  },
  {
    question: 'Is the consultation really free?',
    answer: 'Yes. Quotes, advice and an initial strategy recommendation are always free with no obligation to buy.',
  },
]

export default async function ContactPage() {
  const services = await getServices()
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pb-16 pt-8 md:pt-12">
        <Breadcrumbs items={[{ name: 'Contact', href: '/contact' }]} />
        <div className="mt-8 grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h1 className="text-balance text-4xl font-bold md:text-6xl">Skip the forms. Chat with us on WhatsApp.</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Tell us what you need and get a free quote, honest advice and a clear timeline, usually within minutes.
            </p>
            <WhatsAppButton size="lg" className="mt-8" label={`WhatsApp ${siteConfig.whatsappDisplay}`} />
            <ul className="mt-10 flex flex-col gap-4">
              <li className="flex items-center gap-3"><Zap className="size-5 text-primary" aria-hidden="true" />Average reply time: under 15 minutes</li>
              <li className="flex items-center gap-3"><Clock className="size-5 text-primary" aria-hidden="true" />{siteConfig.openingHoursLabel}</li>
              <li className="flex items-center gap-3">
                <Mail className="size-5 text-primary" aria-hidden="true" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-primary">{siteConfig.email}</a>
              </li>
            </ul>
          </div>
          <div className="rounded-3xl bg-secondary p-8 text-secondary-foreground">
            <h2 className="flex items-center gap-2 text-2xl font-bold">
              <MessageCircle className="size-6 text-primary" aria-hidden="true" />
              Start a chat about
            </h2>
            <ul className="mt-6 flex flex-col gap-3">
              {services.flatMap((s) => s.subServices.slice(0, 3).map((sub) => ({ service: s, sub }))).map(({ sub }) => (
                <li key={sub.slug}>
                  <WhatsAppButton
                    variant="light"
                    className="w-full justify-start"
                    label={sub.name}
                    message={`Hi Digital Weavix, I'd like a free quote for ${sub.name.toLowerCase()}.`}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <FaqSection faqs={faqs} title="Before you message us" />
    </>
  )
}
