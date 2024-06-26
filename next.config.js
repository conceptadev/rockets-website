const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
});

module.exports = withNextra({
  basePath: '/rockets-website',
  output: 'export',
  images: {
    unoptimized: true,
  }
});
