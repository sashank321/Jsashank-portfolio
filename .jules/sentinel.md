## 2024-03-24 - Added Content Security Policy & Security Headers
**Vulnerability:** The Next.js application lacked standard security headers (CSP, X-Frame-Options, X-Content-Type-Options, etc.), leaving it potentially exposed to XSS, clickjacking, and MIME-type sniffing.
**Learning:** When configuring Content-Security-Policy (CSP) headers in this Next.js app, 'unsafe-inline' for scripts and styles and 'unsafe-eval' for scripts must be allowed to prevent breaking the application's GSAP and Framer Motion animations.
**Prevention:** Always test CSP headers locally and verify that frontend animations are not broken before deploying.
