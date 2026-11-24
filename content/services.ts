import type { Service } from './types'

export const services: Service[] = [
  {
    slug: 'graphic-designing',
    name: 'Graphic Designing',
    title: 'Graphic designing that makes your brand impossible to forget',
    description:
      'Logos, brand identities, packaging and social media creatives designed to build trust and get your business noticed.',
    quickAnswer:
      'Digital Weavix graphic designing covers logo design, brand identity, packaging design and social media creatives. First concepts arrive within 48 hours, and every project includes unlimited reasonable revisions.',
    image: '/images/graphic-design-hero.png',
    imageAlt: 'Graphic design work spread across a studio table with logos, colour swatches and packaging drafts',
    subservices: [
      {
        slug: 'logo-design',
        name: 'Logo Design',
        description:
          'A memorable logo built around your business goals, your audience and the place you want to take your brand.',
        points: ['First concepts within 48 hours', 'Unlimited reasonable revisions', 'Web-ready and print-ready files'],
      },
      {
        slug: 'brand-identity',
        name: 'Brand Identity',
        description:
          'Colours, typography, logo system and usage rules that keep every touchpoint looking like it belongs to you.',
        points: ['Colour palette and typography', 'Logo usage guidelines', 'Brand guidelines document'],
      },
      {
        slug: 'packaging-design',
        name: 'Packaging Design',
        description:
          'Boxes, labels and pouches that stand out on the shelf and feel premium when customers unbox them.',
        points: ['Structural dieline setup', 'Print-ready pre-press checks', 'Realistic mockups for approval'],
      },
      {
        slug: 'social-media-creatives',
        name: 'Social Media Creatives',
        description:
          'Posts, stories, reel covers and ad creatives designed for your brand and sized for every platform.',
        points: ['Monthly creative packs', 'Platform-sized layouts', 'Editable Canva or Figma templates'],
      },
    ],
    faqs: [
      {
        question: 'How long does a logo design project take?',
        answer:
          'We deliver first concepts within 48 hours of your brief. After you choose a direction, refinements and final files usually take between three and seven days.',
      },
      {
        question: 'Who owns the designs after the project is finished?',
        answer:
          'You own the final designs once the invoice is paid in full. We hand over all source files so you can use them anywhere.',
      },
    ],
  },
  {
    slug: 'printing',
    name: 'Printing',
    title: 'Premium printing for every brand touchpoint',
    description:
      'Business cards, flyers, brochures, banners and custom merchandise printed on premium stock with careful colour checks.',
    quickAnswer:
      'Digital Weavix printing covers business cards, flyers and brochures, banners and large format signage, and custom merchandise. Standard jobs ship within 3 to 5 business days after proof approval, and we reprint any error on our side.',
    image: '/images/printing-hero.png',
    imageAlt: 'Printed business cards, brochures and banners arranged on a workbench',
    subservices: [
      {
        slug: 'business-cards',
        name: 'Business Cards',
        description:
          'Premium stocks, special finishes and fast turnaround for cards that people keep instead of throwing away.',
        points: ['Matte, gloss and textured stocks', 'Foil, spot UV and embossing', 'Reprint guarantee on our errors'],
      },
      {
        slug: 'flyers-brochures',
        name: 'Flyers & Brochures',
        description:
          'Single-sheet flyers, folded brochures and catalogues for events, menus, product launches and sales.',
        points: ['Flyers, leaflets and posters', 'Bi-fold and tri-fold brochures', 'Bulk pricing for large runs'],
      },
      {
        slug: 'banners-large-format',
        name: 'Banners & Large Format',
        description:
          'Roll-up banners, vinyl signage and shop-front graphics printed on weather-resistant materials.',
        points: ['Roll-up and X-banners', 'Vinyl and sticker signage', 'Outdoor-grade inks and materials'],
      },
      {
        slug: 'custom-merchandise',
        name: 'Custom Merchandise',
        description:
          'Branded mugs, t-shirts, caps and tote bags that turn your customers and team into walking advertisements.',
        points: ['Mugs, tees, caps and tote bags', 'Small and bulk orders', 'Logo placement mockups before printing'],
      },
    ],
    faqs: [
      {
        question: 'Can I send my own print-ready files?',
        answer:
          'Yes. Send PDF or AI files with 3 mm bleed and CMYK colours. Our pre-press team checks every file and tells you about any issue before printing starts.',
      },
      {
        question: 'What is the minimum order quantity?',
        answer:
          'Most products have no minimum for small runs. Business cards start at 100 pieces and flyers and banners can be ordered as a single piece.',
      },
    ],
  },
  {
    slug: 'digital-marketing',
    name: 'Digital Marketing',
    title: 'Digital marketing that turns searches into customers',
    description:
      'SEO, social media marketing, Google Ads and Meta Ads planned around revenue goals and reported every month.',
    quickAnswer:
      'Digital Weavix digital marketing covers SEO, social media marketing, Google Ads and Meta Ads. Campaigns launch within one to two weeks of kickoff, and you receive clear monthly reports on traffic, leads and spend.',
    image: '/images/digital-marketing-hero.png',
    imageAlt: 'Marketing dashboard showing search rankings, social engagement and ad performance charts',
    subservices: [
      {
        slug: 'seo',
        name: 'SEO',
        description:
          'Technical, on-page and local SEO that moves your business up Google for the searches your customers make.',
        points: ['Keyword research and content plan', 'Local SEO and Google Business Profile', 'Monthly ranking and traffic reports'],
      },
      {
        slug: 'social-media-marketing',
        name: 'Social Media Marketing',
        description:
          'Content planning, posting and community management across Instagram, Facebook and LinkedIn.',
        points: ['Monthly content calendar', 'Posting and audience engagement', 'Follower and reach growth reports'],
      },
      {
        slug: 'google-ads',
        name: 'Google Ads',
        description:
          'Search and display campaigns managed for a clear cost per lead and full visibility into every rupee or dollar spent.',
        points: ['Keyword and audience setup', 'Conversion tracking', 'Weekly bid and budget optimisation'],
      },
      {
        slug: 'meta-ads',
        name: 'Meta Ads',
        description:
          'Facebook and Instagram ad campaigns built around your offer, your audience and creatives tested for results.',
        points: ['Precise audience targeting', 'A/B tested ad creatives', 'Retargeting for warm leads'],
      },
    ],
    faqs: [
      {
        question: 'How soon will I see results from SEO?',
        answer:
          'Most businesses see early movement in rankings within three to four months. Local searches can respond faster, especially once your Google Business Profile is fully optimised.',
      },
      {
        question: 'Do I need a big ad budget to start with Google Ads or Meta Ads?',
        answer:
          'No. We set up campaigns to fit your budget and focus on the highest-intent audiences first, then scale spend once we see which ads convert.',
      },
    ],
  },
]
