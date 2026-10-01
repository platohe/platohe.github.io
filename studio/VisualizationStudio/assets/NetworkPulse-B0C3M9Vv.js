var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'network-pulse',\r
  title: 'Network Pulse',\r
  desc: 'Network Pulse — a animation chart visualization',\r
  category: 'Animation',\r
  component: 'NetworkPulse',\r
  complexity: 'beginner',\r
  interactivity: ["animate"],\r
  d3Api: ["d3-scale"],\r
  tags: ["animation","network-pulse"],\r
}\r
\r
export default function NetworkPulse({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
    const cx = W / 2, cy = H / 2\r
    const nodes = Array.from({ length: 7 }, (_, i) => {\r
      const a = (i / 7) * Math.PI * 2\r
      return { x: cx + Math.cos(a) * 80, y: cy + Math.sin(a) * 80 }\r
    })\r
    const edges = [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,0],[0,3],[1,4],[2,5],[3,6],[0,2]]\r
    const g = svg.append('g')\r
    edges.forEach(([a, b]) => g.append('line').attr('x1', nodes[a].x).attr('y1', nodes[a].y).attr('x2', nodes[b].x).attr('y2', nodes[b].y).attr('stroke', colors[0]).attr('stroke-width', 1).attr('opacity', 0.4))\r
    const circles = nodes.map(n => g.append('circle').attr('r', 8).attr('fill', colors[0]).attr('cx', n.x).attr('cy', n.y))\r
    const timer = d3.timer(elapsed => {\r
      circles.forEach((c, i) => {\r
        const pulse = 6 + Math.sin(elapsed * 0.004 + i * 0.8) * 5\r
        c.attr('r', pulse)\r
      })\r
    })\r
    return () => timer.stop()\r
  }, [])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};