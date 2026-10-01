var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'marginal-scatter',\r
  title: 'Marginal Scatter',\r
  desc: 'Marginal Scatter — a dots chart visualization',\r
  category: 'Dots',\r
  component: 'MarginalScatter',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["dots","marginal-scatter"],\r
}\r
\r
export default function MarginalScatter({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"x":30,"y":63},{"x":44,"y":59},{"x":50,"y":41},{"x":72,"y":59},{"x":70,"y":81},{"x":100,"y":115},{"x":91,"y":91},{"x":127,"y":97},{"x":112,"y":91},{"x":44,"y":64},{"x":27,"y":60},{"x":69,"y":72},{"x":51,"y":39},{"x":92,"y":78},{"x":76,"y":90},{"x":115,"y":125},{"x":102,"y":95},{"x":136,"y":102},{"x":22,"y":27},{"x":49,"y":71},{"x":49,"y":74},{"x":69,"y":67},{"x":78,"y":58},{"x":88,"y":80},{"x":106,"y":116},{"x":108,"y":117},{"x":134,"y":113},{"x":21,"y":15},{"x":53,"y":56},{"x":42,"y":69},{"x":79,"y":94},{"x":64,"y":58},{"x":105,"y":79},{"x":87,"y":84},{"x":129,"y":135},{"x":111,"y":116},{"x":44,"y":41},{"x":29,"y":23},{"x":66,"y":71},{"x":56,"y":81},{"x":87,"y":95},{"x":83,"y":68},{"x":107,"y":83},{"x":111,"y":107},{"x":127,"y":135}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const rawData = (Array.isArray(customData) && customData.length > 0)\r
      ? customData\r
      : DEFAULT_DATA\r
\r
    const width = W\r
    const height = H\r
\r
    const margin = { top: 60, right: 60, bottom: 35, left: 40 }\r
    const mainW = width - margin.left - margin.right\r
    const mainH = height - margin.top - margin.bottom\r
    const marginalSize = 35\r
\r
    const xExt = d3.extent(rawData, d => d.x)\r
    const yExt = d3.extent(rawData, d => d.y)\r
\r
    const x = d3.scaleLinear()\r
      .domain([xExt[0] - 5, xExt[1] + 5])\r
      .range([0, mainW])\r
\r
    const y = d3.scaleLinear()\r
      .domain([yExt[0] - 5, yExt[1] + 5])\r
      .range([mainH, 0])\r
\r
    const g = svg.append('g').attr('transform', \`translate(\${margin.left},\${margin.top})\`)\r
\r
    // Main Scatter Axes\r
    g.append('g')\r
      .call(d3.axisLeft(y).ticks(5).tickSize(-mainW).tickPadding(6))\r
      .call(gr => gr.select('.domain').remove())\r
      .call(gr => gr.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-dasharray', '2,2').attr('stroke-opacity', 0.4))\r
      .call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '7px'))\r
\r
    g.append('g')\r
      .attr('transform', \`translate(0,\${mainH})\`)\r
      .call(d3.axisBottom(x).ticks(6).tickSize(-mainH).tickPadding(6))\r
      .call(gr => gr.select('.domain').remove())\r
      .call(gr => gr.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-dasharray', '2,2').attr('stroke-opacity', 0.4))\r
      .call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '7px'))\r
\r
    // Main Scatter Points\r
    g.selectAll('circle')\r
      .data(rawData)\r
      .join('circle')\r
      .attr('cx', d => x(d.x))\r
      .attr('cy', d => y(d.y))\r
      .attr('r', 3.8)\r
      .attr('fill', '#38bdf8')\r
      .attr('stroke', '#0284c7')\r
      .attr('stroke-width', 1)\r
      .attr('fill-opacity', 0.85)\r
\r
    // Top Marginal Histogram (X Distribution)\r
    const xBins = d3.bin().value(d => d.x).domain(x.domain()).thresholds(10)(rawData)\r
    const yTopHist = d3.scaleLinear()\r
      .domain([0, d3.max(xBins, d => d.length) || 1])\r
      .range([marginalSize, 0])\r
\r
    const topG = g.append('g').attr('transform', \`translate(0, -\${marginalSize + 6})\`)\r
    topG.selectAll('rect')\r
      .data(xBins)\r
      .join('rect')\r
      .attr('x', d => x(d.x0) + 1)\r
      .attr('y', d => yTopHist(d.length))\r
      .attr('width', d => Math.max(0, x(d.x1) - x(d.x0) - 2))\r
      .attr('height', d => marginalSize - yTopHist(d.length))\r
      .attr('fill', '#6366f1')\r
      .attr('fill-opacity', 0.6)\r
      .attr('rx', 1.5)\r
\r
    // Right Marginal Histogram (Y Distribution)\r
    const yBins = d3.bin().value(d => d.y).domain(y.domain()).thresholds(10)(rawData)\r
    const xRightHist = d3.scaleLinear()\r
      .domain([0, d3.max(yBins, d => d.length) || 1])\r
      .range([0, marginalSize])\r
\r
    const rightG = g.append('g').attr('transform', \`translate(\${mainW + 6}, 0)\`)\r
    rightG.selectAll('rect')\r
      .data(yBins)\r
      .join('rect')\r
      .attr('x', 0)\r
      .attr('y', d => y(d.x1) + 1)\r
      .attr('width', d => xRightHist(d.length))\r
      .attr('height', d => Math.max(0, y(d.x0) - y(d.x1) - 2))\r
      .attr('fill', '#ec4899')\r
      .attr('fill-opacity', 0.6)\r
      .attr('rx', 1.5)\r
\r
    // Header\r
    svg.append('text')\r
      .attr('x', 14)\r
      .attr('y', 18)\r
      .attr('fill', 'var(--text-primary)')\r
      .attr('font-size', '8.5px')\r
      .attr('font-weight', '600')\r
      .text('Scatterplot with Marginal Histograms')\r
  }, [customData])\r
\r
  return (\r
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\r
      <svg ref={ref} viewBox={\`0 0 \${W} \${H}\`} style={{ width: '100%', height: '100%', maxWidth: '500px' }} />\r
    </div>\r
  )\r
}\r
`;export{e as default};