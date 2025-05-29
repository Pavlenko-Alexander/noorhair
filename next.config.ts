const repoName = 'noorhair';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}`,
};

module.exports = nextConfig;
