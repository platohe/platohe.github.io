var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'pie-chart-wedge',\r
  title: 'Pie Chart Wedge',\r
  desc: 'Pie Chart Wedge — a radial chart visualization',\r
  category: 'Radial',\r
  component: 'PieChartWedge',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["radial","pie-chart-wedge"],\r
}\r
\r
export default function PieChartWedge({ data: customData }) {\r
  const ref = useRef(null)\r
  const DEFAULT_DATA = [{"label":"Category A","value":40},{"label":"Category B","value":30},{"label":"Category C","value":20},{"label":"Category D","value":10}]\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
    const total = d3.sum(data, d => d.value), cx = W / 2 - 50, cy = H / 2\r
    const pie = d3.pie().value(d => d.value).sort(null)\r
    const arc = d3.arc().innerRadius(20).outerRadius(95)\r
    const g = svg.append('g').attr('transform', \`translate(\${cx},\${cy})\`)\r
    g.selectAll('path').data(pie(data)).join('path').attr('d', arc).attr('fill', (d, i) => colors[i % colors.length]).attr('stroke', 'var(--bg)').attr('stroke-width', 2)\r
    g.selectAll('text').data(pie(data)).join('text').attr('transform', d => \`translate(\${arc.centroid(d)})\`).attr('text-anchor', 'middle').attr('fill', '#fff').attr('font-size', '11px').attr('font-weight', 700).text(d => Math.round(d.data.value / total * 100) + '%')\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};