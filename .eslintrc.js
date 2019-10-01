'use strict'
/* eslint quote-props: ['error', 'consistent'] */

const standard = require('eslint-config-standard')

module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    node: true
  },
  globals: {
  },
  plugins: [
    'flowtype'
  ],
  extends: [
    'standard',
    'plugin:flowtype/recommended'
  ],
  settings: {
    'flowtype': {
      'onlyFilesWithFlowAnnotation': true
    }
  },
  rules: {
    // Built-in Rules
    ...{
      'arrow-parens': ['error', 'as-needed', { 'requireForBlockBody': false }],
      'generator-star-spacing': ['error', { 'before': false, 'after': true }],
      'indent': ['error', 2, { ...standard.rules['indent'][2], 'SwitchCase': 0 }],
      'no-console': ['error'],
      'object-curly-spacing': ['error', 'always'],
      'sort-imports': ['error', { 'ignoreDeclarationSort': true, 'memberSyntaxSortOrder': ['single', 'multiple', 'all', 'none'] }],
      'yoda': ['error', 'never', { 'exceptRange': true }]
    },
    // Flowtype Rules
    ...{
      'flowtype/no-types-missing-file-annotation': 0,
      'flowtype/space-after-type-colon': [2, 'always', { 'allowLineBreak': true }]
    }
  }
}
