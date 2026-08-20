## 2024-05-24 - Required Insecure CSP for GSAP & Framer Motion
**Vulnerability:** Weak Content Security Policy (CSP) allowing `'unsafe-inline'` for `script-src` and `style-src`.
**Learning:** The application heavily relies on GSAP and Framer Motion for animations. These libraries dynamically calculate and inject inline styles, and sometimes evaluate scripts inline. Stripping `'unsafe-inline'` breaks the core animations of the portfolio site.
**Prevention:** If the site architecture changes to use CSS-based animations exclusively or if future versions of animation libraries don't require inline evaluation, remove `'unsafe-inline'`. Until then, it's a necessary compromise, and defense-in-depth measures should focus on input sanitization elsewhere to prevent XSS.
