/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/cart',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "script-src 'self' *.stripe.com;",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
