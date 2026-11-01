var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'regression-discontinuity',\r
  title: 'Regression Discontinuity',\r
  desc: 'Regression Discontinuity — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'RegressionDiscontinuity',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","regression-discontinuity"],\r
}\r
\r
export default function RegressionDiscontinuity({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"runningVar":0.404,"outcome":5.12,"treated":true},{"runningVar":1.41,"outcome":5.96,"treated":true},{"runningVar":-1.301,"outcome":1.39,"treated":false},{"runningVar":-0.907,"outcome":1.73,"treated":false},{"runningVar":1.462,"outcome":5.69,"treated":true},{"runningVar":-1,"outcome":2.07,"treated":false},{"runningVar":0.983,"outcome":5.2,"treated":true},{"runningVar":-1.211,"outcome":1.4,"treated":false},{"runningVar":0.746,"outcome":5.54,"treated":true},{"runningVar":-1.985,"outcome":0.96,"treated":false},{"runningVar":1.349,"outcome":5,"treated":true},{"runningVar":0.369,"outcome":4.48,"treated":true},{"runningVar":-0.932,"outcome":0.88,"treated":false},{"runningVar":-1.257,"outcome":1.8,"treated":false},{"runningVar":0.121,"outcome":4.35,"treated":true},{"runningVar":-1.308,"outcome":1.86,"treated":false},{"runningVar":-0.049,"outcome":2.44,"treated":false},{"runningVar":-0.722,"outcome":1.56,"treated":false},{"runningVar":-1.85,"outcome":0.4,"treated":false},{"runningVar":0.226,"outcome":5.26,"treated":true},{"runningVar":-1.019,"outcome":1.71,"treated":false},{"runningVar":-1.162,"outcome":1.12,"treated":false},{"runningVar":0.954,"outcome":6.02,"treated":true},{"runningVar":0.032,"outcome":4.57,"treated":true},{"runningVar":-0.863,"outcome":1.26,"treated":false},{"runningVar":-1.701,"outcome":1.39,"treated":false},{"runningVar":0.723,"outcome":5.65,"treated":true},{"runningVar":1.711,"outcome":5.24,"treated":true},{"runningVar":1.775,"outcome":5.78,"treated":true},{"runningVar":1.769,"outcome":5.34,"treated":true},{"runningVar":-1.556,"outcome":0.5,"treated":false},{"runningVar":-0.558,"outcome":1.69,"treated":false},{"runningVar":0.448,"outcome":5.82,"treated":true},{"runningVar":-1.69,"outcome":1.48,"treated":false},{"runningVar":1.739,"outcome":5.54,"treated":true},{"runningVar":0.826,"outcome":4.93,"treated":true},{"runningVar":0.081,"outcome":5.52,"treated":true},{"runningVar":-1.518,"outcome":1.98,"treated":false},{"runningVar":0.251,"outcome":5.75,"treated":true},{"runningVar":-0.264,"outcome":1.99,"treated":false},{"runningVar":-0.652,"outcome":1.82,"treated":false},{"runningVar":-0.708,"outcome":1.99,"treated":false},{"runningVar":-0.819,"outcome":1.52,"treated":false},{"runningVar":1.373,"outcome":5.98,"treated":true},{"runningVar":1.976,"outcome":6.57,"treated":true},{"runningVar":-0.272,"outcome":1.93,"treated":false},{"runningVar":-0.816,"outcome":0.99,"treated":false},{"runningVar":0.787,"outcome":5.11,"treated":true},{"runningVar":1.144,"outcome":6.18,"treated":true},{"runningVar":-1.625,"outcome":1.15,"treated":false},{"runningVar":1.288,"outcome":5.09,"treated":true},{"runningVar":1.891,"outcome":5.46,"treated":true},{"runningVar":0.838,"outcome":5.72,"treated":true},{"runningVar":-1.107,"outcome":1.32,"treated":false},{"runningVar":-1.346,"outcome":1.56,"treated":false},{"runningVar":-0.656,"outcome":1.23,"treated":false},{"runningVar":0.516,"outcome":5.84,"treated":true},{"runningVar":-0.694,"outcome":2.09,"treated":false},{"runningVar":-0.428,"outcome":1.23,"treated":false},{"runningVar":1.455,"outcome":5.53,"treated":true},{"runningVar":-1.962,"outcome":1.38,"treated":false},{"runningVar":0.541,"outcome":5.83,"treated":true},{"runningVar":1.633,"outcome":5.38,"treated":true},{"runningVar":0.416,"outcome":5.19,"treated":true},{"runningVar":-1.264,"outcome":0.69,"treated":false},{"runningVar":0.822,"outcome":5.72,"treated":true},{"runningVar":-0.834,"outcome":1.25,"treated":false},{"runningVar":-0.654,"outcome":0.97,"treated":false},{"runningVar":-1.116,"outcome":2.18,"treated":false},{"runningVar":0.289,"outcome":5.88,"treated":true},{"runningVar":-1.345,"outcome":0.83,"treated":false},{"runningVar":0.244,"outcome":4.81,"treated":true},{"runningVar":-0.421,"outcome":1.69,"treated":false},{"runningVar":-0.327,"outcome":2.12,"treated":false},{"runningVar":-0.406,"outcome":1.55,"treated":false},{"runningVar":1.583,"outcome":5.53,"treated":true},{"runningVar":-0.019,"outcome":2.16,"treated":false},{"runningVar":0.185,"outcome":5.23,"treated":true},{"runningVar":-1.058,"outcome":1.21,"treated":false},{"runningVar":-0.805,"outcome":1.33,"treated":false},{"runningVar":0.677,"outcome":4.92,"treated":true},{"runningVar":-1.323,"outcome":1.63,"treated":false},{"runningVar":-0.743,"outcome":1.07,"treated":false},{"runningVar":-0.745,"outcome":0.94,"treated":false},{"runningVar":0.31,"outcome":4.72,"treated":true},{"runningVar":-0.074,"outcome":1.78,"treated":false},{"runningVar":0.848,"outcome":6.04,"treated":true},{"runningVar":1.247,"outcome":5.53,"treated":true},{"runningVar":-1.383,"outcome":1.86,"treated":false},{"runningVar":0.103,"outcome":5.56,"treated":true},{"runningVar":1.578,"outcome":5.71,"treated":true},{"runningVar":-1.414,"outcome":1.47,"treated":false},{"runningVar":1.23,"outcome":5.18,"treated":true},{"runningVar":-0.441,"outcome":1.85,"treated":false},{"runningVar":1.938,"outcome":5.96,"treated":true},{"runningVar":1.438,"outcome":6.23,"treated":true},{"runningVar":0.974,"outcome":4.82,"treated":true},{"runningVar":-1.723,"outcome":0.64,"treated":false},{"runningVar":0.026,"outcome":5.28,"treated":true},{"runningVar":1.043,"outcome":6.26,"treated":true}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
\r
    const x = d3.scaleLinear().domain(d3.extent(data, d => d.runningVar)).range([0, IW])\r
    const y = d3.scaleLinear().domain(d3.extent(data, d => d.outcome)).range([IH, 0])\r
\r
    // Grid\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(-IW).tickPadding(0))\r
      .call(g => g.select('.domain').remove).call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.4)).call(g => g.selectAll('text').remove()).lower()\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisBottom(x).ticks(6).tickSize(-IH).tickPadding(0))\r
      .call(g => g.select('.domain').remove).call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.4)).call(g => g.selectAll('text').remove()).lower()\r
\r
    // Cutoff line\r
    const cutoff = 0\r
    svg.append('line').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('x1', x(cutoff)).attr('x2', x(cutoff)).attr('y1', 0).attr('y2', IH)\r
      .attr('stroke', colors[3]).attr('stroke-width', 2).attr('stroke-dasharray', '6,4')\r
    svg.append('text').attr('x', x(cutoff)).attr('y', M.top - 4)\r
      .attr('text-anchor', 'middle').attr('fill', colors[3]).attr('font-size', '10px').text('Cutoff')\r
\r
    // Control group (left)\r
    const control = data.filter(d => !d.treated)\r
    const controlLine = d3.line().x(d => x(d.runningVar)).y(d => y(d.outcome)).curve(d3.curveLinear)\r
    svg.append('path').datum(control).attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('d', controlLine).attr('fill', 'none').attr('stroke', colors[0]).attr('stroke-width', 2).attr('opacity', 0.6)\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .selectAll('circle').data(control).join('circle')\r
      .attr('cx', d => x(d.runningVar)).attr('cy', d => y(d.outcome)).attr('r', 3.5)\r
      .attr('fill', colors[0]).attr('opacity', 0.5)\r
\r
    // Treatment group (right)\r
    const treated = data.filter(d => d.treated)\r
    const treatedLine = d3.line().x(d => x(d.runningVar)).y(d => y(d.outcome)).curve(d3.curveLinear)\r
    svg.append('path').datum(treated).attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('d', treatedLine).attr('fill', 'none').attr('stroke', colors[1]).attr('stroke-width', 2).attr('opacity', 0.6)\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .selectAll('circle').data(treated).join('circle')\r
      .attr('cx', d => x(d.runningVar)).attr('cy', d => y(d.outcome)).attr('r', 3.5)\r
      .attr('fill', colors[1]).attr('opacity', 0.5)\r
\r
    // Treatment effect annotation\r
    const effect = d3.mean(treated, d => d.outcome) - d3.mean(control, d => d.outcome)\r
    svg.append('text').attr('x', IW - 4).attr('y', M.top + 14)\r
      .attr('text-anchor', 'end').attr('fill', colors[2]).attr('font-size', '11px').attr('font-weight', 'bold')\r
      .text('Effect: +' + effect.toFixed(2))\r
\r
    // Axes\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top + IH})\`)\r
      .call(d3.axisBottom(x).ticks(6).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text(d => d.toFixed(1)))\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top + IH + 28})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text('Running Variable')\r
    svg.append('text').attr('transform', \`translate(12,\${M.top + IH/2}) rotate(-90)\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text('Outcome')\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top - 10})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '14px').attr('font-weight', 'bold').text('Regression Discontinuity')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};