var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'up-set-plot',\r
  title: 'Up Set Plot',\r
  desc: 'Up Set Plot — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'UpSetPlot',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","up-set-plot"],\r
}\r
\r
export default function UpSetPlot({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"sets":["A","B","C"],"size":45},{"sets":["A","B"],"size":120},{"sets":["A","C"],"size":75},{"sets":["B","C"],"size":90},{"sets":["A"],"size":210},{"sets":["B"],"size":160},{"sets":["C"],"size":140}]\r
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
\r
    const setsList = ['A', 'B', 'C']\r
    const nSets = setsList.length\r
    const nCombs = data.length\r
\r
    const margin = { top: 35, right: 25, bottom: 85, left: 65 }\r
    const plotW = width - margin.left - margin.right\r
    const barH = height - margin.top - margin.bottom\r
    const matrixH = 65\r
\r
    const x = d3.scaleBand()\r
      .domain(data.map((_, i) => i))\r
      .range([margin.left, margin.left + plotW])\r
      .padding(0.3)\r
\r
    const y = d3.scaleLinear()\r
      .domain([0, (d3.max(data, d => d.size) || 100) * 1.15])\r
      .range([margin.top + barH, margin.top])\r
\r
    // Upper Intersection Size Bars\r
    svg.append('g')\r
      .selectAll('rect')\r
      .data(data)\r
      .join('rect')\r
      .attr('x', (_, i) => x(i))\r
      .attr('y', d => y(d.size))\r
      .attr('width', x.bandwidth())\r
      .attr('height', d => margin.top + barH - y(d.size))\r
      .attr('fill', '#6366f1')\r
      .attr('rx', 2.5)\r
\r
    // Bar value labels\r
    svg.append('g')\r
      .selectAll('text')\r
      .data(data)\r
      .join('text')\r
      .attr('x', (_, i) => x(i) + x.bandwidth() / 2)\r
      .attr('y', d => y(d.size) - 4)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text-secondary)')\r
      .attr('font-size', '6.5px')\r
      .attr('font-family', 'var(--font-mono)')\r
      .text(d => d.size)\r
\r
    // Y Axis\r
    svg.append('g')\r
      .attr('transform', \`translate(\${margin.left},0)\`)\r
      .call(d3.axisLeft(y).ticks(4).tickSize(-plotW).tickPadding(6))\r
      .call(g => g.select('.domain').remove())\r
      .call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-dasharray', '2,2').attr('stroke-opacity', 0.4))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '7px'))\r
\r
    // Lower Matrix Area\r
    const matrixYTop = margin.top + barH + 18\r
    const setY = d3.scalePoint()\r
      .domain(setsList)\r
      .range([matrixYTop, matrixYTop + matrixH - 12])\r
      .padding(0.2)\r
\r
    // Set row labels\r
    setsList.forEach(s => {\r
      svg.append('text')\r
        .attr('x', margin.left - 10)\r
        .attr('y', setY(s) + 3)\r
        .attr('text-anchor', 'end')\r
        .attr('fill', 'var(--text-primary)')\r
        .attr('font-size', '8px')\r
        .attr('font-weight', '600')\r
        .text(\`Set \${s}\`)\r
    })\r
\r
    // Matrix dots & connection lines\r
    data.forEach((d, colIdx) => {\r
      const cx = x(colIdx) + x.bandwidth() / 2\r
      const activeSets = d.sets || []\r
\r
      // Background gray dots for all sets\r
      setsList.forEach(s => {\r
        svg.append('circle')\r
          .attr('cx', cx)\r
          .attr('cy', setY(s))\r
          .attr('r', 4)\r
          .attr('fill', 'var(--border)')\r
          .attr('fill-opacity', 0.4)\r
      })\r
\r
      // Vertical connecting line between active sets\r
      const activeYPositions = activeSets.map(s => setY(s)).filter(val => val != null)\r
      if (activeYPositions.length > 1) {\r
        const minY = d3.min(activeYPositions)\r
        const maxY = d3.max(activeYPositions)\r
        svg.append('line')\r
          .attr('x1', cx).attr('x2', cx)\r
          .attr('y1', minY).attr('y2', maxY)\r
          .attr('stroke', '#38bdf8')\r
          .attr('stroke-width', 2.5)\r
      }\r
\r
      // Active blue dots\r
      activeSets.forEach(s => {\r
        if (setY(s) != null) {\r
          svg.append('circle')\r
            .attr('cx', cx)\r
            .attr('cy', setY(s))\r
            .attr('r', 4.5)\r
            .attr('fill', '#38bdf8')\r
        }\r
      })\r
    })\r
\r
    // Header\r
    svg.append('text')\r
      .attr('x', 14)\r
      .attr('y', 16)\r
      .attr('fill', 'var(--text-primary)')\r
      .attr('font-size', '8.5px')\r
      .attr('font-weight', '600')\r
      .text('UpSet Plot (Set Intersections Matrix)')\r
  }, [customData])\r
\r
  return (\r
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\r
      <svg ref={ref} viewBox={\`0 0 \${W} \${H}\`} style={{ width: '100%', height: '100%', maxWidth: '500px' }} />\r
    </div>\r
  )\r
}\r
`;export{e as default};