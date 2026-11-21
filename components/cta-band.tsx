import { CheckCircle2 } from 'lucide-react'
import { WhatsAppButton } from './whatsapp-button'

export function CtaBand({
  title = 'Ready to outshine your competitors?',
  description = 'Tell us what you need on WhatsApp. Get a free quote, honest advice and a clear plan, usually within 15 minutes during business hours.',
  message,
}: {
  title?: string
  description?: string
  message?: string
}) {
  return (
    <section className="px-5 py-20">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-secondary px-6 py-14 text-secondary-foreground md:px-14 md:py-20">
        <div aria-hidden="true" className="absolute -right-20 -top-20 size-72 rounded-full bg-primary/30 blur-3xl" />
        <div className="relative grid items-center gap-10 md:grid-cols-[1.5fr_1fr]">
          <div>
            <h2 className="text-3xl font-bold md:text-5xl">{title}</h2>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-secondary-foreground/80">{description}</p>
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-secondary-foreground/90">
              {['Free quote & consultation', 'No long-term contracts', 'Reply in minutes'].map((point) => (
                <li key={point} className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-primary" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex md:justify-end">
            <WhatsAppButton size="lg" label="Get my free quote" message={message} />
          </div>
        </div>
      </div>
    </section>
  )
}
