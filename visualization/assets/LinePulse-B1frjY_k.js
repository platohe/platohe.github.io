var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'line-pulse',\r
  title: 'Line Pulse',\r
  desc: 'Line Pulse — a animation chart visualization',\r
  category: 'Animation',\r
  component: 'LinePulse',\r
  complexity: 'beginner',\r
  interactivity: ["animate"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["animation","line-pulse"],\r
}\r
\r
export default function LinePulse({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    // Editor/default data may be [{label, value}, ...] objects or raw numbers.\r
    const toNum = d => {\r
      const n = Number(d && typeof d === 'object' ? d.value : d)\r
      return Number.isFinite(n) ? n : null\r
    }\r
    const normalized = Array.isArray(customData) ? customData.map(toNum).filter(v => v !== null) : []\r
    const data = normalized.length > 0 ? normalized : Array.from({ length: 30 }, (_, i) => 50 + Math.sin(i * 0.3) * 20)\r
    const line = d3.line()\r
      .x((d, i) => (i / (data.length - 1)) * (W - 40) + 20)\r
      .y(d => H / 2 + (d - 50) * 2).curve(d3.curveCatmullRom.alpha(0.5))\r
\r
    const path = svg.append('path')\r
      .attr('d', line(data)).attr('fill', 'none').attr('stroke', colors[0]).attr('stroke-width', 3)\r
\r
    const timer = d3.timer(elapsed => {\r
      const t = elapsed * 0.003\r
      const pulse = 0.5 + 0.5 * Math.sin(t)\r
      path.attr('stroke-width', 1 + pulse * 4)\r
        .attr('stroke-opacity', 0.4 + pulse * 0.6)\r
        .attr('stroke', pulse > 0.7 ? colors[1] : colors[0])\r
    })\r
    return () => timer.stop()\r
  }, [])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};