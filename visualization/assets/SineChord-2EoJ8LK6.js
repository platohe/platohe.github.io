var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'sine-chord',\r
  title: 'Sine Chord',\r
  desc: 'Sine Chord — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'SineChord',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-shape"],\r
  tags: ["bars","sine-chord"],\r
}\r
\r
export default function SineChord({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
    const freqs = [1, 1.5, 2, 2.5, 3]\r
    const paths = freqs.map((f, i) =>\r
      svg.append('path').attr('fill', 'none').attr('stroke', colors[i]).attr('stroke-width', 1.5).attr('opacity', 0.6)\r
    )\r
    const timer = d3.timer(elapsed => {\r
      const t = elapsed * 0.003\r
      paths.forEach((p, i) => {\r
        const pts = Array.from({ length: 50 }, (_, j) => {\r
          const x = (j / 49) * W\r
          const y = H / 2 + Math.sin((j / 49) * Math.PI * 2 * freqs[i] + t * freqs[i]) * (40 / freqs[i])\r
          return { x, y }\r
        })\r
        p.attr('d', d3.line().x(d => d.x).y(d => d.y)(pts))\r
      })\r
    })\r
    return () => timer.stop()\r
  }, [])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};