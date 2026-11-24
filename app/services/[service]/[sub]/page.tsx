import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPortfolio, getServices, getSubService } from '@/lib/cms'
import { SubServiceView } from '@/components/sub-service-view'

type Props = { params: Promise<{ service: string; sub: string }> }

export async function generateStaticParams() {
  const services = await getServices()
  return services.flatMap((s) => s.subServices.map((sub) => ({ service: s.slug, sub: sub.slug })))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service: serviceSlug, sub: subSlug } = await params
  const result = await getSubService(serviceSlug, subSlug)
  if (!result) return {}
  const { service, subService: sub } = result
  const path = `/services/${service.slug}/${sub.slug}`
  return {
    title: { absolute: sub.metaTitle },
    description: sub.metaDescription,
    keywords: sub.keywords,
    alternates: { canonical: path },
    openGraph: { title: sub.metaTitle, description: sub.metaDescription, url: path, images: [{ url: service.heroImage, alt: service.heroAlt }] },
  }
}

export default async function SubServicePage({ params }: Props) {
  const { service: serviceSlug, sub: subSlug } = await params
  const result = await getSubService(serviceSlug, subSlug)
  if (!result) notFound()
  const { service, subService: sub } = result
  const path = `/services/${service.slug}/${sub.slug}`
  const portfolio = await getPortfolio(service.slug)
  const siblings = service.subServices
    .filter((s) => s.slug !== sub.slug)
    .map((s) => ({ name: s.name, href: `/services/${service.slug}/${s.slug}` }))

  return (
    <SubServiceView
      service={service}
      sub={sub}
      path={path}
      breadcrumbs={[
        { name: 'Services', href: '/services' },
        { name: service.name, href: `/services/${service.slug}` },
        { name: sub.name, href: path },
      ]}
      portfolio={portfolio}
      siblings={siblings}
    />
  )
}
