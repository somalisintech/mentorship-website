/** @type {import('next').NextConfig} */
const config = {
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: true
  }
};

module.exports = config;
