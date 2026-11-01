var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'salary-distribution',\r
  title: 'Salary Distribution',\r
  desc: 'Salary Distribution — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'SalaryDistribution',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","salary-distribution"],\r
}\r
\r
export default function SalaryDistribution({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"level":"L1","salary":45000,"count":120,"min":35000,"max":55000},{"level":"L2","salary":65000,"count":95,"min":55000,"max":75000},{"level":"L3","salary":85000,"count":60,"min":70000,"max":100000},{"level":"L4","salary":110000,"count":35,"min":90000,"max":130000},{"level":"L5","salary":145000,"count":15,"min":120000,"max":170000}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
    const y = d3.scaleBand().domain(data.map(d => d.level)).range([0, IH]).padding(0.3)\r
    const x = d3.scaleLinear().domain([30000, 180000]).range([0, IW])\r
    const barH = y.bandwidth()\r
\r
    // Grid\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisTop(x).ticks(6).tickSize(-IH).tickPadding(0))\r
      .call(g => g.select('.domain').remove()).call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.4)).call(g => g.selectAll('text').remove()).lower()\r
\r
    const formatK = d => '$' + (d / 1000) + 'K'\r
\r
    data.forEach((d, i) => {\r
      const cy = y(d.level) + barH / 2\r
\r
      // Range bar\r
      svg.append('line').attr('x1', M.left + x(d.min)).attr('x2', M.left + x(d.max))\r
        .attr('y1', cy).attr('y2', cy)\r
        .attr('stroke', colors[i % colors.length]).attr('stroke-width', 8).attr('opacity', 0.4).attr('stroke-linecap', 'round')\r
\r
      // Median dot\r
      svg.append('circle').attr('cx', M.left + x(d.salary)).attr('cy', cy).attr('r', 6)\r
        .attr('fill', colors[i % colors.length]).attr('stroke', '#fff').attr('stroke-width', 2)\r
\r
      // Count label\r
      svg.append('text').attr('x', M.left + x(d.salary)).attr('y', cy - 12)\r
        .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '10px').text('n=' + d.count)\r
    })\r
\r
    // Axes\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top + IH})\`)\r
      .call(d3.axisBottom(x).ticks(6).tickSize(0).tickPadding(8).tickFormat(formatK))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-primary)').attr('font-size', '11px'))\r
\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top + IH + 28})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text('Salary')\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top - 10})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '14px').attr('font-weight', 'bold').text('Salary Band Distribution')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};