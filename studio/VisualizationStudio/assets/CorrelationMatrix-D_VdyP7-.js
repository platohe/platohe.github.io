var e=`import { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import { W, H, colors } from './utils'
export const meta = {
  id: 'correlation-matrix',
  title: 'Correlation Matrix',
  desc: 'Correlation Matrix — a analysis chart visualization',
  category: 'Analysis',
  component: 'CorrelationMatrix',
  complexity: 'beginner',
  interactivity: ['none'],
  d3Api: ['d3-scale'],
  tags: ['analysis', 'correlation-matrix'],
}

export default function CorrelationMatrix({ data: customData }) {
  const ref = useRef(null)
  useEffect(() => {
    const svg = d3.select(ref.current); svg.selectAll('*').remove()
    const DEFAULT_DATA = { size: 8 }
    const data = { ...DEFAULT_DATA, ...(customData && typeof customData === 'object' && !Array.isArray(customData) ? customData : {}) }
    const g = svg.append('g')
    const n = data.size
    const labels = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].slice(0, n)
    let rng = 42
    const rnd = () => { rng = (rng * 1103515245 + 12345) & 0x7fffffff; return rng / 0x7fffffff }
    const mat = Array.from({ length: n }, () => Array.from({ length: n }, () => {
      if (rnd() < 0.3) return rnd() * 2 - 1
      return 0
    }))
    for (let i = 0; i < n; i++) mat[i][i] = 1
    const cs = Math.min((W - 80) / n, (H - 60) / n)
    labels.forEach((l, i) => {
      g.append('text').attr('x', 50 + i * cs + cs / 2).attr('y', 25).attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '10px').text(l)
      g.append('text').attr('x', 42).attr('y', 45 + i * cs + cs / 2 + 4).attr('text-anchor', 'end').attr('fill', 'var(--text-secondary)').attr('font-size', '10px').text(l)
    })
    for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) {
      const v = mat[i][j]
      g.append('rect').attr('x', 50 + j * cs + 1).attr('y', 38 + i * cs + 1).attr('width', cs - 2).attr('height', cs - 2)
        .attr('fill', v >= 0 ? \`rgba(99,102,241,\${Math.abs(v)})\` : \`rgba(239,68,68,\${Math.abs(v)})\`)
    }
    g.append('text').attr('x', W / 2).attr('y', H - 6).attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '7px').text('CorrelationMatrix')
  }, [customData])
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />
}
`;export{e as default};