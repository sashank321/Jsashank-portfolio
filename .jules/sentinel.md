## 2024-10-24 - [CSP and Animations]
**Vulnerability:** Missing Content-Security-Policy (CSP) headers in Next.js configuration.
**Learning:** When configuring CSP headers for a Next.js application that heavily relies on animation libraries like GSAP and Framer Motion, `script-src` and `style-src` must include `unsafe-inline` and `unsafe-eval` to prevent breaking the core application functionality. Strict CSP (without these) will block the inline styles and evaluations these libraries use for complex animations.
**Prevention:** Always verify if animation or complex UI libraries require specific CSP allowances before enforcing strict policies. Test build/runtime after applying headers.
