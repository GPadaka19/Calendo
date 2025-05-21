/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['localhost', 'fotomhs.amikom.ac.id'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig