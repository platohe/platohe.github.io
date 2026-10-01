var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'radar-spin',\r
  title: 'Radar Spin',\r
  desc: 'Radar Spin — a fun chart visualization',\r
  category: 'Fun',\r
  component: 'RadarSpin',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["fun","radar-spin"],\r
}\r
\r
export default function RadarSpin({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
    const cx = W / 2, cy = H / 2, R = 120\r
    const g = svg.append('g').attr('transform', \`translate(\${cx},\${cy})\`)\r
    g.append('circle').attr('r', R).attr('fill', 'none').attr('stroke', 'var(--border)').attr('stroke-width', 1)\r
    g.append('circle').attr('r', R * 0.5).attr('fill', 'none').attr('stroke', 'var(--border)').attr('stroke-width', 1)\r
    g.append('circle').attr('r', 5).attr('fill', colors[0])\r
    const sweep = g.append('path').attr('fill', colors[0]).attr('opacity', 0.3)\r
    const timer = d3.timer(elapsed => {\r
      const angle = elapsed * 0.002\r
      const x1 = Math.cos(angle) * R, y1 = Math.sin(angle) * R\r
      const x2 = Math.cos(angle + Math.PI / 3) * R, y2 = Math.sin(angle + Math.PI / 3) * R\r
      sweep.attr('d', \`M0,0 L\${x1},\${y1} A\${R},\${R} 0 0,1 \${x2},\${y2} Z\`)\r
    })\r
    return () => timer.stop()\r
  }, [])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};