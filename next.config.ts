import type { NextConfig } from "next";

const config: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images3.alphacoders.com",
        port: "",
        pathname: "/129/**",
        search: "",
      },
      {
        protocol: "https",
        hostname: "krafti.qodeinteractive.com",
        port: "",
        pathname: "/wp-content/uploads/2019/**",
        search: "",
      },
    ],
  },
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack", "url-loader"],
    });
    return config;
  },
};

export default config;
