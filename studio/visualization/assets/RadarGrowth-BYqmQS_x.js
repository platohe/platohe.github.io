var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'radar-growth',\r
  title: 'Radar Growth',\r
  desc: 'Radar Growth — a fun chart visualization',\r
  category: 'Fun',\r
  component: 'RadarGrowth',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["fun","radar-growth"],\r
}\r
\r
export default function RadarGrowth({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
    const cx = W / 2, cy = H / 2, R = 100, ax = 6\r
    const g = svg.append('g').attr('transform', \`translate(\${cx},\${cy})\`)\r
    const data = [70, 80, 50, 90, 60, 40]\r
    const poly = g.append('polygon').attr('fill', colors[0]).attr('fill-opacity', 0.3).attr('stroke', colors[0]).attr('stroke-width', 2)\r
    let progress = 0\r
    const timer = d3.timer(elapsed => {\r
      progress = Math.min(1, (elapsed % 3000) / 1500)\r
      const pts = data.map((v, i) => {\r
        const a = (i / ax) * Math.PI * 2\r
        return { x: Math.cos(a) * v * progress, y: Math.sin(a) * v * progress }\r
      })\r
      poly.attr('points', pts.map(p => \`\${p.x},\${p.y}\`).join(''))\r
    })\r
    return () => timer.stop()\r
  }, [])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};