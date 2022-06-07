// eslint-disable-next-line @typescript-eslint/no-var-requires
const { patchWebpackConfig } = require('next-global-css');

/** @type {import('next').NextConfig} */
const config = {
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
  compiler: {
    removeConsole: true
  },
  swcMinify: true,
  webpack: (config, options) => {
    if (process.env.CYPRESS === 'true') {
      //Allows importing the global.css file in cypress/support/component.ts
      patchWebpackConfig(config, options);
    }
    return config;
  }
};

module.exports = config;
