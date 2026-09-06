var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'transform-skew',\r
  title: 'Transform Skew',\r
  desc: 'Transform Skew — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'TransformSkew',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","transform-skew"],\r
}\r
\r
export default function TransformSkew({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
    const n = 10\r
    const cols = Array.from({ length: n }, (_, i) =>\r
      svg.append('rect').attr('x', i * (W / n)).attr('y', 30).attr('width', W / n - 2).attr('height', H - 60)\r
        .attr('fill', colors[i % colors.length]).attr('opacity', 0.6).attr('rx', 2)\r
    )\r
    const timer = d3.timer(elapsed => {\r
      const skew = Math.sin(elapsed * 0.002) * 15\r
      cols.forEach((c, i) => {\r
        const shift = skew * Math.sin(i / n * Math.PI)\r
        c.attr('transform', \`skewX(\${shift * 0.5})\`)\r
      })\r
    })\r
    return () => timer.stop()\r
  }, [])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};