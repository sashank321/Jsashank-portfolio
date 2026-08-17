import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            // Protects against clickjacking by preventing the site from being framed
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            // Prevents browsers from guessing the MIME type, protecting against MIME-sniffing attacks
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            // Controls how much referrer information is included with requests, protecting cross-origin leakage
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            // Enforces secure (HTTPS) connections to the server for 2 years
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            // Disables access to sensitive browser features (camera, mic, geolocation, etc.)
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
