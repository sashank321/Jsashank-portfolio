## 2026-11-01 - Missing Security Headers in Next.js
**Vulnerability:** The application was missing essential security headers (CSP, HSTS, X-Frame-Options, etc.), exposing it to XSS, clickjacking, and other injection attacks. Next.js does not apply these by default.
**Learning:** In Next.js apps, security headers must be explicitly configured via the `headers()` function in `next.config.ts`. Additionally, CSP configurations need to balance security with UI framework requirements (e.g., GSAP/Framer Motion requiring `unsafe-inline` and `unsafe-eval`).
**Prevention:** Always include a baseline set of security headers in `next.config.ts` for Next.js applications and verify them during setup.
