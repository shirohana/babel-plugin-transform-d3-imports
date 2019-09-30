// @flow
import type { NamedModuleImportMap } from '../typed'

const defaultD3Ease: NamedModuleImportMap = {
  easeLinear: ['d3-ease/src/linear', { as: 'linear' }],

  easeQuad: ['d3-ease/src/quad', { as: 'quadInOut' }],
  easeQuadIn: ['d3-ease/src/quad', { as: 'quadIn' }],
  easeQuadOut: ['d3-ease/src/quad', { as: 'quadOut' }],
  easeQuadInOut: ['d3-ease/src/quad', { as: 'quadInOut' }],

  easeCubic: ['d3-ease/src/cubic', { as: 'cubicInOut' }],
  easeCubicIn: ['d3-ease/src/cubic', { as: 'cubicIn' }],
  easeCubicOut: ['d3-ease/src/cubic', { as: 'cubicOut' }],
  easeCubicInOut: ['d3-ease/src/cubic', { as: 'cubicInOut' }],

  easePoly: ['d3-ease/src/poly', { as: 'polyInOut' }],
  easePolyIn: ['d3-ease/src/poly', { as: 'polyIn' }],
  easePolyOut: ['d3-ease/src/poly', { as: 'polyOut' }],
  easePolyInOut: ['d3-ease/src/poly', { as: 'polyInOut' }],

  easeSin: ['d3-ease/src/sin', { as: 'sinInOut' }],
  easeSinIn: ['d3-ease/src/sin', { as: 'sinIn' }],
  easeSinOut: ['d3-ease/src/sin', { as: 'sinOut' }],
  easeSinInOut: ['d3-ease/src/sin', { as: 'sinInOut' }],

  easeExp: ['d3-ease/src/exp', { as: 'expInOut' }],
  easeExpIn: ['d3-ease/src/exp', { as: 'expIn' }],
  easeExpOut: ['d3-ease/src/exp', { as: 'expOut' }],
  easeExpInOut: ['d3-ease/src/exp', { as: 'expInOut' }],

  easeCircle: ['d3-ease/src/circle', { as: 'circleInOut' }],
  easeCircleIn: ['d3-ease/src/circle', { as: 'circleIn' }],
  easeCircleOut: ['d3-ease/src/circle', { as: 'circleOut' }],
  easeCircleInOut: ['d3-ease/src/circle', { as: 'circleInOut' }],

  easeBounce: ['d3-ease/src/bounce', { as: 'bounceOut' }],
  easeBounceIn: ['d3-ease/src/bounce', { as: 'bounceIn' }],
  easeBounceOut: ['d3-ease/src/bounce', { as: 'bounceOut' }],
  easeBounceInOut: ['d3-ease/src/bounce', { as: 'bounceInOut' }],

  easeBack: ['d3-ease/src/back', { as: 'backInOut' }],
  easeBackIn: ['d3-ease/src/back', { as: 'backIn' }],
  easeBackOut: ['d3-ease/src/back', { as: 'backOut' }],
  easeBackInOut: ['d3-ease/src/back', { as: 'backInOut' }],

  easeElastic: ['d3-ease/src/elastic', { as: 'elasticOut' }],
  easeElasticIn: ['d3-ease/src/elastic', { as: 'elasticIn' }],
  easeElasticOut: ['d3-ease/src/elastic', { as: 'elasticOut' }],
  easeElasticInOut: ['d3-ease/src/elastic', { as: 'elasticInOut' }]
}

export default defaultD3Ease
