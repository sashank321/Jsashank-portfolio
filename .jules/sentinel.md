## 2025-02-27 - [Add Next.js Security Headers with GSAP/Framer Motion Exceptions]
**Vulnerability:** Missing common security headers (CSP, X-Frame-Options, etc.), increasing risk of XSS and framing attacks.
**Learning:** When implementing Content-Security-Policy (CSP) headers in this Next.js app, standard strict CSP (disallowing unsafe-inline/eval) broke GSAP and Framer Motion animations. We had to specifically allow 'unsafe-inline' for scripts and styles, and 'unsafe-eval' for scripts.
**Prevention:** In future applications using complex animation libraries like GSAP/Framer Motion, remember to account for their requirement of inline styles/scripts and evaluation when configuring CSP headers.
