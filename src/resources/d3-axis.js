// @flow
import type { NamedModuleImportMap } from '../typed'

const defaultD3Axis: NamedModuleImportMap = {
  axisTop: ['d3-axis/src/axis', { as: 'axisTop' }],
  axisRight: ['d3-axis/src/axis', { as: 'axisRight' }],
  axisBottom: ['d3-axis/src/axis', { as: 'axisBottom' }],
  axisLeft: ['d3-axis/src/axis', { as: 'axisLeft' }]
}

export default defaultD3Axis
