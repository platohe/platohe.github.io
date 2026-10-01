var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'poincare-plot',\r
  title: 'Poincare Plot',\r
  desc: 'Poincare Plot — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'PoincarePlot',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","poincare-plot"],\r
}\r
\r
export default function PoincarePlot({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"x":-9.965,"y":0.889},{"x":6.427,"y":-0.312},{"x":0.151,"y":0.007},{"x":15.271,"y":-2.018},{"x":-9.48,"y":0.115},{"x":9.841,"y":-0.113},{"x":-8.565,"y":0.543},{"x":10.228,"y":-0.66},{"x":-6.509,"y":0.181},{"x":-0.412,"y":-0.043},{"x":-14.051,"y":2.214},{"x":11.413,"y":-0.136},{"x":-10.426,"y":0.391},{"x":6.7,"y":-0.157},{"x":0.239,"y":0.012},{"x":14.846,"y":-2.005},{"x":-8.104,"y":0.486},{"x":11.057,"y":-0.889},{"x":-9.281,"y":0.62},{"x":9.189,"y":-0.108},{"x":-10.175,"y":0.43},{"x":6.962,"y":-0.421},{"x":-13.96,"y":0.156},{"x":10.074,"y":-0.132},{"x":-7.871,"y":0.562},{"x":11.775,"y":-0.224},{"x":-8.526,"y":0.364},{"x":10.752,"y":-0.632},{"x":-10.937,"y":1.384},{"x":8.548,"y":-0.235},{"x":-10.663,"y":1.071},{"x":10.062,"y":-0.908},{"x":-6.317,"y":0.165},{"x":-0.743,"y":-0.013},{"x":-13.73,"y":1.538},{"x":11.03,"y":-1.53},{"x":-7.292,"y":0.438},{"x":13.254,"y":-0.075},{"x":-5.83,"y":0.163},{"x":-1.259,"y":-0.04}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
\r
    const x = d3.scaleLinear().domain(d3.extent(data, d => d.x)).range([0, IW])\r
    const y = d3.scaleLinear().domain(d3.extent(data, d => d.y)).range([IH, 0])\r
\r
    // Grid\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(-IW).tickPadding(0))\r
      .call(g => g.select('.domain').remove).call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.4)).call(g => g.selectAll('text').remove()).lower()\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisBottom(x).ticks(5).tickSize(-IH).tickPadding(0))\r
      .call(g => g.select('.domain').remove).call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.4)).call(g => g.selectAll('text').remove()).lower()\r
\r
    // Identity line\r
    const minV = d3.min(data, d => Math.min(d.x, d.y))\r
    const maxV = d3.max(data, d => Math.max(d.x, d.y))\r
    svg.append('line').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('x1', x(minV)).attr('x2', x(maxV)).attr('y1', y(minV)).attr('y2', y(maxV))\r
      .attr('stroke', 'var(--text-secondary)').attr('stroke-width', 1).attr('stroke-dasharray', '4,4')\r
\r
    // Points\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .selectAll('circle').data(data).join('circle')\r
      .attr('cx', d => x(d.x)).attr('cy', d => y(d.y)).attr('r', 3)\r
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
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top + IH + 28})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text('x[n]')\r
    svg.append('text').attr('transform', \`translate(12,\${M.top + IH/2}) rotate(-90)\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text('x[n+1]')\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top - 10})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '14px').attr('font-weight', 'bold').text('Poincaré Plot')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};