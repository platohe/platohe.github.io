var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'cleveland-dot-plot',\r
  title: 'Cleveland Dot Plot',\r
  desc: 'Cleveland Dot Plot — a dots chart visualization',\r
  category: 'Dots',\r
  component: 'ClevelandDotPlot',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["dots","cleveland-dot-plot"],\r
}\r
\r
export default function ClevelandDotPlot({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"label":"JavaScript","value":95,"baseline":88},{"label":"Python","value":92,"baseline":85},{"label":"TypeScript","value":88,"baseline":78},{"label":"Go","value":82,"baseline":70},{"label":"Rust","value":78,"baseline":65},{"label":"Java","value":75,"baseline":80},{"label":"C++","value":70,"baseline":75},{"label":"Ruby","value":55,"baseline":60}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0)\r
      ? customData\r
      : DEFAULT_DATA\r
\r
    const x = d3.scaleLinear()\r
      .domain([0, d3.max(data, d => Math.max(d.value, d.baseline)) * 1.1])\r
      .range([0, IW])\r
\r
    const y = d3.scaleBand()\r
      .domain(data.map(d => d.label))\r
      .range([0, IH])\r
      .padding(0.5)\r
\r
    // Grid\r
    svg.append('g')\r
      .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).tickSize(0).tickPadding(10))\r
      .call((g) => g.select('.domain').remove())\r
      .call((g) => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    svg.append('g')\r
      .attr('transform', \`translate(\${M.left},\${M.top + IH})\`)\r
      .call(d3.axisBottom(x).ticks(6).tickSize(0).tickPadding(8))\r
      .call((g) => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call((g) => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    // Vertical grid lines\r
    x.ticks(6).forEach(t => {\r
      svg.append('line')\r
        .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
        .attr('x1', x(t)).attr('x2', x(t))\r
        .attr('y1', 0).attr('y2', IH)\r
        .attr('stroke', 'var(--border)').attr('stroke-opacity', 0.3)\r
    })\r
\r
    // Draw dots and lines\r
    data.forEach((d, i) => {\r
      const cy = y(d.label) + y.bandwidth() / 2\r
      const color = colors[i % colors.length]\r
\r
      // Connecting line\r
      svg.append('line')\r
        .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
        .attr('x1', x(d.baseline)).attr('x2', x(d.value))\r
        .attr('y1', cy).attr('y2', cy)\r
        .attr('stroke', color).attr('stroke-width', 2).attr('stroke-opacity', 0.6)\r
\r
      // Baseline dot\r
      svg.append('circle')\r
        .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
        .attr('cx', x(d.baseline)).attr('cy', cy)\r
        .attr('r', 5).attr('fill', 'white').attr('stroke', color).attr('stroke-width', 2)\r
\r
      // Current dot\r
      svg.append('circle')\r
        .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
        .attr('cx', x(d.value)).attr('cy', cy)\r
        .attr('r', 6).attr('fill', color).attr('stroke', 'white').attr('stroke-width', 1.5)\r
\r
      // Value label\r
      svg.append('text')\r
        .attr('transform', \`translate(\${M.left + x(d.value) + 8},\${M.top + cy + 4})\`)\r
        .text(d.value)\r
        .attr('fill', color).attr('font-size', '10px').attr('font-weight', 'bold')\r
    })\r
\r
    // Title\r
    svg.append('text')\r
      .attr('transform', \`translate(\${M.left + IW / 2},\${M.top - 10})\`)\r
      .text('Cleveland Dot Plot - Comparative Rankings')\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text-primary)')\r
      .attr('font-size', '14px')\r
      .attr('font-weight', 'bold')\r
\r
    // Legend\r
    const lg = svg.append('g')\r
      .attr('transform', \`translate(\${M.left + IW - 110},\${M.top + IH + 15})\`)\r
    lg.append('circle').attr('cx', 6).attr('cy', 5).attr('r', 5).attr('fill', 'white').attr('stroke', colors[0]).attr('stroke-width', 2)\r
    lg.append('text').attr('x', 16).attr('y', 9).text('Baseline').attr('fill', 'var(--text-secondary)').attr('font-size', '10px')\r
    lg.append('circle').attr('cx', 62).attr('cy', 5).attr('r', 5).attr('fill', colors[0]).attr('stroke', 'white').attr('stroke-width', 1.5)\r
    lg.append('text').attr('x', 72).attr('y', 9).text('Current').attr('fill', 'var(--text-secondary)').attr('font-size', '10px')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};