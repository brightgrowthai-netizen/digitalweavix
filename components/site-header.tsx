'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, Menu, X } from 'lucide-react'
import { mainNav } from '@/content/navigation'
import { Logo } from './logo'
import { NavDropdown } from './nav-dropdown'
import { WhatsAppButton } from './whatsapp-button'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`)

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-5">
        <Logo />
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {mainNav.map((item) => {
              if (item.children) {
                return (
                  <li key={item.href}>
                    <NavDropdown item={item} active={isActive(item.href)} />
                  </li>
                )
              }
              const active = isActive(item.href)
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium transition-colors hover:text-primary',
                      active ? 'text-primary' : 'text-foreground/80',
                    )}
                  >
                    {item.name}
                  </Link>
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
            {mainNav.map((item) =>
              item.children ? (
                <li key={item.href}>
                  <button
                    type="button"
                    aria-expanded={mobileServicesOpen}
                    onClick={() => setMobileServicesOpen((v) => !v)}
                    className="flex w-full items-center justify-between rounded-lg px-3 py-3 font-medium hover:bg-muted"
                  >
                    {item.name}
                    <ChevronDown
                      className={cn('size-4 transition-transform', mobileServicesOpen && 'rotate-180')}
                      aria-hidden="true"
                    />
                  </button>
                  {mobileServicesOpen && (
                    <ul className="ml-3 flex flex-col gap-1 border-l border-border pl-3">
                      {item.children.map((service) => (
                        <li key={service.href}>
                          <Link
                            href={service.href}
                            onClick={() => setOpen(false)}
                            className="block rounded-lg px-3 py-2 font-semibold hover:bg-muted"
                          >
                            {service.name}
                          </Link>
                          <ul className="flex flex-col">
                            {service.children?.map((sub) => (
                              <li key={sub.href}>
                                <Link
                                  href={sub.href}
                                  onClick={() => setOpen(false)}
                                  className="block rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-muted"
                                >
                                  {sub.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 font-medium hover:bg-muted"
                  >
                    {item.name}
                  </Link>
                </li>
              ),
            )}
            <li className="mt-3">
              <WhatsAppButton className="w-full" label="Get a free quote on WhatsApp" />
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
