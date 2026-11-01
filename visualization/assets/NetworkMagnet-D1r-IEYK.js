var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'network-magnet',\r
  title: 'Network Magnet',\r
  desc: 'Network Magnet — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'NetworkMagnet',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","network-magnet"],\r
}\r
\r
export default function NetworkMagnet({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
    const cx = W / 2, cy = H / 2\r
    const n = 6\r
    const nodes = Array.from({ length: n }, (_, i) => ({\r
      x: cx + Math.cos((i / n) * Math.PI * 2) * 70,\r
      y: cy + Math.sin((i / n) * Math.PI * 2) * 70,\r
      color: colors[i % colors.length]\r
    }))\r
    const circles = nodes.map(nd =>\r
      svg.append('circle').attr('r', 10).attr('fill', nd.color)\r
    )\r
    const timer = d3.timer(elapsed => {\r
      nodes.forEach((nd, i) => {\r
        const attract = Math.sin(elapsed * 0.002 + i * 1.2) * 15\r
        nd.x = cx + Math.cos((i / n) * Math.PI * 2 + elapsed * 0.001) * (70 + attract)\r
        nd.y = cy + Math.sin((i / n) * Math.PI * 2 + elapsed * 0.001) * (70 + attract)\r
        circles[i].attr('cx', nd.x).attr('cy', nd.y)\r
      })\r
    })\r
    return () => timer.stop()\r
  }, [])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};