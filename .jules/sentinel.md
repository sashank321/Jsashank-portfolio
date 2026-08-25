## 2024-05-18 - Security Headers and Animation Libraries
**Vulnerability:** Missing fundamental security headers (CSP, HSTS, X-Frame-Options) across the application.
**Learning:** Adding a strict Content-Security-Policy (CSP) directly breaks GSAP and Framer Motion animations used throughout the portfolio site. These libraries dynamically calculate and apply styles, requiring `'unsafe-inline'` for styles and `'unsafe-eval'` for scripts.
**Prevention:** When modifying or implementing security headers, especially CSP in this specific Next.js repository, ensure that `'unsafe-inline'` and `'unsafe-eval'` remain permitted to avoid breaking the core interactive frontend features.
