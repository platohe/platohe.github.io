var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'line-morph',\r
  title: 'Line Morph',\r
  desc: 'Line Morph — a lines chart visualization',\r
  category: 'Lines',\r
  component: 'LineMorph',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["lines","line-morph"],\r
}\r
\r
export default function LineMorph({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const N = 60\r
    const shapes = [\r
      Array.from({ length: N + 1 }, (_, i) => H / 2 + Math.sin(i * 0.2) * 60),\r
      Array.from({ length: N + 1 }, (_, i) => {\r
        const phase = (i / N) * Math.PI * 4\r
        return H / 2 + (phase % (Math.PI * 2) < Math.PI ? 40 : -40) * Math.sin(phase)\r
      }),\r
      Array.from({ length: N + 1 }, (_, i) => H / 2 + (i % 30 < 15 ? 50 : -50) * Math.sin(i * 0.15)),\r
    ]\r
\r
    const path = svg.append('path').attr('fill', 'none').attr('stroke', colors[0]).attr('stroke-width', 3)\r
\r
    let idx = 0\r
    const timer = d3.timer(elapsed => {\r
      const t = elapsed * 0.001\r
      const cycle = Math.floor(t * 0.5) % shapes.length\r
      const next = (cycle + 1) % shapes.length\r
      const progress = (t * 0.5) % 1\r
      const pts = shapes[cycle].map((v, i) => v + (shapes[next][i] - v) * progress)\r
      path.attr('d', d3.line().x((d, i) => (i / N) * W).y(d => d)(pts))\r
    })\r
    return () => timer.stop()\r
  }, [])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};