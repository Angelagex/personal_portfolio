/** @type {import('next').NextConfig} */

const withNextIntl = require('next-intl/plugin')();
const nextConfig = {
  target: "serverless",
  images: {
    domains: [
      "i.scdn.co",
      "openweathermap.org"
    ]
  }
}

module.exports = withNextIntl(nextConfig)
