## 2026-10-20 - Missing Security Headers in Next.js Static App
**Vulnerability:** Missing default security headers (CSP, X-Frame-Options, etc.) in Next.js application, leaving it vulnerable to XSS, Clickjacking, and MIME-type sniffing.
**Learning:** Next.js static apps do not include robust security headers by default. They must be explicitly configured via the `headers()` function in `next.config.ts`. Strict CSP rules require explicit allowances for required scripts and styles (e.g., GSAP/Framer Motion require `unsafe-inline`/`unsafe-eval`).
**Prevention:** Always verify and implement strict security headers early in the setup of Next.js projects to establish a secure baseline before adding custom animations.
