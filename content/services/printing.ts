import type { Service } from '../types'

export const printing: Service = {
  slug: 'printing',
  name: 'Printing',
  icon: 'printer',
  tagline: 'Premium print that feels as good as it looks.',
  shortDescription:
    'Business cards, flyers, brochures, banners, signage, packaging, labels and branded merchandise printed with vivid color accuracy and fast turnaround.',
  metaTitle: 'Printing Services | Business Cards, Flyers, Banners & Packaging',
  metaDescription:
    'High-quality printing services by Digital Weavix: business cards, flyers, brochures, banners, signage, stickers, packaging and custom merchandise. Fast turnaround and free design checks. Order on WhatsApp.',
  keywords: [
    'printing services',
    'printing company',
    'print shop near me',
    'business card printing',
    'flyer printing',
    'banner printing',
    'sticker printing',
    'packaging printing',
    'custom t-shirt printing',
    'same day printing',
  ],
  heroImage: '/images/printing-hero.webp',
  heroAlt: 'Commercial offset printing press with orange and navy ink rollers and freshly printed sheets',
  quickAnswer:
    'Digital Weavix offers commercial and digital printing for business cards, flyers, brochures, banners, signage, stickers, labels, packaging and branded merchandise. Every order includes a free pre-press file check, color-accurate proofs and fast delivery.',
  intro: [
    'A flimsy business card or a faded banner costs you more than the paper it is printed on. It costs you credibility. Premium print, on the other hand, gets kept, noticed and remembered long after the first impression.',
    'Digital Weavix combines expert pre-press checks, modern printing equipment and premium stocks and finishes. Because we design and print under one roof, your colors stay accurate, mistakes get caught before they cost you, and your order arrives on time.',
  ],
  benefits: [
    { title: 'Free pre-press check', description: 'We fix resolution, bleed and color issues before printing, free of charge.' },
    { title: 'Color you can trust', description: 'Calibrated workflows and proofs so brand colors match every time.' },
    { title: 'Premium finishes', description: 'Matte and gloss lamination, spot UV, foil stamping, embossing and more.' },
    { title: 'Fast turnaround', description: 'Express and same-day options for urgent events and launches.' },
  ],
  process: [
    { title: 'Share your file', description: 'Send artwork on WhatsApp, or let our designers create it for you.' },
    { title: 'Free file check', description: 'We verify bleed, resolution and colors and send a digital proof.' },
    { title: 'Print & finish', description: 'Printed on premium stocks with the finishes you choose.' },
    { title: 'Deliver', description: 'Carefully packed and delivered or ready for pickup, on schedule.' },
  ],
  stats: [
    { value: '1M+', label: 'Prints produced' },
    { value: '24h', label: 'Express turnaround' },
    { value: '0', label: 'Hidden setup fees' },
  ],
  subServices: [
    {
      slug: 'business-card-printing',
      name: 'Business Card Printing',
      shortDescription: 'Thick, premium business cards with foil, spot UV, rounded corners and luxury finishes.',
      metaTitle: 'Business Card Printing | Premium & Luxury Business Cards',
      metaDescription:
        'Order premium business card printing from Digital Weavix: thick stocks, matte or gloss lamination, spot UV, gold foil and same-day options. Free design check. Order on WhatsApp.',
      keywords: ['business card printing', 'premium business cards', 'luxury business cards', 'foil business cards', 'same day business cards', 'visiting card printing'],
      quickAnswer:
        'We print business cards on 350gsm to 800gsm premium stocks with options for matte, gloss or soft-touch lamination, spot UV, gold or silver foil, embossing and rounded corners, with express turnaround available.',
      intro:
        'Your business card is often the only thing a prospect takes home. A thick, beautifully finished card instantly signals quality and makes you memorable long after the handshake.',
      benefits: [
        { title: 'Luxury stocks', description: 'Heavy, rigid cards that feel premium from the first touch.' },
        { title: 'Special finishes', description: 'Foil, spot UV, embossing and painted edges that impress.' },
        { title: 'Free card design', description: 'Optional design or refresh of your existing card layout.' },
        { title: 'Express printing', description: 'Need them tomorrow? Ask about our express options.' },
      ],
      deliverables: ['Standard, square and mini sizes', '350gsm - 800gsm paper stocks', 'Matte, gloss and soft-touch lamination', 'Spot UV, foil and embossing', 'Rounded corners and painted edges', 'Free digital proof'],
      faqs: [
        { question: 'What is the minimum order for business cards?', answer: 'Our minimum order is 100 business cards per design. Larger quantities significantly reduce the price per card.' },
        { question: 'How quickly can I get business cards printed?', answer: 'Standard orders are ready in 2 to 4 working days. Express and same-day printing are available for selected stocks and finishes.' },
        { question: 'Can you design my business card too?', answer: 'Yes. Our designers can create a new card or refresh your current design, and we will print it once you approve the proof.' },
      ],
    },
    {
      slug: 'flyer-brochure-printing',
      name: 'Flyer & Brochure Printing',
      shortDescription: 'Vibrant flyers, leaflets, brochures, menus and catalogues printed in any quantity.',
      metaTitle: 'Flyer & Brochure Printing Services | Leaflets, Menus, Catalogues',
      metaDescription:
        'Affordable, high-quality flyer printing and brochure printing in all sizes and folds. Menus, leaflets, catalogues and booklets with fast delivery from Digital Weavix.',
      keywords: ['flyer printing', 'brochure printing', 'leaflet printing', 'menu printing', 'catalogue printing', 'booklet printing'],
      quickAnswer:
        'Digital Weavix prints flyers, leaflets, folded brochures, menus, catalogues and booklets in A4, A5, A6, DL and custom sizes on 130gsm to 350gsm papers, from short runs to bulk orders.',
      intro:
        'From a neighborhood flyer drop to a trade show catalogue, we print marketing materials with rich color, crisp text and clean folds, so your message looks as professional as your business.',
      benefits: [
        { title: 'Any size, any fold', description: 'Bi-fold, tri-fold, Z-fold, gate-fold and saddle-stitched booklets.' },
        { title: 'Short or bulk runs', description: 'Print 50 for a test or 50,000 for a campaign at great unit prices.' },
        { title: 'Rich, sharp color', description: 'Vivid images and crisp text on quality coated or uncoated paper.' },
        { title: 'Distribution ready', description: 'Bundled, boxed and labeled for easy distribution.' },
      ],
      deliverables: ['Flyers and leaflets', 'Folded brochures', 'Restaurant menus', 'Catalogues and booklets', 'Door hangers and inserts', 'Bulk and short-run printing'],
      faqs: [
        { question: 'Which paper is best for flyers?', answer: 'For handouts, 150gsm to 170gsm gloss or silk paper offers a great balance of quality and cost. For premium flyers, choose 250gsm to 350gsm with lamination.' },
        { question: 'Do you offer bulk flyer printing discounts?', answer: 'Yes. Unit prices drop significantly as quantities increase. Send your quantity and size on WhatsApp for an instant price.' },
        { question: 'Can you print a booklet or catalogue?', answer: 'Yes. We print saddle-stitched and perfect-bound booklets and catalogues with custom page counts and covers.' },
      ],
    },
    {
      slug: 'banner-signage-printing',
      name: 'Banner & Signage Printing',
      shortDescription: 'Roll-up banners, vinyl banners, billboards, shop signs and event backdrops that get seen.',
      metaTitle: 'Banner Printing & Signage | Roll-Up, Vinyl & Large Format Printing',
      metaDescription:
        'Large format printing for roll-up banners, vinyl banners, billboards, shop signage, window graphics and event backdrops. Durable, vivid prints by Digital Weavix.',
      keywords: ['banner printing', 'roll up banner printing', 'vinyl banner printing', 'large format printing', 'signage company', 'event backdrop printing'],
      quickAnswer:
        'We produce large format prints including roll-up and pull-up banners, PVC vinyl banners, flex billboards, acrylic and ACP shop signs, window graphics, stickers and event step-and-repeat backdrops.',
      intro:
        'When your brand needs to be seen from across a room or down the street, large format print does the heavy lifting. We produce bold, weather-resistant banners and signage that draw crowds to your booth, store or event.',
      benefits: [
        { title: 'Built to be seen', description: 'Designs and inks optimized for long-distance visibility.' },
        { title: 'Indoor and outdoor', description: 'UV and weather-resistant materials that last.' },
        { title: 'Complete hardware', description: 'Stands, frames, eyelets and installation options.' },
        { title: 'Event deadlines met', description: 'Reliable production schedules for launches and exhibitions.' },
      ],
      deliverables: ['Roll-up and pull-up banners', 'Vinyl and flex banners', 'Billboards and hoardings', 'Shop signs and 3D letters', 'Window and wall graphics', 'Event backdrops'],
      faqs: [
        { question: 'What is the standard roll-up banner size?', answer: 'The most popular roll-up banner size is 85cm x 200cm (33in x 79in). We also offer 100cm, 120cm and 150cm wide options.' },
        { question: 'Are your banners suitable for outdoor use?', answer: 'Yes. Our outdoor vinyl and flex banners use UV-resistant inks and weatherproof materials with reinforced hems and eyelets.' },
        { question: 'Do you install signage?', answer: 'Installation can be arranged for shop signs, window graphics and larger installations. Share your location and requirements on WhatsApp.' },
      ],
    },
    {
      slug: 'sticker-label-packaging-printing',
      name: 'Sticker, Label & Packaging Printing',
      shortDescription: 'Custom stickers, product labels, mailer boxes and branded packaging printed to impress.',
      metaTitle: 'Custom Sticker, Label & Packaging Printing | Product Boxes',
      metaDescription:
        'Custom sticker printing, product label printing and packaging box printing for small businesses and brands. Die-cut, waterproof and premium finishes by Digital Weavix.',
      keywords: ['sticker printing', 'custom labels', 'product label printing', 'packaging box printing', 'mailer box printing', 'die cut stickers'],
      quickAnswer:
        'Digital Weavix prints die-cut stickers, roll labels, waterproof product labels, mailer boxes, product boxes and branded tissue and bags, with optional design and dieline setup.',
      intro:
        'Unboxing is a marketing moment. Custom stickers, labels and branded boxes turn every order into a premium experience that customers photograph, share and remember.',
      benefits: [
        { title: 'Any shape', description: 'Die-cut, kiss-cut, circle, square and custom shapes.' },
        { title: 'Durable materials', description: 'Waterproof, oil-resistant and freezer-safe options.' },
        { title: 'Unboxing that sells', description: 'Branded boxes that encourage social sharing.' },
        { title: 'Low minimums', description: 'Small-batch runs ideal for startups and new products.' },
      ],
      deliverables: ['Die-cut and sheet stickers', 'Roll and product labels', 'Mailer and product boxes', 'Hang tags and inserts', 'Branded bags and tissue', 'Dieline setup support'],
      faqs: [
        { question: 'Are your product labels waterproof?', answer: 'Yes. We offer waterproof vinyl and BOPP labels that resist water, oil and refrigeration, ideal for cosmetics, beverages and food products.' },
        { question: 'What is the minimum order for custom boxes?', answer: 'Minimums depend on box style and finish. We offer low-minimum options for startups. Share your box size and quantity on WhatsApp for a quote.' },
        { question: 'Can you match my brand colors exactly?', answer: 'Yes. We use color-managed workflows and can provide physical proofs for brand-critical colors.' },
      ],
    },
    {
      slug: 'custom-merchandise-printing',
      name: 'Custom Merchandise Printing',
      shortDescription: 'Branded t-shirts, hoodies, mugs, tote bags, notebooks and corporate gifts.',
      metaTitle: 'Custom Merchandise Printing | T-Shirts, Mugs & Corporate Gifts',
      metaDescription:
        'Branded merchandise printing for businesses and events: custom t-shirts, hoodies, caps, mugs, tote bags, notebooks and corporate gift boxes by Digital Weavix.',
      keywords: ['custom t-shirt printing', 'branded merchandise', 'corporate gifts printing', 'mug printing', 'tote bag printing', 'promotional products'],
      quickAnswer:
        'We print custom merchandise including t-shirts, hoodies, caps, mugs, tote bags, notebooks, pens and curated corporate gift boxes using screen printing, DTF, embroidery and sublimation.',
      intro:
        'Branded merchandise turns customers, employees and event visitors into walking billboards. We help you choose products people actually love using, so your brand stays in sight every single day.',
      benefits: [
        { title: 'Products people keep', description: 'Quality items that get used daily, not thrown away.' },
        { title: 'Multiple techniques', description: 'Screen print, DTF, embroidery and sublimation.' },
        { title: 'Team and event kits', description: 'Uniforms, welcome kits and event giveaways.' },
        { title: 'Gift box curation', description: 'Premium corporate gifts packed and ready to send.' },
      ],
      deliverables: ['T-shirts, polos and hoodies', 'Caps and uniforms', 'Mugs and bottles', 'Tote bags and notebooks', 'Corporate gift boxes', 'Event giveaway kits'],
      faqs: [
        { question: 'What is the minimum order for custom t-shirts?', answer: 'Minimums start as low as 10 pieces for DTF printing. Screen printing becomes more cost-effective from around 50 pieces.' },
        { question: 'Which printing method is best for t-shirts?', answer: 'Screen printing is best for large runs with few colors, DTF suits full-color designs and small runs, and embroidery gives a premium look for polos and caps.' },
        { question: 'Can you create corporate gift boxes?', answer: 'Yes. We curate, brand, pack and deliver corporate gift boxes for employees, clients and events.' },
      ],
    },
  ],
  faqs: [
    { question: 'What printing services does Digital Weavix offer?', answer: 'We print business cards, flyers, brochures, menus, catalogues, banners, signage, stickers, labels, packaging boxes, stationery and custom merchandise such as t-shirts and mugs.' },
    { question: 'How do I place a printing order?', answer: 'Simply send your artwork, quantity and preferred size on WhatsApp. We check your file for free, send a quote and a digital proof, then print once you approve.' },
    { question: 'Do you offer same-day or express printing?', answer: 'Yes. Express and same-day printing are available for many products including business cards, flyers and roll-up banners, subject to stock and finish.' },
    { question: 'What file format should I send for printing?', answer: 'A high-resolution PDF with 3mm bleed and CMYK colors is ideal. We also accept AI, PSD, PNG and JPG files and will check them for free.' },
    { question: 'Do you deliver printed orders?', answer: 'Yes. We offer local delivery and nationwide shipping, as well as pickup. Delivery timelines are confirmed with your quote.' },
  ],
}
