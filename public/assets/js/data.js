/* ==========================================================================
   SITE CONTENT
   --------------------------------------------------------------------------
   Everything below is PLACEHOLDER data. Replace it with Claudia's real
   projects. Each project gets its own case-study page automatically at:
       project.html?p=<slug>

   Images: put real files in /assets/img/work/ and update the paths.
   Recommended: JPG or WebP, ~2000px on the long side, under ~400 KB each.
   ========================================================================== */

window.SITE = {
  name: "Claudia C. Cabrera",
  timezone: "Europe/Madrid", // used for the "local time" in the contact section
};

window.PROJECTS = [
  {
    slug: "almendra",
    title: "Almendra Bakery",
    client: "Almendra Obrador",
    year: "2026",
    category: "Branding",
    role: "Brand identity & art direction",
    services: ["Logo & wordmark", "Visual identity", "Packaging", "Signage"],
    summary:
      "A warm, hand-crafted identity for a third-generation family bakery in the heart of the old town.",
    cover: "assets/img/work/almendra-cover.svg",
    coverAlt: "Almendra Bakery logo: a white almond inside a cherry-red circle",
    description: [
      {
        heading: "The brief",
        text:
          "After 40 years on the same corner, Almendra was opening its second shop. The family wanted an identity that honoured their history while feeling fresh enough to attract a new generation of customers.",
      },
      {
        heading: "The approach",
        text:
          "We built the identity around the almond — the ingredient behind their most famous pastry. A soft custom wordmark, a warm palette of blush and cherry, and a modular pattern system flex across bags, boxes, signage and the shop interior.",
      },
      {
        heading: "The outcome",
        text:
          "The new shop opened with queues around the block. The packaging has become a local icon, and the identity system lets the in-house team create seasonal campaigns on their own.",
      },
    ],
    gallery: [
      { src: "assets/img/work/detail-01.svg", alt: "Colour palette swatches", caption: "Colour palette", wide: true },
      { src: "assets/img/work/detail-02.svg", alt: "Typeface specimen", caption: "Primary typeface" },
      { src: "assets/img/work/detail-03.svg", alt: "Stationery suite", caption: "Stationery suite" },
    ],
  },
  {
    slug: "norte",
    title: "Norte Magazine",
    client: "Norte Editorial",
    year: "2025",
    category: "Editorial",
    role: "Editorial design & art direction",
    services: ["Masthead", "Layout system", "Cover design", "Print production"],
    summary:
      "A full redesign of an independent quarterly about architecture, slow travel and the culture of the north.",
    cover: "assets/img/work/norte-cover.svg",
    coverAlt: "Norte Magazine issue 07 cover with a red circle",
    description: [
      {
        heading: "The brief",
        text:
          "Norte had grown from a fanzine into a respected quarterly, but its layout hadn't grown with it. The editors needed a system that felt calm and generous and could carry long-form writing with ease.",
      },
      {
        heading: "The approach",
        text:
          "A new serif masthead, a 12-column grid with plenty of white space, and a strict two-typeface hierarchy. Each issue's cover uses one bold geometric shape, which makes the series instantly recognisable on the newsstand.",
      },
      {
        heading: "The outcome",
        text:
          "Subscriptions rose 38% in the first year after the redesign, and the magazine is now stocked in independent bookshops across 12 countries.",
      },
    ],
    gallery: [
      { src: "assets/img/work/detail-04.svg", alt: "Graphic pattern", caption: "Section opener pattern", wide: true },
      { src: "assets/img/work/detail-02.svg", alt: "Typeface specimen", caption: "Editorial typography" },
      { src: "assets/img/work/detail-03.svg", alt: "Printed matter", caption: "Subscriber kit" },
    ],
  },
  {
    slug: "lumen",
    title: "Lumen Skincare",
    client: "Lumen Labs",
    year: "2025",
    category: "Packaging",
    role: "Packaging & brand design",
    services: ["Packaging system", "Label design", "Brand guidelines"],
    summary:
      "A calm packaging system for a minimalist skincare line, somewhere between clinical and poetic.",
    cover: "assets/img/work/lumen-cover.svg",
    coverAlt: "Three Lumen skincare containers in white, navy and red",
    description: [
      {
        heading: "The brief",
        text:
          "Lumen makes only five products, each with fewer than ten ingredients. The packaging had to say 'less, but better' without looking cold or anonymous on a crowded shelf.",
      },
      {
        heading: "The approach",
        text:
          "One colour per product family and a typographic label that puts the ingredient list first. Every element sits on a shared grid, so new products slot into the system without a redesign.",
      },
      {
        heading: "The outcome",
        text:
          "The range launched in 40 concept stores and won a packaging award in its first year.",
      },
    ],
    gallery: [
      { src: "assets/img/work/detail-01.svg", alt: "Colour palette swatches", caption: "Product colour coding", wide: true },
      { src: "assets/img/work/detail-03.svg", alt: "Printed matter", caption: "Retail inserts" },
      { src: "assets/img/work/detail-02.svg", alt: "Typeface specimen", caption: "Label typography" },
    ],
  },
  {
    slug: "cine-sur",
    title: "Festival de Cine Sur",
    client: "Asociación Cine Sur",
    year: "2024",
    category: "Campaign",
    role: "Campaign design",
    services: ["Campaign identity", "Posters", "Motion", "Social media"],
    summary:
      "The visual campaign for a coastal film festival celebrating independent cinema from the south.",
    cover: "assets/img/work/sur-cover.svg",
    coverAlt: "Festival poster: a white sun setting over the sea on a red background",
    description: [
      {
        heading: "The brief",
        text:
          "For its 10th edition the festival wanted a campaign that captured the light of the coast at dusk, and that would work equally well on a five-metre banner and a phone screen.",
      },
      {
        heading: "The approach",
        text:
          "A single image, a sun dissolving into the sea, drawn with just a circle and a series of lines. The motif animates for social media and breaks into a flexible set of graphics for wayfinding and merchandise.",
      },
      {
        heading: "The outcome",
        text:
          "The festival had its best attendance on record, and the poster was picked up by the city for its summer cultural programme.",
      },
    ],
    gallery: [
      { src: "assets/img/work/detail-04.svg", alt: "Graphic pattern", caption: "Campaign pattern", wide: true },
      { src: "assets/img/work/detail-03.svg", alt: "Printed matter", caption: "Programme & tickets" },
      { src: "assets/img/work/detail-02.svg", alt: "Typeface specimen", caption: "Display typography" },
    ],
  },
  {
    slug: "oda",
    title: "Oda Cerámica",
    client: "Oda Studio",
    year: "2024",
    category: "Branding",
    role: "Brand identity",
    services: ["Logo", "Stationery", "Web design", "Photo direction"],
    summary:
      "A minimal identity for a ceramics studio, built around the small imperfections of handmade work.",
    cover: "assets/img/work/oda-cover.svg",
    coverAlt: "Oda Cerámica business cards in navy and white",
    description: [
      {
        heading: "The brief",
        text:
          "Oda's founder throws every piece by hand. She wanted an identity as quiet and tactile as her ceramics, one that wouldn't compete with the work itself.",
      },
      {
        heading: "The approach",
        text:
          "A monogram drawn from the circle of the potter's wheel, uncoated papers with blind embossing, and a muted palette. The photography direction uses natural light and a single prop.",
      },
      {
        heading: "The outcome",
        text:
          "The online shop now sells out each collection within days, and Oda has been invited to show at two international craft fairs.",
      },
    ],
    gallery: [
      { src: "assets/img/work/detail-03.svg", alt: "Stationery suite", caption: "Stationery", wide: false },
      { src: "assets/img/work/detail-02.svg", alt: "Typeface specimen", caption: "Typography" },
      { src: "assets/img/work/detail-01.svg", alt: "Colour palette swatches", caption: "Palette", wide: true },
    ],
  },
  {
    slug: "marea",
    title: "Marea Wines",
    client: "Bodegas Marea",
    year: "2023",
    category: "Packaging",
    role: "Label & packaging design",
    services: ["Label design", "Packaging", "Illustration"],
    summary:
      "Label and packaging design for an Atlantic white wine shaped by salt, wind and tide.",
    cover: "assets/img/work/marea-cover.svg",
    coverAlt: "Navy Marea wine bottle with a white label and red wave lines",
    description: [
      {
        heading: "The brief",
        text:
          "A small family winery on the Atlantic coast was launching its first single-vineyard wine and wanted a bottle that told the story of the sea next to the vines.",
      },
      {
        heading: "The approach",
        text:
          "A textured label with letterpress wave lines, one for each tide chart of the harvest month. A deep navy capsule and minimal typography let the bottle stand out on the shelf.",
      },
      {
        heading: "The outcome",
        text:
          "The first vintage sold out in four months, and the bottle is now the template for the winery's whole range.",
      },
    ],
    gallery: [
      { src: "assets/img/work/detail-04.svg", alt: "Graphic pattern", caption: "Tissue wrap pattern", wide: true },
      { src: "assets/img/work/detail-02.svg", alt: "Typeface specimen", caption: "Label lettering" },
      { src: "assets/img/work/detail-03.svg", alt: "Printed matter", caption: "Gift box & card" },
    ],
  },
];
