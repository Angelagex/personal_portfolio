/** @type {import('next').NextConfig} */

const withNextIntl = require('next-intl/plugin')();
const nextConfig = {
  experimental: {
    runtime: 'experimental-edge',
  },
  distDir: 'build',
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
    ]
    
  }
}

module.exports = withNextIntl(nextConfig)
