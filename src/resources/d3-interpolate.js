// @flow
import type { NamedModuleImportMap } from '../typed'

const defaultD3Interpolate: NamedModuleImportMap = {
  interpolate: 'd3-interpolate/src/value',
  interpolateArray: 'd3-interpolate/src/array',
  interpolateBasis: 'd3-interpolate/src/basis',
  interpolateBasisClosed: 'd3-interpolate/src/basisClosed',
  interpolateDate: 'd3-interpolate/src/date',
  interpolateDiscrete: 'd3-interpolate/src/discrete',
  interpolateHue: 'd3-interpolate/src/hue',
  interpolateNumber: 'd3-interpolate/src/number',
  interpolateObject: 'd3-interpolate/src/object',
  interpolateRound: 'd3-interpolate/src/round',
  interpolateString: 'd3-interpolate/src/string',

  interpolateTransformCss: ['d3-interpolate/src/transform/index', { as: 'interpolateTransformCss' }],
  interpolateTransformSvg: ['d3-interpolate/src/transform/index', { as: 'interpolateTransformSvg' }],

  interpolateZoom: 'd3-interpolate/src/zoom',

  interpolateRgb: 'd3-interpolate/src/rgb',
  interpolateRgbBasis: ['d3-interpolate/src/rgb', { as: 'rgbBasis' }],
  interpolateRgbBasisClosed: ['d3-interpolate/src/rgb', { as: 'rgbBasisClosed' }],

  interpolateHsl: 'd3-interpolate/src/hsl',
  interpolateHslLong: ['d3-interpolate/src/hsl', { as: 'hslLong' }],

  interpolateLab: 'd3-interpolate/src/lab',

  interpolateHcl: 'd3-interpolate/src/hcl',
  interpolateHclLong: ['d3-interpolate/src/hcl', { as: 'hclLong' }],

  interpolateCubehelix: 'd3-interpolate/src/cubehelix',
  interpolateCubehelixLong: ['d3-interpolate/src/cubehelix', { as: 'cubehelixLong' }],

  piecewise: 'd3-interpolate/src/piecewise',
  quantize: 'd3-interpolate/src/quantize'
}

export default defaultD3Interpolate
