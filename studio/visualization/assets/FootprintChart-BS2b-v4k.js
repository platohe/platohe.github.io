var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'footprint-chart',\r
  title: 'Footprint Chart',\r
  desc: 'Footprint Chart — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'FootprintChart',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","footprint-chart"],\r
}\r
\r
export default function FootprintChart({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"candle":1,"price":100,"bidVol":45,"askVol":32,"delta":13},{"candle":2,"price":101,"bidVol":38,"askVol":42,"delta":-4},{"candle":3,"price":102,"bidVol":52,"askVol":48,"delta":4},{"candle":4,"price":103,"bidVol":30,"askVol":55,"delta":-25},{"candle":5,"price":104,"bidVol":48,"askVol":40,"delta":8},{"candle":6,"price":105,"bidVol":55,"askVol":35,"delta":20},{"candle":7,"price":106,"bidVol":42,"askVol":50,"delta":-8},{"candle":8,"price":107,"bidVol":35,"askVol":48,"delta":-13}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0)\r
      ? customData\r
      : DEFAULT_DATA\r
\r
    const candleHeight = IH / data.length\r
    const maxVol = d3.max(data, d => Math.max(d.bidVol, d.askVol)) || 1\r
    const barWidth = IW / 2 - 2\r
\r
    // Draw candles\r
    data.forEach((d, i) => {\r
      const y = i * candleHeight\r
\r
      // Bid volume (left side)\r
      const bidWidth = (d.bidVol / maxVol) * barWidth\r
      svg.append('rect')\r
        .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
        .attr('x', 0).attr('y', y + 2)\r
        .attr('width', bidWidth).attr('height', candleHeight - 4)\r
        .attr('fill', d.delta >= 0 ? colors[2] : colors[1])\r
        .attr('opacity', 0.6)\r
\r
      // Ask volume (right side)\r
      const askWidth = (d.askVol / maxVol) * barWidth\r
      svg.append('rect')\r
        .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
        .attr('x', IW - askWidth).attr('y', y + 2)\r
        .attr('width', askWidth).attr('height', candleHeight - 4)\r
        .attr('fill', d.delta < 0 ? colors[1] : colors[2])\r
        .attr('opacity', 0.6)\r
\r
      // Price label\r
      svg.append('text')\r
        .attr('transform', \`translate(\${M.left + IW + 8},\${M.top + y + candleHeight / 2 + 4})\`)\r
        .attr('dominant-baseline', 'middle')\r
        .attr('fill', 'var(--text-secondary)')\r
        .attr('font-size', '10px')\r
        .text(d.price.toFixed(1))\r
\r
      // Delta label\r
      const deltaColor = d.delta >= 0 ? colors[2] : colors[1]\r
      svg.append('text')\r
        .attr('transform', \`translate(\${M.left + IW / 2},\${M.top + y + candleHeight / 2 + 4})\`)\r
        .attr('text-anchor', 'middle')\r
        .attr('fill', deltaColor)\r
        .attr('font-size', '9px')\r
        .attr('font-weight', 'bold')\r
        .text(d.delta > 0 ? \`+\${d.delta}\` : d.delta)\r
    })\r
\r
    // Divider line\r
    svg.append('line')\r
      .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('x1', IW / 2).attr('x2', IW / 2)\r
      .attr('y1', 0).attr('y2', IH)\r
      .attr('stroke', 'var(--border)').attr('stroke-width', 1).attr('stroke-dasharray', '3,3')\r
\r
    // Title\r
    svg.append('text')\r
      .attr('transform', \`translate(\${M.left + IW / 2},\${M.top - 10})\`)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text-primary)')\r
      .attr('font-size', '14px')\r
      .attr('font-weight', 'bold')\r
      .text('Footprint Chart - Order Flow Visualization')\r
\r
    // Legend\r
    const lg = svg.append('g')\r
      .attr('transform', \`translate(\${M.left + IW - 100},\${M.top + IH + 15})\`)\r
    const legends = [\r
      { color: colors[2], label: 'Buy Dominant' },\r
      { color: colors[1], label: 'Sell Dominant' },\r
    ]\r
    legends.forEach((l, i) => {\r
      const yOff = i * 16\r
      lg.append('rect').attr('width', 12).attr('height', 12).attr('fill', l.color).attr('opacity', 0.6).attr('rx', 2)\r
      lg.append('text').attr('x', 16).attr('y', yOff + 10).text(l.label).attr('fill', 'var(--text-secondary)').attr('font-size', '10px')\r
    })\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};