var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'sine-beat',\r
  title: 'Sine Beat',\r
  desc: 'Sine Beat — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'SineBeat',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","sine-beat"],\r
}\r
\r
export default function SineBeat({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
    const path = svg.append('path').attr('fill', 'none').attr('stroke', colors[0]).attr('stroke-width', 2.5)\r
    const timer = d3.timer(elapsed => {\r
      const pts = Array.from({ length: 50 }, (_, i) => {\r
        const x = (i / 49) * W\r
        const f1 = Math.sin((i / 49) * Math.PI * 3 + elapsed * 0.004)\r
        const f2 = Math.sin((i / 49) * Math.PI * 3.2 + elapsed * 0.004)\r
        const y = H / 2 + (f1 + f2) * 30\r
        return { x, y }\r
      })\r
      path.attr('d', d3.line().x(d => d.x).y(d => d.y).curve(d3.curveBasis)(pts))\r
    })\r
    return () => timer.stop()\r
  }, [])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};