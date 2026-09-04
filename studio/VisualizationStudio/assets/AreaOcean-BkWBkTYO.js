var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'area-ocean',\r
  title: 'Area Ocean',\r
  desc: 'Area Ocean — a areas chart visualization',\r
  category: 'Areas',\r
  component: 'AreaOcean',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["areas","area-ocean"],\r
}\r
\r
export default function AreaOcean({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
    const layers = [\r
      { yBase: H * 0.6, amp: 30, speed: 0.002, color: colors[0], opacity: 0.3 },\r
      { yBase: H * 0.7, amp: 25, speed: 0.0025, color: colors[1], opacity: 0.35 },\r
      { yBase: H * 0.8, amp: 20, speed: 0.003, color: colors[2], opacity: 0.4 },\r
    ]\r
    const paths = layers.map(l =>\r
      svg.append('path').attr('fill', l.color).attr('fill-opacity', l.opacity).attr('stroke', l.color)\r
    )\r
    const timer = d3.timer(elapsed => {\r
      layers.forEach((l, li) => {\r
        const pts = Array.from({ length: 50 }, (_, i) => {\r
          const x = (i / 49) * W\r
          const y = l.yBase - Math.sin((i / 49) * Math.PI * 3 + elapsed * l.speed) * l.amp\r
            - Math.sin((i / 49) * Math.PI * 5 + elapsed * l.speed * 1.5) * l.amp * 0.3\r
          return { x, y }\r
        })\r
        paths[li].attr('d', d3.area().x(d => d.x).y0(H).y1(d => d.y).curve(d3.curveBasis)(pts))\r
      })\r
    })\r
    return () => timer.stop()\r
  }, [])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};