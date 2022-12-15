/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'randomuser.me',
        port: '',
        pathname: '/api/**',
      },
      {
        protocol: 'https',
        hostname: 'avatars.dicebear.com',
        port: '',
        pathname: '/api/**',
      },
    ],
  },

};

module.exports = nextConfig;
