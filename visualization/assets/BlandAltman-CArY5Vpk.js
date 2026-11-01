var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH } from './utils'\r
\r
export const meta = {\r
  id: 'bland-altman',\r
  title: 'Bland Altman',\r
  desc: 'Bland Altman — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'BlandAltman',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","bland-altman"],\r
}\r
\r
export default function BlandAltman({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"methodA":102,"methodB":100},{"methodA":110,"methodB":108},{"methodA":115,"methodB":118},{"methodA":125,"methodB":122},{"methodA":130,"methodB":135},{"methodA":142,"methodB":140},{"methodA":155,"methodB":150},{"methodA":160,"methodB":164},{"methodA":172,"methodB":168},{"methodA":180,"methodB":185},{"methodA":195,"methodB":190},{"methodA":210,"methodB":206},{"methodA":220,"methodB":228},{"methodA":235,"methodB":230}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0)\r
      ? customData\r
      : DEFAULT_DATA\r
\r
    const points = data.map((d, i) => {\r
      const a = d.methodA ?? d.a ?? 100\r
      const b = d.methodB ?? d.b ?? 100\r
      return {\r
        id: i,\r
        mean: (a + b) / 2,\r
        diff: a - b,\r
      }\r
    })\r
\r
    const diffs = points.map(d => d.diff)\r
    const meanDiff = d3.mean(diffs) || 0\r
    const sdDiff = d3.deviation(diffs) || 1\r
    const upperLimit = meanDiff + 1.96 * sdDiff\r
    const lowerLimit = meanDiff - 1.96 * sdDiff\r
\r
    const x = d3.scaleLinear()\r
      .domain([d3.min(points, d => d.mean) * 0.95, d3.max(points, d => d.mean) * 1.05])\r
      .range([0, IW])\r
\r
    const yMax = Math.max(Math.abs(upperLimit), Math.abs(lowerLimit), d3.max(points, d => Math.abs(d.diff)) || 10) * 1.25\r
    const y = d3.scaleLinear()\r
      .domain([-yMax, yMax])\r
      .range([IH, 0])\r
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
    // Zero Line\r
    g.append('line')\r
      .attr('x1', 0).attr('x2', IW).attr('y1', y(0)).attr('y2', y(0))\r
      .attr('stroke', 'var(--text-secondary)').attr('stroke-opacity', 0.4)\r
\r
    // Agreement limit shaded band\r
    g.append('rect')\r
      .attr('x', 0)\r
      .attr('y', y(upperLimit))\r
      .attr('width', IW)\r
      .attr('height', y(lowerLimit) - y(upperLimit))\r
      .attr('fill', 'rgba(99, 102, 241, 0.08)')\r
\r
    // Mean Difference Line\r
    g.append('line')\r
      .attr('x1', 0).attr('x2', IW).attr('y1', y(meanDiff)).attr('y2', y(meanDiff))\r
      .attr('stroke', '#6366f1').attr('stroke-width', 1.8)\r
\r
    g.append('text')\r
      .attr('x', IW - 4).attr('y', y(meanDiff) - 4)\r
      .attr('text-anchor', 'end').attr('fill', '#6366f1').attr('font-size', '6.5px').attr('font-weight', '600')\r
      .text(\`Mean: \${meanDiff >= 0 ? '+' : ''}\${meanDiff.toFixed(1)}\`)\r
\r
    // Upper Limit Line (+1.96 SD)\r
    g.append('line')\r
      .attr('x1', 0).attr('x2', IW).attr('y1', y(upperLimit)).attr('y2', y(upperLimit))\r
      .attr('stroke', '#ef4444').attr('stroke-width', 1.2).attr('stroke-dasharray', '3,3')\r
\r
    g.append('text')\r
      .attr('x', IW - 4).attr('y', y(upperLimit) - 4)\r
      .attr('text-anchor', 'end').attr('fill', '#ef4444').attr('font-size', '6px')\r
      .text(\`+1.96 SD: \${upperLimit.toFixed(1)}\`)\r
\r
    // Lower Limit Line (-1.96 SD)\r
    g.append('line')\r
      .attr('x1', 0).attr('x2', IW).attr('y1', y(lowerLimit)).attr('y2', y(lowerLimit))\r
      .attr('stroke', '#ef4444').attr('stroke-width', 1.2).attr('stroke-dasharray', '3,3')\r
\r
    g.append('text')\r
      .attr('x', IW - 4).attr('y', y(lowerLimit) + 9)\r
      .attr('text-anchor', 'end').attr('fill', '#ef4444').attr('font-size', '6px')\r
      .text(\`-1.96 SD: \${lowerLimit.toFixed(1)}\`)\r
\r
    // Scatter points\r
    g.selectAll('circle')\r
      .data(points)\r
      .join('circle')\r
      .attr('cx', d => x(d.mean))\r
      .attr('cy', d => y(d.diff))\r
      .attr('r', 3.8)\r
      .attr('fill', '#38bdf8')\r
      .attr('stroke', '#0f172a')\r
      .attr('stroke-width', 1)\r
\r
    // Header\r
    svg.append('text')\r
      .attr('x', 14)\r
      .attr('y', 16)\r
      .attr('fill', 'var(--text-primary)')\r
      .attr('font-size', '8.5px')\r
      .attr('font-weight', '600')\r
      .text('Bland-Altman Agreement Plot')\r
  }, [customData])\r
\r
  return (\r
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\r
      <svg ref={ref} viewBox={\`0 0 \${W} \${H}\`} style={{ width: '100%', height: '100%', maxWidth: '500px' }} />\r
    </div>\r
  )\r
}\r
`;export{e as default};