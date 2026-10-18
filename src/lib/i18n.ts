export const locales = ["en", "ar"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const isLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

export const dirOf = (lang: Locale) => (lang === "ar" ? "rtl" : "ltr");

/** Site routes, without the locale prefix. Pages marked "To build" in docs/PROJECT.md 404 until built. */
export const routes = {
  home: "",
  about: "/about",
  services: "/#services",
  manpower: "/services/manpower-supply",
  equipmentRental: "/services/equipment-rental",
  contracting: "/services/civil-general-contracting",
  maintenance: "/services/plant-maintenance-shutdowns",
  fabrication: "/services/fabrication-workshop",
  logistics: "/services/logistics-transport",
  trading: "/services/trading-supply",
  equipment: "/equipment",
  industries: "/industries",
  projects: "/projects",
  hse: "/hse",
  careers: "/careers",
  contact: "/contact",
  quote: "/quote",
  news: "/news",
} as const;

export type RouteKey = keyof typeof routes;

/** Locale-prefixed link, e.g. href("ar", "/projects") -> "/ar/projects". */
export function href(lang: Locale, path: string = "") {
  return path.startsWith("#") ? path : `/${lang}${path}`;
}

/** The same page in the other language. */
export function swapLocale(pathname: string, to: Locale) {
  const parts = pathname.split("/");
  if (parts[1] && isLocale(parts[1])) parts[1] = to;
  else parts.splice(1, 0, to);
  return parts.join("/") || `/${to}`;
}

export const projectSlugs = [
  "neom-green-hydrogen",
  "mgse-phase-3",
  "aramco-tcf",
  "gssip-spark",
  "dareen-park",
] as const;
export type ProjectSlug = (typeof projectSlugs)[number];

export const projectHref = (lang: Locale, slug: ProjectSlug) => href(lang, `/projects/${slug}`);
