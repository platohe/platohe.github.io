var e=`import { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import { W, H, colors } from './utils'
export const meta = {
  id: 'wave-interference',
  title: 'Wave Interference',
  desc: 'Wave Interference — a math & simulation chart visualization',
  category: 'Math & Simulation',
  component: 'WaveInterference',
  complexity: 'beginner',
  interactivity: ['none'],
  d3Api: ['d3-scale'],
  tags: ['math-&-simulation', 'wave-interference'],
}

export default function WaveInterference({ data: customData }) {
  const ref = useRef(null)
  useEffect(() => {
    const svg = d3.select(ref.current); svg.selectAll('*').remove()
    const DEFAULT_DATA = { freq1: 3, freq2: 5, amp1: 1, amp2: 1 }
    const data = { ...DEFAULT_DATA, ...(customData && typeof customData === 'object' && !Array.isArray(customData) ? customData : {}) }
    const g = svg.append('g')
    const n = 80, w = n + 10, h = 30
    for (let py = 0; py < h; py++) {
      for (let px = 0; px < w; px++) {
        const x = (px - w / 2) * 0.3, y = (py - h / 2) * 0.3
        const r1 = Math.sqrt(x * x + (y + 1.5) * (y + 1.5))
        const r2 = Math.sqrt(x * x + (y - 1.5) * (y - 1.5))
        const v = Math.sin(data.freq1 * r1) / (1 + r1 * 0.3) * data.amp1 + Math.sin(data.freq2 * r2) / (1 + r2 * 0.3) * data.amp2
        const t = (v + 2) / 4
        g.append('rect').attr('x', px * 4 + 15).attr('y', py * 8 + 15).attr('width', 3.5).attr('height', 7).
          attr('fill', d3.interpolateBlues(Math.max(0, Math.min(1, t))))
      }
    }
    g.append('text').attr('x', W / 2).attr('y', H - 6).attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '7px').text('WaveInterference')
  }, [customData])
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />
}
`;export{e as default};