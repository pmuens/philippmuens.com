/* eslint-disable global-require */
const { newsletterUrl } = require('./core.config')

module.exports = {
  async redirects() {
    return [
      {
        source: '/subscribe',
        destination: newsletterUrl,
        permanent: false,
      },
    ]
  },
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
