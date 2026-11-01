var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'tenure-distribution',\r
  title: 'Tenure Distribution',\r
  desc: 'Tenure Distribution — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'TenureDistribution',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","tenure-distribution"],\r
}\r
\r
export default function TenureDistribution({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"range":"0-1yr","count":250},{"range":"1-2yr","count":180},{"range":"2-3yr","count":120},{"range":"3-5yr","count":95},{"range":"5-10yr","count":60},{"range":"10+yr","count":25}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
    const total = d3.sum(data, d => d.count)\r
    const x = d3.scaleBand().domain(data.map(d => d.range)).range([0, IW]).padding(0.3)\r
    const y = d3.scaleLinear().domain([0, d3.max(data, d => d.count) * 1.1]).range([IH, 0])\r
\r
    // Grid\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(-IW).tickPadding(0))\r
      .call(g => g.select('.domain').remove()).call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.4)).call(g => g.selectAll('text').remove()).lower()\r
\r
    data.forEach((d, i) => {\r
      const barH = IH - y(d.count)\r
      svg.append('rect').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
        .attr('x', x(d.range)).attr('y', y(d.count)).attr('width', x.bandwidth())\r
        .attr('height', barH).attr('fill', colors[i % colors.length]).attr('opacity', 0.8).attr('rx', 2)\r
\r
      const pct = (d.count / total * 100).toFixed(1)\r
      svg.append('text').attr('transform', \`translate(\${M.left + x(d.range) + x.bandwidth()/2},\${M.top + y(d.count) - 8})\`)\r
        .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '10px').text(pct + '%')\r
    })\r
\r
    // Axes\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top + IH})\`)\r
      .call(d3.axisBottom(x).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '10px'))\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top + IH + 28})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text('Tenure Range')\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top - 10})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '14px').attr('font-weight', 'bold').text('Tenure Distribution (n=' + total + ')')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};