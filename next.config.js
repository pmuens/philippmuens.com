module.exports = {
  domain: 'https://philippmuens.com',
  webpack: (config, { isServer }) => {
    if (isServer) {
      // eslint-disable-next-line
      require('./scripts/generate-sitemap')
    }

    return config
  },
}
