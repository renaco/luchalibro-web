/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: 'https://luchalibro.romeroruiz.com/public/', // real server
  },
}

module.exports = nextConfig
