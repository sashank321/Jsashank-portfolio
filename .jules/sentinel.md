## 2025-02-14 - Content Security Policy for Animations
**Vulnerability:** Weak default security headers leaving the app vulnerable to XSS and Clickjacking.
**Learning:** Adding a strict CSP can break animation libraries like GSAP and Framer Motion which rely on inline styles.
**Prevention:** Include `'unsafe-inline'` for `style-src` (and potentially `script-src` depending on how the animations are injected) when implementing CSP in Next.js projects that heavily use animation libraries.
