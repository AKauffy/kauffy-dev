/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tacos.tedawf.com",
        port: "",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
