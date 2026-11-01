var e=`import { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import { W, H, colors } from './utils'
export const meta = {
  id: 'mandelbrot-set',
  title: 'Mandelbrot Set',
  desc: 'Mandelbrot Set — a math & simulation chart visualization',
  category: 'Math & Simulation',
  component: 'MandelbrotSet',
  complexity: 'beginner',
  interactivity: ['none'],
  d3Api: ['d3-scale'],
  tags: ['math-&-simulation', 'mandelbrot-set'],
}

export default function MandelbrotSet({ data: customData }) {
  const ref = useRef(null)
  useEffect(() => {
    const svg = d3.select(ref.current); svg.selectAll('*').remove()
    const DEFAULT_DATA = { iterations: 80 }
    const data = { ...DEFAULT_DATA, ...(customData && typeof customData === 'object' && !Array.isArray(customData) ? customData : {}) }
    const g = svg.append('g')
    const w = 50, h = 38, scale = 13
    const maxIter = data.iterations
    for (let py = 0; py < h; py++) {
      for (let px = 0; px < w; px++) {
        const cx = (px - w / 2) / scale
        const cy = (py - h / 2) / scale
        let zx = 0, zy = 0, iter = 0
        while (zx * zx + zy * zy < 4 && iter < maxIter) {
          const tmp = zx * zx - zy * zy + cx
          zy = 2 * zx * zy + cy
          zx = tmp
          iter++
        }
        if (iter < maxIter) {
          const t = iter / maxIter
          g.append('rect').attr('x', px * 7 + 8).attr('y', py * 7 + 14).attr('width', 6).attr('height', 6)
            .attr('fill', d3.interpolateRainbow(t))
        }
      }
    }
    g.append('text').attr('x', W / 2).attr('y', H - 6).attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '7px').text('MandelbrotSet')
  }, [customData])
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />
}
`;export{e as default};