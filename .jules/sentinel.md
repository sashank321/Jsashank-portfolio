## 2026-10-21 - [Missing Custom Security Headers in Next.js Static Apps]
**Vulnerability:** Missing security headers like CSP, X-Frame-Options, X-Content-Type-Options, etc., in static Next.js apps.
**Learning:** Next.js static apps do not include custom security headers by default. They must be explicitly configured via the `headers()` function in `next.config.ts`. Additionally, CSP must allow 'unsafe-inline' and 'unsafe-eval' for animations (GSAP, Framer Motion) to work, and 'img-src' needs 'data: blob:'.
**Prevention:** Always explicitly configure security headers in `next.config.ts` for Next.js applications, ensuring necessary CSP directives are tailored for the animation libraries used.
