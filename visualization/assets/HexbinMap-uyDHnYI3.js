var e=`import { useRef, useEffect } from 'react'\r
import * as d3 from 'd3'\r
import { hexbin as d3Hexbin } from 'd3-hexbin'\r
import { defaultDataMap } from './defaultData'\r
\r
export const meta = {\r
  id: 'hexbin-map',\r
  title: 'Hexbin Map',\r
  desc: 'Hexbin Map — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'HexbinMap',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","hexbin-map"],\r
}\r
\r
export default function HexbinMap({ data }) {\r
  const svgRef = useRef(null)\r
\r
  useEffect(() => {\r
    if (!svgRef.current) return\r
\r
    const chartData = data || defaultDataMap.HexbinMap\r
    const width = 600\r
    const height = 400\r
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
    // Map outline\r
    const regions = [\r
      'M 50 100 Q 150 50 300 80 T 550 120 L 520 340 Q 300 380 100 320 Z'\r
    ]\r
\r
    svg.append('g')\r
      .selectAll('path')\r
      .data(regions)\r
      .join('path')\r
        .attr('d', d => d)\r
        .attr('fill', '#1e293b')\r
        .attr('stroke', '#334155')\r
        .attr('stroke-width', 1.5)\r
\r
    // Setup hexbin generator\r
    const hexbinGenerator = d3Hexbin()\r
      .x(d => d.x)\r
      .y(d => d.y)\r
      .radius(16)\r
      .extent([[0, 0], [width, height]])\r
\r
    const bins = hexbinGenerator(chartData)\r
\r
    const color = d3.scaleSequential(d3.interpolateViridis)\r
      .domain([0, d3.max(bins, d => d.length) || 1])\r
\r
    // Draw hexagon bins\r
    svg.append('g')\r
      .selectAll('path')\r
      .data(bins)\r
      .join('path')\r
        .attr('d', hexbinGenerator.hexagon())\r
        .attr('transform', d => \`translate(\${d.x},\${d.y})\`)\r
        .attr('fill', d => color(d.length))\r
        .attr('stroke', '#0f172a')\r
        .attr('stroke-width', 1)\r
        .attr('opacity', 0.85)\r
\r
    // Overlay points\r
    svg.append('g')\r
      .selectAll('circle')\r
      .data(chartData)\r
      .join('circle')\r
        .attr('cx', d => d.x)\r
        .attr('cy', d => d.y)\r
        .attr('r', 2)\r
        .attr('fill', '#f8fafc')\r
        .attr('opacity', 0.6)\r
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