/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'storage.web7.pro',
            port: '',
            pathname: '/csgobot/team/**',
          },
        ],
      },
}

module.exports = nextConfig
