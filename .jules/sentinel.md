## 2024-08-23 - CSP Headers in Next.js with Animation Libraries
**Vulnerability:** Missing Content-Security-Policy (CSP) headers in Next.js configuration.
**Learning:** Next.js projects utilizing complex animation libraries like GSAP and Framer Motion require specific configurations for `script-src` and `style-src`. Standard strict CSPs break these animations. 'unsafe-inline' and 'unsafe-eval' must be explicitly allowed.
**Prevention:** Implement custom CSP configurations via `next.config.ts` headers that balance security with functionality, ensuring inline styles and scripts necessary for animations are permitted.
