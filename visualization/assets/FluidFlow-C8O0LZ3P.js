var e=`import { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import { W, H, colors } from './utils'
export const meta = {
  id: 'fluid-flow',
  title: 'Fluid Flow',
  desc: 'Fluid Flow — a math & simulation chart visualization',
  category: 'Math & Simulation',
  component: 'FluidFlow',
  complexity: 'beginner',
  interactivity: ['none'],
  d3Api: ['d3-scale'],
  tags: ['math-&-simulation', 'fluid-flow'],
}

export default function FluidFlow({ data: customData }) {
  const ref = useRef(null)
  useEffect(() => {
    const svg = d3.select(ref.current); svg.selectAll('*').remove()
    const DEFAULT_DATA = { steps: 600 }
    const data = { ...DEFAULT_DATA, ...(customData && typeof customData === 'object' && !Array.isArray(customData) ? customData : {}) }
    const g = svg.append('g')
    const n = 10, w = n * 38, h = n * 28
    let rng = 42
    const rnd = () => { rng = (rng * 1103515245 + 12345) & 0x7fffffff; return rng / 0x7fffffff }
    for (let si = 0; si < 30; si++) {
      let px = rnd() * (W - 40) + 20, py = rnd() * (H - 50) + 25
      const pathPts = []
      for (let s = 0; s < data.steps; s++) {
        const fx = Math.sin(py * 0.05) * 1.5 + Math.cos(px * 0.03) * 0.8
        const fy = Math.cos(px * 0.04) * 1.2 + Math.sin(py * 0.06) * 0.6
        px += fx; py += fy
        if (px < 10 || px > W - 10 || py < 15 || py > H - 15) break
        pathPts.push([px, py])
      }
      if (pathPts.length > 3) {
        g.append('path').attr('d', 'M' + pathPts.map(p => p.join(',')).join('L'))
          .attr('fill', 'none').attr('stroke', colors[si % colors.length]).attr('stroke-width', 0.6).attr('opacity', 0.4)
      }
    }
    g.append('text').attr('x', W / 2).attr('y', H - 6).attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '7px').text('FluidFlow')
  }, [customData])
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />
}
`;export{e as default};