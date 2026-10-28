## 2026-10-28 - [Missing Security Headers in Next.js]
**Vulnerability:** Static Next.js apps do not include security headers (e.g., CSP, X-Frame-Options) by default.
**Learning:** Security headers must be explicitly configured in Next.js using the `headers()` function in `next.config.ts`. Some directives like 'unsafe-inline' and 'unsafe-eval' might be required for animation libraries (e.g. GSAP, Framer Motion).
**Prevention:** Always verify custom `next.config.ts` configurations to ensure security headers are manually configured when building static Next.js applications.
