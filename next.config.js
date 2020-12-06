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
      {
        source: '/posts/learning-advanced-mathematics',
        destination: '/learning-advanced-mathematics',
        permanent: true,
      },
      {
        source: '/posts/learning-deep-learning',
        destination: '/learning-deep-learning',
        permanent: true,
      },
      {
        source: '/posts/minimax-and-monte-carlo-tree-search',
        destination: '/minimax-and-mcts',
        permanent: true,
      },
      {
        source: '/posts/word2vec-intuition',
        destination: '/word2vec-intuition',
        permanent: true,
      },
      {
        source: '/posts/generics',
        destination: '/generics',
        permanent: true,
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
