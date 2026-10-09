var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'line-wave',\r
  title: 'Line Wave',\r
  desc: 'Line Wave — a animation chart visualization',\r
  category: 'Animation',\r
  component: 'LineWave',\r
  complexity: 'beginner',\r
  interactivity: ["animate"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["animation","line-wave"],\r
}\r
\r
export default function LineWave({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const config = customData || { points: 80 }\r
    const { points = 80 } = config\r
\r
    const amp = 60, cy = H / 2\r
    const path = svg.append('path')\r
      .attr('fill', 'none')\r
      .attr('stroke', colors[0])\r
      .attr('stroke-width', 2.5)\r
\r
    const timer = d3.timer(elapsed => {\r
      const t = elapsed * 0.002\r
      const pts = Array.from({ length: points }, (_, i) => {\r
        const x = (i / points) * W\r
        const y = cy + Math.sin(t + i * 0.15) * amp * Math.sin(i * 0.05)\r
        return [x, y]\r
      })\r
      path.attr('d', d3.line().curve(d3.curveCatmullRom.alpha(0.5))(pts))\r
    })\r
\r
    return () => timer.stop()\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};