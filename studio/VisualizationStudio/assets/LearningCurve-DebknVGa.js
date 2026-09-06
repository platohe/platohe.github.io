var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'learning-curve',\r
  title: 'Learning Curve',\r
  desc: 'Learning Curve — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'LearningCurve',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","learning-curve"],\r
}\r
\r
export default function LearningCurve({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = {"train":[{"n":5,"acc":0.061},{"n":10,"acc":0.13},{"n":15,"acc":0.152},{"n":20,"acc":0.214},{"n":25,"acc":0.3},{"n":30,"acc":0.325},{"n":35,"acc":0.406},{"n":40,"acc":0.435},{"n":45,"acc":0.516},{"n":50,"acc":0.538},{"n":55,"acc":0.636},{"n":60,"acc":0.68},{"n":65,"acc":0.72},{"n":70,"acc":0.772},{"n":75,"acc":0.845},{"n":80,"acc":0.884},{"n":85,"acc":0.899},{"n":90,"acc":0.891},{"n":95,"acc":0.877},{"n":100,"acc":0.903}],"val":[{"n":5,"acc":0.1},{"n":10,"acc":0.107},{"n":15,"acc":0.143},{"n":20,"acc":0.197},{"n":25,"acc":0.232},{"n":30,"acc":0.312},{"n":35,"acc":0.313},{"n":40,"acc":0.375},{"n":45,"acc":0.431},{"n":50,"acc":0.466},{"n":55,"acc":0.48},{"n":60,"acc":0.525},{"n":65,"acc":0.569},{"n":70,"acc":0.669},{"n":75,"acc":0.65},{"n":80,"acc":0.757},{"n":85,"acc":0.75},{"n":90,"acc":0.716},{"n":95,"acc":0.679},{"n":100,"acc":0.718}]}\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const d = (customData && customData.train) ? customData : DEFAULT_DATA\r
\r
    const x = d3.scaleLinear().domain([5, 100]).range([0, IW])\r
    const y = d3.scaleLinear().domain([0, 1]).range([IH, 0])\r
\r
    // Grid\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(-IW).tickPadding(0))\r
      .call(g => g.select('.domain').remove()).call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.4)).call(g => g.selectAll('text').remove()).lower()\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisBottom(x).ticks(5).tickSize(-IH).tickPadding(0))\r
      .call(g => g.select('.domain').remove()).call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.4)).call(g => g.selectAll('text').remove()).lower()\r
\r
    const trainLine = d3.line().x(dd => x(dd.n)).y(dd => y(dd.acc)).curve(d3.curveMonotoneX)\r
    const valLine = d3.line().x(dd => x(dd.n)).y(dd => y(dd.acc)).curve(d3.curveMonotoneX)\r
\r
    // Train curve\r
    svg.append('path').datum(d.train).attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('d', trainLine).attr('fill', 'none').attr('stroke', colors[0]).attr('stroke-width', 2.5)\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .selectAll('circle').data(d.train).join('circle')\r
      .attr('cx', dd => x(dd.n)).attr('cy', dd => y(dd.acc)).attr('r', 3)\r
      .attr('fill', colors[0]).attr('opacity', 0.7)\r
\r
    // Val curve\r
    svg.append('path').datum(d.val).attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('d', valLine).attr('fill', 'none').attr('stroke', colors[1]).attr('stroke-width', 2.5)\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .selectAll('circle').data(d.val).join('circle')\r
      .attr('cx', dd => x(dd.n)).attr('cy', dd => y(dd.acc)).attr('r', 3)\r
      .attr('fill', colors[1]).attr('opacity', 0.7)\r
\r
    // Axes\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top + IH})\`)\r
      .call(d3.axisBottom(x).ticks(5).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text(d => d + ' samples'))\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text(d => (d * 100).toFixed(0) + '%'))\r
\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top + IH + 28})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text('Training Set Size')\r
    svg.append('text').attr('transform', \`translate(12,\${M.top + IH/2}) rotate(-90)\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text('Accuracy')\r
\r
    // Legend\r
    const lg = svg.append('g').attr('transform', \`translate(\${M.left + IW - 80},\${M.top + 8})\`)\r
    lg.append('circle').attr('cx', 6).attr('cy', 4).attr('r', 4).attr('fill', colors[0]).attr('opacity', 0.7)\r
    lg.append('line').attr('x1', 0).attr('x2', 14).attr('y1', 4).attr('y2', 4).attr('stroke', colors[0]).attr('stroke-width', 2)\r
    lg.append('text').attr('x', 18).attr('y', 8).text('Train').attr('fill', 'var(--text-secondary)').attr('font-size', '10px')\r
    lg.append('circle').attr('cx', 6).attr('cy', 22).attr('r', 4).attr('fill', colors[1]).attr('opacity', 0.7)\r
    lg.append('line').attr('x1', 0).attr('x2', 14).attr('y1', 22).attr('y2', 22).attr('stroke', colors[1]).attr('stroke-width', 2)\r
    lg.append('text').attr('x', 18).attr('y', 26).text('Validation').attr('fill', 'var(--text-secondary)').attr('font-size', '10px')\r
\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top - 10})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '14px').attr('font-weight', 'bold').text('Learning Curve')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};