var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'shewhart-chart',\r
  title: 'Shewhart Chart',\r
  desc: 'Shewhart Chart — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'ShewhartChart',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","shewhart-chart"],\r
}\r
\r
export default function ShewhartChart({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"period":1,"value":50},{"period":2,"value":52},{"period":3,"value":48},{"period":4,"value":51},{"period":5,"value":55},{"period":6,"value":47},{"period":7,"value":53},{"period":8,"value":49},{"period":9,"value":52},{"period":10,"value":48},{"period":11,"value":51},{"period":12,"value":54},{"period":13,"value":46},{"period":14,"value":50},{"period":15,"value":53},{"period":16,"value":49},{"period":17,"value":51},{"period":18,"value":47},{"period":19,"value":55},{"period":20,"value":52}]\r
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
    const mean = d3.mean(values)\r
    const stdDev = d3.deviation(values) || 1\r
    const ucl = mean + 3 * stdDev\r
    const lcl = mean - 3 * stdDev\r
\r
    const x = d3.scaleLinear()\r
      .domain(d3.extent(data, d => d.period))\r
      .range([0, IW])\r
\r
    const y = d3.scaleLinear()\r
      .domain([Math.min(lcl, d3.min(values) - stdDev), Math.max(ucl, d3.max(values) + stdDev)])\r
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
    // Control limits\r
    const limits = [\r
      { value: ucl, label: 'UCL', color: '#ef4444' },\r
      { value: mean, label: 'CL', color: '#10b981' },\r
      { value: lcl, label: 'LCL', color: '#ef4444' },\r
    ]\r
\r
    limits.forEach(limit => {\r
      svg.append('line')\r
        .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
        .attr('x1', 0).attr('x2', IW)\r
        .attr('y1', y(limit.value)).attr('y2', y(limit.value))\r
        .attr('stroke', limit.color)\r
        .attr('stroke-width', limit.label === 'CL' ? 2 : 1.5)\r
        .attr('stroke-dasharray', limit.label === 'CL' ? 'none' : '5,3')\r
        .attr('opacity', 0.8)\r
\r
      svg.append('text')\r
        .attr('transform', \`translate(\${M.left + IW + 5},\${M.top + y(limit.value) + 4})\`)\r
        .attr('fill', limit.color)\r
        .attr('font-size', '9px')\r
        .attr('font-weight', 'bold')\r
        .text(\`\${limit.label}=\${limit.value.toFixed(1)}\`)\r
    })\r
\r
    // Western Electric rules bands (2σ)\r
    const zones = [\r
      { y1: mean - 2 * stdDev, y2: mean - stdDev, color: '#f59e0b', label: 'B' },\r
      { y1: mean - stdDev, y2: mean + stdDev, color: '#3b82f6', label: 'A' },\r
      { y1: mean + stdDev, y2: mean + 2 * stdDev, color: '#f59e0b', label: 'B' },\r
      { y1: mean + 2 * stdDev, y2: mean + 3 * stdDev, color: '#ef4444', label: 'C' },\r
      { y1: mean - 3 * stdDev, y2: mean - 2 * stdDev, color: '#ef4444', label: 'C' },\r
    ]\r
\r
    zones.forEach(zone => {\r
      svg.append('rect')\r
        .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
        .attr('x', 0).attr('y', y(zone.y2))\r
        .attr('width', IW).attr('height', y(zone.y1) - y(zone.y2))\r
        .attr('fill', zone.color).attr('opacity', 0.08)\r
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
      .attr('fill', d => {\r
        const isOut = d.value > ucl || d.value < lcl\r
        return isOut ? '#ef4444' : colors[0]\r
      })\r
      .attr('stroke', 'white').attr('stroke-width', 1.5)\r
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
    // Title\r
    svg.append('text')\r
      .attr('transform', \`translate(\${M.left + IW / 2},\${M.top - 10})\`)\r
      .text("Shewhart Control Chart - Western Electric Rules")\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text-primary)')\r
      .attr('font-size', '14px')\r
      .attr('font-weight', 'bold')\r
\r
    // Zone legend\r
    const lg = svg.append('g')\r
      .attr('transform', \`translate(\${M.left + IW - 130},\${M.top + IH + 15})\`)\r
    const zoneLabels = [\r
      { color: '#3b82f6', label: 'Zone A (±1σ)' },\r
      { color: '#f59e0b', label: 'Zone B (±2σ)' },\r
      { color: '#ef4444', label: 'Zone C (>2σ)' },\r
    ]\r
    zoneLabels.forEach((z, i) => {\r
      const yOff = i * 16\r
      lg.append('rect').attr('width', 12).attr('height', 12).attr('fill', z.color).attr('opacity', 0.3).attr('rx', 2)\r
      lg.append('text').attr('x', 16).attr('y', yOff + 10).text(z.label).attr('fill', 'var(--text-secondary)').attr('font-size', '9px')\r
    })\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};