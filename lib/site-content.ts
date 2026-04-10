/**
 * Central image URLs and copy. Swap assets locally under /public/images for WebP + SEO filenames.
 */

export const images = {
  heroLeft:
    "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1400&q=85&auto=format&fit=crop",
  heroRight:
    "https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=900&q=85&auto=format&fit=crop",
  statsBg:
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=2400&q=80&auto=format&fit=crop",
  whyTreatmentRoom:
    "https://images.unsplash.com/photo-1629909471839-f4d3c453efd3?w=2400&q=80&auto=format&fit=crop",
  testimonialsBg:
    "https://images.unsplash.com/photo-1521790797528-fe249c7bbbf6?w=2400&q=75&auto=format&fit=crop",
  locationExterior:
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80&auto=format&fit=crop",
  footerTooth:
    "https://images.unsplash.com/photo-1600170311833-c02e81577c75?w=1600&q=80&auto=format&fit=crop",
  services: {
    rootCanal:
      "https://images.unsplash.com/photo-1606811971618-4486b456fca2?w=900&q=80&auto=format&fit=crop",
    whitening:
      "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=900&q=80&auto=format&fit=crop",
    implants:
      "https://images.unsplash.com/photo-1624598866648-5fff7b8a11db?w=900&q=80&auto=format&fit=crop",
    pediatric:
      "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=900&q=80&auto=format&fit=crop",
    preventive:
      "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=900&q=80&auto=format&fit=crop",
    medical:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&q=80&auto=format&fit=crop",
  },
  whyFeatures: {
    painless:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80&auto=format&fit=crop",
    hygienic:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80&auto=format&fit=crop",
    alwaysOpen:
      "https://images.unsplash.com/photo-1514565131-fce080587e50?w=1200&q=80&auto=format&fit=crop",
  },
} as const;

export const tickerReviews = [
  "“Best dentist in Islamabad — severe dental anxiety — absolutely painless.” — Ammara B.",
  "“Painless results, perfect outcome, highly recommended.” — Muhammad G.",
  "“Exceptionally honest and transparent.” — Omer I.",
  "“Available same day — professional and gentle.” — Patient review",
  "“Open 24/7 when I needed emergency care.” — Patient review",
];

export const services = [
  {
    id: "root-canal",
    title: "Root Canal",
    emoji: "🦷",
    blurb: "Comfort-first endodontic care with advanced anesthesia.",
    image: images.services.rootCanal,
    alt: "Root canal treatment clinical detail at painless dental clinic Islamabad",
  },
  {
    id: "whitening",
    title: "Teeth Whitening",
    emoji: "🌟",
    blurb: "Brilliant, natural-looking brightness — luxury-safe protocols.",
    image: images.services.whitening,
    alt: "Teeth whitening results Islamabad cosmetic dentistry",
  },
  {
    id: "implants",
    title: "Dental Implants",
    emoji: "🔬",
    blurb: "Stable, long-lasting replacement with precision planning.",
    image: images.services.implants,
    alt: "Dental implant consultation Islamabad D-12 clinic",
  },
  {
    id: "pediatric",
    title: "Pediatric Dentistry",
    emoji: "👶",
    blurb: "Gentle visits that help kids feel safe and smiling.",
    image: images.services.pediatric,
    alt: "Pediatric dentistry happy child patient Islamabad",
  },
  {
    id: "preventive",
    title: "Preventive Care",
    emoji: "🛡️",
    blurb: "Hygiene, exams, and protection for lifelong oral health.",
    image: images.services.preventive,
    alt: "Preventive dental care tools Islamabad clinic",
  },
  {
    id: "medical",
    title: "Medical Consultations",
    emoji: "💊",
    blurb: "Clear guidance when dental care meets broader wellness.",
    image: images.services.medical,
    alt: "Medical consultation calm patient Islamabad dental clinic",
  },
] as const;

export const featuredTestimonials = [
  {
    name: "Ammara Balooch",
    excerpt:
      "Best dentist in Islamabad… severe dental anxiety… absolutely painless. Same-day attention when I needed it most.",
    rating: 5,
  },
  {
    name: "Muhammad Ghufran",
    excerpt:
      "Painless results, perfect outcome, highly recommended. Transparent about options and costs.",
    rating: 5,
  },
  {
    name: "Omer Ismail",
    excerpt:
      "Exceptionally honest and transparent. The team made a stressful situation feel manageable.",
    rating: 5,
  },
] as const;

export const areasServed = [
  "Islamabad",
  "F-sectors",
  "G-sectors",
  "E-sectors",
  "Rawalpindi",
] as const;
