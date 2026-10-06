## 2024-10-06 - Missing Security Headers in Next.js
**Vulnerability:** The Next.js application is missing critical security headers (CSP, X-Frame-Options, X-Content-Type-Options, etc.).
**Learning:** Next.js does not include custom security headers by default in static Next.js apps; they must be explicitly configured via the `headers()` function in `next.config.ts`. Additionally, 'unsafe-inline' and 'unsafe-eval' might be required for animation libraries like GSAP and Framer Motion.
**Prevention:** Always verify and manually configure security headers when setting up a new Next.js project.
