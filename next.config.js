const path = require('path')
const withCss = require('@zeit/next-css')
const withPurgeCss = require('next-purgecss')

const config = {
  env: {
    API_URL: process.env.API_URL
  },
  webpack(config) {
    config.resolve.alias['@components'] = path.join(__dirname, 'components')
    config.resolve.alias['@pages'] = path.join(__dirname, 'pages')
    config.resolve.alias['@styles'] = path.join(__dirname, 'styles')
    config.resolve.alias['@utils'] = path.join(__dirname, 'utils')
    return config
  },
}

module.exports = withCss(withPurgeCss({
  purgeCssEnabled: ({ dev, isServer }) => (!dev && !isServer),
  purgeCss: {
    whitelist: [
      'bar',
      'peg',
      'spinner',
      'spinner-icon',
    ],
    whitelistPatterns: [
      /nprogress/,
    ],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
  },
  ...config
}))
