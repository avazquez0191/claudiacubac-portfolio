/* ==========================================================================
   SITE CONTENT
   --------------------------------------------------------------------------
   Projects from Claudia Cuba's portfolio (2014–2022).
   Each project gets its own case-study page automatically at:
       project.html?p=<slug>

   Images live in /assets/img/work/<slug>/
     cover.jpg  → 4:3 image used on the home page card
     hero.jpg   → large image at the top of the case study
     01.jpg ... → gallery images
   ========================================================================== */

window.SITE = {
  name: "Claudia Cuba",
  // Order of the filter buttons on the home page
  categories: ["Branding", "Editorial", "Campaign", "Digital", "Typography"],
};

window.PROJECTS = [
  {
    slug: "cuendias",
    title: "Cuendias",
    client: "Superior Institute of Design (ISDi), Cuba",
    year: "2014",
    category: "Typography",
    discipline: "Typeface design",
    role: "Type designer",
    services: ["Typeface design", "Regular, Italic & Bold", "Posters"],
    summary:
      "ISDi's institutional typeface: a high-performance text face designed to be legible, readable and economical.",
    cover: "assets/img/work/cuendias/cover.jpg",
    hero: "assets/img/work/cuendias/hero.jpg",
    coverAlt: "Cuendias typeface specimen in red over a photo of the ISDi building",
    description: [
      {
        heading: "Overview",
        text:
          "Cuendias is the institutional typeface of Havana's Superior Institute of Design (ISDi), created for body text across the school's communication.",
      },
      {
        heading: "The typeface",
        text:
          "The family has three styles (Regular, Italic and Bold) and over 200 Cyrillic characters. It was drawn to be legible, comfortable to read over long texts and economical in print.",
      },
      {
        heading: "Recognition",
        text: "Finalist at Tipos Latinos 2015, the Latin American Biennial of Typography.",
      },
    ],
    gallery: [{ src: "assets/img/work/cuendias/01.jpg", alt: "Three Cuendias posters with letters over Havana architecture", caption: "Posters", wide: true }],
  },
  {
    slug: "seisa-identity",
    title: "SEISA Corporate Identity",
    client: "SEISA, Security Services",
    year: "2018–2020",
    category: "Branding",
    discipline: "Identity system & brand manual",
    role: "Lead designer & creative director",
    services: ["Logo redesign", "Identity system", "Brand manual", "Corporate applications"],
    summary:
      "Brand redesign for SEISA, an integrated security company: logo, graphic resources, brand manual and corporate applications.",
    cover: "assets/img/work/seisa-identity/cover.jpg",
    hero: "assets/img/work/seisa-identity/hero.jpg",
    coverAlt: "White SEISA logo on an orange background, with the evolution of the logo from 2012 to 2020",
    description: [
      {
        heading: "Overview",
        text:
          "SEISA's identity had been evolving since 2012. The 2018–2020 redesign refined the logo and built a complete identity strategy and system around it.",
      },
      {
        heading: "The system",
        text:
          "The brand manual defines the identifier, colour palette, typography, a photographic code built on masks, a hexagonal pattern and a full icon library for services, systems and processes.",
      },
      {
        heading: "Applications",
        text:
          "The identity extends to stationery, uniforms, vehicles, presentations, invitations, bags, notebooks and other corporate and promotional items.",
      },
    ],
    gallery: [
      { src: "assets/img/work/seisa-identity/01.jpg", alt: "Pages of the SEISA brand manual", caption: "Brand manual", wide: true },
      { src: "assets/img/work/seisa-identity/02.jpg", alt: "More pages of the SEISA brand manual", caption: "Brand manual", wide: true },
      { src: "assets/img/work/seisa-identity/03.jpg", alt: "SEISA corporate applications: car, uniforms, stationery and bags", caption: "Corporate applications", wide: true },
    ],
  },
  {
    slug: "seisa-30",
    title: "SEISA, 30 Years",
    client: "SEISA, Security Services",
    year: "2018",
    category: "Campaign",
    discipline: "Campaign, logo & brand manual",
    role: "Lead designer & creative director",
    services: ["Campaign concept", "Anniversary logo", "Campaign manual", "Promotional applications"],
    summary:
      "Anniversary campaign for SEISA's 30th year, with its own logo, campaign manual and promotional applications.",
    cover: "assets/img/work/seisa-30/cover.jpg",
    hero: "assets/img/work/seisa-30/hero.jpg",
    coverAlt: "A large grey number 30 framing a SEISA technician working above Havana",
    description: [
      {
        heading: "Overview",
        text:
          "A campaign celebrating three decades of SEISA under the line \"…con toda seguridad\" (with complete safety). The number 30 opens a window onto Havana and the people behind the service.",
      },
      {
        heading: "Scope",
        text:
          "Anniversary logo, a campaign manual covering the briefing, typography, colour and supporting graphics, and a full set of promotional applications: wallpapers, T-shirts, notebooks, planners, greeting cards, folders, business cards and pens.",
      },
      {
        heading: "Recognition",
        text: "Graphic Design Award, Havana International Fair 2018.",
      },
    ],
    gallery: [
      { src: "assets/img/work/seisa-30/01.jpg", alt: "Pages of the SEISA 30 Years campaign manual", caption: "Campaign manifesto & brand manual", wide: true },
      { src: "assets/img/work/seisa-30/02.jpg", alt: "SEISA 30 Years promotional items", caption: "Brand promotional applications", wide: true },
    ],
  },
  {
    slug: "seisa-transforma",
    title: "SEISA se transforma",
    client: "SEISA, Security Services",
    year: "2022",
    category: "Campaign",
    discipline: "Campaign, illustration & editorial design",
    role: "Creative director",
    services: ["Campaign logo", "Brochure & manifesto", "Annual Report document system", "Infographics", "Social media"],
    summary:
      "An internal campaign that tells the story of SEISA's transformation through an illustrated isometric world.",
    cover: "assets/img/work/seisa-transforma/cover.jpg",
    hero: "assets/img/work/seisa-transforma/hero.jpg",
    coverAlt: "Six illustrated covers for SEISA's 2021 Annual Report documents",
    description: [
      {
        heading: "Overview",
        text:
          "Logo, brochure and campaign manifesto for \"SEISA se transforma\" (SEISA is transforming), plus the document system for the 2021 Annual Report and posts for social media.",
      },
      {
        heading: "The approach",
        text:
          "Each change in the company is a stop along a road: SEISA partners, expands, goes digital, sustains itself and grows. Vector isometric illustration made the scenes quick to build and modify, so the campaign could keep growing with each new publication.",
      },
      {
        heading: "Infographics",
        text:
          "The same visual language extends to a series of infographics explaining SEISA's services, from fire and lightning protection to remote monitoring and e-commerce.",
      },
    ],
    gallery: [
      { src: "assets/img/work/seisa-transforma/01.jpg", alt: "Back of the illustrated campaign manifesto", caption: "Campaign manifesto, back", wide: true },
      { src: "assets/img/work/seisa-transforma/02.jpg", alt: "Six illustrated report covers", caption: "Covers for the 2021 Annual Report document system", wide: true },
      { src: "assets/img/work/seisa-transforma/03.jpg", alt: "Six isometric infographics about SEISA services", caption: "Infographics", wide: true },
      { src: "assets/img/work/seisa-transforma/04.jpg", alt: "Close-up of the isometric infographics", caption: "Infographics", wide: true },
    ],
  },
  {
    slug: "cubadeportes",
    title: "Cubadeportes Website",
    client: "Cubadeportes S.A., INDER, Cuba",
    year: "2019",
    category: "Digital",
    discipline: "UX/UI design",
    role: "UX/UI designer",
    services: ["UX design", "UI design", "Website"],
    summary:
      "Website for Cubadeportes, which brings Cuban sports expertise, training programmes and events to clients around the world.",
    cover: "assets/img/work/cubadeportes/cover.jpg",
    hero: "assets/img/work/cubadeportes/hero.jpg",
    coverAlt: "Pages of the Cubadeportes website on a red background",
    description: [
      {
        heading: "Overview",
        text:
          "UX and UI design for Cubadeportes S.A., the sports services company of INDER, Cuba's national sports institute.",
      },
      {
        heading: "The design",
        text:
          "The site brings together technical assistance, training programmes, specialised facilities, events and hotel offers. Bold diagonal shapes in red and blue carry the energy of sport onto every page.",
      },
    ],
    gallery: [
      { src: "assets/img/work/cubadeportes/01.jpg", alt: "Cubadeportes events page", caption: "Events page" },
      { src: "assets/img/work/cubadeportes/02.jpg", alt: "Cubadeportes technical assistance page", caption: "Technical assistance page" },
      { src: "assets/img/work/cubadeportes/03.jpg", alt: "Cubadeportes website pages in perspective", caption: "Website pages", wide: true },
    ],
  },
  {
    slug: "estampa",
    title: "Estampa Boutique Hotels",
    client: "Estampa Boutique Hotels, Cuba / Belgium",
    year: "2019",
    category: "Editorial",
    discipline: "Editorial design",
    role: "Editorial designer",
    services: ["Catalogue design", "Layout", "Art direction"],
    summary:
      "Catalogue for Estampa, a collection of boutique hotels in Cuba where every house has its own story.",
    cover: "assets/img/work/estampa/cover.jpg",
    hero: "assets/img/work/estampa/hero.jpg",
    coverAlt: "Burgundy hardcover Estampa catalogue and an open spread",
    description: [
      {
        heading: "Overview",
        text:
          "A hardcover catalogue presenting the collection, \"casas de encanto y anfitriones talentosos\" (charming houses and talented hosts), with spreads dedicated to each hotel.",
      },
      {
        heading: "The design",
        text:
          "Postage-stamp seals, handwritten script and a refined serif give the book the feel of a travel journal, while generous photography lets each house speak for itself.",
      },
    ],
    gallery: [
      { src: "assets/img/work/estampa/01.jpg", alt: "Estampa catalogue spreads for the Napper hotel", caption: "Inner pages", wide: true },
      { src: "assets/img/work/estampa/02.jpg", alt: "Estampa catalogue spreads for Le Petit Mistinguett", caption: "Inner pages", wide: true },
      { src: "assets/img/work/estampa/03.jpg", alt: "Several open Estampa catalogues", caption: "Inner pages", wide: true },
    ],
  },
  {
    slug: "la-reserva",
    title: "La Reserva Vedado",
    client: "La Reserva, Cuba / Italy / Belgium",
    year: "2017",
    category: "Branding",
    discipline: "Branding & editorial design",
    role: "Brand & editorial designer",
    services: ["Logo", "Patterns", "Stationery", "Brochure", "Concierge Book"],
    summary:
      "Identity and printed matter for a boutique hotel in a restored house in Havana's Vedado district.",
    cover: "assets/img/work/la-reserva/cover.jpg",
    hero: "assets/img/work/la-reserva/hero.jpg",
    coverAlt: "La Reserva Vedado monogram logo over the columns of the hotel entrance",
    description: [
      {
        heading: "Overview",
        text:
          "A monogram R, drawn as a single continuous line inside a circle, is paired with tile-inspired patterns in sage, gold and burgundy.",
      },
      {
        heading: "Applications",
        text:
          "The identity extends to stationery, door hangers, toiletries, a guest brochure and a Concierge Book full of tips for enjoying Havana's culture, nightlife and countryside.",
      },
    ],
    gallery: [
      { src: "assets/img/work/la-reserva/01.jpg", alt: "La Reserva stationery, door hanger, soap box and notebook", caption: "Various applications", wide: true },
      { src: "assets/img/work/la-reserva/02.jpg", alt: "La Reserva brochure and Concierge Book", caption: "Brochure and Concierge Book", wide: true },
      { src: "assets/img/work/la-reserva/03.jpg", alt: "Concierge Book inner pages", caption: "Concierge Book, inner pages", wide: true },
      { src: "assets/img/work/la-reserva/04.jpg", alt: "More Concierge Book inner pages", caption: "Concierge Book, inner pages", wide: true },
    ],
  },
  {
    slug: "ohlala",
    title: "Ohlala! Café Bistrot",
    client: "Ohlala Café Bistrot, Cuba / Panama",
    year: "2018",
    category: "Branding",
    discipline: "Illustration, branding & website",
    role: "Brand designer & illustrator",
    services: ["Logotype", "Illustration", "Brand applications", "One-page website"],
    summary:
      "Inspired by Cuban graphics from the 1930s and 40s, this café's design brings together distinctive elements of Havana and Paris.",
    cover: "assets/img/work/ohlala/cover.jpg",
    hero: "assets/img/work/ohlala/hero.jpg",
    coverAlt: "Ohlala! café cups, paper bag, business cards and VIP card",
    description: [
      {
        heading: "Overview",
        text:
          "A flowing handwritten logotype paired with a classic serif, vintage stamps and postmarks set the tone of a café where Havana meets Paris.",
      },
      {
        heading: "Illustration",
        text:
          "Classic cars, croissants, hot-air balloons and Parisian streetlamps are combined into new engraved-style illustrations, like a vintage car whose bonnet turns into a croissant.",
      },
      {
        heading: "Applications",
        text:
          "Cups, bags, sugar sachets, VIP cards, coasters, matchboxes, tableware, merchandise and a one-page website.",
      },
    ],
    gallery: [
      { src: "assets/img/work/ohlala/01.jpg", alt: "Ohlala! café brand applications flat lay", caption: "Brand applications", wide: true },
      { src: "assets/img/work/ohlala/02.jpg", alt: "Ohlala! matchboxes, coasters, cup, tote bag and signage", caption: "Service applications" },
      { src: "assets/img/work/ohlala/03.jpg", alt: "Ohlala! fan, phone cases, bottle opener, umbrella and door hanger", caption: "Merchandise" },
      { src: "assets/img/work/ohlala/04.jpg", alt: "Ohlala! one-page website", caption: "One-page website", wide: true },
    ],
  },
  {
    slug: "mr-crypto",
    title: "Mr. Crypto",
    client: "Mr Crypto, USA",
    year: "2018",
    category: "Digital",
    discipline: "Illustration, brand, website & 2D animation",
    role: "Designer & illustrator",
    services: ["Brand", "Illustration", "Website", "2D animation"],
    summary: "An online game for buying and earning cryptocurrencies, especially Ethereum.",
    cover: "assets/img/work/mr-crypto/cover.jpg",
    hero: "assets/img/work/mr-crypto/hero.jpg",
    coverAlt: "Mr. Crypto website with a floating neon isometric city",
    description: [
      {
        heading: "Overview",
        text:
          "Brand, illustration, website and 2D animation for a game of skill in which two teams compete to predict the prices of major cryptocurrencies.",
      },
      {
        heading: "The design",
        text:
          "Floating isometric cities, neon gradients and gem-like level badges create a futuristic universe that carries through to the dashboard, rankings and even the error pages.",
      },
    ],
    gallery: [{ src: "assets/img/work/mr-crypto/01.jpg", alt: "Mr. Crypto dashboard, ranking and error pages", caption: "Website", wide: true }],
  },
  {
    slug: "que-bola",
    title: "Qué Bolá Havana",
    client: "Qué Bolá Habana agency, USA",
    year: "2018",
    category: "Branding",
    discipline: "Branding, website, editorial & social media",
    role: "Brand & web designer",
    services: ["Brand identity", "Website", "Flyers & banners", "Brand manual", "Social media"],
    summary:
      "Identity and website for a platform that books cultural experiences with locals in Havana.",
    cover: "assets/img/work/que-bola/cover.jpg",
    hero: "assets/img/work/que-bola/hero.jpg",
    coverAlt: "Qué Bolá Havana flyers with the hand-lettered logo over the Capitolio",
    description: [
      {
        heading: "Overview",
        text:
          "Brand, website, flyers, banners and social media for Qué Bolá Havana, which offers tours, festivals and people-to-people experiences with locals.",
      },
      {
        heading: "The design",
        text:
          "A playful hand-lettered logo, a bright palette of turquoise, orange and red, and an expressive script typeface capture the warmth of a Cuban greeting.",
      },
    ],
    gallery: [
      { src: "assets/img/work/que-bola/01.jpg", alt: "Qué Bolá Havana website home page", caption: "Website, home", wide: true },
      { src: "assets/img/work/que-bola/02.jpg", alt: "Qué Bolá Havana about page and web banners", caption: "Website and banners", wide: true },
      { src: "assets/img/work/que-bola/03.jpg", alt: "Qué Bolá Havana brand manual spreads", caption: "Brand manual", wide: true },
    ],
  },
  {
    slug: "ritmo",
    title: "Ritmo Café Cocodrilo",
    client: "Palmares S.A., Cuba",
    year: "2017",
    category: "Branding",
    discipline: "Branding & interior design",
    role: "Brand & interior designer",
    services: ["Logotype", "Menu", "Interior design"],
    summary: "Identity and interior design for a live music café.",
    cover: "assets/img/work/ritmo/cover.jpg",
    hero: "assets/img/work/ritmo/hero.jpg",
    coverAlt: "Ritmo Café Cocodrilo logo over a black and white photo of a stage microphone",
    description: [
      {
        heading: "Overview",
        text:
          "A logotype with a rippling, sound-wave rhythm and a glitch effect captures the energy of live music, carried through to the menu.",
      },
      {
        heading: "Interior design",
        text:
          "The space brings the identity to life with flowing bands of light across the ceiling, turquoise accents and a backlit bar.",
      },
    ],
    gallery: [
      { src: "assets/img/work/ritmo/01.jpg", alt: "Ritmo Café Cocodrilo menu", caption: "Menu", wide: true },
      { src: "assets/img/work/ritmo/02.jpg", alt: "Interior render of the café with turquoise backlit bar", caption: "Interior design", wide: true },
      { src: "assets/img/work/ritmo/03.jpg", alt: "Interior render of the bar counter and stools", caption: "Interior design", wide: true },
      { src: "assets/img/work/ritmo/04.jpg", alt: "Interior render of the ceiling light bands", caption: "Interior design", wide: true },
    ],
  },
  {
    slug: "viera",
    title: "Viera Academy",
    client: "Viera Academy, USA",
    year: "2016",
    category: "Digital",
    discipline: "UI/UX & character design",
    role: "UI/UX designer",
    services: ["UI design", "UX design", "Character design"],
    summary:
      "A learning platform for students, tutors and parents, specialising in SAT, PSAT and ACT test preparation.",
    cover: "assets/img/work/viera/cover.jpg",
    hero: "assets/img/work/viera/hero.jpg",
    coverAlt: "Screens of the Viera Academy learning platform",
    description: [
      {
        heading: "Overview",
        text:
          "UI/UX and character design for an online academy. Game mechanics such as head-to-head challenges, rankings and superhero avatars keep students motivated while they prepare for their exams.",
      },
    ],
    gallery: [],
  },
  {
    slug: "torreon",
    title: "Torreón de La Chorrera",
    client: "Palmares S.A., Cuba",
    year: "2015",
    category: "Branding",
    discipline: "Branding & interior design",
    role: "Brand & interior designer",
    services: ["Logo", "Identity", "Interior design"],
    summary: "Identity for a restaurant inside a historic colonial tower in Havana.",
    cover: "assets/img/work/torreon/cover.jpg",
    hero: "assets/img/work/torreon/hero.jpg",
    coverAlt: "Red heraldic crest logo for Torreón de La Chorrera restaurant",
    description: [
      {
        heading: "Overview",
        text:
          "A heraldic crest with towers and lions, a crown and a classic serif wordmark reflect the history of the colonial tower that houses the restaurant.",
      },
    ],
    gallery: [],
  },
];
