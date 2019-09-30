// @flow
import type {
  NamedModuleImportMap
} from '../typed'

// We hardcode these predictable modules' name into string array
// can improve performance that it can ensure that module would be exists
// without readdir, and no more try-catches
export const AvailableD3Modules = [
  'd3-array',
  'd3-axis',
  'd3-brush',
  'd3-chord',
  'd3-collection',
  'd3-color',
  'd3-contour',
  'd3-dispatch',
  'd3-drag',
  'd3-dsv',
  'd3-ease',
  'd3-fetch',
  'd3-force',
  'd3-format',
  'd3-geo',
  'd3-hierarchy',
  'd3-interpolate',
  'd3-path',
  'd3-polygon',
  'd3-quadtree',
  'd3-random',
  'd3-scale-chromatic',
  'd3-scale',
  'd3-selection',
  'd3-shape',
  'd3-time-format',
  'd3-time',
  'd3-timer',
  'd3-transition',
  'd3-voronoi',
  'd3-zoom'
]

export const D3Modules: {
  [string]: NamedModuleImportMap
} = new Proxy({}, {
  get (obj, prop) {
    if (prop in obj) {
      return obj[prop]
    } else {
      /* istanbul ignore if */
      if (AvailableD3Modules.indexOf(prop) < 0) {
        return null
      } else {
        // $FlowFixMe
        obj[prop] = require(`./${prop}`)
        return obj[prop]
      }
    }
  }
})
