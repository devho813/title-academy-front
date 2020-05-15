/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const withImages = require('next-images');

module.exports = withBundleAnalyzer(
  withImages({
    exportTrailingSlash: true,
    exportPathMap: async function (
      defaultPathMap,
      { dev, dir, outDir, distDir, buildId }
    ) {
      return {
        '/': { page: '/' },
        '/signin': { page: '/signin' },
        '/signup': { page: '/signup' },
        '/forgot': { page: '/forgot' },
        '/verify': { page: '/verify' },
        '/verify/success': { page: '/verify/success' },
      }
    },
    webpack: function (config) {
      const originalEntry = config.entry;

      config.entry = async () => {
        const entries = await originalEntry();
        if (entries['main.js'] && !entries['main.js'].includes('./polyfills.js')) {
          entries['main.js'].unshift('./polyfills.js')
        }
        return entries;
      }

      config.resolve.alias = {
        ...config.resolve.alias,
        "~": path.resolve(__dirname, "./src")
      };

      return config;
    }
  })
);