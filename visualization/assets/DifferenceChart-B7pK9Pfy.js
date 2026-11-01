var e=`import { useRef, useEffect } from 'react'\r
import * as d3 from 'd3'\r
import { defaultDataMap } from './defaultData'\r
\r
export const meta = {\r
  id: 'difference-chart',\r
  title: 'Difference Chart',\r
  desc: 'Difference Chart — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'DifferenceChart',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","difference-chart"],\r
}\r
\r
export default function DifferenceChart({ data }) {\r
  const svgRef = useRef(null)\r
\r
  useEffect(() => {\r
    if (!svgRef.current) return\r
\r
    const chartData = data || defaultDataMap.DifferenceChart\r
    const width = 600\r
    const height = 380\r
    const margin = { top: 30, right: 30, bottom: 40, left: 40 }\r
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
    const yMin = d3.min(chartData, d => Math.min(d.actual, d.baseline))\r
    const yMax = d3.max(chartData, d => Math.max(d.actual, d.baseline))\r
\r
    const y = d3.scaleLinear()\r
      .domain([yMin, yMax]).nice()\r
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
    // Clip paths for difference fill\r
    const idAbove = 'above-clip'\r
    const idBelow = 'below-clip'\r
\r
    const areaAbove = d3.area()\r
      .x(d => x(d.x))\r
      .y0(y(yMin))\r
      .y1(d => y(d.actual))\r
\r
    const areaBelow = d3.area()\r
      .x(d => x(d.x))\r
      .y0(height - margin.bottom)\r
      .y1(d => y(d.baseline))\r
\r
    const defs = svg.append('defs')\r
\r
    defs.append('clipPath')\r
      .attr('id', idAbove)\r
      .append('path')\r
      .datum(chartData)\r
      .attr('d', areaAbove)\r
\r
    defs.append('clipPath')\r
      .attr('id', idBelow)\r
      .append('path')\r
      .datum(chartData)\r
      .attr('d', areaBelow)\r
\r
    // Green surplus fill (actual > baseline)\r
    svg.append('path')\r
      .datum(chartData)\r
      .attr('clip-path', \`url(#\${idAbove})\`)\r
      .attr('fill', 'rgba(16, 185, 129, 0.45)')\r
      .attr('d', d3.area()\r
        .x(d => x(d.x))\r
        .y0(height - margin.bottom)\r
        .y1(d => y(d.baseline)))\r
\r
    // Red deficit fill (actual < baseline)\r
    svg.append('path')\r
      .datum(chartData)\r
      .attr('clip-path', \`url(#\${idBelow})\`)\r
      .attr('fill', 'rgba(239, 68, 68, 0.45)')\r
      .attr('d', d3.area()\r
        .x(d => x(d.x))\r
        .y0(y(yMin))\r
        .y1(d => y(d.actual)))\r
\r
    // Lines\r
    const lineActual = d3.line()\r
      .x(d => x(d.x))\r
      .y(d => y(d.actual))\r
\r
    const lineBaseline = d3.line()\r
      .x(d => x(d.x))\r
      .y(d => y(d.baseline))\r
\r
    svg.append('path')\r
      .datum(chartData)\r
      .attr('fill', 'none')\r
      .attr('stroke', '#10b981')\r
      .attr('stroke-width', 2)\r
      .attr('d', lineActual)\r
\r
    svg.append('path')\r
      .datum(chartData)\r
      .attr('fill', 'none')\r
      .attr('stroke', '#ef4444')\r
      .attr('stroke-width', 2)\r
      .attr('stroke-dasharray', '4,4')\r
      .attr('d', lineBaseline)\r
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