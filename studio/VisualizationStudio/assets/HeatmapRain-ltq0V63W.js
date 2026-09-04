var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'heatmap-rain',\r
  title: 'Heatmap Rain',\r
  desc: 'Heatmap Rain — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'HeatmapRain',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-color"],\r
  tags: ["bars","heatmap-rain"],\r
}\r
\r
export default function HeatmapRain({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
    const cols = 20, rows = 15, cw = W / cols, ch = H / rows\r
    const cells = Array.from({ length: cols * rows }, (_, i) =>\r
      svg.append('rect').attr('x', i % cols * cw).attr('y', Math.floor(i / cols) * ch).attr('width', cw - 1).attr('height', ch - 1).attr('fill', colors[0]).attr('opacity', 0.2)\r
    )\r
    const drops = Array.from({ length: 30 }, () => ({\r
      col: Math.floor(Math.random() * cols), row: -1, speed: 0.5 + Math.random() * 1\r
    }))\r
    const dropsDots = drops.map(() => svg.append('rect').attr('fill', colors[1]).attr('width', cw - 1).attr('height', ch - 1))\r
    const timer = d3.timer(elapsed => {\r
      cells.forEach((c, i) => {\r
        const col = i % cols, row = Math.floor(i / cols)\r
        const v = (Math.sin(col * 0.5 + elapsed * 0.001) + 1) / 2\r
        const idx = Math.round(v * (colors.length - 1))\r
        c.attr('fill', colors[idx]).attr('opacity', 0.15 + v * 0.3)\r
      })\r
      drops.forEach((d, i) => {\r
        d.row += d.speed\r
        if (d.row >= rows) { d.row = -1; d.col = Math.floor(Math.random() * cols) }\r
        dropsDots[i].attr('x', d.col * cw).attr('y', d.row * ch)\r
      })\r
    })\r
    return () => timer.stop()\r
  }, [])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};