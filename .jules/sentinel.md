## 2025-02-18 - CSP considerations for Animation Libraries
**Vulnerability:** Adding a strict Content Security Policy (CSP) without exceptions can break core UI functionality depending on third-party libraries.
**Learning:** This Next.js app uses GSAP and Framer Motion for animations. These libraries require dynamic inline styles and script evaluation to operate. Implementing a default strict CSP blocked these operations and completely broke the app's animations.
**Prevention:** When configuring `Content-Security-Policy` headers for apps using GSAP/Framer Motion, `script-src` must allow `'unsafe-inline'` and `'unsafe-eval'`, and `style-src` must allow `'unsafe-inline'`. It's critical to identify UI libraries and their specific CSP requirements before rolling out strict CSP headers.
