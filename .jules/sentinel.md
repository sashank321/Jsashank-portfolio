## 2024-10-24 - Missing Security Headers in Next.js
**Vulnerability:** The Next.js application is missing basic security headers like Content-Security-Policy, X-Frame-Options, X-Content-Type-Options, etc., exposing it to clickjacking, XSS, and MIME-type sniffing.
**Learning:** Next.js doesn't apply these headers by default. It must be explicitly configured in `next.config.ts` using the `headers()` function. Also, adding CSP in an app with GSAP/Framer Motion requires allowing `unsafe-inline` and `unsafe-eval` to prevent breaking animations.
**Prevention:** Always configure standard security headers in the Next.js config for new projects, taking into account animation library requirements.
