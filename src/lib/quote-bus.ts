import type { QuoteType } from "@/content/home";

/* The hero quick form, the role picker and the fleet quote list all hand their selection
   to the quote form at #quote, so the visitor never types the same thing twice. */
export type QuotePrefill = {
  type?: QuoteType["id"];
  scope?: string;
  site?: string;
  start?: string;
};

export const QUOTE_EVENT = "sb:quote-prefill";

export function prefillQuote(detail: QuotePrefill, scroll = false) {
  window.dispatchEvent(new CustomEvent<QuotePrefill>(QUOTE_EVENT, { detail }));
  if (scroll) {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.getElementById("quote")?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  }
}
