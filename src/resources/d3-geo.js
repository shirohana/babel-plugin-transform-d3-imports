// @flow
import type { NamedModuleImportMap } from '../typed'

const defaultD3Geo: NamedModuleImportMap = {
  geoArea: 'd3-geo/src/area',
  geoBounds: 'd3-geo/src/bounds',
  geoCentroid: 'd3-geo/src/centroid',
  geoCircle: 'd3-geo/src/circle',
  geoClipAntimeridian: 'd3-geo/src/clip/antimeridian',
  geoClipCircle: 'd3-geo/src/clip/circle',
  geoClipRectangle: 'd3-geo/src/clip/rectangle',
  geoContains: 'd3-geo/src/contains',
  geoDistance: 'd3-geo/src/distance',

  geoGraticule: 'd3-geo/src/graticule',
  geoGraticule10: ['d3-geo/src/graticule', { as: 'graticule10' }],

  geoInterpolate: 'd3-geo/src/interpolate',
  geoLength: 'd3-geo/src/length',
  geoPath: 'd3-geo/src/path/index',
  geoAlbers: 'd3-geo/src/projection/albers',
  geoAlbersUsa: 'd3-geo/src/projection/albersUsa',

  geoAzimuthalEqualArea: 'd3-geo/src/projection/azimuthalEqualArea',
  geoAzimuthalEqualAreaRaw: ['d3-geo/src/projection/azimuthalEqualArea', { as: 'azimuthalEqualAreaRaw' }],

  geoAzimuthalEquidistant: 'd3-geo/src/projection/azimuthalEquidistant',
  geoAzimuthalEquidistantRaw: ['d3-geo/src/projection/azimuthalEquidistant', { as: 'azimuthalEquidistantRaw' }],

  geoConicConformal: 'd3-geo/src/projection/conicConformal',
  geoConicConformalRaw: ['d3-geo/src/projection/conicConformal', { as: 'conicConformalRaw' }],

  geoConicEqualArea: 'd3-geo/src/projection/conicEqualArea',
  geoConicEqualAreaRaw: ['d3-geo/src/projection/conicEqualArea', { as: 'conicEqualAreaRaw' }],

  geoConicEquidistant: 'd3-geo/src/projection/conicEquidistant',
  geoConicEquidistantRaw: ['d3-geo/src/projection/conicEquidistant', { as: 'conicEquidistantRaw' }],

  geoEqualEarth: 'd3-geo/src/projection/equalEarth',
  geoEqualEarthRaw: ['d3-geo/src/projection/equalEarth', { as: 'equalEarthRaw' }],

  geoEquirectangular: 'd3-geo/src/projection/equirectangular',
  geoEquirectangularRaw: ['d3-geo/src/projection/equirectangular', { as: 'equirectangularRaw' }],

  geoGnomonic: 'd3-geo/src/projection/gnomonic',
  geoGnomonicRaw: ['d3-geo/src/projection/gnomonic', { as: 'gnomonicRaw' }],

  geoIdentity: 'd3-geo/src/projection/identity',

  geoProjection: 'd3-geo/src/projection/index',
  geoProjectionMutator: ['d3-geo/src/projection/index', { as: 'projectionMutator' }],

  geoMercator: 'd3-geo/src/projection/mercator',
  geoMercatorRaw: ['d3-geo/src/projection/mercator', { as: 'mercatorRaw' }],

  geoNaturalEarth1: 'd3-geo/src/projection/naturalEarth1',
  geoNaturalEarth1Raw: ['d3-geo/src/projection/naturalEarth1', { as: 'naturalEarth1Raw' }],

  geoOrthographic: 'd3-geo/src/projection/orthographic',
  geoOrthographicRaw: ['d3-geo/src/projection/orthographic', { as: 'orthographicRaw' }],

  geoStereographic: 'd3-geo/src/projection/stereographic',
  geoStereographicRaw: ['d3-geo/src/projection/stereographic', { as: 'stereographicRaw' }],

  geoTransverseMercator: 'd3-geo/src/projection/transverseMercator',
  geoTransverseMercatorRaw: ['d3-geo/src/projection/transverseMercator', { as: 'transverseMercatorRaw' }],

  geoRotation: 'd3-geo/src/rotation',
  geoStream: 'd3-geo/src/stream',
  geoTransform: 'd3-geo/src/transform'
}

export default defaultD3Geo
