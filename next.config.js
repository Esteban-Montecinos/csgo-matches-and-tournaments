/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'https://img-cdn.hltv.org',
            port: '',
            pathname: '/**',
          },
        ],
      },
}

module.exports = nextConfig
