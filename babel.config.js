'use strict'

module.exports = function (api) {
  const env = api.env()

  const envOptsNoTargets = {
    loose: true,
    modules: false,
    useBuiltIns: false
  }

  // Consistent with Babel
  const nodeVersion = '6.9'
  const envOpts = Object.assign({}, envOptsNoTargets)
  const config = {
    sourceType: 'module',
    comments: false,
    ignore: [
      'test/fixtures',
      'lib'
    ],
    presets: [['@babel/env', envOpts]],
    plugins: [
      ['@babel/transform-flow-strip-types']
    ]
  }

  switch (env) {
  case 'production':
    envOpts.targets = {
      node: nodeVersion
    }
    break
  case 'test':
    envOpts.targets = {
      node: 'current'
    }
    if (process.env.BABEL_COVERAGE === 'true') {
      config.plugins.push(['babel-plugin-istanbul'])
    }
    break
  case 'development':
    envOpts.debug = true
    envOpts.targets = {
      node: 'current'
    }
    break
  default:
    envOpts.targets = {
      node: 'current'
    }
  }

  return config
}
