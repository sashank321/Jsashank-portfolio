## YYYY-MM-DD - [Security Headers for Static Next.js App]
**Vulnerability:** Missing default security headers in Next.js applications (such as CSP, X-Frame-Options, X-Content-Type-Options, etc.), leaving the app susceptible to XSS, clickjacking, and MIME sniffing attacks.
**Learning:** Next.js static apps do not include standard security headers by default; they must be explicitly configured using the `headers()` function in `next.config.ts`. Additionally, CSP directives need to allow 'unsafe-inline' and 'unsafe-eval' for animations (GSAP, Framer Motion) to work, and 'img-src' needs 'self' data: blob:;.
**Prevention:** Always configure standard security headers using `next.config.ts` `headers()` for Next.js applications, while carefully tuning CSP to not break client-side animations.
