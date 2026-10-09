var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'prior-posterior',\r
  title: 'Prior Posterior',\r
  desc: 'Prior Posterior — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'PriorPosterior',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","prior-posterior"],\r
}\r
\r
export default function PriorPosterior({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = {"prior":[{"x":-3,"y":0.004},{"x":-2.94,"y":0.004},{"x":-2.88,"y":0.005},{"x":-2.82,"y":0.006},{"x":-2.76,"y":0.007},{"x":-2.7,"y":0.008},{"x":-2.64,"y":0.01},{"x":-2.58,"y":0.011},{"x":-2.52,"y":0.013},{"x":-2.46,"y":0.015},{"x":-2.4,"y":0.018},{"x":-2.34,"y":0.021},{"x":-2.28,"y":0.024},{"x":-2.22,"y":0.027},{"x":-2.16,"y":0.031},{"x":-2.1,"y":0.035},{"x":-2.04,"y":0.04},{"x":-1.98,"y":0.045},{"x":-1.92,"y":0.051},{"x":-1.86,"y":0.057},{"x":-1.8,"y":0.063},{"x":-1.74,"y":0.07},{"x":-1.68,"y":0.078},{"x":-1.62,"y":0.086},{"x":-1.56,"y":0.095},{"x":-1.5,"y":0.104},{"x":-1.44,"y":0.113},{"x":-1.38,"y":0.123},{"x":-1.32,"y":0.134},{"x":-1.26,"y":0.144},{"x":-1.2,"y":0.155},{"x":-1.14,"y":0.167},{"x":-1.08,"y":0.178},{"x":-1.02,"y":0.19},{"x":-0.96,"y":0.201},{"x":-0.9,"y":0.213},{"x":-0.84,"y":0.224},{"x":-0.78,"y":0.235},{"x":-0.72,"y":0.246},{"x":-0.66,"y":0.257},{"x":-0.6,"y":0.267},{"x":-0.54,"y":0.276},{"x":-0.48,"y":0.284},{"x":-0.42,"y":0.292},{"x":-0.36,"y":0.299},{"x":-0.3,"y":0.305},{"x":-0.24,"y":0.31},{"x":-0.18,"y":0.314},{"x":-0.12,"y":0.317},{"x":-0.06,"y":0.319},{"x":0,"y":0.319},{"x":0.06,"y":0.319},{"x":0.12,"y":0.317},{"x":0.18,"y":0.314},{"x":0.24,"y":0.31},{"x":0.3,"y":0.305},{"x":0.36,"y":0.299},{"x":0.42,"y":0.292},{"x":0.48,"y":0.284},{"x":0.54,"y":0.276},{"x":0.6,"y":0.267},{"x":0.66,"y":0.257},{"x":0.72,"y":0.246},{"x":0.78,"y":0.235},{"x":0.84,"y":0.224},{"x":0.9,"y":0.213},{"x":0.96,"y":0.201},{"x":1.02,"y":0.19},{"x":1.08,"y":0.178},{"x":1.14,"y":0.167},{"x":1.2,"y":0.155},{"x":1.26,"y":0.144},{"x":1.32,"y":0.134},{"x":1.38,"y":0.123},{"x":1.44,"y":0.113},{"x":1.5,"y":0.104},{"x":1.56,"y":0.095},{"x":1.62,"y":0.086},{"x":1.68,"y":0.078},{"x":1.74,"y":0.07},{"x":1.8,"y":0.063},{"x":1.86,"y":0.057},{"x":1.92,"y":0.051},{"x":1.98,"y":0.045},{"x":2.04,"y":0.04},{"x":2.1,"y":0.035},{"x":2.16,"y":0.031},{"x":2.22,"y":0.027},{"x":2.28,"y":0.024},{"x":2.34,"y":0.021},{"x":2.4,"y":0.018},{"x":2.46,"y":0.015},{"x":2.52,"y":0.013},{"x":2.58,"y":0.011},{"x":2.64,"y":0.01},{"x":2.7,"y":0.008},{"x":2.76,"y":0.007},{"x":2.82,"y":0.006},{"x":2.88,"y":0.005},{"x":2.94,"y":0.004}],"posterior":[{"x":-3,"y":0},{"x":-2.94,"y":0},{"x":-2.88,"y":0},{"x":-2.82,"y":0},{"x":-2.76,"y":0},{"x":-2.7,"y":0},{"x":-2.64,"y":0},{"x":-2.58,"y":0},{"x":-2.52,"y":0},{"x":-2.46,"y":0},{"x":-2.4,"y":0},{"x":-2.34,"y":0},{"x":-2.28,"y":0},{"x":-2.22,"y":0},{"x":-2.16,"y":0},{"x":-2.1,"y":0},{"x":-2.04,"y":0},{"x":-1.98,"y":0},{"x":-1.92,"y":0},{"x":-1.86,"y":0},{"x":-1.8,"y":0},{"x":-1.74,"y":0},{"x":-1.68,"y":0},{"x":-1.62,"y":0},{"x":-1.56,"y":0},{"x":-1.5,"y":0},{"x":-1.44,"y":0},{"x":-1.38,"y":0},{"x":-1.32,"y":0.001},{"x":-1.26,"y":0.001},{"x":-1.2,"y":0.001},{"x":-1.14,"y":0.002},{"x":-1.08,"y":0.003},{"x":-1.02,"y":0.004},{"x":-0.96,"y":0.006},{"x":-0.9,"y":0.008},{"x":-0.84,"y":0.011},{"x":-0.78,"y":0.015},{"x":-0.72,"y":0.02},{"x":-0.66,"y":0.027},{"x":-0.6,"y":0.035},{"x":-0.54,"y":0.046},{"x":-0.48,"y":0.058},{"x":-0.42,"y":0.073},{"x":-0.36,"y":0.091},{"x":-0.3,"y":0.111},{"x":-0.24,"y":0.133},{"x":-0.18,"y":0.158},{"x":-0.12,"y":0.185},{"x":-0.06,"y":0.213},{"x":0,"y":0.242},{"x":0.06,"y":0.271},{"x":0.12,"y":0.299},{"x":0.18,"y":0.325},{"x":0.24,"y":0.348},{"x":0.3,"y":0.368},{"x":0.36,"y":0.384},{"x":0.42,"y":0.394},{"x":0.48,"y":0.399},{"x":0.54,"y":0.398},{"x":0.6,"y":0.391},{"x":0.66,"y":0.379},{"x":0.72,"y":0.362},{"x":0.78,"y":0.341},{"x":0.84,"y":0.317},{"x":0.9,"y":0.29},{"x":0.96,"y":0.261},{"x":1.02,"y":0.232},{"x":1.08,"y":0.204},{"x":1.14,"y":0.176},{"x":1.2,"y":0.15},{"x":1.26,"y":0.126},{"x":1.32,"y":0.104},{"x":1.38,"y":0.085},{"x":1.44,"y":0.068},{"x":1.5,"y":0.054},{"x":1.56,"y":0.042},{"x":1.62,"y":0.032},{"x":1.68,"y":0.025},{"x":1.74,"y":0.018},{"x":1.8,"y":0.014},{"x":1.86,"y":0.01},{"x":1.92,"y":0.007},{"x":1.98,"y":0.005},{"x":2.04,"y":0.003},{"x":2.1,"y":0.002},{"x":2.16,"y":0.002},{"x":2.22,"y":0.001},{"x":2.28,"y":0.001},{"x":2.34,"y":0},{"x":2.4,"y":0},{"x":2.46,"y":0},{"x":2.52,"y":0},{"x":2.58,"y":0},{"x":2.64,"y":0},{"x":2.7,"y":0},{"x":2.76,"y":0},{"x":2.82,"y":0},{"x":2.88,"y":0},{"x":2.94,"y":0}]}\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const d = (customData && customData.prior) ? customData : DEFAULT_DATA\r
\r
    const x = d3.scaleLinear().domain([-3, 3]).range([0, IW])\r
    const y = d3.scaleLinear().domain([0, 0.6]).range([IH, 0])\r
\r
    // Grid\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(-IW).tickPadding(0))\r
      .call(g => g.select('.domain').remove()).call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.4)).call(g => g.selectAll('text').remove()).lower()\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisBottom(x).ticks(6).tickSize(-IH).tickPadding(0))\r
      .call(g => g.select('.domain').remove()).call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.4)).call(g => g.selectAll('text').remove()).lower()\r
\r
    // Zero line\r
    svg.append('line').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('x1', 0).attr('x2', IW).attr('y1', y(0)).attr('y2', y(0))\r
      .attr('stroke', 'var(--text-secondary)').attr('stroke-width', 1)\r
\r
    // Prior area + line\r
    const priorLine = d3.line().x(v => x(v.x)).y(v => y(v.y)).curve(d3.curveMonotoneX)\r
    const priorArea = d3.area().x(v => x(v.x)).y0(y(0)).y1(v => y(v.y)).curve(d3.curveMonotoneX)\r
\r
    svg.append('path').datum(d.prior).attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('d', priorArea).attr('fill', colors[1]).attr('fill-opacity', 0.2)\r
    svg.append('path').datum(d.prior).attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('d', priorLine).attr('fill', 'none').attr('stroke', colors[1]).attr('stroke-width', 2)\r
\r
    // Posterior area + line\r
    const postLine = d3.line().x(v => x(v.x)).y(v => y(v.y)).curve(d3.curveMonotoneX)\r
    const postArea = d3.area().x(v => x(v.x)).y0(y(0)).y1(v => y(v.y)).curve(d3.curveMonotoneX)\r
\r
    svg.append('path').datum(d.posterior).attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('d', postArea).attr('fill', colors[0]).attr('fill-opacity', 0.3)\r
    svg.append('path').datum(d.posterior).attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('d', postLine).attr('fill', 'none').attr('stroke', colors[0]).attr('stroke-width', 2.5)\r
\r
    // Legend\r
    const lg = svg.append('g').attr('transform', \`translate(\${M.left + IW - 90},\${M.top + 8})\`)\r
    lg.append('rect').attr('width', 14).attr('height', 10).attr('fill', colors[1]).attr('opacity', 0.3)\r
    lg.append('line').attr('x1', 0).attr('x2', 14).attr('y1', 5).attr('y2', 5).attr('stroke', colors[1]).attr('stroke-width', 2)\r
    lg.append('text').attr('x', 18).attr('y', 9).text('Prior').attr('fill', 'var(--text-secondary)').attr('font-size', '10px')\r
    lg.append('rect').attr('x', 0).attr('y', 16).attr('width', 14).attr('height', 10).attr('fill', colors[0]).attr('opacity', 0.3)\r
    lg.append('line').attr('x1', 0).attr('x2', 14).attr('y1', 21).attr('y2', 21).attr('stroke', colors[0]).attr('stroke-width', 2)\r
    lg.append('text').attr('x', 18).attr('y', 25).text('Posterior').attr('fill', 'var(--text-secondary)').attr('font-size', '10px')\r
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
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text('Parameter Value')\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top - 10})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '14px').attr('font-weight', 'bold').text('Prior vs Posterior Distribution')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};