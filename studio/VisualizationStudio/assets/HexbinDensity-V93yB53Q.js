var e=`import { useRef, useEffect } from 'react'\r
import * as d3 from 'd3'\r
import { hexbin as d3Hexbin } from 'd3-hexbin'\r
import { defaultDataMap } from './defaultData'\r
\r
export const meta = {\r
  id: 'hexbin-density',\r
  title: 'Hexbin Density',\r
  desc: 'Hexbin Density — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'HexbinDensity',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","hexbin-density"],\r
}\r
\r
export default function HexbinDensity({ data }) {\r
  const svgRef = useRef(null)\r
\r
  useEffect(() => {\r
    if (!svgRef.current) return\r
\r
    const chartData = data || defaultDataMap.HexbinDensity\r
    const width = 600\r
    const height = 400\r
    const margin = { top: 20, right: 20, bottom: 30, left: 40 }\r
\r
    const svg = d3.select(svgRef.current)\r
      .attr('viewBox', [0, 0, width, height])\r
      .style('font', '11px sans-serif')\r
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
    // Hexbin generator\r
    const hexbinGenerator = d3Hexbin()\r
      .x(d => x(d.x))\r
      .y(d => y(d.y))\r
      .radius(14)\r
      .extent([[margin.left, margin.top], [width - margin.right, height - margin.bottom]])\r
\r
    const bins = hexbinGenerator(chartData)\r
\r
    const color = d3.scaleSequential(d3.interpolateYlGnBu)\r
      .domain([0, d3.max(bins, d => d.length) || 1])\r
\r
    // Hexagons\r
    svg.append('g')\r
      .selectAll('path')\r
      .data(bins)\r
      .join('path')\r
        .attr('d', hexbinGenerator.hexagon())\r
        .attr('transform', d => \`translate(\${d.x},\${d.y})\`)\r
        .attr('fill', d => color(d.length))\r
        .attr('stroke', '#0f172a')\r
        .attr('stroke-width', 0.5)\r
        .attr('opacity', 0.85)\r
\r
    // Contour overlays\r
    const contours = d3.contourDensity()\r
      .x(d => x(d.x))\r
      .y(d => y(d.y))\r
      .size([width, height])\r
      .bandwidth(20)(chartData)\r
\r
    svg.append('g')\r
      .attr('fill', 'none')\r
      .attr('stroke', '#ec4899')\r
      .attr('stroke-width', 1.5)\r
      .attr('stroke-linejoin', 'round')\r
      .selectAll('path')\r
      .data(contours)\r
      .join('path')\r
        .attr('d', d3.geoPath())\r
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