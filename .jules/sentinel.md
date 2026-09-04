## 2024-05-24 - Security Headers for Animated Static Next.js App
**Vulnerability:** Missing fundamental security headers (CSP, X-Frame-Options, etc.).
**Learning:** This Next.js portfolio requires specific Content-Security-Policy exceptions. Because it heavily relies on GSAP and Framer Motion for animations, the CSP must allow `'unsafe-inline'` for both scripts and styles, and `'unsafe-eval'` for scripts. Without these, the core animation functionality breaks.
**Prevention:** Apply a tailored CSP in `next.config.ts` via the `headers()` async function that balances strict origin policies with the functional requirements of the animation libraries.
