import test from 'ava'

test.before(t => {
  const Babel = require('@babel/core')

  function transform (code, opts) {
    const transformed = Babel.transform(code, {
      configFile: false,
      presets: [['@babel/preset-env', { modules: false }]],
      plugins: [[require('../lib/index'), opts]]
    })
    return transformed.code
  }

  t.context = { transform }
})

test('(d3-array)', t => {
  const a = 'import { bisect, bisectLeft, bisectRight } from "d3-array"'
  const b = 'import bisect, { bisectLeft, bisectRight } from "d3-array/src/bisect";'
  t.is(b, t.context.transform(a))
})

test('(d3-axis)', t => {
  const a = 'import { axisTop, axisRight, axisBottom, axisLeft } from "d3-axis"'
  const b = 'import { axisTop, axisRight, axisBottom, axisLeft } from "d3-axis/src/axis";'
  t.is(b, t.context.transform(a))
})

test('(d3-brush)', t => {
  const a = 'import { brush, brushX, brushY } from "d3-axis"'
  const b = 'import { brush, brushX, brushY } from "d3-axis";'
  t.is(b, t.context.transform(a))
})

test('(d3-chord)', t => {
  const a = 'import { chord, ribbon } from "d3-chord"'
  const b = [
    'import chord from "d3-chord/src/chord";',
    'import ribbon from "d3-chord/src/ribbon";'
  ].join('\n')
  t.is(b, t.context.transform(a))
})

test('(d3-collection) [deprecated], didn\'t test', t => {
  t.pass()
})

test('(d3-color)', t => {
  const a = 'import { color, rgb, hsl, lab, hcl, lch, gray, cubehelix } from "d3-color"'
  const b = [
    'import color, { rgb, hsl } from "d3-color/src/color";',
    'import lab, { hcl, lch, gray } from "d3-color/src/lab";',
    'import cubehelix from "d3-color/src/cubehelix";'
  ].join('\n')
  t.is(b, t.context.transform(a))
})

test('(d3-contour)', t => {
  const a = 'import { contours, contourDensity } from "d3-contour"'
  const b = [
    'import contours from "d3-contour/src/contours";',
    'import contourDensity from "d3-contour/src/density";'
  ].join('\n')
  t.is(b, t.context.transform(a))
})

test('(d3-dispatch)', t => {
  const a = 'import { dispatch } from "d3-dispatch"'
  const b = 'import dispatch from "d3-dispatch/src/dispatch";'
  t.is(b, t.context.transform(a))
})

test('(d3-drag)', t => {
  const a = 'import { drag, dragDisable, dragEnable } from "d3-drag"'
  const b = [
    'import drag from "d3-drag/src/drag";',
    'import dragDisable, { yesdrag as dragEnable } from "d3-drag/src/nodrag";'
  ].join('\n')
  t.is(b, t.context.transform(a))
})

test('(d3-dsv)', t => {
  const a = 'import { csvParse, csvFormat, tsvFormatValue } from "d3-dsv"'
  const b = [
    'import { csvParse, csvFormat } from "d3-dsv/src/csv";',
    'import { tsvFormatValue } from "d3-dsv/src/tsv";'
  ].join('\n')
  t.is(b, t.context.transform(a))
})

test('(d3-ease)', t => {
  const a = 'import { easeLinear, easeCubicIn, easeCubicOut } from "d3-ease"'
  const b = [
    'import { linear as easeLinear } from "d3-ease/src/linear";',
    'import { cubicIn as easeCubicIn, cubicOut as easeCubicOut } from "d3-ease/src/cubic";'
  ].join('\n')
  t.is(b, t.context.transform(a))
})

test('(d3-fetch)', t => {
  const a = 'import { csv, json, svg } from "d3-fetch"'
  const b = [
    'import { csv } from "d3-fetch/src/dsv";',
    'import json from "d3-fetch/src/json";',
    'import { svg } from "d3-fetch/src/xml";'
  ].join('\n')
  t.is(b, t.context.transform(a))
})

test('(d3-force)', t => {
  const a = 'import { forceX, forceY } from "d3-force"'
  const b = [
    'import forceX from "d3-force/src/x";',
    'import forceY from "d3-force/src/y";'
  ].join('\n')
  t.is(b, t.context.transform(a))
})

test('(d3-format)', t => {
  const a = 'import { format, formatPrefix, precisionFixed } from "d3-format"'
  const b = [
    'import { format, formatPrefix } from "d3-format/src/defaultLocale";',
    'import precisionFixed from "d3-format/src/precisionFixed";'
  ].join('\n')
  t.is(b, t.context.transform(a))
})

test('(d3-geo)#001', t => {
  const a = 'import { geoArea, geoBounds, geoDistance, geoTransform } from "d3-geo"'
  const b = [
    'import geoArea from "d3-geo/src/area";',
    'import geoBounds from "d3-geo/src/bounds";',
    'import geoDistance from "d3-geo/src/distance";',
    'import geoTransform from "d3-geo/src/transform";'
  ].join('\n')
  t.is(b, t.context.transform(a))
})

test('(d3-geo)#002', t => {
  const a = 'import { geoOrthographic, geoOrthographicRaw } from "d3-geo"'
  const b = 'import geoOrthographic, { orthographicRaw as geoOrthographicRaw } from "d3-geo/src/projection/orthographic";'
  t.is(b, t.context.transform(a))
})

test('(d3-hierarchy)', t => {
  const a = 'import { cluster, hierarchy, treemapSquarify } from "d3-hierarchy"'
  const b = [
    'import cluster from "d3-hierarchy/src/cluster";',
    'import hierarchy from "d3-hierarchy/src/hierarchy/index";',
    'import treemapSquarify from "d3-hierarchy/src/treemap/squarify";'
  ].join('\n')
  t.is(b, t.context.transform(a))
})

test('(d3-interpolate)', t => {
  const a = 'import { interpolate, interpolateArray, interpolateNumberArray } from "d3-interpolate"'
  const b = [
    'import interpolate from "d3-interpolate/src/value";',
    'import interpolateArray from "d3-interpolate/src/array";',
    'import interpolateNumberArray from "d3-interpolate/src/numberArray";'
  ].join('\n')
  t.is(b, t.context.transform(a))
})

test('(d3-path)', t => {
  const a = 'import { path } from "d3-path"'
  const b = 'import path from "d3-path/src/path";'
  t.is(b, t.context.transform(a))
})

test('(d3-polygon)', t => {
  const a = 'import { polygonArea, polygonCentroid } from "d3-polygon"'
  const b = [
    'import polygonArea from "d3-polygon/src/area";',
    'import polygonCentroid from "d3-polygon/src/centroid";'
  ].join('\n')
  t.is(b, t.context.transform(a))
})

test('(d3-quadtree)', t => {
  const a = 'import { quadtree } from "d3-quadtree"'
  const b = 'import quadtree from "d3-quadtree/src/quadtree";'
  t.is(b, t.context.transform(a))
})

test('(d3-random)', t => {
  const a = 'import { randomUniform } from "d3-random"'
  const b = 'import randomUniform from "d3-random/src/uniform";'
  t.is(b, t.context.transform(a))
})

test('(d3-scale-chromatic)', t => {
  const a = 'import { schemeCategory10, schemeSet1 } from "d3-scale-chromatic"'
  const b = [
    'import schemeCategory10 from "d3-scale-chromatic/src/categorical/category10";',
    'import schemeSet1 from "d3-scale-chromatic/src/categorical/Set1";'
  ].join('\n')
  t.is(b, t.context.transform(a))
})

test('(d3-scale)', t => {
  const a = 'import { scaleBand, scaleSqrt } from "d3-scale"'
  const b = [
    'import scaleBand from "d3-scale/src/band";',
    'import { sqrt as scaleSqrt } from "d3-scale/src/pow";'
  ].join('\n')
  t.is(b, t.context.transform(a))
})

test('(d3-selection)', t => {
  const a = 'import { select, create, creator, event } from "d3-selection"'
  const b = [
    'import select from "d3-selection/src/select";',
    'import create from "d3-selection/src/create";',
    'import creator from "d3-selection/src/creator";',
    'import { event } from "d3-selection/src/selection/on";'
  ].join('\n')
  t.is(b, t.context.transform(a))
})

test('(d3-shape)', t => {
  const a = 'import { curveLinear, curveMonotoneX, curveMonotoneY } from "d3-shape"'
  const b = [
    'import curveLinear from "d3-shape/src/curve/linear";',
    'import { monotoneX as curveMonotoneX, monotoneY as curveMonotoneY } from "d3-shape/src/curve/monotone";'
  ].join('\n')
  t.is(b, t.context.transform(a))
})

test('(d3-time-format)', t => {
  const a = 'import { timeFormat, timeFormatLocale } from "d3-time-format"'
  const b = [
    'import { timeFormat } from "d3-time-format/src/defaultLocale";',
    'import timeFormatLocale from "d3-time-format/src/locale";'
  ].join('\n')
  t.is(b, t.context.transform(a))
})

test('(d3-time)', t => {
  const a = 'import { timeInterval, utcSecond, utcSeconds } from "d3-time"'
  const b = [
    'import timeInterval from "d3-time/src/interval";',
    'import utcSecond, { seconds as utcSeconds } from "d3-time/src/second";'
  ].join('\n')
  t.is(b, t.context.transform(a))
})

test('(d3-timer)', t => {
  const a = 'import { now, timer, timeout } from "d3-timer"'
  const b = [
    'import { now, timer } from "d3-timer/src/timer";',
    'import timeout from "d3-timer/src/timeout";'
  ].join('\n')
  t.is(b, t.context.transform(a))
})

test('(d3-transition) Polyfilled into d3-selection, didn\'t optimized', t => {
  const a = 'import { transition, active, interrupt } from "d3-transition"'
  const b = 'import { transition, active, interrupt } from "d3-transition/src/index";'
  t.is(b, t.context.transform(a))
})

test('(d3-voronoi)', t => {
  const a = 'import { voronoi } from "d3-voronoi"'
  const b = 'import voronoi from "d3-voronoi/src/voronoi";'
  t.is(b, t.context.transform(a))
})

test('(d3-zoom)', t => {
  const a = 'import { zoom, zoomTransform, zoomIdentity } from "d3-zoom"'
  const b = [
    'import zoom from "d3-zoom/src/zoom";',
    'import zoomTransform, { identity as zoomIdentity } from "d3-zoom/src/transform";'
  ].join('\n')
  t.is(b, t.context.transform(a))
})
