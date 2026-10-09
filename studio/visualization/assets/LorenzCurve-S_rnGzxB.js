var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'lorenz-curve',\r
  title: 'Lorenz Curve',\r
  desc: 'Lorenz Curve — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'LorenzCurve',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","lorenz-curve"],\r
}\r
\r
export default function LorenzCurve({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"percentile":10,"cumulative":3},{"percentile":20,"cumulative":7},{"percentile":30,"cumulative":12},{"percentile":40,"cumulative":19},{"percentile":50,"cumulative":28},{"percentile":60,"cumulative":40},{"percentile":70,"cumulative":55},{"percentile":80,"cumulative":72},{"percentile":90,"cumulative":88},{"percentile":100,"cumulative":100}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
\r
    const x = d3.scaleLinear().domain([0, 100]).range([0, IW])\r
    const y = d3.scaleLinear().domain([0, 100]).range([IH, 0])\r
\r
    // Grid\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(-IW).tickPadding(0))\r
      .call(g => g.select('.domain').remove()).call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.4)).call(g => g.selectAll('text').remove()).lower()\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisBottom(x).ticks(5).tickSize(-IH).tickPadding(0))\r
      .call(g => g.select('.domain').remove()).call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.4)).call(g => g.selectAll('text').remove()).lower()\r
\r
    // Line of equality\r
    svg.append('line').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('x1', x(0)).attr('x2', x(100)).attr('y1', y(0)).attr('y2', y(100))\r
      .attr('stroke', 'var(--text-secondary)').attr('stroke-width', 1.5).attr('stroke-dasharray', '6,4')\r
\r
    // Lorenz curve\r
    const line = d3.line().x(d => x(d.percentile)).y(d => y(d.cumulative)).curve(d3.curveMonotoneX)\r
    svg.append('path').datum(data).attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('d', line).attr('fill', 'none').attr('stroke', colors[0]).attr('stroke-width', 2.5)\r
\r
    // Points\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .selectAll('circle').data(data).join('circle')\r
      .attr('cx', d => x(d.percentile)).attr('cy', d => y(d.cumulative)).attr('r', 4)\r
      .attr('fill', colors[0]).attr('stroke', '#fff').attr('stroke-width', 1)\r
\r
    // Compute Gini\r
    let gini = 0\r
    for (let i = 1; i < data.length; i++) {\r
      gini += (data[i].percentile - data[i-1].percentile) * (data[i].cumulative + data[i-1].cumulative)\r
    }\r
    gini = 1 - gini / 5000\r
\r
    // Axes\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top + IH})\`)\r
      .call(d3.axisBottom(x).ticks(5).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text(d => d + '%'))\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text(d => d + '%'))\r
\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top + IH + 28})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text('Cumulative Population %')\r
    svg.append('text').attr('transform', \`translate(12,\${M.top + IH/2}) rotate(-90)\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text('Cumulative Wealth %')\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top - 10})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '14px').attr('font-weight', 'bold')\r
      .text('Lorenz Curve — Gini=' + gini.toFixed(3))\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};