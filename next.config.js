/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'dist',
  images: {
    domains: ["i.scdn.co", "openweathermap.org"]
  }
}

module.exports = nextConfig
