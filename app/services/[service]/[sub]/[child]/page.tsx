import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getNestedSubService, getPortfolio, getServices } from '@/lib/cms'
import { SubServiceView } from '@/components/sub-service-view'

type Props = { params: Promise<{ service: string; sub: string; child: string }> }

export async function generateStaticParams() {
  const services = await getServices()
  return services.flatMap((s) =>
    s.subServices.flatMap((sub) => (sub.children ?? []).map((child) => ({ service: s.slug, sub: sub.slug, child: child.slug }))),
  )
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service: serviceSlug, sub: subSlug, child: childSlug } = await params
  const result = await getNestedSubService(serviceSlug, subSlug, childSlug)
  if (!result) return {}
  const { service, parent, subService: sub } = result
  const path = `/services/${service.slug}/${parent.slug}/${sub.slug}`
  return {
    title: { absolute: sub.metaTitle },
    description: sub.metaDescription,
    keywords: sub.keywords,
    alternates: { canonical: path },
    openGraph: { title: sub.metaTitle, description: sub.metaDescription, url: path, images: [{ url: service.heroImage, alt: service.heroAlt }] },
  }
}

export default async function NestedSubServicePage({ params }: Props) {
  const { service: serviceSlug, sub: subSlug, child: childSlug } = await params
  const result = await getNestedSubService(serviceSlug, subSlug, childSlug)
  if (!result) notFound()
  const { service, parent, subService: sub } = result
  const path = `/services/${service.slug}/${parent.slug}/${sub.slug}`
  const portfolio = await getPortfolio(service.slug)
  const siblings = (parent.children ?? [])
    .filter((s) => s.slug !== sub.slug)
    .map((s) => ({ name: s.name, href: `/services/${service.slug}/${parent.slug}/${s.slug}` }))

  return (
    <SubServiceView
      service={service}
      sub={sub}
      path={path}
      breadcrumbs={[
        { name: 'Services', href: '/services' },
        { name: service.name, href: `/services/${service.slug}` },
        { name: parent.name, href: `/services/${service.slug}/${parent.slug}` },
        { name: sub.name, href: path },
      ]}
      portfolio={portfolio}
      siblings={siblings}
    />
  )
}
