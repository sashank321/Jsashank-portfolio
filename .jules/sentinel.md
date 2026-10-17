## 2026-10-17 - Missing Default Security Headers in Next.js Static Apps
**Vulnerability:** Missing security headers like Content-Security-Policy, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, and Strict-Transport-Security.
**Learning:** Next.js does not include strict security headers by default in static apps. Adding headers requires careful configuration of CSP to not break client-side animations (e.g. GSAP, Framer Motion) which require 'unsafe-inline' and 'unsafe-eval'.
**Prevention:** Always implement a robust custom `headers()` function in `next.config.ts` when bootstrapping new Next.js projects to establish a strong security baseline early on.
