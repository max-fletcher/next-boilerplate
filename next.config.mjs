/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        // protocol: 'http',
        hostname: "localhost",
        port: "3500",
      },
    ],
  },
};

export default nextConfig;
