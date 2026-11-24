import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getServices } from '@/lib/cms'
import { subservicePath } from '@/content/services'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { CtaBand } from '@/components/cta-band'

export const metadata: Metadata = {
  title: 'Services: Graphic Designing, Printing & Digital Marketing',
  description:
    'Explore Digital Weavix services: graphic designing, premium printing and digital marketing. Compare every service and sub-service and get a free quote on WhatsApp.',
  alternates: { canonical: '/services' },
}

export default async function ServicesPage() {
  const services = await getServices()

  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pb-8 pt-8 md:pt-12">
        <Breadcrumbs items={[{ name: 'Services', href: '/services' }]} />
        <h1 className="mt-8 max-w-3xl text-balance text-4xl font-bold md:text-6xl">
          Design, print and marketing services under one roof
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Three connected services that build your brand, put it on paper and grow it online.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14">
        <ul className="grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <li key={service.slug}>
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h2 className="text-2xl font-bold">
                    <Link href={`/services/${service.slug}`} className="hover:text-primary">
                      {service.name}
                    </Link>
                  </h2>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{service.description}</p>
                  <ul className="mt-6 flex flex-col gap-2">
                    {service.subservices.map((sub) => (
                      <li key={sub.slug}>
                        <Link
                          href={subservicePath(service, sub)}
                          className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary"
                        >
                          <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/services/${service.slug}`}
                    className="mt-auto inline-flex items-center gap-2 pt-8 font-semibold text-primary"
                  >
                    Explore {service.name}
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </section>

      <CtaBand />
    </>
  )
}
