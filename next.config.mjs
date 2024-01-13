// import { withContentlayer } from 'next-contentlayer';
import { withContentlayer }  from 'next-contentlayer';



/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // ppr: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.scdn.co',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'pbs.twimg.com',
        pathname: '**',
      },
    ]
  },
};

export default withContentlayer(nextConfig);