var e=`import { useRef, useEffect } from 'react'\r
import * as d3 from 'd3'\r
import { defaultDataMap } from './defaultData'\r
\r
export const meta = {\r
  id: 'variable-color-line',\r
  title: 'Variable Color Line',\r
  desc: 'Variable Color Line — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'VariableColorLine',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["bars","variable-color-line"],\r
}\r
\r
export default function VariableColorLine({ data }) {\r
  const svgRef = useRef(null)\r
\r
  useEffect(() => {\r
    if (!svgRef.current) return\r
\r
    const chartData = data || defaultDataMap.VariableColorLine\r
    const width = 600\r
    const height = 380\r
    const margin = { top: 30, right: 30, bottom: 40, left: 50 }\r
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
      .domain(d3.extent(chartData, d => d.y)).nice()\r
      .range([height - margin.bottom, margin.top])\r
\r
    const colorScale = d3.scaleSequential(d3.interpolateRdYlGn)\r
      .domain(d3.extent(chartData, d => d.y))\r
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
    // Draw colored line segments\r
    for (let i = 0; i < chartData.length - 1; i++) {\r
      const seg = chartData.slice(i, i + 2)\r
      const midY = (seg[0].y + seg[1].y) / 2\r
\r
      svg.append('line')\r
        .attr('x1', x(seg[0].x))\r
        .attr('y1', y(seg[0].y))\r
        .attr('x2', x(seg[1].x))\r
        .attr('y2', y(seg[1].y))\r
        .attr('stroke', colorScale(midY))\r
        .attr('stroke-width', 3)\r
        .attr('stroke-linecap', 'round')\r
    }\r
\r
    // Color legend bar\r
    const legendW = 150\r
    const defs = svg.append('defs')\r
    const lg = defs.append('linearGradient')\r
      .attr('id', 'vcl-grad')\r
      .attr('x1', '0%').attr('x2', '100%')\r
\r
    lg.append('stop').attr('offset', '0%').attr('stop-color', d3.interpolateRdYlGn(0))\r
    lg.append('stop').attr('offset', '50%').attr('stop-color', d3.interpolateRdYlGn(0.5))\r
    lg.append('stop').attr('offset', '100%').attr('stop-color', d3.interpolateRdYlGn(1))\r
\r
    svg.append('rect')\r
      .attr('x', width - margin.right - legendW)\r
      .attr('y', margin.top)\r
      .attr('width', legendW)\r
      .attr('height', 10)\r
      .attr('fill', 'url(#vcl-grad)')\r
      .attr('rx', 4)\r
\r
    svg.append('text')\r
      .attr('x', width - margin.right - legendW)\r
      .attr('y', margin.top + 22)\r
      .attr('fill', '#94a3b8')\r
      .style('font-size', '9px')\r
      .text('Low → High value')\r
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