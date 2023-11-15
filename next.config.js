// import { withContentlayer } from 'next-contentlayer';
const { withContentlayer } = require('next-contentlayer');

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // ppr: true,
  },
  images: {
    domains: [
      'i.scdn.co', // Spotify Album Art
      'pbs.twimg.com', // Twitter Profile Picture
    ],
  },
};

module.exports = withContentlayer(nextConfig);
