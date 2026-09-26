## 2024-05-24 - Missing Security Headers in Next.js

**Vulnerability:** Next.js doesn't come with HTTP security headers out-of-the-box, meaning applications lack defense-in-depth measures like CSP, X-Frame-Options, and Strict-Transport-Security which leaves them open to XSS, Clickjacking, and MIME sniffing attacks.

**Learning:** When configuring Content Security Policy (CSP) headers in this Next.js app, it's essential to include 'unsafe-eval' and 'unsafe-inline' in the `script-src` and `style-src` directives respectively to ensure GSAP and Framer Motion animation libraries work correctly without breaking the UI.

**Prevention:** Always explicitly define security headers in `next.config.ts`. When configuring CSP for apps with heavy animation requirements like GSAP/Framer Motion, carefully evaluate what directives they need ('unsafe-inline'/'unsafe-eval') while restricting other sources.
