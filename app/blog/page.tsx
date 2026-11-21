import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getPosts } from '@/lib/cms'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { CtaBand } from '@/components/cta-band'

export const metadata: Metadata = {
  title: 'Blog: Design, Printing & Digital Marketing Guides',
  description:
    'Expert guides on logo design costs, business card printing, SEO, social media marketing and more from the Digital Weavix team.',
  alternates: { canonical: '/blog' },
}

export default async function BlogPage() {
  const posts = await getPosts()
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pb-8 pt-8 md:pt-12">
        <Breadcrumbs items={[{ name: 'Blog', href: '/blog' }]} />
        <h1 className="mt-8 max-w-3xl text-balance text-4xl font-bold md:text-6xl">Guides to grow your brand</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Practical answers on design, printing and digital marketing from people who do it every day.
        </p>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-10">
        <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <li key={post.slug}>
              <article className="group h-full overflow-hidden rounded-2xl border border-border bg-card">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image src={post.image} alt={post.imageAlt} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                    {post.category} {'\u00B7'} {post.readingMinutes} min read
                  </p>
                  <h2 className="mt-2 text-xl font-bold leading-snug">
                    <Link href={`/blog/${post.slug}`} className="hover:text-primary">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                  <time dateTime={post.publishedAt} className="mt-4 block text-xs text-muted-foreground">
                    {new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </time>
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
