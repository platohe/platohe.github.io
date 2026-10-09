var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'donut-chart',\r
  title: 'Donut Chart',\r
  desc: 'Donut Chart — a radial chart visualization',\r
  category: 'Radial',\r
  component: 'DonutChart',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["radial","donut-chart"],\r
}\r
\r
export default function DonutChart({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const DEFAULT_DATA = [{"label":"Direct","value":35},{"label":"Organic","value":28},{"label":"Referral","value":20},{"label":"Social","value":17}]\r
    const data = (customData && ((Array.isArray(customData) && customData.length > 0) || (!Array.isArray(customData) && typeof customData === 'object' && Object.keys(customData).length > 0))) ? customData : DEFAULT_DATA\r
\r
    const color = ['#6366f1', '#f59e0b', '#10b981', '#ef4444']\r
    const pie = d3.pie().value((d) => d.value).sort(null)\r
    const arc = d3.arc().innerRadius(55).outerRadius(105)\r
\r
    svg.append('g')\r
      .attr('transform', 'translate(200, 150)')\r
      .selectAll('path')\r
      .data(pie(data))\r
      .join('path')\r
      .attr('d', arc)\r
      .attr('fill', (d, i) => color[i])\r
      .attr('stroke', 'var(--bg)')\r
      .attr('stroke-width', 2)\r
\r
    // Center text\r
    svg.append('text')\r
      .attr('x', 200).attr('y', 140)\r
      .attr('text-anchor', 'middle').attr('dominant-baseline', 'middle')\r
      .attr('fill', 'var(--text)').attr('font-size', '28px').attr('font-weight', 700)\r
      .text('100%')\r
\r
    svg.append('text')\r
      .attr('x', 200).attr('y', 162)\r
      .attr('text-anchor', 'middle').attr('dominant-baseline', 'middle')\r
      .attr('fill', 'var(--text-secondary)').attr('font-size', '11px')\r
      .text('Total')\r
\r
    // Legend\r
    const legend = svg.append('g').attr('transform', 'translate(310,20)')\r
    data.forEach((d, i) => {\r
      const lg = legend.append('g').attr('transform', \`translate(0, \${i * 22})\`)\r
      lg.append('rect').attr('width', 12).attr('height', 12).attr('rx', 3).attr('fill', color[i])\r
      lg.append('text').attr('x', 18).attr('y', 10).attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text(\`\${d.label} (\${d.value}%)\`)\r
    })\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};