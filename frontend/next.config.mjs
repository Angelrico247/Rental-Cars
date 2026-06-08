/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/Rental-Cars',
    assetPrefix: '/Rental-Cars/', 
    images: {
      unoptimized: true,
    },
  };
  
  export default nextConfig;