var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'transform-scale',\r
  title: 'Transform Scale',\r
  desc: 'Transform Scale — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'TransformScale',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","transform-scale"],\r
}\r
\r
export default function TransformScale({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
    const cx = W / 2, cy = H / 2\r
    const rects = [\r
      { x: -50, y: -50, w: 40, h: 40, fill: colors[0] },\r
      { x: 10, y: -50, w: 40, h: 40, fill: colors[1] },\r
      { x: -50, y: 10, w: 40, h: 40, fill: colors[2] },\r
      { x: 10, y: 10, w: 40, h: 40, fill: colors[3] },\r
    ]\r
    const rEls = rects.map(r => svg.append('rect').attr('x', cx + r.x).attr('y', cy + r.y).attr('width', r.w).attr('height', r.h).attr('fill', r.fill).attr('rx', 4))\r
    const timer = d3.timer(elapsed => {\r
      const s = 0.6 + Math.sin(elapsed * 0.003) * 0.4\r
      rEls.forEach((r, i) => {\r
        const sc = s * (1 + Math.sin(elapsed * 0.005 + i) * 0.2)\r
        const cx2 = cx + rects[i].x + rects[i].w / 2, cy2 = cy + rects[i].y + rects[i].h / 2\r
        r.attr('x', cx2 - rects[i].w * sc / 2).attr('y', cy2 - rects[i].h * sc / 2).attr('width', rects[i].w * sc).attr('height', rects[i].h * sc)\r
      })\r
    })\r
    return () => timer.stop()\r
  }, [])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};