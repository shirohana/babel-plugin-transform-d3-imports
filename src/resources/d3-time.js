// @flow
import type { NamedModuleImportMap } from '../typed'

const defaultD3Time: NamedModuleImportMap = {
  timeInterval: 'd3-time/src/interval',
  timeMillisecond: 'd3-time/src/millisecond',
  timeMilliseconds: ['d3-time/src/millisecond', { as: 'milliseconds' }],
  utcMillisecond: 'd3-time/src/millisecond',
  utcMilliseconds: ['d3-time/src/millisecond', { as: 'milliseconds' }],

  timeSecond: 'd3-time/src/second',
  timeSeconds: ['d3-time/src/second', { as: 'seconds' }],
  utcSecond: 'd3-time/src/second',
  utcSeconds: ['d3-time/src/second', { as: 'seconds' }],

  timeMinute: 'd3-time/src/minute',
  timeMinutes: ['d3-time/src/minute', { as: 'minutes' }],

  timeHour: 'd3-time/src/hour',
  timeHours: ['d3-time/src/hour', { as: 'hours' }],

  timeDay: 'd3-time/src/day',
  timeDays: ['d3-time/src/day', { as: 'days' }],

  timeWeek: ['d3-time/src/week', { as: 'sunday' }],
  timeWeeks: ['d3-time/src/week', { as: 'sundays' }],
  timeSunday: ['d3-time/src/week', { as: 'sunday' }],
  timeSundays: ['d3-time/src/week', { as: 'sundays' }],
  timeMonday: ['d3-time/src/week', { as: 'monday' }],
  timeMondays: ['d3-time/src/week', { as: 'mondays' }],
  timeTuesday: ['d3-time/src/week', { as: 'tuesday' }],
  timeTuesdays: ['d3-time/src/week', { as: 'tuesdays' }],
  timeWednesday: ['d3-time/src/week', { as: 'wednesday' }],
  timeWednesdays: ['d3-time/src/week', { as: 'wednesdays' }],
  timeThursday: ['d3-time/src/week', { as: 'thursday' }],
  timeThursdays: ['d3-time/src/week', { as: 'thursdays' }],
  timeFriday: ['d3-time/src/week', { as: 'friday' }],
  timeFridays: ['d3-time/src/week', { as: 'fridays' }],
  timeSaturday: ['d3-time/src/week', { as: 'saturday' }],
  timeSaturdays: ['d3-time/src/week', { as: 'saturdays' }],

  timeMonth: 'd3-time/src/month',
  timeMonths: ['d3-time/src/month', { as: 'months' }],

  timeYear: 'd3-time/src/year',
  timeYears: ['d3-time/src/year', { as: 'years' }],

  utcMinute: 'd3-time/src/utcMinute',
  utcMinutes: ['d3-time/src/utcMinute', { as: 'utcMinutes' }],

  utcHour: 'd3-time/src/utcHour',
  utcHours: ['d3-time/src/utcHour', { as: 'utcHours' }],

  utcDay: 'd3-time/src/utcDay',
  utcDays: ['d3-time/src/utcDay', { as: 'utcDays' }],

  utcWeek: ['d3-time/src/utcWeek', { as: 'utcSunday' }],
  utcWeeks: ['d3-time/src/utcWeek', { as: 'utcSundays' }],
  utcSunday: ['d3-time/src/utcWeek', { as: 'utcSunday' }],
  utcSundays: ['d3-time/src/utcWeek', { as: 'utcSundays' }],
  utcMonday: ['d3-time/src/utcWeek', { as: 'utcMonday' }],
  utcMondays: ['d3-time/src/utcWeek', { as: 'utcMondays' }],
  utcTuesday: ['d3-time/src/utcWeek', { as: 'utcTuesday' }],
  utcTuesdays: ['d3-time/src/utcWeek', { as: 'utcTuesdays' }],
  utcWednesday: ['d3-time/src/utcWeek', { as: 'utcWednesday' }],
  utcWednesdays: ['d3-time/src/utcWeek', { as: 'utcWednesdays' }],
  utcThursday: ['d3-time/src/utcWeek', { as: 'utcThursday' }],
  utcThursdays: ['d3-time/src/utcWeek', { as: 'utcThursdays' }],
  utcFriday: ['d3-time/src/utcWeek', { as: 'utcFriday' }],
  utcFridays: ['d3-time/src/utcWeek', { as: 'utcFridays' }],
  utcSaturday: ['d3-time/src/utcWeek', { as: 'utcSaturday' }],
  utcSaturdays: ['d3-time/src/utcWeek', { as: 'utcSaturdays' }],

  utcMonth: 'd3-time/src/utcMonth',
  utcMonths: ['d3-time/src/utcMonth', { as: 'utcMonths' }],

  utcYear: 'd3-time/src/utcYear',
  utcYears: ['d3-time/src/utcYear', { as: 'utcYears' }]
}

export default defaultD3Time
