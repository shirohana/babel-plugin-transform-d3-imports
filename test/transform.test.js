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

test('named-import -> d3-default-export', t => {
  const a = 'import { arc } from "d3-shape"'
  const b = 'import arc from "d3-shape/src/arc";'
  t.is(b, t.context.transform(a))
})

test('named-import -> d3-named-export', t => {
  const a = 'import { linkHorizontal } from "d3-shape"'
  const b = 'import { linkHorizontal } from "d3-shape/src/link/index";'
  t.is(b, t.context.transform(a))
})

test('named-import -> d3-named-export with different name', t => {
  const a = 'import { curveMonotoneX } from "d3-shape"'
  const b = 'import { monotoneX as curveMonotoneX } from "d3-shape/src/curve/monotone";'
  t.is(b, t.context.transform(a))
})

test('named-as-import -> d3-default-export', t => {
  const a = 'import { arc as myD3Arc } from "d3-shape"'
  const b = 'import myD3Arc from "d3-shape/src/arc";'
  t.is(b, t.context.transform(a))
})

test('named-as-import -> d3-named-export', t => {
  const a = 'import { linkHorizontal as lih } from "d3-shape"'
  const b = 'import { linkHorizontal as lih } from "d3-shape/src/link/index";'
  t.is(b, t.context.transform(a))
})

test('named-as-import -> d3-named-export with different name', t => {
  const a = 'import { curveMonotoneX as cmx } from "d3-shape"'
  const b = 'import { monotoneX as cmx } from "d3-shape/src/curve/monotone";'
  t.is(b, t.context.transform(a))
})

test('Mixed named-import -> { d3-default-export, d3-named-export }', t => {
  const a = 'import { color, rgb, hsl } from "d3-color"'
  const b = 'import color, { rgb, hsl } from "d3-color/src/color";'
  t.is(b, t.context.transform(a))
})

test('Multiple named-import targets -> d3-default-export', t => {
  const a = 'import { arc, area, line, pie } from "d3-shape"'
  const b = 'import arc from "d3-shape/src/arc";\nimport area from "d3-shape/src/area";\nimport line from "d3-shape/src/line";\nimport pie from "d3-shape/src/pie";'
  t.is(b, t.context.transform(a))
})

test('Don\'t parse when import default values', t => {
  const a = 'import shape, { arc } from "d3-shape"'
  const b = 'import shape, { arc } from "d3-shape";'
  t.is(b, t.context.transform(a))
})

test('Don\'t parse when import unknown values', t => {
  const a = 'import { __unknown__ } from "d3-shape"'
  const b = 'import { __unknown__ } from "d3-shape";'
  t.is(b, t.context.transform(a))
})
