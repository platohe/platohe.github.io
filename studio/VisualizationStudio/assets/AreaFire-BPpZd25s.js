var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'area-fire',\r
  title: 'Area Fire',\r
  desc: 'Area Fire — a areas chart visualization',\r
  category: 'Areas',\r
  component: 'AreaFire',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["areas","area-fire"],\r
}\r
\r
export default function AreaFire({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
    const n = 25\r
    const paths = [\r
      svg.append('path').attr('fill', colors[3]).attr('fill-opacity', 0.4),\r
      svg.append('path').attr('fill', colors[1]).attr('fill-opacity', 0.5),\r
      svg.append('path').attr('fill', colors[0]).attr('fill-opacity', 0.6),\r
    ]\r
    const timer = d3.timer(elapsed => {\r
      paths.forEach((p, pi) => {\r
        const pts = Array.from({ length: n }, (_, i) => {\r
          const x = (i / (n - 1)) * W\r
          const base = H - 20\r
          const flame = Math.sin(i * 0.3 + elapsed * 0.01 + pi) * (30 - pi * 8) * Math.exp(-Math.abs(i - n / 2) / (n / 4))\r
          return { x, y: base - Math.abs(flame) - pi * 10 }\r
        })\r
        p.attr('d', d3.area().x(d => d.x).y0(H).y1(d => d.y).curve(d3.curveBasis)(pts))\r
      })\r
    })\r
    return () => timer.stop()\r
  }, [])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};