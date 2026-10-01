var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'cross-correlation',\r
  title: 'Cross Correlation',\r
  desc: 'Cross Correlation — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'CrossCorrelation',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","cross-correlation"],\r
}\r
\r
export default function CrossCorrelation({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"lag":-10,"correlation":0.104},{"lag":-9,"correlation":-0.086},{"lag":-8,"correlation":-0.294},{"lag":-7,"correlation":-0.465},{"lag":-6,"correlation":-0.543},{"lag":-5,"correlation":-0.486},{"lag":-4,"correlation":-0.279},{"lag":-3,"correlation":0.052},{"lag":-2,"correlation":0.442},{"lag":-1,"correlation":0.794},{"lag":0,"correlation":1},{"lag":1,"correlation":0.794},{"lag":2,"correlation":0.442},{"lag":3,"correlation":0.052},{"lag":4,"correlation":-0.279},{"lag":5,"correlation":-0.486},{"lag":6,"correlation":-0.543},{"lag":7,"correlation":-0.465},{"lag":8,"correlation":-0.294},{"lag":9,"correlation":-0.086},{"lag":10,"correlation":0.104}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
\r
    const x = d3.scaleLinear().domain(d3.extent(data, d => d.lag)).range([0, IW])\r
    const y = d3.scaleLinear().domain([-1, 1]).range([IH, 0])\r
\r
    // Grid\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(-IW).tickPadding(0))\r
      .call(g => g.select('.domain').remove()).call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.4)).call(g => g.selectAll('text').remove()).lower()\r
\r
    // Zero line\r
    svg.append('line').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('x1', 0).attr('x2', IW).attr('y1', y(0)).attr('y2', y(0))\r
      .attr('stroke', 'var(--text-secondary)').attr('stroke-width', 1)\r
\r
    // CI bands\r
    const ci95 = 1.96 / Math.sqrt(100)\r
    svg.append('rect').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('x', 0).attr('y', y(ci95)).attr('width', IW).attr('height', y(-ci95) - y(ci95))\r
      .attr('fill', colors[2]).attr('opacity', 0.1)\r
\r
    // Bars\r
    data.forEach(d => {\r
      const barW = IW / data.length * 0.6\r
      const barH = Math.abs(y(d.correlation) - y(0))\r
      svg.append('rect').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
        .attr('x', x(d.lag) - barW / 2).attr('y', d.correlation >= 0 ? y(d.correlation) : y(0))\r
        .attr('width', barW).attr('height', barH)\r
        .attr('fill', d.correlation >= 0 ? colors[0] : colors[1]).attr('opacity', 0.8).attr('rx', 1)\r
    })\r
\r
    // Line through centers\r
    const line = d3.line().x(d => x(d.lag)).y(d => y(d.correlation)).curve(d3.curveLinear)\r
    svg.append('path').datum(data).attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('d', line).attr('fill', 'none').attr('stroke', colors[0]).attr('stroke-width', 1.5).attr('opacity', 0.6)\r
\r
    // Axes\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top + IH})\`)\r
      .call(d3.axisBottom(x).ticks(7).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '10px').text(d => (d >= 0 ? '+' : '') + d))\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top + IH + 28})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text('Lag')\r
    svg.append('text').attr('transform', \`translate(12,\${M.top + IH/2}) rotate(-90)\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text('Correlation')\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top - 10})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '14px').attr('font-weight', 'bold').text('Cross-Correlation Function (CCF)')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};