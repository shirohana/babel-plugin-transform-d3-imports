// @flow
import type { NamedModuleImportMap } from '../typed'

const defaultD3Transition: NamedModuleImportMap = {
  // TODO Fix d3-transform polyfilled d3-selection
  transition: ['d3-transition/src/index', { as: 'transition' }],
  active: ['d3-transition/src/index', { as: 'active' }],
  interrupt: ['d3-transition/src/index', { as: 'interrupt' }]
}

export default defaultD3Transition
