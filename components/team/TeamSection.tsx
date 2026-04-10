import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { PHONE_TEL } from "@/lib/constants";

const doctors = [
  {
    name: "Dr. Tanveer",
    role: "Root Canal Specialist",
    quote: "Gentle, professional, and genuinely caring.",
    badges: ["Endodontics", "15+ Years", "Pain-Free Focus"],
  },
  {
    name: "Dr. Adnan",
    role: "General & Cosmetic Dentistry",
    quote: "Transparent, cost-effective, and honest.",
    badges: ["Cosmetic", "Restorative", "Same-Day Care"],
  },
];

export function TeamSection() {
  return (
    <section
      id="team"
      className="relative py-20"
      style={{
        backgroundImage: `linear-gradient(rgba(248,249,255,0.92), rgba(248,249,255,0.92)), url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230A1628' fill-opacity='0.06'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}
      aria-labelledby="team-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-wider text-dental-teal">
            Our dentists
          </p>
          <h2
            id="team-heading"
            className="mt-2 font-display text-3xl font-semibold text-navy sm:text-4xl"
          >
            Expertise You Can Feel — Painless, Personal, Professional
          </h2>
          <p className="mt-3 max-w-2xl text-navy/70">
            Real team photos will be displayed upon clinic submission. Until
            then, meet our leaders by name, specialty, and the values we live
            by.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {doctors.map((d, i) => (
            <Reveal key={d.name} delay={i * 0.06}>
              <article className="flex h-full flex-col rounded-2xl border border-navy/10 bg-navy p-8 text-pearl shadow-xl shadow-navy/20">
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-28 w-28 items-center justify-center rounded-full border-2 border-soft-gold bg-navy/80 ring-4 ring-soft-gold/20">
                    <svg
                      className="h-14 w-14 text-soft-gold/90"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      aria-hidden
                    >
                      <path d="M12 4a4 4 0 100 8 4 4 0 000-8zM4 20a8 8 0 0116 0" />
                    </svg>
                  </div>
                  <p className="mt-4 rounded-full bg-dental-teal/15 px-3 py-1 text-xs font-bold uppercase tracking-wide text-dental-teal">
                    Photo Coming Soon
                  </p>
                  <h3 className="mt-4 font-display text-2xl font-semibold">
                    {d.name}
                  </h3>
                  <p className="text-sm font-medium text-dental-teal">{d.role}</p>
                  <p className="mt-3 text-sm italic text-pearl/75">
                    &ldquo;{d.quote}&rdquo;
                  </p>
                </div>
                <ul className="mt-6 flex flex-wrap justify-center gap-2">
                  {d.badges.map((b) => (
                    <li
                      key={b}
                      className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-pearl/90"
                    >
                      {b}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-center text-[11px] leading-relaxed text-pearl/45">
                  Real team photos will be displayed upon clinic submission.
                </p>
                <Link
                  href="#contact"
                  className="mt-6 text-center text-sm font-bold text-dental-teal hover:underline"
                >
                  Request a callback — available now
                </Link>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex rounded-full bg-dental-teal px-6 py-3 text-sm font-bold text-navy"
          >
            Speak with our team today
          </a>
        </div>
      </div>
    </section>
  );
}
