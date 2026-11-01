var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'network-spin',\r
  title: 'Network Spin',\r
  desc: 'Network Spin — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'NetworkSpin',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","network-spin"],\r
}\r
\r
export default function NetworkSpin({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
    const cx = W / 2, cy = H / 2, n = 8\r
    const nodes = Array.from({ length: n }, (_, i) => ({\r
      angle: (i / n) * Math.PI * 2, r: 80, color: colors[i % colors.length]\r
    }))\r
    const g = svg.append('g')\r
    const circles = nodes.map(nd => g.append('circle').attr('r', 7).attr('fill', nd.color))\r
    const edges = [[0,3],[1,4],[2,5],[3,6],[4,7],[5,0],[6,1],[7,2]]\r
    edges.forEach(([a, b]) => g.append('line').attr('stroke', 'var(--border)').attr('stroke-width', 1).attr('opacity', 0.5))\r
    const timer = d3.timer(elapsed => {\r
      const rot = elapsed * 0.001\r
      nodes.forEach((nd, i) => {\r
        const a = nd.angle + rot\r
        nd.x = cx + Math.cos(a) * nd.r\r
        nd.y = cy + Math.sin(a) * nd.r\r
        circles[i].attr('cx', nd.x).attr('cy', nd.y)\r
      })\r
      edges.forEach(([a, b], i) => {\r
        g.selectAll('line').filter((d, j) => j === i)\r
          .attr('x1', nodes[a].x).attr('y1', nodes[a].y).attr('x2', nodes[b].x).attr('y2', nodes[b].y)\r
      })\r
    })\r
    return () => timer.stop()\r
  }, [])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};