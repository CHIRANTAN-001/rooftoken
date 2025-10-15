import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/',
        destination: '/marketplace',
        permanent: true,
      },
      {
        source: '/wallet',
        destination: '/wallet/balance',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
