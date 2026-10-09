var e=`import { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import { W, H, colors } from './utils'
export const meta = {
  id: 'julia-set',
  title: 'Julia Set',
  desc: 'Julia Set — a math & simulation chart visualization',
  category: 'Math & Simulation',
  component: 'JuliaSet',
  complexity: 'beginner',
  interactivity: ['none'],
  d3Api: ['d3-scale'],
  tags: ['math-&-simulation', 'julia-set'],
}

export default function JuliaSet({ data: customData }) {
  const ref = useRef(null)
  useEffect(() => {
    const svg = d3.select(ref.current); svg.selectAll('*').remove()
    const DEFAULT_DATA = { cx: -0.7, cy: 0.27015, iterations: 80 }
    const data = { ...DEFAULT_DATA, ...(customData && typeof customData === 'object' && !Array.isArray(customData) ? customData : {}) }
    const g = svg.append('g')
    const w = 50, h = 38, scale = 13
    const maxIter = data.iterations
    const cr = data.cx, ci = data.cy
    for (let py = 0; py < h; py++) {
      for (let px = 0; px < w; px++) {
        let zx = (px - w / 2) / scale
        let zy = (py - h / 2) / scale
        let iter = 0
        while (zx * zx + zy * zy < 4 && iter < maxIter) {
          const tmp = zx * zx - zy * zy + cr
          zy = 2 * zx * zy + ci
          zx = tmp
          iter++
        }
        if (iter < maxIter) {
          const t = iter / maxIter
          g.append('rect').attr('x', px * 7 + 8).attr('y', py * 7 + 14).attr('width', 6).attr('height', 6)
            .attr('fill', d3.interpolateViridis(t))
        }
      }
    }
    g.append('text').attr('x', W / 2).attr('y', H - 6).attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '7px').text('JuliaSet')
  }, [customData])
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />
}
`;export{e as default};