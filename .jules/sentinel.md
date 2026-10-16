
## 2026-10-16 - Missing Default Security Headers in Next.js
**Vulnerability:** The Next.js application lacked basic security headers (CSP, X-Frame-Options, etc.).
**Learning:** Next.js static apps do not include security headers by default and require explicit configuration via `headers()`. Animation libraries like GSAP/Framer Motion require specific CSP allowances.
**Prevention:** Always explicitly define security headers in `next.config.ts` for Next.js applications.
