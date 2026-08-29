## 2024-05-18 - [CSP Requirements for Animation Libraries]
**Vulnerability:** Missing Security Headers (Content-Security-Policy)
**Learning:** This Next.js application relies heavily on GSAP and Framer Motion for complex animations. Implementing a strict Content-Security-Policy breaks the UI because these libraries require `unsafe-inline` (for inline styles/scripts injected during animations) and `unsafe-eval` (for dynamic script evaluation).
**Prevention:** When implementing or updating CSP for animation-heavy static sites, ensure 'unsafe-inline' and 'unsafe-eval' are included in script-src/style-src directives to maintain functionality while still restricting external domains.
