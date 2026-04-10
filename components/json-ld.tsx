import { CLINIC, SITE_URL } from "@/lib/constants";
import { images } from "@/lib/site-content";

function absUrl(path: string) {
  return new URL(path, SITE_URL).href;
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: CLINIC.name,
  image: [
    absUrl(images.heroLeft),
    absUrl(images.whyTreatmentRoom),
    absUrl(images.locationExterior),
  ],
  url: SITE_URL,
  telephone: "+923469439585",
  address: {
    "@type": "PostalAddress",
    streetAddress: CLINIC.addressLine,
    addressLocality: CLINIC.city,
    addressCountry: "PK",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "33.6844",
    longitude: "72.9847",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "93",
    bestRating: "5",
    worstRating: "1",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  priceRange: "$$",
};

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
