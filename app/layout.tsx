import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { JsonLd } from "@/components/json-ld";
import { CLINIC, SITE_URL } from "@/lib/constants";
import { images } from "@/lib/site-content";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const title =
  "Painless Dental Clinic Islamabad | 4.9★ Open 24/7 | D-12 Markaz";
const description =
  "Visit Islamabad's top-rated painless dental clinic in D-12. Expert dentists, 24/7 availability, root canals, whitening & more. 93 five-star reviews. Book free consultation today!";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: title, template: `%s | ${CLINIC.shortName}` },
  description,
  keywords: [
    "best dentist Islamabad",
    "painless dental clinic D-12",
    "root canal Islamabad",
    "teeth whitening Islamabad",
    "24 hour dentist Islamabad",
    "dentist near me Islamabad",
  ],
  openGraph: {
    title,
    description,
    url: SITE_URL,
    siteName: CLINIC.name,
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: images.heroLeft,
        width: 1400,
        height: 933,
        alt: "Painless dental clinic Islamabad — trusted care in D-12 Markaz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [images.heroLeft],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body
        className={`${cormorant.variable} ${dmSans.variable} min-h-full flex flex-col font-sans antialiased`}
      >
        <JsonLd />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-pearl focus:px-4 focus:py-2 focus:text-navy focus:shadow-lg"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
