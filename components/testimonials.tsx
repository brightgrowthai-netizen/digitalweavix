import { Star } from 'lucide-react'
import type { Testimonial } from '@/content/types'
import { SectionHeading } from './section-heading'

export function Testimonials({ items }: { items: Testimonial[] }) {
  return (
    <section aria-labelledby="testimonials-heading" className="bg-muted py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          id="testimonials-heading"
          eyebrow="Client love"
          title="Businesses that chose to stand out"
          description="Real feedback from founders and marketers who trusted us with their brand, print and growth."
          align="center"
        />
        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <li key={item.name}>
              <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-7">
                <div className="flex gap-1 text-primary" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 leading-relaxed text-foreground">{`"${item.quote}"`}</blockquote>
                <figcaption className="mt-6 border-t border-border pt-4">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-muted-foreground">{item.role}</p>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
