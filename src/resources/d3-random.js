// @flow
import type { NamedModuleImportMap } from '../typed'

const defaultD3Random: NamedModuleImportMap = {
  randomUniform: 'd3-random/src/uniform',
  randomNormal: 'd3-random/src/normal',
  randomLogNormal: 'd3-random/src/logNormal',
  randomBates: 'd3-random/src/bates',
  randomIrwinHall: 'd3-random/src/irwinHall',
  randomExponential: 'd3-random/src/exponential'
}

export default defaultD3Random
