var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'heatmap-wave',\r
  title: 'Heatmap Wave',\r
  desc: 'Heatmap Wave — a animation chart visualization',\r
  category: 'Animation',\r
  component: 'HeatmapWave',\r
  complexity: 'beginner',\r
  interactivity: ["animate"],\r
  d3Api: ["d3-scale","d3-color"],\r
  tags: ["animation","heatmap-wave"],\r
}\r
\r
export default function HeatmapWave({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
    const cols = 20, rows = 15, cw = W / cols, ch = H / rows\r
    const cells = Array.from({ length: cols * rows }, (_, i) =>\r
      svg.append('rect').attr('x', i % cols * cw).attr('y', Math.floor(i / cols) * ch).attr('width', cw).attr('height', ch).attr('fill', colors[0])\r
    )\r
    const timer = d3.timer(elapsed => {\r
      cells.forEach((c, i) => {\r
        const col = i % cols, row = Math.floor(i / cols)\r
        const v = (Math.sin((col / cols) * Math.PI * 4 + elapsed * 0.002) + Math.cos((row / rows) * Math.PI * 3 + elapsed * 0.0015)) / 2 + 0.5\r
        const idx = Math.round(v * (colors.length - 1))\r
        c.attr('fill', colors[idx]).attr('opacity', 0.5 + v * 0.5)\r
      })\r
    })\r
    return () => timer.stop()\r
  }, [])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};