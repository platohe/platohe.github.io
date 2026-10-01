var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'hill-plot',\r
  title: 'Hill Plot',\r
  desc: 'Hill Plot — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'HillPlot',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","hill-plot"],\r
}\r
\r
export default function HillPlot({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"k":1,"species":13},{"k":2,"species":20},{"k":3,"species":30},{"k":4,"species":36},{"k":5,"species":40},{"k":6,"species":48},{"k":7,"species":52},{"k":8,"species":58},{"k":9,"species":64},{"k":10,"species":66},{"k":11,"species":68},{"k":12,"species":74},{"k":13,"species":76},{"k":14,"species":77},{"k":15,"species":79},{"k":16,"species":82},{"k":17,"species":85},{"k":18,"species":87},{"k":19,"species":85},{"k":20,"species":89},{"k":21,"species":92},{"k":22,"species":89},{"k":23,"species":93},{"k":24,"species":91},{"k":25,"species":93},{"k":26,"species":93},{"k":27,"species":94},{"k":28,"species":98},{"k":29,"species":97},{"k":30,"species":95},{"k":31,"species":96},{"k":32,"species":100},{"k":33,"species":99},{"k":34,"species":101},{"k":35,"species":99},{"k":36,"species":100},{"k":37,"species":98},{"k":38,"species":98},{"k":39,"species":101},{"k":40,"species":101},{"k":41,"species":100},{"k":42,"species":102},{"k":43,"species":100},{"k":44,"species":100},{"k":45,"species":103},{"k":46,"species":103},{"k":47,"species":102},{"k":48,"species":100},{"k":49,"species":101},{"k":50,"species":101}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
\r
    const x = d3.scaleLinear().domain(d3.extent(data, d => d.k)).range([0, IW])\r
    const y = d3.scaleLinear().domain(d3.extent(data, d => d.species)).range([IH, 0])\r
\r
    // Grid\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(-IW).tickPadding(0))\r
      .call(g => g.select('.domain').remove).call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.4)).call(g => g.selectAll('text').remove()).lower()\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisBottom(x).ticks(5).tickSize(-IH).tickPadding(0))\r
      .call(g => g.select('.domain').remove).call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.4)).call(g => g.selectAll('text').remove()).lower()\r
\r
    // Line\r
    const line = d3.line().x(d => x(d.k)).y(d => y(d.species)).curve(d3.curveMonotoneX)\r
    svg.append('path').datum(data).attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('d', line).attr('fill', 'none').attr('stroke', colors[0]).attr('stroke-width', 2.5)\r
\r
    // Points\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .selectAll('circle').data(data).join('circle')\r
      .attr('cx', d => x(d.k)).attr('cy', d => y(d.species)).attr('r', 3.5)\r
      .attr('fill', colors[0]).attr('opacity', 0.6)\r
\r
    // Asymptote annotation\r
    const asymptote = d3.max(data, d => d.species) * 0.9\r
    svg.append('line').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('x1', 0).attr('x2', IW).attr('y1', y(asymptote)).attr('y2', y(asymptote))\r
      .attr('stroke', colors[1]).attr('stroke-width', 1.5).attr('stroke-dasharray', '6,4')\r
    svg.append('text').attr('x', IW - 4).attr('y', y(asymptote) - 6)\r
      .attr('text-anchor', 'end').attr('fill', colors[1]).attr('font-size', '9px').text('Asymptote (S∞)')\r
\r
    // Axes\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top + IH})\`)\r
      .call(d3.axisBottom(x).ticks(5).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '10px'))\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top + IH + 28})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text('Number of Species (k)')\r
    svg.append('text').attr('transform', \`translate(12,\${M.top + IH/2}) rotate(-90)\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text('Cumulative Species')\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top - 10})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '14px').attr('font-weight', 'bold').text('Hill Plot (Species Accumulation)')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};