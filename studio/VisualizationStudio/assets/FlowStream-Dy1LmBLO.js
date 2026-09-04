var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'flow-stream',\r
  title: 'Flow Stream',\r
  desc: 'Flow Stream — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'FlowStream',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","flow-stream"],\r
}\r
\r
export default function FlowStream({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
    const n = Array.isArray(customData) && customData.length > 0 ? Math.max(2, Math.min(14, customData.length)) : 6, lines = Array.from({ length: n }, (_, i) =>\r
      svg.append('path').attr('fill', 'none').attr('stroke', colors[i % colors.length]).attr('stroke-width', 3).attr('stroke-opacity', 0.7).attr('stroke-linecap', 'round')\r
    )\r
    const timer = d3.timer(elapsed => {\r
      lines.forEach((l, i) => {\r
        const yBase = H * 0.2 + i * (H * 0.6 / (n - 1))\r
        const pts = Array.from({ length: 40 }, (_, j) => {\r
          const x = (j / 39) * W\r
          const y = yBase + Math.sin(j * 0.3 + elapsed * 0.003 + i) * 15\r
          return { x, y }\r
        })\r
        l.attr('d', d3.line().x(d => d.x).y(d => d.y)(pts))\r
      })\r
    })\r
    return () => timer.stop()\r
  }, [])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};