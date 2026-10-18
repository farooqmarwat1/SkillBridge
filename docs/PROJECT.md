# Skill Bridge website: project memory

Shared memory for anyone working on this repo, human or agent. Update the status table and
the "To confirm" list whenever you finish a page or get a fact confirmed. Design rules are in
[DESIGN.md](./DESIGN.md).

## The company

- **Skill Bridge Contracting Company**, head office in **Al Jubail**, Eastern Province, Kingdom of Saudi Arabia.
- Arabic name in the footer: **شركة سكيل بريدج للمقاولات**. The brand in Arabic copy is **سكيل بريدج**.
- Business: manpower supply, equipment rental and contracting for oil and gas, petrochemical, construction, power and public-sector sites.
- Phones: **+966 53 905 1475** (main, WhatsApp) and **+966 59 880 7429**.
- Leadership: **Engr. Zafeer Ullah Khan**, Chief Executive Officer. **Waqar Khan**, Founder. Bios are not written yet.
- Mission (from the company profile): "To provide integrated services that meet our customers' expectations. We strive to achieve operational excellence, delivering quality services and safe operations in the Kingdom of Saudi Arabia and globally."
- Vision: "To grow into one of the most reputable companies in manpower, equipment and contracting in Saudi Arabia."
- Counts used on the site: **39** roles in 4 disciplines (Engineering 12, Office and admin 11, Skilled trades 12, Site and HSE 4), **29** equipment types, **7** service lines, **5** sectors.

## Projects (confirmed by the client)

| Slug | Client | Project | Scope |
| --- | --- | --- | --- |
| `neom-green-hydrogen` | Larsen & Toubro (L&T) | NEOM Green Hydrogen Project, Solar PV | Trenching and cable laying incl. road crossings, backfilling and route marker installation, 90 km |
| `mgse-phase-3` | Kalpataru International | MGSE Phase-3, PKG-13 | 160 km of civil work: ROW, bedding, trenching and berm construction |
| `aramco-tcf` | Nesma United Industries | Aramco TCF | Construction of Aramco temporary construction facilities, 10,000 m² |
| `gssip-spark` | Sendan International | GSSIP, SPARK | Civil works: excavations, machine foundations, powerhouse, steel structure |
| `dareen-park` | National Blue Company | Dareen Park, Al Fanateer, Jubail (Royal Commission) | Maintenance |

## Sitemap and build status

All routes exist under `/en` and `/ar`. `src/proxy.ts` redirects `/` to the visitor's language.

| Route | Page | Canvas source | Status |
| --- | --- | --- | --- |
| `/[lang]` | Home | `Main.dc.html`, `Main-AR.dc.html` | Built (EN + AR) |
| `/[lang]/services/manpower-supply` | Service page template | `service-manpower.html` | Built (EN + AR) |
| `/[lang]/services/[slug]` | Other 6 services, same template | `Service.dc.html` | To build |
| `/[lang]/equipment` | Equipment fleet catalogue, filters, quote list | `equipment-fleet.html` | Built (EN + AR) |
| `/[lang]/projects` | Projects listing | `Projects.dc.html` | To build |
| `/[lang]/projects/[slug]` | Case study x5 | `Project.dc.html` | To build |
| `/[lang]/about` | About, mission, vision, leadership | `About.dc.html` | To build |
| `/[lang]/hse` | HSE & quality | `HSE.dc.html` | To build |
| `/[lang]/industries` | Industries | `Industries.dc.html` | To build |
| `/[lang]/careers` | Careers | `Careers.dc.html` | To build |
| `/[lang]/contact` | Contact | `Contact.dc.html` | To build |
| `/[lang]/quote` | Request a quote wizard | `Quote.dc.html` | To build |
| `/[lang]/news` | News and articles | none yet | To build (Home links to it) |
| `/[lang]/privacy`, `/[lang]/terms` | Legal pages | none yet | To build (footer links) |

Removed from the old site: the single long marketing page with generic sections ("Why choose us" and similar), the old navy/Inter theme, and the Unsplash remote images.

## Code map

```
src/
  proxy.ts                  locale redirect (Next 16 "proxy", formerly middleware)
  app/
    globals.css             Tailwind + site.css
    [lang]/layout.tsx       <html lang dir>, fonts, header, footer, WhatsApp button
    [lang]/page.tsx         Home
    [lang]/not-found.tsx
  components/
    layout/                 UtilityBar, SiteHeader, SiteFooter, WhatsAppButton
    home/                   one file per Home section
    ui/                     Icon, Tbc, AutoVideo
  content/                  all copy, per locale: site.ts (shell), home.ts (Home)
  lib/                      i18n.ts (locales, routes, hrefs), media.ts (image imports), fonts.ts, quote-bus.ts (prefills the quote form)
  assets/fonts/             self-hosted woff2 (Archivo variable, IBM Plex Sans/Mono, Plex Sans Arabic)
  styles/site.css           design system classes (see DESIGN.md)
  assets/images/            photos (static imports)
public/video/               hero and band videos with posters
public/docs/                company profile PDF (linked as "Download company profile")
```

Copy lives in `src/content`, never inline in components, so English and Arabic stay in step.
Server components pass strings into the few client components (header drawer, hero video,
manpower picker, fleet preview, testimonials, FAQ, quote form).

## To confirm with the client

- Email address. The profile shows `Engrzksole@gmail.com`, the old site had `Engrzksoule@...`. Proposed `info@skillbridge.sa`. Not shown on the site until confirmed.
- CR number, VAT number, GOSI/Nitaqat band, ISO 9001 / 45001 / 14001 status.
- Office hours and street address.
- Equipment specs marked "To confirm" (capacities, classes, payloads).
- Equipment service records and third-party inspection certificates for lifting equipment.
- Manpower replacement terms and the final worker document checklist (shown with "To confirm" on the service page).
- Whether accommodation can be arranged for supplied crews, as described in the approved service canvas.
- Real testimonials with names and permission.
- News article dates and full articles.
- Client logo usage permission for the marquee names.
- A vector (SVG) version of the logo. The current logo is a 277x228 JPG taken from the PDF.
- Company profile PDF to link from "Download company profile".
- Quote form destination (email inbox or CRM). The form currently confirms on screen only (see the TODO in `src/components/home/QuoteForm.tsx`).
- Which number is on WhatsApp. The site uses +966 53 905 1475 (`contact.whatsapp` in `src/content/site.ts`).
- LinkedIn page URL (the icon is left out until there is one).

## Working rules

- Next.js 16 has breaking changes. Read `node_modules/next/dist/docs/` before using an API (see `AGENTS.md`).
- Work on a branch, build one page at a time, run `npm run lint` and `npm run build` before committing.
- Push to GitHub (`farooqmarwat1/SkillBridge`) only after the owner confirms.
