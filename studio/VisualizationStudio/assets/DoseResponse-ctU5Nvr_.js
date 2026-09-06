var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'dose-response',\r
  title: 'Dose Response',\r
  desc: 'Dose Response — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'DoseResponse',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","dose-response"],\r
}\r
\r
export default function DoseResponse({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"dose":0.01,"response":7.94},{"dose":0.012,"response":8.02},{"dose":0.014,"response":8.11},{"dose":0.017,"response":8.22},{"dose":0.021,"response":8.35},{"dose":0.025,"response":8.51},{"dose":0.03,"response":8.71},{"dose":0.036,"response":8.96},{"dose":0.044,"response":9.26},{"dose":0.052,"response":9.64},{"dose":0.063,"response":10.11},{"dose":0.076,"response":10.71},{"dose":0.091,"response":11.47},{"dose":0.11,"response":12.44},{"dose":0.132,"response":13.69},{"dose":0.158,"response":15.35},{"dose":0.191,"response":17.55},{"dose":0.229,"response":20.51},{"dose":0.275,"response":24.55},{"dose":0.331,"response":30.06},{"dose":0.398,"response":37.53},{"dose":0.479,"response":47.33},{"dose":0.575,"response":59.32},{"dose":0.692,"response":72.3},{"dose":0.832,"response":84.01},{"dose":1,"response":92.41},{"dose":1.202,"response":97.1},{"dose":1.445,"response":99.12},{"dose":1.738,"response":99.8},{"dose":2.089,"response":99.96},{"dose":2.512,"response":100},{"dose":3.02,"response":100},{"dose":3.631,"response":100},{"dose":4.365,"response":100},{"dose":5.248,"response":100},{"dose":6.31,"response":100},{"dose":7.586,"response":100},{"dose":9.12,"response":100},{"dose":10.965,"response":100},{"dose":13.183,"response":100},{"dose":15.849,"response":100},{"dose":19.055,"response":100},{"dose":22.909,"response":100},{"dose":27.542,"response":100},{"dose":33.113,"response":100},{"dose":39.811,"response":100},{"dose":47.863,"response":100},{"dose":57.544,"response":100},{"dose":69.183,"response":100},{"dose":83.176,"response":100}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
\r
    const x = d3.scaleLog().domain(d3.extent(data, d => d.dose)).range([0, IW])\r
    const y = d3.scaleLinear().domain([0, 100]).range([IH, 0])\r
\r
    // Grid\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(-IW).tickPadding(0))\r
      .call(g => g.select('.domain').remove()).call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.4)).call(g => g.selectAll('text').remove()).lower()\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisBottom(x).ticks(5).tickFormat(d => '10^' + Math.log10(d).toFixed(0)).tickSize(-IH).tickPadding(0))\r
      .call(g => g.select('.domain').remove()).call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.4)).call(g => g.selectAll('text').remove()).lower()\r
\r
    // EC50 line\r
    const ec50 = data.find(d => Math.abs(d.response - 50) < 5)\r
    if (ec50) {\r
      svg.append('line').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
        .attr('x1', x(ec50.dose)).attr('x2', x(ec50.dose)).attr('y1', 0).attr('y2', IH)\r
        .attr('stroke', colors[1]).attr('stroke-width', 1).attr('stroke-dasharray', '4,4')\r
      svg.append('text').attr('x', x(ec50.dose) + 4).attr('y', M.top + 12)\r
        .attr('fill', colors[1]).attr('font-size', '10px').text('EC50')\r
    }\r
\r
    // 50% line\r
    svg.append('line').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('x1', 0).attr('x2', IW).attr('y1', y(50)).attr('y2', y(50))\r
      .attr('stroke', 'var(--text-secondary)').attr('stroke-width', 1).attr('stroke-dasharray', '3,3')\r
\r
    // Curve\r
    const line = d3.line().x(d => x(d.dose)).y(d => y(d.response)).curve(d3.curveMonotoneX)\r
    svg.append('path').datum(data).attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('d', line).attr('fill', 'none').attr('stroke', colors[0]).attr('stroke-width', 2.5)\r
\r
    // Points\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .selectAll('circle').data(data.filter((_, i) => i % 3 === 0)).join('circle')\r
      .attr('cx', d => x(d.dose)).attr('cy', d => y(d.response)).attr('r', 3)\r
      .attr('fill', colors[0]).attr('opacity', 0.6)\r
\r
    // Axes\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top + IH})\`)\r
      .call(d3.axisBottom(x).ticks(5).tickSize(0).tickPadding(8).tickFormat(d => '10^' + Math.log10(d).toFixed(0)))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '10px'))\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top + IH + 28})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text('Dose (log scale)')\r
    svg.append('text').attr('transform', \`translate(12,\${M.top + IH/2}) rotate(-90)\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text('Response %')\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top - 10})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '14px').attr('font-weight', 'bold').text('Dose-Response Curve')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};