// Content model for dobrilo.cz, matching docs/spec-v1.1.md §2.4 (Obsahové objekty a jejich
// vztahy) and the per-template "Obsah v pořadí" fields in §6. Each collection's schema enforces
// the spec's "Povinné údaje pro publikaci" (required fields for publication) — an entry that is
// missing a required field fails the Astro build instead of shipping incomplete (§9.3 READINESS
// RULE). Optional fields are the spec's "volitelné" extras (medailonek, délka, doporučené
// publikum, …) and are simply omitted from the template when absent (§6.2 E06).
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const places = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/places' }),
  schema: z.object({
    placeId: z.string(),        // L01–L13 (spec §3.1)
    name: z.string(),
    subtitle: z.string(),       // "funkční podtitulek" — never just the bare name (spec §1)
    description: z.string(),
    href: z.string(),
    x: z.number(),              // pixel position in island.avif (3481×3790)
    y: z.number(),
    minZoom: z.number().default(0),
  }),
});

const characters = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/characters' }),
  schema: z.object({
    name: z.string(),
    image: z.string(),          // full-size illustration (S16 hero)
    pinImage: z.string().optional(), // small map-pin crop; falls back to `image`
    intro: z.string(),          // "krátký popis"
    story: z.string().optional(),
    homePlace: z.string(),      // place slug for "Kde mě potkáš" (spec §6, S16)
    mapPosition: z.object({ x: z.number(), y: z.number() }).optional(), // spec §3.2: characters get their own position, independent of their place pin
    // K13 default is "on the map"; Dobrilo opted out 2026-10-19 (Jachym: reachable via the
    // corner helper icon instead) — the mechanism stays for future characters.
    showOnMap: z.boolean().default(true),
    video: z.string().optional(), // medailonek — video slug
  }),
});

const people = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/people' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    // Required for real publication (spec §2.4: "fotografie nebo schválený zástupný portrét"),
    // but left optional here so a clearly-marked placeholder fixture (see PLACEHOLDER-CONTENT.md)
    // can exist without one — the template falls back to an initial instead of inventing a photo.
    photo: z.string().optional(),
    intro: z.string(),          // "krátké představení"
    expertise: z.string().optional(),
    homePlaces: z.array(z.string()), // "Kde mě potkáš" — place slugs
    video: z.string().optional(),    // medailonek — video slug
    placeholder: z.boolean().default(false), // see PLACEHOLDER-CONTENT.md
  }),
});

const subjects = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/subjects' }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    videos: z.array(z.string()), // ordered video slugs; first = "Otevřít první video"
    people: z.array(z.string()).default([]), // relevant lecturer slugs
  }),
});

const videos = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/videos' }),
  schema: z.object({
    title: z.string(),
    poster: z.string(),
    src: z.string(),
    description: z.string(),
    homePlace: z.string(),       // place slug (world continuity — spec §0.1)
    subject: z.string().optional(),
    performers: z.array(z.string()).default([]), // person/character slugs
    duration: z.string().optional(),
    audience: z.string().optional(), // "doporučené publikum"
    placeholder: z.boolean().default(false),
  }),
});

export const collections = { places, characters, people, subjects, videos };
