var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'transform-bounce',\r
  title: 'Transform Bounce',\r
  desc: 'Transform Bounce — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'TransformBounce',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","transform-bounce"],\r
}\r
\r
export default function TransformBounce({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
    const n = 5, bw = W / n - 8\r
    const balls = Array.from({ length: n }, (_, i) => ({\r
      x: i * (W / n) + (W / n) / 2, vy: 0, baseY: H * 0.5,\r
      el: svg.append('circle').attr('r', bw / 2 - 4).attr('fill', colors[i % colors.length])\r
    }))\r
    const timer = d3.timer(elapsed => {\r
      balls.forEach((b, i) => {\r
        b.vy += 0.3\r
        b.y = (b.y || b.baseY) + b.vy\r
        if (b.y > b.baseY + 60) { b.y = b.baseY + 60; b.vy = -(8 + Math.random() * 4) }\r
        if (b.y < b.baseY - 80) { b.y = b.baseY - 80; b.vy = Math.abs(b.vy) * 0.8 }\r
        b.el.attr('cx', b.x).attr('cy', b.y)\r
      })\r
    })\r
    return () => timer.stop()\r
  }, [])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};