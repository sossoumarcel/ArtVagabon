/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // ON AJOUTE LA PERMISSION POUR CLOUDINARY
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },

      // On garde les permissions que vous aviez déjà
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'http',
        hostname: '13.38.65.61',
      },
    ],
  },
}

module.exports = nextConfig