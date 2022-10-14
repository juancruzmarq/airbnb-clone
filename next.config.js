/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // declarar los dominios a los que se puede acceder desde el navegador
  images: {
    domains: ["links.papareact.com", "a0.muscache.com"],
  },
  env: {
    mapbox_key:
      "pk.eyJ1IjoianVhbmNydXptYXJxIiwiYSI6ImNrc2JhMHlsaDA0cm0ybnJvZDE5M3hod24ifQ.ZlzE8X1FRmNT3ZztwPUb0Q",
  },
};

module.exports = nextConfig;
