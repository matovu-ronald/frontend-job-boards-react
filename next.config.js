/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "3.88.149.164",
        port: "80",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
