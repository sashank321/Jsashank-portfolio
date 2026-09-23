## 2026-09-23 - Add Security Headers to Next.js Config
**Vulnerability:** The application was missing essential security headers (Content-Security-Policy, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, Strict-Transport-Security) in its `next.config.ts`.
**Learning:** In Next.js App Router static portfolio applications relying on complex animations (GSAP, Framer Motion), configuring CSP requires allowing `'unsafe-inline'` for scripts and styles, and `'unsafe-eval'` for scripts to not break the UI animations, balancing security and functionality.
**Prevention:** Always include a baseline set of security headers in `next.config.ts` during project setup, tailored to the specific functional requirements of the animation libraries being used.
