var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'generative-lsys',\r
  title: 'Generative Lsys',\r
  desc: 'Generative Lsys — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'GenerativeLsys',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","generative-lsys"],\r
}\r
\r
export default function GenerativeLsys({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
    const cx = W / 2, baseY = H - 20\r
    const depth = 9\r
    function draw(x, y, angle, len, d) {\r
      if (d <= 0 || len < 3) return\r
      const x2 = x + Math.cos(angle) * len\r
      const y2 = y + Math.sin(angle) * len\r
      svg.append('line').attr('x1', x).attr('y1', y).attr('x2', x2).attr('y2', y2)\r
        .attr('stroke', colors[d % colors.length]).attr('stroke-width', d * 0.4).attr('opacity', 0.7)\r
      draw(x2, y2, angle - 0.4, len * 0.7, d - 1)\r
      draw(x2, y2, angle + 0.4, len * 0.7, d - 1)\r
    }\r
    const timer = d3.timer(elapsed => {\r
      svg.selectAll('*').remove()\r
      const grow = Math.min(1, (elapsed % 4000) / 2000)\r
      function drawG(x, y, angle, len, d) {\r
        if (d <= 0 || len < 3) return\r
        const x2 = x + Math.cos(angle) * len * grow\r
        const y2 = y + Math.sin(angle) * len * grow\r
        svg.append('line').attr('x1', x).attr('y1', y).attr('x2', x2).attr('y2', y2)\r
          .attr('stroke', colors[d % colors.length]).attr('stroke-width', d * 0.4).attr('opacity', 0.7)\r
        drawG(x2, y2, angle - 0.4, len * 0.7, d - 1)\r
        drawG(x2, y2, angle + 0.4, len * 0.7, d - 1)\r
      }\r
      drawG(cx, baseY, -Math.PI / 2, 45, depth)\r
    })\r
    return () => timer.stop()\r
  }, [])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};