// @flow
import type { NamedModuleImportMap } from '../typed'

const defaultD3Timer: NamedModuleImportMap = {
  now: ['d3-timer/src/timer', { as: 'now' }],
  timer: ['d3-timer/src/timer', { as: 'timer' }],
  timerFlush: ['d3-timer/src/timer', { as: 'timerFlush' }],
  timeout: 'd3-timer/src/timeout',
  interval: 'd3-timer/src/interval'
}

export default defaultD3Timer
