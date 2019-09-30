// @flow
import type { NamedModuleImportMap } from '../typed'

const defaultD3TimeFormat: NamedModuleImportMap = {
  timeFormatDefaultLocale: 'd3-time-format/src/defaultLocale',
  timeFormat: ['d3-time-format/src/defaultLocale', { as: 'timeFormat' }],
  timeParse: ['d3-time-format/src/defaultLocale', { as: 'timeParse' }],
  utcFormat: ['d3-time-format/src/defaultLocale', { as: 'utcFormat' }],
  utcParse: ['d3-time-format/src/defaultLocale', { as: 'utcParse' }],

  timeFormatLocale: 'd3-time-format/src/locale',
  isoFormat: 'd3-time-format/src/isoFormat',
  isoParse: 'd3-time-format/src/isoParse'
}

export default defaultD3TimeFormat
