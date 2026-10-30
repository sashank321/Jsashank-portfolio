## 2026-10-30 - [Missing Security Headers in Next.js]
**Vulnerability:** The application was lacking standard security headers like CSP, X-Frame-Options, etc., because Next.js does not configure them by default.
**Learning:** Next.js static apps require explicit configuration in next.config.ts using the headers() function to enforce security headers. CSP must allow 'unsafe-eval' and 'unsafe-inline' if GSAP and Framer Motion are used.
**Prevention:** Always define custom security headers in next.config.ts for new Next.js projects to establish a strong baseline defense.
