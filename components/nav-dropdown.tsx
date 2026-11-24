'use client'

import { useEffect, useId, useRef, useState } from 'react'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import type { NavItem } from '@/content/navigation'
import { cn } from '@/lib/utils'

export function NavDropdown({ item, active }: { item: NavItem; active: boolean }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const panelId = useId()

  useEffect(() => {
    if (!open) return

    function handlePointerDown(event: PointerEvent) {
      if (!ref.current?.contains(event.target as Node)) setOpen(false)
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          'inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium transition-colors hover:text-primary',
          active ? 'text-primary' : 'text-foreground/80',
        )}
      >
        {item.name}
        <ChevronDown className={cn('size-4 transition-transform', open && 'rotate-180')} aria-hidden="true" />
      </button>
      {open && (
        <div
          id={panelId}
          className="absolute left-1/2 top-full z-50 mt-3 w-[46rem] -translate-x-1/2 rounded-2xl border border-border bg-card p-6 shadow-xl"
        >
          <ul className="grid grid-cols-3 gap-6">
            {item.children?.map((service) => (
              <li key={service.href}>
                <Link
                  href={service.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-lg font-semibold hover:text-primary"
                >
                  {service.name}
                </Link>
                <ul className="mt-3 flex flex-col gap-1">
                  {service.children?.map((sub) => (
                    <li key={sub.href}>
                      <Link
                        href={sub.href}
                        onClick={() => setOpen(false)}
                        className="block rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                      >
                        {sub.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
