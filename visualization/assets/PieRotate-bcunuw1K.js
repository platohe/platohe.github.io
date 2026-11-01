var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'pie-rotate',\r
  title: 'Pie Rotate',\r
  desc: 'Pie Rotate — a radial chart visualization',\r
  category: 'Radial',\r
  component: 'PieRotate',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["radial","pie-rotate"],\r
}\r
\r
export default function PieRotate({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
    const data = [30, 20, 25, 15, 10]\r
    const g = svg.append('g').attr('transform', \`translate(\${W / 2},\${H / 2})\`)\r
    const pie = d3.pie().sort(null)\r
    const arc = d3.arc().innerRadius(30).outerRadius(100)\r
    const arcs = pie(data).map((d, i) =>\r
      g.append('path').attr('d', arc(d)).attr('fill', colors[i % colors.length]).attr('opacity', 0.85)\r
    )\r
    const timer = d3.timer(elapsed => {\r
      arcs.forEach(a => a.attr('transform', \`rotate(\${elapsed * 0.05})\`))\r
    })\r
    return () => timer.stop()\r
  }, [])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};