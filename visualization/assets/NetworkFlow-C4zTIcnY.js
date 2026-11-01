var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'network-flow',\r
  title: 'Network Flow',\r
  desc: 'Network Flow — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'NetworkFlow',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","network-flow"],\r
}\r
\r
export default function NetworkFlow({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
    const cx = W / 2, cy = H / 2\r
    const nodes = Array.from({ length: 6 }, (_, i) => {\r
      const a = (i / 6) * Math.PI * 2\r
      return { x: cx + Math.cos(a) * 90, y: cy + Math.sin(a) * 90, color: colors[i % colors.length] }\r
    })\r
    const edges = [[0,1],[1,2],[2,3],[3,4],[4,5],[5,0],[0,3]]\r
    edges.forEach(([a, b]) => svg.append('line').attr('x1', nodes[a].x).attr('y1', nodes[a].y).attr('x2', nodes[b].x).attr('y2', nodes[b].y).attr('stroke', 'var(--border)').attr('stroke-width', 1))\r
    const dots = nodes.map((n, i) => svg.append('circle').attr('r', 6).attr('fill', n.color))\r
    const particles = Array.from({ length: 8 }, (_, i) => ({ edge: i % edges.length, t: i / 8, color: colors[i % colors.length] }))\r
    const pDots = particles.map(p => svg.append('circle').attr('r', 3).attr('fill', p.color))\r
    const timer = d3.timer(elapsed => {\r
      particles.forEach((p, i) => {\r
        p.t = (p.t + 0.005) % 1\r
        const [a, b] = edges[p.edge]\r
        const x = nodes[a].x + (nodes[b].x - nodes[a].x) * p.t\r
        const y = nodes[a].y + (nodes[b].y - nodes[a].y) * p.t\r
        pDots[i].attr('cx', x).attr('cy', y)\r
      })\r
    })\r
    return () => timer.stop()\r
  }, [])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};