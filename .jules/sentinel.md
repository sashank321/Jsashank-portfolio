## 2026-10-24 - Missing Security Headers in Next.js Config
**Vulnerability:** The application was missing critical security headers (CSP, X-Frame-Options, etc.), leaving it vulnerable to XSS, Clickjacking, and MIME-sniffing attacks.
**Learning:** Next.js static apps do not include security headers by default. Furthermore, when configuring Content-Security-Policy, GSAP and Framer Motion animations require specific directives ('unsafe-inline', 'unsafe-eval') to function correctly.
**Prevention:** Always configure custom security headers in next.config.ts for Next.js applications, tailoring the CSP to library requirements.
