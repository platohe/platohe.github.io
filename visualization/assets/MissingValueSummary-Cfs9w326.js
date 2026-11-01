var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'missing-value-summary',\r
  title: 'Missing Value Summary',\r
  desc: 'Missing Value Summary — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'MissingValueSummary',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","missing-value-summary"],\r
}\r
\r
export default function MissingValueSummary({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"column":"Age","total":1000,"missing":45,"pct":4.5,"mean":42.3,"std":12.1},{"column":"Income","total":1000,"missing":120,"pct":12,"mean":65000,"std":28000},{"column":"Score","total":1000,"missing":0,"pct":0,"mean":72.5,"std":15.3},{"column":"Tenure","total":1000,"missing":8,"pct":0.8,"mean":36,"std":18},{"column":"Feedback","total":1000,"missing":310,"pct":31,"mean":null,"std":null},{"column":"Rating","total":1000,"missing":55,"pct":5.5,"mean":3.8,"std":1.2}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
    const n = data.length\r
    const barH = IH / n * 0.6\r
    const gap = IH / n\r
\r
    const x = d3.scaleLinear().domain([0, 35]).range([0, IW * 0.6])\r
    const x2 = d3.scaleLinear().domain([0, 80]).range([IW * 0.6, IW])\r
\r
    data.forEach((d, i) => {\r
      const y = M.top + i * gap + (gap - barH) / 2\r
\r
      // Column name\r
      svg.append('text').attr('x', M.left).attr('y', y + barH / 2 + 4)\r
        .attr('fill', 'var(--text-primary)').attr('font-size', '11px').attr('font-weight', 'bold').text(d.column)\r
\r
      // Missing % bar\r
      const missW = x(d.pct)\r
      svg.append('rect').attr('x', M.left + 80).attr('y', y)\r
        .attr('width', missW).attr('height', barH)\r
        .attr('fill', d.pct > 10 ? colors[3] : d.pct > 5 ? colors[1] : colors[2]).attr('opacity', 0.8).attr('rx', 2)\r
\r
      svg.append('text').attr('x', M.left + 80 + missW + 4).attr('y', y + barH / 2 + 4)\r
        .attr('fill', 'var(--text-secondary)').attr('font-size', '10px').text(d.pct.toFixed(1) + '%')\r
\r
      // Stats\r
      if (d.mean !== null) {\r
        svg.append('text').attr('x', IW * 0.6 + 8).attr('y', y + barH / 2 + 4)\r
          .attr('fill', 'var(--text-secondary)').attr('font-size', '10px').text('mean=' + d.mean.toFixed(1) + ' std=' + (d.std || 0).toFixed(1))\r
      }\r
    })\r
\r
    // Headers\r
    svg.append('text').attr('x', M.left + 80).attr('y', M.top - 6)\r
      .attr('fill', 'var(--text-secondary)').attr('font-size', '10px').text('Missing %')\r
    svg.append('text').attr('x', IW * 0.6 + 8).attr('y', M.top - 6)\r
      .attr('fill', 'var(--text-secondary)').attr('font-size', '10px').text('Statistics')\r
\r
    // Legend\r
    const legendItems = [\r
      { color: colors[2], label: '<5%' },\r
      { color: colors[1], label: '5-10%' },\r
      { color: colors[3], label: '>10%' },\r
    ]\r
    legendItems.forEach((item, idx) => {\r
      svg.append('rect').attr('x', IW - 80 + idx * 28).attr('y', M.top - 14).attr('width', 10).attr('height', 10)\r
        .attr('fill', item.color).attr('rx', 2)\r
      svg.append('text').attr('x', IW - 66 + idx * 28).attr('y', M.top - 5).attr('fill', 'var(--text-secondary)').attr('font-size', '9px').text(item.label)\r
    })\r
\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top + IH + 18})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text('Data Profile Dashboard')\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top - 26})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '14px').attr('font-weight', 'bold').text('Missing Value Summary')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};