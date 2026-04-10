"use client";

import Link from "next/link";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/constants";

export function MobileStickyCta() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] border-t border-white/10 bg-navy/95 p-3 backdrop-blur-md md:hidden">
      <div className="mx-auto flex max-w-lg gap-3">
        <a
          href={`tel:${PHONE_TEL}`}
          className="flex flex-1 items-center justify-center gap-2 rounded-full border border-dental-teal/40 bg-dental-teal/10 py-3 text-sm font-bold text-dental-teal"
          aria-label={`Call now ${PHONE_DISPLAY}`}
        >
          <span aria-hidden>📞</span>
          Call Now
        </a>
        <Link
          href="#contact"
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-dental-teal py-3 text-sm font-bold text-navy shadow-lg shadow-dental-teal/25"
        >
          <span aria-hidden>📅</span>
          Book Appointment
        </Link>
      </div>
    </div>
  );
}
