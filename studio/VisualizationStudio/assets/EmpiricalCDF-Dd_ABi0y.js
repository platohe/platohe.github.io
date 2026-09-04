var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'empirical-cdf',\r
  title: 'Empirical C D F',\r
  desc: 'Empirical C D F — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'EmpiricalCDF',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","empirical-c-d-f"],\r
}\r
\r
export default function EmpiricalCDF({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"group":"Control","values":[12,15,18,22,25,28,30,32,35,38,42,45,48,52,55,58,62,65,68,72]},{"group":"Treatment","values":[25,32,38,44,49,53,58,62,69,74,80,85,92,98]}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0)\r
      ? customData\r
      : DEFAULT_DATA\r
\r
    const allValues = data.flatMap(d => d.values).sort(d3.ascending)\r
    const x = d3.scaleLinear()\r
      .domain(d3.extent(allValues))\r
      .range([0, IW])\r
\r
    const y = d3.scaleLinear()\r
      .domain([0, 1])\r
      .range([IH, 0])\r
\r
    // Grid\r
    svg.append('g')\r
      .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(-IW).tickPadding(0))\r
      .call((g) => g.select('.domain').remove())\r
      .call((g) => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.5))\r
      .call((g) => g.selectAll('text').remove())\r
      .lower()\r
\r
    // Draw ECDF curves\r
    data.forEach((group, i) => {\r
      const sortedValues = [...group.values].sort(d3.ascending)\r
      const n = sortedValues.length\r
\r
      // Create step function\r
      const steps = sortedValues.map((v, j) => ({\r
        x0: v,\r
        y0: j / n,\r
        x1: v,\r
        y1: (j + 1) / n\r
      }))\r
\r
      // Draw step lines\r
      const line = d3.line()\r
        .x(d => x(d.x0))\r
        .y(d => y(d.y0))\r
        .curve(d3.curveStepAfter)\r
\r
      svg.append('path')\r
        .datum(sortedValues.map((v, j) => ({ x: v, y: j / n })))\r
        .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
        .attr('d', d3.line().x(d => x(d.x)).y(d => y(d.y)).curve(d3.curveStepAfter))\r
        .attr('fill', 'none')\r
        .attr('stroke', colors[i % colors.length])\r
        .attr('stroke-width', 2.5)\r
\r
      // Draw dots at steps\r
      svg.append('g')\r
        .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
        .selectAll('circle')\r
        .data(sortedValues)\r
        .join('circle')\r
        .attr('cx', (d, j) => x(d))\r
        .attr('cy', (d, j) => y((j + 1) / n))\r
        .attr('r', 3)\r
        .attr('fill', colors[i % colors.length])\r
        .attr('opacity', 0.7)\r
    })\r
\r
    // X axis\r
    svg.append('g')\r
      .attr('transform', \`translate(\${M.left},\${M.top + IH})\`)\r
      .call(d3.axisBottom(x).ticks(6).tickSize(0).tickPadding(8))\r
      .call((g) => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call((g) => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    // Y axis\r
    svg.append('g')\r
      .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(0).tickPadding(8))\r
      .call((g) => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call((g) => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    // Axis labels\r
    svg.append('text')\r
      .attr('transform', \`translate(\${M.left + IW / 2},\${M.top + IH + 30})\`)\r
      .text('Value').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').attr('text-anchor', 'middle')\r
\r
    svg.append('text')\r
      .attr('transform', \`translate(12,\${M.top + IH / 2}) rotate(-90)\`)\r
      .text('Empirical CDF').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').attr('text-anchor', 'middle')\r
\r
    // Title\r
    svg.append('text')\r
      .attr('transform', \`translate(\${M.left + IW / 2},\${M.top - 10})\`)\r
      .text('Empirical CDF - Distribution Comparison')\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text-primary)')\r
      .attr('font-size', '14px')\r
      .attr('font-weight', 'bold')\r
\r
    // Legend\r
    const lg = svg.append('g')\r
      .attr('transform', \`translate(\${M.left + IW - 100},\${M.top + IH + 15})\`)\r
    data.forEach((group, i) => {\r
      const yOff = i * 18\r
      lg.append('circle').attr('cx', 6).attr('cy', yOff + 6).attr('r', 4)\r
        .attr('fill', colors[i % colors.length]).attr('opacity', 0.7)\r
      lg.append('text').attr('x', 16).attr('y', yOff + 10)\r
        .text(group.group).attr('fill', 'var(--text-secondary)').attr('font-size', '10px')\r
    })\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};