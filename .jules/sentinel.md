## 2026-10-07 - Missing Security Headers in Next.js apps
**Vulnerability:** Next.js applications do not include security headers (CSP, HSTS, X-Frame-Options, etc.) by default, leaving the application vulnerable to XSS and clickjacking.
**Learning:** When configuring Content-Security-Policy (CSP) headers in this project, 'unsafe-inline' for scripts and styles and 'unsafe-eval' for scripts must be allowed to prevent breaking the application's GSAP and Framer Motion animations.
**Prevention:** Always configure a comprehensive set of custom headers via the `headers()` function in `next.config.ts` for Next.js projects, tailoring the CSP to the specific needs of the animation libraries used.
