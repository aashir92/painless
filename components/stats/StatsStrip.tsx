"use client";

import Image from "next/image";
import Link from "next/link";
import { useReducedMotion } from "framer-motion";
import { PHONE_TEL } from "@/lib/constants";
import { images, tickerReviews } from "@/lib/site-content";
import { CountUp } from "@/components/motion/CountUp";
import { Reveal } from "@/components/motion/Reveal";

export function StatsStrip() {
  const reduce = useReducedMotion();
  const doubled = [...tickerReviews, ...tickerReviews];

  return (
    <section
      className="relative overflow-hidden border-y border-white/10 bg-navy py-14"
      aria-labelledby="stats-heading"
    >
      <div className="pointer-events-none absolute inset-0 opacity-15">
        <Image
          src={images.statsBg}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          aria-hidden
        />
        <div className="absolute inset-0 bg-navy/80" aria-hidden />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <h2 id="stats-heading" className="sr-only">
            Clinic reputation and availability
          </h2>
        </Reveal>

        <div
          className="group mb-10 overflow-hidden rounded-xl border border-white/10 bg-white/5 py-3 backdrop-blur-sm"
          role="region"
          aria-label="Patient review highlights"
        >
          <div
            className={
              reduce
                ? "flex flex-wrap justify-center gap-6 px-4 text-sm text-pearl/85"
                : "flex w-max gap-10 whitespace-nowrap px-4 animate-marquee group-hover:[animation-play-state:paused] text-sm text-pearl/85"
            }
          >
            {reduce
              ? tickerReviews.map((t) => (
                  <span key={t}>{t}</span>
                ))
              : doubled.map((t, i) => (
                  <span key={`${i}-${t.slice(0, 12)}`}>{t}</span>
                ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {[
            {
              label: "Star rating",
              node: (
                <span className="font-display text-4xl font-semibold text-soft-gold sm:text-5xl">
                  <CountUp end={4.9} decimals={1} />
                  <span className="text-dental-teal">/5</span>
                </span>
              ),
              sub: "Stars from real patients",
            },
            {
              label: "Happy patients",
              node: (
                <span className="font-display text-4xl font-semibold text-pearl sm:text-5xl">
                  <CountUp end={93} suffix="+" />
                </span>
              ),
              sub: "Five-star experiences",
            },
            {
              label: "Availability",
              node: (
                <span className="font-display text-4xl font-semibold text-dental-teal sm:text-5xl">
                  24/7
                </span>
              ),
              sub: "Always here when pain strikes",
            },
            {
              label: "Experience",
              node: (
                <span className="font-display text-4xl font-semibold text-pearl sm:text-5xl">
                  <CountUp end={10} suffix="+" />
                </span>
              ),
              sub: "Years serving Islamabad",
            },
          ].map((card) => (
            <Reveal key={card.label}>
              <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-navy/60 p-5 shadow-inner shadow-black/20 backdrop-blur-md">
                <p className="text-xs font-semibold uppercase tracking-wide text-dental-teal/90">
                  {card.label}
                </p>
                <div className="mt-2">{card.node}</div>
                <p className="mt-2 text-sm text-pearl/70">{card.sub}</p>
                <Link
                  href={`tel:${PHONE_TEL}`}
                  className="mt-4 text-sm font-semibold text-dental-teal hover:underline"
                >
                  Book today — same-day appointments
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
