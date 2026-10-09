var e=`import { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import { W, H, colors } from './utils'
export const meta = {
  id: 'poincare-map',
  title: 'Poincaré Map',
  desc: 'Poincaré Map — a math & simulation chart visualization',
  category: 'Math & Simulation',
  component: 'PoincareMap',
  complexity: 'beginner',
  interactivity: ['none'],
  d3Api: ['d3-scale'],
  tags: ['math-&-simulation', 'poincare-map'],
}

export default function PoincareMap({ data: customData }) {
  const ref = useRef(null)
  useEffect(() => {
    const svg = d3.select(ref.current); svg.selectAll('*').remove()
    const DEFAULT_DATA = { steps: 5000, epsilon: 0.02 }
    const data = { ...DEFAULT_DATA, ...(customData && typeof customData === 'object' && !Array.isArray(customData) ? customData : {}) }
    const g = svg.append('g')
    const pts = []
    let x = 0, y = 0, z = 0
    for (let i = 0; i < data.steps; i++) {
      const dt = 0.01
      const dx = (y - x) * dt, dy = (x * (28 - z) - y) * dt, dz = (x * y - 8 / 3 * z) * dt
      x += dx; y += dy; z += dz
      if (z > 30 && i % 5 === 0) pts.push([x, y])
    }
    const xScale = d3.scaleLinear().domain(d3.extent(pts, d => d[0])).range([50, W - 40])
    const yScale = d3.scaleLinear().domain(d3.extent(pts, d => d[1])).range([H - 45, 35])
    pts.forEach(p => {
      g.append('circle').attr('cx', xScale(p[0])).attr('cy', yScale(p[1])).attr('r', 1.5)
        .attr('fill', colors[Math.floor(Math.random() * colors.length)]).attr('opacity', 0.6)
    })
    g.append('text').attr('x', W / 2).attr('y', H - 6).attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '7px').text('PoincareMap')
  }, [customData])
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />
}
`;export{e as default};