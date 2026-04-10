"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { PHONE_TEL } from "@/lib/constants";
import { services } from "@/lib/site-content";
import { Reveal } from "@/components/motion/Reveal";

export function ServicesGrid() {
  const reduce = useReducedMotion();

  return (
    <section
      id="services"
      className="relative bg-pearl py-20 bg-crosshatch"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-wider text-dental-teal">
            Comprehensive care
          </p>
          <h2
            id="services-heading"
            className="mt-2 font-display text-3xl font-semibold text-navy sm:text-4xl lg:text-5xl"
          >
            Every Smile Deserves Expert — Painless — Care
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-navy/75">
            From gentle pediatrics to advanced implants, we combine clinical
            precision with human warmth.{" "}
            <Link
              href="#contact"
              className="font-semibold text-dental-teal underline-offset-4 hover:underline"
            >
              Book a free consultation
            </Link>{" "}
            and feel the difference.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.05}>
              <motion.article
                whileHover={
                  reduce
                    ? undefined
                    : { y: -6, transition: { type: "spring", stiffness: 320, damping: 22 } }
                }
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-sm shadow-navy/5 transition-shadow hover:shadow-lg hover:shadow-navy/10"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span
                    className="absolute bottom-3 left-3 text-2xl drop-shadow-md"
                    aria-hidden
                  >
                    {s.emoji}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-xl font-semibold text-navy">
                    {s.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-navy/70">
                    {s.blurb}
                  </p>
                  <Link
                    href="#contact"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-dental-teal"
                  >
                    Schedule today
                    <motion.span
                      aria-hidden
                      animate={reduce ? undefined : { x: [0, 4, 0] }}
                      transition={{ repeat: Infinity, duration: 1.6 }}
                    >
                      →
                    </motion.span>
                  </Link>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex rounded-full border border-navy/15 bg-white px-6 py-3 text-sm font-semibold text-navy shadow-sm hover:border-dental-teal/40"
          >
            Call for same-day availability
          </a>
        </div>
      </div>
    </section>
  );
}
