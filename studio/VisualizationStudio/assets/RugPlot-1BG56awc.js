var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'rug-plot',\r
  title: 'Rug Plot',\r
  desc: 'Rug Plot — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'RugPlot',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","rug-plot"],\r
}\r
\r
export default function RugPlot({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [65.032,84.543,41.021,48.889,81.375,52.637,70.884,41.85,73.409,29.646,71.264,56.17,37.253,46.812,52.363,47.234,65.445,48.166,23.274,65.331,47.624,38.643,81.492,54.564,42.912,37.679,74.708,77.43,85.247,79.284,26.973,51.261,74.706,39.047,81.657,65.988,67.657,47.148,72.09,57.608,52.143,53.966,46.708,84.489,97.445,56.818,39.773,68.069,85.252,35.126,71.917,81.933,76.56,41.648,42.9,44.295,75.472,55.431,46.205,79.216,35.32,75.634,78.67,66.021,31.991,76.501,42.999,40.778,53.124,74.112,33.249,59.508,52.368,58.824,50.633,80.285,61.933,64.568,40.632,44.338]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
\r
    const x = d3.scaleLinear().domain(d3.extent(data)).range([0, IW])\r
    const y = d3.scaleLinear().domain([0, d3.max(data) * 1.3]).range([IH, 0])\r
\r
    // KDE density\r
    const bins = d3.histogram().domain(x.domain()).thresholds(30)(data)\r
    const maxDensity = d3.max(bins, b => b.length) || 1\r
    const densityPath = 'M' + bins.map((b, i) =>\r
      \`\${x((b.x0 + b.x1) / 2)},\${y(b.length / maxDensity * d3.max(data) * 0.8)}\`\r
    ).join('L')\r
    svg.append('path').attr('d', densityPath + \` L\${x(bins[bins.length-1].x1)},\${y(0)} L\${x(bins[0].x0)},\${y(0)} Z\`)\r
      .attr('fill', colors[0]).attr('fill-opacity', 0.2).attr('stroke', colors[0]).attr('stroke-width', 1.5)\r
\r
    // Rug ticks\r
    data.forEach(v => {\r
      svg.append('line').attr('x1', x(v)).attr('x2', x(v))\r
        .attr('y1', IH - 30).attr('y2', IH - 10)\r
        .attr('stroke', colors[1]).attr('stroke-width', 1).attr('opacity', 0.5)\r
    })\r
\r
    // Axis\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top + IH - 10})\`)\r
      .call(d3.axisBottom(x).ticks(6).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top + IH + 8})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text('Value')\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top - 10})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '14px').attr('font-weight', 'bold').text('Rug Plot with Density')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};