// @flow
import type { NamedModuleImportMap } from '../typed'

const defaultD3Dsv: NamedModuleImportMap = {
  dsvFormat: 'd3-dsv/src/dsv',
  csvParse: ['d3-dsv/src/csv', { as: 'csvParse' }],
  csvParseRows: ['d3-dsv/src/csv', { as: 'csvParseRows' }],
  csvFormat: ['d3-dsv/src/csv', { as: 'csvFormat' }],
  csvFormatBody: ['d3-dsv/src/csv', { as: 'csvFormatBody' }],
  csvFormatRows: ['d3-dsv/src/csv', { as: 'csvFormatRows' }],
  csvFormatRow: ['d3-dsv/src/csv', { as: 'csvFormatRow' }],
  csvFormatValue: ['d3-dsv/src/csv', { as: 'csvFormatValue' }],
  tsvParse: ['d3-dsv/src/tsv', { as: 'tsvParse' }],
  tsvParseRows: ['d3-dsv/src/tsv', { as: 'tsvParseRows' }],
  tsvFormat: ['d3-dsv/src/tsv', { as: 'tsvFormat' }],
  tsvFormatBody: ['d3-dsv/src/tsv', { as: 'tsvFormatBody' }],
  tsvFormatRows: ['d3-dsv/src/tsv', { as: 'tsvFormatRows' }],
  tsvFormatRow: ['d3-dsv/src/tsv', { as: 'tsvFormatRow' }],
  tsvFormatValue: ['d3-dsv/src/tsv', { as: 'tsvFormatValue' }],
  autoType: 'd3-dsv/src/autoType'
}

export default defaultD3Dsv
