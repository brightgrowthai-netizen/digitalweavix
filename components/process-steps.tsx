import type { Feature } from '@/content/types'
import { SectionHeading } from './section-heading'

export function ProcessSteps({ steps, title = 'How we work' }: { steps: Feature[]; title?: string }) {
  return (
    <section aria-labelledby="process-heading" className="bg-secondary py-20 text-secondary-foreground md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          id="process-heading"
          eyebrow="Our process"
          title={title}
          className="[&_p:last-child]:text-secondary-foreground/75"
          description="A simple, transparent process with updates on WhatsApp at every milestone."
        />
        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.title} className="rounded-2xl border border-secondary-foreground/15 p-6">
              <span className="font-display text-4xl font-bold text-primary">{String(index + 1).padStart(2, '0')}</span>
              <h3 className="mt-4 text-xl font-bold">{step.title}</h3>
              <p className="mt-2 leading-relaxed text-secondary-foreground/75">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
