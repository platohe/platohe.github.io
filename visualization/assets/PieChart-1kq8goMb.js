var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
import { getDefaultData } from './defaultData'\r
\r
export const meta = {\r
  id: 'pie-chart',\r
  title: 'Pie Chart',\r
  desc: 'Pie Chart — a radial chart visualization',\r
  category: 'Radial',\r
  component: 'PieChart',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["radial","pie-chart"],\r
}\r
\r
export default function PieChart({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"label":"React","value":35},{"label":"Vue","value":25},{"label":"Angular","value":20},{"label":"Svelte","value":12},{"label":"Other","value":8}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0)\r
      ? customData\r
      : DEFAULT_DATA // 'PieChart')\r
\r
    const color = ['#6366f1', '#f59e0b', '#10b981', '#ef4444', '#8b5cf6', '#06b6d4', '#ec4899', '#84cc16']\r
    const pie = d3.pie().value((d) => d.value).sort(null)\r
    const arc = d3.arc().innerRadius(50).outerRadius(110)\r
    const arcHover = d3.arc().innerRadius(50).outerRadius(120)\r
\r
    const g = svg.append('g').attr('transform', 'translate(160, 150)')\r
\r
    g.selectAll('path')\r
      .data(pie(data))\r
      .join('path')\r
      .attr('d', arc)\r
      .attr('fill', (d, i) => color[i % color.length])\r
      .attr('stroke', 'var(--bg)')\r
      .attr('stroke-width', 2)\r
      .on('mouseover', function (event, d) {\r
        d3.select(this).transition().duration(200).attr('d', arcHover)\r
      })\r
      .on('mouseout', function () {\r
        d3.select(this).transition().duration(200).attr('d', arc)\r
      })\r
\r
    // Labels inside arcs\r
    const labelArc = d3.arc().innerRadius(80).outerRadius(80)\r
    g.selectAll('text')\r
      .data(pie(data))\r
      .join('text')\r
      .attr('transform', (d) => \`translate(\${labelArc.centroid(d)})\`)\r
      .attr('text-anchor', 'middle')\r
      .attr('dominant-baseline', 'middle')\r
      .attr('fill', '#ffffff')\r
      .attr('font-size', '11px')\r
      .attr('font-weight', 600)\r
      .text((d) => \`\${((d.endAngle - d.startAngle) / (2 * Math.PI) * 100).toFixed(0)}%\`)\r
\r
    // Legend\r
    const legend = svg.append('g').attr('transform', 'translate(280,40)')\r
    data.forEach((d, i) => {\r
      const lg = legend.append('g').attr('transform', \`translate(0, \${i * 22})\`)\r
      lg.append('rect').attr('width', 12).attr('height', 12).attr('rx', 3).attr('fill', color[i % color.length])\r
      lg.append('text').attr('x', 18).attr('y', 10).attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text(d.label || \`Item \${i+1}\`)\r
    })\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};