var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'vif_bar-chart',\r
  title: 'V I F_ Bar Chart',\r
  desc: 'V I F_ Bar Chart — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'VIF_BarChart',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis","d3-shape"],\r
  tags: ["bars","v-i-f_-bar-chart"],\r
}\r
\r
export default function VIF_BarChart({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"feature":"Age","vif":1.2},{"feature":"Income","vif":3.5},{"feature":"CreditScore","vif":2.1},{"feature":"EmploymentYrs","vif":4.8},{"feature":"DebtRatio","vif":8.2},{"feature":"LoanAmount","vif":6.5},{"feature":"MaritalStatus","vif":1.5},{"feature":"Region","vif":2.8}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
    const sorted = [...data].sort((a, b) => b.vif - a.vif)\r
    const maxVIF = d3.max(sorted, d => d.vif) || 10\r
    const threshold = 10\r
\r
    const y = d3.scaleBand().domain(sorted.map(d => d.feature)).range([0, IH]).padding(0.3)\r
    const x = d3.scaleLinear().domain([0, Math.max(maxVIF * 1.1, threshold + 1)]).range([0, IW])\r
\r
    // Grid\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisTop(x).ticks(6).tickSize(-IH).tickPadding(0))\r
      .call(g => g.select('.domain').remove()).call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.4)).call(g => g.selectAll('text').remove()).lower()\r
\r
    // Threshold line at VIF=10\r
    svg.append('line').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('x1', x(threshold)).attr('x2', x(threshold)).attr('y1', 0).attr('y2', IH)\r
      .attr('stroke', colors[3]).attr('stroke-width', 1.5).attr('stroke-dasharray', '6,4')\r
    svg.append('text').attr('transform', \`translate(\${M.left + x(threshold) + 4},\${M.top + 8})\`)\r
      .attr('fill', colors[3]).attr('font-size', '10px').text('VIF=10 threshold')\r
\r
    const barH = y.bandwidth()\r
    sorted.forEach((d, i) => {\r
      const barW = x(d.vif)\r
      const barColor = d.vif > threshold ? colors[3] : d.vif > 5 ? colors[1] : colors[2]\r
      svg.append('rect').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
        .attr('x', 0).attr('y', y(d.feature)).attr('width', barW).attr('height', barH)\r
        .attr('fill', barColor).attr('opacity', 0.8).attr('rx', 2)\r
\r
      svg.append('text').attr('transform', \`translate(\${M.left + barW + 4},\${M.top + y(d.feature) + barH / 2 + 4})\`)\r
        .attr('fill', 'var(--text-secondary)').attr('font-size', '10px').text(d.vif.toFixed(1))\r
    })\r
\r
    // Axes\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-primary)').attr('font-size', '11px'))\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top + IH})\`)\r
      .call(d3.axisBottom(x).ticks(6).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top + IH + 28})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text('VIF (Variance Inflation Factor)')\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top - 10})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '14px').attr('font-weight', 'bold').text('VIF - Multicollinearity Diagnosis')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};