var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'calibration-curve',\r
  title: 'Calibration Curve',\r
  desc: 'Calibration Curve — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'CalibrationCurve',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","calibration-curve"],\r
}\r
\r
export default function CalibrationCurve({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"binStart":0,"binEnd":0.1,"observed":0.08,"predicted":0.05},{"binStart":0.1,"binEnd":0.2,"observed":0.15,"predicted":0.12},{"binStart":0.2,"binEnd":0.3,"observed":0.22,"predicted":0.25},{"binStart":0.3,"binEnd":0.4,"observed":0.35,"predicted":0.32},{"binStart":0.4,"binEnd":0.5,"observed":0.42,"predicted":0.45},{"binStart":0.5,"binEnd":0.6,"observed":0.55,"predicted":0.52},{"binStart":0.6,"binEnd":0.7,"observed":0.65,"predicted":0.65},{"binStart":0.7,"binEnd":0.8,"observed":0.72,"predicted":0.75},{"binStart":0.8,"binEnd":0.9,"observed":0.82,"predicted":0.85},{"binStart":0.9,"binEnd":1,"observed":0.9,"predicted":0.92}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0)\r
      ? customData\r
      : DEFAULT_DATA\r
\r
    const x = d3.scaleLinear()\r
      .domain([0, 1])\r
      .range([0, IW])\r
\r
    const y = d3.scaleLinear()\r
      .domain([0, 1])\r
      .range([IH, 0])\r
\r
    // Grid\r
    svg.append('g')\r
      .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(-IW).tickPadding(0))\r
      .call((g) => g.select('.domain').remove())\r
      .call((g) => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.5))\r
      .call((g) => g.selectAll('text').remove())\r
      .lower()\r
\r
    svg.append('g')\r
      .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisBottom(x).ticks(5).tickSize(-IH).tickPadding(0))\r
      .call((g) => g.select('.domain').remove())\r
      .call((g) => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.5))\r
      .call((g) => g.selectAll('text').remove())\r
      .lower()\r
\r
    // Perfect calibration line (diagonal)\r
    svg.append('line')\r
      .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('x1', x(0)).attr('x2', x(1))\r
      .attr('y1', y(0)).attr('y2', y(1))\r
      .attr('stroke', 'var(--text-secondary)')\r
      .attr('stroke-width', 1.5)\r
      .attr('stroke-dasharray', '5,5')\r
\r
    // Calibration curve\r
    const line = d3.line()\r
      .x(d => x(d.predicted))\r
      .y(d => y(d.observed))\r
      .curve(d3.curveMonotoneX)\r
\r
    svg.append('path')\r
      .datum(data)\r
      .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('d', line)\r
      .attr('fill', 'none')\r
      .attr('stroke', colors[0])\r
      .attr('stroke-width', 2.5)\r
\r
    // Confidence interval band\r
    const area = d3.area()\r
      .x(d => x(d.predicted))\r
      .y0(d => y(d.observed - 0.05))\r
      .y1(d => y(d.observed + 0.05))\r
      .curve(d3.curveMonotoneX)\r
\r
    svg.append('path')\r
      .datum(data)\r
      .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('d', area)\r
      .attr('fill', colors[0])\r
      .attr('fill-opacity', 0.2)\r
\r
    // Data points\r
    svg.append('g')\r
      .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .selectAll('circle')\r
      .data(data)\r
      .join('circle')\r
      .attr('cx', d => x(d.predicted))\r
      .attr('cy', d => y(d.observed))\r
      .attr('r', 5)\r
      .attr('fill', colors[0])\r
      .attr('fill-opacity', 0.8)\r
      .attr('stroke', 'white').attr('stroke-width', 1)\r
\r
    // X axis\r
    svg.append('g')\r
      .attr('transform', \`translate(\${M.left},\${M.top + IH})\`)\r
      .call(d3.axisBottom(x).ticks(5).tickSize(0).tickPadding(8))\r
      .call((g) => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call((g) => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    // Y axis\r
    svg.append('g')\r
      .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(0).tickPadding(8))\r
      .call((g) => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call((g) => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    // Axis labels\r
    svg.append('text')\r
      .attr('transform', \`translate(\${M.left + IW / 2},\${M.top + IH + 30})\`)\r
      .text('Predicted Probability').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').attr('text-anchor', 'middle')\r
\r
    svg.append('text')\r
      .attr('transform', \`translate(12,\${M.top + IH / 2}) rotate(-90)\`)\r
      .text('Observed Frequency').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').attr('text-anchor', 'middle')\r
\r
    // Title\r
    svg.append('text')\r
      .attr('transform', \`translate(\${M.left + IW / 2},\${M.top - 10})\`)\r
      .text('Calibration Curve - Model Reliability')\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text-primary)')\r
      .attr('font-size', '14px')\r
      .attr('font-weight', 'bold')\r
\r
    // Legend\r
    const lg = svg.append('g')\r
      .attr('transform', \`translate(\${M.left + IW - 120},\${M.top + IH + 15})\`)\r
    lg.append('line').attr('x1', 0).attr('x2', 20).attr('y1', 5).attr('y2', 5)\r
      .attr('stroke', 'var(--text-secondary)').attr('stroke-width', 1.5).attr('stroke-dasharray', '5,5')\r
    lg.append('text').attr('x', 24).attr('y', 9).text('Perfect').attr('fill', 'var(--text-secondary)').attr('font-size', '10px')\r
    lg.append('circle').attr('cx', 6).attr('cy', 23).attr('r', 5).attr('fill', colors[0]).attr('fill-opacity', 0.8)\r
    lg.append('text').attr('x', 16).attr('y', 27).text('Observed').attr('fill', 'var(--text-secondary)').attr('font-size', '10px')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};