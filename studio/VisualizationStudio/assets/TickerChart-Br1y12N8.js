var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'ticker-chart',\r
  title: 'Ticker Chart',\r
  desc: 'Ticker Chart — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'TickerChart',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-transition"],\r
  tags: ["bars","ticker-chart"],\r
}\r
\r
export default function TickerChart({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"date":"2024-01-01","value":182.5,"symbol":"AAPL"},{"date":"2024-01-02","value":184.2,"symbol":"AAPL"},{"date":"2024-01-03","value":183.1,"symbol":"AAPL"},{"date":"2024-01-04","value":185.6,"symbol":"AAPL"},{"date":"2024-01-05","value":187.3,"symbol":"AAPL"},{"date":"2024-01-06","value":186,"symbol":"AAPL"},{"date":"2024-01-07","value":189.1,"symbol":"AAPL"},{"date":"2024-01-01","value":142.3,"symbol":"MSFT"},{"date":"2024-01-02","value":143.8,"symbol":"MSFT"},{"date":"2024-01-03","value":141.5,"symbol":"MSFT"},{"date":"2024-01-04","value":144.9,"symbol":"MSFT"},{"date":"2024-01-05","value":146.2,"symbol":"MSFT"},{"date":"2024-01-06","value":145.1,"symbol":"MSFT"},{"date":"2024-01-07","value":147.6,"symbol":"MSFT"},{"date":"2024-01-01","value":2780,"symbol":"GOOGL"},{"date":"2024-01-02","value":2810,"symbol":"GOOGL"},{"date":"2024-01-03","value":2795,"symbol":"GOOGL"},{"date":"2024-01-04","value":2834,"symbol":"GOOGL"},{"date":"2024-01-05","value":2855,"symbol":"GOOGL"},{"date":"2024-01-06","value":2840,"symbol":"GOOGL"},{"date":"2024-01-07","value":2872,"symbol":"GOOGL"},{"date":"2024-01-01","value":338,"symbol":"TSLA"},{"date":"2024-01-02","value":342,"symbol":"TSLA"},{"date":"2024-01-03","value":335,"symbol":"TSLA"},{"date":"2024-01-04","value":348,"symbol":"TSLA"},{"date":"2024-01-05","value":355,"symbol":"TSLA"},{"date":"2024-01-06","value":350,"symbol":"TSLA"},{"date":"2024-01-07","value":358,"symbol":"TSLA"},{"date":"2024-01-01","value":478,"symbol":"NVDA"},{"date":"2024-01-02","value":485,"symbol":"NVDA"},{"date":"2024-01-03","value":480,"symbol":"NVDA"},{"date":"2024-01-04","value":492,"symbol":"NVDA"},{"date":"2024-01-05","value":498,"symbol":"NVDA"},{"date":"2024-01-06","value":495,"symbol":"NVDA"},{"date":"2024-01-07","value":502,"symbol":"NVDA"}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const raw = Array.isArray(customData) && customData.length > 0 ? customData : DEFAULT_DATA\r
\r
    const grouped = d3.group(raw, d => d.symbol)\r
    const symbols = Array.from(grouped.keys())\r
    const n = symbols.length\r
    const rowH = IH / n\r
    const sparkW = IW * 0.38\r
    const labelW = IW * 0.28\r
\r
    // Header\r
    svg.append('text')\r
      .attr('x', M.left)\r
      .attr('y', 16)\r
      .attr('fill', 'var(--text-primary)')\r
      .attr('font-size', '9px')\r
      .attr('font-weight', '700')\r
      .attr('letter-spacing', '0.4px')\r
      .text('MARKET TICKER')\r
\r
    svg.append('text')\r
      .attr('x', W - M.right)\r
      .attr('y', 16)\r
      .attr('text-anchor', 'end')\r
      .attr('fill', 'var(--text-secondary)')\r
      .attr('font-size', '7px')\r
      .text('date-value pairs — last 7 sessions')\r
\r
    symbols.forEach((sym, i) => {\r
      const pts = grouped.get(sym)\r
      const y0 = M.top + i * rowH\r
      const yMid = y0 + rowH / 2\r
      const first = pts[0].value\r
      const last = pts[pts.length - 1].value\r
      const change = last - first\r
      const pct = ((change / first) * 100).toFixed(1)\r
      const isUp = change >= 0\r
      const col = isUp ? '#10b981' : '#ef4444'\r
      const bgCol = isUp ? 'rgba(16,185,129,0.08)' : 'rgba(239,68,68,0.08)'\r
\r
      // Row background\r
      svg.append('rect')\r
        .attr('x', M.left)\r
        .attr('y', y0 + 2)\r
        .attr('width', IW)\r
        .attr('height', rowH - 4)\r
        .attr('fill', bgCol)\r
        .attr('rx', 4)\r
        .attr('stroke', 'var(--border)')\r
        .attr('stroke-opacity', 0.35)\r
\r
      // Symbol\r
      svg.append('text')\r
        .attr('x', M.left + 8)\r
        .attr('y', yMid - 4)\r
        .attr('fill', 'var(--text-primary)')\r
        .attr('font-size', '10px')\r
        .attr('font-weight', '700')\r
        .text(sym)\r
\r
      // Last price\r
      svg.append('text')\r
        .attr('x', M.left + 8)\r
        .attr('y', yMid + 9)\r
        .attr('fill', 'var(--text-secondary)')\r
        .attr('font-size', '7.5px')\r
        .text(\`$\${last.toFixed(2)}\`)\r
\r
      // Change badge\r
      const badgeW = 52\r
      const badgeX = M.left + labelW - 4\r
      svg.append('rect')\r
        .attr('x', badgeX)\r
        .attr('y', yMid - 9)\r
        .attr('width', badgeW)\r
        .attr('height', 14)\r
        .attr('fill', col)\r
        .attr('rx', 7)\r
      svg.append('text')\r
        .attr('x', badgeX + badgeW / 2)\r
        .attr('y', yMid + 0.5)\r
        .attr('text-anchor', 'middle')\r
        .attr('fill', '#fff')\r
        .attr('font-size', '6.5px')\r
        .attr('font-weight', '700')\r
        .text(\`\${isUp ? '▲' : '▼'} \${pct}%\`)\r
\r
      // Sparkline\r
      const x = d3.scaleLinear().domain([0, pts.length - 1]).range([0, sparkW])\r
      const yMin = d3.min(pts, d => d.value) * 0.98\r
      const yMax = d3.max(pts, d => d.value) * 1.02\r
      const y = d3.scaleLinear().domain([yMin, yMax]).range([rowH * 0.38, -rowH * 0.38])\r
\r
      const sx = M.left + IW - sparkW - 8\r
      const sy = yMid\r
\r
      const area = d3.area()\r
        .x((d, idx) => x(idx))\r
        .y0(y(yMin))\r
        .y1(d => y(d.value))\r
        .curve(d3.curveCatmullRom.alpha(0.5))\r
\r
      const line = d3.line()\r
        .x((d, idx) => x(idx))\r
        .y(d => y(d.value))\r
        .curve(d3.curveCatmullRom.alpha(0.5))\r
\r
      const g = svg.append('g').attr('transform', \`translate(\${sx},\${sy})\`)\r
\r
      const gradId = \`ticker-\${sym}\`\r
      const defs = svg.append('defs')\r
      const grad = defs.append('linearGradient').attr('id', gradId).attr('x1', '0').attr('y1', '0').attr('x2', '0').attr('y2', '1')\r
      grad.append('stop').attr('offset', '0%').attr('stop-color', col).attr('stop-opacity', 0.28)\r
      grad.append('stop').attr('offset', '100%').attr('stop-color', col).attr('stop-opacity', 0.02)\r
\r
      g.append('path').datum(pts).attr('d', area).attr('fill', \`url(#\${gradId})\`)\r
      g.append('path').datum(pts).attr('d', line).attr('fill', 'none').attr('stroke', col).attr('stroke-width', 1.6)\r
\r
      // End dot\r
      g.append('circle')\r
        .attr('cx', x(pts.length - 1))\r
        .attr('cy', y(last))\r
        .attr('r', 2.4)\r
        .attr('fill', col)\r
        .attr('stroke', '#fff')\r
        .attr('stroke-width', 1)\r
\r
      // Separator\r
      if (i < n - 1) {\r
        svg.append('line')\r
          .attr('x1', M.left + 4)\r
          .attr('x2', W - M.right - 4)\r
          .attr('y1', y0 + rowH)\r
          .attr('y2', y0 + rowH)\r
          .attr('stroke', 'var(--border)')\r
          .attr('stroke-opacity', 0.18)\r
      }\r
    })\r
\r
    // Ticker tape footer\r
    const tape = symbols.map(s => {\r
      const pts = grouped.get(s)\r
      const ch = pts[pts.length - 1].value - pts[0].value\r
      return \`\${s} \${(ch >= 0 ? '+' : '')}\${ch.toFixed(1)}\`\r
    }).join('  •  ')\r
    svg.append('text')\r
      .attr('x', W / 2)\r
      .attr('y', H - 6)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text-secondary)')\r
      .attr('font-size', '6px')\r
      .attr('letter-spacing', '0.3px')\r
      .text(tape)\r
  }, [customData])\r
\r
  return (\r
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\r
      <svg ref={ref} viewBox={\`0 0 \${W} \${H}\`} style={{ width: '100%', height: '100%', maxWidth: '500px' }} />\r
    </div>\r
  )\r
}\r
`;export{e as default};