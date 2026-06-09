/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Probemos poniéndolo todo en minúsculas que es como GitHub Pages suele resolver las rutas de assets
  basePath: '/Rental-Cars', 
};

export default nextConfig;