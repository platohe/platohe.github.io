var e=`import { useRef, useEffect } from 'react'\r
import * as d3 from 'd3'\r
import { defaultDataMap } from './defaultData'\r
\r
export const meta = {\r
  id: 'scatter-shapes',\r
  title: 'Scatter Shapes',\r
  desc: 'Scatter Shapes — a dots chart visualization',\r
  category: 'Dots',\r
  component: 'ScatterShapes',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["dots","scatter-shapes"],\r
}\r
\r
export default function ScatterShapes({ data }) {\r
  const svgRef = useRef(null)\r
\r
  useEffect(() => {\r
    if (!svgRef.current) return\r
\r
    const chartData = data || defaultDataMap.ScatterShapes\r
    const width = 600\r
    const height = 400\r
    const margin = { top: 30, right: 30, bottom: 40, left: 40 }\r
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
    const groups = [...new Set(chartData.map(d => d.group))]\r
    const color = d3.scaleOrdinal(d3.schemeTableau10).domain(groups)\r
\r
    const symbolTypes = [\r
      d3.symbolCircle, d3.symbolSquare, d3.symbolTriangle,\r
      d3.symbolDiamond, d3.symbolCross, d3.symbolStar\r
    ]\r
    const symbolScale = d3.scaleOrdinal()\r
      .domain(groups)\r
      .range(symbolTypes.map(t => d3.symbol().type(t).size(80)()))\r
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
    // Points with symbols\r
    svg.append('g')\r
      .selectAll('path')\r
      .data(chartData)\r
      .join('path')\r
        .attr('transform', d => \`translate(\${x(d.x)},\${y(d.y)})\`)\r
        .attr('d', d => symbolScale(d.group))\r
        .attr('fill', d => color(d.group))\r
        .attr('stroke', '#0f172a')\r
        .attr('stroke-width', 1.5)\r
        .attr('fill-opacity', 0.85)\r
\r
    // Legend\r
    groups.forEach((g, i) => {\r
      const lx = margin.left + i * 90\r
      svg.append('path')\r
        .attr('transform', \`translate(\${lx + 8},\${margin.top - 14})\`)\r
        .attr('d', symbolScale(g))\r
        .attr('fill', color(g))\r
        .attr('stroke', '#0f172a')\r
        .attr('stroke-width', 1)\r
\r
      svg.append('text')\r
        .attr('x', lx + 20)\r
        .attr('y', margin.top - 10)\r
        .attr('fill', '#cbd5e1')\r
        .style('font-size', '10px')\r
        .text(g)\r
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