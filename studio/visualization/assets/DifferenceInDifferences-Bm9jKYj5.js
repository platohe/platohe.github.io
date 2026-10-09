var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'difference-in-differences',\r
  title: 'Difference In Differences',\r
  desc: 'Difference In Differences — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'DifferenceInDifferences',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","difference-in-differences"],\r
}\r
\r
export default function DifferenceInDifferences({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = {"groups":["Control","Treatment"],"periods":["Pre","Post"],"values":[{"group":"Control","period":"Pre","outcome":50},{"group":"Control","period":"Post","outcome":55},{"group":"Treatment","period":"Pre","outcome":48},{"group":"Treatment","period":"Post","outcome":68}],"treatmentEffect":15}\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const d = (customData && Array.isArray(customData.groups) && Array.isArray(customData.periods) && Array.isArray(customData.values)) ? customData : DEFAULT_DATA\r
    const { groups, periods, values } = d\r
    const n = values.length\r
\r
    const x = d3.scaleBand().domain(periods).range([0, IW]).padding(0.3)\r
    const y = d3.scaleLinear().domain([d3.min(values, v => v.outcome) * 0.9, d3.max(values, v => v.outcome) * 1.1]).range([IH, 0])\r
    const groupX = d3.scaleBand().domain(groups).range([0, x.bandwidth()]).padding(0.1)\r
\r
    // Grid\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(-IW).tickPadding(0))\r
      .call(g => g.select('.domain').remove).call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.4)).call(g => g.selectAll('text').remove()).lower()\r
\r
    // Draw bars and connecting lines\r
    groups.forEach((g, gi) => {\r
      const gData = values.filter(v => v.group === g)\r
      const color = g === 'Treatment' ? colors[0] : colors[1]\r
\r
      gData.forEach((v, vi) => {\r
        const bx = M.left + x(v.period) + groupX(g)\r
        const barH = IH - y(v.outcome)\r
\r
        svg.append('rect').attr('x', bx).attr('y', M.top + y(v.outcome))\r
          .attr('width', groupX.bandwidth()).attr('height', barH)\r
          .attr('fill', color).attr('opacity', 0.8).attr('rx', 2)\r
\r
        svg.append('text').attr('x', bx + groupX.bandwidth() / 2).attr('y', M.top + y(v.outcome) - 6)\r
          .attr('text-anchor', 'middle').attr('fill', color).attr('font-size', '9px').attr('font-weight', 'bold').text(v.outcome)\r
      })\r
\r
      // Connecting line\r
      const preX = M.left + x('Pre') + x.bandwidth() / 2\r
      const postX = M.left + x('Post') + x.bandwidth() / 2\r
      const preY = M.top + y(gData[0].outcome)\r
      const postY = M.top + y(gData[1].outcome)\r
\r
      svg.append('line').attr('x1', preX).attr('x2', postX).attr('y1', preY).attr('y2', postY)\r
        .attr('stroke', color).attr('stroke-width', 2).attr('stroke-dasharray', g === 'Control' ? '4,4' : 'none').attr('opacity', 0.7)\r
\r
      // DiD annotation\r
      if (g === 'Treatment') {\r
        const diff = gData[1].outcome - gData[0].outcome - (values.find(v => v.group === 'Control' && v.period === 'Post').outcome - values.find(v => v.group === 'Control' && v.period === 'Pre').outcome)\r
        svg.append('text').attr('x', postX + 8).attr('y', (preY + postY) / 2 + 4)\r
          .attr('fill', colors[2]).attr('font-size', '10px').attr('font-weight', 'bold').text('DiD: +' + diff.toFixed(1))\r
      }\r
    })\r
\r
    // Axes\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top + IH})\`)\r
      .call(d3.axisBottom(x).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-primary)').attr('font-size', '12px'))\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    // Legend\r
    const lg = svg.append('g').attr('transform', \`translate(\${M.left + IW - 80},\${M.top + 8})\`)\r
    lg.append('rect').attr('width', 12).attr('height', 12).attr('fill', colors[0]).attr('opacity', 0.8).attr('rx', 2)\r
    lg.append('text').attr('x', 16).attr('y', 10).text('Treatment').attr('fill', 'var(--text-secondary)').attr('font-size', '10px')\r
    lg.append('rect').attr('x', 0).attr('y', 18).attr('width', 12).attr('height', 12).attr('fill', colors[1]).attr('opacity', 0.8).attr('rx', 2)\r
    lg.append('text').attr('x', 16).attr('y', 28).text('Control').attr('fill', 'var(--text-secondary)').attr('font-size', '10px')\r
\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top + IH + 28})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text('Time Period')\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top - 10})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '14px').attr('font-weight', 'bold').text('Difference-in-Differences')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};