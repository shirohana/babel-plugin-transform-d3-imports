// @flow
import type { NamedModuleImportMap } from '../typed'

const defaultD3Zoom: NamedModuleImportMap = {
  zoom: 'd3-zoom/src/zoom',
  zoomTransform: 'd3-zoom/src/transform',
  zoomIdentity: ['d3-zoom/src/transform', { as: 'identity' }]
}

export default defaultD3Zoom
