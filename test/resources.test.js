import test from 'ava'

test.before(t => {
  const { D3Modules, AvailableD3Modules } = require('../lib/resources/index.js')
  t.context = { D3Modules, AvailableD3Modules }
})

test('ResourceProxy should forward correctly', t => {
  const { D3Modules, AvailableD3Modules } = t.context
  t.plan(AvailableD3Modules.length)
  AvailableD3Modules.forEach(m => {
    t.is(D3Modules[m], require(`../lib/resources/${m}.js`))
  })
})

test('Every D3 source must exists', t => {
  const { D3Modules, AvailableD3Modules } = t.context
  AvailableD3Modules.forEach(m => {
    Object.values(D3Modules[m]).forEach(source => {
      const d3Source = typeof source === 'string' ? source : source[0]
      t.notThrows(() => {
        require.resolve(d3Source)
      }, `Unavailable source: '${m}' -> '${source}'`)
    })
  })
})

test('Every named-exports should be valid identifier', t => {
  const { D3Modules, AvailableD3Modules } = t.context
  AvailableD3Modules.forEach(m => {
    Object.entries(D3Modules[m])
      .filter(([k, v]) => Array.isArray(v))
      .forEach(([k, v]) => {
        const { as } = v[1]
        return t.true(
          /^[a-z]\w+$/.test(as),
          `Invalid named-exports: '${m}' -> { ${k}: [..., { as: '${as}' }] }`
        )
      })
  })
})

test('Every exported D3 value must exists', t => {
  const { D3Modules, AvailableD3Modules } = t.context
  AvailableD3Modules.forEach(m => {
    t.notThrows(() => {
      const d3Module = require(m)
      Object.keys(D3Modules[m]).forEach(exported => {
        t.true(d3Module[exported] !== undefined, `\`require('${m}').${exported}\` is undefined`)
      })
    }, `Failed to require('${m}')`)
  })
})

test('Try to access unknown module', t => {
  const { D3Modules } = t.context
  const name = '__UNKNOWN_MODULE__'
  t.is(null, D3Modules[name])
})
