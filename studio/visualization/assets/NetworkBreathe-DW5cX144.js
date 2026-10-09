var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'network-breathe',\r
  title: 'Network Breathe',\r
  desc: 'Network Breathe — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'NetworkBreathe',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","network-breathe"],\r
}\r
\r
export default function NetworkBreathe({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
    const cx = W / 2, cy = H / 2\r
    const nodes = Array.from({ length: 6 }, (_, i) => {\r
      const a = (i / 6) * Math.PI * 2\r
      return { x: cx + Math.cos(a) * 70, y: cy + Math.sin(a) * 70, color: colors[i % colors.length] }\r
    })\r
    const g = svg.append('g')\r
    nodes.forEach((n, i) => g.append('circle').attr('r', 10).attr('fill', n.color))\r
    ;[[0,1],[1,2],[2,3],[3,4],[4,5],[5,0],[0,3],[1,4],[2,5]].forEach(([a, b], i) => {\r
      g.append('line').attr('x1', nodes[a].x).attr('y1', nodes[a].y).attr('x2', nodes[b].x).attr('y2', nodes[b].y).attr('stroke', 'var(--border)').attr('stroke-width', 1.5).attr('opacity', 0.5)\r
    })\r
    const timer = d3.timer(elapsed => {\r
      const scale = 0.9 + Math.sin(elapsed * 0.002) * 0.1\r
      nodes.forEach((n, i) => {\r
        g.select(\`circle:nth-child(\${i + 1})\`).attr('r', 8 * scale + Math.sin(elapsed * 0.003 + i) * 3)\r
      })\r
    })\r
    return () => timer.stop()\r
  }, [])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};