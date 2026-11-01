var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'line-ripple',\r
  title: 'Line Ripple',\r
  desc: 'Line Ripple — a lines chart visualization',\r
  category: 'Lines',\r
  component: 'LineRipple',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["lines","line-ripple"],\r
}\r
\r
export default function LineRipple({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const cx = W / 2, cy = H / 2\r
    const circles = Array.from({ length: 12 }, (_, i) =>\r
      svg.append('circle').attr('cx', cx).attr('cy', cy).attr('r', 5).attr('fill', 'none')\r
        .attr('stroke', colors[i % colors.length]).attr('stroke-width', 1.5)\r
    )\r
\r
    const timer = d3.timer(elapsed => {\r
      const t = elapsed * 0.002\r
      circles.forEach((c, i) => {\r
        const phase = (t + i * 0.4) % 4\r
        const r = 10 + phase * 35\r
        c.attr('r', r).attr('stroke-opacity', Math.max(0, 1 - phase / 4))\r
      })\r
    })\r
    return () => timer.stop()\r
  }, [])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};