var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'radar-pulse',\r
  title: 'Radar Pulse',\r
  desc: 'Radar Pulse — a animation chart visualization',\r
  category: 'Animation',\r
  component: 'RadarPulse',\r
  complexity: 'beginner',\r
  interactivity: ["animate"],\r
  d3Api: ["d3-scale"],\r
  tags: ["animation","radar-pulse"],\r
}\r
\r
export default function RadarPulse({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
    const cx = W / 2, cy = H / 2, ax = 5, R = 100\r
    const g = svg.append('g').attr('transform', \`translate(\${cx},\${cy})\`)\r
    for (let ring = 20; ring <= R; ring += 20) {\r
      const pts = Array.from({ length: ax }, (_, i) => {\r
        const a = (i / ax) * Math.PI * 2 - Math.PI / 2\r
        return { x: Math.cos(a) * ring, y: Math.sin(a) * ring }\r
      })\r
      g.append('polygon').attr('points', pts.map(p => \`\${p.x},\${p.y}\`).join('')).attr('fill', 'none').attr('stroke', 'var(--border)').attr('stroke-width', 0.5)\r
    }\r
    const axes = Array.from({ length: ax }, (_, i) => {\r
      const a = (i / ax) * Math.PI * 2 - Math.PI / 2\r
      g.append('line').attr('x1', 0).attr('y1', 0).attr('x2', Math.cos(a) * R).attr('y2', Math.sin(a) * R).attr('stroke', 'var(--border)').attr('stroke-width', 0.5)\r
    })\r
    const data = [70, 90, 50, 80, 60]\r
    const poly = g.append('polygon').attr('fill', colors[0]).attr('fill-opacity', 0.3).attr('stroke', colors[0]).attr('stroke-width', 2)\r
    const update = () => {\r
      const pts = data.map((v, i) => {\r
        const a = (i / ax) * Math.PI * 2 - Math.PI / 2\r
        return { x: Math.cos(a) * v, y: Math.sin(a) * v }\r
      })\r
      poly.attr('points', pts.map(p => \`\${p.x},\${p.y}\`).join(''))\r
    }\r
    update()\r
    const timer = d3.timer(elapsed => {\r
      const pulse = 1 + Math.sin(elapsed * 0.003) * 0.05\r
      const pts = data.map((v, i) => {\r
        const a = (i / ax) * Math.PI * 2 - Math.PI / 2\r
        return { x: Math.cos(a) * v * pulse, y: Math.sin(a) * v * pulse }\r
      })\r
      poly.attr('points', pts.map(p => \`\${p.x},\${p.y}\`).join(''))\r
    })\r
    return () => timer.stop()\r
  }, [])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};