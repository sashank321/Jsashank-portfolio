## 2026-10-12 - Missing Security Headers
**Vulnerability:** Missing custom security headers (CSP, HSTS, X-Frame-Options, etc.) in Next.js static site.
**Learning:** Next.js static apps don't include default security headers automatically, making them vulnerable to basic attacks like XSS, clickjacking, and MIME-sniffing if not explicitly configured in `next.config.ts`.
**Prevention:** Always define custom security headers using the `headers()` function in `next.config.ts` for all Next.js applications.
