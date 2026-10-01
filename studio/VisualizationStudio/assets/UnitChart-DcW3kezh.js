var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'unit-chart',\r
  title: 'Unit Chart',\r
  desc: 'Unit Chart — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'UnitChart',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","unit-chart"],\r
}\r
\r
export default function UnitChart({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"category":"Apples","count":45},{"category":"Bananas","count":32},{"category":"Cherries","count":28},{"category":"Dates","count":15},{"category":"Elderberries","count":20}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0)\r
      ? customData\r
      : DEFAULT_DATA\r
\r
    const categories = data.map(d => d.category)\r
    const x = d3.scaleBand()\r
      .domain(categories)\r
      .range([0, IW])\r
      .padding(0.2)\r
\r
    const maxCount = d3.max(data, d => d.count) || 10\r
    const unitSize = Math.min(x.bandwidth() / 5, 6)\r
    const unitsPerRow = Math.max(1, Math.floor(x.bandwidth() / unitSize))\r
\r
    // For each category, draw individual units\r
    data.forEach((d, i) => {\r
      const categoryX = x(d.category)\r
      const categoryWidth = x.bandwidth()\r
      const count = d.count\r
\r
      // Calculate units in a packed layout\r
      const units = []\r
      for (let j = 0; j < count; j++) {\r
        const row = Math.floor(j / unitsPerRow)\r
        const col = j % unitsPerRow\r
        units.push({\r
          x: categoryX + col * unitSize + unitSize / 2,\r
          y: IH - (row + 1) * unitSize - unitSize / 2\r
        })\r
      }\r
\r
      // Draw units as circles\r
      svg.append('g')\r
        .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
        .selectAll('circle')\r
        .data(units)\r
        .join('circle')\r
        .attr('cx', u => u.x)\r
        .attr('cy', u => u.y)\r
        .attr('r', unitSize / 2 - 1)\r
        .attr('fill', colors[i % colors.length])\r
        .attr('fill-opacity', 0.8)\r
        .attr('stroke', colors[i % colors.length])\r
        .attr('stroke-width', 0.5)\r
\r
      // Add count label\r
      svg.append('text')\r
        .attr('transform', \`translate(\${M.left + categoryX + categoryWidth / 2},\${M.top + IH + 20})\`)\r
        .text(count)\r
        .attr('text-anchor', 'middle')\r
        .attr('fill', 'var(--text-primary)')\r
        .attr('font-size', '12px')\r
        .attr('font-weight', 'bold')\r
    })\r
\r
    // X axis\r
    svg.append('g')\r
      .attr('transform', \`translate(\${M.left},\${M.top + IH + 30})\`)\r
      .call(d3.axisBottom(x).tickSize(0).tickPadding(10))\r
      .call((g) => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call((g) => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    // Add title\r
    svg.append('text')\r
      .attr('transform', \`translate(\${M.left + IW / 2},\${M.top - 10})\`)\r
      .text('Unit Chart - Individual Data Points')\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text-primary)')\r
      .attr('font-size', '14px')\r
      .attr('font-weight', 'bold')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}`;export{e as default};