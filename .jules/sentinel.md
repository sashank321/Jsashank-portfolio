## 2024-09-06 - [Next.js Security Headers Missing]
**Vulnerability:** The application was missing critical HTTP security headers (CSP, X-Frame-Options, X-Content-Type-Options, HSTS) in the Next.js configuration.
**Learning:** In Next.js, security headers are not provided by default. They must be explicitly configured in `next.config.ts` using the `headers` async function. Also, the Content-Security-Policy (CSP) must be carefully crafted to allow `'unsafe-inline'` and `'unsafe-eval'` to not break GSAP and Framer Motion animations.
**Prevention:** Always ensure standard security headers are added to Next.js applications during initial setup to protect against XSS, clickjacking, and other common attacks.
