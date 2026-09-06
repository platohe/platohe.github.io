var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'residual_plot',\r
  title: 'Residual_ Plot',\r
  desc: 'Residual_ Plot — a analysis chart visualization',\r
  category: 'Analysis',\r
  component: 'Residual_Plot',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["analysis","residual_-plot"],\r
}\r
\r
export default function ResidualPlot({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"fitted":20,"residual":1.21},{"fitted":21.2,"residual":-0.63},{"fitted":22.4,"residual":4.31},{"fitted":23.6,"residual":2.1},{"fitted":24.8,"residual":-4.06},{"fitted":26,"residual":0.34},{"fitted":27.2,"residual":-2.88},{"fitted":28.4,"residual":1.6},{"fitted":29.6,"residual":4.74},{"fitted":30.8,"residual":-0.36},{"fitted":32,"residual":-3.3},{"fitted":33.2,"residual":5.09},{"fitted":34.4,"residual":3.3},{"fitted":35.6,"residual":-2.62},{"fitted":36.8,"residual":-4.14},{"fitted":38,"residual":0.01},{"fitted":39.2,"residual":2.6},{"fitted":40.4,"residual":1.55},{"fitted":41.6,"residual":-7.03},{"fitted":42.8,"residual":-0.42},{"fitted":44,"residual":4.86},{"fitted":45.2,"residual":-6.52},{"fitted":46.4,"residual":1.35},{"fitted":47.6,"residual":-6.91},{"fitted":48.8,"residual":-3.47},{"fitted":50,"residual":-6.57},{"fitted":51.2,"residual":-4.75},{"fitted":52.4,"residual":4.32},{"fitted":53.6,"residual":0.47},{"fitted":54.8,"residual":-7.32},{"fitted":56,"residual":-5.1},{"fitted":57.2,"residual":5.39},{"fitted":58.4,"residual":-0.19},{"fitted":59.6,"residual":4.93},{"fitted":60.8,"residual":-2.9},{"fitted":62,"residual":-0.81},{"fitted":63.2,"residual":-7.55},{"fitted":64.4,"residual":-7.38},{"fitted":65.6,"residual":0.94},{"fitted":66.8,"residual":1.61},{"fitted":68,"residual":-4.28},{"fitted":69.2,"residual":2.47},{"fitted":70.4,"residual":-4.95},{"fitted":71.6,"residual":-3.37},{"fitted":72.8,"residual":4.12},{"fitted":74,"residual":6.24},{"fitted":75.2,"residual":0.14},{"fitted":76.4,"residual":-5.22},{"fitted":77.6,"residual":-3.83},{"fitted":78.8,"residual":-3.7},{"fitted":80,"residual":-7.66},{"fitted":81.2,"residual":2.9},{"fitted":82.4,"residual":3.3},{"fitted":83.6,"residual":3.55},{"fitted":84.8,"residual":7.91},{"fitted":86,"residual":-7.66},{"fitted":87.2,"residual":8.31},{"fitted":88.4,"residual":-1.3},{"fitted":89.6,"residual":8.39},{"fitted":90.8,"residual":-6.92}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0 && customData[0]?.residual !== undefined) ? customData : DEFAULT_DATA\r
\r
    const x = d3.scaleLinear().domain(d3.extent(data, d => d.fitted)).range([0, IW])\r
    const y = d3.scaleLinear().domain(d3.extent(data, d => d.residual)).range([IH, 0])\r
    const yRange = y.domain()[1] - y.domain()[0]\r
    const yCenter = (y.domain()[0] + y.domain()[1]) / 2\r
\r
    // Grid\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(-IW).tickPadding(0))\r
      .call(g => g.select('.domain').remove()).call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.4)).call(g => g.selectAll('text').remove()).lower()\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisBottom(x).ticks(5).tickSize(-IH).tickPadding(0))\r
      .call(g => g.select('.domain').remove()).call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.4)).call(g => g.selectAll('text').remove()).lower()\r
\r
    // Zero line\r
    svg.append('line').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('x1', 0).attr('x2', IW).attr('y1', y(0)).attr('y2', y(0))\r
      .attr('stroke', 'var(--text-secondary)').attr('stroke-width', 1.5);\r
\r
    // ±2σ bands\r
    const sigma = yRange / 4;\r
    [2, -2].forEach(m => {\r
      svg.append('line').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
        .attr('x1', 0).attr('x2', IW).attr('y1', y(m * sigma)).attr('y2', y(m * sigma))\r
        .attr('stroke', colors[1]).attr('stroke-width', 1).attr('stroke-dasharray', '4,4').attr('opacity', 0.6)\r
    })\r
\r
    // Points\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .selectAll('circle').data(data).join('circle')\r
      .attr('cx', d => x(d.fitted)).attr('cy', d => y(d.residual)).attr('r', 3)\r
      .attr('fill', colors[0]).attr('opacity', 0.6).attr('stroke', 'none')\r
\r
    // Smooth trend line\r
    const line = d3.line().x(d => x(d.fitted)).y(d => y(d.residual)).curve(d3.curveMonotoneX)\r
    svg.append('path').datum(data).attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('d', line).attr('fill', 'none').attr('stroke', colors[3]).attr('stroke-width', 2).attr('opacity', 0.8)\r
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
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text('Fitted Values')\r
    svg.append('text').attr('transform', \`translate(12,\${M.top + IH/2}) rotate(-90)\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text('Standardized Residuals')\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top - 10})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '14px').attr('font-weight', 'bold').text('Residuals vs Fitted')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};