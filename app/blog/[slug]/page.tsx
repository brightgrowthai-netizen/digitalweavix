import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { CheckCircle2 } from 'lucide-react'
import { getPost, getPosts } from '@/lib/cms'
import { articleSchema } from '@/lib/schema'
import { JsonLd } from '@/components/json-ld'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { FaqSection } from '@/components/faq-section'
import { CtaBand } from '@/components/cta-band'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.metaDescription,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.metaDescription,
      url: `/blog/${post.slug}`,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      images: [{ url: post.image, alt: post.imageAlt }],
    },
  }
}

const toId = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) notFound()

  return (
    <>
      <JsonLd data={articleSchema(post)} />
      <article>
        <header className="mx-auto max-w-3xl px-5 pb-10 pt-8 md:pt-12">
          <Breadcrumbs items={[{ name: 'Blog', href: '/blog' }, { name: post.title, href: `/blog/${post.slug}` }]} />
          <p className="mt-8 text-sm font-semibold uppercase tracking-widest text-primary">{post.category}</p>
          <h1 className="mt-3 text-balance text-4xl font-bold leading-tight md:text-5xl">{post.title}</h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{post.excerpt}</p>
          <p className="mt-5 text-sm text-muted-foreground">
            By the Digital Weavix team {'\u00B7'} Updated{' '}
            <time dateTime={post.updatedAt}>
              {new Date(post.updatedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </time>{' '}
            {'\u00B7'} {post.readingMinutes} min read
          </p>
        </header>
        <div className="mx-auto max-w-5xl px-5">
          <div className="relative aspect-[16/9] overflow-hidden rounded-3xl">
            <Image src={post.image} alt={post.imageAlt} fill priority sizes="(min-width: 1024px) 64rem, 100vw" className="object-cover" />
          </div>
        </div>
        <div className="mx-auto max-w-3xl px-5 py-12">
          <aside aria-labelledby="takeaways-heading" className="rounded-2xl border-l-4 border-primary bg-accent/60 p-6">
            <h2 id="takeaways-heading" className="text-lg font-bold">Key takeaways</h2>
            <ul className="mt-4 flex flex-col gap-2.5">
              {post.keyTakeaways.map((t) => (
                <li key={t} className="flex gap-3 leading-relaxed">
                  <CheckCircle2 className="mt-1 size-4 shrink-0 text-primary" aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
          </aside>
          <nav aria-label="Table of contents" className="mt-10 rounded-2xl border border-border bg-card p-6">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">In this guide</h2>
            <ol className="mt-3 list-decimal space-y-1.5 pl-5">
              {post.sections.map((s) => (
                <li key={s.heading}>
                  <a href={`#${toId(s.heading)}`} className="hover:text-primary">{s.heading}</a>
                </li>
              ))}
            </ol>
          </nav>
          {post.sections.map((s) => (
            <section key={s.heading} className="mt-12">
              <h2 id={toId(s.heading)} className="scroll-mt-24 text-2xl font-bold md:text-3xl">{s.heading}</h2>
              {s.paragraphs.map((p) => (
                <p key={p.slice(0, 40)} className="mt-4 text-lg leading-relaxed text-foreground/85">{p}</p>
              ))}
            </section>
          ))}
        </div>
      </article>
      <FaqSection faqs={post.faqs} title="Related questions" />
      <CtaBand />
    </>
  )
}
