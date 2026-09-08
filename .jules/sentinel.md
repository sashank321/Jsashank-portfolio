## 2025-02-14 - Add Security Headers and Configure CSP for GSAP/Framer Motion

**Vulnerability:** Missing standard HTTP security headers (CSP, X-Frame-Options, X-Content-Type-Options, etc.), increasing vulnerability to XSS, Clickjacking, and other injection attacks.
**Learning:** Adding a strict Content-Security-Policy (CSP) in Next.js applications that use complex animation libraries like GSAP and Framer Motion requires allowing 'unsafe-inline' for styles/scripts and 'unsafe-eval' for scripts. These libraries dynamically generate and evaluate CSS/JS for animations.
**Prevention:** Always configure basic security headers in `next.config.ts` for new Next.js projects. When doing so with animation libraries, test thoroughly to ensure the CSP doesn't block required dynamic style/script execution while still locking down other attack vectors.
