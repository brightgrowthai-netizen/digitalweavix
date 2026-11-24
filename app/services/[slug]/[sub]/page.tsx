import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getServices, getSubservice } from '@/lib/cms'
import { subservicePath } from '@/content/services'
import { SubservicePageView } from '@/components/subservice-page'

type Props = { params: Promise<{ slug: string; sub: string }> }

export async function generateStaticParams() {
  const services = await getServices()
  return services.flatMap((service) =>
    service.subservices
      .filter((sub) => !sub.href)
      .map((sub) => ({ slug: service.slug, sub: sub.slug })),
  )
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, sub } = await params
  const match = await getSubservice(slug, sub)
  if (!match) return {}
  const { service, subservice } = match
  return {
    title: `${subservice.name} | ${service.name}`,
    description: subservice.description,
    alternates: { canonical: `/services/${service.slug}/${subservice.slug}` },
  }
}

export default async function SubservicePage({ params }: Props) {
  const { slug, sub } = await params
  const match = await getSubservice(slug, sub)
  if (!match) notFound()
  const { service, subservice } = match

  return (
    <SubservicePageView
      service={service}
      subservice={subservice}
      crumbs={[
        { name: 'Services', href: '/services' },
        { name: service.name, href: `/services/${service.slug}` },
        { name: subservice.name, href: `/services/${service.slug}/${subservice.slug}` },
      ]}
      childPages={subservice.children?.map((child) => ({
        name: child.name,
        description: child.description,
        href: `/services/${service.slug}/${subservice.slug}/${child.slug}`,
      }))}
      related={service.subservices
        .filter((item) => item.slug !== subservice.slug)
        .map((item) => ({ name: item.name, description: item.description, href: subservicePath(service, item) }))}
      relatedTitle={`More ${service.name.toLowerCase()} services`}
      backHref={`/services/${service.slug}`}
      backLabel={`Back to all ${service.name} services`}
    />
  )
}
