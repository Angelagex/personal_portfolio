/** @type {import('next').NextConfig} */

const withNextIntl = require('next-intl/plugin')();
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "i.scdn.co",
        pathname: "**"
      },
      {
        protocol: 'https',
        hostname: "openweathermap.org",
        pathname: "**"
      }
    ],
    formats: ['image/webp', 'image/png', 'image/gif', 'image/jpg'],

  }
}

module.exports = withNextIntl(nextConfig)
