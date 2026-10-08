## 2026-10-08 - CSP Header Animation Constraints
**Vulnerability:** Missing custom security headers (CSP, X-Frame-Options, etc.) in Next.js static app, allowing potential XSS, clickjacking, and content sniffing.
**Learning:** Adding a strict CSP in this specific project breaks GSAP and Framer Motion animations. To support these animation libraries, the CSP must explicitly allow 'unsafe-eval' for scripts and 'unsafe-inline' for both scripts and styles, which reduces the strictness of the CSP.
**Prevention:** Always configure custom security headers via `next.config.ts` headers() function, but ensure CSP directives accommodate the specific requirements of UI animation libraries used in the project.
