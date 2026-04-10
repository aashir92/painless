/** Set `NEXT_PUBLIC_SITE_URL` in Cloudflare Pages (or `.env.local`) to your live domain. */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://painless.pages.dev";

export const PHONE_DISPLAY = "0346 9439585";
export const PHONE_TEL = "03469439585";

export const CLINIC = {
  name: "Painless Dental and Medical Clinic",
  shortName: "Painless Dental",
  addressLine: "PX22+74C, D-12 Markaz",
  city: "Islamabad",
  country: "Pakistan",
  mapQuery: "Swiss Center D-12 Markaz Islamabad",
} as const;
