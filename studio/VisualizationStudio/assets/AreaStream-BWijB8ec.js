var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'area-stream',\r
  title: 'Area Stream',\r
  desc: 'Area Stream — a areas chart visualization',\r
  category: 'Areas',\r
  component: 'AreaStream',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["areas","area-stream"],\r
}\r
\r
export default function AreaStream({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
    const data = Array.from({ length: 30 }, (_, i) => ({ x: i, y: 50 + Math.random() * 50 }))\r
    const area = svg.append('path').attr('fill', colors[0]).attr('fill-opacity', 0.4).attr('stroke', colors[0]).attr('stroke-width', 1.5)\r
    const timer = d3.timer(elapsed => {\r
      data.shift()\r
      data.push({ x: data.length, y: 30 + Math.random() * 70 })\r
      const pts = data.map(d => ({ x: (d.x / 30) * W, y: d.y / 100 * H }))\r
      area.attr('d', d3.area().x(d => d.x).y0(H).y1(d => d.y).curve(d3.curveBasis)(pts))\r
    })\r
    return () => timer.stop()\r
  }, [])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};