import type { Service } from '../types'

export const graphicDesign: Service = {
  slug: 'graphic-design',
  name: 'Graphic Design',
  icon: 'palette',
  tagline: 'Designs people remember, trust and buy from.',
  shortDescription:
    'Logo design, brand identity, packaging, social media creatives and print-ready layouts crafted to make your business look like the market leader.',
  metaTitle: 'Graphic Design Services | Logo, Branding & Packaging Design',
  metaDescription:
    'Professional graphic design services by Digital Weavix: custom logo design, brand identity, packaging, social media and brochure design. First concepts in 48 hours. Get a free quote on WhatsApp.',
  keywords: [
    'graphic design services',
    'graphic design agency',
    'logo design company',
    'brand identity design',
    'packaging design agency',
    'social media post design',
    'brochure design services',
    'professional graphic designer',
    'affordable graphic design',
    'creative design studio',
  ],
  heroImage: '/images/graphic-design-hero.webp',
  heroAlt: 'Graphic designer sketching logo concepts on a tablet next to printed brand mockups and color swatches',
  quickAnswer:
    'Digital Weavix provides professional graphic design services including custom logo design, complete brand identity systems, packaging design, social media creatives and brochure layouts. Every project includes original concepts, unlimited revisions within scope, and print-ready plus web-ready source files that you fully own.',
  intro: [
    'Your customers judge your business in less than a second, and they judge it by how it looks. A dated logo, inconsistent colors or a cluttered flyer quietly tells buyers to choose someone else. Great graphic design does the opposite: it builds instant trust, justifies premium pricing and makes your brand impossible to forget.',
    'At Digital Weavix, our designers combine strategy with craft. We research your audience and competitors before we open a design tool, so every logo, label and social post is built to win attention and drive action, not just to look pretty.',
  ],
  benefits: [
    {
      title: 'Strategy before pixels',
      description:
        'Every project starts with a brand and competitor audit so your design stands out in your market instead of blending in.',
    },
    {
      title: '100% original work',
      description:
        'No templates, no stock logos. You receive bespoke concepts designed exclusively for your business, with full copyright transfer.',
    },
    {
      title: 'Print and digital ready',
      description:
        'Files are delivered in AI, EPS, PDF, SVG and PNG with correct CMYK and RGB profiles, so they work perfectly everywhere.',
    },
    {
      title: 'Fast, transparent turnaround',
      description:
        'First concepts in as little as 48 hours, clear milestones, and real-time updates straight to your WhatsApp.',
    },
  ],
  process: [
    { title: 'Discover', description: 'A short WhatsApp or video call to understand your goals, audience and style.' },
    { title: 'Concept', description: 'We present multiple original directions with the reasoning behind each one.' },
    { title: 'Refine', description: 'Collaborative revisions until every detail feels exactly right for your brand.' },
    { title: 'Deliver', description: 'Final files, brand guidelines and print-ready exports, organized and labeled.' },
  ],
  stats: [
    { value: '48h', label: 'First concepts' },
    { value: '300+', label: 'Logos & identities' },
    { value: '100%', label: 'Copyright ownership' },
  ],
  subServices: [
    {
      slug: 'logo-design',
      name: 'Logo Design',
      shortDescription: 'Custom, memorable logos that make small businesses look established and trustworthy.',
      metaTitle: 'Custom Logo Design Services | Professional Logo Designer',
      metaDescription:
        'Get a unique, professional custom logo design from Digital Weavix. Multiple concepts, unlimited revisions, vector files and full ownership. Start on WhatsApp today.',
      keywords: ['logo design', 'custom logo design', 'professional logo designer', 'business logo design', 'logo design services', 'minimalist logo design'],
      quickAnswer:
        'A professional logo design from Digital Weavix includes a discovery brief, 3+ original concepts, revisions, and a final logo pack (primary, secondary, icon and monochrome versions) in vector and web formats with full copyright.',
      intro:
        'Your logo is the face of your business. We design simple, distinctive and versatile logos that look sharp on a storefront sign, a business card and a tiny social media avatar alike, so customers recognize you instantly everywhere.',
      benefits: [
        { title: 'Memorable marks', description: 'Simple, distinctive shapes that people recall after a single glance.' },
        { title: 'Scales anywhere', description: 'Vector artwork that stays crisp from favicons to billboards.' },
        { title: 'Built on research', description: 'Designed around your industry, competitors and ideal customers.' },
        { title: 'Yours forever', description: 'Full copyright transfer and every source file, no strings attached.' },
      ],
      deliverables: ['Primary, secondary and icon logo versions', 'Color, black and white variants', 'AI, EPS, SVG, PDF and PNG files', 'Color palette and font recommendations', 'Social media profile-ready exports', 'Mini logo usage guide'],
      faqs: [
        { question: 'How much does a custom logo design cost?', answer: 'Logo design pricing depends on the number of concepts, revisions and extra brand assets you need. We offer starter, business and premium packages, and you can get an exact quote in minutes by sending your brief on WhatsApp.' },
        { question: 'How long does logo design take?', answer: 'You will see the first logo concepts within 48 to 72 hours. Most logo projects are completed in 5 to 10 working days, depending on how quickly feedback is shared.' },
        { question: 'Will I own the copyright to my logo?', answer: 'Yes. Once the project is complete you receive full copyright ownership and all source files, so you can trademark and use your logo anywhere.' },
        { question: 'Do you use templates or AI generated logos?', answer: 'No. Every logo is designed from scratch by a human designer specifically for your business, which keeps it unique and eligible for trademark registration.' },
      ],
    },
    {
      slug: 'brand-identity-design',
      name: 'Brand Identity Design',
      shortDescription: 'Complete visual identity systems: logo, colors, typography, patterns and brand guidelines.',
      metaTitle: 'Brand Identity Design Agency | Complete Branding Services',
      metaDescription:
        'Build a consistent, premium brand with Digital Weavix brand identity design: logo suite, color palette, typography, stationery and brand guidelines. Free consultation on WhatsApp.',
      keywords: ['brand identity design', 'branding agency', 'brand guidelines design', 'corporate identity design', 'rebranding services', 'visual identity'],
      quickAnswer:
        'Brand identity design is the creation of a complete visual system (logo suite, color palette, typography, imagery style and stationery) documented in brand guidelines so your business looks consistent and professional across every touchpoint.',
      intro:
        'Consistency builds trust, and trust drives sales. We design complete brand identity systems that make every touchpoint, from your website to your invoices, feel unmistakably you. It is the fastest way to look like the premium choice in your market.',
      benefits: [
        { title: 'Instant credibility', description: 'A cohesive look that signals professionalism and justifies higher prices.' },
        { title: 'Consistent everywhere', description: 'Clear rules so your team and partners never misuse your brand.' },
        { title: 'Stand out from rivals', description: 'Positioning-led design that separates you from competitors.' },
        { title: 'Ready to scale', description: 'A flexible system that grows with new products and channels.' },
      ],
      deliverables: ['Logo suite and brand mark', 'Primary and secondary color palette', 'Typography system', 'Brand patterns and graphic elements', 'Business card, letterhead and email signature', 'Brand guidelines PDF'],
      faqs: [
        { question: 'What is included in a brand identity package?', answer: 'Our brand identity packages include a logo suite, color palette, typography, graphic elements, stationery designs and a brand guidelines document. Premium packages add packaging, social templates and signage.' },
        { question: 'What is the difference between a logo and a brand identity?', answer: 'A logo is one symbol. A brand identity is the full visual language around it, including colors, fonts, imagery and layouts, that makes every touchpoint recognizable.' },
        { question: 'Can you rebrand an existing business?', answer: 'Yes. We regularly rebrand established businesses, keeping the equity customers already recognize while modernizing everything that holds the brand back.' },
      ],
    },
    {
      slug: 'packaging-design',
      name: 'Packaging & Label Design',
      shortDescription: 'Shelf-stopping packaging, boxes and product labels that make customers pick you first.',
      metaTitle: 'Packaging Design Services | Product Label & Box Design',
      metaDescription:
        'Eye-catching packaging design and product label design that sells on shelves and online. Dielines, 3D mockups and print-ready files from Digital Weavix. Chat on WhatsApp.',
      keywords: ['packaging design', 'product packaging design', 'label design', 'box design', 'food packaging design', 'cosmetic packaging design'],
      quickAnswer:
        'Digital Weavix designs product packaging and labels that are print-ready on your manufacturer\'s dieline, compliant with labeling requirements, and photographed as realistic 3D mockups for e-commerce listings.',
      intro:
        'Packaging is your silent salesperson. On a crowded shelf or a scrolling marketplace, it has seconds to convince a buyer. We design packaging and labels that grab attention, communicate value instantly and make your product feel worth every cent.',
      benefits: [
        { title: 'Wins the shelf', description: 'Bold hierarchy and color strategy that pulls eyes toward your product.' },
        { title: 'Print-perfect', description: 'Built on accurate dielines with bleed, finishes and color specs.' },
        { title: 'E-commerce ready', description: 'Photorealistic 3D mockups for Amazon, Shopify and social ads.' },
        { title: 'Printed in-house', description: 'Design and printing under one roof means zero handover errors.' },
      ],
      deliverables: ['Packaging concept directions', 'Box, pouch, bottle or jar labels', 'Dieline setup with bleed and finishes', '3D product mockups', 'Print-ready PDF files', 'Optional in-house printing'],
      faqs: [
        { question: 'Can you work with my manufacturer\'s dieline?', answer: 'Yes. Share your dieline and we will design directly on it. If you do not have one, we can create a dieline or recommend standard packaging sizes.' },
        { question: 'Do you also print the packaging?', answer: 'Yes. Because we are both a design and printing agency, we can print your labels, boxes and stickers, ensuring colors match the approved design.' },
        { question: 'Which industries do you design packaging for?', answer: 'We design packaging for food and beverage, cosmetics and skincare, supplements, apparel, candles, electronics and many other consumer products.' },
      ],
    },
    {
      slug: 'social-media-design',
      name: 'Social Media Post Design',
      shortDescription: 'Scroll-stopping posts, stories, reels covers and ad creatives designed to boost engagement.',
      metaTitle: 'Social Media Post Design Services | Instagram & Facebook Creatives',
      metaDescription:
        'Custom social media post design for Instagram, Facebook, LinkedIn and TikTok. On-brand templates, carousels and ad creatives that increase engagement. Monthly plans available.',
      keywords: ['social media post design', 'instagram post design', 'facebook ad design', 'social media graphics', 'carousel design', 'social media templates'],
      quickAnswer:
        'Our social media design service delivers on-brand posts, carousels, stories and ad creatives for Instagram, Facebook, LinkedIn and TikTok, available as one-off packs or monthly design subscriptions.',
      intro:
        'Feeds move fast. Generic graphics get scrolled past, while bold, consistent creatives get saved, shared and clicked. We design social content that looks premium, follows your brand and is engineered to stop the thumb.',
      benefits: [
        { title: 'Higher engagement', description: 'Designs built on hooks, contrast and clear calls to action.' },
        { title: 'Consistent feed', description: 'A recognizable grid that makes your profile look professional.' },
        { title: 'Ad-ready sizes', description: 'Every format sized correctly for feeds, stories and reels.' },
        { title: 'Monthly plans', description: 'A reliable flow of fresh content without hiring in-house.' },
      ],
      deliverables: ['Feed posts and carousels', 'Stories and reel covers', 'Paid ad creatives', 'Editable Canva or Figma templates', 'Highlight covers and profile assets', 'Content calendar alignment'],
      faqs: [
        { question: 'How many social media posts do I need per month?', answer: 'Most small businesses see strong results with 12 to 20 posts per month plus stories. We will recommend a volume based on your goals and platforms.' },
        { question: 'Do you provide editable templates?', answer: 'Yes. We can provide editable Canva or Figma templates so your team can create quick on-brand posts between our design batches.' },
        { question: 'Can you also manage and post the content?', answer: 'Yes. Our digital marketing team offers full social media management, including captions, scheduling, community management and paid ads.' },
      ],
    },
    {
      slug: 'brochure-flyer-design',
      name: 'Brochure & Flyer Design',
      shortDescription: 'Persuasive brochures, flyers, menus and company profiles that turn readers into buyers.',
      metaTitle: 'Brochure & Flyer Design Services | Company Profile Design',
      metaDescription:
        'Professional brochure design, flyer design, menu and company profile design that converts. Print-ready files and optional printing by Digital Weavix. Quote on WhatsApp.',
      keywords: ['brochure design', 'flyer design', 'company profile design', 'menu design', 'catalogue design', 'leaflet design'],
      quickAnswer:
        'Digital Weavix designs brochures, flyers, leaflets, menus, catalogues and company profiles with persuasive layouts and print-ready files, and can print and deliver them in-house.',
      intro:
        'Printed marketing still works when it is designed to sell. We combine clear messaging, strong visual hierarchy and premium layouts so your brochures and flyers get read, kept and acted upon.',
      benefits: [
        { title: 'Conversion-focused layouts', description: 'Headlines, offers and calls to action placed where eyes go first.' },
        { title: 'Copy support', description: 'Optional copywriting so your message is as sharp as the design.' },
        { title: 'Print-ready files', description: 'Correct bleed, margins and CMYK color for flawless printing.' },
        { title: 'Design + print bundle', description: 'Save time and money by printing with us.' },
      ],
      deliverables: ['Bi-fold and tri-fold brochures', 'Single and double-sided flyers', 'Restaurant menus', 'Company profiles and catalogues', 'Digital PDF versions', 'Print-ready exports'],
      faqs: [
        { question: 'Can you write the content for my brochure?', answer: 'Yes. Our copywriters can write persuasive, SEO-informed content for brochures, company profiles and flyers, or polish the copy you already have.' },
        { question: 'What sizes do you design flyers in?', answer: 'We design in all standard sizes including A4, A5, A6, DL and US Letter, as well as custom sizes for specific campaigns.' },
        { question: 'Do I get a digital version for email and WhatsApp?', answer: 'Yes. Every brochure is also exported as a lightweight interactive PDF that is easy to share by email and WhatsApp.' },
      ],
    },
  ],
  faqs: [
    { question: 'What graphic design services does Digital Weavix offer?', answer: 'We offer logo design, brand identity design, packaging and label design, social media post design, brochure and flyer design, business stationery, signage graphics and marketing collateral.' },
    { question: 'How much do your graphic design services cost?', answer: 'Pricing depends on scope. We offer fixed-price packages for logos and branding, and monthly plans for ongoing design work. Message us on WhatsApp with your requirements for a free, no-obligation quote.' },
    { question: 'How many revisions are included?', answer: 'Our packages include generous revision rounds, and premium packages include unlimited revisions within the agreed scope so you are completely satisfied.' },
    { question: 'Do you work with clients outside my city?', answer: 'Yes. We work with businesses worldwide. Everything from briefing to approvals happens smoothly over WhatsApp, email and video calls.' },
    { question: 'Which file formats will I receive?', answer: 'You receive AI, EPS, SVG, PDF, PNG and JPG files in both print (CMYK) and digital (RGB) color profiles, plus any source files used.' },
  ],
}
