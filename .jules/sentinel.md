## 2025-05-18 - [Content-Security-Policy with GSAP and Framer Motion]
**Vulnerability:** Missing Content-Security-Policy headers leave the application vulnerable to XSS attacks.
**Learning:** When adding a Content-Security-Policy in a Next.js application that heavily relies on animation libraries like GSAP and Framer Motion, strict CSPs without `'unsafe-inline'` or `'unsafe-eval'` will break the animations. These libraries dynamically generate inline styles and scripts.
**Prevention:** Allow `'unsafe-inline'` for both `script-src` and `style-src`, and `'unsafe-eval'` for `script-src` in the `Content-Security-Policy` header to balance security with functional animation requirements.
