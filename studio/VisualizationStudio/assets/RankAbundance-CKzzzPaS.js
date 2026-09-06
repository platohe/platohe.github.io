var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'rank-abundance',\r
  title: 'Rank Abundance',\r
  desc: 'Rank Abundance — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'RankAbundance',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","rank-abundance"],\r
}\r
\r
export default function RankAbundance({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"rank":1,"abundance":103},{"rank":2,"abundance":76},{"rank":3,"abundance":59},{"rank":4,"abundance":44},{"rank":5,"abundance":31},{"rank":6,"abundance":25},{"rank":7,"abundance":18},{"rank":8,"abundance":15},{"rank":9,"abundance":13},{"rank":10,"abundance":9},{"rank":11,"abundance":6},{"rank":12,"abundance":8},{"rank":13,"abundance":6},{"rank":14,"abundance":4},{"rank":15,"abundance":2},{"rank":16,"abundance":4},{"rank":17,"abundance":4},{"rank":18,"abundance":4},{"rank":19,"abundance":0},{"rank":20,"abundance":3}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData.filter(d => d.abundance > 0 && isFinite(d.abundance)) : DEFAULT_DATA.filter(d => d.abundance > 0)\r
\r
    const x = d3.scaleLog().domain([1, data.length]).range([0, IW])\r
    const y = d3.scaleLog().domain([Math.max(0.5, d3.min(data, d => d.abundance) * 0.5), d3.max(data, d => d.abundance) * 1.5]).range([IH, 0])\r
\r
    // Grid\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(-IW).tickPadding(0))\r
      .call(g => g.select('.domain').remove).call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.4)).call(g => g.selectAll('text').remove()).lower()\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisBottom(x).ticks(5).tickFormat(d => '10^' + Math.log10(d)).tickSize(-IH).tickPadding(0))\r
      .call(g => g.select('.domain').remove).call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.4)).call(g => g.selectAll('text').remove()).lower()\r
\r
    // Line\r
    const line = d3.line().x(d => x(d.rank)).y(d => y(d.abundance)).curve(d3.curveMonotoneX)\r
    svg.append('path').datum(data).attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('d', line).attr('fill', 'none').attr('stroke', colors[0]).attr('stroke-width', 2.5)\r
\r
    // Points\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .selectAll('circle').data(data).join('circle')\r
      .attr('cx', d => x(d.rank)).attr('cy', d => y(d.abundance)).attr('r', 4)\r
      .attr('fill', colors[0]).attr('opacity', 0.7)\r
\r
    // Log-linear reference line\r
    const maxAbund = d3.max(data, d => d.abundance)\r
    const refLine = d3.line()\r
      .x(d => x(d.rank))\r
      .y(d => y(maxAbund / d.rank))\r
      .curve(d3.curveLinear)\r
    svg.append('path').datum(data).attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('d', refLine).attr('fill', 'none').attr('stroke', colors[1]).attr('stroke-width', 1.5).attr('stroke-dasharray', '4,4').attr('opacity', 0.6)\r
\r
    // Axes\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top + IH})\`)\r
      .call(d3.axisBottom(x).ticks(5).tickSize(0).tickPadding(8).tickFormat(d => 'Rank ' + d))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '10px'))\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top + IH + 28})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text('Species Rank (log)')\r
    svg.append('text').attr('transform', \`translate(12,\${M.top + IH/2}) rotate(-90)\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text('Abundance (log)')\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top - 10})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '14px').attr('font-weight', 'bold').text('Rank-Abundance Curve (Whittaker Plot)')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};