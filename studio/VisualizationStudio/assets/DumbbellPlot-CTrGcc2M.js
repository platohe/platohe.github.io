var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'dumbbell-plot',\r
  title: 'Dumbbell Plot',\r
  desc: 'Dumbbell Plot — a dots chart visualization',\r
  category: 'Dots',\r
  component: 'DumbbellPlot',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["dots","dumbbell-plot"],\r
}\r
\r
export default function DumbbellPlot({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"category":"Product A","before":65,"after":82},{"category":"Product B","before":45,"after":78},{"category":"Product C","before":88,"after":72},{"category":"Product D","before":55,"after":90},{"category":"Product E","before":70,"after":75},{"category":"Product F","before":40,"after":68}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
    const y = d3.scaleBand().domain(data.map(d => d.category)).range([0, IH]).padding(0.4)\r
    const x = d3.scaleLinear().domain([0, d3.max(data, d => Math.max(d.before, d.after)) * 1.1]).range([0, IW])\r
    const barH = y.bandwidth()\r
\r
    // Grid\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisTop(x).ticks(6).tickSize(-IH).tickPadding(0))\r
      .call(g => g.select('.domain').remove).call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.4)).call(g => g.selectAll('text').remove()).lower()\r
\r
    data.forEach((d, i) => {\r
      const cy = M.top + y(d.category) + barH / 2\r
      const x1 = x(d.before)\r
      const x2 = x(d.after)\r
      const color = d.after >= d.before ? colors[2] : colors[3]\r
\r
      // Connecting line\r
      svg.append('line').attr('x1', M.left + x1).attr('x2', M.left + x2).attr('y1', cy).attr('y2', cy)\r
        .attr('stroke', color).attr('stroke-width', 2).attr('opacity', 0.5)\r
\r
      // Before dot\r
      svg.append('circle').attr('cx', M.left + x1).attr('cy', cy).attr('r', 7)\r
        .attr('fill', colors[1]).attr('stroke', '#fff').attr('stroke-width', 1.5)\r
      svg.append('text').attr('x', M.left + x1).attr('y', cy - 12)\r
        .attr('text-anchor', 'middle').attr('fill', colors[1]).attr('font-size', '9px').text('Before:' + d.before)\r
\r
      // After dot\r
      svg.append('circle').attr('cx', M.left + x2).attr('cy', cy).attr('r', 7)\r
        .attr('fill', color).attr('stroke', '#fff').attr('stroke-width', 1.5)\r
      svg.append('text').attr('x', M.left + x2).attr('y', cy + 18)\r
        .attr('text-anchor', 'middle').attr('fill', color).attr('font-size', '9px').text('After:' + d.after)\r
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
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text('Value')\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top - 10})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '14px').attr('font-weight', 'bold').text('Dumbbell Plot (Before/After)')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};