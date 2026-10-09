var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'precision-recall_curve',\r
  title: 'Precision Recall_ Curve',\r
  desc: 'Precision Recall_ Curve — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'PrecisionRecall_Curve',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","precision-recall_-curve"],\r
}\r
\r
export default function PrecisionRecall_Curve({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"recall":0.03,"precision":0.117},{"recall":0.086,"precision":0.265},{"recall":0.139,"precision":0.357},{"recall":0.189,"precision":0.422},{"recall":0.237,"precision":0.472},{"recall":0.281,"precision":0.511},{"recall":0.323,"precision":0.544},{"recall":0.362,"precision":0.572},{"recall":0.4,"precision":0.596},{"recall":0.434,"precision":0.617},{"recall":0.467,"precision":0.636},{"recall":0.498,"precision":0.653},{"recall":0.528,"precision":0.668},{"recall":0.555,"precision":0.682},{"recall":0.581,"precision":0.695},{"recall":0.605,"precision":0.707},{"recall":0.628,"precision":0.717},{"recall":0.65,"precision":0.727},{"recall":0.67,"precision":0.736},{"recall":0.69,"precision":0.745},{"recall":0.708,"precision":0.753},{"recall":0.725,"precision":0.76},{"recall":0.741,"precision":0.767},{"recall":0.756,"precision":0.773},{"recall":0.77,"precision":0.779},{"recall":0.783,"precision":0.785},{"recall":0.796,"precision":0.79},{"recall":0.808,"precision":0.795},{"recall":0.819,"precision":0.799},{"recall":0.83,"precision":0.804},{"recall":0.84,"precision":0.808},{"recall":0.849,"precision":0.811},{"recall":0.858,"precision":0.815},{"recall":0.866,"precision":0.818},{"recall":0.874,"precision":0.821},{"recall":0.881,"precision":0.824},{"recall":0.888,"precision":0.827},{"recall":0.895,"precision":0.829},{"recall":0.901,"precision":0.832},{"recall":0.907,"precision":0.834},{"recall":0.912,"precision":0.836},{"recall":0.917,"precision":0.838},{"recall":0.922,"precision":0.84},{"recall":0.926,"precision":0.842},{"recall":0.931,"precision":0.843},{"recall":0.935,"precision":0.845},{"recall":0.939,"precision":0.846},{"recall":0.942,"precision":0.848},{"recall":0.946,"precision":0.849},{"recall":0.949,"precision":0.85},{"recall":0,"precision":0},{"recall":1,"precision":1}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
    const x = d3.scaleLinear().domain([0, 1]).range([0, IW])\r
    const y = d3.scaleLinear().domain([0, 1]).range([IH, 0])\r
\r
    // Grid\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(-IW).tickPadding(0))\r
      .call(g => g.select('.domain').remove())\r
      .call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.4)).call(g => g.selectAll('text').remove()).lower()\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisBottom(x).ticks(5).tickSize(-IH).tickPadding(0))\r
      .call(g => g.select('.domain').remove())\r
      .call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.4)).call(g => g.selectAll('text').remove()).lower()\r
\r
    // Baseline (prevalence)\r
    const baseRate = 0.2\r
    svg.append('line').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('x1', x(0)).attr('x2', x(1)).attr('y1', y(baseRate)).attr('y2', y(baseRate))\r
      .attr('stroke', colors[2]).attr('stroke-width', 1.5).attr('stroke-dasharray', '4,4')\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW - 70},\${M.top + y(baseRate) - 8})\`)\r
      .attr('fill', colors[2]).attr('font-size', '10px').text('Base=' + baseRate)\r
\r
    // PR curve\r
    const line = d3.line().x(d => x(d.recall)).y(d => y(d.precision)).curve(d3.curveMonotoneX)\r
    svg.append('path').datum(data).attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('d', line).attr('fill', 'none').attr('stroke', colors[0]).attr('stroke-width', 2.5)\r
\r
    // Area under PR\r
    const sorted = [...data].sort((a, b) => a.recall - b.recall)\r
    const aucPR = sorted.reduce((acc, d, i) => {\r
      if (i === 0) return 0\r
      const dx = d.recall - sorted[i-1].recall\r
      return acc + dx * (d.precision + sorted[i-1].precision) / 2\r
    }, 0)\r
\r
    const areaPath = \`M\${x(sorted[0].recall)},\${y(0)} \` + sorted.map(d => \`L\${x(d.recall)},\${y(d.precision)}\`).join(' ') + \` L\${x(sorted[sorted.length-1].recall)},\${y(0)} Z\`\r
    svg.append('path').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('d', areaPath).attr('fill', colors[0]).attr('fill-opacity', 0.08)\r
\r
    // Points\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .selectAll('circle').data(sorted.filter((_, i) => i % 8 === 0 || i === sorted.length - 1)).join('circle')\r
      .attr('cx', d => x(d.recall)).attr('cy', d => y(d.precision)).attr('r', 2)\r
      .attr('fill', colors[0]).attr('opacity', 0.5)\r
\r
    // Axes\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top + IH})\`)\r
      .call(d3.axisBottom(x).ticks(5).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top + IH + 28})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text('Recall (Sensitivity)')\r
    svg.append('text').attr('transform', \`translate(12,\${M.top + IH/2}) rotate(-90)\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text('Precision')\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top - 10})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '14px').attr('font-weight', 'bold').text('Precision-Recall Curve — AP=' + aucPR.toFixed(3))\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};