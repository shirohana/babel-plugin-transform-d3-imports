// @flow
import type { NamedModuleImportMap } from '../typed'

const defaultD3Shape: NamedModuleImportMap = {
  arc: 'd3-shape/src/arc',
  area: 'd3-shape/src/area',
  line: 'd3-shape/src/line',
  pie: 'd3-shape/src/pie',
  areaRadial: 'd3-shape/src/areaRadial',
  lineRadial: 'd3-shape/src/lineRadial',
  pointRadial: 'd3-shape/src/pointRadial',
  linkHorizontal: ['d3-shape/src/link/index', { as: 'linkHorizontal' }],
  linkVertical: ['d3-shape/src/link/index', { as: 'linkVertical' }],
  linkRadial: ['d3-shape/src/link/index', { as: 'linkRadial' }],

  symbol: 'd3-shape/src/symbol',
  symbols: ['d3-shape/src/symbol', { as: 'symbols' }],
  symbolCircle: 'd3-shape/src/symbol/circle',
  symbolCross: 'd3-shape/src/symbol/cross',
  symbolDiamond: 'd3-shape/src/symbol/diamond',
  symbolSquare: 'd3-shape/src/symbol/square',
  symbolStar: 'd3-shape/src/symbol/star',
  symbolTriangle: 'd3-shape/src/symbol/triangle',
  symbolWye: 'd3-shape/src/symbol/wye',

  curveBasisClosed: 'd3-shape/src/curve/basisClosed',
  curveBasisOpen: 'd3-shape/src/curve/basisOpen',
  curveBasis: 'd3-shape/src/curve/basis',
  curveBundle: 'd3-shape/src/curve/bundle',
  curveCardinalClosed: 'd3-shape/src/curve/cardinalClosed',
  curveCardinalOpen: 'd3-shape/src/curve/cardinalOpen',
  curveCardinal: 'd3-shape/src/curve/cardinal',
  curveCatmullRomClosed: 'd3-shape/src/curve/catmullRomClosed',
  curveCatmullRomOpen: 'd3-shape/src/curve/catmullRomOpen',
  curveCatmullRom: 'd3-shape/src/curve/catmullRom',
  curveLinearClosed: 'd3-shape/src/curve/linearClosed',
  curveLinear: 'd3-shape/src/curve/linear',
  curveMonotoneX: ['d3-shape/src/curve/monotone', { as: 'monotoneX' }],
  curveMonotoneY: ['d3-shape/src/curve/monotone', { as: 'monotoneY' }],
  curveNatural: 'd3-shape/src/curve/natural',
  curveStep: 'd3-shape/src/curve/step',
  curveStepAfter: ['d3-shape/src/curve/step', { as: 'stepAfter' }],
  curveStepBefore: ['d3-shape/src/curve/step', { as: 'stepBefore' }],

  stack: 'd3-shape/src/stack',
  stackOffsetExpand: 'd3-shape/src/offset/expand',
  stackOffsetDiverging: 'd3-shape/src/offset/diverging',
  stackOffsetNone: 'd3-shape/src/offset/none',
  stackOffsetSilhouette: 'd3-shape/src/offset/silhouette',
  stackOffsetWiggle: 'd3-shape/src/offset/wiggle',
  stackOrderAppearance: 'd3-shape/src/order/appearance',
  stackOrderAscending: 'd3-shape/src/order/ascending',
  stackOrderDescending: 'd3-shape/src/order/descending',
  stackOrderInsideOut: 'd3-shape/src/order/insideOut',
  stackOrderNone: 'd3-shape/src/order/none',
  stackOrderReverse: 'd3-shape/src/order/reverse'
}

export default defaultD3Shape
