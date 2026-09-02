## 2025-03-02 - Content-Security-Policy (CSP) interaction with GSAP and Framer Motion
**Vulnerability:** Missing security headers (specifically CSP) leaving the app exposed to XSS and framing attacks.
**Learning:** Adding a strict CSP to a Next.js application that heavily relies on client-side animation libraries like GSAP and Framer Motion requires allowing `'unsafe-inline'` for `style-src` and `script-src`, as well as `'unsafe-eval'` for `script-src`. Without these relaxations, the animations will break because these libraries generate inline styles and evaluate dynamic scripting properties to animate DOM nodes.
**Prevention:** Always verify animation workflows after implementing or updating Content-Security-Policy rules in front-end heavy projects.
