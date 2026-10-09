## 2026-10-09 - Missing Custom Security Headers in Next.js Static Apps
**Vulnerability:** Next.js static applications lack default custom security headers (CSP, X-Frame-Options, etc.), exposing the application to XSS and clickjacking vulnerabilities.
**Learning:** Adding strict CSP headers can break UI animations that rely on GSAP or Framer Motion; we must allow 'unsafe-inline' and 'unsafe-eval' for scripts/styles, and configure img-src specifically.
**Prevention:** Always implement explicit security headers in next.config.ts for Next.js static apps while accounting for necessary library permissions.
