/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*', // URL yang akan di redirect
        destination: `${process.env.BASE_URL}/:path*`, // URL tujuan
      },
    ];
  },
};

module.exports = nextConfig;
