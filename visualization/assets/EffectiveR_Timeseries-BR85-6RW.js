var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'effective-r_timeseries',\r
  title: 'Effective R_ Timeseries',\r
  desc: 'Effective R_ Timeseries — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'EffectiveR_Timeseries',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","effective-r_-timeseries"],\r
}\r
\r
export default function EffectiveR_Timeseries({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"day":0,"r":2.53},{"day":1,"r":2.4},{"day":2,"r":2.429},{"day":3,"r":2.27},{"day":4,"r":2.003},{"day":5,"r":1.978},{"day":6,"r":1.76},{"day":7,"r":1.719},{"day":8,"r":1.643},{"day":9,"r":1.383},{"day":10,"r":1.184},{"day":11,"r":1.255},{"day":12,"r":1.112},{"day":13,"r":0.895},{"day":14,"r":0.794},{"day":15,"r":0.832},{"day":16,"r":0.846},{"day":17,"r":0.792},{"day":18,"r":0.583},{"day":19,"r":0.699},{"day":20,"r":0.785},{"day":21,"r":0.522},{"day":22,"r":0.654},{"day":23,"r":0.452},{"day":24,"r":0.485},{"day":25,"r":0.383},{"day":26,"r":0.378},{"day":27,"r":0.515},{"day":28,"r":0.399},{"day":29,"r":0.3},{"day":30,"r":0.3},{"day":31,"r":0.394},{"day":32,"r":0.3},{"day":33,"r":0.342},{"day":34,"r":0.3},{"day":35,"r":0.3},{"day":36,"r":0.3},{"day":37,"r":0.3},{"day":38,"r":0.3},{"day":39,"r":0.3},{"day":40,"r":0.3},{"day":41,"r":0.3},{"day":42,"r":0.3},{"day":43,"r":0.3},{"day":44,"r":0.3},{"day":45,"r":0.3},{"day":46,"r":0.3},{"day":47,"r":0.3},{"day":48,"r":0.3},{"day":49,"r":0.3},{"day":50,"r":0.3},{"day":51,"r":0.3},{"day":52,"r":0.3},{"day":53,"r":0.3},{"day":54,"r":0.3},{"day":55,"r":0.3},{"day":56,"r":0.3},{"day":57,"r":0.3},{"day":58,"r":0.3},{"day":59,"r":0.3}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
\r
    const x = d3.scaleLinear().domain([0, data.length - 1]).range([0, IW])\r
    const y = d3.scaleLinear().domain([0, d3.max(data, d => d.r) * 1.1]).range([IH, 0])\r
\r
    // Grid\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(-IW).tickPadding(0))\r
      .call(g => g.select('.domain').remove()).call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.4)).call(g => g.selectAll('text').remove()).lower()\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisBottom(x).ticks(6).tickSize(-IH).tickPadding(0))\r
      .call(g => g.select('.domain').remove()).call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.4)).call(g => g.selectAll('text').remove()).lower()\r
\r
    // R=1 line (epidemic threshold)\r
    svg.append('line').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('x1', 0).attr('x2', IW).attr('y1', y(1)).attr('y2', y(1))\r
      .attr('stroke', colors[3]).attr('stroke-width', 2).attr('stroke-dasharray', '6,4')\r
    svg.append('text').attr('x', IW - 4).attr('y', y(1) - 6)\r
      .attr('text-anchor', 'end').attr('fill', colors[3]).attr('font-size', '10px').text('R=1 threshold')\r
\r
    // Line\r
    const line = d3.line().x(d => x(d.day)).y(d => y(d.r)).curve(d3.curveMonotoneX)\r
    svg.append('path').datum(data).attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('d', line).attr('fill', 'none').attr('stroke', colors[0]).attr('stroke-width', 2)\r
\r
    // Shaded region where R > 1\r
    const area = d3.area().x(d => x(d.day)).y0(y(1)).y1(d => y(d.r)).curve(d3.curveMonotoneX)\r
      .defined(d => d.r > 1)\r
    svg.append('path').datum(data).attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('d', area).attr('fill', colors[3]).attr('fill-opacity', 0.2)\r
\r
    // Points\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .selectAll('circle').data(data.filter((_, i) => i % 3 === 0)).join('circle')\r
      .attr('cx', d => x(d.day)).attr('cy', d => y(d.r)).attr('r', 2.5)\r
      .attr('fill', d => d.r > 1 ? colors[3] : colors[0]).attr('opacity', 0.7)\r
\r
    // Axes\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top + IH})\`)\r
      .call(d3.axisBottom(x).ticks(6).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text(d => 'Day ' + d))\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    svg.append('text').attr('transform', \`translate(12,\${M.top + IH/2}) rotate(-90)\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text('Effective R')\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top - 10})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '14px').attr('font-weight', 'bold').text('Effective Reproduction Number (Rt)')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};