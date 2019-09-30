// @flow
import type { NamedModuleImportMap } from '../typed'

const defaultD3Fetch: NamedModuleImportMap = {
  blob: 'd3-fetch/src/blob',
  buffer: 'd3-fetch/src/buffer',
  dsv: 'd3-fetch/src/dsv',
  csv: ['d3-fetch/src/dsv', { as: 'csv' }],
  tsv: ['d3-fetch/src/dsv', { as: 'tsv' }],
  image: 'd3-fetch/src/image',
  json: 'd3-fetch/src/json',
  text: 'd3-fetch/src/text',
  xml: 'd3-fetch/src/xml',
  html: ['d3-fetch/src/xml', { as: 'html' }],
  svg: ['d3-fetch/src/xml', { as: 'svg' }]
}

export default defaultD3Fetch
