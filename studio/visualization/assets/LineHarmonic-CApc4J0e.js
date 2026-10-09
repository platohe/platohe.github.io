var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'line-harmonic',\r
  title: 'Line Harmonic',\r
  desc: 'Line Harmonic — a lines chart visualization',\r
  category: 'Lines',\r
  component: 'LineHarmonic',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["lines","line-harmonic"],\r
}\r
\r
export default function LineHarmonic({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const N = 100\r
    const paths = [\r
      svg.append('path').attr('fill', 'none').attr('stroke', colors[0]).attr('stroke-width', 1.5).attr('opacity', 0.7),\r
      svg.append('path').attr('fill', 'none').attr('stroke', colors[1]).attr('stroke-width', 1.5).attr('opacity', 0.7),\r
      svg.append('path').attr('fill', 'none').attr('stroke', colors[2]).attr('stroke-width', 1.5).attr('opacity', 0.7),\r
      svg.append('path').attr('fill', 'none').attr('stroke', colors[3]).attr('stroke-width', 2),\r
    ]\r
\r
    const timer = d3.timer(elapsed => {\r
      const t = elapsed * 0.002\r
      const freqs = [1, 2, 3, 5]\r
      paths.forEach((path, ci) => {\r
        const pts = Array.from({ length: N }, (_, i) => {\r
          const x = (i / N) * W\r
          let y = H / 2\r
          for (let h = 1; h <= 5; h++) y += Math.sin(t * h + i * 0.05 * h) * (30 / h) * (ci === 0 ? 1 : 0.5)\r
          y += Math.sin(t + i * 0.08 * freqs[ci]) * (ci === 3 ? 40 : 20)\r
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