var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'nomogram',\r
  title: 'Nomogram',\r
  desc: 'Nomogram — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'Nomogram',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","nomogram"],\r
}\r
\r
export default function Nomogram({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"variable":"Age","min":30,"max":80,"points":0},{"variable":"BP","min":100,"max":180,"points":20},{"variable":"Cholesterol","min":150,"max":300,"points":40},{"variable":"Glucose","min":70,"max":200,"points":30},{"variable":"BMI","min":18,"max":35,"points":25}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0)\r
      ? customData\r
      : DEFAULT_DATA\r
\r
    const rowCount = data.length\r
    const rowHeight = IH / (rowCount + 1)\r
    const maxPoints = d3.max(data, d => d.points) || 100\r
    const pointsScale = d3.scaleLinear()\r
      .domain([0, maxPoints])\r
      .range([0, IW * 0.6])\r
\r
    // Draw total points scale at top\r
    const topY = M.top + 20\r
    svg.append('line')\r
      .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('x1', IW * 0.3).attr('x2', IW * 0.9)\r
      .attr('y1', topY).attr('y2', topY)\r
      .attr('stroke', 'var(--border)')\r
      .attr('stroke-width', 1)\r
\r
    // Total points scale\r
    svg.append('g')\r
      .attr('transform', \`translate(\${M.left + IW * 0.3},\${topY})\`)\r
      .call(d3.axisTop(d3.scaleLinear().domain([0, maxPoints]).range([0, IW * 0.6])).ticks(5))\r
      .call((g) => g.select('.domain').remove())\r
      .call((g) => g.selectAll('.tick line').attr('stroke', 'var(--border)'))\r
      .call((g) => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '10px'))\r
\r
    svg.append('text')\r
      .attr('transform', \`translate(\${M.left + IW * 0.6},\${topY - 5})\`)\r
      .text('Total Points').attr('fill', 'var(--text-primary)').attr('font-size', '11px').attr('font-weight', 'bold')\r
\r
    // Draw each variable scale\r
    data.forEach((d, i) => {\r
      const y = M.top + rowHeight * (i + 1)\r
\r
      // Variable label\r
      svg.append('text')\r
        .attr('x', M.left - 5)\r
        .attr('y', y + 4)\r
        .attr('text-anchor', 'end')\r
        .attr('fill', 'var(--text-secondary)')\r
        .attr('font-size', '11px')\r
        .text(d.variable)\r
\r
      // Scale line\r
      const startX = IW * 0.3\r
      const endX = IW * 0.3 + ((d.max - d.min) / (data.reduce((sum, dd) => sum + (dd.max - dd.min), 0))) * IW * 0.6\r
      const scaleX = d3.scaleLinear().domain([d.min, d.max]).range([startX, endX])\r
\r
      svg.append('line')\r
        .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
        .attr('x1', scaleX(d.min)).attr('x2', scaleX(d.max))\r
        .attr('y1', y).attr('y2', y)\r
        .attr('stroke', 'var(--border)')\r
        .attr('stroke-width', 1)\r
\r
      // Tick marks and labels\r
      const numTicks = 5\r
      for (let j = 0; j <= numTicks; j++) {\r
        const val = d.min + (d.max - d.min) * j / numTicks\r
        const xPos = scaleX(val)\r
        svg.append('line')\r
          .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
          .attr('x1', xPos).attr('x2', xPos)\r
          .attr('y1', y - 3).attr('y2', y + 3)\r
          .attr('stroke', 'var(--border)')\r
        svg.append('text')\r
          .attr('transform', \`translate(\${M.left + xPos},\${M.top + y + 12})\`)\r
          .attr('text-anchor', 'middle')\r
          .attr('fill', 'var(--text-secondary)')\r
          .attr('font-size', '9px')\r
          .text(Math.round(val))\r
      }\r
\r
      // Points scale for this variable\r
      const pointsForVar = (d.points / maxPoints) * (endX - startX)\r
      svg.append('text')\r
        .attr('transform', \`translate(\${M.left + startX + pointsForVar},\${M.top + y + 25})\`)\r
        .attr('text-anchor', 'middle')\r
        .attr('fill', colors[i % colors.length])\r
        .attr('font-size', '9px')\r
        .attr('font-weight', 'bold')\r
        .text(Math.round(d.points))\r
    })\r
\r
    // Risk scale at bottom\r
    const riskY = M.top + IH - 20\r
    svg.append('line')\r
      .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('x1', IW * 0.3).attr('x2', IW * 0.9)\r
      .attr('y1', riskY).attr('y2', riskY)\r
      .attr('stroke', 'var(--border)')\r
      .attr('stroke-width', 1)\r
\r
    const riskLabels = ['Low', 'Moderate', 'High', 'Very High']\r
    const riskXStart = IW * 0.3\r
    const riskXEnd = IW * 0.9\r
    riskLabels.forEach((label, i) => {\r
      const xPos = riskXStart + (riskXEnd - riskXStart) * (i + 0.5) / riskLabels.length\r
      svg.append('text')\r
        .attr('transform', \`translate(\${M.left + xPos},\${M.top + riskY + 15})\`)\r
        .attr('text-anchor', 'middle')\r
        .attr('fill', 'var(--text-secondary)')\r
        .attr('font-size', '10px')\r
        .text(label)\r
    })\r
\r
    // Title\r
    svg.append('text')\r
      .attr('transform', \`translate(\${M.left + IW / 2},\${M.top - 10})\`)\r
      .text('Nomogram - Risk Prediction Tool')\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text-primary)')\r
      .attr('font-size', '14px')\r
      .attr('font-weight', 'bold')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};