var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'precision-recall_multi',\r
  title: 'Precision Recall_ Multi',\r
  desc: 'Precision Recall_ Multi — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'PrecisionRecall_Multi',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","precision-recall_-multi"],\r
}\r
\r
export default function PrecisionRecall_Multi({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = {"models":[{"name":"Model A","points":[{"recall":0.03,"precision":0.15},{"recall":0.086,"precision":0.322},{"recall":0.139,"precision":0.422},{"recall":0.189,"precision":0.488},{"recall":0.237,"precision":0.537},{"recall":0.281,"precision":0.575},{"recall":0.323,"precision":0.606},{"recall":0.362,"precision":0.631},{"recall":0.4,"precision":0.654},{"recall":0.434,"precision":0.673},{"recall":0.467,"precision":0.69},{"recall":0.498,"precision":0.705},{"recall":0.528,"precision":0.718},{"recall":0.555,"precision":0.731},{"recall":0.581,"precision":0.742},{"recall":0.605,"precision":0.752},{"recall":0.628,"precision":0.762},{"recall":0.65,"precision":0.77},{"recall":0.67,"precision":0.778},{"recall":0.69,"precision":0.786},{"recall":0.708,"precision":0.793},{"recall":0.725,"precision":0.799},{"recall":0.741,"precision":0.805},{"recall":0.756,"precision":0.81},{"recall":0.77,"precision":0.815},{"recall":0.783,"precision":0.82},{"recall":0.796,"precision":0.825},{"recall":0.808,"precision":0.829},{"recall":0.819,"precision":0.833},{"recall":0.83,"precision":0.836},{"recall":0.84,"precision":0.84},{"recall":0.849,"precision":0.843},{"recall":0.858,"precision":0.846},{"recall":0.866,"precision":0.849},{"recall":0.874,"precision":0.852},{"recall":0.881,"precision":0.854},{"recall":0.888,"precision":0.856},{"recall":0.895,"precision":0.858},{"recall":0.901,"precision":0.861},{"recall":0.907,"precision":0.862},{"recall":0.912,"precision":0.864},{"recall":0.917,"precision":0.866},{"recall":0.922,"precision":0.868},{"recall":0.926,"precision":0.869},{"recall":0.931,"precision":0.87},{"recall":0.935,"precision":0.872},{"recall":0.939,"precision":0.873},{"recall":0.942,"precision":0.874},{"recall":0.946,"precision":0.875},{"recall":0.949,"precision":0.876}]},{"name":"Model B","points":[{"recall":0.025,"precision":0.085},{"recall":0.072,"precision":0.207},{"recall":0.118,"precision":0.29},{"recall":0.161,"precision":0.353},{"recall":0.201,"precision":0.402},{"recall":0.24,"precision":0.442},{"recall":0.277,"precision":0.475},{"recall":0.313,"precision":0.504},{"recall":0.346,"precision":0.529},{"recall":0.378,"precision":0.551},{"recall":0.408,"precision":0.571},{"recall":0.437,"precision":0.589},{"recall":0.465,"precision":0.605},{"recall":0.491,"precision":0.62},{"recall":0.516,"precision":0.634},{"recall":0.539,"precision":0.646},{"recall":0.562,"precision":0.658},{"recall":0.583,"precision":0.669},{"recall":0.603,"precision":0.679},{"recall":0.623,"precision":0.688},{"recall":0.641,"precision":0.697},{"recall":0.659,"precision":0.705},{"recall":0.675,"precision":0.713},{"recall":0.691,"precision":0.72},{"recall":0.706,"precision":0.727},{"recall":0.721,"precision":0.733},{"recall":0.734,"precision":0.739},{"recall":0.747,"precision":0.745},{"recall":0.759,"precision":0.75},{"recall":0.771,"precision":0.755},{"recall":0.782,"precision":0.76},{"recall":0.793,"precision":0.764},{"recall":0.803,"precision":0.769},{"recall":0.813,"precision":0.773},{"recall":0.822,"precision":0.776},{"recall":0.831,"precision":0.78},{"recall":0.839,"precision":0.783},{"recall":0.847,"precision":0.787},{"recall":0.854,"precision":0.79},{"recall":0.861,"precision":0.793},{"recall":0.868,"precision":0.795},{"recall":0.874,"precision":0.798},{"recall":0.881,"precision":0.801},{"recall":0.886,"precision":0.803},{"recall":0.892,"precision":0.805},{"recall":0.897,"precision":0.807},{"recall":0.902,"precision":0.809},{"recall":0.907,"precision":0.811},{"recall":0.912,"precision":0.813},{"recall":0.916,"precision":0.815}]}]}\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const d = (customData && customData.models) ? customData : DEFAULT_DATA\r
    const baseRate = 0.15\r
\r
    const x = d3.scaleLinear().domain([0, 1]).range([0, IW])\r
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
    // Base rate line\r
    svg.append('line').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('x1', x(0)).attr('x2', x(1)).attr('y1', y(baseRate)).attr('y2', y(baseRate))\r
      .attr('stroke', 'var(--text-secondary)').attr('stroke-width', 1.5).attr('stroke-dasharray', '4,4')\r
    svg.append('text').attr('x', IW - 4).attr('y', y(baseRate) - 6)\r
      .attr('text-anchor', 'end').attr('fill', 'var(--text-secondary)').attr('font-size', '9px').text('Base=' + baseRate)\r
\r
    d.models.forEach((model, i) => {\r
      const line = d3.line().x(dd => x(dd.recall)).y(dd => y(dd.precision)).curve(d3.curveMonotoneX)\r
      svg.append('path').datum(model.points).attr('transform', \`translate(\${M.left},\${M.top})\`)\r
        .attr('d', line).attr('fill', 'none').attr('stroke', colors[i % colors.length]).attr('stroke-width', 2.5)\r
\r
      const last = model.points[model.points.length - 1]\r
      svg.append('text').attr('x', M.left + x(last.recall) + 4).attr('y', M.top + y(last.precision) - 4)\r
        .attr('fill', colors[i % colors.length]).attr('font-size', '9px').text(model.name)\r
    })\r
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
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text('Recall')\r
    svg.append('text').attr('transform', \`translate(12,\${M.top + IH/2}) rotate(-90)\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text('Precision')\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top - 10})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '14px').attr('font-weight', 'bold').text('Precision-Recall Curves (Multi-Model)')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};