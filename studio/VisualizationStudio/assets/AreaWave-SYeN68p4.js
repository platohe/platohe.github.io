var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'area-wave',\r
  title: 'Area Wave',\r
  desc: 'Area Wave — a animation chart visualization',\r
  category: 'Animation',\r
  component: 'AreaWave',\r
  complexity: 'beginner',\r
  interactivity: ["animate"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["animation","area-wave"],\r
}\r
\r
export default function AreaWave({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
    const area = svg.append('path').attr('fill', colors[0]).attr('fill-opacity', 0.4).attr('stroke', colors[0]).attr('stroke-width', 2)\r
    const timer = d3.timer(elapsed => {\r
      const pts = Array.from({ length: 40 }, (_, i) => {\r
        const x = (i / 39) * W\r
        const y = H * 0.6 + Math.sin((i / 39) * Math.PI * 4 + elapsed * 0.003) * 50\r
        return { x, y }\r
      })\r
      area.attr('d', d3.area().x(d => d.x).y0(H).y1(d => d.y).curve(d3.curveBasis)(pts))\r
    })\r
    return () => timer.stop()\r
  }, [])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};