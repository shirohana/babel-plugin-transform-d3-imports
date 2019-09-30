// @flow
import type { NamedModuleImportMap } from '../typed'

const defaultD3Array: NamedModuleImportMap = {
  bisect: 'd3-array/src/bisect',
  bisectLeft: ['d3-array/src/bisect', { as: 'bisectLeft' }],
  bisectRight: ['d3-array/src/bisect', { as: 'bisectRight' }],
  ascending: 'd3-array/src/ascending',
  bisector: 'd3-array/src/bisector',
  cross: 'd3-array/src/cross',
  descending: 'd3-array/src/descending',
  deviation: 'd3-array/src/deviation',
  extent: 'd3-array/src/extent',
  histogram: 'd3-array/src/histogram',
  thresholdFreedmanDiaconis: 'd3-array/src/threshold/freedmanDiaconis',
  thresholdScott: 'd3-array/src/threshold/scott',
  thresholdSturges: 'd3-array/src/threshold/sturges',
  max: 'd3-array/src/max',
  mean: 'd3-array/src/mean',
  median: 'd3-array/src/median',
  merge: 'd3-array/src/merge',
  min: 'd3-array/src/min',
  pairs: 'd3-array/src/pairs',
  permute: 'd3-array/src/permute',
  quantile: 'd3-array/src/quantile',
  range: 'd3-array/src/range',
  scan: 'd3-array/src/scan',
  shuffle: 'd3-array/src/shuffle',
  sum: 'd3-array/src/sum',
  ticks: 'd3-array/src/ticks',
  tickIncrement: ['d3-array/src/ticks', { as: 'tickIncrement' }],
  tickStep: ['d3-array/src/ticks', { as: 'tickStep' }],
  transpose: 'd3-array/src/transpose',
  variance: 'd3-array/src/variance',
  zip: 'd3-array/src/zip'
}

export default defaultD3Array
