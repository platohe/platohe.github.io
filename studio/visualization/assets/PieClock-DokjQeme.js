var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'pie-clock',\r
  title: 'Pie Clock',\r
  desc: 'Pie Clock — a radial chart visualization',\r
  category: 'Radial',\r
  component: 'PieClock',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["radial","pie-clock"],\r
}\r
\r
export default function PieClock({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
    const data = [25, 15, 20, 10, 30]\r
    const g = svg.append('g').attr('transform', \`translate(\${W / 2},\${H / 2 + 10})\`)\r
    const pie = d3.pie().sort(null)\r
    const arc = d3.arc().innerRadius(25).outerRadius(80)\r
    pie(data).forEach((d, i) => g.append('path').attr('d', arc(d)).attr('fill', colors[i % colors.length]).attr('opacity', 0.85))\r
    const hand = g.append('line').attr('x1', 0).attr('y1', 0).attr('x2', 0).attr('y2', -70)\r
      .attr('stroke', colors[3]).attr('stroke-width', 3).attr('stroke-linecap', 'round')\r
    const timer = d3.timer(elapsed => {\r
      hand.attr('transform', \`rotate(\${elapsed * 0.003 * 360})\`)\r
    })\r
    return () => timer.stop()\r
  }, [])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};