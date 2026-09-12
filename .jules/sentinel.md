## 2024-05-24 - [Add Security Headers in Next.js config]
**Vulnerability:** The application was missing critical security headers like CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, and HSTS, which left it exposed to XSS, clickjacking, and MIME-sniffing attacks.
**Learning:** Setting up CSP with complex frontend animations (GSAP/Framer Motion) required careful configuration, allowing `'unsafe-inline'` for scripts and styles, and `'unsafe-eval'` for scripts. Next.js offers a direct API to inject these via `next.config.ts`.
**Prevention:** Integrate default security headers directly into base templates and boilerplate applications to ensure protection right from the start.
