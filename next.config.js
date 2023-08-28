// import { withContentlayer } from 'next-contentlayer';
const { withContentlayer } = require('next-contentlayer');

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'i.scdn.co', // Spotify Album Art
      'pbs.twimg.com', // Twitter Profile Picture
    ],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = withContentlayer(nextConfig);
