"use client";

import { useCallback, useState } from "react";
import { CLINIC, WHATSAPP_DISPLAY, WHATSAPP_WA_ME } from "@/lib/constants";
import { services } from "@/lib/site-content";

const serviceTitles = ["General / not sure", ...services.map((s) => s.title)];

function buildWhatsAppUrl(body: string) {
  const params = new URLSearchParams({ text: body });
  return `https://wa.me/${WHATSAPP_WA_ME}?${params.toString()}`;
}

function formatPreferredSlot(date: string, time: string) {
  if (!date && !time) return "—";
  if (date && time) return `${date} at ${time}`;
  if (date) return date;
  return `Time: ${time}`;
}

export function ContactWhatsAppForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  /** Split date/time — iOS Safari poorly supports `datetime-local` (often blank / invisible). */
  const [prefDate, setPrefDate] = useState("");
  const [prefTime, setPrefTime] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const lines = [
        `Hello *${CLINIC.shortName}*, I'd like to book an appointment.`,
        "",
        `*Name:* ${name.trim() || "—"}`,
        `*Phone:* ${phone.trim() || "—"}`,
        `*Service:* ${service || "—"}`,
        `*Preferred date/time:* ${formatPreferredSlot(prefDate, prefTime)}`,
        "",
        message.trim() ? `*Message:*\n${message.trim()}` : "",
      ].filter(Boolean);
      const url = buildWhatsAppUrl(lines.join("\n"));
      window.open(url, "_blank", "noopener,noreferrer");
    },
    [name, phone, service, prefDate, prefTime, message]
  );

  /* text-base = 16px — avoids iOS zoom; min-height helps native date/time pickers */
  const fieldClass =
    "w-full min-h-12 border-0 border-b-2 border-navy/25 bg-transparent px-0 py-3 text-base text-navy placeholder:text-navy/40 outline-none transition-[border-color,box-shadow] duration-200 focus-visible:border-soft-gold focus-visible:shadow-[0_1px_0_0_var(--soft-gold)] focus-visible:ring-0 [color-scheme:light]";

  return (
    <div
      className="rounded-2xl border border-navy/10 bg-white p-6 shadow-md sm:p-8"
      id="contact-form"
    >
      <h3 className="font-display text-2xl font-semibold text-navy">
        Book via WhatsApp
      </h3>
      <p className="mt-2 text-sm text-navy/65">
        Fill in your details — we&apos;ll open WhatsApp with your message to{" "}
        <span className="font-semibold text-navy">{WHATSAPP_DISPLAY}</span>.
      </p>

      <form className="mt-8 space-y-6" onSubmit={onSubmit} noValidate>
        <div>
          <label htmlFor="contact-name" className="sr-only">
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="contact-phone" className="sr-only">
            Phone
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="Phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="contact-service" className="sr-only">
            Service
          </label>
          <select
            id="contact-service"
            name="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            className={`${fieldClass} cursor-pointer appearance-none bg-[length:1rem] bg-[right_0_center] bg-no-repeat pr-8`}
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%230A1628'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
            }}
          >
            <option value="">Select a service</option>
            {serviceTitles.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <fieldset className="space-y-3 border-0 p-0">
          <legend className="text-sm font-semibold text-navy">
            Preferred date &amp; time
          </legend>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-4">
            <div>
              <label
                htmlFor="contact-date"
                className="mb-1 block text-xs font-bold uppercase tracking-wide text-navy/55"
              >
                Date
              </label>
              <input
                id="contact-date"
                name="date"
                type="date"
                value={prefDate}
                onChange={(e) => setPrefDate(e.target.value)}
                className={fieldClass}
              />
            </div>
            <div>
              <label
                htmlFor="contact-time"
                className="mb-1 block text-xs font-bold uppercase tracking-wide text-navy/55"
              >
                Time
              </label>
              <input
                id="contact-time"
                name="time"
                type="time"
                value={prefTime}
                onChange={(e) => setPrefTime(e.target.value)}
                className={fieldClass}
              />
            </div>
          </div>
        </fieldset>
        <div>
          <label htmlFor="contact-message" className="sr-only">
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={4}
            placeholder="Tell us about your visit or questions…"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={`${fieldClass} resize-y min-h-[120px]`}
          />
        </div>

        <button
          type="submit"
          className="animate-submit-gold-pulse flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-4 text-sm font-bold uppercase tracking-wide text-white transition-transform hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-soft-gold active:scale-[0.99]"
        >
          <WhatsAppGlyph className="h-5 w-5 shrink-0" aria-hidden />
          Send to WhatsApp
        </button>
      </form>
    </div>
  );
}

function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.883 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}
