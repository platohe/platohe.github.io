var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'heatmap-pulse',\r
  title: 'Heatmap Pulse',\r
  desc: 'Heatmap Pulse — a animation chart visualization',\r
  category: 'Animation',\r
  component: 'HeatmapPulse',\r
  complexity: 'beginner',\r
  interactivity: ["animate"],\r
  d3Api: ["d3-scale","d3-color"],\r
  tags: ["animation","heatmap-pulse"],\r
}\r
\r
export default function HeatmapPulse({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const config = customData || { cols: 10, rows: 8 }\r
    const { cols = 10, rows = 8 } = config\r
    const cw = W / cols, ch = H / rows\r
\r
    // Draw background once\r
    svg.append('rect').attr('width', W).attr('height', H).attr('fill', '#0a0a1a')\r
\r
    // Create persistent cells\r
    const cells = svg.append('g').selectAll('rect.cell')\r
      .data(Array.from({ length: cols * rows }, (_, i) => ({\r
        col: i % cols,\r
        row: Math.floor(i / cols),\r
        x: i % cols * cw,\r
        y: Math.floor(i / cols) * ch\r
      })))\r
      .join('rect')\r
      .attr('class', 'cell')\r
      .attr('x', d => d.x)\r
      .attr('y', d => d.y)\r
      .attr('width', cw - 2)\r
      .attr('height', ch - 2)\r
      .attr('rx', 2)\r
      .attr('fill', colors[0])\r
\r
    const timer = d3.timer(elapsed => {\r
      cells.each(function(d) {\r
        const pulse = (Math.sin(elapsed * 0.004 + d.col * 0.5 + d.row * 0.3) + 1) / 2\r
        const idx = Math.round(pulse * (colors.length - 1))\r
        d3.select(this)\r
          .attr('fill', colors[idx])\r
          .attr('opacity', 0.3 + pulse * 0.7)\r
      })\r
    })\r
\r
    return () => timer.stop()\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};