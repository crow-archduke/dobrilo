# Dobrilo — web/

This is the dobrilo.cz site: an [Astro](https://astro.build) project with content collections,
built per `docs/spec-v1.1.md`. **PHASE A** is live here — the 8 templates (S01, S03, S04, S05,
S07-shaped locations, S14, S16, S08) wired into the connected journeys spec §9.1–9.2 requires —
plus, as of the 2026-10-19 redesign, all 13 places exist on the map for structure (see
`PLACEHOLDER-CONTENT.md` for exactly which content is real vs. a labeled prototype stand-in, and
why most of those 9 new places override the Readiness Rule for now).

```
astro.config.mjs, tsconfig.json, package.json
public/              served as-is, unbundled
  map.js, map.css      the S01 pan/zoom engine — dependency-free; map.css holds only map-canvas
                        rules (tokens/buttons/nav/glass live in src/styles/global.css)
  nav.js                C01 Místa dropdown (vanilla, same style as map.js)
  media.js               global "only one media item plays at once" rule (spec C05–C07)
  windows.js              S01-only: the OS-window click-interceptor (see "OS windows" below)
  img/, media/            img/ is committed; media/ (large video) is gitignored — see below
src/
  content.config.ts     content model + Zod schemas — see "Content model" below
  content/              one JSON file per place/person/character/subject/video
  layouts/Base.astro    html shell, nav, footer, global.css, noindex, the `shell` mode (below)
  components/           Card, VideoPlayer, NavBar — no scoped <style> blocks anywhere (see why
                        under "OS windows"); all component/page CSS lives in global.css instead
  pages/                 one file per template; file path = canonical URL (spec §2.3).
                        src/pages/[slug].astro is a generic template covering every simple,
                        single-segment place (Plavání, Lyžování, Enviro, …) — see "Places" below
```

Run it with:
```
npm --prefix web install   # first time only
npm --prefix web run dev   # http://localhost:8000
```
Or use `.claude/launch.json`'s `dobrilo-web` config if you're driving this through Claude Code's
browser preview.

## Content model

Every place/person/character/subject/video is one JSON file in `src/content/<collection>/`,
validated against the schema in `src/content.config.ts`. The schema enforces spec §2.4's
"Povinné údaje pro publikaci" (required fields) — a content file missing a required field fails
the build instead of shipping incomplete. To add a new entry, copy a sibling file and fill in the
fields; to retire one, delete the file (nothing else needs to change — pages read collections
dynamically, there's no separate registry to update).

`placeholder: true` on a `people`/`videos` entry flags prototype-only content that must not reach
a real public build unreviewed — see `PLACEHOLDER-CONTENT.md` for the current list and what
replaces each one.

## Places (L01–L13) and the map

- Each place is `src/content/places/<slug>.json` (`placeId`, `name`, `subtitle`, `description`,
  `href`, `x`, `y`, `minZoom`). `x`/`y` are pixels in `island.avif` (3481×3790) — open `/?edit`
  and click the map to get coordinates.
- `src/pages/index.astro` renders every place (plus `characters`) server-side into the exact
  `<ol id="places"><li data-id data-x data-y data-min-zoom>` shape `map.js` has always expected,
  so the pan/zoom engine itself needed no changes for places.
- All 13 places now have a content file and a real page. `mestecko-dobrilo`, `skola` and
  `audioknihovna` have bespoke pages (richer structure, or — for Audioknihovna — a real book
  list); every other place (`plavani`, `lyzovani`, `enviro`, `v-tymu`, `hmyzarium`, `labyrint`,
  `amfiteatr`, `kulturni-dum`, `obchod`, `pristav`) is served by the generic
  `src/pages/[slug].astro` template, which shows the place's own copy plus any person/character
  whose `homePlaces`/`homePlace` names it. Most of these 9 have no real content yet — see
  `PLACEHOLDER-CONTENT.md` for why they exist anyway and what that means for the Readiness Rule.
- `minZoom >= 2` is still the "merges near Městečko until you zoom in" group (ZŠ, Audioknihovna,
  Kulturní dům, Obchod); `src/pages/mestecko-dobrilo.astro` lists that group dynamically.

### Characters on the map (K13)

`src/content/characters/*.json` adds a `mapPosition` and a `pinImage`; `index.astro` renders these
as extra `<li>`s with `data-type="character"` and `data-image`. `map.js` sets `data-type` on the
pin element (so CSS can style it) and `pin.style.backgroundImage` from `p.image` (so the pin shows
the character's actual portrait, not a plain dot — see `.place[data-type="character"]` in
`map.css`). Dobrilo is the first one, `homePlace: "pristav"`, positioned near but not on top of
Přístav's own pin.

`?misto=` and `?postava=` (spec §2.3) both highlight-and-zoom on the map; `K20 Ukázat na mapě` and
`K17 Celý ostrov` both handle whichever of the two is present.

### Map behaviour (2026-10-19 redesign)

- **Every pin is always visible, even fully zoomed out** (`map.js`'s render loop no longer hides
  pins by zoom); only a pin's **text label** waits for `zoom >= minZoom` before it renders
  (`.place.is-far` in `map.css` hides just the label, not the pin — it still shows on
  hover/focus). This is deliberate: 13 always-visible dots, but labels only pile up once you've
  zoomed into that area, so they don't bury the floating UI.
- **Camera bounds are edge-aware, not just a fixed centre clamp.** `constrain()` in `map.js` now
  accounts for the current zoom level — it keeps the whole visible viewport (not just its centre
  point) inside a `SAFE` rectangle calibrated from the painted content's actual bounds
  (`magick island.avif -format "%@" info:` → `2450x2881+1031+0`). The mainland fragment in the
  upper-right has a deliberate straight "torn map" edge on its north/west side (meant to read as
  "the edge of a bigger world" — see Jachym's 2026-10-19 note); panning past it would instead
  reveal blank transparent canvas, which breaks that illusion, so `SAFE` is tight there. South/east
  are open sea and already fade into the page's sea-coloured background, so `SAFE` is generous
  there.
- **S01 is a fixed full-viewport "desktop" now, not a scrolling document.** `Base.astro`'s `shell`
  prop (only `true` on `index.astro`) switches `<body>` into `.is-desktop-shell`: no footer, the
  map (`.island` in `map.css`) is `position: fixed; inset: 0`, the topbar is glass and floats over
  it, and the old "Vítejte…" welcome section is gone — replaced by the Dobrilo corner helper (see
  below). Every other page is still a normal scrolling document with the usual topbar+main+footer.

## OS windows (2026-10-19 redesign, S01 only)

Clicking an internal content link while on the map — a pin, a Místa dropdown item, a card inside
an already-open window — opens that URL's content in a floating, draggable, closable window
(`public/windows.js`) instead of navigating away. Multiple windows stack (z-index bumps on
focus); links to `/` (the map itself) still do a real navigation, since that's "going home". This
is a **progressive enhancement layered on real pages**, not a replacement for them: every page
still renders completely on direct load/refresh (spec §2.5 still holds) — `windows.js` just
`fetch()`es that same URL and injects its `<main>` into a window shell.

Two consequences this creates for how pages are written:
1. **No component ever has a scoped `<style>` block.** Astro's scoped styles live in the fetched
   page's `<head>`, which `windows.js` never sees (it only takes `<main>`) — so a scoped style
   would silently vanish inside a window. Every style that used to be scoped now lives in
   `src/styles/global.css` instead (see the `{/* ... */}` comments where a `<style>` block used to
   be, in `Card.astro`, `VideoPlayer.astro`, and most page files).
2. A link that shouldn't be fetched-and-injected (a file download, anything non-HTML) needs
   `data-no-window` — see the "Stáhnout video" link in `VideoPlayer.astro`.

Whether this windowed interaction becomes the real PHASE B model, or S01 reverts to plain
navigation after review, is an open product decision — see the note in `PLACEHOLDER-CONTENT.md`.

## The Dobrilo corner helper and the glass look

`Base.astro` renders a fixed bottom-left circular Dobrilo icon (shell mode only) with a
hover/focus speech bubble carrying the short "how the map works" instructions that used to be the
S01 welcome box. `.glass` in `global.css` is the one shared "liquid glass" recipe (translucent +
`backdrop-filter: blur()` + a soft inner highlight) applied to the topbar, the map's floating
control pill, window titlebars, the speech bubble, and the fullscreen toggle (bottom-right,
`document.documentElement.requestFullscreen()`) — chrome floats over the hand-painted map; content
inside cards/windows stays on the solid paper background for legibility.

## Still open

- S06 Série videí and S10 Audioknihovna detail (real chapter playback) are PHASE B by spec.
- No real SEO contract per page yet (`<meta name="robots" content="noindex">` is hardcoded in
  `Base.astro` for the whole prototype) — comes with PHASE B's production build.
- The real dobrilo.cz logo still doesn't exist (nav shows text branding).
