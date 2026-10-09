var e=`import { useRef, useEffect } from 'react'\r
import * as d3 from 'd3'\r
import { defaultDataMap } from './defaultData'\r
\r
export const meta = {\r
  id: 'radial-stacked-area',\r
  title: 'Radial Stacked Area',\r
  desc: 'Radial Stacked Area — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'RadialStackedArea',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["bars","radial-stacked-area"],\r
}\r
\r
export default function RadialStackedArea({ data }) {\r
  const svgRef = useRef(null)\r
\r
  useEffect(() => {\r
    if (!svgRef.current) return\r
\r
    const chartData = data || defaultDataMap.RadialStackedArea\r
    const width = 500\r
    const height = 500\r
    const innerRadius = 70\r
    const outerRadius = width / 2 - 40\r
\r
    // Derive time key and stack keys from data shape\r
    const timeKey = chartData[0] && chartData[0].month !== undefined ? 'month'\r
      : chartData[0] && chartData[0].date !== undefined ? 'date'\r
      : null\r
    const keys = Object.keys(chartData[0]).filter(k => k !== timeKey && typeof chartData[0][k] === 'number')\r
\r
    const svg = d3.select(svgRef.current)\r
      .attr('viewBox', [-width / 2, -height / 2, width, height])\r
      .style('font', '11px sans-serif')\r
\r
    svg.selectAll('*').remove()\r
\r
    const x = d3.scaleBand()\r
      .domain(chartData.map(d => d[timeKey]))\r
      .range([0, 2 * Math.PI])\r
\r
    const series = d3.stack().keys(keys)(chartData)\r
    const yMax = d3.max(series, s => d3.max(s, d => d[1])) || 100\r
\r
    const y = d3.scaleLinear()\r
      .domain([0, yMax])\r
      .range([innerRadius, outerRadius])\r
\r
    const colors = d3.scaleOrdinal()\r
      .domain(keys)\r
      .range(['#6366f1', '#10b981', '#f59e0b', '#ec4899'])\r
\r
    const radialArea = d3.radialArea()\r
      .angle(d => x(d.data[timeKey]) + x.bandwidth() / 2)\r
      .innerRadius(d => y(d[0]))\r
      .outerRadius(d => y(d[1]))\r
      .curve(d3.curveCardinalClosed)\r
\r
    // Series Areas\r
    svg.append('g')\r
      .selectAll('path')\r
      .data(series)\r
      .join('path')\r
        .attr('fill', d => colors(d.key))\r
        .attr('fill-opacity', 0.65)\r
        .attr('stroke', '#0f172a')\r
        .attr('stroke-width', 1)\r
        .attr('d', radialArea)\r
\r
    // Month Labels\r
    const labels = svg.append('g')\r
      .attr('text-anchor', 'middle')\r
\r
    chartData.forEach(d => {\r
      const angle = x(d[timeKey]) + x.bandwidth() / 2\r
      const r = outerRadius + 18\r
      const lx = r * Math.sin(angle)\r
      const ly = -r * Math.cos(angle)\r
\r
      labels.append('text')\r
        .attr('x', lx)\r
        .attr('y', ly)\r
        .attr('fill', '#cbd5e1')\r
        .attr('alignment-baseline', 'middle')\r
        .text(d[timeKey])\r
    })\r
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