## 2026-10-23 - Missing Security Headers in Next.js Static Apps
**Vulnerability:** Next.js static applications lack default security headers (CSP, X-Frame-Options, etc.), exposing the app to XSS, clickjacking, and other injection attacks.
**Learning:** In Next.js, standard security headers are not automatically applied to all routes in static apps unless explicitly configured via the `headers()` function in `next.config.ts`. When configuring CSP for apps using animation libraries like GSAP or Framer Motion, specific directives (like `unsafe-inline` and `unsafe-eval`) are required so animations don't break.
**Prevention:** Always explicitly define essential security headers via the `headers()` array in `next.config.ts` from the start of a Next.js project.
