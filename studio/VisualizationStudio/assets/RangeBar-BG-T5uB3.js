var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'range-bar',\r
  title: 'Range Bar',\r
  desc: 'Range Bar — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'RangeBar',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["bars","range-bar"],\r
}\r
\r
export default function RangeBar({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"date":"Jan 1","open":100,"high":108,"low":96,"close":105,"range":12},{"date":"Jan 2","open":105,"high":112,"low":103,"close":110,"range":9},{"date":"Jan 3","open":110,"high":115,"low":108,"close":113,"range":7},{"date":"Jan 4","open":113,"high":118,"low":106,"close":108,"range":12},{"date":"Jan 5","open":108,"high":112,"low":102,"close":104,"range":10},{"date":"Jan 6","open":104,"high":110,"low":100,"close":108,"range":10},{"date":"Jan 7","open":108,"high":116,"low":107,"close":114,"range":9},{"date":"Jan 8","open":114,"high":120,"low":112,"close":118,"range":8}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0)\r
      ? customData\r
      : DEFAULT_DATA\r
\r
    const x = d3.scaleBand()\r
      .domain(data.map(d => d.date))\r
      .range([0, IW])\r
      .padding(0.4)\r
\r
    const minLow = d3.min(data, d => d.low) || 90\r
    const maxHigh = d3.max(data, d => d.high) || 130\r
    const y = d3.scaleLinear()\r
      .domain([minLow - 2, maxHigh + 2])\r
      .range([IH, 0])\r
\r
    const barWidth = x.bandwidth() * 0.8\r
\r
    // Draw range bars\r
    data.forEach(d => {\r
      const cx = x(d.date) + x.bandwidth() / 2\r
      const isUp = d.close >= d.open\r
\r
      // High-Low range\r
      svg.append('line')\r
        .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
        .attr('x1', cx).attr('x2', cx)\r
        .attr('y1', y(d.high)).attr('y2', y(d.low))\r
        .attr('stroke', 'var(--text-primary)').attr('stroke-width', 2)\r
\r
      // Open tick (left)\r
      svg.append('line')\r
        .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
        .attr('x1', cx - barWidth / 3).attr('x2', cx)\r
        .attr('y1', y(d.open)).attr('y2', y(d.open))\r
        .attr('stroke', isUp ? colors[2] : colors[1]).attr('stroke-width', 2)\r
\r
      // Close tick (right)\r
      svg.append('line')\r
        .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
        .attr('x1', cx).attr('x2', cx + barWidth / 3)\r
        .attr('y1', y(d.close)).attr('y2', y(d.close))\r
        .attr('stroke', isUp ? colors[2] : colors[1]).attr('stroke-width', 2)\r
\r
      // Range fill\r
      svg.append('rect')\r
        .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
        .attr('x', cx - barWidth / 2)\r
        .attr('y', y(d.high))\r
        .attr('width', barWidth)\r
        .attr('height', y(d.low) - y(d.high))\r
        .attr('fill', isUp ? colors[2] : colors[1])\r
        .attr('opacity', 0.3)\r
    })\r
\r
    // Grid\r
    svg.append('g')\r
      .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(-IW).tickPadding(0))\r
      .call((g) => g.select('.domain').remove())\r
      .call((g) => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.5))\r
      .call((g) => g.selectAll('text').remove())\r
      .lower()\r
\r
    // X axis\r
    svg.append('g')\r
      .attr('transform', \`translate(\${M.left},\${M.top + IH})\`)\r
      .call(d3.axisBottom(x).tickSize(0).tickPadding(8))\r
      .call((g) => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call((g) => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '10px'))\r
\r
    // Y axis\r
    svg.append('g')\r
      .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(0).tickPadding(8))\r
      .call((g) => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call((g) => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    // Title\r
    svg.append('text')\r
      .attr('transform', \`translate(\${M.left + IW / 2},\${M.top - 10})\`)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text-primary)')\r
      .attr('font-size', '14px')\r
      .attr('font-weight', 'bold')\r
      .text('Range Bar Chart - Price Range Visualization')\r
\r
    // Legend\r
    const lg = svg.append('g')\r
      .attr('transform', \`translate(\${M.left + IW - 100},\${M.top + IH + 15})\`)\r
    const legends = [\r
      { color: colors[2], label: 'Up' },\r
      { color: colors[1], label: 'Down' },\r
    ]\r
    legends.forEach((l, i) => {\r
      const yOff = i * 16\r
      lg.append('rect').attr('width', 12).attr('height', 12).attr('fill', l.color).attr('opacity', 0.5).attr('rx', 2)\r
      lg.append('text').attr('x', 16).attr('y', yOff + 10).text(l.label).attr('fill', 'var(--text-secondary)').attr('font-size', '10px')\r
    })\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};