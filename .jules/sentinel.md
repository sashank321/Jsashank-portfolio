## 2026-11-03 - Missing Security Headers in Next.js Static App
**Vulnerability:** Missing default security headers (CSP, X-Frame-Options, HSTS) which leaves the application exposed to XSS, clickjacking, and MIME sniffing attacks.
**Learning:** Next.js does not apply security headers by default to static apps. Also, when configuring CSP, Next.js apps using animation libraries like GSAP and Framer Motion require 'unsafe-inline' and 'unsafe-eval' for scripts/styles, and img-src needs data: and blob: to not break visual elements.
**Prevention:** Always explicitly configure security headers via the headers() function in next.config.ts.
