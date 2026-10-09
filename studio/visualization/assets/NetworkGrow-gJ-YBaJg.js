var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'network-grow',\r
  title: 'Network Grow',\r
  desc: 'Network Grow — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'NetworkGrow',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","network-grow"],\r
}\r
\r
export default function NetworkGrow({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
    const cx = W / 2, cy = H / 2, n = 10\r
    const nodes = Array.from({ length: n }, (_, i) => {\r
      const a = (i / n) * Math.PI * 2\r
      return { x: cx + Math.cos(a) * 80, y: cy + Math.sin(a) * 80, color: colors[i % colors.length] }\r
    })\r
    nodes.forEach(nd => svg.append('circle').attr('r', 0).attr('fill', nd.color).attr('cx', nd.x).attr('cy', nd.y))\r
    const edges = [[0,2],[0,5],[0,8],[2,5],[2,8],[5,8],[1,3],[1,6],[1,9],[3,6],[3,9],[6,9]]\r
    edges.forEach(([a, b]) => svg.append('line').attr('stroke', 'var(--border)').attr('stroke-width', 1).attr('opacity', 0.3))\r
    const circles = nodes.map((_, i) => svg.selectAll('circle').filter((d, j) => j === i))\r
    const timer = d3.timer(elapsed => {\r
      const grow = Math.min(1, elapsed * 0.001)\r
      nodes.forEach((nd, i) => circles[i].attr('r', 5 * grow))\r
    })\r
    return () => timer.stop()\r
  }, [])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};