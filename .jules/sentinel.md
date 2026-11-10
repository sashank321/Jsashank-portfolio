## YYYY-MM-DD - [Missing Security Headers in Next.js]
**Vulnerability:** Next.js static apps do not include critical security headers like CSP, X-Frame-Options, or X-Content-Type-Options by default.
**Learning:** The application lacked defense-in-depth against XSS, clickjacking, and MIME-sniffing. Animation libraries (GSAP, Framer Motion) require 'unsafe-inline' and 'unsafe-eval' for styling and execution.
**Prevention:** Explicitly configure headers() in next.config.ts on app creation to set required security headers and CSP directives.
