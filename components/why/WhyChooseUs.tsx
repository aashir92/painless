"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { PHONE_TEL } from "@/lib/constants";
import { images } from "@/lib/site-content";
import { Reveal } from "@/components/motion/Reveal";

const blocks = [
  {
    id: "painless",
    title: "Truly Painless",
    body: "Advanced anesthesia and gentle techniques — dentistry that respects your comfort.",
    image: images.whyFeatures.painless,
    alt: "Serene patient experience painless dental clinic Islamabad",
  },
  {
    id: "experts",
    title: "Expert Doctors",
    body: "Dr. Tanveer & Dr. Adnan — Islamabad's finest, with transparent, ethical care.",
    image: images.whyFeatures.expertDoctors,
    alt: "Expert dental team in modern clinic corridor — professional from behind, Islamabad",
  },
  {
    id: "hygiene",
    title: "Hygienic & Modern",
    body: "Immaculately clean operatories and cutting-edge equipment you can trust.",
    image: images.whyFeatures.hygienic,
    alt: "Hygienic modern dental operatory sterile instruments tray Islamabad D-12 clinic",
  },
  {
    id: "open",
    title: "Always Open",
    body: "24/7, because dental pain doesn't keep office hours.",
    image: images.whyFeatures.alwaysOpen,
    alt: "Evening exterior modern medical building architectural photography Islamabad clinic",
  },
];

export function WhyChooseUs() {
  const reduce = useReducedMotion();

  return (
    <section
      id="why-us"
      className="relative py-20 text-pearl"
      aria-labelledby="why-heading"
    >
      <div className="absolute inset-0">
        <Image
          src={images.whyTreatmentRoom}
          alt="Modern dental treatment room Islamabad — painless dental clinic interior"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy/[0.55]" aria-hidden />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_0%,rgba(0,201,177,0.12),transparent_55%)]"
          aria-hidden
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-wider text-dental-teal">
            Why families choose us
          </p>
          <h2
            id="why-heading"
            className="mt-2 max-w-3xl font-display text-3xl font-semibold sm:text-4xl lg:text-5xl"
          >
            Why Islamabad Trusts Painless Dental
          </h2>
          <p className="mt-4 max-w-2xl text-pearl/80">
            Clinical precision meets human warmth — the confidence of a private
            hospital with the approachability of your neighborhood experts.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {blocks.map((b, i) => (
            <Reveal key={b.id} delay={i * 0.08}>
              <motion.div
                whileHover={
                  reduce ? undefined : { scale: 1.01, transition: { duration: 0.2 } }
                }
                className="overflow-hidden rounded-2xl border border-white/15 bg-white/10 shadow-lg shadow-black/20 backdrop-blur-md"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={b.image}
                    alt={b.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold sm:text-2xl">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-pearl/80">
                    {b.body}
                  </p>
                  <Link
                    href="#team"
                    className="mt-4 inline-block text-sm font-semibold text-dental-teal hover:underline"
                  >
                    Meet the team
                  </Link>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="#contact"
            className="rounded-full bg-dental-teal px-6 py-3 text-sm font-bold text-navy"
          >
            Book today — painless visit
          </Link>
          <a
            href={`tel:${PHONE_TEL}`}
            className="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-pearl hover:bg-white/10"
          >
            Call now
          </a>
        </div>
      </div>
    </section>
  );
}
