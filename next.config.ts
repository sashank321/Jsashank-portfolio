import type { NextConfig } from "next";

// 🛡️ Sentinel: Security Headers (MEDIUM Priority)
// Adding Content-Security-Policy (CSP) to defend against XSS, clickjacking, and other injection attacks.
// NOTE: 'unsafe-inline' and 'unsafe-eval' are required by GSAP and Framer Motion animation libraries used in this app.
const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' blob: data:; font-src 'self' data:; connect-src 'self'; object-src 'none'; frame-ancestors 'none'; upgrade-insecure-requests;",
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  }
];

const nextConfig: NextConfig = {
  /* config options here */
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
};

export default nextConfig;
