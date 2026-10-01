var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from '../charts/utils'\r
\r
export const meta = {\r
  id: 'hdrbox-plot',\r
  title: 'H D R Box Plot',\r
  desc: 'H D R Box Plot — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'HDRBoxPlot',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","h-d-r-box-plot"],\r
}\r
\r
export default function HDRBoxPlot({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = {\r
    groups: [\r
      { name: 'Normal', data: d3.range(100).map(() => d3.randomNormal(0, 1)()) },\r
      { name: 'Bimodal', data: d3.range(100).map((i) => (i % 2 === 0 ? d3.randomNormal(-2, 0.5)() : d3.randomNormal(2, 0.5)())) },\r
      { name: 'Skewed', data: d3.range(100).map(() => d3.randomLogNormal(0, 1)()) },\r
      { name: 'Heavy-tailed', data: d3.range(100).map(() => d3.randomCauchy(0, 2)()) }\r
    ],\r
    probs: [0.01, 0.025, 0.05, 0.1, 0.25, 0.5, 0.75, 0.9, 0.95, 0.975, 0.99]\r
  }\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const input = (customData && customData.groups) ? customData : DEFAULT_DATA\r
    const { groups, probs } = input\r
\r
    const allValues = groups.flatMap(g => g.data)\r
    const xMin = d3.min(allValues) - 0.5\r
    const xMax = d3.max(allValues) + 0.5\r
\r
    const x = d3.scaleLinear().domain([xMin, xMax]).range([M.left, M.left + IW])\r
    const y = d3.scaleBand()\r
      .domain(groups.map(g => g.name))\r
      .range([M.top, M.top + IH])\r
      .padding(0.4)\r
\r
    const g = svg.append('g')\r
\r
    // Grid\r
    g.append('g')\r
      .attr('transform', \`translate(0,\${M.top + IH})\`)\r
      .call(d3.axisBottom(x).ticks(8).tickSize(-IH).tickPadding(8))\r
      .call(gr => gr.select('.domain').remove())\r
      .call(gr => gr.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-dasharray', '2,2').attr('stroke-opacity', 0.4))\r
      .call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '8px'))\r
\r
    g.append('g')\r
      .attr('transform', \`translate(\${M.left},0)\`)\r
      .call(d3.axisLeft(y).tickSize(0).tickPadding(8))\r
      .call(gr => gr.select('.domain').remove())\r
      .call(gr => gr.selectAll('text').attr('fill', 'var(--text)').attr('font-size', '9px').attr('font-weight', 500))\r
\r
    groups.forEach((group, i) => {\r
      const sorted = [...group.data].sort(d3.ascending)\r
      const n = sorted.length\r
      const fy = y(group.name) + y.bandwidth() / 2\r
      const bandHeight = y.bandwidth() * 0.6\r
\r
      // Compute HDR (Highest Density Regions) using quantile-based approximation\r
      // HDR = shortest intervals containing given probability mass\r
      const quantileVals = probs.map(p => d3.quantile(sorted, p))\r
      \r
      // Draw HDR intervals as nested boxes\r
      for (let j = 0; j < probs.length / 2; j++) {\r
        const lower = quantileVals[j]\r
        const upper = quantileVals[probs.length - 1 - j]\r
        const prob = probs[probs.length - 1 - j] - probs[j]\r
        \r
        if (upper > lower) {\r
          g.append('rect')\r
            .attr('x', x(lower))\r
            .attr('y', fy - bandHeight / 2 * (1 - prob))\r
            .attr('width', Math.max(1, x(upper) - x(lower)))\r
            .attr('height', bandHeight * prob)\r
            .attr('fill', colors[i % colors.length])\r
            .attr('fill-opacity', 0.1 + j * 0.08)\r
            .attr('stroke', colors[i % colors.length])\r
            .attr('stroke-width', 1)\r
        }\r
      }\r
\r
      // Median line\r
      g.append('line')\r
        .attr('x1', x(quantileVals[5]))  // 0.5 quantile\r
        .attr('x2', x(quantileVals[5]))\r
        .attr('y1', fy - bandHeight / 2)\r
        .attr('y2', fy + bandHeight / 2)\r
        .attr('stroke', 'white')\r
        .attr('stroke-width', 2)\r
\r
      // Mean marker\r
      const mean = d3.mean(sorted)\r
      g.append('circle')\r
        .attr('cx', x(mean))\r
        .attr('cy', fy)\r
        .attr('r', 4)\r
        .attr('fill', colors[i % colors.length])\r
        .attr('stroke', 'white')\r
        .attr('stroke-width', 1.5)\r
    })\r
\r
    // Legend for HDR intervals\r
    const legend = g.append('g')\r
      .attr('transform', \`translate(\${M.left + IW - 180}, \${M.top})\`)\r
\r
    const probsDisplay = probs.slice(0, 5).reverse()\r
    probsDisplay.forEach((p, j) => {\r
      const yPos = j * 18\r
      legend.append('rect')\r
        .attr('x', 0).attr('y', yPos - 4)\r
        .attr('width', 14).attr('height', 8)\r
        .attr('fill', '#6366f1')\r
        .attr('fill-opacity', 0.15 + j * 0.12)\r
        .attr('stroke', '#6366f1').attr('stroke-width', 1)\r
      legend.append('text')\r
        .attr('x', 18).attr('y', yPos + 3)\r
        .attr('fill', 'var(--text-secondary)')\r
        .attr('font-size', '7px')\r
        .text(\`\${Math.round(p * 100)}% HDR\`)\r
    })\r
\r
    legend.append('circle')\r
      .attr('cx', 7).attr('cy', 90)\r
      .attr('r', 4)\r
      .attr('fill', '#6366f1')\r
      .attr('stroke', 'white').attr('stroke-width', 1.5)\r
    legend.append('text')\r
      .attr('x', 18).attr('y', 93)\r
      .attr('fill', 'var(--text-secondary)')\r
      .attr('font-size', '7px')\r
      .text('Mean')\r
\r
    legend.append('line')\r
      .attr('x1', 0).attr('x2', 14)\r
      .attr('y1', 104).attr('y2', 104)\r
      .attr('stroke', 'white').attr('stroke-width', 2)\r
    legend.append('text')\r
      .attr('x', 18).attr('y', 107)\r
      .attr('fill', 'var(--text-secondary)')\r
      .attr('font-size', '7px')\r
      .text('Median')\r
\r
    // Title\r
    svg.append('text')\r
      .attr('x', W / 2)\r
      .attr('y', 18)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text-primary)')\r
      .attr('font-size', '10px')\r
      .attr('font-weight', 600)\r
      .text('HDR Box Plot — Highest Density Regions')\r
\r
    svg.append('text')\r
      .attr('x', W - 14)\r
      .attr('y', 18)\r
      .attr('text-anchor', 'end')\r
      .attr('fill', 'var(--text-secondary)')\r
      .attr('font-size', '7px')\r
      .text('Nested intervals = probability mass')\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}`;export{e as default};