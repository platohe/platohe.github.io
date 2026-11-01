var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH } from './utils'\r
\r
export const meta = {\r
  id: 'quantile-plot',\r
  title: 'Quantile Plot',\r
  desc: 'Quantile Plot — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'QuantilePlot',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","quantile-plot"],\r
}\r
\r
export default function QuantilePlot({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [-2.4,-1.9,-1.5,-1.2,-0.9,-0.7,-0.5,-0.3,-0.1,0,0.2,0.4,0.6,0.8,1.1,1.3,1.7,2.1,2.6]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const rawData = (Array.isArray(customData) && customData.length > 0)\r
      ? customData.map(d => typeof d === 'number' ? d : d.value ?? 0)\r
      : DEFAULT_DATA\r
\r
    const sorted = [...rawData].sort((a, b) => a - b)\r
    const n = sorted.length\r
\r
    // Theoretical quantiles for standard normal\r
    function probit(p) {\r
      // Approximation for inverse standard normal CDF\r
      return Math.sqrt(2) * (2 * p - 1) * (1 + 0.3 * Math.abs(2 * p - 1))\r
    }\r
\r
    const points = sorted.map((obs, i) => {\r
      const p = (i + 0.5) / n\r
      const theo = probit(p)\r
      return { theo, obs }\r
    })\r
\r
    const xExt = d3.extent(points, d => d.theo)\r
    const yExt = d3.extent(points, d => d.obs)\r
    const minVal = Math.min(xExt[0], yExt[0]) - 0.5\r
    const maxVal = Math.max(xExt[1], yExt[1]) + 0.5\r
\r
    const x = d3.scaleLinear().domain([minVal, maxVal]).range([0, IW])\r
    const y = d3.scaleLinear().domain([minVal, maxVal]).range([IH, 0])\r
\r
    const g = svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
\r
    // Grid\r
    g.append('g')\r
      .call(d3.axisLeft(y).ticks(5).tickSize(-IW).tickPadding(6))\r
      .call(gr => gr.select('.domain').remove())\r
      .call(gr => gr.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-dasharray', '2,2').attr('stroke-opacity', 0.4))\r
      .call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '7px'))\r
\r
    g.append('g')\r
      .attr('transform', \`translate(0,\${IH})\`)\r
      .call(d3.axisBottom(x).ticks(6).tickSize(-IH).tickPadding(6))\r
      .call(gr => gr.select('.domain').remove())\r
      .call(gr => gr.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-dasharray', '2,2').attr('stroke-opacity', 0.4))\r
      .call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '7px'))\r
\r
    // 95% Confidence Envelope\r
    const confPoints = [\r
      [minVal, minVal - 0.6],\r
      [0, -0.3],\r
      [maxVal, maxVal - 0.6],\r
      [maxVal, maxVal + 0.6],\r
      [0, 0.3],\r
      [minVal, minVal + 0.6],\r
    ]\r
\r
    g.append('polygon')\r
      .attr('points', confPoints.map(p => \`\${x(p[0])},\${y(p[1])}\`).join(' '))\r
      .attr('fill', 'rgba(99, 102, 241, 0.12)')\r
\r
    // 45-degree theoretical normal line\r
    g.append('line')\r
      .attr('x1', x(minVal)).attr('y1', y(minVal))\r
      .attr('x2', x(maxVal)).attr('y2', y(maxVal))\r
      .attr('stroke', '#ef4444')\r
      .attr('stroke-width', 1.8)\r
      .attr('stroke-dasharray', '3,3')\r
\r
    // Points\r
    g.selectAll('circle')\r
      .data(points)\r
      .join('circle')\r
      .attr('cx', d => x(d.theo))\r
      .attr('cy', d => y(d.obs))\r
      .attr('r', 3.8)\r
      .attr('fill', '#38bdf8')\r
      .attr('stroke', '#0284c7')\r
      .attr('stroke-width', 1)\r
\r
    // Header\r
    svg.append('text')\r
      .attr('x', 14)\r
      .attr('y', 16)\r
      .attr('fill', 'var(--text-primary)')\r
      .attr('font-size', '8.5px')\r
      .attr('font-weight', '600')\r
      .text('Normal Probability Q-Q Plot with 95% Confidence Envelope')\r
  }, [customData])\r
\r
  return (\r
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\r
      <svg ref={ref} viewBox={\`0 0 \${W} \${H}\`} style={{ width: '100%', height: '100%', maxWidth: '500px' }} />\r
    </div>\r
  )\r
}\r
`;export{e as default};