import { arc, pie } from 'd3-shape'
import { create } from 'd3-selection'
import { scaleOrdinal } from 'd3-scale'
import { schemePastel1 } from 'd3-scale-chromatic'

const CANVAS_HEIGHT = 480
const CANVAS_WIDTH = 640
const randInt = (min, max) => min + ~~((max - min) * Math.random())

export default function App () {
  const arcGenerator = do {
    const r = Math.sqrt(200**2, 140**2)
    arc()
      .outerRadius(200)
      .innerRadius(140)
      .padRadius(r)
      .padAngle(5 / r)
  }

  const data = do {
    const randIntList = Array(5).fill(0).map(() => randInt(3, 8))
    const pieLayout = pie()
      .value(d => d)
      .sort(null)
    pieLayout(randIntList).map((d) => {
      d.centroid = arcGenerator.centroid(d)
      return d
    })
  }

  const color = scaleOrdinal(schemePastel1)

  const svg = create('svg')
    .attr('viewBox', [
      -0.5 * CANVAS_WIDTH,
      -0.5 * CANVAS_HEIGHT,
      CANVAS_WIDTH,
      CANVAS_HEIGHT,
    ].join(' '))

  svg.append('g')
    .selectAll('path')
    .data(data)
    .join('path')
      .attr('fill', (d, i) => color(i))
      .attr('d', arcGenerator)

  svg.append('g')
    .attr('fill', '#fff')
    .attr('font-size', '16')
    .attr('text-anchor', 'middle')
    .selectAll('text')
    .data(data)
    .join('text')
      .attr('x', d => d.centroid[0])
      .attr('y', d => d.centroid[1])
      .attr('dy', '0.32em')
      .text(d => d.value)

  return svg.node()
}
