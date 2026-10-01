var e=`import { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import { W, H, colors } from './utils'
export const meta = {
  id: 'heat-equation',
  title: 'Heat Equation',
  desc: 'Heat Equation — a math & simulation chart visualization',
  category: 'Math & Simulation',
  component: 'HeatEquation',
  complexity: 'beginner',
  interactivity: ['none'],
  d3Api: ['d3-scale'],
  tags: ['math-&-simulation', 'heat-equation'],
}

export default function HeatEquation({ data: customData }) {
  const ref = useRef(null)
  useEffect(() => {
    const svg = d3.select(ref.current); svg.selectAll('*').remove()
    const DEFAULT_DATA = { steps: 100, alpha: 0.25 }
    const data = { ...DEFAULT_DATA, ...(customData && typeof customData === 'object' && !Array.isArray(customData) ? customData : {}) }
    const g = svg.append('g')
    const n = 40
    let grid = new Float32Array(n * n)
    for (let i = 0; i < n; i++) { for (let j = 0; j < n; j++) { grid[i * n + j] = Math.exp(-((i - n / 2) ** 2 + (j - n / 2) ** 2) / 20) } }
    for (let s = 0; s < data.steps; s++) {
      const next = new Float32Array(n * n)
      for (let i = 1; i < n - 1; i++) { for (let j = 1; j < n - 1; j++) { next[i * n + j] = grid[i * n + j] + data.alpha * (grid[(i + 1) * n + j] + grid[(i - 1) * n + j] + grid[i * n + j + 1] + grid[i * n + j - 1] - 4 * grid[i * n + j]) } }
      grid = next
    }
    const cs = (W - 40) / n
    for (let i = 0; i < n; i++) { for (let j = 0; j < n; j++) { g.append('rect').attr('x', j * cs + 20).attr('y', i * cs + 15).attr('width', cs - 0.5).attr('height', cs - 0.5).attr('fill', d3.interpolateCool(Math.max(0, Math.min(1, grid[i * n + j])))) } }
    g.append('text').attr('x', W / 2).attr('y', H - 6).attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '7px').text('HeatEquation')
  }, [customData])
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />
}
`;export{e as default};