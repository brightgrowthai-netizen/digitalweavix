import Link from 'next/link'
import type { ComponentType, ReactNode } from 'react'
import { Clock, Mail, MessageCircle } from 'lucide-react'
import { siteConfig, whatsappLink } from '@/content/site'
import { services } from '@/content/services'
import { Logo } from './logo'

type IconProps = { className?: string; 'aria-hidden'?: boolean }

type SocialLink = {
  label: string
  href: string
  icon: ComponentType<IconProps>
}

function Svg({ children, className, 'aria-hidden': ariaHidden }: IconProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden={ariaHidden}
    >
      {children}
    </svg>
  )
}

const InstagramIcon: SocialLink['icon'] = (props) => (
  <Svg {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
  </Svg>
)

const FacebookIcon: SocialLink['icon'] = (props) => (
  <Svg {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </Svg>
)

const LinkedinIcon: SocialLink['icon'] = (props) => (
  <Svg {...props}>
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V9h4v2" />
  </Svg>
)

const BehanceIcon: SocialLink['icon'] = (props) => (
  <Svg {...props}>
    <path d="M2 5h6.5a3 3 0 0 1 0 6H2z" />
    <path d="M2 11h7a3.5 3.5 0 0 1 0 7H2z" />
    <path d="M15 14h7a3.5 3.5 0 0 0-7 0 3.5 3.5 0 0 0 7 0" />
    <path d="M15 5h5" />
  </Svg>
)

const socialLinks: SocialLink[] = [
  { label: 'Instagram', href: siteConfig.social.instagram, icon: InstagramIcon },
  { label: 'Facebook', href: siteConfig.social.facebook, icon: FacebookIcon },
  { label: 'LinkedIn', href: siteConfig.social.linkedin, icon: LinkedinIcon },
  { label: 'Behance', href: siteConfig.social.behance, icon: BehanceIcon },
]

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-3">
        <div>
          <Logo inverted />
          <p className="mt-5 leading-relaxed text-secondary-foreground/75">{siteConfig.description}</p>
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

        <div>
          <h2 className="font-semibold text-secondary-foreground">Services</h2>
          <ul className="mt-5 flex flex-col gap-4 text-sm">
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={`/services/${service.slug}`} className="font-medium hover:text-primary">
                  {service.name}
                </Link>
                <ul className="mt-2 flex flex-col gap-1.5 pl-3 text-secondary-foreground/70">
                  {service.subservices.map((sub) => (
                    <li key={sub.slug}>
                      <Link href={`/services/${service.slug}#${sub.slug}`} className="hover:text-primary">
                        {sub.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-secondary-foreground">Follow us</h2>
          <ul className="mt-5 flex flex-col gap-3 text-sm">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-primary">
                  <span className="flex size-9 items-center justify-center rounded-full bg-secondary-foreground/10 text-primary">
                    <Icon className="size-4" aria-hidden={true} />
                  </span>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-secondary-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-6 text-sm text-secondary-foreground/60 md:flex-row">
          <p>
            {'\u00A9'} {year} {siteConfig.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-5">
            <li><Link href="/services" className="hover:text-primary">Services</Link></li>
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
