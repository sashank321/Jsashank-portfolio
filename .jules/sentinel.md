## 2026-08-18 - [Missing Next.js Security Headers]
**Vulnerability:** The application was missing basic HTTP security headers (e.g., X-Frame-Options, X-Content-Type-Options).
**Learning:** Next.js applications do not include standard security headers by default; they require explicit configuration in `next.config.ts`.
**Prevention:** Always configure `async headers()` in Next.js config files when setting up a new project to ensure baseline security.
