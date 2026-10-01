var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'area-mountain',\r
  title: 'Area Mountain',\r
  desc: 'Area Mountain — a areas chart visualization',\r
  category: 'Areas',\r
  component: 'AreaMountain',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["areas","area-mountain"],\r
}\r
\r
export default function AreaMountain({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
    const area = svg.append('path').attr('fill', colors[0]).attr('fill-opacity', 0.5).attr('stroke', colors[0]).attr('stroke-width', 2)\r
    const timer = d3.timer(elapsed => {\r
      const pts = Array.from({ length: 50 }, (_, i) => {\r
        const x = (i / 49) * W\r
        const base = H * 0.7\r
        const peak = base - 120 * Math.exp(-Math.pow((i / 49 - 0.5) * 3, 2))\r
        const noise = Math.sin(i * 0.5 + elapsed * 0.002) * 10\r
        return { x, y: peak + noise }\r
      })\r
      area.attr('d', d3.area().x(d => d.x).y0(H).y1(d => d.y).curve(d3.curveBasis)(pts))\r
    })\r
    return () => timer.stop()\r
  }, [])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};