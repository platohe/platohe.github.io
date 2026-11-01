var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'sine-standing',\r
  title: 'Sine Standing',\r
  desc: 'Sine Standing — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'SineStanding',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","sine-standing"],\r
}\r
\r
export default function SineStanding({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
    const path = svg.append('path').attr('fill', 'none').attr('stroke', colors[0]).attr('stroke-width', 2.5)\r
    const timer = d3.timer(elapsed => {\r
      const pts = Array.from({ length: 50 }, (_, i) => {\r
        const x = (i / 49) * W\r
        const env = Math.sin((i / 49) * Math.PI)\r
        const y = H / 2 + env * 70 * Math.sin(elapsed * 0.003)\r
        return { x, y }\r
      })\r
      path.attr('d', d3.line().x(d => d.x).y(d => d.y).curve(d3.curveBasis)(pts))\r
    })\r
    return () => timer.stop()\r
  }, [])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};