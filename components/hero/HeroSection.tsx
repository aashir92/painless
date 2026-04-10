"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/constants";
import { images } from "@/lib/site-content";

const particles = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  left: `${(i * 7 + 11) % 92}%`,
  top: `${(i * 13 + 17) % 78}%`,
  delay: (i % 5) * 0.35,
}));

export function HeroSection() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative min-h-[100svh] overflow-hidden bg-navy"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-5">
        <div className="relative min-h-[42svh] lg:col-span-3 lg:min-h-0">
          <Image
            src={images.heroLeft}
            alt="Relaxed patient in modern dental chair at painless dental clinic Islamabad D-12"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover object-center"
          />
        </div>
        <div className="relative min-h-[38svh] lg:col-span-2 lg:min-h-0">
          <Image
            src={images.heroRight}
            alt="Sterile dental instruments on tray — clinical excellence Islamabad"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover object-[center_30%]"
          />
        </div>
      </div>

      {/* Navy overlay ~40% */}
      <div
        className="absolute inset-0 bg-navy/40"
        aria-hidden
      />

      {/* Gradient mesh */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,rgba(0,201,177,0.18),transparent_50%),radial-gradient(ellipse_at_80%_60%,rgba(232,201,122,0.12),transparent_45%)]"
        aria-hidden
      />

      {!reduce &&
        particles.map((p) => (
          <motion.span
            key={p.id}
            className="pointer-events-none absolute select-none text-dental-teal/35"
            style={{ left: p.left, top: p.top }}
            initial={{ opacity: 0.2, y: 0 }}
            animate={{ opacity: [0.2, 0.55, 0.2], y: [0, -12, 0] }}
            transition={{
              duration: 4 + (p.id % 3),
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            aria-hidden
          >
            ✦
          </motion.span>
        ))}

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-4 pb-10 pt-28 sm:px-6 sm:pb-14 sm:pt-32 lg:justify-center lg:pb-20 lg:pt-24">
        <div className="max-w-3xl">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-dental-teal backdrop-blur-sm sm:text-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-dental-teal" />
            Open 24 Hours — Every Day
          </p>
          <h1
            id="hero-heading"
            className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-pearl sm:text-5xl lg:text-6xl"
          >
            Islamabad&apos;s Most Trusted Painless Dental Clinic — Open 24/7
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-pearl/85 sm:text-lg">
            Experience dentistry that doesn&apos;t hurt.{" "}
            <span className="font-semibold text-soft-gold">4.9★</span> rated by
            real patients in D-12, Islamabad —{" "}
            <span className="text-dental-teal">93 five-star reviews</span> and
            counting.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <motion.div
              animate={
                reduce
                  ? undefined
                  : { scale: [1, 1.03, 1], boxShadow: ["0 0 0 0 rgba(0,201,177,0)", "0 0 24px 4px rgba(0,201,177,0.35)", "0 0 0 0 rgba(0,201,177,0)"] }
              }
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              className="rounded-full"
            >
              <Link
                href="#contact"
                className="animate-cta-glow inline-flex w-full items-center justify-center rounded-full bg-dental-teal px-8 py-4 text-center text-sm font-bold uppercase tracking-wide text-navy shadow-lg shadow-dental-teal/25 transition-transform hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dental-teal sm:w-auto"
              >
                Book Free Consultation — Available Now
              </Link>
            </motion.div>
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex w-full items-center justify-center rounded-full border border-pearl/40 bg-pearl/10 px-8 py-4 text-center text-sm font-semibold text-pearl backdrop-blur-sm transition-colors hover:bg-pearl/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pearl sm:w-auto"
              aria-label={`Call now ${PHONE_DISPLAY}`}
            >
              Call Now: {PHONE_DISPLAY}
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-x-4 gap-y-2 border-t border-white/15 pt-6 text-xs text-pearl/80 sm:gap-x-6 sm:text-sm">
          {[
            "93 Five-Star Reviews",
            "Open 24 Hours",
            "Painless Procedures",
            "Islamabad’s #1 Rated",
          ].map((t) => (
            <span key={t} className="flex items-center gap-2">
              <span className="text-dental-teal" aria-hidden>
                ✔
              </span>
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
