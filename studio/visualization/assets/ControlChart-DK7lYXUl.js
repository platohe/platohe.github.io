var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'control-chart',\r
  title: 'Control Chart',\r
  desc: 'Control Chart — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'ControlChart',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","control-chart"],\r
}\r
\r
export default function ControlChart({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"period":1,"value":45},{"period":2,"value":48},{"period":3,"value":52},{"period":4,"value":50},{"period":5,"value":47},{"period":6,"value":49},{"period":7,"value":51},{"period":8,"value":53},{"period":9,"value":50},{"period":10,"value":48},{"period":11,"value":52},{"period":12,"value":54},{"period":13,"value":50},{"period":14,"value":47},{"period":15,"value":49},{"period":16,"value":51},{"period":17,"value":53},{"period":18,"value":50},{"period":19,"value":48},{"period":20,"value":52}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0)\r
      ? customData\r
      : DEFAULT_DATA\r
\r
    const values = data.map(d => d.value)\r
    const mean = d3.mean(values) || 50\r
    const stdDev = d3.deviation(values) || 5\r
\r
    const x = d3.scaleLinear()\r
      .domain(d3.extent(data, d => d.period))\r
      .range([0, IW])\r
\r
    const y = d3.scaleLinear()\r
      .domain([d3.min(values) - stdDev, d3.max(values) + stdDev])\r
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
    // Control limit bands\r
    const limits = [\r
      { level: '+3σ', value: mean + 3 * stdDev, color: '#e74c3c', dash: '3,3' },\r
      { level: '+2σ', value: mean + 2 * stdDev, color: '#f39c12', dash: '5,5' },\r
      { level: '+1σ', value: mean + 1 * stdDev, color: '#3498db', dash: '2,2' },\r
      { level: 'Mean', value: mean, color: '#2ecc71', dash: 'none' },\r
      { level: '-1σ', value: mean - 1 * stdDev, color: '#3498db', dash: '2,2' },\r
      { level: '-2σ', value: mean - 2 * stdDev, color: '#f39c12', dash: '5,5' },\r
      { level: '-3σ', value: mean - 3 * stdDev, color: '#e74c3c', dash: '3,3' },\r
    ]\r
\r
    limits.forEach(limit => {\r
      svg.append('line')\r
        .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
        .attr('x1', 0)\r
        .attr('x2', IW)\r
        .attr('y1', y(limit.value))\r
        .attr('y2', y(limit.value))\r
        .attr('stroke', limit.color)\r
        .attr('stroke-width', limit.level === 'Mean' ? 2 : 1)\r
        .attr('stroke-dasharray', limit.dash)\r
        .attr('stroke-opacity', 0.7)\r
    })\r
\r
    // Control limit labels\r
    limits.forEach(limit => {\r
      svg.append('text')\r
        .attr('transform', \`translate(\${M.left + IW + 5},\${M.top + y(limit.value) + 4})\`)\r
        .text(limit.level)\r
        .attr('fill', limit.color)\r
        .attr('font-size', '10px')\r
        .attr('font-weight', limit.level === 'Mean' ? 'bold' : 'normal')\r
    })\r
\r
    // Data line\r
    const line = d3.line()\r
      .x(d => x(d.period))\r
      .y(d => y(d.value))\r
      .curve(d3.curveMonotoneX)\r
\r
    svg.append('path')\r
      .datum(data)\r
      .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('d', line)\r
      .attr('fill', 'none')\r
      .attr('stroke', colors[0])\r
      .attr('stroke-width', 2)\r
\r
    // Data points\r
    svg.append('g')\r
      .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .selectAll('circle')\r
      .data(data)\r
      .join('circle')\r
      .attr('cx', d => x(d.period))\r
      .attr('cy', d => y(d.value))\r
      .attr('r', 4)\r
      .attr('fill', colors[0])\r
      .attr('stroke', 'white')\r
      .attr('stroke-width', 2)\r
\r
    // Highlight points outside control limits\r
    svg.append('g')\r
      .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .selectAll('circle')\r
      .data(data.filter(d => \r
        d.value > mean + 3 * stdDev || d.value < mean - 3 * stdDev\r
      ))\r
      .join('circle')\r
      .attr('cx', d => x(d.period))\r
      .attr('cy', d => y(d.value))\r
      .attr('r', 6)\r
      .attr('fill', 'none')\r
      .attr('stroke', '#e74c3c')\r
      .attr('stroke-width', 2)\r
\r
    // X axis\r
    svg.append('g')\r
      .attr('transform', \`translate(\${M.left},\${M.top + IH})\`)\r
      .call(d3.axisBottom(x).ticks(5).tickSize(0).tickPadding(10))\r
      .call((g) => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call((g) => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    // Y axis\r
    svg.append('g')\r
      .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(0).tickPadding(8))\r
      .call((g) => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call((g) => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}`;export{e as default};