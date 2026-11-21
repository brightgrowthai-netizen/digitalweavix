import Image from 'next/image'
import Link from 'next/link'
import { siteConfig } from '@/content/site'
import { cn } from '@/lib/utils'

export function Logo({ className, inverted = false }: { className?: string; inverted?: boolean }) {
  return (
    <Link href="/" className={cn('flex items-center gap-2.5', className)} aria-label={`${siteConfig.name} home`}>
      <Image src={siteConfig.logo} alt="" width={40} height={40} className="size-10" priority />
      <span className={cn('font-display text-lg font-bold tracking-tight', inverted ? 'text-secondary-foreground' : 'text-foreground')}>
        Digital<span className="text-primary">Weavix</span>
      </span>
    </Link>
  )
}
