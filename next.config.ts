const isProd = process.env.NODE_ENV === 'production';
const repoName = 'noorhair';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}` : '',
};

module.exports = nextConfig;