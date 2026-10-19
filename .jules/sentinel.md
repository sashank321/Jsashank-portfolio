## 2026-10-19 - [Security Headers]
**Vulnerability:** Missing custom security headers in next.config.ts
**Learning:** Next.js static apps don't include security headers (CSP, X-Frame-Options, etc) by default.
**Prevention:** Explicitly configure headers via `headers()` function in `next.config.ts`.
