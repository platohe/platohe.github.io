var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'transform-bounce2',\r
  title: 'Transform Bounce2',\r
  desc: 'Transform Bounce2 — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'TransformBounce2',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","transform-bounce2"],\r
}\r
\r
export default function TransformBounce2({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
    const cx = W / 2, ground = H - 40\r
    const balls = Array.from({ length: 5 }, (_, i) => ({\r
      x: cx - 80 + i * 40, vy: -(5 + i * 2), restY: ground,\r
      el: svg.append('circle').attr('r', 15).attr('fill', colors[i % colors.length])\r
    }))\r
    const timer = d3.timer(elapsed => {\r
      balls.forEach(b => {\r
        b.vy += 0.4\r
        b.restY += b.vy\r
        if (b.restY >= ground) { b.restY = ground; b.vy = -(7 + Math.random() * 3) }\r
        b.el.attr('cx', b.x).attr('cy', b.restY)\r
      })\r
    })\r
    return () => timer.stop()\r
  }, [])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};