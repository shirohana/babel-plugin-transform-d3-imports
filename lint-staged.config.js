// @flow
const rules = {
  js: {
    task: [
      'node_modules/.bin/eslint --format=codeframe'
    ],
    globs: [
      'babel.config.js',
      'lint-staged.config.js',
      'src/**/*.js',
      'test/**/*.js'
    ]
  }
}

module.exports = Object.keys(rules).reduce((config, key) => {
  const { task, globs } = rules[key]
  globs.forEach(glob => (config[glob] = task))
  return config
}, {})
