import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, isLocale, type Locale } from "@/lib/i18n";

/* Sends locale-less URLs to /en/... or /ar/...: the visitor's saved choice first,
   then their browser language. */
function pickLocale(request: NextRequest): Locale {
  const saved = request.cookies.get("lang")?.value;
  if (saved && isLocale(saved)) return saved;
  const accept = request.headers.get("accept-language") ?? "";
  const first = accept.split(",")[0]?.trim().toLowerCase() ?? "";
  return first.startsWith("ar") ? "ar" : defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const first = pathname.split("/")[1] ?? "";
  if (isLocale(first)) return;

  request.nextUrl.pathname = `/${pickLocale(request)}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  // Skip Next internals, API routes and any file with an extension (images, video, icons).
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
