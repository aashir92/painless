import Image from "next/image";
import Link from "next/link";
import { CLINIC, PHONE_DISPLAY, PHONE_TEL } from "@/lib/constants";
import { areasServed, images } from "@/lib/site-content";
import { Reveal } from "@/components/motion/Reveal";

const MAP_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  CLINIC.mapQuery
)}&output=embed`;

export function LocationSection() {
  return (
    <section
      id="contact"
      className="bg-pearl py-20 bg-crosshatch"
      aria-labelledby="location-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-wider text-dental-teal">
            Visit us
          </p>
          <h2
            id="location-heading"
            className="mt-2 font-display text-3xl font-semibold text-navy sm:text-4xl"
          >
            Swiss Center, D-12 Markaz — Painless Care in the Heart of Islamabad
          </h2>
          <p className="mt-3 max-w-2xl text-navy/70">
            Same-day appointments available. Walk-ins welcome when capacity
            allows — call ahead for the fastest painless dental experience.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:items-stretch">
          <Reveal>
            <div className="relative min-h-[240px] overflow-hidden rounded-2xl border border-navy/10 shadow-md lg:min-h-[320px]">
              <Image
                src={images.locationExterior}
                alt="Modern medical building exterior Islamabad — dental clinic D-12 Markaz location"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="flex h-full flex-col justify-between rounded-2xl border border-navy/10 bg-white p-6 shadow-md sm:p-8">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-dental-teal/15 px-3 py-1 text-xs font-bold uppercase tracking-wide text-navy">
                  <span className="h-2 w-2 rounded-full bg-dental-teal" />
                  Open 24 Hours — Every Day
                </div>
                <address className="mt-4 not-italic">
                  <p className="font-display text-xl font-semibold text-navy">
                    {CLINIC.shortName}
                  </p>
                  <p className="mt-2 text-navy/80">
                    {CLINIC.addressLine}
                    <br />
                    {CLINIC.city}, {CLINIC.country}
                  </p>
                </address>
                <p className="mt-4 text-sm text-navy/60">
                  Plus code: PX22+74C
                </p>
                <div className="mt-6">
                  <p className="text-xs font-bold uppercase tracking-wide text-navy/50">
                    Areas served
                  </p>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {areasServed.map((a) => (
                      <li
                        key={a}
                        className="rounded-full border border-navy/10 bg-pearl px-3 py-1 text-xs font-semibold text-navy"
                      >
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    CLINIC.mapQuery
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center rounded-full bg-navy px-5 py-3 text-center text-sm font-bold text-pearl hover:bg-navy/90"
                >
                  Get directions
                </a>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="inline-flex flex-1 items-center justify-center rounded-full border-2 border-dental-teal bg-dental-teal/10 px-5 py-3 text-center text-sm font-bold text-navy"
                >
                  Call {PHONE_DISPLAY}
                </a>
              </div>
              <Link
                href="#services"
                className="mt-4 block text-center text-sm font-semibold text-dental-teal hover:underline"
              >
                Explore painless services
              </Link>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-8 overflow-hidden rounded-2xl border border-navy/10 shadow-inner">
            <iframe
              title={`Map of ${CLINIC.shortName} at ${CLINIC.addressLine}`}
              src={MAP_EMBED}
              className="h-[320px] w-full grayscale-[20%] contrast-[1.05] sm:h-[380px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
