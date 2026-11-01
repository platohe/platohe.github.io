var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'heikin-ashi',\r
  title: 'Heikin Ashi',\r
  desc: 'Heikin Ashi — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'HeikinAshi',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","heikin-ashi"],\r
}\r
\r
export default function HeikinAshi({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"date":"Jan 1","open":100,"high":108,"low":95,"close":105},{"date":"Jan 2","open":105,"high":112,"low":102,"close":110},{"date":"Jan 3","open":110,"high":115,"low":108,"close":113},{"date":"Jan 4","open":113,"high":118,"low":108,"close":106},{"date":"Jan 5","open":106,"high":110,"low":100,"close":102},{"date":"Jan 6","open":102,"high":108,"low":98,"close":107},{"date":"Jan 7","open":107,"high":115,"low":105,"close":114},{"date":"Jan 8","open":114,"high":120,"low":112,"close":118},{"date":"Jan 9","open":118,"high":122,"low":115,"close":120},{"date":"Jan 10","open":120,"high":125,"low":118,"close":123}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0)\r
      ? customData\r
      : DEFAULT_DATA\r
\r
    // Calculate Heikin-Ashi values\r
    const haData = []\r
    data.forEach((d, i) => {\r
      if (i === 0) {\r
        haData.push({\r
          ...d,\r
          haClose: (d.open + d.high + d.low + d.close) / 4,\r
          haOpen: (d.open + d.close) / 2,\r
          haHigh: Math.max(d.high, d.open, d.close),\r
          haLow: Math.min(d.low, d.open, d.close),\r
        })\r
        return\r
      }\r
      const prev = haData[i - 1]\r
      haData.push({\r
        ...d,\r
        haClose: (d.open + d.high + d.low + d.close) / 4,\r
        haOpen: (prev.haOpen + prev.haClose) / 2,\r
        haHigh: Math.max(d.high, prev.haOpen, prev.haClose, d.open, d.close),\r
        haLow: Math.min(d.low, prev.haOpen, prev.haClose, d.open, d.close),\r
      })\r
    })\r
\r
    const x = d3.scaleBand()\r
      .domain(haData.map(d => d.date))\r
      .range([0, IW])\r
      .padding(0.3)\r
\r
    const allVals = haData.flatMap(d => [d.haHigh, d.haLow])\r
    const y = d3.scaleLinear()\r
      .domain([d3.min(allVals) - 2, d3.max(allVals) + 2])\r
      .range([IH, 0])\r
\r
    const color = (d) => d.haClose >= d.haOpen ? '#10b981' : '#ef4444'\r
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
    // Draw Heikin-Ashi candles\r
    haData.forEach(d => {\r
      const cx = x(d.date) + x.bandwidth() / 2\r
      const barColor = color(d)\r
      const topY = y(Math.max(d.haOpen, d.haClose))\r
      const botY = y(Math.min(d.haOpen, d.haClose))\r
      const bodyH = Math.max(2, botY - topY)\r
\r
      // Wick\r
      svg.append('line')\r
        .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
        .attr('x1', cx).attr('x2', cx)\r
        .attr('y1', y(d.haHigh)).attr('y2', y(d.haLow))\r
        .attr('stroke', barColor)\r
        .attr('stroke-width', 1.5)\r
\r
      // Body\r
      svg.append('rect')\r
        .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
        .attr('x', x(d.date))\r
        .attr('y', topY)\r
        .attr('width', x.bandwidth())\r
        .attr('height', bodyH)\r
        .attr('fill', barColor)\r
        .attr('opacity', 0.8)\r
        .attr('rx', 1)\r
    })\r
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
      .text('Heikin-Ashi Chart - Smoothed Price Action')\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text-primary)')\r
      .attr('font-size', '14px')\r
      .attr('font-weight', 'bold')\r
\r
    // Legend\r
    const lg = svg.append('g')\r
      .attr('transform', \`translate(\${M.left + IW - 100},\${M.top + IH + 15})\`)\r
    lg.append('rect').attr('width', 12).attr('height', 12).attr('fill', '#10b981').attr('opacity', 0.8).attr('rx', 2)\r
    lg.append('text').attr('x', 16).attr('y', 10).text('Bullish').attr('fill', 'var(--text-secondary)').attr('font-size', '10px')\r
    lg.append('rect').attr('x', 50).attr('width', 12).attr('height', 12).attr('fill', '#ef4444').attr('opacity', 0.8).attr('rx', 2)\r
    lg.append('text').attr('x', 66).attr('y', 10).text('Bearish').attr('fill', 'var(--text-secondary)').attr('font-size', '10px')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};