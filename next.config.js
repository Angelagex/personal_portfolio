/** @type {import('next').NextConfig} */

const withNextIntl = require('next-intl/plugin')();
const nextConfig = {
  experimental: {
    runtime: 'experimental-edge',
  },
  images: {
    remotePatterns: s[
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
    ]
    
  }
}

module.exports = withNextIntl(nextConfig)
