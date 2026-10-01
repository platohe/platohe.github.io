var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH } from './utils'\r
\r
export const meta = {\r
  id: 'kde-density',\r
  title: 'Kde Density',\r
  desc: 'Kde Density — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'KdeDensity',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","kde-density"],\r
}\r
\r
export default function KdeDensity({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [12,14,15,18,19,20,22,22,23,24,25,25,26,27,28,29,30,31,32,33,35,36,38,42,45,48,52,55,58,62,65,68,70,72,75]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const rawData = (Array.isArray(customData) && customData.length > 0)\r
      ? customData.map(d => typeof d === 'number' ? d : (d.value ?? 20))\r
      : DEFAULT_DATA\r
\r
    const x = d3.scaleLinear()\r
      .domain([(d3.min(rawData) || 0) - 5, (d3.max(rawData) || 100) + 5])\r
      .range([0, IW])\r
\r
    // Kernel Density Estimator (Epanechnikov or Gaussian)\r
    function kernelDensityEstimator(kernel, X) {\r
      return (V) => X.map(xVal => [xVal, d3.mean(V, v => kernel(xVal - v))])\r
    }\r
\r
    function kernelGaussian(k) {\r
      return (v) => (1 / (k * Math.sqrt(2 * Math.PI))) * Math.exp(-0.5 * (v / k) ** 2)\r
    }\r
\r
    const bandwidth = 6\r
    const xTicks = x.ticks(100)\r
    const kde = kernelDensityEstimator(kernelGaussian(bandwidth), xTicks)\r
    const density = kde(rawData)\r
\r
    const y = d3.scaleLinear()\r
      .domain([0, (d3.max(density, d => d[1]) || 0.05) * 1.2])\r
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
      .call(d3.axisBottom(x).ticks(8).tickSize(-IH).tickPadding(6))\r
      .call(gr => gr.select('.domain').remove())\r
      .call(gr => gr.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-dasharray', '2,2').attr('stroke-opacity', 0.4))\r
      .call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '7px'))\r
\r
    // Density area\r
    const areaGen = d3.area()\r
      .curve(d3.curveBasis)\r
      .x(d => x(d[0]))\r
      .y0(IH)\r
      .y1(d => y(d[1]))\r
\r
    g.append('path')\r
      .datum(density)\r
      .attr('fill', 'rgba(99, 102, 241, 0.22)')\r
      .attr('d', areaGen)\r
\r
    // Density line\r
    const lineGen = d3.line()\r
      .curve(d3.curveBasis)\r
      .x(d => x(d[0]))\r
      .y(d => y(d[1]))\r
\r
    g.append('path')\r
      .datum(density)\r
      .attr('fill', 'none')\r
      .attr('stroke', '#6366f1')\r
      .attr('stroke-width', 2.2)\r
      .attr('d', lineGen)\r
\r
    // Rug plot at bottom\r
    g.selectAll('.rug')\r
      .data(rawData)\r
      .join('line')\r
      .attr('x1', d => x(d))\r
      .attr('x2', d => x(d))\r
      .attr('y1', IH - 6)\r
      .attr('y2', IH)\r
      .attr('stroke', '#ef4444')\r
      .attr('stroke-width', 1.2)\r
      .attr('stroke-opacity', 0.8)\r
\r
    // Header\r
    svg.append('text')\r
      .attr('x', 14)\r
      .attr('y', 16)\r
      .attr('fill', 'var(--text-primary)')\r
      .attr('font-size', '8.5px')\r
      .attr('font-weight', '600')\r
      .text('Kernel Density Estimation (KDE) + Rug')\r
\r
    svg.append('text')\r
      .attr('x', W - 14)\r
      .attr('y', 16)\r
      .attr('text-anchor', 'end')\r
      .attr('fill', 'var(--text-secondary)')\r
      .attr('font-size', '7px')\r
      .text(\`Gaussian Bandwidth = \${bandwidth}\`)\r
  }, [customData])\r
\r
  return (\r
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\r
      <svg ref={ref} viewBox={\`0 0 \${W} \${H}\`} style={{ width: '100%', height: '100%', maxWidth: '500px' }} />\r
    </div>\r
  )\r
}\r
`;export{e as default};