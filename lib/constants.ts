/** Set `NEXT_PUBLIC_SITE_URL` in Cloudflare Pages (or `.env.local`) to your live domain. */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://painless.pages.dev";

export const PHONE_DISPLAY = "0346 9439585";
export const PHONE_TEL = "03469439585";

/** WhatsApp for appointment form + floating button */
export const WHATSAPP_DISPLAY = "0342 2072060";
/** Digits only, country code, no + (wa.me format) */
export const WHATSAPP_WA_ME = "923422072060";

export const CLINIC = {
  name: "Painless Dental and Medical Clinic",
  shortName: "Painless Dental",
  addressLine: "PX22+74C, D-12 Markaz",
  city: "Islamabad",
  country: "Pakistan",
  mapQuery: "Swiss Center D-12 Markaz Islamabad",
  /** Map pin / embed (D-12 Markaz area) */
  mapLat: "33.6844",
  mapLng: "72.9847",
} as const;
