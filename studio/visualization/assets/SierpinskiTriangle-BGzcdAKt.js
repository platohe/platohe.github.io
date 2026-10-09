var e=`import { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import { W, H, colors } from './utils'
export const meta = {
  id: 'sierpinski-triangle',
  title: 'Sierpinski Triangle',
  desc: 'Sierpinski Triangle — a math & simulation chart visualization',
  category: 'Math & Simulation',
  component: 'SierpinskiTriangle',
  complexity: 'beginner',
  interactivity: ['none'],
  d3Api: ['d3-scale'],
  tags: ['math-&-simulation', 'sierpinski-triangle'],
}

export default function SierpinskiTriangle({ data: customData }) {
  const ref = useRef(null)
  useEffect(() => {
    const svg = d3.select(ref.current); svg.selectAll('*').remove()
    const DEFAULT_DATA = { depth: 7 }
    const data = { ...DEFAULT_DATA, ...(customData && typeof customData === 'object' && !Array.isArray(customData) ? customData : {}) }
    const g = svg.append('g')
    function drawTriangle(ax, ay, bx, by, cx, cy, depth) {
      if (depth === 0) {
        g.append('polygon').attr('points', \`\${ax},\${ay} \${bx},\${by} \${cx},\${cy}\`)
          .attr('fill', colors[depth % colors.length]).attr('opacity', 0.85)
        return
      }
      const mx1 = (ax + bx) / 2, my1 = (ay + by) / 2
      const mx2 = (bx + cx) / 2, my2 = (by + cy) / 2
      const mx3 = (ax + cx) / 2, my3 = (ay + cy) / 2
      drawTriangle(ax, ay, mx1, my1, mx3, my3, depth - 1)
      drawTriangle(mx1, my1, bx, by, mx2, my2, depth - 1)
      drawTriangle(mx3, my3, mx2, my2, cx, cy, depth - 1)
    }
    const s = 120, topX = W / 2, topY = 35, blX = 60, blY = H - 40, brX = W - 60, brY = H - 40
    drawTriangle(topX, topY, blX, blY, brX, brY, data.depth)
    g.append('text').attr('x', W / 2).attr('y', H - 6).attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '7px').text('SierpinskiTriangle')
  }, [customData])
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />
}
`;export{e as default};