var e=`import { useEffect, useRef, useState } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'options-chain',\r
  title: 'Options Chain',\r
  desc: 'Options Chain — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'OptionsChain',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","options-chain"],\r
}\r
\r
export default function OptionsChain({ data: customData, options = {} }) {\r
  const ref = useRef(null)\r
  const [view, setView] = useState(options.view || 'chain') // 'chain', 'volatility_smile', 'greeks'\r
  const [expiry, setExpiry] = useState(options.expiry || 'all')\r
\r
  const DEFAULT_DATA = {\r
    underlying: 100,\r
    expiries: [\r
      { date: '2025-01-17', days: 7, options: generateOptions(100, 7) },\r
      { date: '2025-01-24', days: 14, options: generateOptions(100, 14) },\r
      { date: '2025-02-21', days: 42, options: generateOptions(100, 42) },\r
      { date: '2025-03-21', days: 70, options: generateOptions(100, 70) },\r
    ]\r
  }\r
\r
  function generateOptions(spot, days) {\r
    const strikes = Array.from({ length: 21 }, (_, i) => spot * 0.8 + i * spot * 0.02)\r
    return strikes.map(strike => {\r
      const moneyness = strike / spot\r
      const timeValue = Math.sqrt(days / 365) * 0.2\r
      const intrinsicCall = Math.max(0, spot - strike)\r
      const intrinsicPut = Math.max(0, strike - spot)\r
      const vol = 0.2 + 0.1 * Math.abs(moneyness - 1) // Volatility smile\r
      \r
      return {\r
        strike,\r
        call: {\r
          price: intrinsicCall + timeValue * spot * vol,\r
          iv: vol,\r
          delta: moneyness < 1 ? 0.5 + 0.3 * (1 - moneyness) : 0.5 - 0.3 * (moneyness - 1),\r
          gamma: 0.02 * Math.exp(-Math.abs(moneyness - 1) * 5),\r
          theta: -0.05 * vol * Math.sqrt(days),\r
          vega: 0.1 * spot * Math.sqrt(days / 365)\r
        },\r
        put: {\r
          price: intrinsicPut + timeValue * spot * vol,\r
          iv: vol,\r
          delta: moneyness < 1 ? -0.5 + 0.3 * (1 - moneyness) : -0.5 + 0.3 * (moneyness - 1),\r
          gamma: 0.02 * Math.exp(-Math.abs(moneyness - 1) * 5),\r
          theta: -0.05 * vol * Math.sqrt(days),\r
          vega: 0.1 * spot * Math.sqrt(days / 365)\r
        }\r
      }\r
    })\r
  }\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = customData || DEFAULT_DATA\r
    const { underlying, expiries } = data\r
    \r
    const filteredExpiries = expiry === 'all' ? expiries : expiries.filter(e => e.date === expiry)\r
    const allOptions = filteredExpiries.flatMap(e => e.options.map(o => ({ ...o, expiry: e.date, days: e.days })))\r
\r
    const g = svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
\r
    if (view === 'chain') {\r
      renderChainView(g, allOptions, underlying)\r
    } else if (view === 'volatility_smile') {\r
      renderVolatilitySmile(g, allOptions)\r
    } else if (view === 'greeks') {\r
      renderGreeksView(g, allOptions)\r
    }\r
\r
    function renderChainView(g, options, spot) {\r
      const strikes = [...new Set(options.map(o => o.strike))].sort((a, b) => a - b)\r
      const rowHeight = IH / (strikes.length + 2)\r
      const colWidths = {\r
        strike: 80,\r
        callPrice: 100,\r
        callIV: 80,\r
        callDelta: 80,\r
        putPrice: 100,\r
        putIV: 80,\r
        putDelta: 80\r
      }\r
      const totalWidth = Object.values(colWidths).reduce((a, b) => a + b, 0)\r
\r
      // Header\r
      const headers = [\r
        { key: 'strike', label: 'Strike', x: 0 },\r
        { key: 'callPrice', label: 'Call Price', x: colWidths.strike },\r
        { key: 'callIV', label: 'Call IV', x: colWidths.strike + colWidths.callPrice },\r
        { key: 'callDelta', label: 'Call Δ', x: colWidths.strike + colWidths.callPrice + colWidths.callIV },\r
        { key: 'putPrice', label: 'Put Price', x: colWidths.strike + colWidths.callPrice + colWidths.callIV + colWidths.callDelta },\r
        { key: 'putIV', label: 'Put IV', x: colWidths.strike + colWidths.callPrice + colWidths.callIV + colWidths.callDelta + colWidths.putPrice },\r
        { key: 'putDelta', label: 'Put Δ', x: colWidths.strike + colWidths.callPrice + colWidths.callIV + colWidths.callDelta + colWidths.putPrice + colWidths.putIV }\r
      ]\r
\r
      g.append('rect')\r
        .attr('x', 0).attr('y', 0)\r
        .attr('width', totalWidth).attr('height', 30)\r
        .attr('fill', 'var(--border)').attr('opacity', 0.3)\r
\r
      headers.forEach(h => {\r
        g.append('text')\r
          .attr('x', h.x + 5).attr('y', 20)\r
          .attr('font-size', '10px').attr('fill', 'var(--text-secondary)')\r
          .attr('font-weight', 600).text(h.label)\r
      })\r
\r
      // Spot price line\r
      const spotIdx = strikes.findIndex(s => s >= spot)\r
      if (spotIdx >= 0) {\r
        g.append('line')\r
          .attr('x1', 0).attr('x2', totalWidth)\r
          .attr('y1', (spotIdx + 1) * rowHeight + 30)\r
          .attr('y2', (spotIdx + 1) * rowHeight + 30)\r
          .attr('stroke', colors[2]).attr('stroke-width', 2).attr('stroke-dasharray', '4,4')\r
      }\r
\r
      // Rows\r
      strikes.forEach((strike, i) => {\r
        const opt = options.find(o => o.strike === strike)\r
        if (!opt) return\r
\r
        const y = (i + 1) * rowHeight + 30\r
        const isITMCall = strike < spot\r
        const isITMPut = strike > spot\r
\r
        // Highlight ITM\r
        g.append('rect')\r
          .attr('x', 0).attr('y', y)\r
          .attr('width', totalWidth).attr('height', rowHeight - 2)\r
          .attr('fill', (isITMCall || isITMPut) ? colors[2] : 'transparent')\r
          .attr('opacity', 0.1)\r
\r
        // Strike\r
        g.append('text')\r
          .attr('x', 5).attr('y', y + rowHeight / 2 + 4)\r
          .attr('font-size', '11px').attr('fill', 'var(--text)').attr('font-weight', 600)\r
          .text(strike.toFixed(2))\r
\r
        // Call data\r
        g.append('text')\r
          .attr('x', colWidths.strike + 5).attr('y', y + rowHeight / 2 + 4)\r
          .attr('font-size', '11px').attr('fill', '#22c55e').attr('text-anchor', 'end')\r
          .text(opt.call.price.toFixed(2))\r
        \r
        g.append('text')\r
          .attr('x', colWidths.strike + colWidths.callPrice + 5).attr('y', y + rowHeight / 2 + 4)\r
          .attr('font-size', '10px').attr('fill', 'var(--text-secondary)').attr('text-anchor', 'end')\r
          .text((opt.call.iv * 100).toFixed(1) + '%')\r
        \r
        g.append('text')\r
          .attr('x', colWidths.strike + colWidths.callPrice + colWidths.callIV + 5).attr('y', y + rowHeight / 2 + 4)\r
          .attr('font-size', '10px').attr('fill', 'var(--text-secondary)').attr('text-anchor', 'end')\r
          .text(opt.call.delta.toFixed(2))\r
\r
        // Put data\r
        g.append('text')\r
          .attr('x', colWidths.strike + colWidths.callPrice + colWidths.callIV + colWidths.callDelta + 5).attr('y', y + rowHeight / 2 + 4)\r
          .attr('font-size', '11px').attr('fill', '#ef4444').attr('text-anchor', 'end')\r
          .text(opt.put.price.toFixed(2))\r
        \r
        g.append('text')\r
          .attr('x', colWidths.strike + colWidths.callPrice + colWidths.callIV + colWidths.callDelta + colWidths.putPrice + 5).attr('y', y + rowHeight / 2 + 4)\r
          .attr('font-size', '10px').attr('fill', 'var(--text-secondary)').attr('text-anchor', 'end')\r
          .text((opt.put.iv * 100).toFixed(1) + '%')\r
        \r
        g.append('text')\r
          .attr('x', totalWidth - 5).attr('y', y + rowHeight / 2 + 4)\r
          .attr('font-size', '10px').attr('fill', 'var(--text-secondary)').attr('text-anchor', 'end')\r
          .text(opt.put.delta.toFixed(2))\r
      })\r
\r
      // Title\r
      g.append('text')\r
        .attr('x', totalWidth / 2).attr('y', -10)\r
        .attr('text-anchor', 'middle').attr('fill', 'var(--text)').attr('font-size', '14px').attr('font-weight', 600)\r
        .text(\`Options Chain - Spot: \${spot} | \${filteredExpiries.length} Expir\${filteredExpiries.length === 1 ? 'y' : 'ies'}\`)\r
    }\r
\r
    function renderVolatilitySmile(g, options) {\r
      const byExpiry = d3.group(options, d => d.expiry)\r
      const expiriesList = Array.from(byExpiry.keys())\r
\r
      const x = d3.scaleLinear()\r
        .domain(d3.extent(options, d => d.strike))\r
        .range([0, IW])\r
\r
      const y = d3.scaleLinear()\r
        .domain([0, d3.max(options, d => Math.max(d.call.iv, d.put.iv)) * 1.1])\r
        .range([IH, 0])\r
\r
      const expiryColors = d3.scaleOrdinal(d3.schemeCategory10).domain(expiriesList)\r
\r
      // Grid\r
      g.append('g')\r
        .call(d3.axisLeft(y).ticks(5).tickSize(-IW).tickFormat(''))\r
        .call(g => g.select('.domain').remove())\r
        .call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.3))\r
\r
      g.append('g')\r
        .attr('transform', \`translate(0,\${IH})\`)\r
        .call(d3.axisBottom(x).ticks(8).tickSize(-IH).tickFormat(''))\r
        .call(g => g.select('.domain').remove())\r
        .call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.3))\r
\r
      byExpiry.forEach((opts, exp) => {\r
        const color = expiryColors(exp)\r
        const sorted = opts.sort((a, b) => a.strike - b.strike)\r
\r
        const line = d3.line()\r
          .x(d => x(d.strike))\r
          .y(d => y(d.call.iv))\r
          .curve(d3.curveCatmullRom.alpha(0.5))\r
\r
        g.append('path')\r
          .datum(sorted)\r
          .attr('d', line)\r
          .attr('fill', 'none')\r
          .attr('stroke', color)\r
          .attr('stroke-width', 2)\r
          .attr('opacity', 0.8)\r
\r
        g.append('path')\r
          .datum(sorted.map(d => ({ ...d, iv: d.put.iv })))\r
          .attr('d', line)\r
          .attr('fill', 'none')\r
          .attr('stroke', color)\r
          .attr('stroke-width', 2)\r
          .attr('stroke-dasharray', '4,4')\r
          .attr('opacity', 0.8)\r
      })\r
\r
      // Legend\r
      const lg = g.append('g').attr('transform', \`translate(20, 20)\`)\r
      expiriesList.forEach((exp, i) => {\r
        lg.append('line').attr('x1', 0).attr('x2', 20).attr('y1', i * 20 + 10).attr('y2', i * 20 + 10)\r
          .attr('stroke', expiryColors(exp)).attr('stroke-width', 2)\r
        lg.append('line').attr('x1', 0).attr('x2', 20).attr('y1', i * 20 + 14).attr('y2', i * 20 + 14)\r
          .attr('stroke', expiryColors(exp)).attr('stroke-width', 2).attr('stroke-dasharray', '4,4')\r
        lg.append('text').attr('x', 25).attr('y', i * 20 + 14).attr('font-size', '10px').attr('fill', 'var(--text)')\r
          .text(\`\${exp} (Call solid, Put dashed)\`)\r
      })\r
\r
      // Title\r
      g.append('text')\r
        .attr('x', IW / 2).attr('y', -10)\r
        .attr('text-anchor', 'middle').attr('fill', 'var(--text)').attr('font-size', '14px').attr('font-weight', 600)\r
        .text('Volatility Smile / Skew by Expiry')\r
    }\r
\r
    function renderGreeksView(g, options) {\r
      const byExpiry = d3.group(options, d => d.expiry)\r
      const expiriesList = Array.from(byExpiry.keys())\r
      const greeks = ['delta', 'gamma', 'theta', 'vega']\r
      const rows = greeks.length\r
      const cols = expiriesList.length\r
      const cellW = IW / cols\r
      const cellH = IH / rows\r
\r
      expiriesList.forEach((exp, colIdx) => {\r
        const opts = byExpiry.get(exp)?.sort((a, b) => a.strike - b.strike) || []\r
        const strikes = opts.map(o => o.strike)\r
\r
        greeks.forEach((greek, rowIdx) => {\r
          const x = colIdx * cellW\r
          const y = rowIdx * cellH\r
\r
          // Cell background\r
          g.append('rect')\r
            .attr('x', x).attr('y', y)\r
            .attr('width', cellW).attr('height', cellH)\r
            .attr('fill', 'var(--border)').attr('opacity', 0.1)\r
            .attr('stroke', 'var(--border)')\r
\r
          const maxVal = d3.max(opts, d => Math.max(Math.abs(d.call[greek]), Math.abs(d.put[greek])))\r
          const xScale = d3.scaleLinear().domain(d3.extent(strikes)).range([x + 20, x + cellW - 20])\r
          const yScale = d3.scaleLinear().domain([-maxVal * 1.1, maxVal * 1.1]).range([y + cellH - 20, y + 20])\r
\r
          const callLine = d3.line()\r
            .x(d => xScale(d.strike))\r
            .y(d => yScale(d.call[greek]))\r
            .curve(d3.curveCatmullRom.alpha(0.5))\r
\r
          const putLine = d3.line()\r
            .x(d => xScale(d.strike))\r
            .y(d => yScale(d.put[greek]))\r
            .curve(d3.curveCatmullRom.alpha(0.5))\r
\r
          const cellG = g.append('g').attr('transform', \`translate(\${x},\${y})\`)\r
\r
          cellG.append('path')\r
            .datum(opts)\r
            .attr('d', callLine)\r
            .attr('fill', 'none').attr('stroke', '#22c55e').attr('stroke-width', 1.5)\r
\r
          cellG.append('path')\r
            .datum(opts)\r
            .attr('d', putLine)\r
            .attr('fill', 'none').attr('stroke', '#ef4444').attr('stroke-width', 1.5).attr('stroke-dasharray', '3,3')\r
\r
          // Labels\r
          cellG.append('text')\r
            .attr('x', cellW / 2).attr('y', 15)\r
            .attr('text-anchor', 'middle').attr('font-size', '10px').attr('fill', 'var(--text)').attr('font-weight', 600)\r
            .text(\`\${greek.toUpperCase()} - \${exp}\`)\r
\r
          // Zero line\r
          if (greek === 'delta' || greek === 'theta') {\r
            cellG.append('line')\r
              .attr('x1', 20).attr('x2', cellW - 20)\r
              .attr('y1', yScale(0)).attr('y2', yScale(0))\r
              .attr('stroke', 'var(--text-secondary)').attr('stroke-dasharray', '2,2').attr('stroke-width', 0.5)\r
          }\r
        })\r
      })\r
\r
      // Title\r
      g.append('text')\r
        .attr('x', IW / 2).attr('y', -10)\r
        .attr('text-anchor', 'middle').attr('fill', 'var(--text)').attr('font-size', '14px').attr('font-weight', 600)\r
        .text('Options Greeks by Expiry & Strike')\r
    }\r
\r
  }, [customData, view, expiry])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}`;export{e as default};