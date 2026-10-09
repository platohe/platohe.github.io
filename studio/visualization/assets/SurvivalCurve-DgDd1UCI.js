var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'survival-curve',\r
  title: 'Survival Curve',\r
  desc: 'Survival Curve — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'SurvivalCurve',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","survival-curve"],\r
}\r
\r
export default function SurvivalCurve({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    // Survival curve data\r
    const DEFAULT_DATA = [{"time":0,"groupA":1,"groupB":1},{"time":2,"groupA":0.95,"groupB":0.92},{"time":4,"groupA":0.88,"groupB":0.85},{"time":6,"groupA":0.8,"groupB":0.75},{"time":8,"groupA":0.72,"groupB":0.65},{"time":10,"groupA":0.65,"groupB":0.55},{"time":12,"groupA":0.58,"groupB":0.45},{"time":14,"groupA":0.52,"groupB":0.38},{"time":16,"groupA":0.48,"groupB":0.32},{"time":18,"groupA":0.45,"groupB":0.28}]\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
\r
    const margin = { top: 30, right: 30, bottom: 50, left: 50 }\r
    const width = 380 - margin.left - margin.right\r
    const height = 265 - margin.top - margin.bottom\r
\r
    const x = d3.scaleLinear()\r
      .domain([0, d3.max(data, d => d.time)])\r
      .range([0, width])\r
\r
    const y = d3.scaleLinear()\r
      .domain([0, 1])\r
      .range([height, 0])\r
\r
    const g = svg.append('g')\r
      .attr('transform', \`translate(\${margin.left},\${margin.top})\`)\r
\r
    const line = d3.line()\r
      .x(d => x(d.time))\r
      .y(d => y(d.groupA))\r
      .curve(d3.curveMonotoneX)\r
\r
    const lineB = d3.line()\r
      .x(d => x(d.time))\r
      .y(d => y(d.groupB))\r
      .curve(d3.curveMonotoneX)\r
\r
    // Draw survival curves\r
    g.append('path')\r
      .datum(data)\r
      .attr('d', line)\r
      .attr('fill', 'none')\r
      .attr('stroke', '#6366f1')\r
      .attr('stroke-width', 2)\r
      .attr('cursor', 'pointer')\r
      .on('mouseover', function() {\r
        d3.select(this)\r
          .transition()\r
          .duration(200)\r
          .attr('stroke-width', 4)\r
      })\r
      .on('mouseout', function() {\r
        d3.select(this)\r
          .transition()\r
          .duration(200)\r
          .attr('stroke-width', 2)\r
      })\r
\r
    g.append('path')\r
      .datum(data)\r
      .attr('d', lineB)\r
      .attr('fill', 'none')\r
      .attr('stroke', '#f59e0b')\r
      .attr('stroke-width', 2)\r
      .attr('cursor', 'pointer')\r
      .on('mouseover', function() {\r
        d3.select(this)\r
          .transition()\r
          .duration(200)\r
          .attr('stroke-width', 4)\r
      })\r
      .on('mouseout', function() {\r
        d3.select(this)\r
          .transition()\r
          .duration(200)\r
          .attr('stroke-width', 2)\r
      })\r
\r
    // Data points\r
    g.selectAll('circle-a')\r
      .data(data)\r
      .join('circle')\r
      .attr('cx', d => x(d.time))\r
      .attr('cy', d => y(d.groupA))\r
      .attr('r', 3)\r
      .attr('fill', '#6366f1')\r
      .attr('stroke', 'var(--bg)')\r
      .attr('stroke-width', 1)\r
\r
    g.selectAll('circle-b')\r
      .data(data)\r
      .join('circle')\r
      .attr('cx', d => x(d.time))\r
      .attr('cy', d => y(d.groupB))\r
      .attr('r', 3)\r
      .attr('fill', '#f59e0b')\r
      .attr('stroke', 'var(--bg)')\r
      .attr('stroke-width', 1)\r
\r
    // X axis\r
    g.append('g')\r
      .attr('transform', \`translate(0,\${height})\`)\r
      .call(d3.axisBottom(x).ticks(5).tickSize(0).tickPadding(8))\r
      .call((g) => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call((g) => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    // Y axis\r
    g.append('g')\r
      .call(d3.axisLeft(y).ticks(5).tickSize(0).tickPadding(8))\r
      .call((g) => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call((g) => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    // Legend\r
    const legend = svg.append('g')\r
      .attr('transform', 'translate(280, 30)')\r
\r
    legend.append('line')\r
      .attr('x1', 0)\r
      .attr('x2', 20)\r
      .attr('y1', 0)\r
      .attr('y2', 0)\r
      .attr('stroke', '#6366f1')\r
      .attr('stroke-width', 2)\r
\r
    legend.append('text')\r
      .attr('x', 25)\r
      .attr('y', 4)\r
      .attr('fill', 'var(--text-secondary)')\r
      .attr('font-size', '10px')\r
      .text('Group A')\r
\r
    legend.append('line')\r
      .attr('x1', 0)\r
      .attr('x2', 20)\r
      .attr('y1', 20)\r
      .attr('y2', 20)\r
      .attr('stroke', '#f59e0b')\r
      .attr('stroke-width', 2)\r
\r
    legend.append('text')\r
      .attr('x', 25)\r
      .attr('y', 24)\r
      .attr('fill', 'var(--text-secondary)')\r
      .attr('font-size', '10px')\r
      .text('Group B')\r
\r
    // Title\r
    svg.append('text')\r
      .attr('x', 200)\r
      .attr('y', 20)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text)')\r
      .attr('font-size', '14px')\r
      .attr('font-weight', 600)\r
      .text('Survival Curve')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}`;export{e as default};