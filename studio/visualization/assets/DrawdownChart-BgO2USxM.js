var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'drawdown-chart',\r
  title: 'Drawdown Chart',\r
  desc: 'Drawdown Chart — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'DrawdownChart',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","drawdown-chart"],\r
}\r
\r
export default function DrawdownChart({ data: customData, options = {} }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = {"equity":[100000,102000,101500,105000,108000,110000,108000,112000,115000,113000,110000,108000,105000,102000,100000,98000,95000,97000,100000,103000,105000,108000,110000,112000,115000,118000,120000,118000,115000,112000],"dates":["2026-07-25","2026-07-26","2026-07-27","2026-07-28","2026-07-29","2026-07-30","2026-07-31","2026-08-01","2026-08-02","2026-08-03","2026-08-04","2026-08-05","2026-08-06","2026-08-07","2026-08-08","2026-08-09","2026-08-10","2026-08-11","2026-08-12","2026-08-13","2026-08-14","2026-08-15","2026-08-16","2026-08-17","2026-08-18","2026-08-19","2026-08-20","2026-08-21","2026-08-22","2026-08-23"]}\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = customData || DEFAULT_DATA\r
    const { equity, dates } = data\r
\r
    if (!equity || equity.length === 0) {\r
      console.warn('Drawdown Chart expects { equity: [], dates: [] }')\r
      return\r
    }\r
\r
    // Calculate running maximum and drawdown\r
    let runningMax = equity[0]\r
    const drawdowns = equity.map((value, i) => {\r
      runningMax = Math.max(runningMax, value)\r
      const dd = ((value - runningMax) / runningMax) * 100\r
      return { value, runningMax, drawdown: dd, date: dates[i] }\r
    })\r
\r
    const maxDrawdown = d3.min(drawdowns, d => d.drawdown) || 0\r
    const maxEquity = d3.max(equity) || 1\r
    const minEquity = d3.min(equity) || 0\r
\r
    const x = d3.scaleLinear().domain([0, equity.length - 1]).range([0, IW])\r
    const yEquity = d3.scaleLinear().domain([minEquity * 0.95, maxEquity * 1.02]).range([IH, 0])\r
    const yDrawdown = d3.scaleLinear().domain([maxDrawdown * 1.1, 5]).range([0, IH / 2])\r
\r
    const g = svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
\r
    // Grid for equity curve\r
    g.append('g')\r
      .call(d3.axisLeft(yEquity).ticks(5).tickSize(-IW).tickFormat(''))\r
      .call(g => g.select('.domain').remove())\r
      .call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.3))\r
\r
    // Equity curve (top portion)\r
    const equityLine = d3.line()\r
      .x((d, i) => x(i))\r
      .y(d => yEquity(d))\r
      .curve(d3.curveCatmullRom.alpha(0.5))\r
\r
    const equityArea = d3.area()\r
      .x((d, i) => x(i))\r
      .y0(IH)\r
      .y1(d => yEquity(d))\r
      .curve(d3.curveCatmullRom.alpha(0.5))\r
\r
    g.append('path')\r
      .datum(equity)\r
      .attr('d', equityArea)\r
      .attr('fill', colors[0])\r
      .attr('opacity', 0.1)\r
\r
    g.append('path')\r
      .datum(equity)\r
      .attr('d', equityLine)\r
      .attr('fill', 'none')\r
      .attr('stroke', colors[0])\r
      .attr('stroke-width', 2.5)\r
      .attr('stroke-linecap', 'round')\r
\r
    // Running max line (waterline)\r
    const maxLine = d3.line()\r
      .x((d, i) => x(i))\r
      .y(d => yEquity(d.runningMax))\r
      .curve(d3.curveStepAfter)\r
\r
    g.append('path')\r
      .datum(drawdowns)\r
      .attr('d', maxLine)\r
      .attr('fill', 'none')\r
      .attr('stroke', colors[2])\r
      .attr('stroke-width', 1.5)\r
      .attr('stroke-dasharray', '6,4')\r
      .attr('opacity', 0.7)\r
\r
    // Drawdown area (bottom portion) - shifted down\r
    const ddOffset = IH / 2 + 20\r
    const drawdownArea = d3.area()\r
      .x((d, i) => x(i))\r
      .y0(ddOffset)\r
      .y1(d => ddOffset + yDrawdown(d.drawdown))\r
      .curve(d3.curveCatmullRom.alpha(0.5))\r
\r
    g.append('path')\r
      .datum(drawdowns)\r
      .attr('d', drawdownArea)\r
      .attr('fill', '#ef4444')\r
      .attr('opacity', 0.3)\r
\r
    const drawdownLine = d3.line()\r
      .x((d, i) => x(i))\r
      .y(d => ddOffset + yDrawdown(d.drawdown))\r
      .curve(d3.curveCatmullRom.alpha(0.5))\r
\r
    g.append('path')\r
      .datum(drawdowns)\r
      .attr('d', drawdownLine)\r
      .attr('fill', 'none')\r
      .attr('stroke', '#ef4444')\r
      .attr('stroke-width', 2)\r
\r
    // Zero line for drawdown\r
    g.append('line')\r
      .attr('x1', 0).attr('x2', IW)\r
      .attr('y1', ddOffset).attr('y2', ddOffset)\r
      .attr('stroke', 'var(--border)')\r
      .attr('stroke-width', 1)\r
\r
    // Max drawdown annotation\r
    const maxDdPoint = drawdowns.reduce((min, d) => d.drawdown < min.drawdown ? d : min, drawdowns[0])\r
    const maxDdIdx = drawdowns.indexOf(maxDdPoint)\r
\r
    g.append('circle')\r
      .attr('cx', x(maxDdIdx))\r
      .attr('cy', ddOffset + yDrawdown(maxDdPoint.drawdown))\r
      .attr('r', 6)\r
      .attr('fill', '#ef4444')\r
      .attr('stroke', 'var(--bg)')\r
      .attr('stroke-width', 2)\r
\r
    g.append('text')\r
      .attr('x', x(maxDdIdx))\r
      .attr('y', ddOffset + yDrawdown(maxDdPoint.drawdown) - 15)\r
      .attr('text-anchor', 'middle')\r
      .attr('font-size', '11px')\r
      .attr('fill', '#ef4444')\r
      .attr('font-weight', 600)\r
      .text(\`Max DD: \${maxDdPoint.drawdown.toFixed(1)}%\`)\r
\r
    // Equity axis\r
    g.append('g')\r
      .attr('transform', \`translate(0,\${IH})\`)\r
      .call(d3.axisBottom(x).tickValues([0, equity.length - 1]).tickFormat((d, i) => dates[i] || '').tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '10px'))\r
\r
    // Equity Y axis\r
    g.append('g')\r
      .call(d3.axisLeft(yEquity).ticks(5).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '10px'))\r
\r
    // Drawdown Y axis (right side)\r
    const ddAxis = g.append('g').attr('transform', \`translate(\${IW},\${ddOffset})\`)\r
    ddAxis.call(d3.axisRight(yDrawdown).ticks(4).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').remove())\r
      .call(g => g.selectAll('text').attr('fill', '#ef4444').attr('font-size', '9px'))\r
\r
    // Titles\r
    g.append('text')\r
      .attr('x', IW / 2)\r
      .attr('y', -10)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text)')\r
      .attr('font-size', '14px')\r
      .attr('font-weight', 600)\r
      .text('Equity Curve & Drawdown')\r
\r
    g.append('text')\r
      .attr('x', IW / 2)\r
      .attr('y', ddOffset - 10)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', '#ef4444')\r
      .attr('font-size', '12px')\r
      .attr('font-weight', 500)\r
      .text('Drawdown (%)')\r
\r
    // Legend\r
    const lg = g.append('g').attr('transform', \`translate(20, 20)\`)\r
    lg.append('line').attr('x1', 0).attr('x2', 20).attr('y1', 0).attr('y2', 0).attr('stroke', colors[0]).attr('stroke-width', 2.5)\r
    lg.append('text').attr('x', 25).attr('y', 4).attr('font-size', '10px').attr('fill', 'var(--text)').text('Equity')\r
    lg.append('line').attr('x1', 0).attr('x2', 20).attr('y1', 18).attr('y2', 18).attr('stroke', colors[2]).attr('stroke-width', 1.5).attr('stroke-dasharray', '6,4')\r
    lg.append('text').attr('x', 25).attr('y', 22).attr('font-size', '10px').attr('fill', 'var(--text)').text('Peak (Running Max)')\r
    lg.append('line').attr('x1', 0).attr('x2', 20).attr('y1', 36).attr('y2', 36).attr('stroke', '#ef4444').attr('stroke-width', 2)\r
    lg.append('text').attr('x', 25).attr('y', 40).attr('font-size', '10px').attr('fill', 'var(--text)').text('Drawdown')\r
\r
    // Current equity & drawdown display\r
    const currentEquity = equity[equity.length - 1]\r
    const currentDd = drawdowns[drawdowns.length - 1].drawdown\r
    const info = g.append('g').attr('transform', \`translate(\${IW - 180}, 20)\`)\r
    \r
    info.append('text')\r
      .attr('x', 0).attr('y', 0)\r
      .attr('font-size', '10px').attr('fill', 'var(--text-secondary)')\r
      .text('Current Equity:')\r
    info.append('text')\r
      .attr('x', 0).attr('y', 16)\r
      .attr('font-size', '14px').attr('fill', 'var(--text)').attr('font-weight', 600)\r
      .text(\`$\${currentEquity.toLocaleString()}\`)\r
    \r
    info.append('text')\r
      .attr('x', 0).attr('y', 36)\r
      .attr('font-size', '10px').attr('fill', 'var(--text-secondary)')\r
      .text('Current Drawdown:')\r
    info.append('text')\r
      .attr('x', 0).attr('y', 52)\r
      .attr('font-size', '14px').attr('fill', '#ef4444').attr('font-weight', 600)\r
      .text(\`\${currentDd.toFixed(1)}%\`)\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}`;export{e as default};