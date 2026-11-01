var e=`import { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import { W, H, colors } from './utils'
export const meta = {
  id: 'phase-space',
  title: 'Phase Space',
  desc: 'Phase Space — a math & simulation chart visualization',
  category: 'Math & Simulation',
  component: 'PhaseSpace',
  complexity: 'beginner',
  interactivity: ['none'],
  d3Api: ['d3-scale'],
  tags: ['math-&-simulation', 'phase-space'],
}

export default function PhaseSpace({ data: customData }) {
  const ref = useRef(null)
  useEffect(() => {
    const svg = d3.select(ref.current); svg.selectAll('*').remove()
    const DEFAULT_DATA = { steps: 2000, x0: 0.1, y0: 0.1, mu: 0.5, nu: 0.2 }
    const data = { ...DEFAULT_DATA, ...(customData && typeof customData === 'object' && !Array.isArray(customData) ? customData : {}) }
    const g = svg.append('g')
    const pts = []
    let x = data.x0, y = data.y0
    for (let i = 0; i < data.steps; i++) {
      const dx = y, dy = data.mu * x - data.nu * x * x - y
      x += dx * 0.01; y += dy * 0.01
      pts.push([x, y])
    }
    const xScale = d3.scaleLinear().domain(d3.extent(pts, d => d[0])).range([50, W - 40])
    const yScale = d3.scaleLinear().domain(d3.extent(pts, d => d[1])).range([H - 45, 35])
    g.append('path').attr('d', 'M' + pts.map(p => \`\${xScale(p[0])},\${yScale(p[1])}\`).join('L'))
      .attr('fill', 'none').attr('stroke', colors[5]).attr('stroke-width', 1).attr('opacity', 0.8)
    g.append('text').attr('x', W / 2).attr('y', H - 6).attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '7px').text('PhaseSpace')
  }, [customData])
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />
}
`;export{e as default};