var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'feature-importance',\r
  title: 'Feature Importance',\r
  desc: 'Feature Importance — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'FeatureImportance',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","feature-importance"],\r
}\r
\r
export default function FeatureImportance({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"feature":"Age","importance":0.35},{"feature":"Income","importance":0.28},{"feature":"CreditScore","importance":0.22},{"feature":"Employment","importance":0.15},{"feature":"DebtRatio","importance":0.12},{"feature":"MaritalStatus","importance":0.08},{"feature":"LoanAmount","importance":0.06},{"feature":"Region","importance":0.04}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
    const sorted = [...data].sort((a, b) => b.importance - a.importance)\r
    const maxVal = d3.max(sorted, d => d.importance) || 1\r
\r
    const y = d3.scaleBand().domain(sorted.map(d => d.feature)).range([0, IH]).padding(0.3)\r
    const x = d3.scaleLinear().domain([0, maxVal * 1.1]).range([0, IW])\r
\r
    // Grid\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisTop(x).ticks(5).tickSize(-IH).tickPadding(0))\r
      .call(g => g.select('.domain').remove()).call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.4)).call(g => g.selectAll('text').remove()).lower()\r
\r
    const barH = y.bandwidth()\r
    sorted.forEach((d, i) => {\r
      const barW = x(d.importance)\r
      svg.append('rect').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
        .attr('x', 0).attr('y', y(d.feature)).attr('width', barW).attr('height', barH)\r
        .attr('fill', colors[i % colors.length]).attr('opacity', 0.85).attr('rx', 2)\r
\r
      svg.append('text').attr('transform', \`translate(\${M.left + barW + 4},\${M.top + y(d.feature) + barH / 2 + 4})\`)\r
        .attr('fill', 'var(--text-secondary)').attr('font-size', '10px').text(d.importance.toFixed(2))\r
    })\r
\r
    // Axes\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-primary)').attr('font-size', '11px'))\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top + IH})\`)\r
      .call(d3.axisBottom(x).ticks(5).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top + IH + 28})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text('Importance')\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top - 10})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '14px').attr('font-weight', 'bold').text('Feature Importance')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};