var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'log-rank-test',\r
  title: 'Log Rank Test',\r
  desc: 'Log Rank Test — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'LogRankTest',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","log-rank-test"],\r
}\r
\r
export default function LogRankTest({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = {"groups":["Treatment","Control"],"survival":[{"time":0,"treatment":1,"control":1},{"time":1,"treatment":0.92,"control":0.88},{"time":2,"treatment":0.85,"control":0.78},{"time":3,"treatment":0.78,"control":0.7},{"time":4,"treatment":0.72,"control":0.62},{"time":5,"treatment":0.68,"control":0.55},{"time":6,"treatment":0.62,"control":0.48},{"time":7,"treatment":0.58,"control":0.42},{"time":8,"treatment":0.52,"control":0.38},{"time":9,"treatment":0.48,"control":0.35},{"time":10,"treatment":0.45,"control":0.3}],"pValue":0.003,"hazardRatio":0.65}\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const d = (customData && Array.isArray(customData.survival) && customData.survival.length > 0) ? customData : DEFAULT_DATA\r
    const { groups, survival } = d\r
\r
    const x = d3.scaleLinear().domain(d3.extent(survival, s => s.time)).range([0, IW])\r
    const y = d3.scaleLinear().domain([0, 1.05]).range([IH, 0])\r
\r
    // Grid\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(-IW).tickPadding(0))\r
      .call(g => g.select('.domain').remove()).call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.4)).call(g => g.selectAll('text').remove()).lower()\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisBottom(x).ticks(5).tickSize(-IH).tickPadding(0))\r
      .call(g => g.select('.domain').remove()).call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.4)).call(g => g.selectAll('text').remove()).lower()\r
\r
    // Y=0.5 reference\r
    svg.append('line').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('x1', 0).attr('x2', IW).attr('y1', y(0.5)).attr('y2', y(0.5))\r
      .attr('stroke', 'var(--text-secondary)').attr('stroke-width', 1).attr('stroke-dasharray', '3,3')\r
\r
    // Treatment curve\r
    const treatmentLine = d3.line()\r
      .x(s => x(s.time))\r
      .y(s => y(s.treatment))\r
      .curve(d3.curveStepAfter)\r
    svg.append('path').datum(survival).attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('d', treatmentLine).attr('fill', 'none').attr('stroke', colors[0]).attr('stroke-width', 2.5)\r
\r
    // Control curve\r
    const controlLine = d3.line()\r
      .x(s => x(s.time))\r
      .y(s => y(s.control))\r
      .curve(d3.curveStepAfter)\r
    svg.append('path').datum(survival).attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('d', controlLine).attr('fill', 'none').attr('stroke', colors[1]).attr('stroke-width', 2.5)\r
\r
    // Censoring marks (every point is a censoring event in synthetic data)\r
    survival.forEach(s => {\r
      svg.append('text').attr('transform', \`translate(\${M.left + x(s.time)},\${M.top + y(s.treatment) - 4})\`)\r
        .attr('fill', colors[0]).attr('font-size', '10px').text('|')\r
      svg.append('text').attr('transform', \`translate(\${M.left + x(s.time)},\${M.top + y(s.control) - 4})\`)\r
        .attr('fill', colors[1]).attr('font-size', '10px').text('|')\r
    })\r
\r
    // Axes\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top + IH})\`)\r
      .call(d3.axisBottom(x).ticks(5).tickSize(0).tickPadding(8).tickFormat(d => d + ' time units'))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(0).tickPadding(8).tickFormat(d => d.toFixed(1)))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    // Legend\r
    const lg = svg.append('g').attr('transform', \`translate(\${M.left + IW - 100},\${M.top + 8})\`)\r
    lg.append('line').attr('x1', 0).attr('x2', 16).attr('y1', 5).attr('y2', 5).attr('stroke', colors[0]).attr('stroke-width', 2.5)\r
    lg.append('text').attr('x', 20).attr('y', 9).text(groups[0]).attr('fill', 'var(--text-secondary)').attr('font-size', '10px')\r
    lg.append('line').attr('x1', 0).attr('x2', 16).attr('y1', 22).attr('y2', 22).attr('stroke', colors[1]).attr('stroke-width', 2.5)\r
    lg.append('text').attr('x', 20).attr('y', 26).text(groups[1]).attr('fill', 'var(--text-secondary)').attr('font-size', '10px')\r
    lg.append('text').attr('x', 0).attr('y', 44).text('HR=' + d.hazardRatio).attr('fill', colors[2]).attr('font-size', '10px').attr('font-weight', 'bold')\r
    lg.append('text').attr('x', 0).attr('y', 58).text('p=' + d.pValue).attr('fill', colors[3]).attr('font-size', '10px').attr('font-weight', 'bold')\r
\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top + IH + 28})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text('Time')\r
    svg.append('text').attr('transform', \`translate(12,\${M.top + IH/2}) rotate(-90)\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text('Survival Probability')\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top - 10})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '14px').attr('font-weight', 'bold').text('Log-Rank Test (Survival Curves)')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};