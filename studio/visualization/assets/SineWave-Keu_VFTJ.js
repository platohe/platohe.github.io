var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'sine-wave',\r
  title: 'Sine Wave',\r
  desc: 'Sine Wave — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'SineWave',\r
  complexity: 'beginner',\r
  interactivity: ["animate"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","sine-wave"],\r
}\r
\r
export default function SineWave({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const config = customData || { segments: 50 }\r
    const { segments = 50 } = config\r
\r
    const path = svg.append('path')\r
      .attr('fill', 'none')\r
      .attr('stroke', colors[0])\r
      .attr('stroke-width', 2.5)\r
\r
    const timer = d3.timer(elapsed => {\r
      const pts = Array.from({ length: segments }, (_, i) => ({\r
        x: (i / (segments - 1)) * W,\r
        y: H / 2 + Math.sin((i / (segments - 1)) * Math.PI * 4 + elapsed * 0.003) * 55\r
      }))\r
      path.attr('d', d3.line().x(d => d.x).y(d => d.y).curve(d3.curveBasis)(pts))\r
    })\r
\r
    return () => timer.stop()\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};