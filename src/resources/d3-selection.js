// @flow
import type { NamedModuleImportMap } from '../typed'

const defaultD3Selection: NamedModuleImportMap = {
  create: 'd3-selection/src/create',
  creator: 'd3-selection/src/creator',
  local: 'd3-selection/src/local',
  matcher: 'd3-selection/src/matcher',
  mouse: 'd3-selection/src/mouse',
  namespace: 'd3-selection/src/namespace',
  namespaces: 'd3-selection/src/namespaces',
  clientPoint: 'd3-selection/src/point',
  select: 'd3-selection/src/select',
  selectAll: 'd3-selection/src/selectAll',
  selection: 'd3-selection/src/selection/index',
  selector: 'd3-selection/src/selector',
  selectorAll: 'd3-selection/src/selectorAll',
  style: ['d3-selection/src/selection/style', { as: 'styleValue' }],
  touch: 'd3-selection/src/touch',
  touches: 'd3-selection/src/touches',
  window: 'd3-selection/src/window',
  event: ['d3-selection/src/selection/on', { as: 'event' }],
  customEvent: ['d3-selection/src/selection/on', { as: 'customEvent' }]
}

export default defaultD3Selection
