## YYYY-MM-DD - Missing Security Headers in Next.js
**Vulnerability:** Next.js static applications do not include security headers (like CSP, X-Frame-Options, HSTS) by default.
**Learning:** Security headers must be explicitly configured in `next.config.ts` via the `headers()` function, while accounting for inline scripts/styles needed by GSAP and Framer Motion.
**Prevention:** Always verify and manually configure security headers when initializing a new Next.js project.