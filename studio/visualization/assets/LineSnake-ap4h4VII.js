var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'line-snake',\r
  title: 'Line Snake',\r
  desc: 'Line Snake — a lines chart visualization',\r
  category: 'Lines',\r
  component: 'LineSnake',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["lines","line-snake"],\r
}\r
\r
export default function LineSnake({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const N = 60, segLen = W / N\r
    const path = svg.append('path').attr('fill', 'none').attr('stroke', colors[0]).attr('stroke-width', 4).attr('stroke-linecap', 'round')\r
\r
    const timer = d3.timer(elapsed => {\r
      const t = elapsed * 0.002\r
      const pts = Array.from({ length: N }, (_, i) => {\r
        const x = i * (W / N)\r
        const y = H / 2 + Math.sin(t + i * 0.2) * 50 * Math.cos(i * 0.05)\r
        return [x, y]\r
      })\r
      path.attr('d', d3.line().curve(d3.curveCatmullRom.alpha(0.5))(pts))\r
    })\r
    return () => timer.stop()\r
  }, [])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};