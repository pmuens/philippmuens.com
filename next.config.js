/* eslint-disable global-require */

module.exports = {
  async rewrites() {
    return [
      {
        source: '/rss',
        destination: '/rss/feed.xml',
      },
      {
        source: '/:slug',
        destination: '/posts/:slug',
      },
    ]
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./scripts/generate-sitemap')
      require('./scripts/generate-rss')
    }

    return config
  },
}
