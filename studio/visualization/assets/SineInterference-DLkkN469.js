var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'sine-interference',\r
  title: 'Sine Interference',\r
  desc: 'Sine Interference — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'SineInterference',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","sine-interference"],\r
}\r
\r
export default function SineInterference({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
    const paths = [\r
      svg.append('path').attr('fill', 'none').attr('stroke', colors[0]).attr('stroke-width', 1.5).attr('opacity', 0.5),\r
      svg.append('path').attr('fill', 'none').attr('stroke', colors[1]).attr('stroke-width', 1.5).attr('opacity', 0.5),\r
      svg.append('path').attr('fill', 'none').attr('stroke', colors[2]).attr('stroke-width', 2.5).attr('opacity', 0.8),\r
    ]\r
    const timer = d3.timer(elapsed => {\r
      const pts1 = Array.from({ length: 50 }, (_, i) => {\r
        const x = (i / 49) * W\r
        const y = H / 2 + Math.sin((i / 49) * Math.PI * 6 + elapsed * 0.003) * 40\r
        return { x, y }\r
      })\r
      const pts2 = Array.from({ length: 50 }, (_, i) => {\r
        const x = (i / 49) * W\r
        const y = H / 2 + Math.sin((i / 49) * Math.PI * 8 + elapsed * 0.004) * 35\r
        return { x, y }\r
      })\r
      paths[0].attr('d', d3.line().x(d => d.x).y(d => d.y)(pts1))\r
      paths[1].attr('d', d3.line().x(d => d.x).y(d => d.y)(pts2))\r
      const pts3 = pts1.map((p, i) => ({ x: p.x, y: p.y * 0.5 + pts2[i].y * 0.5 }))\r
      paths[2].attr('d', d3.line().x(d => d.x).y(d => d.y)(pts3))\r
    })\r
    return () => timer.stop()\r
  }, [])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};