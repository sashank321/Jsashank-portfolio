## 2024-05-20 - [Security Headers for Next.js with Animations]
**Vulnerability:** Missing Content-Security-Policy (CSP) and other security headers.
**Learning:** When configuring Content-Security-Policy (CSP) headers in next.config.ts, 'unsafe-inline' for scripts and styles and 'unsafe-eval' for scripts must be allowed to prevent breaking the application's GSAP and Framer Motion animations.
**Prevention:** Always verify if the application relies on animation libraries like GSAP or Framer Motion before enforcing strict CSP rules, and document the necessity of 'unsafe-eval' and 'unsafe-inline' if they are required.
