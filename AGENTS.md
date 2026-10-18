<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Skill Bridge website

Before changing anything, read:

- [docs/PROJECT.md](docs/PROJECT.md): company facts, sitemap and build status, code map, the "To confirm" list.
- [docs/DESIGN.md](docs/DESIGN.md): tokens, type, components, motion, RTL and content rules.
- [design/canvas/README.md](design/canvas/README.md): the approved design for every page still to build.

Rules that matter most:

- Never invent facts, figures, certificates or testimonials. Use the `Tbc` badge or a bracketed placeholder.
- All copy goes in `src/content` with both `en` and `ar`. Arabic brand name: سكيل بريدج.
- Reuse the classes in `src/styles/site.css`. Do not add new colours or shadows.
- Keep motion in CSS and respect `prefers-reduced-motion`.
- When a page is finished, update its row in the status table in `docs/PROJECT.md`.
