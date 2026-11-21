import { Plus } from 'lucide-react'
import type { FAQ } from '@/content/types'
import { JsonLd } from './json-ld'
import { faqSchema } from '@/lib/schema'
import { WhatsAppButton } from './whatsapp-button'

export function FaqSection({
  faqs,
  title = 'Frequently asked questions',
  intro,
}: {
  faqs: FAQ[]
  title?: string
  intro?: string
}) {
  return (
    <section aria-labelledby="faq-heading" className="py-20 md:py-28">
      <JsonLd data={faqSchema(faqs)} />
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-[1fr_1.6fr]">
        <div className="md:sticky md:top-28 md:self-start">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">FAQs</p>
          <h2 id="faq-heading" className="mt-3 text-3xl font-bold md:text-4xl">
            {title}
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            {intro ?? "Can't find your answer? Ask us directly on WhatsApp and a specialist will reply within minutes."}
          </p>
          <WhatsAppButton className="mt-6" label="Ask a question" message="Hi Digital Weavix, I have a question about your services." />
        </div>
        <div className="divide-y divide-border rounded-2xl border border-border bg-card">
          {faqs.map((faq, index) => (
            <details key={faq.question} className="group px-6 py-5" open={index === 0}>
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-display text-lg font-semibold [&::-webkit-details-marker]:hidden">
                <h3 className="text-pretty">{faq.question}</h3>
                <Plus className="mt-1 size-5 shrink-0 text-primary transition-transform group-open:rotate-45" aria-hidden="true" />
              </summary>
              <p className="mt-3 leading-relaxed text-muted-foreground">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
