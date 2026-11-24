'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, Menu, X } from 'lucide-react'
import { mainNav } from '@/content/navigation'
import type { Service } from '@/content/types'
import { Logo } from './logo'
import { WhatsAppButton } from './whatsapp-button'
import { cn } from '@/lib/utils'

type Props = {
  services: Service[]
}

export function SiteHeader({ services }: Props) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const serviceForHref = (href: string) => services.find((service) => href === `/services/${service.slug}`)

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-5">
        <Logo />
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {mainNav.map((item) => {
              const active = pathname === item.href || pathname.startsWith(`${item.href}/`)
              const service = serviceForHref(item.href)
              const linkClassName = cn(
                'inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium transition-colors hover:text-primary',
                active ? 'text-primary' : 'text-foreground/80',
              )

              if (!service) {
                return (
                  <li key={item.href}>
                    <Link href={item.href} aria-current={active ? 'page' : undefined} className={linkClassName}>
                      {item.name}
                    </Link>
                  </li>
                )
              }

              return (
                <li key={item.href} className="group relative">
                  <Link href={item.href} aria-current={active ? 'page' : undefined} className={linkClassName}>
                    {item.name}
                    <ChevronDown className="size-4 transition-transform group-hover:rotate-180 group-focus-within:rotate-180" aria-hidden="true" />
                  </Link>
                  <div className="invisible absolute left-0 top-full z-50 pt-2 opacity-0 transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                    <ul className="w-64 rounded-xl border border-border bg-background p-2 shadow-lg">
                      {service.subServices.map((sub) => (
                        <li key={sub.slug}>
                          <Link
                            href={`/services/${service.slug}/${sub.slug}`}
                            className="block rounded-lg px-3 py-2 text-sm text-foreground/80 hover:bg-muted hover:text-primary"
                          >
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              )
            })}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <WhatsAppButton label="Free quote" className="hidden sm:inline-flex" />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="inline-flex size-11 items-center justify-center rounded-full border border-border lg:hidden"
          >
            {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-border bg-background lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col px-5 py-4">
            {mainNav.map((item) => {
              const service = serviceForHref(item.href)
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 font-medium hover:bg-muted"
                  >
                    {item.name}
                  </Link>
                  {service && (
                    <ul className="mb-2 ml-4 flex flex-col border-l border-border pl-3">
                      {service.subServices.map((sub) => (
                        <li key={sub.slug}>
                          <Link
                            href={`/services/${service.slug}/${sub.slug}`}
                            onClick={() => setOpen(false)}
                            className="block rounded-lg px-3 py-2 text-sm text-foreground/80 hover:bg-muted"
                          >
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              )
            })}
            <li className="mt-3">
              <WhatsAppButton className="w-full" label="Get a free quote on WhatsApp" />
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
