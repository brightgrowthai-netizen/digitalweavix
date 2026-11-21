import Image from 'next/image'
import { TrendingUp } from 'lucide-react'
import type { PortfolioItem } from '@/content/types'

export function PortfolioGrid({ items, headingLevel = 'h3' }: { items: PortfolioItem[]; headingLevel?: 'h2' | 'h3' }) {
  const Heading = headingLevel
  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <li key={item.slug}>
          <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={item.image}
  alt={item.alt}
  title={`${item.title} | ${item.category} by Digital Weavix`}
  fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur">
                {item.category}
              </span>
            </div>
            <div className="flex flex-1 flex-col gap-3 p-6">
              <Heading className="text-xl font-bold">{item.title}</Heading>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.summary}</p>
              <p className="mt-auto flex items-center gap-2 pt-2 text-sm font-semibold text-primary">
                <TrendingUp className="size-4" aria-hidden="true" />
                {item.result}
              </p>
            </div>
          </article>
        </li>
      ))}
    </ul>
  )
}
