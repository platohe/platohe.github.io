var e=`import { useRef, useEffect } from 'react'\r
import * as d3 from 'd3'\r
import { defaultDataMap } from './defaultData'\r
\r
export const meta = {\r
  id: 'radial-area',\r
  title: 'Radial Area',\r
  desc: 'Radial Area — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'RadialArea',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["bars","radial-area"],\r
}\r
\r
export default function RadialArea({ data }) {\r
  const svgRef = useRef(null)\r
\r
  useEffect(() => {\r
    if (!svgRef.current) return\r
\r
    const chartData = data || defaultDataMap.RadialArea\r
    const width = 500\r
    const height = 500\r
    const innerRadius = 80\r
    const outerRadius = width / 2 - 40\r
\r
    const svg = d3.select(svgRef.current)\r
      .attr('viewBox', [-width / 2, -height / 2, width, height])\r
      .style('font', '11px sans-serif')\r
\r
    svg.selectAll('*').remove()\r
\r
    const x = d3.scaleBand()\r
      .domain(chartData.map(d => d.month))\r
      .range([0, 2 * Math.PI])\r
\r
    const y = d3.scaleLinear()\r
      .domain([0, d3.max(chartData, d => d.high) || 100])\r
      .range([innerRadius, outerRadius])\r
\r
    // Grid circles\r
    const yTicks = y.ticks(4)\r
    const grid = svg.append('g')\r
      .attr('text-anchor', 'middle')\r
\r
    grid.selectAll('circle')\r
      .data(yTicks)\r
      .join('circle')\r
        .attr('fill', 'none')\r
        .attr('stroke', '#334155')\r
        .attr('stroke-dasharray', '3,3')\r
        .attr('r', y)\r
\r
    grid.selectAll('text')\r
      .data(yTicks)\r
      .join('text')\r
        .attr('y', d => -y(d))\r
        .attr('dy', '0.35em')\r
        .attr('fill', '#94a3b8')\r
        .text(d => d)\r
\r
    // Radial Area generator\r
    const area = d3.radialArea()\r
      .angle(d => x(d.month) + x.bandwidth() / 2)\r
      .innerRadius(d => y(d.low))\r
      .outerRadius(d => y(d.high))\r
      .curve(d3.curveCardinalClosed)\r
\r
    svg.append('path')\r
      .datum(chartData)\r
      .attr('fill', 'rgba(99, 102, 241, 0.35)')\r
      .attr('stroke', '#6366f1')\r
      .attr('stroke-width', 2)\r
      .attr('d', area)\r
\r
    // Month Labels\r
    const labels = svg.append('g')\r
      .attr('text-anchor', 'middle')\r
\r
    chartData.forEach(d => {\r
      const angle = x(d.month) + x.bandwidth() / 2\r
      const r = outerRadius + 18\r
      const lx = r * Math.sin(angle)\r
      const ly = -r * Math.cos(angle)\r
\r
      labels.append('text')\r
        .attr('x', lx)\r
        .attr('y', ly)\r
        .attr('fill', '#cbd5e1')\r
        .attr('alignment-baseline', 'middle')\r
        .text(d.month)\r
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