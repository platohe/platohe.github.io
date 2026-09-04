var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'line-multi-wave',\r
  title: 'Line Multi Wave',\r
  desc: 'Line Multi Wave — a animation chart visualization',\r
  category: 'Animation',\r
  component: 'LineMultiWave',\r
  complexity: 'beginner',\r
  interactivity: ["animate"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["animation","line-multi-wave"],\r
}\r
\r
export default function LineMultiWave({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const N = 80, cy = H / 2, amps = [50, 35, 65]\r
    const paths = colors.slice(0, 3).map((c, ci) =>\r
      svg.append('path').attr('fill', 'none').attr('stroke', c).attr('stroke-width', 2).attr('opacity', 0.8)\r
    )\r
\r
    const timer = d3.timer(elapsed => {\r
      const t = elapsed * 0.002\r
      paths.forEach((path, ci) => {\r
        const pts = Array.from({ length: N }, (_, i) => {\r
          const x = (i / N) * W\r
          const y = cy + Math.sin(t + i * (0.1 + ci * 0.05) + ci) * amps[ci]\r
          return [x, y]\r
        })\r
        path.attr('d', d3.line().curve(d3.curveCatmullRom.alpha(0.5))(pts))\r
      })\r
    })\r
    return () => timer.stop()\r
  }, [])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};