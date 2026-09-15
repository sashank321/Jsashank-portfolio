## 2024-10-24 - [Add Security Headers to Next.js App]
**Vulnerability:** Missing fundamental security headers (CSP, HSTS, X-Frame-Options, etc.), exposing the static portfolio to clickjacking, XSS, and MIME-sniffing risks.
**Learning:** Even static/portfolio applications with simple architectures benefit from defense-in-depth headers. A unique constraint was allowing 'unsafe-inline' and 'unsafe-eval' in the CSP to prevent breaking GSAP and Framer Motion animation engines, which rely on inline styling and dynamic evaluation.
**Prevention:** Next.js projects should define an asynchronous `headers` block in `next.config.ts` from inception to enforce default secure behavior.
