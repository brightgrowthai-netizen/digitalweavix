import type { Service, Subservice } from './types'

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
        children: [
          {
            slug: 'programmatic-seo',
            name: 'Programmatic SEO',
            title: 'Programmatic SEO that builds useful pages at scale',
            description:
              'Template-driven pages built from your real data, each one written to answer a specific search instead of repeating the same text.',
            quickAnswer:
              'Digital Weavix programmatic SEO builds search-targeted pages from your product, location or category data. We test a small batch first, check indexing and duplicate content, then scale only the patterns that earn traffic.',
            points: ['Keyword patterns mapped to your data', 'Unique, useful copy on every page', 'Indexing and duplicate-content checks'],
            faqs: [
              {
                question: 'Is programmatic SEO safe for Google?',
                answer:
                  'It is when every page answers a real search with unique, useful information. We avoid thin pages that only swap a city or product name.',
              },
              {
                question: 'How many pages will you create?',
                answer:
                  'We start with a small batch, measure how those pages index and rank, and only then scale. The final number depends on your data and on how many real searches exist.',
              },
            ],
          },
          {
            slug: 'ecommerce-seo',
            name: 'E-commerce SEO',
            title: 'E-commerce SEO that gets your products found and bought',
            description:
              'Product, category and collection pages optimised so shoppers find your store when they search for what you sell.',
            quickAnswer:
              'Digital Weavix e-commerce SEO improves product titles, category pages, product descriptions and site structure for shopping searches. We also fix duplicate product pages and slow pages that hold back rankings and sales.',
            points: ['Product and category page optimisation', 'Product titles and descriptions that rank', 'Site structure and duplicate page fixes'],
            faqs: [
              {
                question: 'Will you work with the store platform I already use?',
                answer:
                  'Yes. We adapt the work to the platform you already run, so your team can keep managing the store after we finish.',
              },
              {
                question: 'Can my product pages rank for more than one search?',
                answer:
                  'Yes. We study how shoppers search, then write titles, headings and descriptions that match those searches without repeating the same words on every product.',
              },
            ],
          },
          {
            slug: 'ai-seo-services-provider',
            name: 'AI SEO Services Provider',
            title: 'AI SEO that helps your brand show up in AI search',
            description:
              'Content and site signals optimised so AI search tools can find, understand and cite your business in their answers.',
            quickAnswer:
              'Digital Weavix AI SEO helps your business appear in AI-generated answers as well as traditional search results. We structure pages with direct answers, clear entities, schema and trust signals that AI tools can read and cite.',
            points: ['Answer-first content for AI search', 'Schema and entity optimisation', 'Brand mentions and trust signals'],
            faqs: [
              {
                question: 'Does traditional SEO still matter for AI search?',
                answer:
                  'Yes. AI tools draw on indexed, trustworthy pages, so strong technical SEO and useful content remain the foundation.',
              },
              {
                question: 'Can you guarantee citations in AI answers?',
                answer:
                  'No one can guarantee that. We improve the signals that make your content easier for AI tools to find and trust, and we report what changes.',
              },
            ],
          },
          {
            slug: 'seo-audit-services',
            name: 'SEO Audit Services',
            title: 'An SEO audit that shows exactly what is holding you back',
            description:
              'A full review of your website, content and competitors, with a prioritised fix list you can act on straight away.',
            quickAnswer:
              'Digital Weavix SEO audits review your technical health, on-page content, backlinks and local listings. You receive a prioritised action plan that shows what to fix first and how much effort each fix takes.',
            points: ['Technical, on-page and content review', 'Backlink and competitor comparison', 'Prioritised action plan with effort estimates'],
            faqs: [
              {
                question: 'How long does an SEO audit take?',
                answer:
                  'Most audits are delivered within about one week of receiving access, depending on the size of your site.',
              },
              {
                question: 'Do I need to hire you to fix the issues?',
                answer:
                  'No. The audit stands on its own, and your team can carry out the fixes. If you would like help, we can do the work too.',
              },
            ],
          },
          {
            slug: 'technical-seo',
            name: 'Technical SEO',
            title: 'Technical SEO that helps search engines crawl and trust your site',
            description:
              'Site speed, crawlability, indexing, schema and mobile fixes that give your content a solid base to rank from.',
            quickAnswer:
              'Digital Weavix technical SEO fixes crawl errors, indexing problems, page speed, mobile usability and structured data. These fixes help search engines read your pages properly, so your content can rank as well as it should.',
            points: ['Crawl and indexing fixes', 'Page speed and Core Web Vitals', 'Structured data and sitemap setup'],
            faqs: [
              {
                question: 'Will technical SEO fix my rankings on its own?',
                answer:
                  'It removes the barriers that stop your pages ranking. Content and links still matter, so we pair technical work with the rest of your SEO plan.',
              },
              {
                question: 'What are Core Web Vitals?',
                answer:
                  'Core Web Vitals are Google measures of loading speed, responsiveness and visual stability. We improve them where they hold your pages back.',
              },
            ],
          },
          {
            slug: 'local-seo-ai',
            name: 'Local SEO AI',
            title: 'AI-assisted local SEO that puts you on the map',
            description:
              'Google Business Profile, local citations and location pages improved with AI tools to win nearby searches.',
            quickAnswer:
              'Digital Weavix local SEO AI uses AI tools to improve your Google Business Profile, local citations, reviews and location pages. This helps you appear in the Map Pack and in local AI answers for searches near your customers.',
            points: ['Google Business Profile optimisation', 'Local citations and review strategy', 'Location pages and AI-assisted local content'],
            faqs: [
              {
                question: 'How is this different from standard local SEO?',
                answer:
                  'We add AI-assisted research and content to the standard local work, so your listings and local pages match how people search today, including in AI tools.',
              },
              {
                question: 'Do you help with customer reviews?',
                answer:
                  'Yes. We set up a simple process for asking happy customers for reviews, in line with Google review policies, and help you reply in a way that builds trust.',
              },
            ],
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
      {
        slug: 'lead-gen-funnels',
        name: 'Lead Gen Funnels',
        title: 'Lead generation funnels that turn visitors into enquiries',
        description:
          'Landing pages, offers and follow-up sequences built to move visitors from the first click to a qualified enquiry.',
        quickAnswer:
          'Digital Weavix builds lead generation funnels with a clear offer, a focused landing page, a short form and automated follow-up. We track each step so you can see where visitors drop off and improve it.',
        points: ['Offer and landing page design', 'Forms and automated follow-up', 'Step-by-step funnel tracking'],
        faqs: [
          {
            question: 'What is a lead generation funnel?',
            answer:
              'It is the path a visitor follows from the first click to an enquiry, including the page, the offer, the form and the follow-up messages.',
          },
          {
            question: 'Can you send leads into my CRM?',
            answer:
              'Yes. We can send enquiries into the CRM or spreadsheet you already use, so no lead gets lost.',
          },
        ],
      },
      {
        slug: 'marketing-strategy',
        name: 'Marketing Strategy',
        title: 'A marketing strategy built around your revenue goals',
        description:
          'Audience, positioning and channel planning that shows where to spend your time and budget for the best return.',
        quickAnswer:
          'Digital Weavix marketing strategy starts with your revenue goals, audience and competitors. We recommend the channels, messages and budget split most likely to grow your business, then turn the plan into a 90-day roadmap.',
        points: ['Audience and competitor research', 'Positioning and channel plan', '90-day execution roadmap'],
        faqs: [
          {
            question: 'Who is a marketing strategy for?',
            answer:
              'It suits businesses that spend on marketing but are unsure which channels work, and new businesses that need a clear starting point.',
          },
          {
            question: 'Do you carry out the strategy too?',
            answer:
              'We can. Many clients start with the strategy and then choose the services they need to put it into action.',
          },
        ],
      },
      {
        slug: 'content-creation',
        name: 'Content Creation',
        title: 'Content creation that answers your customers questions',
        description:
          'Blog posts, guides, website copy and video scripts written to rank in search and build trust with buyers.',
        quickAnswer:
          'Digital Weavix content creation produces blog posts, guides, landing page copy and video scripts planned around your keywords. Every piece answers a real customer question and supports your SEO.',
        points: ['Keyword-led blog and guide writing', 'Landing page and website copy', 'Video scripts and content repurposing'],
        faqs: [
          {
            question: 'How much content will I receive each month?',
            answer:
              'We agree a monthly content plan with you based on your goals and budget, then publish to that schedule.',
          },
          {
            question: 'Do you check content for accuracy?',
            answer:
              'Yes. We check facts and claims with you before publishing, so the content describes your business correctly.',
          },
        ],
      },
      {
        slug: 'specialized-solutions',
        name: 'Specialized Solutions',
        title: 'Digital marketing built for your industry',
        description:
          'Tailored marketing plans for sectors with their own buyer journeys, rules and search habits.',
        quickAnswer:
          'Digital Weavix specialized solutions adapt our digital marketing to industries with their own rules, buyers and search habits. We build the plan around how your customers choose a provider, not around a generic template.',
        points: ['Industry research and buyer journey mapping', 'Industry-specific campaigns and content', 'Compliance-aware messaging'],
        faqs: [
          {
            question: 'Which industries do you work with?',
            answer:
              'We work across several sectors. Tell us about your business and we will confirm whether our approach fits.',
          },
          {
            question: 'Do you follow industry advertising rules?',
            answer:
              'Yes. We check the advertising and claims rules that apply to your sector before we launch campaigns.',
          },
        ],
      },
      {
        slug: 'web-design',
        name: 'Web Design',
        title: 'Web design that turns visitors into customers',
        description:
          'Fast, mobile-first websites and landing pages designed to rank in search and turn visitors into enquiries.',
        quickAnswer:
          'Digital Weavix web design builds fast, mobile-friendly websites and landing pages with clear calls to action and SEO set up from the start.',
        points: ['Mobile-first layouts', 'Clear calls to action', 'SEO-ready setup from day one'],
        faqs: [],
        href: '/services/web-design',
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
  {
    slug: 'web-design',
    name: 'Web Design',
    title: 'Web design that turns visitors into customers',
    description:
      'Fast, mobile-first websites and landing pages designed to rank in search and turn visitors into enquiries.',
    quickAnswer:
      'Digital Weavix web design builds fast, mobile-friendly websites and landing pages with clear calls to action and SEO set up from the start. Choose AI-assisted design, AI-planned landing pages or a focused startup website.',
    image: '/images/hero-studio.png',
    imageAlt: 'Design studio desk with layout mockups, colour swatches and a tablet showing a website dashboard',
    subservices: [
      {
        slug: 'ai-web-design',
        name: 'AI Web Design',
        title: 'AI web design that builds faster without losing the human touch',
        description:
          'Websites planned with AI-assisted research and prototyping, then refined by our designers to match your brand.',
        quickAnswer:
          'Digital Weavix AI web design uses AI tools to speed up research, layout exploration and copy drafts. Our designers refine every page by hand, so the final site matches your brand and speaks to your customers.',
        points: ['AI-assisted layout and copy drafts', 'Designer-led refinement and brand fit', 'Editable site handed over to you'],
        faqs: [
          {
            question: 'Is an AI-assisted website as good as one designed by people?',
            answer:
              'AI speeds up the early work, but our designers make the decisions on layout, brand and user experience.',
          },
          {
            question: 'Will I be able to update the site myself?',
            answer:
              'Yes. We build the site so your team can update text and images without needing a developer for every change.',
          },
        ],
      },
      {
        slug: 'ai-landing-pages',
        name: 'AI Landing Pages',
        title: 'Landing pages built to convert, planned with AI and tested with real data',
        description:
          'Focused landing pages for ads and campaigns, with copy and layouts tested to lift enquiries.',
        quickAnswer:
          'Digital Weavix builds landing pages for ads and campaigns. We use AI to explore message and layout ideas, then A/B test headlines and forms to see what converts. Each page has one clear goal and a short form.',
        points: ['Offer-focused copy and layout', 'A/B testing of headlines and forms', 'Speed and mobile optimisation'],
        faqs: [
          {
            question: 'How many landing pages do I need?',
            answer:
              'Most businesses start with one page per offer or ad group. We recommend the number based on your campaigns.',
          },
          {
            question: 'Can you connect the page to my ads?',
            answer:
              'Yes. We set up tracking so you can see which ads and pages bring in enquiries.',
          },
        ],
      },
      {
        slug: 'startup-web-design',
        name: 'Startup Web Design',
        title: 'Startup web design that launches fast and looks established',
        description:
          'Focused, fast-to-launch websites that help new businesses look credible from day one and grow with them.',
        quickAnswer:
          'Digital Weavix startup web design gives new businesses a credible, fast website built around their first offer. We keep the first version focused so you can launch sooner and add pages as you grow.',
        points: ['Focused launch-ready website', 'Brand-consistent design from day one', 'Room to grow as the business scales'],
        faqs: [
          {
            question: 'How quickly can a startup website go live?',
            answer:
              'It depends on how many pages you need and how ready your content is. We keep the first version focused so you can launch sooner.',
          },
          {
            question: 'Can you help with my logo and brand too?',
            answer:
              'Yes. Our graphic designing team can create your logo and brand identity so the website matches the rest of your brand.',
          },
        ],
      },
    ],
    faqs: [
      {
        question: 'How long does a website project take?',
        answer:
          'Timelines depend on the number of pages and how quickly content is ready. We agree a schedule with you before the project starts.',
      },
      {
        question: 'Will my website work well on mobile?',
        answer:
          'Yes. Every site is designed mobile-first and tested on common phone and tablet screen sizes before launch.',
      },
    ],
  },
]

export function subservicePath(service: Service, sub: Subservice) {
  return sub.href ?? `/services/${service.slug}/${sub.slug}`
}
