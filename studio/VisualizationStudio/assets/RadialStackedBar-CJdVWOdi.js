var e=`import { useRef, useEffect } from 'react'\r
import * as d3 from 'd3'\r
import { defaultDataMap } from './defaultData'\r
\r
export const meta = {\r
  id: 'radial-stacked-bar',\r
  title: 'Radial Stacked Bar',\r
  desc: 'Radial Stacked Bar — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'RadialStackedBar',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["bars","radial-stacked-bar"],\r
}\r
\r
export default function RadialStackedBar({ data }) {\r
  const svgRef = useRef(null)\r
\r
  useEffect(() => {\r
    if (!svgRef.current) return\r
\r
    const chartData = data || defaultDataMap.RadialStackedBar\r
    const width = 500\r
    const height = 500\r
    const innerRadius = 90\r
    const outerRadius = Math.min(width, height) / 2 - 40\r
\r
    const keys = Object.keys(chartData[0]).filter(k => k !== 'category')\r
\r
    const svg = d3.select(svgRef.current)\r
      .attr('viewBox', [-width / 2, -height / 2, width, height])\r
      .style('font', '11px sans-serif')\r
\r
    svg.selectAll('*').remove()\r
\r
    const x = d3.scaleBand()\r
      .domain(chartData.map(d => d.category))\r
      .range([0, 2 * Math.PI])\r
      .padding(0.1)\r
\r
    const series = d3.stack().keys(keys)(chartData)\r
\r
    const yMax = d3.max(series, s => d3.max(s, d => d[1]))\r
    const y = d3.scaleRadial()\r
      .domain([0, yMax])\r
      .range([innerRadius, outerRadius])\r
\r
    const colors = d3.scaleOrdinal()\r
      .domain(keys)\r
      .range(['#6366f1', '#10b981', '#f59e0b', '#ec4899'])\r
\r
    const arc = d3.arc()\r
      .innerRadius(d => y(d[0]))\r
      .outerRadius(d => y(d[1]))\r
      .startAngle(d => x(d.data.category))\r
      .endAngle(d => x(d.data.category) + x.bandwidth())\r
      .padAngle(0.01)\r
      .padRadius(innerRadius)\r
\r
    // Bars\r
    svg.append('g')\r
      .selectAll('g')\r
      .data(series)\r
      .join('g')\r
        .attr('fill', d => colors(d.key))\r
      .selectAll('path')\r
      .data(d => d)\r
      .join('path')\r
        .attr('d', arc)\r
\r
    // Category labels on outer edge\r
    const labelGroup = svg.append('g')\r
      .attr('text-anchor', 'middle')\r
\r
    chartData.forEach(d => {\r
      const angle = x(d.category) + x.bandwidth() / 2\r
      const r = outerRadius + 15\r
      const lx = r * Math.sin(angle)\r
      const ly = -r * Math.cos(angle)\r
\r
      labelGroup.append('text')\r
        .attr('x', lx)\r
        .attr('y', ly)\r
        .attr('fill', '#cbd5e1')\r
        .attr('alignment-baseline', 'middle')\r
        .text(d.category)\r
    })\r
\r
    // Center title/legend\r
    const legendGroup = svg.append('g')\r
      .attr('text-anchor', 'middle')\r
\r
    legendGroup.append('text')\r
      .attr('y', -10)\r
      .attr('fill', '#f8fafc')\r
      .style('font-weight', 'bold')\r
      .text('Radial Stacked')\r
\r
  }, [data])\r
\r
  return (\r
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\r
      <svg ref={svgRef} style={{ width: '100%', height: '100%', maxHeight: '450px' }} />\r
    </div>\r
  )\r
}\r
`;export{e as default};