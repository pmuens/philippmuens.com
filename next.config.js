module.exports = {
  async rewrites() {
    return [
      {
        source: '/:slug',
        destination: '/posts/:slug',
      },
    ]
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      // eslint-disable-next-line
      require('./scripts/generate-sitemap')
    }

    return config
  },
}
