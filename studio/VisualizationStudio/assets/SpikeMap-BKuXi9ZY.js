var e=`import { useRef, useEffect } from 'react'\r
import * as d3 from 'd3'\r
import { defaultDataMap } from './defaultData'\r
\r
export const meta = {\r
  id: 'spike-map',\r
  title: 'Spike Map',\r
  desc: 'Spike Map — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'SpikeMap',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","spike-map"],\r
}\r
\r
export default function SpikeMap({ data }) {\r
  const svgRef = useRef(null)\r
\r
  useEffect(() => {\r
    if (!svgRef.current) return\r
\r
    const chartData = data || defaultDataMap.SpikeMap\r
    const width = 600\r
    const height = 380\r
\r
    const svg = d3.select(svgRef.current)\r
      .attr('viewBox', [0, 0, width, height])\r
      .style('font', '11px sans-serif')\r
\r
    svg.selectAll('*').remove()\r
\r
    // Base background styling\r
    svg.append('rect')\r
      .attr('width', width)\r
      .attr('height', height)\r
      .attr('fill', '#0f172a')\r
      .attr('rx', 8)\r
\r
    // Geographic feature grid/regions\r
    const regions = [\r
      { id: 'East', path: 'M 350 100 L 550 120 L 520 320 L 320 280 Z' },\r
      { id: 'Central', path: 'M 180 80 L 350 100 L 320 280 L 150 250 Z' },\r
      { id: 'West', path: 'M 40 60 L 180 80 L 150 250 L 50 220 Z' }\r
    ]\r
\r
    svg.append('g')\r
      .selectAll('path')\r
      .data(regions)\r
      .join('path')\r
        .attr('d', d => d.path)\r
        .attr('fill', '#1e293b')\r
        .attr('stroke', '#334155')\r
        .attr('stroke-width', 1.5)\r
\r
    // Spike scale\r
    const lengthMax = 90\r
    const maxVal = d3.max(chartData, d => d.value) || 100\r
    const length = d3.scaleLinear()\r
      .domain([0, maxVal])\r
      .range([0, lengthMax])\r
\r
    // Draw spikes (sorted by y so bottom spikes overlap top ones naturally)\r
    const sortedData = [...chartData].sort((a, b) => a.y - b.y)\r
\r
    const spikeGroup = svg.append('g')\r
\r
    sortedData.forEach(d => {\r
      const len = length(d.value)\r
      const w = 8\r
      const px = d.x\r
      const py = d.y\r
\r
      // Spike triangle path: top tip at (px, py - len), base at (px - w/2, py) and (px + w/2, py)\r
      const pathD = \`M \${px - w / 2} \${py} L \${px} \${py - len} L \${px + w / 2} \${py} Z\`\r
\r
      spikeGroup.append('path')\r
        .attr('d', pathD)\r
        .attr('fill', 'rgba(239, 68, 68, 0.45)')\r
        .attr('stroke', '#ef4444')\r
        .attr('stroke-width', 1.2)\r
        .attr('stroke-linejoin', 'round')\r
\r
      spikeGroup.append('circle')\r
        .attr('cx', px)\r
        .attr('cy', py)\r
        .attr('r', 2)\r
        .attr('fill', '#f8fafc')\r
    })\r
\r
    // Legend\r
    const legend = svg.append('g')\r
      .attr('transform', \`translate(\${width - 100}, \${height - 40})\`)\r
\r
    legend.append('text')\r
      .attr('fill', '#94a3b8')\r
      .text('Spike Height = Value')\r
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