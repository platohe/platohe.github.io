var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'bar-wave',\r
  title: 'Bar Wave',\r
  desc: 'Bar Wave — a animation chart visualization',\r
  category: 'Animation',\r
  component: 'BarWave',\r
  complexity: 'beginner',\r
  interactivity: ["animate"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["animation","bar-wave"],\r
}\r
\r
export default function BarWave({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const config = customData || { count: 12 }\r
    const { count = 12 } = config\r
\r
    const baseData = Array.from({ length: count }, (_, i) => 20 + Math.random() * 80)\r
    const n = baseData.length\r
    const bw = W / n * 0.7, gap = W / n * 0.3\r
\r
    // Store current heights for interpolation\r
    const heights = new Array(n).fill(0)\r
    const t0 = Date.now() * 0.001\r
\r
    const bars = svg.append('g')\r
      .selectAll('rect')\r
      .data(baseData)\r
      .join('rect')\r
      .attr('x', (_, i) => i * (bw + gap))\r
      .attr('y', d => H - 20 - d)\r
      .attr('width', bw)\r
      .attr('height', d => d)\r
      .attr('fill', (_, i) => colors[i % colors.length])\r
      .attr('rx', 2)\r
\r
    const timer = d3.timer(elapsed => {\r
      const ts = elapsed * 0.002 + t0\r
      bars.each((d, i) => {\r
        const target = Math.max(5, d + Math.sin(ts + i * 0.5) * 30)\r
        heights[i] = heights[i] + (target - heights[i]) * 0.12\r
        const h = Math.max(5, heights[i])\r
        d3.select(bars.nodes()[i])\r
          .attr('height', h)\r
          .attr('y', H - 20 - h)\r
      })\r
    })\r
\r
    return () => timer.stop()\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};