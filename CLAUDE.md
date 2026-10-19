# dobrilo.cz — Ostrov Socci

This folder is the root of the dobrilo.cz project. It is a free public website for children of younger school age, with a direct path for parents. Visitors arrive on **Ostrov Socci**, a hand-painted island. They explore its 13 places, meet real people (lecturers) and fictional characters, and play videos and audiobooks for free.

## Source of truth
- **`docs/spec-v1.1.md`** is the master UX specification v1.1 (2 Oct 2026), in Czech. It is a Markdown copy of `DOBRILO_MASTER_UX_SPECIFICATION_v1_1(1).docx`. Read the relevant chapter before building any screen or behaviour. If the docx is updated, regenerate the Markdown copy (`pandoc <docx> -t gfm --wrap=none -o docs/spec-v1.1.md`).
- The spec uses stable IDs. Use them in code comments, commits and talk:
  - S01–S22: page templates
  - C01–C07: shared components
  - K01–K72: interactions
  - F01–F12: user flows
  - L01–L13: places
  - E01–E06: error and empty states
- The spec marks each rule as **P** (confirmed by the client), **N** (proposed design decision, open to discussion) or **L** (later phase). Never treat an N rule as untouchable, and never quietly change a P rule.

## Folder layout
```
DOBRILO_MASTER_UX_SPECIFICATION_v1_1(1).docx   master spec (original)
docs/spec-v1.1.md                               same spec as Markdown — read this one
web/                                            the website — Astro project (see web/README.md)
  preview-single-file.html                      STALE: pre-Astro bundle, kept only as a historical
                                                 reference until someone confirms it can go
grafika/
  Masked/    44 transparent PNG character cut-outs (unnamed IMG_03xx; ~119 MB); IMG_9485.jpg not cut out yet
  heic/      49 phone photos of the watercolour originals
  socci/     3 Runway Gen-3 loops of the island (5 s, 1280×768)
  LOGO/      ZŠ PRO DĚTI logo only (no main dobrilo.cz logo yet)
hotové audioknihy/                              finished audiobooks = real content for L07 Audioknihovna
  1. stupeň/česky, 1. stupeň/anglicky, 2. stupeň   MP3 files (multi-GB, one WAV is 1.5 GB)
  anotace_audioknih.pdf                          annotations for the audiobooks
  pdf/ (+ txt_nove/cleaned/)                     source texts of the books
moodboard/                                      2 vintage/pirate map references
Claude outputs/                                 earlier deliverables from Claude sessions
lektoři/                                        source material for Lidé (S14) — e.g. lektoři_bios.md + profile pics/
videa(předměty)/                                source videos for school subjects (S05/S08), one subfolder per subject slug
```
**Never modify or move** anything in `grafika/`, `hotové audioknihy/` or `moodboard/`. They are originals. Write derived assets (resized, converted, renamed) into `web/` or a new folder. `lektoři/` and `videa(předměty)/` are source/staging material the same way — copy what's needed into `web/src/content/` and `web/public/`, don't point code at these folders directly (they're gitignored, outside the Astro project, and never the right paths for runtime assets).

## Product rules that affect code
- **The map is the home screen (S01, `/`).** It is never the only way to reach content. Every published page must be reachable through ordinary `<a href>` links and must render its H1, description, links and metadata when a URL is opened directly (spec 2.5). This means static or server-rendered HTML per URL, not a client-only SPA.
- **Canonical URLs** come from spec 2.3. Examples: `/pristav`, `/mestecko-dobrilo`, `/skola`, `/skola/predmet/[slug]`, `/serie/[slug]`, `/videa/[slug]`, `/audioknihovna`, `/audioknihy/[slug]`, `/audio/[slug]`, `/lide`, `/lide/[slug]`, `/postavy`, `/postavy/[slug]`, `/obchod`, `/obsah`, `/hledat?q=`, `/pro-rodice`, `/informace/provozovatel`, `/informace/soukromi`. Map URL states are `/?zobrazeni=seznam`, `/?misto=[ID]` and `/?postava=[slug]`.
- **READINESS RULE (spec 9.3):** a place is public only if it has at least one real, finished, meaningful content item. A place that isn't ready gets no link anywhere: not on the map, in the list, menu, search or XML sitemap. It also gets no "Brzy otevřeme" (coming soon) teaser. Its direct URL shows S22. Never ship placeholder content or invented materials publicly.
- **No autoplay, ever.** Media starts only when the user presses Pustit (play). Only one media item plays at a time across the whole site (C05/C06/C07). Audiobook chapters continue on their own, but a different title never starts by itself.
- **SEO contract per indexable page:** one unique H1, a real text description, an SEO title, a meta description, a sharing preview (title, description, image, canonical URL) and related internal links. The XML sitemap lists only published canonical URLs.
- **Out of scope for the MVP (spec 8):** accounts, login, payments, bookings, live lessons and an in-site e-shop. Obchod links out to an external e-shop, and its URL isn't known yet. Don't add UI hooks, placeholders or empty slots for these.
- **Language:** all UI copy is Czech. Code, comments and commit messages are in English.
- **Accessibility (spec 6.4):** visible focus, keyboard operation, an active state that isn't shown by colour alone, `prefers-reduced-motion`, and Back restoring the previous view and scroll position.

## The map (web/public/map.js + map.css, C03, spec 3.1–3.3, K11–K20)
- The painting is `web/public/img/island.avif` (3481×3790 px, transparent background). Place coordinates are pixels in this image.
- Places and characters are content-collection data now (`web/src/content/places/*.json`,
  `web/src/content/characters/*.json`), not hand-written HTML — but `src/pages/index.astro`
  renders them server-side into the exact `<ol id="places"><li data-id data-x data-y>` shape
  `map.js` has always read, so the pan/zoom engine itself stays framework-free. Open `/?edit` and
  click the map to get coordinates. See `web/README.md` for the full content model.
- Behaviour already built:
  - The mouse wheel scrolls the page. Zoom uses the +/−/Celý ostrov buttons, or a pinch.
  - All 13 places exist and are always visible as pins, even fully zoomed out; a pin's label only
    appears once zoomed into its area (spec §3.2's "merge into Městečko" idea lives on as the
    `minZoom >= 2` group, which still clusters near Městečko until zoomed in).
  - `?misto=` and `?postava=` both highlight a place or character.
  - Back restores zoom and position.
  - If the illustration fails to load, the page falls back to the list.
  - Labels that would collide are hidden.
  - K13 characters on the map — done for Dobrilo.
  - Camera bounds are zoom-aware and edge-safe — panning/zooming out can never reveal blank
    canvas past the painted mainland's "torn map" edge (north/west); south/east (open sea) stay
    generous. See web/README.md's "Map behaviour" section.
- **2026-10-19 redesign (Jachym):** S01 is now a fixed full-viewport "OS desktop", not a
  scrolling document — glass (translucent, blurred) floating chrome throughout, the old welcome
  box replaced by a corner Dobrilo helper icon with a hover speech bubble, the mobile hamburger
  menu removed, and clicking a map pin opens a floating/draggable/stackable window
  (`public/windows.js`) instead of navigating, while the same URL still renders as a complete
  normal page on direct load. Full detail in web/README.md — "Map behaviour", "OS windows", and
  "The Dobrilo corner helper and the glass look".
- Still open on the map:
  - The real C01 header and logo (nav is built but still placeholder-branded — no main dobrilo.cz
    logo exists yet).
  - Final place positions. The current ones are a first proposal.
  - Whether the OS-window interaction model survives PHASE A review or S01 reverts to plain
    navigation is still an open product decision — see web/PLACEHOLDER-CONTENT.md.
- Run it with `npm --prefix web run dev` (http://localhost:8000) — see web/README.md.

## Status (19 Oct 2026)
- Design runs in two phases. **PHASE A** is a prototype of 8 templates: S01, S03, S04, S05, S07 Plavání, S14, S16 and S08, each for desktop and mobile. **PHASE B** is the full set and starts only after PHASE A is approved.
- **Tech stack: Astro** (static output), approved and scaffolded in `web/`. Content lives in
  JSON content collections with Zod schemas enforcing spec 2.4's required fields at build time.
  See `web/README.md` for the structure and `web/PLACEHOLDER-CONTENT.md` for what's real vs.
  prototype-only. The PHASE A build itself (all 8 templates, connected per spec 9.1's required
  journeys) is done and running locally, `noindex`, not deployed anywhere public yet — still
  awaiting the PHASE A approval checkpoint (spec 9.2) before PHASE B starts.
- Content that exists: the audiobooks (MP3 files and annotations, real content for L07 but not
  templated into PHASE A — S09/S10 are PHASE B by spec), the island painting, the character
  cut-outs, **Dobrilo's identity** (the dog cut-out, confirmed 9 Oct 2026 — see
  `web/PLACEHOLDER-CONTENT.md`), and **one real lecturer** (Omar El Karib, photo + role, in
  `lektoři/`).
- Content that's still missing:
  - The main logo (nav currently shows placeholder text branding)
  - More people and their photos (only one lecturer so far)
  - Real videos (the one video in the PHASE A build, in `videa(předměty)/hudebka/`, is explicitly
    a placeholder per Jachym — see `web/PLACEHOLDER-CONTENT.md`)
  - Most texts (only the S01 welcome line is final: "Vítejte na ostrově Socci!")
  - The e-shop URL
  - Contact and legal texts
- Media hosting is still open for a real deploy. Nothing large is committed to git — the one
  placeholder video lives in `web/public/media/`, which is gitignored; audiobooks stay in
  `hotové audioknihy/`, also gitignored. Both still need external hosting/a CDN before PHASE B.

## Working conventions
- Before larger changes, say which spec IDs the change covers.
- Keep `web/README.md` up to date when map behaviour or the places format changes.
- Test at a phone width (390 px) and a desktop width (1440 px).
