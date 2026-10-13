## 2025-02-14 - Missing Security Headers in Next.js

**Vulnerability:** The Next.js application was missing critical security headers (Content-Security-Policy, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, Strict-Transport-Security).

**Learning:** Next.js static and dynamic applications do not include comprehensive security headers by default. They must be explicitly configured via the `headers()` function in `next.config.ts`. Additionally, to prevent breaking animations (GSAP and Framer Motion), CSP must allow 'unsafe-inline' for scripts/styles and 'unsafe-eval' for scripts, and explicit data/blob definitions for img-src.

**Prevention:** Ensure all future Next.js projects have a hardened `next.config.ts` with custom security headers tailored to the application's dependencies (e.g., allowing specific unsafe inline/eval for animation libraries if needed) during initial setup.