/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn.shopify.com", "media.graphassets.com"],
  },
};

module.exports = nextConfig;
