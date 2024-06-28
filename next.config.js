const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
});

const configsFromEnv = {};

if (process.env?.NEXT_OUTPUT) {
  configsFromEnv['output'] = process.env.NEXT_OUTPUT;
}

if (process.env?.NEXT_BASE_PATH) {
  configsFromEnv['basePath'] = process.env.NEXT_BASE_PATH;
}

module.exports = withNextra({
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  ...configsFromEnv,
});
