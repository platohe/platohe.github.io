var e=`import { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import { W, H, colors } from './utils'
export const meta = {
  id: 'lotka-volterra',
  title: 'Lotka-Volterra',
  desc: 'Lotka-Volterra — a math & simulation chart visualization',
  category: 'Math & Simulation',
  component: 'LotkaVolterra',
  complexity: 'beginner',
  interactivity: ['none'],
  d3Api: ['d3-scale'],
  tags: ['math-&-simulation', 'lotka-volterra'],
}

export default function LotkaVolterra({ data: customData }) {
  const ref = useRef(null)
  useEffect(() => {
    const svg = d3.select(ref.current); svg.selectAll('*').remove()
    const DEFAULT_DATA = { steps: 1500, dt: 0.02, alpha: 1.1, beta: 0.4, delta: 0.1, gamma: 0.4 }
    const data = { ...DEFAULT_DATA, ...(customData && typeof customData === 'object' && !Array.isArray(customData) ? customData : {}) }
    const g = svg.append('g')
    let prey = 40, pred = 9
    const preyPath = [], predPath = []
    for (let i = 0; i < data.steps; i++) {
      const dPrey = (data.alpha * prey - data.beta * prey * pred) * data.dt
      const dPred = (data.delta * prey * pred - data.gamma * pred) * data.dt
      prey += dPrey; pred += dPred
      if (prey > 0 && pred > 0) {
        preyPath.push([i * 0.15, prey])
        predPath.push([i * 0.15, pred])
      }
    }
    const xScale = d3.scaleLinear().domain([0, data.steps * 0.15]).range([50, W - 30])
    const yScale = d3.scaleLinear().domain([0, d3.max([...preyPath, ...predPath], d => d[1]) * 1.1]).range([H - 45, 35])
    g.append('path').attr('d', 'M' + preyPath.map(d => \`\${xScale(d[0])},\${yScale(d[1])}\`).join('L'))
      .attr('fill', 'none').attr('stroke', colors[0]).attr('stroke-width', 1.5)
    g.append('path').attr('d', 'M' + predPath.map(d => \`\${xScale(d[0])},\${yScale(d[1])}\`).join('L'))
      .attr('fill', 'none').attr('stroke', colors[1]).attr('stroke-width', 1.5)
    g.append('text').attr('x', W / 2).attr('y', H - 6).attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '7px').text('LotkaVolterra')
  }, [customData])
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />
}
`;export{e as default};