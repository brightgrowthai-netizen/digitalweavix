import Link from 'next/link'
import { WhatsAppButton } from '@/components/whatsapp-button'

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-2xl flex-col items-center px-5 py-32 text-center">
      <p className="font-display text-7xl font-bold text-primary">404</p>
      <h1 className="mt-4 text-3xl font-bold">This page could not be found</h1>
      <p className="mt-3 text-muted-foreground">It may have moved. Try our services or ask us directly.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/services" className="inline-flex h-11 items-center rounded-full bg-primary px-6 font-semibold text-primary-foreground">
          Browse services
        </Link>
        <WhatsAppButton />
      </div>
    </section>
  )
}
