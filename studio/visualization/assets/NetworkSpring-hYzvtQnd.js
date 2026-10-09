var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'network-spring',\r
  title: 'Network Spring',\r
  desc: 'Network Spring — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'NetworkSpring',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","network-spring"],\r
}\r
\r
export default function NetworkSpring({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
    const cx = W / 2, cy = H / 2\r
    const n = 8\r
    const nodes = Array.from({ length: n }, (_, i) => {\r
      const a = (i / n) * Math.PI * 2\r
      return { x: cx + Math.cos(a) * 70, y: cy + Math.sin(a) * 70, vx: 0, vy: 0, color: colors[i % colors.length] }\r
    })\r
    const circles = nodes.map(nd => svg.append('circle').attr('r', 8).attr('fill', nd.color))\r
    const edges = [[0,2],[1,3],[2,4],[3,5],[4,6],[5,7],[6,0],[7,1],[0,4],[1,5],[2,6],[3,7]]\r
    const lines = edges.map(() => svg.append('line').attr('stroke', 'var(--border)').attr('stroke-width', 1).attr('opacity', 0.5))\r
    const timer = d3.timer(elapsed => {\r
      const t = elapsed * 0.001\r
      nodes.forEach((nd, i) => {\r
        const targetX = cx + Math.cos((i / n) * Math.PI * 2 + t) * 70\r
        const targetY = cy + Math.sin((i / n) * Math.PI * 2 + t) * 70\r
        nd.vx += (targetX - nd.x) * 0.02\r
        nd.vy += (targetY - nd.y) * 0.02\r
        nd.vx *= 0.9; nd.vy *= 0.9\r
        nd.x += nd.vx; nd.y += nd.vy\r
        circles[i].attr('cx', nd.x).attr('cy', nd.y)\r
      })\r
      edges.forEach(([a, b], i) => {\r
        lines[i].attr('x1', nodes[a].x).attr('y1', nodes[a].y).attr('x2', nodes[b].x).attr('y2', nodes[b].y)\r
      })\r
    })\r
    return () => timer.stop()\r
  }, [])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};