import { services, subservicePath } from './services'

export type NavItem = { name: string; href: string; children?: NavItem[] }

const servicesNav: NavItem[] = services.map((service) => ({
  name: service.name,
  href: `/services/${service.slug}`,
  children: service.subservices.map((sub) => ({
    name: sub.name,
    href: subservicePath(service, sub),
    children: sub.children?.map((child) => ({
      name: child.name,
      href: `/services/${service.slug}/${sub.slug}/${child.slug}`,
    })),
  })),
}))

export const mainNav: NavItem[] = [
  { name: 'Services', href: '/services', children: servicesNav },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Blog', href: '/blog' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]
