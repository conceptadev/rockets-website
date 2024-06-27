const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
});

const configsFromEnv = {};

if (process.env?.NEXT_OUTPUT) {
  configsFromEnv['output'] = process.env.NEXT_OUTPUT;
}

module.exports = withNextra({
  basePath: '/rockets-website',
  images: {
    unoptimized: true,
  },
  ...configsFromEnv,
});
