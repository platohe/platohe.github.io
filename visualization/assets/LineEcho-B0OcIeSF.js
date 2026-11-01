var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'line-echo',\r
  title: 'Line Echo',\r
  desc: 'Line Echo — a lines chart visualization',\r
  category: 'Lines',\r
  component: 'LineEcho',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["lines","line-echo"],\r
}\r
\r
export default function LineEcho({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const N = 80\r
    const main = svg.append('path').attr('fill', 'none').attr('stroke', colors[0]).attr('stroke-width', 2.5)\r
    const ghosts = [1, 2, 3].map(i =>\r
      svg.append('path').attr('fill', 'none').attr('stroke', colors[i % colors.length]).attr('stroke-width', 1.5).attr('opacity', 0.3)\r
    )\r
\r
    const timer = d3.timer(elapsed => {\r
      const t = elapsed * 0.002\r
      const pts = Array.from({ length: N }, (_, i) => {\r
        const x = (i / N) * W\r
        const y = H / 2 + Math.sin(t + i * 0.08) * 50\r
        return [x, y]\r
      })\r
      const line = d3.line().curve(d3.curveCatmullRom.alpha(0.5))\r
      main.attr('d', line(pts))\r
      ghosts.forEach((g, gi) => {\r
        const offset = (gi + 1) * 8\r
        const p = pts.map(p => [p[0] + offset, p[1]])\r
        g.attr('d', line(p))\r
      })\r
    })\r
    return () => timer.stop()\r
  }, [])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};