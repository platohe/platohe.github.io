var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'flow-cascade',\r
  title: 'Flow Cascade',\r
  desc: 'Flow Cascade — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'FlowCascade',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","flow-cascade"],\r
}\r
\r
export default function FlowCascade({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
    const rows = Array.isArray(customData) && customData.length > 0 ? customData : null\r
    const n = rows ? Math.max(2, Math.min(24, rows.length)) : 8\r
    const vals = rows ? rows.map(r => Number(r.value ?? r.score ?? 50)) : null\r
    const maxV = vals ? Math.max(...vals.map(v => Math.abs(v))) || 1 : 1\r
    const bars = Array.from({ length: n }, (_, i) =>\r
      svg.append('rect').attr('x', i * (W / n)).attr('y', H - 20).attr('width', W / n - 4).attr('height', 0)\r
        .attr('fill', colors[i % colors.length]).attr('rx', 2)\r
    )\r
    const timer = d3.timer(elapsed => {\r
      bars.forEach((b, i) => {\r
        const phase = (elapsed * 0.003 + i * 0.4) % (Math.PI * 2)\r
        const amp = vals ? Math.abs(vals[i]) / maxV : 1\r
        const h = (H - 40) * amp * Math.max(0, Math.sin(phase))\r
        b.attr('y', H - 20 - h).attr('height', h)\r
      })\r
    })\r
    return () => timer.stop()\r
  }, [])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};