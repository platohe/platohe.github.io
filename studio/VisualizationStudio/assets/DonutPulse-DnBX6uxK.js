var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'donut-pulse',\r
  title: 'Donut Pulse',\r
  desc: 'Donut Pulse — a animation chart visualization',\r
  category: 'Animation',\r
  component: 'DonutPulse',\r
  complexity: 'beginner',\r
  interactivity: ["animate"],\r
  d3Api: ["d3-scale"],\r
  tags: ["animation","donut-pulse"],\r
}\r
\r
export default function DonutPulse({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
    const cx = W / 2, cy = H / 2\r
    const rings = [\r
      { inner: 20, outer: 50, color: colors[0] },\r
      { inner: 55, outer: 85, color: colors[1] },\r
      { inner: 90, outer: 120, color: colors[2] },\r
    ]\r
    const circles = rings.map(r => svg.append('circle').attr('cx', 0).attr('cy', 0).attr('r', (r.inner + r.outer) / 2).attr('fill', 'none').attr('stroke', r.color).attr('stroke-width', r.outer - r.inner).attr('stroke-dasharray', '8,4'))\r
    const timer = d3.timer(elapsed => {\r
      circles.forEach((c, i) => {\r
        const s = 1 + Math.sin(elapsed * 0.003 + i * 0.8) * 0.05\r
        c.attr('transform', \`translate(\${cx},\${cy}) scale(\${s})\`)\r
      })\r
    })\r
    return () => timer.stop()\r
  }, [])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};