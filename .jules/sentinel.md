## YYYY-MM-DD - Missing Default Security Headers in Next.js

**Vulnerability:** The Next.js application lacked standard security headers (CSP, X-Frame-Options, X-Content-Type-Options, etc.).
**Learning:** Static Next.js applications do not include these security headers by default. Furthermore, configuring CSP requires allowing `unsafe-inline` and `unsafe-eval` to prevent breaking GSAP and Framer Motion animations.
**Prevention:** Always explicitly configure custom security headers via the `headers()` function in `next.config.ts` for Next.js applications.