var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'conversion-funnel',\r
  title: 'Conversion Funnel',\r
  desc: 'Conversion Funnel — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'ConversionFunnel',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","conversion-funnel"],\r
}\r
\r
export default function ConversionFunnel({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"stage":"Visit","count":10000,"color":"#6366f1"},{"stage":"Sign Up","count":4500,"color":"#f59e0b"},{"stage":"Activate","count":2800,"color":"#10b981"},{"stage":"Purchase","count":1200,"color":"#ef4444"},{"stage":"Retention","count":650,"color":"#8b5cf6"}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0 && (customData[0]?.count !== undefined || customData[0]?.value !== undefined))\r
      ? customData.map(d => ({ ...d, count: d.count ?? d.value, stage: d.stage ?? d.label ?? 'Stage' }))\r
      : DEFAULT_DATA\r
    const maxCount = d3.max(data, d => d.count) || 1\r
\r
    const n = data.length\r
    const barH = IH / n * 0.7\r
    const gap = IH / n\r
\r
    data.forEach((d, i) => {\r
      const barW = (d.count / maxCount) * IW * 0.85\r
      const y = M.top + i * gap + (gap - barH) / 2\r
\r
      // Main bar\r
      svg.append('rect').attr('x', M.left + (IW - barW) * 0.5).attr('y', y)\r
        .attr('width', barW).attr('height', barH)\r
        .attr('fill', d.color || colors[i % colors.length]).attr('opacity', 0.8).attr('rx', 4)\r
\r
      // Stage label\r
      svg.append('text').attr('x', M.left - 6).attr('y', y + barH / 2 + 4)\r
        .attr('text-anchor', 'end').attr('fill', 'var(--text-primary)').attr('font-size', '11px').text(d.stage)\r
\r
      // Count label\r
      const pct = (d.count / maxCount * 100).toFixed(0)\r
      svg.append('text').attr('x', M.left + (IW - barW) * 0.5 + barW + 8).attr('y', y + barH / 2 + 4)\r
        .attr('fill', 'var(--text-primary)').attr('font-size', '11px').attr('font-weight', 'bold').text(d.count.toLocaleString())\r
\r
      // Conversion rate between steps\r
      if (i < n - 1) {\r
        const rate = (data[i + 1].count / d.count * 100).toFixed(1)\r
        const arrowY = y + barH\r
        const arrowX = M.left + IW / 2\r
        svg.append('text').attr('x', arrowX).attr('y', arrowY + 14)\r
          .attr('text-anchor', 'middle').attr('fill', colors[5]).attr('font-size', '10px')\r
          .text('↓ ' + rate + '%')\r
      }\r
    })\r
\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top - 10})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '14px').attr('font-weight', 'bold').text('Conversion Funnel')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};