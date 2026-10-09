var e=`import { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import { W, H, colors } from './utils'
export const meta = {
  id: 'heat-map-city',
  title: 'Heat Map City',
  desc: 'Heat Map City — a math & simulation chart visualization',
  category: 'Math & Simulation',
  component: 'HeatMapCity',
  complexity: 'beginner',
  interactivity: ['none'],
  d3Api: ['d3-scale'],
  tags: ['math-&-simulation', 'heat-map-city'],
}

export default function HeatMapCity({ data: customData }) {
  const ref = useRef(null)
  useEffect(() => {
    const svg = d3.select(ref.current); svg.selectAll('*').remove()
    const DEFAULT_DATA = { gridSize: 12 }
    const data = { ...DEFAULT_DATA, ...(customData && typeof customData === 'object' && !Array.isArray(customData) ? customData : {}) }
    const g = svg.append('g')
    const n = data.gridSize
    let rng = 77
    const rnd = () => { rng = (rng * 1103515245 + 12345) & 0x7fffffff; return rng / 0x7fffffff }
    let heats = Array.from({ length: n }, () => Array.from({ length: n }, () => rnd()))
    for (let pass = 0; pass < 3; pass++) {
      const smoothed = heats.map(r => [...r])
      for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) {
        let sum = heats[i][j] * 4, cnt = 4
        if (i > 0) { sum += heats[i - 1][j]; cnt++ }
        if (i < n - 1) { sum += heats[i + 1][j]; cnt++ }
        if (j > 0) { sum += heats[i][j - 1]; cnt++ }
        if (j < n - 1) { sum += heats[i][j + 1]; cnt++ }
        smoothed[i][j] = sum / cnt
      }
      heats = smoothed
    }
    const max = d3.max(heats.flat())
    const cs = Math.min((W - 50) / n, (H - 60) / n)
    heats.forEach((row, i) => row.forEach((v, j) => {
      g.append('rect').attr('x', j * cs + 25).attr('y', i * cs + 20).attr('width', cs - 1).attr('height', cs - 1)
        .attr('fill', d3.interpolateOranges(v / max))
    }))
    g.append('text').attr('x', W / 2).attr('y', H - 6).attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '7px').text('HeatMapCity')
  }, [customData])
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />
}
`;export{e as default};