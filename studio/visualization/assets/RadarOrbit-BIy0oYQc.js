var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'radar-orbit',\r
  title: 'Radar Orbit',\r
  desc: 'Radar Orbit — a fun chart visualization',\r
  category: 'Fun',\r
  component: 'RadarOrbit',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["fun","radar-orbit"],\r
}\r
\r
export default function RadarOrbit({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
    const cx = W / 2, cy = H / 2, ax = 6\r
    const dots = Array.from({ length: ax }, (_, i) =>\r
      svg.append('circle').attr('r', 6).attr('fill', colors[i % colors.length])\r
    )\r
    const timer = d3.timer(elapsed => {\r
      dots.forEach((d, i) => {\r
        const a = (i / ax) * Math.PI * 2 + elapsed * 0.002\r
        const r = 60 + Math.sin(elapsed * 0.003 + i) * 30\r
        d.attr('cx', cx + Math.cos(a) * r).attr('cy', cy + Math.sin(a) * r)\r
      })\r
    })\r
    return () => timer.stop()\r
  }, [])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};