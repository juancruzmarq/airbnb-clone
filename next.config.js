/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // declarar los dominios a los que se puede acceder desde el navegador
  images: {
    domains: ["links.papareact.com", "a0.muscache.com"],
  },
};

module.exports = nextConfig;
