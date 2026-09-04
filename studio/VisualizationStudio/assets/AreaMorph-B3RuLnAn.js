var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'area-morph',\r
  title: 'Area Morph',\r
  desc: 'Area Morph — a areas chart visualization',\r
  category: 'Areas',\r
  component: 'AreaMorph',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["areas","area-morph"],\r
}\r
\r
export default function AreaMorph({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
    const shapes = [\r
      Array.from({ length: 30 }, (_, i) => ({ x: (i / 29) * W, y: H * 0.4 + Math.sin(i * 0.5) * 40 })),\r
      Array.from({ length: 30 }, (_, i) => ({ x: (i / 29) * W, y: H * 0.4 + (i % 2 === 0 ? -30 : 30) })),\r
      Array.from({ length: 30 }, (_, i) => ({ x: (i / 29) * W, y: H * 0.4 + Math.cos(i * 0.3) * 50 })),\r
    ]\r
    const area = svg.append('path').attr('fill', colors[0]).attr('fill-opacity', 0.4).attr('stroke', colors[0]).attr('stroke-width', 2)\r
    let t = 0\r
    const timer = d3.timer(elapsed => {\r
      t = (elapsed * 0.0003) % 1\r
      const si = Math.floor(t * 3), st = (t * 3) - si\r
      const s0 = shapes[si], s1 = shapes[(si + 1) % 3]\r
      const interp = s0.map((p, i) => ({ x: p.x, y: p.y * (1 - st) + s1[i].y * st }))\r
      area.attr('d', d3.area().x(d => d.x).y0(H).y1(d => d.y).curve(d3.curveBasis)(interp))\r
    })\r
    return () => timer.stop()\r
  }, [])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};