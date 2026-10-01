var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'treemap-flow',\r
  title: 'Treemap Flow',\r
  desc: 'Treemap Flow — a hierarchies chart visualization',\r
  category: 'Hierarchies',\r
  component: 'TreemapFlow',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-hierarchy"],\r
  tags: ["hierarchies","treemap-flow"],\r
}\r
\r
export default function TreemapFlow({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
    const cols = 4, rows = 3, cw = W / cols, ch = H / rows\r
    const rects = Array.from({ length: cols * rows }, (_, i) =>\r
      svg.append('rect').attr('x', i % cols * cw + 2).attr('y', Math.floor(i / cols) * ch + 2)\r
        .attr('width', cw - 4).attr('height', ch - 4).attr('fill', colors[i % colors.length]).attr('opacity', 0.7).attr('rx', 3)\r
    )\r
    const timer = d3.timer(elapsed => {\r
      rects.forEach((r, i) => {\r
        const wave = Math.sin(elapsed * 0.003 + i * 0.3) * 5\r
        r.attr('width', (cw - 4) * (0.85 + Math.abs(wave) * 0.05))\r
        r.attr('height', (ch - 4) * (0.85 + Math.abs(wave) * 0.05))\r
        r.attr('x', i % cols * cw + 2 - wave * 0.5)\r
        r.attr('y', Math.floor(i / cols) * ch + 2 - wave * 0.3)\r
      })\r
    })\r
    return () => timer.stop()\r
  }, [])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};