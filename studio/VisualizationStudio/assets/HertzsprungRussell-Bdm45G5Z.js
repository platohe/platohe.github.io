var e=`import { useRef, useEffect } from 'react'\r
import * as d3 from 'd3'\r
import { defaultDataMap } from './defaultData'\r
\r
export const meta = {\r
  id: 'hertzsprung-russell',\r
  title: 'Hertzsprung Russell',\r
  desc: 'Hertzsprung Russell — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'HertzsprungRussell',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","hertzsprung-russell"],\r
}\r
\r
export default function HertzsprungRussell({ data }) {\r
  const svgRef = useRef(null)\r
\r
  useEffect(() => {\r
    if (!svgRef.current) return\r
\r
    const chartData = data || defaultDataMap.HertzsprungRussell\r
    const width = 600\r
    const height = 440\r
    const margin = { top: 30, right: 30, bottom: 50, left: 60 }\r
\r
    const svg = d3.select(svgRef.current)\r
      .attr('viewBox', [0, 0, width, height])\r
      .style('font', '11px sans-serif')\r
\r
    svg.selectAll('*').remove()\r
\r
    // Temperature (x) is reversed (hot left, cool right)\r
    const x = d3.scaleLog()\r
      .domain([d3.max(chartData, d => d.temperature), d3.min(chartData, d => d.temperature)])\r
      .range([margin.left, width - margin.right])\r
\r
    const y = d3.scaleLog()\r
      .domain([d3.min(chartData, d => d.luminosity), d3.max(chartData, d => d.luminosity)]).nice()\r
      .range([height - margin.bottom, margin.top])\r
\r
    const rScale = d3.scaleSqrt()\r
      .domain([0, d3.max(chartData, d => d.radius || 1)])\r
      .range([2, 12])\r
\r
    const colorScale = d3.scaleSequential(d3.interpolateRdYlBu)\r
      .domain([d3.max(chartData, d => d.temperature), d3.min(chartData, d => d.temperature)])\r
\r
    svg.append('g')\r
      .attr('transform', \`translate(0,\${height - margin.bottom})\`)\r
      .call(d3.axisBottom(x).ticks(5).tickFormat(d3.format('.0s')))\r
      .attr('color', '#94a3b8')\r
\r
    svg.append('g')\r
      .attr('transform', \`translate(\${margin.left},0)\`)\r
      .call(d3.axisLeft(y).ticks(5).tickFormat(d3.format('.0e')))\r
      .attr('color', '#94a3b8')\r
\r
    svg.append('text').attr('x', width / 2).attr('y', height - 10)\r
      .attr('text-anchor', 'middle').attr('fill', '#94a3b8').text('Temperature (K)')\r
\r
    svg.append('text').attr('x', -height / 2).attr('y', 15)\r
      .attr('transform', 'rotate(-90)').attr('text-anchor', 'middle').attr('fill', '#94a3b8').text('Luminosity (L☉)')\r
\r
    svg.append('g')\r
      .selectAll('circle')\r
      .data(chartData)\r
      .join('circle')\r
        .attr('cx', d => x(d.temperature))\r
        .attr('cy', d => y(d.luminosity))\r
        .attr('r', d => rScale(d.radius || 2))\r
        .attr('fill', d => colorScale(d.temperature))\r
        .attr('fill-opacity', 0.75)\r
        .attr('stroke', '#0f172a')\r
        .attr('stroke-width', 0.5)\r
\r
  }, [data])\r
\r
  return (\r
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\r
      <svg ref={svgRef} style={{ width: '100%', height: '100%', maxHeight: '460px' }} />\r
    </div>\r
  )\r
}\r
`;export{e as default};