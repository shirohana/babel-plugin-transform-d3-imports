// @flow
import type { NamedModuleImportMap } from '../typed'

const defaultD3Drag: NamedModuleImportMap = {
  drag: 'd3-drag/src/drag',
  dragDisable: 'd3-drag/src/nodrag',
  dragEnable: ['d3-drag/src/nodrag', { as: 'yesdrag' }]
}

export default defaultD3Drag
