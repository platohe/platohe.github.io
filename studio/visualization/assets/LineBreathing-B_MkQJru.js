var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'line-breathing',\r
  title: 'Line Breathing',\r
  desc: 'Line Breathing — a lines chart visualization',\r
  category: 'Lines',\r
  component: 'LineBreathing',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["lines","line-breathing"],\r
}\r
\r
export default function LineBreathing({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const N = 100, line = d3.line()\r
      .x((d, i) => (i / (N - 1)) * W)\r
      .y(d => d[1]).curve(d3.curveCatmullRom.alpha(0.5))\r
\r
    const path = svg.append('path').attr('fill', 'none').attr('stroke', colors[0]).attr('stroke-width', 2.5)\r
\r
    const timer = d3.timer(elapsed => {\r
      const t = elapsed * 0.001\r
      const amp = 40 + 30 * Math.sin(t * 0.5)\r
      const pts = Array.from({ length: N }, (_, i) => {\r
        const x = i\r
        const y = H / 2 + Math.sin(t + i * 0.08) * amp\r
        return [x, y]\r
      })\r
      path.attr('d', line(pts))\r
    })\r
    return () => timer.stop()\r
  }, [])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};