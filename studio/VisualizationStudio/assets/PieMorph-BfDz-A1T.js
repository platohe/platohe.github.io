var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'pie-morph',\r
  title: 'Pie Morph',\r
  desc: 'Pie Morph — a radial chart visualization',\r
  category: 'Radial',\r
  component: 'PieMorph',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["radial","pie-morph"],\r
}\r
\r
export default function PieMorph({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
    const datasets = [[30, 20, 25, 15, 10], [15, 35, 10, 25, 15], [25, 15, 30, 10, 20]]\r
    let idx = 0\r
    const g = svg.append('g').attr('transform', \`translate(\${W / 2},\${H / 2})\`)\r
    const pie = d3.pie().sort(null)\r
    const arc = d3.arc().innerRadius(25).outerRadius(100)\r
    const arcs = pie(datasets[0]).map((d, i) =>\r
      g.append('path').attr('d', arc(d)).attr('fill', colors[i % colors.length]).attr('opacity', 0.85)\r
    )\r
    const timer = d3.timer(elapsed => {\r
      if (elapsed % 2000 < 50) {\r
        idx = (idx + 1) % datasets.length\r
        const newArcs = pie(datasets[idx]).map((d, i) => ({ ...d, i }))\r
        arcs.forEach((a, i) => {\r
          a.transition().duration(1000).attr('d', arc(newArcs[i]))\r
        })\r
      }\r
    })\r
    return () => timer.stop()\r
  }, [])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};