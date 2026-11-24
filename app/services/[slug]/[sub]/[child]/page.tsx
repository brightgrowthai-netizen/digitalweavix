import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getChildSubservice, getServices } from '@/lib/cms'
import { SubservicePageView } from '@/components/subservice-page'

type Props = { params: Promise<{ slug: string; sub: string; child: string }> }

export async function generateStaticParams() {
  const services = await getServices()
  return services.flatMap((service) =>
    service.subservices.flatMap((sub) =>
      (sub.children ?? []).map((child) => ({ slug: service.slug, sub: sub.slug, child: child.slug })),
    ),
  )
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, sub, child } = await params
  const match = await getChildSubservice(slug, sub, child)
  if (!match) return {}
  return {
    title: `${match.child.name} | ${match.parent.name}`,
    description: match.child.description,
    alternates: { canonical: `/services/${slug}/${sub}/${match.child.slug}` },
  }
}

export default async function ChildSubservicePage({ params }: Props) {
  const { slug, sub, child } = await params
  const match = await getChildSubservice(slug, sub, child)
  if (!match) notFound()
  const { service, parent, child: page } = match
  const base = `/services/${service.slug}/${parent.slug}`

  return (
    <SubservicePageView
      service={service}
      subservice={page}
      crumbs={[
        { name: 'Services', href: '/services' },
        { name: service.name, href: `/services/${service.slug}` },
        { name: parent.name, href: base },
        { name: page.name, href: `${base}/${page.slug}` },
      ]}
      related={(parent.children ?? [])
        .filter((item) => item.slug !== page.slug)
        .map((item) => ({ name: item.name, description: item.description, href: `${base}/${item.slug}` }))}
      relatedTitle={`More ${parent.name} services`}
      backHref={base}
      backLabel={`Back to ${parent.name}`}
    />
  )
}
