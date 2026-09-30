## 2026-07-30 - Add Next.js Security Headers
**Vulnerability:** Missing security headers (CSP, X-Frame-Options, X-Content-Type-Options, etc.), increasing risk of XSS, Clickjacking, and MIME-sniffing.
**Learning:** Adding CSP in this Next.js app requires allowing 'unsafe-inline' and 'unsafe-eval' for scripts and styles to support animation libraries (GSAP, Framer Motion) which are heavily used in the project. Restricting these breaks animations.
**Prevention:** Always verify interaction between strict CSP rules and third-party UI libraries like GSAP and Framer Motion. Ensure headers are configured globally in Next.js config via `headers()`.
