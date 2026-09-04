var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'bar-pulse',\r
  title: 'Bar Pulse',\r
  desc: 'Bar Pulse — a animation chart visualization',\r
  category: 'Animation',\r
  component: 'BarPulse',\r
  complexity: 'beginner',\r
  interactivity: ["animate"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["animation","bar-pulse"],\r
}\r
\r
export default function BarPulse({ data: customData }) {\r
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
    const data = normalized.length > 0 ? normalized : Array.from({ length: 10 }, () => 30 + Math.random() * 70)\r
    const n = data.length, bw = W / n * 0.8, gap = W / n * 0.2\r
    const BASE = H - 20\r
\r
    // Bars live directly on the SVG with absolute coordinates — a translated\r
    // group here would double-shift them below the viewBox (blank render).\r
    const bars = svg.selectAll('rect').data(data).join('rect')\r
      .attr('x', (_, i) => i * (bw + gap))\r
      .attr('y', d => BASE - d).attr('width', bw).attr('height', d => d)\r
      .attr('fill', (_, i) => colors[i % colors.length]).attr('rx', 2)\r
\r
    const mids = data.map(d => BASE - d / 2)\r
    const t = Date.now() * 0.001\r
    const timer = d3.timer(elapsed => {\r
      const ts = elapsed * 0.003 + t\r
      bars.each((d, i, nodes) => {\r
        const pulse = (Math.sin(ts + i * 0.8) + 1) / 2\r
        const nh = Math.max(2, d * (0.4 + 0.6 * pulse))\r
        d3.select(nodes[i]).attr('height', nh).attr('y', mids[i] - nh / 2)\r
      })\r
    })\r
    return () => timer.stop()\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};