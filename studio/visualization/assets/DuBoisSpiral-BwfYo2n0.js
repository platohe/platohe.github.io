var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'du-bois-spiral',\r
  title: 'Du Bois Spiral',\r
  desc: 'Du Bois Spiral — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'DuBoisSpiral',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","du-bois-spiral"],\r
}\r
\r
export default function DuBoisSpiral({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"year":1860,"value":100,"label":"1860: $100k"},{"year":1870,"value":250,"label":"1870: $250k"},{"year":1880,"value":450,"label":"1880: $450k"},{"year":1890,"value":750,"label":"1890: $750k"},{"year":1900,"value":1250,"label":"1900: $1.25M"}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0)\r
      ? customData\r
      : DEFAULT_DATA\r
\r
    const width = W\r
    const height = H\r
    const cx = width / 2\r
    const cy = height / 2 + 10\r
\r
    const g = svg.append('g').attr('transform', \`translate(\${cx},\${cy})\`)\r
\r
    // Du Bois iconic modernist palette\r
    const colors = ['#dc2626', '#ca8a04', '#15803d', '#2563eb', '#4f46e5', '#7c3aed']\r
\r
    // Construct Archimedean coil bands\r
    const totalSegments = 120\r
    const turns = 2.4\r
    const a = 14 // starting inner radius\r
    const b = 18 // distance between loops\r
\r
    // Total value to plot\r
    const maxValue = d3.max(data, d => d.value) || 1250\r
\r
    // Draw background spiral track\r
    const points = []\r
    for (let i = 0; i <= totalSegments; i++) {\r
      const theta = (i / totalSegments) * (turns * 2 * Math.PI)\r
      const r = a + b * theta / (2 * Math.PI)\r
      const x = r * Math.cos(theta)\r
      const y = r * Math.sin(theta)\r
      points.push([x, y])\r
    }\r
\r
    const lineGen = d3.line().curve(d3.curveBasis)\r
\r
    // Base background path\r
    g.append('path')\r
      .datum(points)\r
      .attr('d', lineGen)\r
      .attr('fill', 'none')\r
      .attr('stroke', 'var(--border)')\r
      .attr('stroke-opacity', 0.25)\r
      .attr('stroke-width', 16)\r
      .attr('stroke-linecap', 'round')\r
\r
    // Segmented colored coils corresponding to data\r
    let accumulated = 0\r
    data.forEach((d, idx) => {\r
      const prevRatio = accumulated / maxValue\r
      accumulated += d.value\r
      const currentRatio = Math.min(1, accumulated / maxValue)\r
\r
      const startIdx = Math.floor(prevRatio * totalSegments)\r
      const endIdx = Math.ceil(currentRatio * totalSegments)\r
\r
      const subPoints = points.slice(startIdx, endIdx + 1)\r
      if (subPoints.length > 1) {\r
        g.append('path')\r
          .datum(subPoints)\r
          .attr('d', lineGen)\r
          .attr('fill', 'none')\r
          .attr('stroke', colors[idx % colors.length])\r
          .attr('stroke-width', 12)\r
          .attr('stroke-linecap', 'round')\r
          .attr('stroke-linejoin', 'round')\r
\r
        // Label endpoint\r
        const endPt = subPoints[subPoints.length - 1]\r
        g.append('circle')\r
          .attr('cx', endPt[0])\r
          .attr('cy', endPt[1])\r
          .attr('r', 3)\r
          .attr('fill', '#ffffff')\r
          .attr('stroke', colors[idx % colors.length])\r
          .attr('stroke-width', 2)\r
      }\r
    })\r
\r
    // Center badge\r
    g.append('circle')\r
      .attr('cx', 0)\r
      .attr('cy', 0)\r
      .attr('r', 10)\r
      .attr('fill', '#1e293b')\r
      .attr('stroke', '#dc2626')\r
      .attr('stroke-width', 2)\r
\r
    g.append('text')\r
      .attr('x', 0)\r
      .attr('y', 3)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', '#f8fafc')\r
      .attr('font-size', '6.5px')\r
      .attr('font-weight', '700')\r
      .text('0')\r
\r
    // Legend\r
    const legG = svg.append('g').attr('transform', 'translate(14, 16)')\r
    data.forEach((d, i) => {\r
      legG.append('rect')\r
        .attr('x', 0)\r
        .attr('y', i * 14)\r
        .attr('width', 8)\r
        .attr('height', 8)\r
        .attr('rx', 2)\r
        .attr('fill', colors[i % colors.length])\r
\r
      legG.append('text')\r
        .attr('x', 12)\r
        .attr('y', i * 14 + 7)\r
        .attr('fill', 'var(--text-secondary)')\r
        .attr('font-size', '7.5px')\r
        .attr('font-weight', '500')\r
        .text(d.label || \`\${d.year}: \${d.value}\`)\r
    })\r
\r
    // Header\r
    svg.append('text')\r
      .attr('x', W - 14)\r
      .attr('y', 20)\r
      .attr('text-anchor', 'end')\r
      .attr('fill', 'var(--text-primary)')\r
      .attr('font-size', '8.5px')\r
      .attr('font-weight', '600')\r
      .text('Du Bois 1900 Paris Exposition')\r
\r
    svg.append('text')\r
      .attr('x', W - 14)\r
      .attr('y', 31)\r
      .attr('text-anchor', 'end')\r
      .attr('fill', 'var(--text-secondary)')\r
      .attr('font-size', '7px')\r
      .text('Proportional Geometric Coil')\r
  }, [customData])\r
\r
  return (\r
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\r
      <svg ref={ref} viewBox={\`0 0 \${W} \${H}\`} style={{ width: '100%', height: '100%', maxWidth: '500px' }} />\r
    </div>\r
  )\r
}\r
`;export{e as default};