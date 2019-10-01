import test from 'ava'

test('No syntax error in index', t => {
  require('../lib/index.js')
  t.pass()
})

test('No syntax error in all resources', t => {
  const res = require('../lib/resources/index.js')
  t.plan(res.AvailableD3Modules.length)
  res.AvailableD3Modules.forEach(m => {
    t.notThrows(() => require(`../lib/resources/${m}.js`))
  })
})
