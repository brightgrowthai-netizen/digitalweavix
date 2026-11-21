import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { JsonLd } from './json-ld'
import { breadcrumbSchema } from '@/lib/schema'
import { cn } from '@/lib/utils'

export function Breadcrumbs({ items, className }: { items: { name: string; href: string }[]; className?: string }) {
  const all = [{ name: 'Home', href: '/' }, ...items]
  return (
    <nav aria-label="Breadcrumb" className={cn('text-sm', className)}>
      <JsonLd data={breadcrumbSchema(all)} />
      <ol className="flex flex-wrap items-center gap-1.5 text-muted-foreground">
        {all.map((item, index) => {
          const isLast = index === all.length - 1
          return (
            <li key={item.href} className="flex items-center gap-1.5">
              {isLast ? (
                <span aria-current="page" className="font-medium text-foreground">
                  {item.name}
                </span>
              ) : (
                <>
                  <Link href={item.href} className="hover:text-primary">
                    {item.name}
                  </Link>
                  <ChevronRight className="size-3.5" aria-hidden="true" />
                </>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
