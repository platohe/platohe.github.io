var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'class-imbalance',\r
  title: 'Class Imbalance',\r
  desc: 'Class Imbalance — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'ClassImbalance',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","class-imbalance"],\r
}\r
\r
export default function ClassImbalance({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"class":"Normal","count":8500},{"class":"Mild","count":1200},{"class":"Moderate","count":200},{"class":"Severe","count":50},{"class":"Critical","count":15}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
    const sorted = [...data].sort((a, b) => b.count - a.count)\r
    const total = d3.sum(sorted, d => d.count)\r
    const maxCount = d3.max(sorted, d => d.count) || 1\r
\r
    const y = d3.scaleBand().domain(sorted.map(d => d.class)).range([0, IH]).padding(0.3)\r
    const x = d3.scaleLinear().domain([0, maxCount * 1.1]).range([0, IW])\r
    const barH = y.bandwidth()\r
\r
    // Grid\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisTop(x).ticks(5).tickSize(-IH).tickPadding(0))\r
      .call(g => g.select('.domain').remove()).call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.4)).call(g => g.selectAll('text').remove()).lower()\r
\r
    sorted.forEach((d, i) => {\r
      const barW = x(d.count)\r
      const pct = (d.count / total * 100).toFixed(1)\r
      svg.append('rect').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
        .attr('x', 0).attr('y', y(d.class)).attr('width', barW).attr('height', barH)\r
        .attr('fill', colors[i % colors.length]).attr('opacity', 0.85).attr('rx', 2)\r
\r
      svg.append('text').attr('transform', \`translate(\${M.left + barW + 6},\${M.top + y(d.class) + barH / 2 + 4})\`)\r
        .attr('fill', 'var(--text-secondary)').attr('font-size', '10px').text(d.count.toLocaleString() + ' (' + pct + '%)')\r
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
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text('Count')\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top - 10})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '14px').attr('font-weight', 'bold').text('Class Imbalance (' + total.toLocaleString() + ' total)')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};