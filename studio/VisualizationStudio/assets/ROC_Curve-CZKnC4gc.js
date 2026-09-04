var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'roc_curve',\r
  title: 'R O C_ Curve',\r
  desc: 'R O C_ Curve — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'ROC_Curve',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","r-o-c_-curve"],\r
}\r
\r
export default function ROC_Curve({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"fpr":0.7,"tpr":0.5},{"fpr":0.698,"tpr":0.52},{"fpr":0.697,"tpr":0.539},{"fpr":0.697,"tpr":0.557},{"fpr":0.697,"tpr":0.575},{"fpr":0.697,"tpr":0.593},{"fpr":0.698,"tpr":0.609},{"fpr":0.699,"tpr":0.625},{"fpr":0.701,"tpr":0.641},{"fpr":0.703,"tpr":0.656},{"fpr":0.705,"tpr":0.671},{"fpr":0.708,"tpr":0.685},{"fpr":0.71,"tpr":0.698},{"fpr":0.713,"tpr":0.711},{"fpr":0.717,"tpr":0.724},{"fpr":0.72,"tpr":0.736},{"fpr":0.724,"tpr":0.747},{"fpr":0.727,"tpr":0.758},{"fpr":0.731,"tpr":0.769},{"fpr":0.735,"tpr":0.779},{"fpr":0.739,"tpr":0.789},{"fpr":0.744,"tpr":0.799},{"fpr":0.748,"tpr":0.808},{"fpr":0.752,"tpr":0.816},{"fpr":0.756,"tpr":0.825},{"fpr":0.761,"tpr":0.833},{"fpr":0.765,"tpr":0.84},{"fpr":0.77,"tpr":0.848},{"fpr":0.774,"tpr":0.855},{"fpr":0.779,"tpr":0.861},{"fpr":0.783,"tpr":0.868},{"fpr":0.788,"tpr":0.874},{"fpr":0.792,"tpr":0.88},{"fpr":0.796,"tpr":0.885},{"fpr":0.801,"tpr":0.891},{"fpr":0.805,"tpr":0.896},{"fpr":0.81,"tpr":0.901},{"fpr":0.814,"tpr":0.906},{"fpr":0.818,"tpr":0.91},{"fpr":0.822,"tpr":0.914},{"fpr":0.826,"tpr":0.918},{"fpr":0.83,"tpr":0.922},{"fpr":0.834,"tpr":0.926},{"fpr":0.838,"tpr":0.93},{"fpr":0.842,"tpr":0.933},{"fpr":0.846,"tpr":0.936},{"fpr":0.85,"tpr":0.939},{"fpr":0.854,"tpr":0.942},{"fpr":0.857,"tpr":0.945},{"fpr":0.861,"tpr":0.948},{"fpr":0,"tpr":0},{"fpr":1,"tpr":1}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
\r
    const x = d3.scaleLinear().domain([0, 1]).range([0, IW])\r
    const y = d3.scaleLinear().domain([0, 1]).range([IH, 0])\r
\r
    // Grid\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(-IW).tickPadding(0))\r
      .call(g => g.select('.domain').remove())\r
      .call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.4))\r
      .call(g => g.selectAll('text').remove()).lower()\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisBottom(x).ticks(5).tickSize(-IH).tickPadding(0))\r
      .call(g => g.select('.domain').remove())\r
      .call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.4))\r
      .call(g => g.selectAll('text').remove()).lower()\r
\r
    // Diagonal (random classifier)\r
    svg.append('line').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('x1', x(0)).attr('x2', x(1)).attr('y1', y(0)).attr('y2', y(1))\r
      .attr('stroke', 'var(--text-secondary)').attr('stroke-width', 1.5).attr('stroke-dasharray', '6,4')\r
\r
    // ROC curve\r
    const line = d3.line().x(d => x(d.fpr)).y(d => y(d.tpr)).curve(d3.curveMonotoneX)\r
    svg.append('path').datum(data).attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('d', line).attr('fill', 'none').attr('stroke', colors[0]).attr('stroke-width', 2.5)\r
\r
    // AUC shading\r
    const sorted = [...data].sort((a, b) => a.fpr - b.fpr)\r
    const areaPath = \`M\${x(sorted[0].fpr)},\${y(0)} \` + sorted.map(d => \`L\${x(d.fpr)},\${y(d.tpr)}\`).join(' ') + \` L\${x(sorted[sorted.length-1].fpr)},\${y(0)} Z\`\r
    svg.append('path').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('d', areaPath).attr('fill', colors[0]).attr('fill-opacity', 0.1)\r
\r
    // Compute AUC via trapezoid rule\r
    const auc = sorted.reduce((acc, d, i) => {\r
      if (i === 0) return 0\r
      const dx = d.fpr - sorted[i-1].fpr\r
      return acc + dx * (d.tpr + sorted[i-1].tpr) / 2\r
    }, 0)\r
\r
    // Points\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .selectAll('circle').data(sorted.filter((_, i) => i % 10 === 0 || i === sorted.length - 1)).join('circle')\r
      .attr('cx', d => x(d.fpr)).attr('cy', d => y(d.tpr)).attr('r', 2.5)\r
      .attr('fill', colors[0]).attr('opacity', 0.6)\r
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
    // Labels\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top + IH + 28})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text('False Positive Rate')\r
    svg.append('text').attr('transform', \`translate(12,\${M.top + IH/2}) rotate(-90)\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text('True Positive Rate')\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top - 10})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '14px').attr('font-weight', 'bold').text('ROC Curve — AUC = ' + auc.toFixed(3))\r
\r
    // Legend\r
    const lg = svg.append('g').attr('transform', \`translate(\${M.left + IW - 110},\${M.top + IH + 15})\`)\r
    lg.append('line').attr('x1', 0).attr('x2', 18).attr('y1', 4).attr('y2', 4).attr('stroke', colors[0]).attr('stroke-width', 2)\r
    lg.append('text').attr('x', 22).attr('y', 8).text('ROC').attr('fill', 'var(--text-secondary)').attr('font-size', '10px')\r
    lg.append('line').attr('x1', 0).attr('x2', 18).attr('y1', 20).attr('y2', 20).attr('stroke', 'var(--text-secondary)').attr('stroke-width', 1.5).attr('stroke-dasharray', '6,4')\r
    lg.append('text').attr('x', 22).attr('y', 24).text('Random (AUC=0.5)').attr('fill', 'var(--text-secondary)').attr('font-size', '10px')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};