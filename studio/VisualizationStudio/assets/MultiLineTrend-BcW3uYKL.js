var e=`import { useRef, useEffect } from 'react'\r
import * as d3 from 'd3'\r
import { defaultDataMap } from './defaultData'\r
\r
export const meta = {\r
  id: 'multi-line-trend',\r
  title: 'Multi Line Trend',\r
  desc: 'Multi Line Trend — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'MultiLineTrend',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["bars","multi-line-trend"],\r
}\r
\r
export default function MultiLineTrend({ data }) {\r
  const svgRef = useRef(null)\r
\r
  useEffect(() => {\r
    if (!svgRef.current) return\r
\r
    const chartData = data || defaultDataMap.MultiLineTrend\r
    const width = 600\r
    const height = 380\r
    const margin = { top: 30, right: 40, bottom: 40, left: 40 }\r
\r
    const svg = d3.select(svgRef.current)\r
      .attr('viewBox', [0, 0, width, height])\r
      .style('font', '11px sans-serif')\r
\r
    svg.selectAll('*').remove()\r
\r
    const x = d3.scaleLinear()\r
      .domain(d3.extent(chartData, d => d.x))\r
      .range([margin.left, width - margin.right])\r
\r
    const y = d3.scaleLinear()\r
      .domain([0, d3.max(chartData, d => d.upper || d.y + 15) || 100]).nice()\r
      .range([height - margin.bottom, margin.top])\r
\r
    // Axes\r
    svg.append('g')\r
      .attr('transform', \`translate(0,\${height - margin.bottom})\`)\r
      .call(d3.axisBottom(x))\r
      .attr('color', '#94a3b8')\r
\r
    svg.append('g')\r
      .attr('transform', \`translate(\${margin.left},0)\`)\r
      .call(d3.axisLeft(y))\r
      .attr('color', '#94a3b8')\r
\r
    // Confidence envelope band\r
    const area = d3.area()\r
      .x(d => x(d.x))\r
      .y0(d => y(d.lower || d.y - 10))\r
      .y1(d => y(d.upper || d.y + 10))\r
\r
    svg.append('path')\r
      .datum(chartData)\r
      .attr('fill', 'rgba(99, 102, 241, 0.25)')\r
      .attr('d', area)\r
\r
    // Trend line\r
    const line = d3.line()\r
      .x(d => x(d.x))\r
      .y(d => y(d.y))\r
      .curve(d3.curveMonotoneX)\r
\r
    svg.append('path')\r
      .datum(chartData)\r
      .attr('fill', 'none')\r
      .attr('stroke', '#6366f1')\r
      .attr('stroke-width', 2.5)\r
      .attr('d', line)\r
\r
    // Highlight points\r
    svg.append('g')\r
      .selectAll('circle')\r
      .data(chartData)\r
      .join('circle')\r
        .attr('cx', d => x(d.x))\r
        .attr('cy', d => y(d.y))\r
        .attr('r', 4)\r
        .attr('fill', '#ec4899')\r
        .attr('stroke', '#0f172a')\r
        .attr('stroke-width', 1.5)\r
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