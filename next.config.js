const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverComponentsExternalPackages: ["@tremor/react"],
  },
  webpack: (config) => {
    config.resolve.modules.push(path.resolve("./"));

    return config;
  },
};

module.exports = nextConfig;
