## 2024-05-24 - Content-Security-Policy (CSP) Requirements for Animation Libraries
**Vulnerability:** Missing Content-Security-Policy (CSP) headers leaving the application exposed to XSS and data injection attacks.
**Learning:** When configuring CSP headers in a Next.js application that uses GSAP or Framer Motion for animations, 'unsafe-inline' for scripts and styles and 'unsafe-eval' for scripts must be allowed. Blocking these will break the animation features that heavily rely on inline styles and dynamic script evaluations.
**Prevention:** Always verify animation behavior when implementing CSP. Ensure the policy is strict enough to block external threats but permissive enough ('unsafe-inline', 'unsafe-eval') to allow internal animation logic to execute.
