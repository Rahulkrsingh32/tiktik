/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  images: {
    domains: ['encrypted-tbn0.gstatic.com','lh3.googleusercontent.com'],
  }
}

module.exports = nextConfig
