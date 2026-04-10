import Link from "next/link";
import { CLINIC, PHONE_DISPLAY, PHONE_TEL } from "@/lib/constants";

const nav = [
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "About" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href="#top"
          className="font-display text-xl font-semibold tracking-tight text-pearl sm:text-2xl"
        >
          {CLINIC.shortName}
        </Link>
        <nav
          className="hidden items-center gap-6 text-sm font-medium text-pearl/90 md:flex"
          aria-label="Primary"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-dental-teal"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <a
          href={`tel:${PHONE_TEL}`}
          className="shrink-0 rounded-full border border-dental-teal/50 bg-dental-teal/10 px-3 py-2 text-xs font-semibold text-dental-teal transition-colors hover:bg-dental-teal/20 sm:px-4 sm:text-sm"
          aria-label={`Call now ${PHONE_DISPLAY}`}
        >
          <span className="hidden sm:inline">Call </span>
          {PHONE_DISPLAY}
        </a>
      </div>
    </header>
  );
}
