var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'generative-growth',\r
  title: 'Generative Growth',\r
  desc: 'Generative Growth — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'GenerativeGrowth',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","generative-growth"],\r
}\r
\r
export default function GenerativeGrowth({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
    const cx = W / 2, cy = H / 2\r
    const blob = svg.append('path').attr('fill', colors[0]).attr('fill-opacity', 0.5)\r
    const timer = d3.timer(elapsed => {\r
      const pts = Array.from({ length: 60 }, (_, i) => {\r
        const a = (i / 60) * Math.PI * 2\r
        const r = 60 + Math.sin(a * 3 + elapsed * 0.002) * 20 + Math.cos(a * 5 + elapsed * 0.003) * 10\r
        return { x: cx + Math.cos(a) * r, y: cy + Math.sin(a) * r }\r
      })\r
      blob.attr('d', \`M\${pts.map(p => \`\${p.x},\${p.y}\`).join('L')}Z\`)\r
    })\r
    return () => timer.stop()\r
  }, [])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};