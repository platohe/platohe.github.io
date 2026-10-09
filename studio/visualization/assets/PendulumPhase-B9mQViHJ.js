var e=`import { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import { W, H, colors } from './utils'
export const meta = {
  id: 'pendulum-phase',
  title: 'Pendulum Phase',
  desc: 'Pendulum Phase — a math & simulation chart visualization',
  category: 'Math & Simulation',
  component: 'PendulumPhase',
  complexity: 'beginner',
  interactivity: ['none'],
  d3Api: ['d3-scale'],
  tags: ['math-&-simulation', 'pendulum-phase'],
}

export default function PendulumPhase({ data: customData }) {
  const ref = useRef(null)
  useEffect(() => {
    const svg = d3.select(ref.current); svg.selectAll('*').remove()
    const DEFAULT_DATA = { steps: 800, theta0: 2.5, omega0: 0, damping: 0.05 }
    const data = { ...DEFAULT_DATA, ...(customData && typeof customData === 'object' && !Array.isArray(customData) ? customData : {}) }
    const g = svg.append('g')
    const pts = []
    let theta = data.theta0, omega = data.omega0
    const dt = 0.03
    for (let i = 0; i < data.steps; i++) {
      const alpha = -3 * Math.sin(theta) - data.damping * omega
      theta += omega * dt
      omega += alpha * dt
      pts.push([theta, omega])
    }
    const xScale = d3.scaleLinear().domain([-Math.PI * 1.5, Math.PI * 1.5]).range([40, W - 30])
    const yScale = d3.scaleLinear().domain(d3.extent(pts, d => d[1])).range([H - 45, 35])
    g.append('path').attr('d', 'M' + pts.map(p => \`\${xScale(p[0])},\${yScale(p[1])}\`).join('L'))
      .attr('fill', 'none').attr('stroke', colors[4]).attr('stroke-width', 1).attr('opacity', 0.8)
    g.append('text').attr('x', W / 2).attr('y', H - 6).attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '7px').text('PendulumPhase')
  }, [customData])
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />
}
`;export{e as default};