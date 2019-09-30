// @flow
import type { NamedModuleImportMap } from '../typed'

const defaultD3Color: NamedModuleImportMap = {
  color: 'd3-color/src/color',
  rgb: ['d3-color/src/color', { as: 'rgb' }],
  hsl: ['d3-color/src/color', { as: 'hsl' }],
  lab: 'd3-color/src/lab',
  hcl: ['d3-color/src/lab', { as: 'hcl' }],
  lch: ['d3-color/src/lab', { as: 'lch' }],
  gray: ['d3-color/src/lab', { as: 'gray' }],
  cubehelix: 'd3-color/src/cubehelix'
}

export default defaultD3Color
