var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'decision-curve',\r
  title: 'Decision Curve',\r
  desc: 'Decision Curve — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'DecisionCurve',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","decision-curve"],\r
}\r
\r
export default function DecisionCurve({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"threshold":0.1,"model":0.15,"all":0.12,"none":0},{"threshold":0.2,"model":0.22,"all":0.2,"none":0},{"threshold":0.3,"model":0.28,"all":0.27,"none":0},{"threshold":0.4,"model":0.32,"all":0.33,"none":0},{"threshold":0.5,"model":0.35,"all":0.38,"none":0},{"threshold":0.6,"model":0.36,"all":0.42,"none":0},{"threshold":0.7,"model":0.34,"all":0.45,"none":0},{"threshold":0.8,"model":0.28,"all":0.47,"none":0},{"threshold":0.9,"model":0.18,"all":0.48,"none":0}]\r
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
      .domain([-0.1, 0.5])\r
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
    // Zero line\r
    svg.append('line')\r
      .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('x1', 0).attr('x2', IW)\r
      .attr('y1', y(0)).attr('y2', y(0))\r
      .attr('stroke', 'var(--text-secondary)').attr('stroke-width', 1)\r
\r
    // All tests strategy line\r
    const allLine = d3.line()\r
      .x(d => x(d.threshold))\r
      .y(d => y(d.all))\r
\r
    svg.append('path')\r
      .datum(data)\r
      .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('d', allLine)\r
      .attr('fill', 'none')\r
      .attr('stroke', colors[1])\r
      .attr('stroke-width', 2)\r
      .attr('stroke-dasharray', '4,4')\r
\r
    // No tests strategy line\r
    svg.append('path')\r
      .datum(data)\r
      .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('d', d3.line().x(d => x(d.threshold)).y(d => y(d.none)))\r
      .attr('fill', 'none')\r
      .attr('stroke', colors[2])\r
      .attr('stroke-width', 2)\r
      .attr('stroke-dasharray', '2,2')\r
\r
    // Model line\r
    const modelLine = d3.line()\r
      .x(d => x(d.threshold))\r
      .y(d => y(d.model))\r
      .curve(d3.curveMonotoneX)\r
\r
    svg.append('path')\r
      .datum(data)\r
      .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('d', modelLine)\r
      .attr('fill', 'none')\r
      .attr('stroke', colors[0])\r
      .attr('stroke-width', 2.5)\r
\r
    // Data points on model\r
    svg.append('g')\r
      .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .selectAll('circle')\r
      .data(data)\r
      .join('circle')\r
      .attr('cx', d => x(d.threshold))\r
      .attr('cy', d => y(d.model))\r
      .attr('r', 4)\r
      .attr('fill', colors[0]).attr('fill-opacity', 0.7)\r
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
      .text('Threshold Probability').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').attr('text-anchor', 'middle')\r
\r
    svg.append('text')\r
      .attr('transform', \`translate(12,\${M.top + IH / 2}) rotate(-90)\`)\r
      .text('Net Benefit').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').attr('text-anchor', 'middle')\r
\r
    // Title\r
    svg.append('text')\r
      .attr('transform', \`translate(\${M.left + IW / 2},\${M.top - 10})\`)\r
      .text('Decision Curve Analysis - Clinical Utility')\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text-primary)')\r
      .attr('font-size', '14px')\r
      .attr('font-weight', 'bold')\r
\r
    // Legend\r
    const lg = svg.append('g')\r
      .attr('transform', \`translate(\${M.left + IW - 130},\${M.top + IH + 15})\`)\r
    const legends = [\r
      { color: colors[0], dash: 'none', label: 'Model' },\r
      { color: colors[1], dash: '4,4', label: 'All Tests' },\r
      { color: colors[2], dash: '2,2', label: 'No Tests' },\r
    ]\r
    legends.forEach((l, i) => {\r
      const yOff = i * 18\r
      lg.append('line').attr('x1', 0).attr('x2', 20).attr('y1', yOff + 5).attr('y2', yOff + 5)\r
        .attr('stroke', l.color).attr('stroke-width', 2).attr('stroke-dasharray', l.dash)\r
      lg.append('text').attr('x', 24).attr('y', yOff + 9).text(l.label)\r
        .attr('fill', 'var(--text-secondary)').attr('font-size', '10px')\r
    })\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};