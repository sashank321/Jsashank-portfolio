## 2024-05-24 - [CSP Considerations for GSAP and Framer Motion]
**Vulnerability:** Missing Content Security Policy (CSP) headers leaving app open to XSS and data injection attacks.
**Learning:** Adding strict CSP headers in this Next.js app requires special handling. GSAP and Framer Motion animations require `'unsafe-inline'` for both `script-src` and `style-src`, and `'unsafe-eval'` for `script-src` to function without breaking.
**Prevention:** Ensure future CSP enhancements or refactoring always include `'unsafe-eval'` and `'unsafe-inline'` for GSAP/Framer Motion dependencies in Next.js config until they provide native strict CSP support.
