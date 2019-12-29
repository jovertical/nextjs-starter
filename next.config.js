const path = require('path')
const withCss = require('@zeit/next-css')
const withPurgeCss = require('next-purgecss')

const config = {
  webpack(config) {
    config.resolve.alias['@components'] = path.join(__dirname, 'components')
    config.resolve.alias['@pages'] = path.join(__dirname, 'pages')
    config.resolve.alias['@styles'] = path.join(__dirname, 'styles')
    return config
  },
}

module.exports = withCss(withPurgeCss({
  purgeCssEnabled: ({ dev, isServer }) => (!dev && !isServer),
  purgeCss: {
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
  },
  ...config
}))
