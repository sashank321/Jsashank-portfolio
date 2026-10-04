## 2024-05-15 - Missing Next.js Security Headers
**Vulnerability:** The Next.js application was missing custom security headers (CSP, X-Frame-Options, etc.), which are not included by default in static Next.js apps.
**Learning:** Next.js requires explicit configuration via the headers() function in next.config.ts to set these security headers.
**Prevention:** Always define custom security headers in next.config.ts for all Next.js applications.
