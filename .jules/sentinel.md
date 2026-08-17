## 2023-10-27 - Added Security Headers via Next.js Config
**Vulnerability:** Missing strict HTTP security headers.
**Learning:** Next.js applications require explicit configuration in `next.config.ts` to enforce security headers such as `X-Frame-Options`, `Strict-Transport-Security`, and `Permissions-Policy`.
**Prevention:** Always include a comprehensive headers array in Next.js configuration files for new applications to establish baseline defense in depth.
