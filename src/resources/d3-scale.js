// @flow
import type { NamedModuleImportMap } from '../typed'

const defaultD3Scale: NamedModuleImportMap = {
  scaleBand: 'd3-scale/src/band',
  scalePoint: ['d3-scale/src/band', { as: 'point' }],

  scaleIdentity: 'd3-scale/src/identity',
  scaleLinear: 'd3-scale/src/linear',
  scaleLog: 'd3-scale/src/log',
  scaleSymlog: 'd3-scale/src/symlog',

  scaleOrdinal: 'd3-scale/src/ordinal',
  scaleImplicit: ['d3-scale/src/ordinal', { as: 'implicit' }],

  scalePow: 'd3-scale/src/pow',
  scaleSqrt: ['d3-scale/src/pow', { as: 'sqrt' }],

  scaleQuantile: 'd3-scale/src/quantile',
  scaleQuantize: 'd3-scale/src/quantize',
  scaleThreshold: 'd3-scale/src/threshold',
  scaleTime: 'd3-scale/src/time',
  scaleUtc: 'd3-scale/src/utcTime',

  scaleSequential: 'd3-scale/src/sequential',
  scaleSequentialLog: ['d3-scale/src/sequential', { as: 'sequentialLog' }],
  scaleSequentialPow: ['d3-scale/src/sequential', { as: 'sequentialPow' }],
  scaleSequentialSqrt: ['d3-scale/src/sequential', { as: 'sequentialSqrt' }],
  scaleSequentialSymlog: ['d3-scale/src/sequential', { as: 'sequentialSymlog' }],

  scaleSequentialQuantile: 'd3-scale/src/sequentialQuantile',

  scaleDiverging: 'd3-scale/src/diverging',

  scaleDivergingLog: ['d3-scale/src/diverging', { as: 'divergingLog' }],
  scaleDivergingPow: ['d3-scale/src/diverging', { as: 'divergingPow' }],
  scaleDivergingSqrt: ['d3-scale/src/diverging', { as: 'divergingSqrt' }],
  scaleDivergingSymlog: ['d3-scale/src/diverging', { as: 'divergingSymlog' }],

  tickFormat: 'd3-scale/src/tickFormat'
}

export default defaultD3Scale
