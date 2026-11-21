import { Megaphone, Palette, Printer } from 'lucide-react'
import type { ServiceIcon as IconName } from '@/content/types'

const icons = { palette: Palette, printer: Printer, megaphone: Megaphone }

export function ServiceIcon({ name, className }: { name: IconName; className?: string }) {
  const Icon = icons[name]
  return <Icon className={className} aria-hidden="true" />
}
