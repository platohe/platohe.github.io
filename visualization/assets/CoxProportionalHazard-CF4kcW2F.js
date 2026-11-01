var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'cox-proportional-hazard',\r
  title: 'Cox Proportional Hazard',\r
  desc: 'Cox Proportional Hazard — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'CoxProportionalHazard',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","cox-proportional-hazard"],\r
}\r
\r
export default function CoxProportionalHazard({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"variable":"Age","coef":0.025,"ciLow":0.018,"ciHigh":0.033,"pValue":0.001},{"variable":"Gender","coef":-0.12,"ciLow":-0.25,"ciHigh":0.01,"pValue":0.07},{"variable":"Treatment","coef":-0.45,"ciLow":-0.62,"ciHigh":-0.28,"pValue":0},{"variable":"BMI","coef":0.008,"ciLow":-0.005,"ciHigh":0.021,"pValue":0.23},{"variable":"Smoking","coef":0.35,"ciLow":0.15,"ciHigh":0.55,"pValue":0.001},{"variable":"Exercise","coef":-0.18,"ciLow":-0.3,"ciHigh":-0.06,"pValue":0.003}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0 && customData[0]?.ciLow !== undefined) ? customData : DEFAULT_DATA\r
    const sorted = [...data].sort((a, b) => Math.abs(b.coef) - Math.abs(a.coef))\r
    const n = sorted.length\r
\r
    const y = d3.scaleBand().domain(sorted.map(d => d.variable)).range([0, IH]).padding(0.4)\r
    const x = d3.scaleLinear().domain([d3.min(sorted, d => d.ciLow) - 0.05, d3.max(sorted, d => d.ciHigh) + 0.05]).range([0, IW])\r
    const barH = y.bandwidth()\r
\r
    const zeroX = x(0)\r
\r
    // Zero line\r
    svg.append('line').attr('x1', zeroX).attr('x2', zeroX).attr('y1', M.top).attr('y2', M.top + IH)\r
      .attr('stroke', 'var(--text-secondary)').attr('stroke-width', 1.5)\r
\r
    // CI intervals\r
    sorted.forEach((d, i) => {\r
      const cy = M.top + y(d.variable) + barH / 2\r
\r
      // Horizontal line (CI)\r
      svg.append('line').attr('x1', x(d.ciLow)).attr('x2', x(d.ciHigh))\r
        .attr('y1', cy).attr('y2', cy)\r
        .attr('stroke', colors[i % colors.length]).attr('stroke-width', 2).attr('opacity', 0.8);\r
\r
      // End caps\r
      [d.ciLow, d.ciHigh].forEach(v => {\r
        svg.append('line').attr('x1', x(v)).attr('x2', x(v))\r
          .attr('y1', cy - 6).attr('y2', cy + 6)\r
          .attr('stroke', colors[i % colors.length]).attr('stroke-width', 1.5)\r
      })\r
\r
      // Point estimate\r
      svg.append('circle').attr('cx', x(d.coef)).attr('cy', cy).attr('r', 5)\r
        .attr('fill', colors[i % colors.length]).attr('stroke', '#fff').attr('stroke-width', 1.5)\r
\r
      // Significance stars\r
      if (d.pValue < 0.05) {\r
        const stars = d.pValue < 0.001 ? '***' : d.pValue < 0.01 ? '**' : '*'\r
        svg.append('text').attr('x', x(d.ciHigh) + 6).attr('y', cy + 4)\r
          .attr('fill', colors[i % colors.length]).attr('font-size', '10px').text(stars)\r
      }\r
    })\r
\r
    // Y labels\r
    sorted.forEach(d => {\r
      svg.append('text').attr('x', M.left - 6).attr('y', M.top + y(d.variable) + barH / 2 + 4)\r
        .attr('text-anchor', 'end').attr('fill', 'var(--text-primary)').attr('font-size', '11px').text(d.variable)\r
    })\r
\r
    // X axis\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top + IH})\`)\r
      .call(d3.axisBottom(x).ticks(6).tickSize(0).tickPadding(8).tickFormat(d => 'HR=' + Math.exp(d).toFixed(2)))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '10px'))\r
\r
    // Hazard ratio annotation\r
    svg.append('text').attr('x', M.left + IW / 2).attr('y', M.top + IH + 36)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '10px').text('Hazard Ratio (log scale)')\r
\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top - 10})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '14px').attr('font-weight', 'bold').text('Cox Proportional Hazards')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};