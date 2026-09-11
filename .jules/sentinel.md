## 2023-10-24 - [Security Enhancement: Added HTTP Security Headers]
**Vulnerability:** The application was missing basic HTTP security headers, leaving it vulnerable to clickjacking, mime-sniffing, and cross-site scripting (XSS) attacks.
**Learning:** Next.js allows easy configuration of HTTP headers in `next.config.ts`. However, when implementing Content-Security-Policy (CSP) in an app utilizing heavy animations (GSAP, Framer Motion), `unsafe-inline` and `unsafe-eval` must be permitted to prevent breaking core functionality.
**Prevention:** Always configure `next.config.ts` with basic security headers upon project initialization. For apps using dynamic animation libraries, tailor the CSP to balance security and functionality.
