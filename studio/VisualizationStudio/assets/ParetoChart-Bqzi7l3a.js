var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH } from './utils'\r
\r
export const meta = {\r
  id: 'pareto-chart',\r
  title: 'Pareto Chart',\r
  desc: 'Pareto Chart — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'ParetoChart',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","pareto-chart"],\r
}\r
\r
export default function ParetoChart({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"defect":"Broken Screen","count":480},{"defect":"Battery Drain","count":290},{"defect":"Button Jam","count":120},{"defect":"Overheating","count":65},{"defect":"Camera Blur","count":40},{"defect":"Audio Noise","count":25},{"defect":"Other","count":15}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const rawData = (Array.isArray(customData) && customData.length > 0)\r
      ? customData\r
      : DEFAULT_DATA\r
\r
    // Sort descending\r
    const sorted = [...rawData].sort((a, b) => (b.count || 0) - (a.count || 0))\r
    const total = d3.sum(sorted, d => d.count || 0) || 1\r
\r
    let cum = 0\r
    const data = sorted.map(d => {\r
      cum += (d.count || 0)\r
      return {\r
        ...d,\r
        cumPct: (cum / total) * 100,\r
      }\r
    })\r
\r
    const x = d3.scaleBand()\r
      .domain(data.map(d => d.defect))\r
      .range([0, IW])\r
      .padding(0.3)\r
\r
    const yLeft = d3.scaleLinear()\r
      .domain([0, (d3.max(data, d => d.count) || 100) * 1.1])\r
      .range([IH, 0])\r
\r
    const yRight = d3.scaleLinear()\r
      .domain([0, 100])\r
      .range([IH, 0])\r
\r
    const g = svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
\r
    // Left Axis (Counts)\r
    g.append('g')\r
      .call(d3.axisLeft(yLeft).ticks(5).tickSize(-IW).tickPadding(6))\r
      .call(gr => gr.select('.domain').remove())\r
      .call(gr => gr.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-dasharray', '2,2').attr('stroke-opacity', 0.4))\r
      .call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '7px'))\r
\r
    // Right Axis (Cumulative %)\r
    g.append('g')\r
      .attr('transform', \`translate(\${IW},0)\`)\r
      .call(d3.axisRight(yRight).ticks(5).tickFormat(d => \`\${d}%\`).tickPadding(6))\r
      .call(gr => gr.select('.domain').remove())\r
      .call(gr => gr.selectAll('text').attr('fill', '#ef4444').attr('font-size', '7px'))\r
\r
    // X Axis\r
    g.append('g')\r
      .attr('transform', \`translate(0,\${IH})\`)\r
      .call(d3.axisBottom(x).tickPadding(6))\r
      .call(gr => gr.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '6.5px'))\r
\r
    // 80% Threshold Line\r
    g.append('line')\r
      .attr('x1', 0).attr('x2', IW)\r
      .attr('y1', yRight(80)).attr('y2', yRight(80))\r
      .attr('stroke', '#ef4444')\r
      .attr('stroke-dasharray', '3,3')\r
      .attr('stroke-width', 1.2)\r
\r
    g.append('text')\r
      .attr('x', 4)\r
      .attr('y', yRight(80) - 4)\r
      .attr('fill', '#ef4444')\r
      .attr('font-size', '6.5px')\r
      .attr('font-weight', '600')\r
      .text('80% Cutoff')\r
\r
    // Bars\r
    g.selectAll('rect')\r
      .data(data)\r
      .join('rect')\r
      .attr('x', d => x(d.defect))\r
      .attr('y', d => yLeft(d.count))\r
      .attr('width', x.bandwidth())\r
      .attr('height', d => IH - yLeft(d.count))\r
      .attr('fill', '#6366f1')\r
      .attr('rx', 2.5)\r
\r
    // Cumulative Line\r
    const lineGen = d3.line()\r
      .x(d => x(d.defect) + x.bandwidth() / 2)\r
      .y(d => yRight(d.cumPct))\r
\r
    g.append('path')\r
      .datum(data)\r
      .attr('fill', 'none')\r
      .attr('stroke', '#ef4444')\r
      .attr('stroke-width', 2.2)\r
      .attr('d', lineGen)\r
\r
    // Cumulative Points\r
    g.selectAll('.cum-dot')\r
      .data(data)\r
      .join('circle')\r
      .attr('cx', d => x(d.defect) + x.bandwidth() / 2)\r
      .attr('cy', d => yRight(d.cumPct))\r
      .attr('r', 3.5)\r
      .attr('fill', '#ef4444')\r
      .attr('stroke', '#ffffff')\r
      .attr('stroke-width', 1)\r
\r
    // Header\r
    svg.append('text')\r
      .attr('x', 14)\r
      .attr('y', 16)\r
      .attr('fill', 'var(--text-primary)')\r
      .attr('font-size', '8.5px')\r
      .attr('font-weight', '600')\r
      .text('Pareto Chart (80/20 Defect Analysis)')\r
  }, [customData])\r
\r
  return (\r
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\r
      <svg ref={ref} viewBox={\`0 0 \${W} \${H}\`} style={{ width: '100%', height: '100%', maxWidth: '500px' }} />\r
    </div>\r
  )\r
}\r
`;export{e as default};