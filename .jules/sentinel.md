## 2026-10-29 - [Missing Security Headers in Next.js]
**Vulnerability:** Missing security headers (CSP, X-Frame-Options, etc.) in Next.js static application.
**Learning:** Next.js static applications do not include standard security headers by default. Furthermore, when configuring Content-Security-Policy for apps using GSAP and Framer Motion, 'unsafe-inline' and 'unsafe-eval' must be permitted to prevent breaking animations.
**Prevention:** Always explicitly configure security headers using the `headers()` function in `next.config.ts` while testing interactions with animation libraries.
