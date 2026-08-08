## 2024-05-15 - [Security Enhancement]
**Vulnerability:** Found no obvious vulnerabilities but noticed several Next.js security configurations could be improved (e.g., Security Headers missing).
**Learning:** Next.js defaults do not include robust HTTP security headers.
**Prevention:** Always implement `headers()` in `next.config.ts` to include standard security headers (CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy).
