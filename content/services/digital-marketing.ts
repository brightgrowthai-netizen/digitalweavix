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
      slug: 'seo-services',
      name: 'SEO Services',
      shortDescription: 'Technical, on-page and off-page SEO that ranks your website for high-intent keywords.',
      metaTitle: 'SEO Services | Search Engine Optimization Agency',
      metaDescription:
        'Rank higher on Google with Digital Weavix SEO services: technical SEO, keyword research, on-page optimization, content and link building. Free SEO audit on WhatsApp.',
      keywords: ['seo services', 'seo agency', 'search engine optimization', 'technical seo', 'on page seo', 'link building services', 'seo company'],
      quickAnswer:
        'Our SEO services include technical audits, keyword research, on-page optimization, schema markup, content creation, internal linking and white-hat link building, designed to increase rankings, organic traffic and leads.',
      intro:
        'Organic search is the highest-intent traffic you can get, and it keeps working while you sleep. We find the exact searches your buyers make, then optimize, write and build authority until your pages own the top of Google.',
      benefits: [
        { title: 'Buyer-intent keywords', description: 'We target searches that lead to enquiries and sales, not just traffic.' },
        { title: 'Technical excellence', description: 'Speed, Core Web Vitals, crawlability and structured data done right.' },
        { title: 'Content that ranks', description: 'Expert, helpful content aligned with Google E-E-A-T guidelines.' },
        { title: 'Safe link building', description: 'White-hat digital PR and outreach that builds lasting authority.' },
      ],
      deliverables: ['Full technical SEO audit', 'Keyword and competitor research', 'On-page and schema optimization', 'Monthly SEO content', 'White-hat link building', 'Monthly ranking reports'],
      faqs: [
        { question: 'How long does SEO take to show results?', answer: 'Most websites see measurable improvements in 3 to 6 months, with strong compounding results between 6 and 12 months depending on competition and website history.' },
        { question: 'Do you guarantee first position on Google?', answer: 'No ethical agency can guarantee a specific position because Google controls rankings. We guarantee transparent work, proven methods and clear reporting on progress.' },
        { question: 'What is GEO and do you offer it?', answer: 'Generative Engine Optimization (GEO) structures your content and brand signals so AI assistants like ChatGPT, Gemini and Google AI Overviews can understand and cite your business. It is included in our SEO plans.' },
        { question: 'Is SEO worth it for a small business?', answer: 'Yes. SEO is one of the most cost-effective long-term channels for small businesses because rankings keep generating leads without paying for every click.' },
      ],
    },
    {
      slug: 'local-seo',
      name: 'Local SEO & Google Business Profile',
      shortDescription: 'Dominate the Google Map Pack and "near me" searches in your city.',
      metaTitle: 'Local SEO Services | Google Business Profile Optimization',
      metaDescription:
        'Get found in Google Maps and "near me" searches. Local SEO, Google Business Profile optimization, citations and review strategy by Digital Weavix. Free local audit.',
      keywords: ['local seo services', 'google business profile optimization', 'google maps ranking', 'near me seo', 'local seo agency', 'google my business management'],
      quickAnswer:
        'Local SEO improves your visibility in Google Maps and "near me" searches through Google Business Profile optimization, local citations, review generation, location pages and local link building.',
      intro:
        'When someone searches "near me", the top three businesses in the Map Pack get most of the calls. We optimize your Google Business Profile, citations and reviews so those calls come to you.',
      benefits: [
        { title: 'Map Pack visibility', description: 'Show up in the top three map results for local searches.' },
        { title: 'More calls and visits', description: 'Turn local searches into phone calls, directions and WhatsApp chats.' },
        { title: 'Review growth', description: 'A simple system to earn more genuine five-star reviews.' },
        { title: 'Consistent citations', description: 'Accurate business details across directories and maps.' },
      ],
      deliverables: ['Google Business Profile optimization', 'Weekly GBP posts', 'Local citation building', 'Review generation strategy', 'Location landing pages', 'Local rank tracking grid'],
      faqs: [
        { question: 'How do I rank higher on Google Maps?', answer: 'Map rankings depend on relevance, distance and prominence. Optimizing your Google Business Profile, earning reviews, building consistent citations and adding local content all improve prominence.' },
        { question: 'Do you manage Google Business Profile posts?', answer: 'Yes. We publish regular offers, updates and photos to keep your profile active and engaging, which supports better local visibility.' },
        { question: 'Can you help with multiple locations?', answer: 'Yes. We build multi-location strategies with individual profiles and location pages for each branch.' },
      ],
    },
    {
      slug: 'social-media-marketing',
      name: 'Social Media Marketing',
      shortDescription: 'Strategy, content, community management and growth for Instagram, Facebook, TikTok and LinkedIn.',
      metaTitle: 'Social Media Marketing Agency | Social Media Management Services',
      metaDescription:
        'Grow your brand with Digital Weavix social media marketing: strategy, content creation, reels, community management and paid social for Instagram, Facebook, TikTok and LinkedIn.',
      keywords: ['social media marketing agency', 'social media management', 'instagram marketing', 'tiktok marketing', 'facebook marketing', 'linkedin marketing services'],
      quickAnswer:
        'Our social media marketing service covers strategy, content calendars, graphic and video creation, captions, scheduling, community management, influencer collaborations and paid social campaigns with monthly analytics.',
      intro:
        'Social media is where your customers discover, compare and fall in love with brands. We turn your profiles into a consistent content engine that builds trust, grows a loyal community and sends ready-to-buy customers to your WhatsApp.',
      benefits: [
        { title: 'Content that converts', description: 'Reels, carousels and stories built around what your audience wants.' },
        { title: 'Done-for-you management', description: 'Planning, design, posting and replies handled for you.' },
        { title: 'Growth with paid social', description: 'Targeted Meta and TikTok ads to accelerate reach and sales.' },
        { title: 'Clear analytics', description: 'Monthly insights on reach, engagement, followers and leads.' },
      ],
      deliverables: ['Social media strategy', 'Monthly content calendar', 'Posts, reels and stories', 'Captions and hashtag research', 'Community management', 'Monthly performance report'],
      faqs: [
        { question: 'Which social media platforms should my business be on?', answer: 'It depends on your audience. Instagram and Facebook suit most local and consumer brands, TikTok drives fast discovery, and LinkedIn is best for B2B. We recommend platforms during your free strategy call.' },
        { question: 'Do you create reels and videos?', answer: 'Yes. We plan, script, edit and design short-form videos, and can organize content shoots for products and locations.' },
        { question: 'How do you measure social media success?', answer: 'Beyond followers, we track reach, engagement rate, profile visits, link clicks, WhatsApp enquiries and sales attributed to social.' },
      ],
    },
    {
      slug: 'google-ads-ppc',
      name: 'Google Ads & PPC Management',
      shortDescription: 'Search, Performance Max, Shopping and Meta Ads campaigns optimized for ROI.',
      metaTitle: 'Google Ads Management & PPC Agency | Meta Ads Experts',
      metaDescription:
        'Profitable Google Ads management and PPC services: Search, Performance Max, Shopping, YouTube and Meta Ads. Conversion tracking and weekly optimization by Digital Weavix.',
      keywords: ['google ads agency', 'ppc management', 'google ads management', 'meta ads agency', 'facebook ads management', 'performance max campaigns'],
      quickAnswer:
        'Digital Weavix manages Google Search, Performance Max, Shopping and YouTube campaigns plus Meta and TikTok ads, including conversion tracking, keyword research, ad creatives, landing page advice and weekly optimization.',
      intro:
        'Paid ads put you at the top of Google and in front of the right social audiences today. We build tightly targeted campaigns, write compelling ads, design the creatives and optimize every week to lower your cost per lead.',
      benefits: [
        { title: 'Instant visibility', description: 'Appear at the top of search results from day one.' },
        { title: 'Lower cost per lead', description: 'Smart bidding, negatives and testing to stop wasted spend.' },
        { title: 'In-house creatives', description: 'Ad visuals designed by our own graphic design team.' },
        { title: 'Accurate tracking', description: 'Conversion tracking for calls, WhatsApp clicks and sales.' },
      ],
      deliverables: ['Account audit and setup', 'Keyword and audience research', 'Ad copy and creatives', 'Conversion tracking (GA4 & GTM)', 'Weekly bid and budget optimization', 'Monthly ROI reporting'],
      faqs: [
        { question: 'How much should I spend on Google Ads?', answer: 'Budget depends on your industry, location and goals. We help you start with a test budget, measure cost per lead, then scale what is profitable.' },
        { question: 'Do I own my ad accounts?', answer: 'Yes. Your Google Ads and Meta Ads accounts are always owned by you. We manage them with access you can revoke anytime.' },
        { question: 'Can you track WhatsApp leads from ads?', answer: 'Yes. We set up conversion tracking for WhatsApp button clicks, calls and form-free lead actions so you see exactly which ads drive enquiries.' },
      ],
    },
    {
      slug: 'content-marketing',
      name: 'Content Marketing & Copywriting',
      shortDescription: 'SEO blogs, website copy and AI-search-ready content that builds authority and trust.',
      metaTitle: 'Content Marketing & SEO Copywriting Services',
      metaDescription:
        'SEO content writing, blog posts, website copywriting and GEO-optimized content that ranks on Google and gets cited by AI assistants. Content marketing by Digital Weavix.',
      keywords: ['content marketing services', 'seo content writing', 'blog writing services', 'website copywriting', 'geo content optimization', 'copywriting agency'],
      quickAnswer:
        'Our content marketing service produces SEO blog posts, service pages, website copy, case studies and email content, structured with clear answers, FAQs and schema so it ranks on Google and is cited in AI search results.',
      intro:
        'Content is how search engines and AI assistants decide who the experts are. We research what your customers ask, then write clear, helpful, persuasive content that ranks, gets cited and convinces readers to message you.',
      benefits: [
        { title: 'Topic authority', description: 'Content clusters that prove expertise across your entire niche.' },
        { title: 'AI-search ready', description: 'Answer-first structure that AI Overviews and chatbots can quote.' },
        { title: 'Persuasive copy', description: 'Words that move readers from curious to customer.' },
        { title: 'Consistent publishing', description: 'A reliable editorial calendar that compounds traffic.' },
      ],
      deliverables: ['Keyword-led content strategy', 'SEO blog posts', 'Service and landing page copy', 'Case studies', 'FAQ and schema content', 'Email newsletters'],
      faqs: [
        { question: 'How often should I publish blog posts?', answer: 'Consistency matters more than volume. Two to four high-quality, well-researched posts per month is a strong starting point for most businesses.' },
        { question: 'Do you use AI to write content?', answer: 'Our writers may use AI for research support, but every article is written, fact-checked and edited by humans to meet Google quality guidelines and your brand voice.' },
        { question: 'Will content help me appear in ChatGPT and AI Overviews?', answer: 'Well-structured, authoritative content with clear answers and consistent brand mentions increases the likelihood of being cited by AI assistants. It is a core part of our GEO approach.' },
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
