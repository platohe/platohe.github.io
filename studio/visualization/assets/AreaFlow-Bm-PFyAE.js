var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'area-flow',\r
  title: 'Area Flow',\r
  desc: 'Area Flow — a areas chart visualization',\r
  category: 'Areas',\r
  component: 'AreaFlow',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["areas","area-flow"],\r
}\r
\r
export default function AreaFlow({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
    const paths = [\r
      svg.append('path').attr('fill', colors[0]).attr('fill-opacity', 0.3).attr('stroke', colors[0]),\r
      svg.append('path').attr('fill', colors[2]).attr('fill-opacity', 0.3).attr('stroke', colors[2]),\r
    ]\r
    const timer = d3.timer(elapsed => {\r
      paths.forEach((p, pi) => {\r
        const pts = Array.from({ length: 40 }, (_, i) => {\r
          const x = (i / 39) * W\r
          const y = H * 0.5 + (pi - 0.5) * 40 + Math.sin((i / 39) * Math.PI * 3 + elapsed * 0.002 + pi) * 30\r
          return { x, y }\r
        })\r
        p.attr('d', d3.area().x(d => d.x).y0(H).y1(d => d.y).curve(d3.curveBasis)(pts))\r
      })\r
    })\r
    return () => timer.stop()\r
  }, [])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};