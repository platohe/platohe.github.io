var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'step-line-chart',\r
  title: 'Step Line Chart',\r
  desc: 'Step Line Chart — a lines chart visualization',\r
  category: 'Lines',\r
  component: 'StepLineChart',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["lines","step-line-chart"],\r
}\r
\r
export default function StepLineChart({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    // Step line chart data\r
    const DEFAULT_DATA = [{"time":"0h","value":10},{"time":"2h","value":25},{"time":"4h","value":20},{"time":"6h","value":35},{"time":"8h","value":30},{"time":"10h","value":45},{"time":"12h","value":40},{"time":"14h","value":55}]\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
\r
    const margin = { top: 30, right: 30, bottom: 50, left: 50 }\r
    const width = 380 - margin.left - margin.right\r
    const height = 265 - margin.top - margin.bottom\r
\r
    const x = d3.scalePoint()\r
      .domain(data.map(d => d.time))\r
      .range([0, width])\r
\r
    const y = d3.scaleLinear()\r
      .domain([0, d3.max(data, d => d.value)])\r
      .range([height, 0])\r
\r
    const g = svg.append('g')\r
      .attr('transform', \`translate(\${margin.left},\${margin.top})\`)\r
\r
    // Step line (before interpolation)\r
    const lineBefore = d3.line()\r
      .x(d => x(d.time))\r
      .y(d => y(d.value))\r
      .curve(d3.curveStepBefore)\r
\r
    g.append('path')\r
      .datum(data)\r
      .attr('d', lineBefore)\r
      .attr('fill', 'none')\r
      .attr('stroke', '#6366f1')\r
      .attr('stroke-width', 2)\r
      .attr('stroke-dasharray', '5,5')\r
\r
    // Step line (after interpolation)\r
    const lineAfter = d3.line()\r
      .x(d => x(d.time))\r
      .y(d => y(d.value))\r
      .curve(d3.curveStepAfter)\r
\r
    g.append('path')\r
      .datum(data)\r
      .attr('d', lineAfter)\r
      .attr('fill', 'none')\r
      .attr('stroke', '#f59e0b')\r
      .attr('stroke-width', 2)\r
\r
    // Data points\r
    g.selectAll('circle')\r
      .data(data)\r
      .join('circle')\r
      .attr('cx', d => x(d.time))\r
      .attr('cy', d => y(d.value))\r
      .attr('r', 4)\r
      .attr('fill', '#6366f1')\r
      .attr('stroke', 'var(--bg)')\r
      .attr('stroke-width', 2)\r
      .attr('cursor', 'pointer')\r
      .on('mouseover', function() {\r
        d3.select(this)\r
          .transition()\r
          .duration(200)\r
          .attr('r', 6)\r
      })\r
      .on('mouseout', function() {\r
        d3.select(this)\r
          .transition()\r
          .duration(200)\r
          .attr('r', 4)\r
      })\r
\r
    // X axis\r
    g.append('g')\r
      .attr('transform', \`translate(0,\${height})\`)\r
      .call(d3.axisBottom(x).tickSize(0).tickPadding(8))\r
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
      .attr('stroke-dasharray', '5,5')\r
\r
    legend.append('text')\r
      .attr('x', 25)\r
      .attr('y', 4)\r
      .attr('fill', 'var(--text-secondary)')\r
      .attr('font-size', '10px')\r
      .text('stepBefore')\r
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
      .text('stepAfter')\r
\r
    // Title\r
    svg.append('text')\r
      .attr('x', 200)\r
      .attr('y', 20)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text)')\r
      .attr('font-size', '14px')\r
      .attr('font-weight', 600)\r
      .text('Step Line Chart')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}`;export{e as default};