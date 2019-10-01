// @flow
import type { NamedModuleImportMap } from '../typed'

const defaultD3Brush: NamedModuleImportMap = {
  brush: 'd3-brush/src/brush',
  brushX: ['d3-brush/src/brush', { as: 'brushX' }],
  brushY: ['d3-brush/src/brush', { as: 'brushY' }],
  brushSelection: ['d3-brush/src/brush', { as: 'brushSelection' }]
}

export default defaultD3Brush
