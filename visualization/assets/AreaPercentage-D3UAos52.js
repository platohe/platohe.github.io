var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH } from './utils'\r
\r
export const meta = {\r
  id: 'area-percentage',\r
  title: 'Area Percentage',\r
  desc: 'Area Percentage — a areas chart visualization',\r
  category: 'Areas',\r
  component: 'AreaPercentage',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["areas","area-percentage"],\r
}\r
\r
export default function AreaPercentage({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"date":"2020","mobile":38,"desktop":42,"tablet":20},{"date":"2021","mobile":44,"desktop":38,"tablet":18},{"date":"2022","mobile":51,"desktop":34,"tablet":15},{"date":"2023","mobile":57,"desktop":30,"tablet":13},{"date":"2024","mobile":64,"desktop":26,"tablet":10},{"date":"2025","mobile":70,"desktop":22,"tablet":8}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
\r
    // Derive time key and stack keys from data shape\r
    const timeKey = data[0] && data[0].date !== undefined ? 'date'\r
      : data[0] && data[0].time !== undefined ? 'time'\r
      : data[0] && data[0].year !== undefined ? 'year'\r
      : null\r
    const keys = Object.keys(data[0]).filter(k => k !== timeKey && typeof data[0][k] === 'number')\r
    const normalized = data.map(row => {\r
      const total = keys.reduce((s, k) => s + (row[k] || 0), 0)\r
      const out = timeKey ? { [timeKey]: row[timeKey] } : {}\r
      keys.forEach(k => out[k] = (row[k] || 0) / total * 100)\r
      return out\r
    })\r
\r
    const color = d3.scaleOrdinal(['#6366f1', '#38bdf8', '#10b981', '#f59e0b', '#ec4899'])\r
      .domain(keys)\r
\r
    const x = d3.scalePoint().domain(normalized.map(d => d[timeKey])).range([0, IW]).padding(0.1)\r
    const y = d3.scaleLinear().domain([0, 100]).range([IH, 0])\r
\r
    const stack = d3.stack().keys(keys).offset(d3.stackOffsetNone)(normalized)\r
\r
    const area = d3.area()\r
      .x(d => x(d.data[timeKey]))\r
      .y0(d => y(d[0]))\r
      .y1(d => y(d[1]))\r
      .curve(d3.curveCatmullRom)\r
\r
    const g = svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
\r
    g.append('g').call(d3.axisLeft(y).ticks(4).tickFormat(d => d + '%').tickSize(-IW).tickPadding(6))\r
      .call(gr => gr.select('.domain').remove())\r
      .call(gr => gr.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-dasharray', '2,2').attr('stroke-opacity', 0.4))\r
      .call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '7px'))\r
\r
    g.append('g').attr('transform', \`translate(0,\${IH})\`)\r
      .call(d3.axisBottom(x).tickSize(0).tickPadding(8))\r
      .call(gr => gr.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '7.5px'))\r
\r
    stack.forEach((layer) => {\r
      g.append('path').datum(layer)\r
        .attr('d', area)\r
        .attr('fill', color(layer.key))\r
        .attr('fill-opacity', 0.85)\r
\r
      // Layer label at midpoint\r
      const midRow = layer[Math.floor(layer.length / 2)]\r
      if (midRow) {\r
        const midY = y((midRow[0] + midRow[1]) / 2)\r
        g.append('text')\r
          .attr('x', x(midRow.data[timeKey])).attr('y', midY + 3)\r
          .attr('text-anchor', 'middle')\r
          .attr('fill', '#ffffff').attr('fill-opacity', 0.9)\r
          .attr('font-size', '7px').attr('font-weight', '600')\r
          .text(layer.key)\r
      }\r
    })\r
\r
    svg.append('text').attr('x', 14).attr('y', 16)\r
      .attr('fill', 'var(--text-primary)').attr('font-size', '8.5px').attr('font-weight', '600')\r
      .text('100% Stacked Area Chart (Composition Over Time)')\r
  }, [customData])\r
\r
  return (\r
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\r
      <svg ref={ref} viewBox={\`0 0 \${W} \${H}\`} style={{ width: '100%', height: '100%', maxWidth: '500px' }} />\r
    </div>\r
  )\r
}\r
`;export{e as default};