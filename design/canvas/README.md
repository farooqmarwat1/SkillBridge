# Approved page designs (reference only)

These are the client-approved page designs exported from the design canvas. They are the
spec for every page that still has to be built in Next.js. They are not part of the site and
do not run on their own.

| File | Page | Route to build |
| --- | --- | --- |
| `home.html`, `home-ar.html` | Home (EN, AR) | `/[lang]` (already built) |
| `service-manpower.html` | Service page template, shown on Manpower Supply | `/[lang]/services/[slug]` |
| `equipment-fleet.html` | Equipment fleet catalogue (29 items, filters, quote list) | `/[lang]/equipment` |
| `projects.html` | Projects listing | `/[lang]/projects` |
| `project-case-study.html` | Case study template with data for all 5 projects | `/[lang]/projects/[slug]` |
| `about.html` | About, mission, vision, leadership | `/[lang]/about` |
| `hse.html` | HSE & quality | `/[lang]/hse` |
| `industries.html` | Industries | `/[lang]/industries` |
| `careers.html` | Careers | `/[lang]/careers` |
| `contact.html` | Contact | `/[lang]/contact` |
| `quote.html` | Request a quote wizard | `/[lang]/quote` |
| `ar-map.json` | English to Arabic copy pairs used for the Arabic Home | |

## How to read a file

- **Markup** sits inside `<x-dc>`. Class names are the same as in `src/styles/site.css`, so the CSS is already done.
- `{{ name }}` is a value binding. `<sc-if value="{{ x }}">` shows its content when `x` is true. `<sc-for list="{{ items }}" as="i">` repeats its content for each item.
- **Data and behaviour** live in the `<script type="text/x-dc">` block at the end (a `Component` class with `state` and `renderVals()`). Lists such as the 39 roles, the 29 fleet items and the 5 project case studies are defined there.
- `part` props and `sc-if` groups named `showA`, `showB` and so on only split long pages into canvas frames. Ignore them.
- Image paths point at the real files in this repo (`../../src/assets/images/...`, `../../public/video/...`). In code, use the imports in `src/lib/media.ts`.

## How to port a page

1. Markup goes into server components under `src/components/<page>/`, with the same class names.
2. All text goes into `src/content/<page>.ts` with matching `en` and `ar` objects (see `src/content/home.ts`).
3. Only interactive pieces (tabs, filters, galleries, forms) become small `"use client"` components.
4. The Arabic brand name is **سكيل بريدج**. Some older strings in `ar-map.json` spell it سكل; always use سكيل.
