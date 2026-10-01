var e=`import { useRef, useEffect } from 'react'\r
import * as d3 from 'd3'\r
import { defaultDataMap } from './defaultData'\r
\r
export const meta = {\r
  id: 'connected-scatter',\r
  title: 'Connected Scatter',\r
  desc: 'Connected Scatter — a dots chart visualization',\r
  category: 'Dots',\r
  component: 'ConnectedScatter',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["dots","connected-scatter"],\r
}\r
\r
export default function ConnectedScatter({ data }) {\r
  const svgRef = useRef(null)\r
\r
  useEffect(() => {\r
    if (!svgRef.current) return\r
\r
    const chartData = data || defaultDataMap.ConnectedScatter\r
    const width = 600\r
    const height = 400\r
    const margin = { top: 30, right: 40, bottom: 40, left: 50 }\r
\r
    const svg = d3.select(svgRef.current)\r
      .attr('viewBox', [0, 0, width, height])\r
      .style('font', '12px sans-serif')\r
\r
    svg.selectAll('*').remove()\r
\r
    const x = d3.scaleLinear()\r
      .domain(d3.extent(chartData, d => d.x)).nice()\r
      .range([margin.left, width - margin.right])\r
\r
    const y = d3.scaleLinear()\r
      .domain(d3.extent(chartData, d => d.y)).nice()\r
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
    // Connecting line\r
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
      .attr('stroke-linejoin', 'round')\r
      .attr('stroke-linecap', 'round')\r
      .attr('d', line)\r
\r
    // Dots and text callouts\r
    const points = svg.append('g')\r
      .selectAll('g')\r
      .data(chartData)\r
      .join('g')\r
\r
    points.append('circle')\r
      .attr('cx', d => x(d.x))\r
      .attr('cy', d => y(d.y))\r
      .attr('r', 5)\r
      .attr('fill', '#ec4899')\r
      .attr('stroke', '#0f172a')\r
      .attr('stroke-width', 2)\r
\r
    points.append('text')\r
      .attr('x', d => x(d.x) + 8)\r
      .attr('y', d => y(d.y) + 4)\r
      .attr('fill', '#cbd5e1')\r
      .style('font-size', '10px')\r
      .text(d => d.year || \`\${d.x}, \${d.y}\`)\r
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