var e=`import { useRef, useEffect } from 'react'\r
import * as d3 from 'd3'\r
import { defaultDataMap } from './defaultData'\r
\r
export const meta = {\r
  id: 'threshold-area',\r
  title: 'Threshold Area',\r
  desc: 'Threshold Area — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'ThresholdArea',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["bars","threshold-area"],\r
}\r
\r
export default function ThresholdArea({ data }) {\r
  const svgRef = useRef(null)\r
\r
  useEffect(() => {\r
    if (!svgRef.current) return\r
\r
    const chartData = data || defaultDataMap.ThresholdArea\r
    const width = 600\r
    const height = 380\r
    const margin = { top: 30, right: 30, bottom: 40, left: 40 }\r
    const threshold = 65\r
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
      .domain([0, d3.max(chartData, d => d.value) || 100]).nice()\r
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
    // Base area below threshold\r
    const areaBase = d3.area()\r
      .x(d => x(d.x))\r
      .y0(height - margin.bottom)\r
      .y1(d => y(Math.min(d.value, threshold)))\r
\r
    svg.append('path')\r
      .datum(chartData)\r
      .attr('fill', 'rgba(99, 102, 241, 0.35)')\r
      .attr('d', areaBase)\r
\r
    // Excess area above threshold\r
    const areaExcess = d3.area()\r
      .x(d => x(d.x))\r
      .y0(d => y(Math.min(d.value, threshold)))\r
      .y1(d => y(Math.max(d.value, threshold)))\r
\r
    svg.append('path')\r
      .datum(chartData)\r
      .attr('fill', 'rgba(239, 68, 68, 0.55)')\r
      .attr('d', areaExcess)\r
\r
    // Main line curve\r
    const line = d3.line()\r
      .x(d => x(d.x))\r
      .y(d => y(d.value))\r
\r
    svg.append('path')\r
      .datum(chartData)\r
      .attr('fill', 'none')\r
      .attr('stroke', '#6366f1')\r
      .attr('stroke-width', 2.5)\r
      .attr('d', line)\r
\r
    // Threshold baseline\r
    svg.append('line')\r
      .attr('x1', margin.left)\r
      .attr('y1', y(threshold))\r
      .attr('x2', width - margin.right)\r
      .attr('y2', y(threshold))\r
      .attr('stroke', '#ef4444')\r
      .attr('stroke-dasharray', '4,4')\r
      .attr('stroke-width', 1.5)\r
\r
    svg.append('text')\r
      .attr('x', width - margin.right)\r
      .attr('y', y(threshold) - 6)\r
      .attr('text-anchor', 'end')\r
      .attr('fill', '#ef4444')\r
      .text(\`Threshold: \${threshold}\`)\r
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