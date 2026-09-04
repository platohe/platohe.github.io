var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'generative-noise',\r
  title: 'Generative Noise',\r
  desc: 'Generative Noise — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'GenerativeNoise',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","generative-noise"],\r
}\r
\r
export default function GenerativeNoise({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
    const res = 20, cols = Math.ceil(W / res), rows = Math.ceil(H / res)\r
    const cells = Array.from({ length: cols * rows }, (_, i) =>\r
      svg.append('rect').attr('x', i % cols * res).attr('y', Math.floor(i / cols) * res).attr('width', res).attr('height', res).attr('fill', colors[0])\r
    )\r
    const timer = d3.timer(elapsed => {\r
      const t = elapsed * 0.0003\r
      cells.forEach((c, i) => {\r
        const col = i % cols, row = Math.floor(i / cols)\r
        const x = col * 0.02, y = row * 0.02\r
        const v = (Math.sin(x * 10 + t) * Math.cos(y * 10 + t * 1.3) + Math.sin((x + y) * 5 + t * 0.7)) / 2 + 0.5\r
        const idx = Math.round(v * (colors.length - 1))\r
        c.attr('fill', colors[idx]).attr('opacity', 0.4 + v * 0.6)\r
      })\r
    })\r
    return () => timer.stop()\r
  }, [])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};