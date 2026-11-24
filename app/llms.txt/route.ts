import { getPosts } from '@/lib/cms'
import { absoluteUrl, siteConfig } from '@/content/site'

export const dynamic = 'force-static'

export async function GET() {
  const posts = await getPosts()
  const lines = [
    `# ${siteConfig.name}`,
    '',
    `> ${siteConfig.description}`,
    '',
    `Contact: WhatsApp ${siteConfig.whatsappDisplay}, email ${siteConfig.email}. Hours: ${siteConfig.openingHoursLabel}.`,
    '',
    '## Guides',
    '',
    ...posts.map((p) => `- [${p.title}](${absoluteUrl(`/blog/${p.slug}`)}): ${p.excerpt}`),
    '',
    '## Company',
    '',
    `- [About](${absoluteUrl('/about')})`,
    `- [Portfolio](${absoluteUrl('/portfolio')})`,
    `- [Contact](${absoluteUrl('/contact')})`,
  ]
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } })
}
