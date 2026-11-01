var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH } from './utils'\r
\r
export const meta = {\r
  id: 'renko-chart',\r
  title: 'Renko Chart',\r
  desc: 'Renko Chart — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'RenkoChart',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","renko-chart"],\r
}\r
\r
export default function RenkoChart({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = {"brickSize":5,"prices":[100,102,106,112,114,118,122,126,120,115,111,108,114,119,125,131,137,142,138,132,126]}\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const config = (customData && typeof customData === 'object' && !Array.isArray(customData))\r
      ? { ...DEFAULT_DATA, ...customData }\r
      : Array.isArray(customData)\r
        ? { brickSize: 5, prices: customData.map(d => typeof d === 'number' ? d : d.price ?? 100) }\r
        : DEFAULT_DATA\r
\r
    const brickSize = config.brickSize || 5\r
    const prices = config.prices || DEFAULT_DATA.prices\r
\r
    // Calculate Renko Bricks\r
    const bricks = []\r
    let currentBase = Math.floor(prices[0] / brickSize) * brickSize\r
\r
    for (let i = 1; i < prices.length; i++) {\r
      const p = prices[i]\r
      while (p >= currentBase + 2 * brickSize) {\r
        currentBase += brickSize\r
        bricks.push({ type: 'up', low: currentBase, high: currentBase + brickSize })\r
      }\r
      while (p <= currentBase - brickSize) {\r
        bricks.push({ type: 'down', low: currentBase - brickSize, high: currentBase })\r
        currentBase -= brickSize\r
      }\r
    }\r
\r
    const n = Math.max(bricks.length, 1)\r
    const x = d3.scaleBand()\r
      .domain(d3.range(n))\r
      .range([0, IW])\r
      .padding(0.2)\r
\r
    const allPrices = bricks.flatMap(b => [b.low, b.high])\r
    const yMin = (d3.min(allPrices) || 90) - brickSize\r
    const yMax = (d3.max(allPrices) || 150) + brickSize\r
\r
    const y = d3.scaleLinear()\r
      .domain([yMin, yMax])\r
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
      .call(d3.axisBottom(x).tickValues([]))\r
      .call(gr => gr.select('.domain').attr('stroke', 'var(--border)'))\r
\r
    // Draw Renko Bricks\r
    bricks.forEach((b, i) => {\r
      const isUp = b.type === 'up'\r
      const color = isUp ? '#10b981' : '#ef4444'\r
\r
      g.append('rect')\r
        .attr('x', x(i))\r
        .attr('y', y(b.high))\r
        .attr('width', x.bandwidth())\r
        .attr('height', y(b.low) - y(b.high))\r
        .attr('fill', color)\r
        .attr('stroke', '#0f172a')\r
        .attr('stroke-width', 0.8)\r
        .attr('rx', 2)\r
    })\r
\r
    // Header\r
    svg.append('text')\r
      .attr('x', 14)\r
      .attr('y', 16)\r
      .attr('fill', 'var(--text-primary)')\r
      .attr('font-size', '8.5px')\r
      .attr('font-weight', '600')\r
      .text('Renko Trend Chart (Price Action Bricks)')\r
\r
    svg.append('text')\r
      .attr('x', W - 14)\r
      .attr('y', 16)\r
      .attr('text-anchor', 'end')\r
      .attr('fill', 'var(--text-secondary)')\r
      .attr('font-size', '7px')\r
      .text(\`Box Size = $\${brickSize}\`)\r
  }, [customData])\r
\r
  return (\r
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\r
      <svg ref={ref} viewBox={\`0 0 \${W} \${H}\`} style={{ width: '100%', height: '100%', maxWidth: '500px' }} />\r
    </div>\r
  )\r
}\r
`;export{e as default};