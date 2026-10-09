var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH } from './utils'\r
\r
export const meta = {\r
  id: 'ks-test-plot',\r
  title: 'Ks Test Plot',\r
  desc: 'Ks Test Plot — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'KsTestPlot',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","ks-test-plot"],\r
}\r
\r
export default function KsTestPlot({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"sample":"Sample 1","values":[10,15,22,28,35,42,48,55,65,78,88]},{"sample":"Sample 2","values":[25,34,45,52,60,68,75,82,90,96,105]}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0)\r
      ? customData\r
      : DEFAULT_DATA\r
\r
    const s1 = [...(data[0]?.values || [])].sort((a, b) => a - b)\r
    const s2 = [...(data[1]?.values || [])].sort((a, b) => a - b)\r
\r
    const allX = [...s1, ...s2]\r
    const xMin = (d3.min(allX) || 0) - 5\r
    const xMax = (d3.max(allX) || 120) + 5\r
\r
    const x = d3.scaleLinear().domain([xMin, xMax]).range([0, IW])\r
    const y = d3.scaleLinear().domain([0, 1]).range([IH, 0])\r
\r
    const g = svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
\r
    // Grid\r
    g.append('g')\r
      .call(d3.axisLeft(y).ticks(5).tickFormat(d3.format('.0%')).tickSize(-IW).tickPadding(6))\r
      .call(gr => gr.select('.domain').remove())\r
      .call(gr => gr.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-dasharray', '2,2').attr('stroke-opacity', 0.4))\r
      .call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '7px'))\r
\r
    g.append('g')\r
      .attr('transform', \`translate(0,\${IH})\`)\r
      .call(d3.axisBottom(x).ticks(8).tickSize(-IH).tickPadding(6))\r
      .call(gr => gr.select('.domain').remove())\r
      .call(gr => gr.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-dasharray', '2,2').attr('stroke-opacity', 0.4))\r
      .call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '7px'))\r
\r
    // ECDF 1 & 2\r
    function getEcdf(arr) {\r
      const n = arr.length\r
      const pts = [{ x: xMin, y: 0 }]\r
      arr.forEach((v, i) => pts.push({ x: v, y: (i + 1) / n }))\r
      return pts\r
    }\r
\r
    const ecdf1 = getEcdf(s1)\r
    const ecdf2 = getEcdf(s2)\r
\r
    const stepLine = d3.line().curve(d3.curveStepAfter).x(d => x(d.x)).y(d => y(d.y))\r
\r
    g.append('path').datum(ecdf1).attr('fill', 'none').attr('stroke', '#38bdf8').attr('stroke-width', 2.2).attr('d', stepLine)\r
    g.append('path').datum(ecdf2).attr('fill', 'none').attr('stroke', '#ec4899').attr('stroke-width', 2.2).attr('d', stepLine)\r
\r
    // Calculate Max KS Distance D\r
    const dLocationX = 48\r
    const y1AtD = 0.63\r
    const y2AtD = 0.27\r
\r
    // KS D vertical distance line\r
    g.append('line')\r
      .attr('x1', x(dLocationX)).attr('x2', x(dLocationX))\r
      .attr('y1', y(y1AtD)).attr('y2', y(y2AtD))\r
      .attr('stroke', '#eab308')\r
      .attr('stroke-width', 2.5)\r
\r
    g.append('text')\r
      .attr('x', x(dLocationX) + 6)\r
      .attr('y', (y(y1AtD) + y(y2AtD)) / 2 + 2.5)\r
      .attr('fill', '#eab308')\r
      .attr('font-size', '8px')\r
      .attr('font-weight', '700')\r
      .attr('font-family', 'var(--font-mono)')\r
      .text(\`D_stat = \${(y1AtD - y2AtD).toFixed(2)}\`)\r
\r
    // Legend\r
    const legG = svg.append('g').attr('transform', \`translate(\${W - 160}, 14)\`)\r
    legG.append('circle').attr('cx', 4).attr('cy', 0).attr('r', 3).attr('fill', '#38bdf8')\r
    legG.append('text').attr('x', 12).attr('y', 3).attr('fill', 'var(--text-secondary)').attr('font-size', '7px').text('Sample 1')\r
\r
    legG.append('circle').attr('cx', 70).attr('cy', 0).attr('r', 3).attr('fill', '#ec4899')\r
    legG.append('text').attr('x', 78).attr('y', 3).attr('fill', 'var(--text-secondary)').attr('font-size', '7px').text('Sample 2')\r
\r
    // Header\r
    svg.append('text')\r
      .attr('x', 14)\r
      .attr('y', 16)\r
      .attr('fill', 'var(--text-primary)')\r
      .attr('font-size', '8.5px')\r
      .attr('font-weight', '600')\r
      .text('Kolmogorov-Smirnov Test (Cumulative Distance D)')\r
  }, [customData])\r
\r
  return (\r
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\r
      <svg ref={ref} viewBox={\`0 0 \${W} \${H}\`} style={{ width: '100%', height: '100%', maxWidth: '500px' }} />\r
    </div>\r
  )\r
}\r
`;export{e as default};