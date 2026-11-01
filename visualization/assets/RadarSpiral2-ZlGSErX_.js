var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'radar-spiral2',\r
  title: 'Radar Spiral2',\r
  desc: 'Radar Spiral2 — a fun chart visualization',\r
  category: 'Fun',\r
  component: 'RadarSpiral2',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["fun","radar-spiral2"],\r
}\r
\r
export default function RadarSpiral2({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
    const cx = W / 2, cy = H / 2\r
    const path = svg.append('path').attr('fill', 'none').attr('stroke', colors[0]).attr('stroke-width', 2)\r
    const timer = d3.timer(elapsed => {\r
      const t = elapsed * 0.0008\r
      const pts = Array.from({ length: 100 }, (_, i) => {\r
        const a = i * 0.15 + t\r
        const r = 5 + i * 1.2\r
        return { x: cx + Math.cos(a) * r, y: cy + Math.sin(a) * r }\r
      })\r
      path.attr('d', d3.line().x(d => d.x).y(d => d.y)(pts))\r
    })\r
    return () => timer.stop()\r
  }, [])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};