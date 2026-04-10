"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { PHONE_TEL } from "@/lib/constants";
import { featuredTestimonials, images } from "@/lib/site-content";

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?q=Painless+Dental+Islamabad+reviews";

export function TestimonialsCarousel() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const total = featuredTestimonials.length;

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(next, 6500);
    return () => clearInterval(id);
  }, [next, reduce]);

  const active = featuredTestimonials[index];
  const initial = active.name.trim().charAt(0).toUpperCase();

  return (
    <section
      id="reviews"
      className="relative py-20"
      aria-labelledby="reviews-heading"
    >
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <Image
          src={images.testimonialsBg}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          aria-hidden
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-pearl/95" aria-hidden />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-dental-teal">
            Social proof
          </p>
          <h2
            id="reviews-heading"
            className="mt-2 font-display text-3xl font-semibold text-navy sm:text-4xl lg:text-5xl"
          >
            Real Patients. Real Results. Real Smiles.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-navy/70">
            Painless care isn&apos;t a slogan here — it&apos;s what patients say
            after their visit. Same-day appointments when you need relief fast.
          </p>
        </div>

        <div
          className="mx-auto mt-12 max-w-3xl rounded-2xl border border-navy/10 bg-white/90 p-6 shadow-lg shadow-navy/5 backdrop-blur-md sm:p-10"
          role="region"
          aria-roledescription="carousel"
          aria-label="Patient testimonials"
        >
          <div className="flex items-start gap-4">
            <div
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-navy font-display text-2xl font-semibold text-soft-gold"
              aria-hidden
            >
              {initial}
            </div>
            <div className="min-w-0 flex-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.name}
                  initial={reduce ? false : { opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={reduce ? undefined : { opacity: 0, x: -16 }}
                  transition={{ duration: 0.35 }}
                >
                  <p className="font-display text-xl font-semibold text-navy">
                    {active.name}
                  </p>
                  <div
                    className="mt-2 flex gap-1"
                    role="img"
                    aria-label={`${active.rating} out of 5 stars`}
                  >
                    {Array.from({ length: 5 }).map((_, i) => (
                      <motion.span
                        key={i}
                        initial={reduce ? false : { opacity: 0.3, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: reduce ? 0 : i * 0.06 }}
                        className={
                          i < active.rating ? "text-soft-gold" : "text-navy/20"
                        }
                        aria-hidden
                      >
                        ★
                      </motion.span>
                    ))}
                  </div>
                  <blockquote className="mt-4 text-base leading-relaxed text-navy/80">
                    &ldquo;{active.excerpt}&rdquo;
                  </blockquote>
                </motion.div>
              </AnimatePresence>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href={GOOGLE_REVIEWS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-pearl px-4 py-2 text-xs font-bold uppercase tracking-wide text-navy hover:border-dental-teal/40"
                >
                  <span aria-hidden>G</span>
                  Google Reviews
                </a>
                <a
                  href={GOOGLE_REVIEWS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-dental-teal hover:underline"
                >
                  Read all 93 reviews
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between gap-4 border-t border-navy/10 pt-6">
            <button
              type="button"
              onClick={prev}
              className="rounded-full border border-navy/15 px-4 py-2 text-sm font-semibold text-navy hover:bg-navy/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dental-teal"
              aria-label="Previous testimonial"
            >
              Previous
            </button>
            <div className="flex gap-2" role="tablist" aria-label="Testimonial slides">
              {featuredTestimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Show testimonial ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-2.5 w-2.5 rounded-full transition-colors ${
                    i === index ? "bg-dental-teal" : "bg-navy/20"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              className="rounded-full border border-navy/15 px-4 py-2 text-sm font-semibold text-navy hover:bg-navy/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dental-teal"
              aria-label="Next testimonial"
            >
              Next
            </button>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-navy/60">
          Need help now?{" "}
          <a
            href={`tel:${PHONE_TEL}`}
            className="font-semibold text-dental-teal hover:underline"
          >
            Call our 24/7 line
          </a>
        </p>
      </div>
    </section>
  );
}
