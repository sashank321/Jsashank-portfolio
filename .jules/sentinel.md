## YYYY-MM-DD - Missing Default Security Headers in Next.js
**Vulnerability:** Next.js static apps do not include essential security headers (CSP, HSTS, X-Frame-Options, etc.) by default.
**Learning:** We cannot rely on the framework to automatically secure HTTP responses. The headers must be explicitly configured in `next.config.ts`. Furthermore, CSP must allow 'unsafe-inline' and 'unsafe-eval' to not break Framer Motion and GSAP animations, and `img-src` must include `data: blob:`.
**Prevention:** Always verify security headers in the Next.js config and use an established secure baseline for new Next.js projects.
