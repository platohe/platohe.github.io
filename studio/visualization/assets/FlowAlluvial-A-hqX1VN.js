var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'flow-alluvial',\r
  title: 'Flow Alluvial',\r
  desc: 'Flow Alluvial — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'FlowAlluvial',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","flow-alluvial"],\r
}\r
\r
export default function FlowAlluvial({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
    const n = Array.isArray(customData) && customData.length > 0 ? Math.max(2, Math.min(12, customData.length)) : 5\r
    const paths = Array.from({ length: n }, (_, i) =>\r
      svg.append('path').attr('fill', colors[i % colors.length]).attr('fill-opacity', 0.4).attr('stroke', colors[i % colors.length])\r
    )\r
    const timer = d3.timer(elapsed => {\r
      paths.forEach((p, i) => {\r
        const yBase = H * 0.2 + i * (H * 0.6 / (n - 1))\r
        const pts = Array.from({ length: 30 }, (_, j) => {\r
          const x = (j / 29) * W\r
          const w = Math.sin(j * 0.2 + elapsed * 0.002 + i) * 20\r
          return { x, y: yBase + w }\r
        })\r
        p.attr('d', d3.line().x(d => d.x).y(d => d.y).curve(d3.curveBasis)(pts))\r
      })\r
    })\r
    return () => timer.stop()\r
  }, [])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};