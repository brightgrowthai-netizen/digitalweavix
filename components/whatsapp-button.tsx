import { MessageCircle } from 'lucide-react'
import { whatsappLink } from '@/content/site'
import { cn } from '@/lib/utils'

type Props = {
  message?: string
  label?: string
  variant?: 'whatsapp' | 'outline' | 'light'
  size?: 'default' | 'lg'
  className?: string
}

const variants = {
  whatsapp: 'bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90',
  outline: 'border border-foreground/20 bg-transparent text-foreground hover:bg-foreground/5',
  light: 'bg-secondary-foreground text-secondary hover:bg-secondary-foreground/90',
}

export function WhatsAppButton({ message, label = 'Chat on WhatsApp', variant = 'whatsapp', size = 'default', className }: Props) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2',
        size === 'lg' ? 'h-13 px-7 text-base' : 'h-11 px-5 text-sm',
        variants[variant],
        className,
      )}
    >
      <MessageCircle className="size-5" aria-hidden="true" />
      {label}
      <span className="sr-only">(opens WhatsApp in a new tab)</span>
    </a>
  )
}
