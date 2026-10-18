# Prompt for ChatGPT / Codex

Paste everything inside the box below into ChatGPT (with the GitHub repo connected) or Codex.
Change the task line at the end to the page you want next.

````text
You are a senior front-end developer continuing an existing website build. Work carefully and
match what is already there; do not redesign.

PROJECT
- Skill Bridge Contracting Company (Al Jubail, Saudi Arabia): manpower supply, equipment
  rental and contracting for oil & gas, petrochemical, construction and public-sector sites.
- Repo: https://github.com/farooqmarwat1/SkillBridge, branch `redesign/skill-bridge-v2`.
- Stack: Next.js 16.2 (App Router, Turbopack), React 19.2, TypeScript, Tailwind CSS v4.
- Bilingual: English and Arabic (RTL). Routes are /en/... and /ar/... under src/app/[lang].

READ BEFORE WRITING ANY CODE
1. AGENTS.md
2. docs/PROJECT.md: company facts, sitemap, build status, "To confirm" list
3. docs/DESIGN.md: tokens, type, components, motion, RTL and content rules
4. design/canvas/README.md and the design file for the page you are building
5. The built Home page as the pattern to copy:
   src/app/[lang]/page.tsx, src/components/home/*, src/content/home.ts
6. Next.js 16 has breaking changes. Check node_modules/next/dist/docs/ before using an API.
   In particular: middleware is now src/proxy.ts; params are async
   (`const { lang } = await params`); use the global PageProps<"/[lang]/..."> types.

DESIGN REFERENCE
- The approved design for every page is in design/canvas/*.html (markup plus data). It uses the
  same class names as src/styles/site.css, so the styling already exists.
- Visual canvas (all pages, desktop and mobile, EN and AR): <PASTE PUBLIC CANVAS LINK>
- Design system board: <PASTE PUBLIC DESIGN SYSTEM LINK>

HOW TO BUILD A PAGE
- Route: src/app/[lang]/<route>/page.tsx with generateMetadata, isLocale() check and notFound().
- Copy: src/content/<page>.ts exporting { en, ar } with one shared TypeScript type. No text
  hard-coded in components.
- Components: src/components/<page>/*. Server components by default; "use client" only for
  interactive parts (tabs, filters, galleries, forms).
- Styling: reuse the classes in src/styles/site.css. Do not add colours, shadows or fonts. If a
  new class is truly needed, add it at the end of site.css using the existing tokens.
- Images: import from src/lib/media.ts and render with next/image, always with a `sizes`
  prop; add placeholder="blur" on large photos. Never use remote image URLs.
- Links: use href(lang, routes.x) from src/lib/i18n.ts. Project pages use projectHref().
- Motion: CSS only (classes rv, rv-img, fade). It must stay off under prefers-reduced-motion.
- Arabic: real translations in the ar object; brand name سكيل بريدج; numbers, codes and phone
  numbers stay left-to-right (dir="ltr").
- Accessibility: one h1 per page, alt text in both languages, real buttons for actions, and
  labels on every form field.

CONTENT RULES (strict)
- Never invent facts: no made-up figures, certificates, client names, testimonials, dates,
  specs, emails or addresses.
- Unknown values use <Tbc label={t.tbc} /> ("To confirm") or a [bracketed placeholder].
- Use only facts from docs/PROJECT.md, the design files and the company profile PDF in
  public/docs/.

WHEN YOU FINISH A PAGE
1. Run: npm run lint, npx tsc --noEmit, npm run build. All must pass.
2. Check /en/<route> and /ar/<route> at desktop and at 375px wide; there must be no
   horizontal scroll.
3. Update that page's row in the status table in docs/PROJECT.md.
4. Commit on the branch with a clear message. Do not push to main and do not merge.
5. Reply with: the files you changed, anything you could not confirm, and any "To confirm" items
   you added.

TASK
Build the Manpower Supply service page at /[lang]/services/manpower-supply from
design/canvas/service-manpower.html, as a reusable template for the other 6 services.
````

## Build order after that

1. Service template (Manpower Supply), then the other 6 services
2. Equipment fleet: `design/canvas/equipment-fleet.html`
3. Projects listing and the 5 case studies: `projects.html`, `project-case-study.html`
4. About (mission, vision, leadership): `about.html`
5. HSE, Industries, Careers, Contact, Quote
6. News, Privacy and Terms (no design yet; follow the same style)
