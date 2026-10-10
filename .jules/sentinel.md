## 2026-10-10 - Missing Security Headers in Next.js App
**Vulnerability:** Missing default HTTP security headers (CSP, X-Frame-Options, etc.) in a static Next.js application.
**Learning:** Next.js static applications do not automatically include security headers. They must be explicitly configured via the `headers()` function in `next.config.ts`. Additionally, CSP needs specific allowances (`unsafe-inline` and `unsafe-eval`) to prevent breaking UI animations provided by libraries like GSAP and Framer Motion.
**Prevention:** Always verify and manually configure `headers()` in `next.config.ts` during initial project setup, ensuring CSP is tailored to the animation libraries in use.
