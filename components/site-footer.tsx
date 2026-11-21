import Link from 'next/link'
import { Clock, Mail, MessageCircle } from 'lucide-react'
import { getServices } from '@/lib/cms'
import { siteConfig, whatsappLink } from '@/content/site'
import { Logo } from './logo'

export async function SiteFooter() {
  const services = await getServices()
  const year = new Date().getFullYear()

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Logo inverted />
          <p className="mt-5 max-w-sm leading-relaxed text-secondary-foreground/75">{siteConfig.description}</p>
          <ul className="mt-6 flex flex-col gap-3 text-sm">
            <li>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary">
                <MessageCircle className="size-4 text-primary" aria-hidden="true" />
                WhatsApp: {siteConfig.whatsappDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 hover:text-primary">
                <Mail className="size-4 text-primary" aria-hidden="true" />
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-center gap-2 text-secondary-foreground/75">
              <Clock className="size-4 text-primary" aria-hidden="true" />
              {siteConfig.openingHoursLabel}
            </li>
          </ul>
        </div>
        {services.map((service) => (
          <div key={service.slug}>
            <h2 className="font-display text-base font-semibold">
              <Link href={`/services/${service.slug}`} className="hover:text-primary">
                {service.name}
              </Link>
            </h2>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-secondary-foreground/75">
              {service.subServices.map((sub) => (
                <li key={sub.slug}>
                  <Link href={`/services/${service.slug}/${sub.slug}`} className="hover:text-primary">
                    {sub.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-secondary-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-6 text-sm text-secondary-foreground/60 md:flex-row">
          <p>
            {'\u00A9'} {year} {siteConfig.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-5">
            <li><Link href="/about" className="hover:text-primary">About</Link></li>
            <li><Link href="/portfolio" className="hover:text-primary">Portfolio</Link></li>
            <li><Link href="/blog" className="hover:text-primary">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
            <li><Link href="/sitemap.xml" className="hover:text-primary">Sitemap</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
