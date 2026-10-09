var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'kagi-chart',\r
  title: 'Kagi Chart',\r
  desc: 'Kagi Chart — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'KagiChart',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","kagi-chart"],\r
}\r
\r
export default function KagiChart({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"date":"Jan 1","close":100},{"date":"Jan 2","close":105},{"date":"Jan 3","close":103},{"date":"Jan 4","close":108},{"date":"Jan 5","close":106},{"date":"Jan 6","close":102},{"date":"Jan 7","close":98},{"date":"Jan 8","close":100},{"date":"Jan 9","close":104},{"date":"Jan 10","close":108},{"date":"Jan 11","close":112},{"date":"Jan 12","close":110},{"date":"Jan 13","close":106},{"date":"Jan 14","close":102},{"date":"Jan 15","close":98},{"date":"Jan 16","close":100},{"date":"Jan 17","close":105},{"date":"Jan 18","close":110},{"date":"Jan 19","close":115},{"date":"Jan 20","close":118}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0)\r
      ? customData\r
      : DEFAULT_DATA\r
\r
    const reversalPct = 0.05\r
    const kagiPoints = [{ date: data[0].date, value: data[0].close, trend: 'up' }]\r
\r
    for (let i = 1; i < data.length; i++) {\r
      const prev = kagiPoints[kagiPoints.length - 1]\r
      const change = (data[i].close - prev.value) / prev.value\r
\r
      if (prev.trend === 'up' && change >= reversalPct) {\r
        kagiPoints.push({ date: data[i].date, value: data[i].close, trend: 'up' })\r
      } else if (prev.trend === 'down' && change <= -reversalPct) {\r
        kagiPoints.push({ date: data[i].date, value: data[i].close, trend: 'down' })\r
      } else if (prev.trend === 'up' && change <= -reversalPct) {\r
        kagiPoints.push({ date: data[i].date, value: data[i].close, trend: 'down' })\r
      } else if (prev.trend === 'down' && change >= reversalPct) {\r
        kagiPoints.push({ date: data[i].date, value: data[i].close, trend: 'up' })\r
      }\r
    }\r
\r
    const x = d3.scaleBand()\r
      .domain(kagiPoints.map((d, i) => i.toString()))\r
      .range([0, IW])\r
      .padding(0.1)\r
\r
    const y = d3.scaleLinear()\r
      .domain([d3.min(kagiPoints, d => d.value) - 3, d3.max(kagiPoints, d => d.value) + 3])\r
      .range([IH, 0])\r
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
    // Draw Kagi lines\r
    kagiPoints.forEach((d, i) => {\r
      const cx = x(i.toString()) + x.bandwidth() / 2\r
      const cy = y(d.value)\r
      const isUp = d.trend === 'up'\r
\r
      if (i > 0) {\r
        const prev = kagiPoints[i - 1]\r
        const prevCx = x((i - 1).toString()) + x.bandwidth() / 2\r
        const prevCy = y(prev.value)\r
\r
        // Thick line for same direction, thin for reversal\r
        const lineWidth = prev.trend === d.trend ? 3 : 1.5\r
        const lineColor = isUp ? '#10b981' : '#ef4444'\r
\r
        svg.append('line')\r
          .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
          .attr('x1', prevCx).attr('x2', cx)\r
          .attr('y1', prevCy).attr('y2', cy)\r
          .attr('stroke', lineColor)\r
          .attr('stroke-width', lineWidth)\r
      }\r
\r
      // Vertical lines at turns\r
      if (i > 0 && kagiPoints[i - 1].trend !== d.trend) {\r
        const prev = kagiPoints[i - 1]\r
        const prevCx = x((i - 1).toString()) + x.bandwidth() / 2\r
        svg.append('line')\r
          .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
          .attr('x1', prevCx).attr('x2', prevCx)\r
          .attr('y1', y(prev.value)).attr('y2', cy)\r
          .attr('stroke', '#10b981')\r
          .attr('stroke-width', 1)\r
          .attr('stroke-dasharray', '3,3')\r
      }\r
\r
      // Dot at each point\r
      svg.append('circle')\r
        .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
        .attr('cx', cx).attr('cy', cy)\r
        .attr('r', 4)\r
        .attr('fill', isUp ? '#10b981' : '#ef4444')\r
        .attr('stroke', 'white').attr('stroke-width', 1)\r
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
      .text('Kagi Chart - Break Reversal Line')\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text-primary)')\r
      .attr('font-size', '14px')\r
      .attr('font-weight', 'bold')\r
\r
    // Legend\r
    const lg = svg.append('g')\r
      .attr('transform', \`translate(\${M.left + IW - 100},\${M.top + IH + 15})\`)\r
    lg.append('line').attr('x1', 0).attr('x2', 20).attr('y1', 5).attr('y2', 5)\r
      .attr('stroke', '#10b981').attr('stroke-width', 3)\r
    lg.append('text').attr('x', 24).attr('y', 9).text('Up').attr('fill', '#10b981').attr('font-size', '10px')\r
    lg.append('line').attr('x1', 50).attr('x2', 70).attr('y1', 5).attr('y2', 5)\r
      .attr('stroke', '#ef4444').attr('stroke-width', 3)\r
    lg.append('text').attr('x', 74).attr('y', 9).text('Down').attr('fill', '#ef4444').attr('font-size', '10px')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};