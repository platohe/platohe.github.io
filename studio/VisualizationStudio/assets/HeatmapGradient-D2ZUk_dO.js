var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'heatmap-gradient',\r
  title: 'Heatmap Gradient',\r
  desc: 'Heatmap Gradient — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'HeatmapGradient',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-color"],\r
  tags: ["bars","heatmap-gradient"],\r
}\r
\r
export default function HeatmapFlow({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
    const cols = 20, rows = 15, cw = W / cols, ch = H / rows\r
    const cells = Array.from({ length: cols * rows }, (_, i) =>\r
      svg.append('rect').attr('x', i % cols * cw).attr('y', Math.floor(i / cols) * ch).attr('width', cw - 1).attr('height', ch - 1).attr('fill', colors[0])\r
    )\r
    const timer = d3.timer(elapsed => {\r
      cells.forEach((c, i) => {\r
        const col = i % cols\r
        const v = (Math.sin((col / cols) * Math.PI * 2 + elapsed * 0.003) + 1) / 2\r
        const idx = Math.round(v * (colors.length - 1))\r
        c.attr('fill', colors[idx]).attr('opacity', 0.4 + v * 0.6)\r
      })\r
    })\r
    return () => timer.stop()\r
  }, [])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};