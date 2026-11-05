## YYYY-MM-DD - [Security Headers Added]
**Vulnerability:** Missing custom security headers (CSP, X-Frame-Options, X-Content-Type-Options, etc.) in Next.js static app.
**Learning:** By default, static Next.js apps do not include important security headers. Additionally, strict CSP directives like disallowing 'unsafe-inline' or 'unsafe-eval' can break animation libraries (GSAP, Framer Motion) which require them to function correctly.
**Prevention:** Always explicitly configure security headers in `next.config.ts` via the `headers()` function when deploying Next.js apps, while carefully tuning CSP directives to accommodate library requirements.
