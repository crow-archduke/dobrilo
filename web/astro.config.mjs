// @ts-check
import { defineConfig } from 'astro/config';

// PHASE A: local prototype only. site/base and the sitemap integration
// are added in PHASE B once there's a real deploy target (see docs/spec-v1.1.md 2.5).
export default defineConfig({
  server: { port: 8000 },
});
