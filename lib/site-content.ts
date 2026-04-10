/**
 * Local assets in /public/images (AI-generated / photorealistic prompts).
 * Paths are root-relative for next/image static export.
 */

export const images = {
  heroLeft: "/images/hero-patient-dental-chair-smiling.png",
  heroRight: "/images/hero-dental-instruments-tray-overhead.png",
  statsBg: "/images/dental-clinic-waiting-interior-wide.png",
  whyTreatmentRoom: "/images/dental-treatment-room-islamabad.png",
  testimonialsBg: "/images/dental-reception-teal-accent.png",
  locationExterior: "/images/clinic-exterior-daytime-islamabad.png",
  footerTooth: "/images/footer-tooth-macro-navy.png",
  services: {
    rootCanal: "/images/root-canal-clinical-islamabad.png",
    whitening: "/images/teeth-whitening-results-closeup.png",
    implants: "/images/dental-implants-d12-islamabad.png",
    pediatric: "/images/pediatric-dentistry-clinic-friendly.png",
    preventive: "/images/preventive-care-dental-tools-flatlay.png",
    medical: "/images/medical-consultation-calm-hands.png",
  },
  whyFeatures: {
    painless: "/images/painless-relaxed-patient-serene.png",
    expertDoctors: "/images/expert-doctor-back-dental-clinic.png",
    hygienic: "/images/hygienic-modern-dental-islamabad.png",
    alwaysOpen: "/images/clinic-evening-exterior-architectural.png",
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
    alt: "Pediatric dentistry friendly operatory Islamabad clinic",
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
