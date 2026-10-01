var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH } from './utils'\r
\r
export const meta = {\r
  id: 'ohlc-chart',\r
  title: 'Ohlc Chart',\r
  desc: 'Ohlc Chart — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'OhlcChart',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","ohlc-chart"],\r
}\r
\r
export default function OhlcChart({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"date":"Jan 1","open":140,"high":148,"low":136,"close":145},{"date":"Jan 2","open":145,"high":152,"low":142,"close":150},{"date":"Jan 3","open":150,"high":154,"low":146,"close":148},{"date":"Jan 4","open":148,"high":156,"low":147,"close":155},{"date":"Jan 5","open":155,"high":162,"low":153,"close":160},{"date":"Jan 6","open":160,"high":161,"low":150,"close":152},{"date":"Jan 7","open":152,"high":158,"low":149,"close":157},{"date":"Jan 8","open":157,"high":165,"low":155,"close":164},{"date":"Jan 9","open":164,"high":170,"low":162,"close":168},{"date":"Jan 10","open":168,"high":169,"low":158,"close":160},{"date":"Jan 11","open":160,"high":166,"low":159,"close":165},{"date":"Jan 12","open":165,"high":172,"low":163,"close":170}]\r
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
      .padding(0.35)\r
\r
    const yMin = d3.min(data, d => d.low) || 100\r
    const yMax = d3.max(data, d => d.high) || 200\r
\r
    const y = d3.scaleLinear()\r
      .domain([yMin - 5, yMax + 5])\r
      .range([IH, 0])\r
\r
    const g = svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
\r
    // Grid\r
    g.append('g')\r
      .call(d3.axisLeft(y).ticks(6).tickSize(-IW).tickPadding(6))\r
      .call(gr => gr.select('.domain').remove())\r
      .call(gr => gr.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-dasharray', '2,2').attr('stroke-opacity', 0.4))\r
      .call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '7px'))\r
\r
    g.append('g')\r
      .attr('transform', \`translate(0,\${IH})\`)\r
      .call(d3.axisBottom(x).tickPadding(6))\r
      .call(gr => gr.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '6.5px'))\r
\r
    // Draw OHLC Ticks\r
    data.forEach(d => {\r
      const isUp = d.close >= d.open\r
      const color = isUp ? '#10b981' : '#ef4444'\r
      const cx = x(d.date) + x.bandwidth() / 2\r
      const tickW = x.bandwidth() / 2\r
\r
      // High to Low vertical line\r
      g.append('line')\r
        .attr('x1', cx).attr('x2', cx)\r
        .attr('y1', y(d.high)).attr('y2', y(d.low))\r
        .attr('stroke', color)\r
        .attr('stroke-width', 1.8)\r
\r
      // Open tick (left)\r
      g.append('line')\r
        .attr('x1', cx - tickW).attr('x2', cx)\r
        .attr('y1', y(d.open)).attr('y2', y(d.open))\r
        .attr('stroke', color)\r
        .attr('stroke-width', 1.8)\r
\r
      // Close tick (right)\r
      g.append('line')\r
        .attr('x1', cx).attr('x2', cx + tickW)\r
        .attr('y1', y(d.close)).attr('y2', y(d.close))\r
        .attr('stroke', color)\r
        .attr('stroke-width', 1.8)\r
    })\r
\r
    // Header\r
    svg.append('text')\r
      .attr('x', 14)\r
      .attr('y', 16)\r
      .attr('fill', 'var(--text-primary)')\r
      .attr('font-size', '8.5px')\r
      .attr('font-weight', '600')\r
      .text('OHLC Stock Chart (Open-High-Low-Close)')\r
  }, [customData])\r
\r
  return (\r
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\r
      <svg ref={ref} viewBox={\`0 0 \${W} \${H}\`} style={{ width: '100%', height: '100%', maxWidth: '500px' }} />\r
    </div>\r
  )\r
}\r
`;export{e as default};