import type { Service } from '../types'

export const digitalMarketing: Service = {
  slug: 'digital-marketing',
  name: 'Digital Marketing',
  icon: 'megaphone',
  tagline: 'More visibility. More clicks. More customers.',
  shortDescription:
    'SEO, local SEO, social media marketing, Google Ads and content marketing that put your business in front of buyers who are ready to purchase.',
  metaTitle: 'Digital Marketing Agency | SEO, Social Media & Google Ads Services',
  metaDescription:
    'Grow faster with Digital Weavix, a results-driven digital marketing agency. SEO, local SEO, social media marketing, Google Ads and content marketing with transparent monthly reporting. Free audit on WhatsApp.',
  keywords: [
    'digital marketing agency',
    'digital marketing services',
    'seo services',
    'seo agency',
    'social media marketing agency',
    'google ads agency',
    'ppc management',
    'local seo services',
    'content marketing services',
    'online marketing for small business',
  ],
  heroImage: '/images/digital-marketing-hero.png',
  heroAlt: 'Digital marketing strategist reviewing rising growth charts on a laptop and social posts on a phone',
  quickAnswer:
    'Digital Weavix is a digital marketing agency offering SEO, local SEO, Generative Engine Optimization (GEO), social media marketing, Google Ads and Meta Ads management, and content marketing. We focus on measurable outcomes such as rankings, qualified traffic, leads and sales, with transparent monthly reports.',
  intro: [
    'Your customers are searching on Google, asking AI assistants and scrolling social media right now. If your business is not showing up, your competitors are winning those customers by default.',
    'Digital Weavix builds marketing systems that compound. We combine technical SEO, persuasive content, sharp creative and data-driven ads, all designed in-house by the same team that crafts your brand, so every channel looks and performs like it belongs together.',
  ],
  benefits: [
    { title: 'Rank for more keywords', description: 'Technical, on-page and content SEO that captures hundreds of buyer-intent queries.' },
    { title: 'Visible in AI answers', description: 'GEO-ready content structured so ChatGPT, Gemini and AI Overviews can cite your business.' },
    { title: 'Ads that pay for themselves', description: 'Google and Meta campaigns optimized for cost per lead and return on ad spend.' },
    { title: 'Honest reporting', description: 'Clear monthly reports on rankings, traffic, leads and revenue, no vanity metrics.' },
  ],
  process: [
    { title: 'Free audit', description: 'We analyze your website, rankings, competitors and ad accounts.' },
    { title: 'Strategy', description: 'A 90-day roadmap with priority keywords, channels and KPIs.' },
    { title: 'Execute', description: 'Our SEO, content, design and ads specialists launch and optimize.' },
    { title: 'Report & scale', description: 'Monthly reviews, then we double down on what drives revenue.' },
  ],
  stats: [
    { value: '3.4x', label: 'Average organic traffic growth' },
    { value: '-38%', label: 'Average cost per lead' },
    { value: '1,200+', label: 'Page-one keywords won' },
  ],
  subServices: [
    {
      slug: 'optimization',
      name: 'Optimization',
      shortDescription: 'Conversion rate optimization and ongoing campaign tuning that turn more of your existing traffic into leads and sales.',
      metaTitle: 'Conversion Rate Optimization Services | Digital Weavix',
      metaDescription:
        'Improve conversions with Digital Weavix. Landing page testing, funnel analysis, ad campaign tuning and WhatsApp lead tracking to lower your cost per lead. Free audit on WhatsApp.',
      keywords: ['conversion rate optimization', 'cro services', 'landing page optimization', 'ad campaign optimization', 'lead generation optimization'],
      quickAnswer:
        'Digital Weavix optimizes websites, landing pages and paid campaigns using A/B tests, funnel analysis and conversion tracking, with monthly reports on leads, enquiries and cost per lead.',
      intro:
        'Getting visitors is only half the job. Optimization finds where people drop off, tests better pages and offers, and tunes your ads so the traffic you already pay for produces more enquiries and sales.',
      benefits: [
        { title: 'Higher conversion rate', description: 'Data-led changes to headlines, layouts, forms and calls to action.' },
        { title: 'Lower cost per lead', description: 'Campaigns refined to spend more on the keywords and audiences that convert.' },
        { title: 'Clear tracking', description: 'Form fills, WhatsApp clicks and calls tracked so you know what works.' },
        { title: 'Continuous testing', description: 'Every month we test, learn and roll out the winning variations.' },
      ],
      deliverables: ['Conversion tracking setup', 'Funnel and heatmap analysis', 'Landing page A/B testing', 'Ad campaign tuning', 'WhatsApp and form lead tracking', 'Monthly optimization report'],
      faqs: [
        { question: 'What is conversion rate optimization?', answer: 'It is the process of improving the share of visitors who take a desired action, such as filling a form or sending a WhatsApp message, without necessarily buying more traffic.' },
        { question: 'How long does it take to see results?', answer: 'Tracking and quick fixes often show impact within a few weeks. A/B tests usually need several weeks of data before we confirm a winner.' },
        { question: 'Do you need access to my website and ad accounts?', answer: 'Yes, we need read and edit access to your website analytics, ad accounts and tag manager so we can measure and test changes safely.' },
      ],
      children: [
        {
          slug: 'seo',
          name: 'SEO',
          shortDescription: 'Technical, on-page and content SEO that helps your business rank for the buyer-intent searches that bring in customers.',
          metaTitle: 'SEO Services That Grow Organic Traffic | Digital Weavix',
          metaDescription:
            'Rank higher on Google with Digital Weavix. Technical SEO, on-page optimization, content planning and monthly ranking reports. Get a free SEO audit on WhatsApp.',
          keywords: ['seo services', 'seo agency', 'technical seo', 'on-page seo', 'seo audit'],
          quickAnswer:
            'Digital Weavix provides SEO services covering technical fixes, on-page optimization and content planning, with monthly reports on keyword rankings, organic traffic and leads.',
          intro:
            'Most buyers start their search on Google. SEO makes sure your website appears when they look for what you sell, so you earn visits that do not cost a fee for every click.',
          benefits: [
            { title: 'Solid technical foundation', description: 'Crawling, indexing, page speed and site structure fixed so search engines can read your pages.' },
            { title: 'Pages that match intent', description: 'Titles, headings and internal links aligned with the searches your buyers actually make.' },
            { title: 'Content that ranks', description: 'Articles and service pages planned around priority keywords and the questions customers ask.' },
            { title: 'Measurable progress', description: 'Monthly reports on rankings, organic traffic and enquiries, with no vanity metrics.' },
          ],
          deliverables: ['Free SEO audit', 'Keyword research and priority list', 'Technical SEO fixes', 'On-page optimization for key pages', 'Content plan and article briefs', 'Monthly ranking and traffic report'],
          faqs: [
            { question: 'How long does SEO take to work?', answer: 'Most websites see early movement within a few months. Competitive keywords take longer, so we set realistic milestones in your 90-day roadmap.' },
            { question: 'What is the difference between SEO and Google Ads?', answer: 'SEO earns organic rankings over time without paying for each click. Google Ads places paid results immediately. Many businesses use both, and we can plan them together.' },
            { question: 'What access do you need to my website?', answer: 'We need access to your website platform or hosting, Google Search Console and analytics so we can audit the site and make changes.' },
          ],
        },
      ],
    },
  ],
  faqs: [
    { question: 'What digital marketing services does Digital Weavix provide?', answer: 'We provide SEO, local SEO, Generative Engine Optimization (GEO), social media marketing and management, Google Ads and Meta Ads management, content marketing, copywriting and conversion tracking.' },
    { question: 'How much do digital marketing services cost?', answer: 'We offer monthly plans tailored to your goals and budget, from focused local SEO packages to full multi-channel growth plans. Message us on WhatsApp for a free audit and custom proposal.' },
    { question: 'Do you require long-term contracts?', answer: 'No. Our plans run month to month after an initial onboarding period, because we prefer to earn your business with results.' },
    { question: 'How will I know if marketing is working?', answer: 'You receive clear monthly reports covering rankings, traffic, leads, WhatsApp enquiries, ad spend and return on investment, plus a review call to plan next steps.' },
    { question: 'Can you handle design and marketing together?', answer: 'Yes. That is our biggest advantage. Our design, print and marketing teams work together, so your ads, social posts, website and printed materials stay perfectly on-brand.' },
  ],
}
