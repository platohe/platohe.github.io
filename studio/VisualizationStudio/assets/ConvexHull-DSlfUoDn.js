var e=`import { useRef, useEffect } from 'react'\r
import * as d3 from 'd3'\r
import { defaultDataMap } from './defaultData'\r
\r
export const meta = {\r
  id: 'convex-hull',\r
  title: 'Convex Hull',\r
  desc: 'Convex Hull — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'ConvexHull',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","convex-hull"],\r
}\r
\r
export default function ConvexHull({ data }) {\r
  const svgRef = useRef(null)\r
\r
  useEffect(() => {\r
    if (!svgRef.current) return\r
\r
    const chartData = data || defaultDataMap.ConvexHull\r
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
    const groups = d3.group(chartData, d => d.group)\r
    const colors = d3.scaleOrdinal(d3.schemeCategory10)\r
\r
    // Hull polygons\r
    const hullsGroup = svg.append('g')\r
\r
    groups.forEach((points, groupKey) => {\r
      const coords = points.map(p => [x(p.x), y(p.y)])\r
      const hull = d3.polygonHull(coords)\r
\r
      if (hull) {\r
        hullsGroup.append('path')\r
          .datum(hull)\r
          .attr('d', d => \`M\${d.join('L')}Z\`)\r
          .attr('fill', colors(groupKey))\r
          .attr('fill-opacity', 0.25)\r
          .attr('stroke', colors(groupKey))\r
          .attr('stroke-width', 2)\r
          .attr('stroke-linejoin', 'round')\r
      }\r
    })\r
\r
    // Scatter points\r
    svg.append('g')\r
      .selectAll('circle')\r
      .data(chartData)\r
      .join('circle')\r
        .attr('cx', d => x(d.x))\r
        .attr('cy', d => y(d.y))\r
        .attr('r', 5)\r
        .attr('fill', d => colors(d.group))\r
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