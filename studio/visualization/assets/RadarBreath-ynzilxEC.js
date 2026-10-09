var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'radar-breath',\r
  title: 'Radar Breath',\r
  desc: 'Radar Breath — a fun chart visualization',\r
  category: 'Fun',\r
  component: 'RadarBreath',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["fun","radar-breath"],\r
}\r
\r
export default function RadarBreath({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
    const cx = W / 2, cy = H / 2, R = 100, ax = 5\r
    const g = svg.append('g').attr('transform', \`translate(\${cx},\${cy})\`)\r
    for (let ring = 20; ring <= R; ring += 25) {\r
      const pts = Array.from({ length: ax }, (_, i) => {\r
        const a = (i / ax) * Math.PI * 2\r
        return { x: Math.cos(a) * ring, y: Math.sin(a) * ring }\r
      })\r
      g.append('polygon').attr('points', pts.map(p => \`\${p.x},\${p.y}\`).join('')).attr('fill', 'none').attr('stroke', 'var(--border)').attr('stroke-width', 0.5)\r
    }\r
    const data = [65, 85, 55, 75, 90]\r
    const poly = g.append('polygon').attr('fill', colors[0]).attr('fill-opacity', 0.3).attr('stroke', colors[0]).attr('stroke-width', 2)\r
    const timer = d3.timer(elapsed => {\r
      const breath = 1 + Math.sin(elapsed * 0.002) * 0.15\r
      const pts = data.map((v, i) => {\r
        const a = (i / ax) * Math.PI * 2\r
        return { x: Math.cos(a) * v * breath, y: Math.sin(a) * v * breath }\r
      })\r
      poly.attr('points', pts.map(p => \`\${p.x},\${p.y}\`).join(''))\r
    })\r
    return () => timer.stop()\r
  }, [])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};