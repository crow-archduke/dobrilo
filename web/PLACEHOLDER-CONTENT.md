# Placeholder content in the PHASE A prototype

This build is a local, `noindex`, unpublished PHASE A prototype (see `docs/spec-v1.1.md` §6.1,
§9.1). Spec §0 explicitly allows "labeled sample materials" here that "don't pretend to be
published content" — this file is the inventory of exactly which pieces of content that applies
to, so nothing below quietly ends up on the real public site without a deliberate decision.

**2026-10-19 update:** Jachym asked for all 13 places to exist on the map now, for structure,
even though most have no real content yet (deliberately overriding the strict Readiness Rule
*for this unpublished prototype only* — see his message of that date). Treat every place below
not already flagged as a Readiness gap: its own content file exists, but "existing" and "ready
for the public Readiness Rule" (spec §9.3) are different things. Re-apply the Readiness Rule in
full before PHASE B decides what's actually public.

## Real content (safe to keep into PHASE B)

- **Dobrilo** (`src/content/characters/dobrilo.json`) — identity and personality confirmed by
  Jachym (2026-10-09): the dog cut-out `grafika/Masked/IMG_0354.PNG`, chosen over the other dog
  cut-out (`IMG_0363.PNG`) for its scout-neckerchief styling and confident, direct-eye-contact
  pose — matching the brief ("older friend, scout-like, shows kids around, not a teacher"). The
  `intro`/`story` copy is written from that brief, not pre-existing text — treat it as a first
  draft, not final copy. `homePlace` is now `pristav` (moved 2026-10-19 now that the page exists —
  it was temporarily `mestecko-dobrilo` before, since spec §3.3 explicitly suggests Dobrilo lives
  near Přístav).
- **Omar El Karib** (`src/content/people/omar-el-karib.json`) — real person, real photo, real role
  ("Hlavní manažer ZŠ PRO DĚTI"), supplied by Jachym as the example lecturer. The `intro` sentence
  only restates the given role; no biographical detail was invented beyond it.
- **Audioknihovna's book list** (`src/pages/audioknihovna.astro`) — the 22 titles are the real
  filenames in `hotové audioknihy/`, grouped exactly as that folder is. No covers, authors, or
  playback yet — that's real S09/S10 work, not just a content-file fill-in.
- **island.avif, clouds, map.js/map.css/nav.js/media.js/windows.js** — map.js/map.css carry a few
  more documented additions now (always-visible pins + zoom-gated labels, the edge-safe camera
  clamp) but the pan/zoom engine itself is still the same dependency-free script.

## Prototype-only placeholders (must be resolved before PHASE B / before anything is public)

- **The other 9 places** (Lyžování, Enviro, V TÝMU, Hmyzárium, Labyrint, Amfiteátr, Kulturní dům,
  Obchod, Přístav) — each has a real content file and a real page (via the generic
  `src/pages/[slug].astro` template), but the description text in every one of them is structural
  placeholder copy ("přibude, jakmile bude hotové" / "will be added once it's ready"), not real
  editorial content. None has a real photo, video, or person attached except where noted below.
  **None of these should be public without real content — they exist now purely for the map's and
  the site's structure, per Jachym's 2026-10-19 request.**
- **`src/content/videos/flashtones.json`** (`placeholder: true`) — the real file Jachym supplied
  in `videa(předměty)/hudebka/Flashtones.mp4`, used as the Hudební výchova subject's video purely
  to prove the S05→S08 flow. The poster is a real extracted frame, not invented. Replace with
  real Hudební výchova footage before this subject goes live — or if "Flashtones" stays as
  genuine content, reconsider whether its real home is this subject or Kulturní dům (L11), which
  is the entity spec §3.1/§7 describes under that same name.
- **`src/content/people/ukazkovy-lektor.json`** (`placeholder: true`) — a wholly fictional S14
  fixture for the Plavání (S07) page, named `[Ukázkový lektor]` using the spec's own §0
  bracket-placeholder convention so it can never be mistaken for a real person. No photo (the
  schema's `photo` field is optional only for this reason — see the comment in
  `src/content.config.ts`); the template falls back to a plain initial avatar. Its `video` field
  re-uses the Flashtones placeholder video, which is fine *only* because the whole profile is
  already unambiguously marked as a sample — delete this entire file once a real swimming
  instructor exists, rather than editing it in place.

## Known scope gaps, deliberate for PHASE A

- Nav only links to Mapa ostrova + the Místa dropdown (all 13 places). Videa a poslech, Lidé,
  Postavy, Hledat, Pro rodiče (S18/S13/S15/S19/S20) come with PHASE B. The mobile hamburger menu
  (C02) was removed outright on 2026-10-19 — the one Místa dropdown now covers every width.
- S06 Série videí doesn't exist; a subject's videos are listed flat (spec explicitly defers S06
  to PHASE B alongside S10).
- No real per-page SEO contract (canonical URL, sharing preview, schema — spec §2.5) yet; every
  page is `noindex` on purpose. This is a prototype-mode default in `Base.astro`, not a template
  limitation — it needs to come out for PHASE B.
- **The OS-window system (windows.js) is a PHASE A UX experiment, not a spec requirement.**
  Clicking a map pin opens its page's content in a floating window instead of navigating; the
  page still renders completely on its own at its real URL (direct load, refresh, no JS — spec
  §2.5 still holds), windows are purely a progressive enhancement on S01. Whether this becomes the
  real PHASE B interaction model, or S01 reverts to plain navigation, is a product decision for
  the PHASE A review — flag it explicitly when that review happens, since it's a bigger behavioural
  departure from the spec's click-map tables (§4.2) than anything else in this prototype.
