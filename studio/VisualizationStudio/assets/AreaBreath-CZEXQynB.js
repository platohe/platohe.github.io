var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'area-breath',\r
  title: 'Area Breath',\r
  desc: 'Area Breath — a areas chart visualization',\r
  category: 'Areas',\r
  component: 'AreaBreath',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["areas","area-breath"],\r
}\r
\r
export default function AreaBreath({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
    const area = svg.append('path').attr('fill', colors[0]).attr('fill-opacity', 0.4).attr('stroke', colors[0]).attr('stroke-width', 2)\r
    const timer = d3.timer(elapsed => {\r
      const breath = 1 + Math.sin(elapsed * 0.002) * 0.3\r
      const pts = Array.from({ length: 40 }, (_, i) => {\r
        const x = (i / 39) * W\r
        const y = H * 0.5 - Math.abs(Math.sin((i / 39) * Math.PI * 2)) * 80 * breath\r
        return { x, y }\r
      })\r
      area.attr('d', d3.area().x(d => d.x).y0(H).y1(d => d.y).curve(d3.curveBasis)(pts))\r
    })\r
    return () => timer.stop()\r
  }, [])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};