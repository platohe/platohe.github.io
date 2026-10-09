var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'funnel-plot',\r
  title: 'Funnel Plot',\r
  desc: 'Funnel Plot — a fun chart visualization',\r
  category: 'Fun',\r
  component: 'FunnelPlot',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["fun","funnel-plot"],\r
}\r
\r
export default function FunnelPlot({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"study":"Study A","effect":0.75,"ciLow":0.6,"ciHigh":0.95,"weight":25},{"study":"Study B","effect":0.82,"ciLow":0.65,"ciHigh":1.02,"weight":20},{"study":"Study C","effect":0.68,"ciLow":0.55,"ciHigh":0.84,"weight":18},{"study":"Study D","effect":0.9,"ciLow":0.78,"ciHigh":1.04,"weight":15},{"study":"Study E","effect":0.78,"ciLow":0.68,"ciHigh":0.89,"weight":22},{"study":"Study F","effect":0.85,"ciLow":0.72,"ciHigh":1,"weight":17}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0)\r
      ? customData\r
      : DEFAULT_DATA\r
\r
    const y = d3.scaleBand()\r
      .domain(data.map(d => d.study))\r
      .range([0, IH])\r
      .padding(0.3)\r
\r
    const x = d3.scaleLinear()\r
      .domain([0.5, 1.2])\r
      .range([0, IW])\r
\r
    const pooledEffect = d3.mean(data, d => d.effect) || 0.8\r
    const pooledCI = 0.05\r
\r
    // Grid\r
    svg.append('g')\r
      .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).tickSize(0).tickPadding(10))\r
      .call((g) => g.select('.domain').remove())\r
      .call((g) => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    svg.append('g')\r
      .attr('transform', \`translate(\${M.left},\${M.top + IH})\`)\r
      .call(d3.axisBottom(x).ticks(5).tickSize(0).tickPadding(8))\r
      .call((g) => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call((g) => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    // Pooled effect line\r
    svg.append('line')\r
      .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('x1', x(pooledEffect)).attr('x2', x(pooledEffect))\r
      .attr('y1', 0).attr('y2', IH)\r
      .attr('stroke', colors[0]).attr('stroke-width', 2).attr('stroke-dasharray', '5,3')\r
\r
    // No effect line\r
    svg.append('line')\r
      .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('x1', x(1)).attr('x2', x(1))\r
      .attr('y1', 0).attr('y2', IH)\r
      .attr('stroke', 'var(--text-secondary)').attr('stroke-width', 1).attr('stroke-dasharray', '2,2')\r
\r
    // Draw funnel\r
    data.forEach((d, i) => {\r
      const cy = y(d.study) + y.bandwidth() / 2\r
      const effectX = x(d.effect)\r
      const ciWidth = y.bandwidth() * (d.weight / d3.max(data, dd => dd.weight))\r
\r
      // CI line\r
      svg.append('line')\r
        .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
        .attr('x1', x(d.ciLow)).attr('x2', x(d.ciHigh))\r
        .attr('y1', cy).attr('y2', cy)\r
        .attr('stroke', colors[i % colors.length])\r
        .attr('stroke-width', 1.5)\r
        .attr('stroke-opacity', 0.7)\r
\r
      // Endpoint dots\r
      svg.append('circle')\r
        .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
        .attr('cx', x(d.ciLow)).attr('cy', cy)\r
        .attr('r', ciWidth / 4).attr('fill', colors[i % colors.length]).attr('opacity', 0.5)\r
      svg.append('circle')\r
        .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
        .attr('cx', x(d.ciHigh)).attr('cy', cy)\r
        .attr('r', ciWidth / 4).attr('fill', colors[i % colors.length]).attr('opacity', 0.5)\r
\r
      // Effect diamond\r
      const diamondSize = ciWidth / 2.5\r
      svg.append('polygon')\r
        .attr('transform', \`translate(\${M.left + effectX},\${M.top + cy})\`)\r
        .attr('points', \`0,-\${diamondSize} \${diamondSize},0 0,\${diamondSize} -\${diamondSize},0\`)\r
        .attr('fill', colors[i % colors.length]).attr('opacity', 0.8)\r
    })\r
\r
    // Title\r
    svg.append('text')\r
      .attr('transform', \`translate(\${M.left + IW / 2},\${M.top - 10})\`)\r
      .text('Funnel Plot - Meta-analysis Heterogeneity')\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text-primary)')\r
      .attr('font-size', '14px')\r
      .attr('font-weight', 'bold')\r
\r
    // Legend\r
    const lg = svg.append('g')\r
      .attr('transform', \`translate(\${M.left + IW - 130},\${M.top + IH + 15})\`)\r
    lg.append('line').attr('x1', 0).attr('x2', 20).attr('y1', 5).attr('y2', 5)\r
      .attr('stroke', colors[0]).attr('stroke-width', 2).attr('stroke-dasharray', '5,3')\r
    lg.append('text').attr('x', 24).attr('y', 9).text('Pooled').attr('fill', 'var(--text-secondary)').attr('font-size', '10px')\r
    lg.append('line').attr('x1', 70).attr('x2', 90).attr('y1', 5).attr('y2', 5)\r
      .attr('stroke', 'var(--text-secondary)').attr('stroke-width', 1).attr('stroke-dasharray', '2,2')\r
    lg.append('text').attr('x', 94).attr('y', 9).text('No Effect').attr('fill', 'var(--text-secondary)').attr('font-size', '10px')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};