import type { QuoteType } from "@/content/home";

/* The hero quick form, the role picker and the fleet quote list all hand their selection
   to the quote form at #quote, so the visitor never types the same thing twice. */
export type QuotePrefill = {
  type?: QuoteType["id"];
  scope?: string;
  site?: string;
  start?: string;
  duration?: string;
};

export const QUOTE_EVENT = "sb:quote-prefill";
const QUOTE_STORAGE = "sb:quote-prefill-next-page";

/** Preserve a catalogue request while navigating to the Home quote form. */
export function queueQuotePrefill(detail: QuotePrefill) {
  window.sessionStorage.setItem(QUOTE_STORAGE, JSON.stringify(detail));
}

export function takeQueuedQuotePrefill(): QuotePrefill | null {
  const queued = window.sessionStorage.getItem(QUOTE_STORAGE);
  window.sessionStorage.removeItem(QUOTE_STORAGE);
  if (!queued) return null;
  try { return JSON.parse(queued) as QuotePrefill; }
  catch { return null; }
}

export function prefillQuote(detail: QuotePrefill, scroll = false) {
  window.dispatchEvent(new CustomEvent<QuotePrefill>(QUOTE_EVENT, { detail }));
  if (scroll) {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.getElementById("quote")?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  }
}
