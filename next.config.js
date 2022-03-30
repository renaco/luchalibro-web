/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: 'https://luchalibro.romeroruiz.com/public/', // real server
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [640, 750, 828,]
  },
  distDir: 'build',
}

module.exports = nextConfig
