var e=`import { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import { W, H, colors } from './utils'
export const meta = {
  id: 'lorenz-attractor',
  title: 'Lorenz Attractor',
  desc: 'Lorenz Attractor — a math & simulation chart visualization',
  category: 'Math & Simulation',
  component: 'LorenzAttractor',
  complexity: 'beginner',
  interactivity: ['none'],
  d3Api: ['d3-scale'],
  tags: ['math-&-simulation', 'lorenz-attractor'],
}

export default function LorenzAttractor({ data: customData }) {
  const ref = useRef(null)
  useEffect(() => {
    const svg = d3.select(ref.current); svg.selectAll('*').remove()
    const DEFAULT_DATA = { sigma: 10, rho: 28, beta: 2.667, steps: 2500, dt: 0.008 }
    const data = { ...DEFAULT_DATA, ...(customData && typeof customData === 'object' && !Array.isArray(customData) ? customData : {}) }
    const g = svg.append('g')
    let x = 0.1, y = 0, z = 0
    const pts = []
    for (let i = 0; i < data.steps; i++) {
      const dx = data.sigma * (y - x) * data.dt
      const dy = (x * (data.rho - z) - y) * data.dt
      const dz = (x * y - data.beta * z) * data.dt
      x += dx; y += dy; z += dz
      if (i > 100 && isFinite(x)) pts.push([x, z])
    }
    if (pts.length > 1) {
      const xScale = d3.scaleLinear().domain(d3.extent(pts, d => d[0])).range([60, W - 40])
      const yScale = d3.scaleLinear().domain(d3.extent(pts, d => d[1])).range([H - 50, 40])
      g.append('path')
        .attr('d', 'M' + pts.map(p => \`\${xScale(p[0])},\${yScale(p[1])}\`).join('L'))
        .attr('fill', 'none').attr('stroke', colors[0]).attr('stroke-width', 0.8).attr('opacity', 0.7)
    }
    g.append('text').attr('x', W / 2).attr('y', H - 6).attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '7px').text('LorenzAttractor')
  }, [customData])
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />
}
`;export{e as default};