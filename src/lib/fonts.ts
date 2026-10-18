import localFont from "next/font/local";

/* Fonts are self-hosted from src/assets/fonts (OFL-licensed, Latin subset; Arabic subset for
   Plex Arabic), so builds never fetch from Google. Latin characters on Arabic pages fall back
   to Plex Sans through --font-arabic in site.css. */

/* Archivo keeps its width axis so headings can use font-stretch 78-86% (condensed display). */
export const archivo = localFont({
  src: "../assets/fonts/archivo-var.woff2",
  weight: "100 900",
  style: "normal",
  declarations: [{ prop: "font-stretch", value: "62% 125%" }],
  variable: "--font-archivo",
  display: "swap",
});

export const plex = localFont({
  src: [
    { path: "../assets/fonts/plex-sans-400.woff2", weight: "400", style: "normal" },
    { path: "../assets/fonts/plex-sans-500.woff2", weight: "500", style: "normal" },
    { path: "../assets/fonts/plex-sans-600.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-plex",
  display: "swap",
});

export const plexMono = localFont({
  src: [
    { path: "../assets/fonts/plex-mono-400.woff2", weight: "400", style: "normal" },
    { path: "../assets/fonts/plex-mono-500.woff2", weight: "500", style: "normal" },
    { path: "../assets/fonts/plex-mono-600.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-plex-mono",
  display: "swap",
});

export const plexArabic = localFont({
  src: [
    { path: "../assets/fonts/plex-arabic-400.woff2", weight: "400", style: "normal" },
    { path: "../assets/fonts/plex-arabic-600.woff2", weight: "600", style: "normal" },
    { path: "../assets/fonts/plex-arabic-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-plex-arabic",
  display: "swap",
  preload: false,
});

export const fontVariables = [archivo, plex, plexMono, plexArabic].map((f) => f.variable).join(" ");
