## 2026-10-25 - [Missing Security Headers in Next.js]
**Vulnerability:** Next.js applications do not include custom security headers (CSP, X-Frame-Options, etc.) by default, leaving the application vulnerable to XSS, clickjacking, and MIME-sniffing.
**Learning:** GSAP and Framer Motion animations require specific CSP directives (`'unsafe-inline'` for styles/scripts and `'unsafe-eval'` for scripts) to function correctly. Without these, the application's UI animations will break.
**Prevention:** Always explicitly configure `headers()` in `next.config.ts` for Next.js apps, carefully balancing security with the requirements of animation libraries.
