import Link from "next/link";
import { ContactWhatsAppForm } from "@/components/contact/ContactWhatsAppForm";
import {
  CLINIC,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_DISPLAY,
  WHATSAPP_WA_ME,
} from "@/lib/constants";
import { areasServed } from "@/lib/site-content";
import { Reveal } from "@/components/motion/Reveal";

/** Exact pin: Swiss Center / D-12 Markaz coordinates */
const MAP_EMBED = `https://maps.google.com/maps?q=${CLINIC.mapLat},${CLINIC.mapLng}&z=17&hl=en&output=embed`;

const whatsappHref = `https://wa.me/${WHATSAPP_WA_ME}?text=${encodeURIComponent(
  `Hi ${CLINIC.shortName}, I'd like to book an appointment.`
)}`;

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
            Contact & location — Swiss Center, D-12 Markaz
          </h2>
          <p className="mt-3 max-w-2xl text-navy/70">
            Same-day appointments when available. Message us on WhatsApp or use
            the form — we reply as soon as we can, 24/7.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-start">
          {/* Left: contact + map */}
          <Reveal>
            <div className="flex flex-col gap-8">
              <div className="rounded-2xl border border-navy/10 bg-white p-6 shadow-md sm:p-8">
                <div className="inline-flex items-center gap-2 rounded-full bg-dental-teal/15 px-3 py-1 text-xs font-bold uppercase tracking-wide text-navy">
                  <span className="h-2 w-2 rounded-full bg-dental-teal" />
                  Open 24 Hours — Every Day
                </div>
                <address className="mt-5 not-italic">
                  <p className="font-display text-xl font-semibold text-navy">
                    {CLINIC.shortName}
                  </p>
                  <p className="mt-2 text-navy/85">
                    Swiss Center
                    <br />
                    {CLINIC.addressLine}
                    <br />
                    {CLINIC.city}, {CLINIC.country}
                  </p>
                </address>
                <p className="mt-3 text-sm font-medium text-navy/60">
                  Plus code: PX22+74C · Map pin: {CLINIC.mapLat}, {CLINIC.mapLng}
                </p>

                <div className="mt-6 space-y-2 text-sm">
                  <p>
                    <span className="font-semibold text-navy">Phone: </span>
                    <a
                      href={`tel:${PHONE_TEL}`}
                      className="text-dental-teal underline-offset-2 hover:underline"
                    >
                      {PHONE_DISPLAY}
                    </a>
                  </p>
                  <p>
                    <span className="font-semibold text-navy">WhatsApp: </span>
                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-dental-teal underline-offset-2 hover:underline"
                    >
                      {WHATSAPP_DISPLAY}
                    </a>
                  </p>
                </div>

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
              </div>

              <div className="overflow-hidden rounded-2xl border border-navy/10 shadow-inner">
                <iframe
                  title={`Exact location: ${CLINIC.shortName}, ${CLINIC.addressLine}, ${CLINIC.city}`}
                  src={MAP_EMBED}
                  className="h-[300px] w-full grayscale-[15%] contrast-[1.05] sm:h-[360px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>

              <Link
                href="#services"
                className="text-center text-sm font-semibold text-dental-teal hover:underline sm:text-left"
              >
                Explore painless services
              </Link>
            </div>
          </Reveal>

          {/* Right: WhatsApp form */}
          <Reveal delay={0.06}>
            <ContactWhatsAppForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
