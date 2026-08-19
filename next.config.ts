import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Security headers configuration */
  async headers() {
    return [
      {
        // Apply these headers to all routes
        source: "/(.*)",
        headers: [
          {
            // Prevents the site from being embedded in an iframe (Clickjacking protection)
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            // Prevents browsers from guessing the MIME type (MIME sniffing protection)
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            // Controls how much referrer information is included with requests
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            // Restricts access to browser features and APIs (Permissions Policy)
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
          },
          {
            // Enforces HTTPS connections
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
          {
            // Helps prevent cross-site scripting (XSS) attacks and data injection
            key: "Content-Security-Policy",
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: https:; font-src 'self' data:; connect-src 'self'",
          }
        ],
      },
    ];
  },
};

export default nextConfig;
