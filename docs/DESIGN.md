# Skill Bridge design system

The site's look is "spec-sheet industrial": the calm, data-first style of an engineering
datasheet, with hi-vis yellow used only as a marker. It is built to look like a contractor's
own website, not a template. Read this before you add or change any UI.

The approved Figma-style canvas (all pages, desktop and mobile, English and Arabic) is the
visual reference: https://claude.ai/artifact/LTc74iGY1pxL4X5Vvm4btW
Design system board: https://claude.ai/artifact/3xUhTtEMn6uDNJj1NpvLzE

## Where the styles live

| File | What it holds |
| --- | --- |
| `src/styles/site.css` | Every token and component class, ported from the canvas (`sb-home.css`). Source of truth. |
| `src/app/globals.css` | Tailwind v4 import, `@theme inline` aliases to the tokens, then `site.css`. |
| `src/lib/fonts.ts` | `next/font/local` setup from `src/assets/fonts` (self-hosted, no Google fetch). Exposes `--font-archivo`, `--font-plex`, `--font-plex-mono`, `--font-plex-arabic`. |

Write new UI with the existing component classes first. Use Tailwind utilities only for
one-off layout glue. Do not add new colours, radii or shadows: extend the tokens instead.

Responsive rules are **container queries** on `.sbh-wrap` (`container: sbh / inline-size`),
not media queries. Breakpoints in use: 1345 (wide hero), 1120 (nav to burger), 1100, 1000,
900 (main mobile switch), 800, 600, 560, 480, 420.

## Colour tokens

| Token | Value | Use |
| --- | --- | --- |
| `--brand-ink` | `#0b1220` | Site Ink. Text, dark bands, footer. From the logo. |
| `--brand-blue` | `#1aa0db` | Bridge Blue. Decorative only (eyebrows on dark, rings). Fails AA as text on white. |
| `--action` | `#0a72a6` | Links, primary buttons, focus ring. Hover `#085b85`. |
| `--highlight` | `#f7c21a` | Hi-Vis Yellow. Marker underline, CTA band, badges, footer icons. Hover `#ffd24a`. |
| `--surface` / `--surface-alt` / `--surface-sunken` | `#fff` / `#f6f8fa` / `#e9eef3` | Page, alternate section, inset panels. |
| `--text` / `--text-muted` / `--text-subtle` | `#0b1220` / `#3e4a5a` / `#5d6b7c` | Body hierarchy. |
| `--text-inverse` / `--text-inverse-muted` | `#e8eef5` / `#9fb0c4` | Text on ink. |
| `--line` / `--line-strong` / `--line-inverse` | `#d8e0e8` / `#7d8c9e` / `#24324a` | Rules and borders. |
| `--warning` on `--warning-soft` | `#8a5a00` on `#fff3d6` | The "To confirm" badge (`.tbc`). |

Rule: yellow is never body text and never a large background except the CTA band and
hazard stripe. Blue `#1aa0db` is never used for text on white.

## Type

| Role | Font | Notes |
| --- | --- | --- |
| Display (`.display`) | Archivo, `font-stretch: 78%`, 800, uppercase | 80px desktop, 52px at 900, 44px at 420. |
| Section title (`.h2`) | Archivo, `font-stretch: 86%`, 750, uppercase | 44 / 32 / 29px. |
| Card title (`.h4`) | Archivo 700 | 21px. |
| Body, lead (`.lead`) | IBM Plex Sans | 16px body, 18px lead, max 60ch. |
| Labels, data (`.label`, `.data`, `.eyebrow`) | IBM Plex Mono | 12px, uppercase, 0.12em tracking. Phone numbers, codes, counts. |
| Arabic | IBM Plex Sans Arabic | Replaces all of the above in RTL. |

## Shape and depth

- Radius: `--radius-sm` 3px (buttons, inputs, images), `--radius-md` 6px (cards, panels), pill only for chips and the video button.
- One shadow, `--shadow-float`, for floating panels (hero quick form, WhatsApp button). Everything else uses 1px rules.
- Signature details: yellow corner notch on stat cards, 3px yellow rule that draws across service cards on hover, the hazard stripe (`.hazard`) above the CTA band and footer, spec "plates" for equipment with a code like `SB-L01`.

## Components (class names)

Layout: `.c` container (1280px, 32px gutter, 20px under 900), `.sec` section (120px / 72px block padding), `.alt` alternate background, `.head` two-column section head.
Buttons: `.btn` plus `--lg`, `--sm`, `--ghost`, `--ink`, `--hivis`, `--ghost-inv`. Text link `.link`. Arrows nudge 4px on hover.
Shell: `.util` utility bar, `.hdr` sticky header with `.nav` and `.burger`, `.drawer`, `.foot` footer, `.wa` WhatsApp button.
Home: `.hero` (full-bleed video, `.hero__in`, `.hfact`, `.hero__dock`), `.quick` (horizontal bar), `.clients`, `.about`, `.stats`, `.svcs`/`.svc`, `.mp` (tabs and chips), `.plates`/`.plate`, `.band` + `.steps`, `.ind`, `.tst`, `.hse`, `.certs`, `.pbento`/`.pcard`, `.cta`, `.news`/`.post`, `.faq`, `.qf` quote form.
Inner pages (already in `site.css`, not yet built in React): `.ph`/`.subnav`/`.ov`/`.dir` service page, `.cs-*`/`.gal` case study, `.fl-*`/`.ql` fleet, `.ab-*`/`.mv`/`.ldr` about, `.hs-*` HSE, `.sb-blk` industries, `.ct-*` contact, `.cr-*` careers, `.qz-*` quote wizard.

## Motion

All motion is CSS. Everything is switched off under `prefers-reduced-motion: reduce`, and
content is always visible without animation.

| Effect | Where | How |
| --- | --- | --- |
| Line rise | Hero headline | `.ln > span` with `rise`, 90ms stagger |
| Marker draw | Hero `<mark>` | yellow `::after` with `draw`, 0.75s delay |
| Ken Burns | Hero video | `zoom` 14s |
| Dock rise | Quick request bar at the hero base | `dock` |
| Beacon | Yellow dot on the hero footage label | `beacon` |
| Count-up | Hero figures, stats | `@property --n` integer animated by `count` |
| Marquee | Client names | `marquee` 50s, pauses on hover |
| Scroll reveal | `.rv`, `.rv-img` | `animation-timeline: view()` inside `@supports` |
| Header shadow | `.hdr` | `animation-timeline: scroll()` |
| Hover | cards, images, rules | lift, 1.04 scale, yellow rule draw |
| Ping | WhatsApp button | `ping` ring |

Videos autoplay muted and looped, and stay paused when reduced motion is on. The hero video has a visible pause button.

## Arabic and RTL

- Routes are `/en/...` and `/ar/...`. `<html lang dir>` is set per locale in `src/app/[lang]/layout.tsx`.
- In RTL, every element uses IBM Plex Sans Arabic, with no uppercase, no letter-spacing and no condensed width. Line heights are taller.
- Layout mirrors through `[dir="rtl"]` overrides at the end of `site.css`. Prefer logical properties (`margin-inline-start`) in new CSS.
- Phone numbers, figures, equipment codes and stat counters stay left to right (`direction: ltr; unicode-bidi: isolate`).
- Directional arrows flip. The client marquee keeps scrolling the same way.
- Brand name in Arabic: **سكيل بريدج**. Legal name line in the footer: **شركة سكيل بريدج للمقاولات**.

## Content rules

- Never invent facts, figures, certificates, client quotes or dates.
- Unknown values show the `.tbc` badge ("To confirm" / "بانتظار التأكيد") or a bracketed placeholder such as `[Name]`.
- Testimonials stay as bracketed placeholders until real, approved quotes arrive.
- Do not use the Vision 2030 logo as a client logo.
- Write plain, specific copy: what is supplied, where and how. No hype words.

## Images and video

- Photos are statically imported from `src/assets/images` through `src/lib/media.ts`, so `next/image` gets real sizes and blur placeholders. To replace a photo, overwrite the file with the same name.
- `site/`: real Skill Bridge site photos. `projects/`: project photos, named by project. `leaders/`: leadership portraits. `stock/`: temporary stock images, to be replaced.
- Videos and their posters live in `public/video` (720p MP4).
- Every meaningful image has alt text in both languages. Decorative images use `alt=""`.
