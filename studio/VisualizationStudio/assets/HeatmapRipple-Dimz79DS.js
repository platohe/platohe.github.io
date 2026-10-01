var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'heatmap-ripple',\r
  title: 'Heatmap Ripple',\r
  desc: 'Heatmap Ripple — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'HeatmapRipple',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-color"],\r
  tags: ["bars","heatmap-ripple"],\r
}\r
\r
export default function HeatmapRipple({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
    const cx = W / 2, cy = H / 2\r
    const rings = Array.from({ length: 8 }, (_, i) =>\r
      svg.append('circle').attr('cx', cx).attr('cy', cy).attr('r', 20 + i * 20)\r
        .attr('fill', 'none').attr('stroke', colors[i % colors.length]).attr('stroke-width', 3).attr('opacity', 0.6)\r
    )\r
    const timer = d3.timer(elapsed => {\r
      rings.forEach((r, i) => {\r
        const pulse = 1 + Math.sin(elapsed * 0.003 + i * 0.4) * 0.1\r
        r.attr('r', (20 + i * 20) * pulse).attr('opacity', 0.3 + Math.sin(elapsed * 0.004 + i) * 0.3)\r
      })\r
    })\r
    return () => timer.stop()\r
  }, [])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};