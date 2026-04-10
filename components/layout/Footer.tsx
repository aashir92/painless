import Image from "next/image";
import Link from "next/link";
import { CLINIC, PHONE_DISPLAY, PHONE_TEL } from "@/lib/constants";
import { images } from "@/lib/site-content";

const quickLinks = [
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "About" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer
      className="relative overflow-hidden bg-navy text-pearl"
      aria-labelledby="footer-heading"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
        <Image
          src={images.footerTooth}
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          aria-hidden
        />
      </div>
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div>
            <h2 id="footer-heading" className="font-display text-2xl font-semibold">
              {CLINIC.shortName}
            </h2>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-pearl/75">
              Make Your Teeth Brighter With Us ✨
            </p>
            <p className="mt-4 text-sm text-pearl/60">
              {CLINIC.addressLine}, {CLINIC.city}
            </p>
            <a
              href={`tel:${PHONE_TEL}`}
              className="mt-2 inline-block text-sm font-semibold text-dental-teal hover:underline"
            >
              {PHONE_DISPLAY}
            </a>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-dental-teal/30 bg-dental-teal/10 px-3 py-1 text-xs font-bold text-dental-teal">
              Google 4.9★ · 93 reviews
            </div>
          </div>
          <nav aria-label="Footer">
            <p className="text-xs font-bold uppercase tracking-wide text-pearl/50">
              Quick links
            </p>
            <ul className="mt-3 flex flex-col gap-2 text-sm font-medium">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-dental-teal">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="#contact"
              className="mt-6 inline-flex rounded-full bg-dental-teal px-5 py-2.5 text-sm font-bold text-navy"
            >
              Book free consultation
            </Link>
          </nav>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8 text-xs text-pearl/50">
          <p>
            © {new Date().getFullYear()} {CLINIC.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
