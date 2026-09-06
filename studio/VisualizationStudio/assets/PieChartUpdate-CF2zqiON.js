var e=`import { useEffect, useRef, useState } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'pie-chart-update',\r
  title: 'Pie Chart Update',\r
  desc: 'Pie Chart Update — a radial chart visualization',\r
  category: 'Radial',\r
  component: 'PieChartUpdate',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["radial","pie-chart-update"],\r
}\r
\r
export default function PieChartUpdate({ data: customData }) {\r
  const ref = useRef(null)\r
  const [data, setData] = useState(\r
    Array.isArray(customData) && customData.length > 0\r
      ? customData\r
      : [\r
          { label: 'React', value: 35 },\r
          { label: 'Vue', value: 25 },\r
          { label: 'Angular', value: 20 },\r
          { label: 'Svelte', value: 12 },\r
          { label: 'Other', value: 8 },\r
        ],\r
  )\r
\r
  const datasets = [\r
    [\r
      { label: 'React', value: 35 },\r
      { label: 'Vue', value: 25 },\r
      { label: 'Angular', value: 20 },\r
      { label: 'Svelte', value: 12 },\r
      { label: 'Other', value: 8 },\r
    ],\r
    [\r
      { label: 'React', value: 45 },\r
      { label: 'Vue', value: 15 },\r
      { label: 'Angular', value: 10 },\r
      { label: 'Svelte', value: 20 },\r
      { label: 'Other', value: 10 },\r
    ],\r
    [\r
      { label: 'React', value: 20 },\r
      { label: 'Vue', value: 30 },\r
      { label: 'Angular', value: 25 },\r
      { label: 'Svelte', value: 15 },\r
      { label: 'Other', value: 10 },\r
    ],\r
    [\r
      { label: 'React', value: 30 },\r
      { label: 'Vue', value: 20 },\r
      { label: 'Angular', value: 15 },\r
      { label: 'Svelte', value: 25 },\r
      { label: 'Other', value: 10 },\r
    ],\r
  ]\r
\r
  const [currentIndex, setCurrentIndex] = useState(0)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const color = ['#6366f1', '#f59e0b', '#10b981', '#ef4444', '#8b5cf6', '#06b6d4', '#ec4899', '#84cc16']\r
    const pie = d3.pie().value((d) => d.value).sort(null)\r
    const arc = d3.arc().innerRadius(50).outerRadius(110)\r
    const arcHover = d3.arc().innerRadius(50).outerRadius(120)\r
\r
    const g = svg.append('g').attr('transform', 'translate(160, 150)')\r
\r
    // Initial render\r
    const paths = g.selectAll('path')\r
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
    const labels = g.selectAll('text')\r
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
\r
    // Update button\r
    const button = svg.append('g')\r
      .attr('transform', 'translate(20, 270)')\r
      .attr('cursor', 'pointer')\r
      .on('click', () => {\r
        const nextIndex = (currentIndex + 1) % datasets.length\r
        setCurrentIndex(nextIndex)\r
        setData(datasets[nextIndex])\r
      })\r
\r
    button.append('rect')\r
      .attr('width', 100)\r
      .attr('height', 24)\r
      .attr('rx', 4)\r
      .attr('fill', '#6366f1')\r
\r
    button.append('text')\r
      .attr('x', 50)\r
      .attr('y', 16)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'white')\r
      .attr('font-size', '11px')\r
      .attr('font-weight', 600)\r
      .text('Update Data')\r
\r
  }, [])\r
\r
  // Handle data updates with transitions\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    const color = ['#6366f1', '#f59e0b', '#10b981', '#ef4444', '#8b5cf6', '#06b6d4', '#ec4899', '#84cc16']\r
    const pie = d3.pie().value((d) => d.value).sort(null)\r
    const arc = d3.arc().innerRadius(50).outerRadius(110)\r
\r
    const g = svg.select('g').attr('transform', 'translate(160, 150)')\r
\r
    // Update paths with transition\r
    const paths = g.selectAll('path')\r
      .data(pie(data))\r
\r
    paths.transition()\r
      .duration(750)\r
      .attrTween('d', (d) => {\r
        const interpolate = d3.interpolate(d.startAngle, d.endAngle)\r
        return (t) => {\r
          const interpolatedD = { ...d, startAngle: interpolate(0), endAngle: interpolate(t) }\r
          return arc(interpolatedD)\r
        }\r
      })\r
\r
    // Update labels\r
    const labelArc = d3.arc().innerRadius(80).outerRadius(80)\r
    g.selectAll('text')\r
      .data(pie(data))\r
      .transition()\r
      .duration(750)\r
      .attr('transform', (d) => \`translate(\${labelArc.centroid(d)})\`)\r
      .text((d) => \`\${((d.endAngle - d.startAngle) / (2 * Math.PI) * 100).toFixed(0)}%\`)\r
\r
  }, [data])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}`;export{e as default};