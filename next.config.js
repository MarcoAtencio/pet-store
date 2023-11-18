/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'inventario-petuniverse.s3.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'ideogram.ai',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'falabella.scene7.com',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'www.cochikis.pe',
      },
    ],
  },
};

module.exports = nextConfig;
