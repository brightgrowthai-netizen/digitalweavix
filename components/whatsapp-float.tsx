import { MessageCircle } from 'lucide-react'
import { whatsappLink } from '@/content/site'

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-whatsapp px-4 py-3.5 text-whatsapp-foreground shadow-lg shadow-whatsapp/30 transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2"
    >
      <MessageCircle className="size-6" aria-hidden="true" />
      <span className="hidden text-sm font-semibold sm:inline">Free quote on WhatsApp</span>
      <span className="sr-only sm:hidden">Chat with us on WhatsApp</span>
    </a>
  )
}
