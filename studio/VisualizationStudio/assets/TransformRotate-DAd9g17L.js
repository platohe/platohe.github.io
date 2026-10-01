var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'transform-rotate',\r
  title: 'Transform Rotate',\r
  desc: 'Transform Rotate — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'TransformRotate',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","transform-rotate"],\r
}\r
\r
export default function TransformRotate({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
    const shapes = [\r
      { el: 'rect', attr: { x: -30, y: -30, width: 60, height: 60, rx: 5 }, color: colors[0] },\r
      { el: 'circle', attr: { r: 35 }, color: colors[1] },\r
      { el: 'polygon', attr: { points: '0,-40 40,40 -40,40' }, color: colors[2] },\r
    ]\r
    const g = svg.append('g')\r
    shapes.forEach(s => {\r
  const el = g.append(s.el)\r
  Object.entries(s.attr).forEach(([k2, v2]) => el.attr(k2, v2))\r
  el.attr('fill', s.color).attr('opacity', 0.7)\r
})\r
    const timer = d3.timer(elapsed => {\r
      g.selectAll('rect, circle, polygon').each(function(_, i) {\r
        d3.select(this).attr('transform', \`rotate(\${elapsed * 0.05 * (i % 2 === 0 ? 1 : -1)}, 0, 0)\`)\r
      })\r
    })\r
    return () => timer.stop()\r
  }, [])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};