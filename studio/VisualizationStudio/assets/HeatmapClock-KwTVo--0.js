var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'heatmap-clock',\r
  title: 'Heatmap Clock',\r
  desc: 'Heatmap Clock — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'HeatmapClock',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-color"],\r
  tags: ["bars","heatmap-clock"],\r
}\r
\r
export default function HeatmapMatrix({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
    const cfg = { n: 12, ...(customData && !Array.isArray(customData) && typeof customData === 'object' ? customData : {}) }\r
    const n = Math.max(2, Math.min(40, Number(cfg.n ?? cfg.cols ?? 12))), cw = W / n, ch = H / (Number(cfg.rows) || n)\r
    const cells = Array.from({ length: n * n }, (_, i) =>\r
      svg.append('rect').attr('x', i % n * cw).attr('y', Math.floor(i / n) * ch).attr('width', cw - 1).attr('height', ch - 1).attr('fill', colors[0]).attr('opacity', 0.3)\r
    )\r
    const timer = d3.timer(elapsed => {\r
      cells.forEach((c, i) => {\r
        const row = Math.floor(i / n), col = i % n\r
        const v = Math.sin(col * 0.3 + elapsed * 0.002) * Math.cos(row * 0.3 + elapsed * 0.0015)\r
        const idx = Math.round((v + 1) / 2 * (colors.length - 1))\r
        c.attr('fill', colors[idx]).attr('opacity', 0.3 + (v + 1) / 2 * 0.7)\r
      })\r
    })\r
    return () => timer.stop()\r
  }, [])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};