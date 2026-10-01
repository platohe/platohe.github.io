var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'donut-ring',\r
  title: 'Donut Ring',\r
  desc: 'Donut Ring — a radial chart visualization',\r
  category: 'Radial',\r
  component: 'DonutRing',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["radial","donut-ring"],\r
}\r
\r
export default function DonutRing({ data: customData }) {\r
  const ref = useRef(null)\r
  const DEFAULT_DATA = [{"label":"Direct","value":35},{"label":"Organic","value":28},{"label":"Referral","value":20},{"label":"Social","value":17}]\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
    const total = d3.sum(data, d => d.value), cx = W / 2, cy = H / 2\r
    const pie = d3.pie().value(d => d.value).sort(null)\r
    const arc = d3.arc().innerRadius(55).outerRadius(95)\r
    const g = svg.append('g').attr('transform', \`translate(\${cx},\${cy})\`)\r
    g.selectAll('path').data(pie(data)).join('path').attr('d', arc).attr('fill', (d, i) => colors[i % colors.length]).attr('stroke', 'var(--bg)').attr('stroke-width', 2)\r
    g.append('text').attr('text-anchor', 'middle').attr('dy', '-0.1em').attr('fill', 'var(--text)').attr('font-size', '24px').attr('font-weight', 700).text(total)\r
    g.append('text').attr('text-anchor', 'middle').attr('dy', '1.3em').attr('fill', 'var(--text-secondary)').attr('font-size', '10px').text('Total')\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};