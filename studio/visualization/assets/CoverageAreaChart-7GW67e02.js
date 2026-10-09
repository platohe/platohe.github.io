var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'coverage-area-chart',\r
  title: 'Coverage Area Chart',\r
  desc: 'Coverage Area Chart — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'CoverageAreaChart',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["bars","coverage-area-chart"],\r
}\r
\r
export default function CoverageAreaChart({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"period":1,"value":50.506,"lower":40.655,"upper":60.557},{"period":2,"value":55.281,"lower":45.908,"upper":64.013},{"period":3,"value":57.336,"lower":48.595,"upper":69.066},{"period":4,"value":61.611,"lower":53,"upper":72.396},{"period":5,"value":65.209,"lower":55.06,"upper":72.572},{"period":6,"value":64.966,"lower":54.903,"upper":74.794},{"period":7,"value":62.127,"lower":55.195,"upper":75.12},{"period":8,"value":60.704,"lower":53.171,"upper":71.043},{"period":9,"value":58.967,"lower":51.947,"upper":68.689},{"period":10,"value":57.828,"lower":46.82,"upper":64.492},{"period":11,"value":50.482,"lower":41.589,"upper":61.58},{"period":12,"value":49.179,"lower":38.675,"upper":56.984},{"period":13,"value":41.049,"lower":35.208,"upper":53.032},{"period":14,"value":40.167,"lower":30.948,"upper":49.621},{"period":15,"value":35.474,"lower":28.015,"upper":47.142},{"period":16,"value":37.131,"lower":25.813,"upper":43.95},{"period":17,"value":33.979,"lower":26.179,"upper":43.282},{"period":18,"value":36.912,"lower":26.07,"upper":46.192},{"period":19,"value":40.548,"lower":30.145,"upper":49.24},{"period":20,"value":41.395,"lower":30.913,"upper":50.152},{"period":21,"value":43.863,"lower":37.761,"upper":54.89},{"period":22,"value":50.161,"lower":40.416,"upper":60.951},{"period":23,"value":52.561,"lower":44.514,"upper":65.478},{"period":24,"value":57.568,"lower":48.557,"upper":67.215},{"period":25,"value":62.007,"lower":51.439,"upper":70.267},{"period":26,"value":66.548,"lower":54.382,"upper":74.818},{"period":27,"value":64.648,"lower":55.243,"upper":73.989},{"period":28,"value":65.03,"lower":55.579,"upper":74.737},{"period":29,"value":61.795,"lower":53.47,"upper":73.348},{"period":30,"value":60.92,"lower":48.963,"upper":70.615}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
\r
    const x = d3.scaleLinear().domain([1, data.length]).range([0, IW])\r
    const y = d3.scaleLinear().domain([d3.min(data, d => d.lower) * 0.95, d3.max(data, d => d.upper) * 1.05]).range([IH, 0])\r
\r
    // Grid\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(-IW).tickPadding(0))\r
      .call(g => g.select('.domain').remove).call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.4)).call(g => g.selectAll('text').remove()).lower()\r
\r
    // Coverage area\r
    const area = d3.area()\r
      .x(d => x(d.period))\r
      .y0(d => y(d.lower))\r
      .y1(d => y(d.upper))\r
      .curve(d3.curveMonotoneX)\r
    svg.append('path').datum(data).attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('d', area).attr('fill', colors[0]).attr('fill-opacity', 0.2)\r
\r
    // Mean line\r
    const meanLine = d3.line()\r
      .x(d => x(d.period))\r
      .y(d => y(d.value))\r
      .curve(d3.curveMonotoneX)\r
    svg.append('path').datum(data).attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('d', meanLine).attr('fill', 'none').attr('stroke', colors[0]).attr('stroke-width', 2.5)\r
\r
    // Boundaries\r
    const lowerLine = d3.line().x(d => x(d.period)).y(d => y(d.lower)).curve(d3.curveMonotoneX)\r
    const upperLine = d3.line().x(d => x(d.period)).y(d => y(d.upper)).curve(d3.curveMonotoneX)\r
    svg.append('path').datum(data).attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('d', lowerLine).attr('fill', 'none').attr('stroke', colors[1]).attr('stroke-width', 1.5).attr('stroke-dasharray', '4,4').attr('opacity', 0.6)\r
    svg.append('path').datum(data).attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('d', upperLine).attr('fill', 'none').attr('stroke', colors[1]).attr('stroke-width', 1.5).attr('stroke-dasharray', '4,4').attr('opacity', 0.6)\r
\r
    // Axes\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top + IH})\`)\r
      .call(d3.axisBottom(x).ticks(6).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top + IH + 28})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text('Period')\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top - 10})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '14px').attr('font-weight', 'bold').text('Coverage Area Chart')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};