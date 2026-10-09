var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'cusum_chart',\r
  title: 'C U S U M_ Chart',\r
  desc: 'C U S U M_ Chart — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'CUSUM_Chart',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","c-u-s-u-m_-chart"],\r
}\r
\r
export default function CUSUM_Chart({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"period":1,"value":50.8,"cumsum":0.8},{"period":2,"value":51.1,"cumsum":1.9},{"period":3,"value":55.6,"cumsum":7.5},{"period":4,"value":55.3,"cumsum":12.8},{"period":5,"value":52.1,"cumsum":14.8},{"period":6,"value":55.2,"cumsum":20},{"period":7,"value":53.1,"cumsum":23.1},{"period":8,"value":55.3,"cumsum":28.4},{"period":9,"value":56.3,"cumsum":34.7},{"period":10,"value":51.9,"cumsum":36.6},{"period":11,"value":48.7,"cumsum":35.3},{"period":12,"value":52.3,"cumsum":37.6},{"period":13,"value":49.8,"cumsum":37.4},{"period":14,"value":45,"cumsum":32.4},{"period":15,"value":43.2,"cumsum":25.6},{"period":16,"value":45.1,"cumsum":20.7},{"period":17,"value":46.5,"cumsum":17.2},{"period":18,"value":46.3,"cumsum":13.5},{"period":19,"value":42.2,"cumsum":5.7},{"period":20,"value":47,"cumsum":2.7},{"period":21,"value":51.3,"cumsum":4},{"period":22,"value":46.5,"cumsum":0.5},{"period":23,"value":52.3,"cumsum":2.8},{"period":24,"value":49.1,"cumsum":1.9},{"period":25,"value":52.1,"cumsum":4},{"period":26,"value":51.2,"cumsum":5.2},{"period":27,"value":58.5,"cumsum":13.7},{"period":28,"value":63.1,"cumsum":26.8},{"period":29,"value":60.5,"cumsum":37.3},{"period":30,"value":55.5,"cumsum":42.8},{"period":31,"value":55.4,"cumsum":48.3},{"period":32,"value":59.4,"cumsum":57.6},{"period":33,"value":55,"cumsum":62.7},{"period":34,"value":56.2,"cumsum":68.9},{"period":35,"value":51.1,"cumsum":69.9},{"period":36,"value":51.2,"cumsum":71.1},{"period":37,"value":47.4,"cumsum":68.5},{"period":38,"value":47.4,"cumsum":65.9},{"period":39,"value":51.9,"cumsum":67.8},{"period":40,"value":53,"cumsum":70.8}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
    const target = d3.mean(data, d => d.value) || 50\r
\r
    const x = d3.scaleLinear().domain([1, data.length]).range([0, IW])\r
    const yVal = d3.scaleLinear().domain([d3.min(data, d => d.value) - 5, d3.max(data, d => d.value) + 5]).range([IH * 0.55, 0])\r
    const yCum = d3.scaleLinear().domain([d3.min(data, d => d.cumsum) - 10, d3.max(data, d => d.cumsum) + 10]).range([IH, IH * 0.45])\r
\r
    // Original values\r
    const line = d3.line().x(d => x(d.period)).y(d => yVal(d.value)).curve(d3.curveMonotoneX)\r
    svg.append('path').datum(data).attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('d', line).attr('fill', 'none').attr('stroke', colors[1]).attr('stroke-width', 1.5).attr('opacity', 0.7)\r
\r
    // Target line\r
    svg.append('line').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('x1', 0).attr('x2', IW).attr('y1', yVal(target)).attr('y2', yVal(target))\r
      .attr('stroke', colors[2]).attr('stroke-width', 1.5).attr('stroke-dasharray', '6,4')\r
\r
    // CUSUM line\r
    const cumLine = d3.line().x(d => x(d.period)).y(d => yCum(d.cumsum)).curve(d3.curveMonotoneX)\r
    svg.append('path').datum(data).attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('d', cumLine).attr('fill', 'none').attr('stroke', colors[0]).attr('stroke-width', 2)\r
\r
    // Zero line for CUSUM\r
    svg.append('line').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('x1', 0).attr('x2', IW).attr('y1', yCum(0)).attr('y2', yCum(0))\r
      .attr('stroke', 'var(--text-secondary)').attr('stroke-width', 1)\r
\r
    // Divider\r
    svg.append('line').attr('transform', \`translate(\${M.left},\${M.top + IH * 0.5})\`)\r
      .attr('x1', 0).attr('x2', IW).attr('y1', 0).attr('y2', 0)\r
      .attr('stroke', 'var(--border)').attr('stroke-width', 1).attr('stroke-dasharray', '4,4')\r
    svg.append('text').attr('transform', \`translate(\${M.left + 4},\${M.top + IH * 0.5 - 4})\`)\r
      .attr('fill', colors[1]).attr('font-size', '10px').text('Values')\r
    svg.append('text').attr('transform', \`translate(\${M.left + 4},\${M.top + IH * 0.5 + IH * 0.5 + 8})\`)\r
      .attr('fill', colors[0]).attr('font-size', '10px').text('CUSUM')\r
\r
    // X axis\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top + IH})\`)\r
      .call(d3.axisBottom(x).ticks(8).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top + IH + 28})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text('Period')\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top - 10})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '14px').attr('font-weight', 'bold').text('CUSUM Control Chart')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};