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
        title: 'Logo design that makes your business instantly recognisable',
        description:
          'A memorable logo built around your business goals, your audience and the place you want to take your brand.',
        quickAnswer:
          'Digital Weavix logo design builds a mark around your business goals and audience. First concepts arrive within 48 hours, and you get unlimited reasonable revisions plus web-ready and print-ready files.',
        points: ['First concepts within 48 hours', 'Unlimited reasonable revisions', 'Web-ready and print-ready files'],
        faqs: [
          {
            question: 'What files will I receive with my logo?',
            answer:
              'You receive web-ready and print-ready files, so the logo works on screens, signage, stationery and packaging.',
          },
          {
            question: 'How many revisions can I request?',
            answer:
              'Every logo project includes unlimited reasonable revisions. Once you approve a direction, we refine it until the final files are right.',
          },
        ],
      },
      {
        slug: 'brand-identity',
        name: 'Brand Identity',
        title: 'A brand identity system that looks consistent everywhere',
        description:
          'Colours, typography, logo system and usage rules that keep every touchpoint looking like it belongs to you.',
        quickAnswer:
          'Digital Weavix brand identity covers your colour palette, typography, logo system and usage rules. You receive a brand guidelines document so your team and suppliers always use the brand correctly.',
        points: ['Colour palette and typography', 'Logo usage guidelines', 'Brand guidelines document'],
        faqs: [
          {
            question: 'What is included in a brand identity project?',
            answer:
              'The project covers your colour palette, typography, logo usage rules and a brand guidelines document that your team can follow.',
          },
          {
            question: 'Can you build a brand identity around my existing logo?',
            answer:
              'Yes. We can build the colours, typography and rules around your current logo, or refine the logo first if it needs an update.',
          },
        ],
      },
      {
        slug: 'packaging-design',
        name: 'Packaging Design',
        title: 'Packaging design that sells before the box is opened',
        description:
          'Boxes, labels and pouches that stand out on the shelf and feel premium when customers unbox them.',
        quickAnswer:
          'Digital Weavix packaging design covers boxes, labels and pouches with structural dieline setup, print-ready pre-press checks and realistic mockups for approval, so you see the finished product before printing.',
        points: ['Structural dieline setup', 'Print-ready pre-press checks', 'Realistic mockups for approval'],
        faqs: [
          {
            question: 'Do you handle the structural design of the box or pouch?',
            answer:
              'Yes. We set up the structural dieline so your box, label or pouch is built correctly for production.',
          },
          {
            question: 'Can I see a mockup before anything is printed?',
            answer:
              'Yes. We create realistic mockups for your approval, and our pre-press team checks the print files before production starts.',
          },
        ],
      },
      {
        slug: 'social-media-creatives',
        name: 'Social Media Creatives',
        title: 'Social media creatives that stop the scroll',
        description:
          'Posts, stories, reel covers and ad creatives designed for your brand and sized for every platform.',
        quickAnswer:
          'Digital Weavix designs posts, stories, reel covers and ad creatives sized for every platform. Monthly creative packs keep your feed consistent, and you receive editable Canva or Figma templates.',
        points: ['Monthly creative packs', 'Platform-sized layouts', 'Editable Canva or Figma templates'],
        faqs: [
          {
            question: 'Which platforms do you design for?',
            answer:
              'We size creatives for each platform you use, such as Instagram, Facebook and LinkedIn, so every post fits without awkward cropping.',
          },
          {
            question: 'Can my team edit the designs later?',
            answer:
              'Yes. You receive editable Canva or Figma templates, so your team can update text, dates and offers without starting from scratch.',
          },
        ],
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
        title: 'Business cards that people keep instead of throwing away',
        description:
          'Premium stocks, special finishes and fast turnaround for cards that people keep instead of throwing away.',
        quickAnswer:
          'Digital Weavix prints business cards on matte, gloss and textured stocks, with foil, spot UV and embossing options. Cards start at 100 pieces, and standard jobs ship within 3 to 5 business days after proof approval.',
        points: ['Matte, gloss and textured stocks', 'Foil, spot UV and embossing', 'Reprint guarantee on our errors'],
        faqs: [
          {
            question: 'What is the minimum order for business cards?',
            answer: 'Business cards start at 100 pieces, so you can order a small run to test a new design.',
          },
          {
            question: 'How long does business card printing take?',
            answer:
              'Standard jobs ship within 3 to 5 business days after you approve the proof. Express options are available when you need cards sooner.',
          },
        ],
      },
      {
        slug: 'flyers-brochures',
        name: 'Flyers & Brochures',
        title: 'Flyers and brochures that get read',
        description:
          'Single-sheet flyers, folded brochures and catalogues for events, menus, product launches and sales.',
        quickAnswer:
          'Digital Weavix prints single-sheet flyers, leaflets, posters, bi-fold and tri-fold brochures, and catalogues for events, menus, launches and sales. Large runs get bulk pricing.',
        points: ['Flyers, leaflets and posters', 'Bi-fold and tri-fold brochures', 'Bulk pricing for large runs'],
        faqs: [
          {
            question: 'Can you print both flyers and folded brochures?',
            answer:
              'Yes. We print single-sheet flyers, leaflets and posters, as well as bi-fold and tri-fold brochures and catalogues.',
          },
          {
            question: 'Do you offer bulk pricing?',
            answer:
              'Yes. Large print runs qualify for bulk pricing, so the more you print, the lower your cost per piece.',
          },
        ],
      },
      {
        slug: 'banners-large-format',
        name: 'Banners & Large Format',
        title: 'Banners and large format signage built to last outdoors',
        description:
          'Roll-up banners, vinyl signage and shop-front graphics printed on weather-resistant materials.',
        quickAnswer:
          'Digital Weavix prints roll-up and X-banners, vinyl and sticker signage, and shop-front graphics on weather-resistant materials with outdoor-grade inks. Banners can be ordered as a single piece.',
        points: ['Roll-up and X-banners', 'Vinyl and sticker signage', 'Outdoor-grade inks and materials'],
        faqs: [
          {
            question: 'Are your banners suitable for outdoor use?',
            answer:
              'Yes. We print on weather-resistant materials with outdoor-grade inks, so your signage holds up outside.',
          },
          {
            question: 'Can I order just one banner?',
            answer: 'Yes. Banners and large format signage can be ordered as a single piece.',
          },
        ],
      },
      {
        slug: 'custom-merchandise',
        name: 'Custom Merchandise',
        title: 'Custom merchandise that turns customers into advertisements',
        description:
          'Branded mugs, t-shirts, caps and tote bags that turn your customers and team into walking advertisements.',
        quickAnswer:
          'Digital Weavix prints your logo on mugs, t-shirts, caps and tote bags for customers and teams. We take small and bulk orders and provide logo placement mockups before printing starts.',
        points: ['Mugs, tees, caps and tote bags', 'Small and bulk orders', 'Logo placement mockups before printing'],
        faqs: [
          {
            question: 'Can I order a small batch of merchandise?',
            answer:
              'Yes. We take small and bulk orders, so you can test a product before committing to a large run.',
          },
          {
            question: 'Will I see how my logo looks before printing?',
            answer: 'Yes. We provide logo placement mockups for your approval before production starts.',
          },
        ],
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
        title: 'SEO that moves your business up Google',
        description:
          'Technical, on-page and local SEO that moves your business up Google for the searches your customers make.',
        quickAnswer:
          'Digital Weavix SEO covers keyword research, a content plan, local SEO and Google Business Profile optimisation. You receive monthly ranking and traffic reports so you can track progress.',
        points: ['Keyword research and content plan', 'Local SEO and Google Business Profile', 'Monthly ranking and traffic reports'],
        faqs: [
          {
            question: 'How soon will I see results from SEO?',
            answer:
              'Most businesses see early movement in rankings within three to four months. Local searches can respond faster, especially once your Google Business Profile is fully optimised.',
          },
          {
            question: 'Do you handle local SEO as well?',
            answer:
              'Yes. We optimise your Google Business Profile and local search presence alongside the on-page work on your website.',
          },
        ],
      },
      {
        slug: 'social-media-marketing',
        name: 'Social Media Marketing',
        title: 'Social media marketing that builds an engaged community',
        description:
          'Content planning, posting and community management across Instagram, Facebook and LinkedIn.',
        quickAnswer:
          'Digital Weavix plans, posts and manages your content across Instagram, Facebook and LinkedIn. You receive a monthly content calendar, active audience engagement and reports on follower and reach growth.',
        points: ['Monthly content calendar', 'Posting and audience engagement', 'Follower and reach growth reports'],
        faqs: [
          {
            question: 'Which platforms do you manage?',
            answer: 'We manage Instagram, Facebook and LinkedIn, and we recommend the mix that fits your audience.',
          },
          {
            question: 'Do you respond to followers as well?',
            answer: 'Yes. Audience engagement is part of the service, so comments and messages get answered on brand.',
          },
        ],
      },
      {
        slug: 'google-ads',
        name: 'Google Ads',
        title: 'Google Ads campaigns focused on cost per lead',
        description:
          'Search and display campaigns managed for a clear cost per lead and full visibility into every rupee or dollar spent.',
        quickAnswer:
          'Digital Weavix runs Google Search and display campaigns with keyword and audience setup, conversion tracking and weekly bid and budget optimisation. You see exactly where every rupee or dollar goes.',
        points: ['Keyword and audience setup', 'Conversion tracking', 'Weekly bid and budget optimisation'],
        faqs: [
          {
            question: 'Do I need a big budget to start with Google Ads?',
            answer:
              'No. We set up campaigns to fit your budget and focus on the highest-intent searches first, then scale spend once we see what converts.',
          },
          {
            question: 'How do you measure whether the campaign is working?',
            answer:
              'We set up conversion tracking so you can see which clicks turn into leads, and we adjust bids and budgets every week based on that data.',
          },
        ],
      },
      {
        slug: 'meta-ads',
        name: 'Meta Ads',
        title: 'Meta Ads on Facebook and Instagram that convert',
        description:
          'Facebook and Instagram ad campaigns built around your offer, your audience and creatives tested for results.',
        quickAnswer:
          'Digital Weavix builds Facebook and Instagram ad campaigns around your offer and audience, testing creatives to find what performs. Retargeting brings back warm leads who already know your brand.',
        points: ['Precise audience targeting', 'A/B tested ad creatives', 'Retargeting for warm leads'],
        faqs: [
          {
            question: 'How do you choose the audience for my ads?',
            answer:
              'We target people based on your offer and your best customers, then refine the audience as the results come in.',
          },
          {
            question: 'Do you test different ad creatives?',
            answer:
              'Yes. We run A/B tests on ad creatives and put more budget behind the ones that perform best.',
          },
        ],
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
