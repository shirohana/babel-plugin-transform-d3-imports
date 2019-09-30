// @flow
import type { NamedModuleImportMap } from '../typed'

const defaultD3Format: NamedModuleImportMap = {
  formatDefaultLocale: 'd3-format/src/defaultLocale',
  format: ['d3-format/src/defaultLocale', { as: 'format' }],
  formatPrefix: ['d3-format/src/defaultLocale', { as: 'formatPrefix' }],
  formatLocale: 'd3-format/src/locale',
  formatSpecifier: 'd3-format/src/formatSpecifier',
  precisionFixed: 'd3-format/src/precisionFixed',
  precisionPrefix: 'd3-format/src/precisionPrefix',
  precisionRound: 'd3-format/src/precisionRound'
}

export default defaultD3Format
