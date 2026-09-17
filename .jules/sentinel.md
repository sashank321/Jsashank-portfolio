## 2024-09-17 - Content Security Policy Constraints
**Vulnerability:** Missing security headers like Content-Security-Policy (CSP) that defend against XSS, clickjacking, etc.
**Learning:** Adding a strict CSP broke application animations. The GSAP and Framer Motion animation libraries used heavily in this codebase require 'unsafe-inline' (for style updates) and 'unsafe-eval' (for script processing).
**Prevention:** Always allow 'unsafe-inline' and 'unsafe-eval' in the CSP of this specific project to avoid breaking essential UI functionality when adding security constraints.