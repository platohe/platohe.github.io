var e=`import { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import { W, H, colors } from './utils'
export const meta = {
  id: 'von-koch-snowflake',
  title: "Von Koch Snowflake",
  desc: "Von Koch Snowflake — a math & simulation chart visualization",
  category: 'Math & Simulation',
  component: 'VonKochSnowflake',
  complexity: 'beginner',
  interactivity: ['none'],
  d3Api: ['d3-scale'],
  tags: ['math-&-simulation', 'von-koch-snowflake'],
}

export default function VonKochSnowflake({ data: customData }) {
  const ref = useRef(null)
  useEffect(() => {
    const svg = d3.select(ref.current); svg.selectAll('*').remove()
    const DEFAULT_DATA = { iterations: 5 }
    const data = { ...DEFAULT_DATA, ...(customData && typeof customData === 'object' && !Array.isArray(customData) ? customData : {}) }
    const g = svg.append('g')
    function kochSegment(x1, y1, x2, y2, depth) {
      if (depth === 0) return [[x1, y1]]
      const dx = (x2 - x1) / 3, dy = (y2 - y1) / 3
      const ax = x1 + dx, ay = y1 + dy
      const bx = x1 + 2 * dx, by = y1 + 2 * dy
      const angle = Math.PI / 3
      const cx = (ax + bx) / 2 - (by - ay) * Math.sin(angle)
      const cy = (ay + by) / 2 + (bx - ax) * Math.sin(angle)
      return [...kochSegment(x1, y1, ax, ay, depth - 1), ...kochSegment(ax, ay, cx, cy, depth - 1),
        ...kochSegment(cx, cy, bx, by, depth - 1), ...kochSegment(bx, by, x2, y2, depth - 1)]
    }
    const s = 130, topY = 35, blY = H - 45, brY = H - 45
    const topX = W / 2, blX = topX - s, brX = topX + s
    const pts = [...kochSegment(topX, topY, blX, blY, data.iterations),
      ...kochSegment(blX, blY, brX, brY, data.iterations),
      ...kochSegment(brX, brY, topX, topY, data.iterations)]
    g.append('path').attr('d', 'M' + pts.map(p => p.join(',')).join('L') + 'Z')
      .attr('fill', colors[2]).attr('fill-opacity', 0.25).attr('stroke', colors[2]).attr('stroke-width', 0.5)
    g.append('text').attr('x', W / 2).attr('y', H - 6).attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '7px').text('VonKochSnowflake')
  }, [customData])
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />
}
`;export{e as default};