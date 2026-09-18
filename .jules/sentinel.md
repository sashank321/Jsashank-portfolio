## 2024-05-24 - Missing Security Headers

**Vulnerability:** The Next.js application was missing critical security headers such as `Content-Security-Policy`, `Strict-Transport-Security`, `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, and `Permissions-Policy`. This lack of protection could allow for attacks like clickjacking, MIME-type sniffing, cross-site scripting (XSS), and insecure data transmission.

**Learning:** When configuring `Content-Security-Policy` (CSP) headers in a Next.js application using GSAP and Framer Motion for animations, `'unsafe-inline'` for both scripts and styles, and `'unsafe-eval'` for scripts, must be explicitly allowed. Denying these will break the application's complex animations. This demonstrates that security policies often require fine-tuning to balance protection with necessary functionality, especially in highly interactive, animation-heavy frontend applications.

**Prevention:** To prevent missing security headers in future projects, ensure that a robust set of security headers is included in `next.config.ts` during the initial project setup phase.
