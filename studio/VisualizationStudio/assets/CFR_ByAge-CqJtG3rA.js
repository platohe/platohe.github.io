var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'cfr_by-age',\r
  title: 'C F R_ By Age',\r
  desc: 'C F R_ By Age — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'CFR_ByAge',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","c-f-r_-by-age"],\r
}\r
\r
export default function CFR_ByAge({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"group":"0-17","count":1200,"deaths":2,"cfr":0.17},{"group":"18-34","count":3500,"deaths":8,"cfr":0.23},{"group":"35-49","count":4200,"deaths":35,"cfr":0.83},{"group":"50-64","count":3800,"deaths":120,"cfr":3.16},{"group":"65-79","count":2900,"deaths":280,"cfr":9.66},{"group":"80+","count":800,"deaths":180,"cfr":22.5}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0 && customData[0]?.cfr !== undefined) ? customData : DEFAULT_DATA\r
\r
    const x = d3.scaleBand().domain(data.map(d => d.group)).range([0, IW]).padding(0.3)\r
    const yCFR = d3.scaleLinear().domain([0, d3.max(data, d => d.cfr) * 1.1]).range([IH * 0.65, 0])\r
    const yCount = d3.scaleLinear().domain([0, d3.max(data, d => d.count) * 1.1]).range([IH, IH * 0.35])\r
\r
    // Grid for CFR\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(yCFR).ticks(4).tickSize(-IW).tickPadding(0))\r
      .call(g => g.select('.domain').remove()).call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.4)).call(g => g.selectAll('text').remove()).lower()\r
\r
    // CFR bars\r
    data.forEach((d, i) => {\r
      const barH = IH * 0.65 - yCFR(d.cfr)\r
      svg.append('rect').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
        .attr('x', x(d.group)).attr('y', yCFR(d.cfr)).attr('width', x.bandwidth())\r
        .attr('height', barH).attr('fill', colors[3]).attr('opacity', 0.8).attr('rx', 2)\r
      svg.append('text').attr('transform', \`translate(\${M.left + x(d.group) + x.bandwidth()/2},\${M.top + yCFR(d.cfr) - 6})\`)\r
        .attr('text-anchor', 'middle').attr('fill', colors[3]).attr('font-size', '9px').attr('font-weight', 'bold').text(d.cfr.toFixed(1) + '%')\r
    })\r
\r
    // Count line\r
    data.forEach(d => {\r
      svg.append('circle').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
        .attr('cx', x(d.group) + x.bandwidth() / 2).attr('cy', yCount(d.count)).attr('r', 5)\r
        .attr('fill', colors[0]).attr('stroke', '#fff').attr('stroke-width', 1.5)\r
    })\r
\r
    // Divider\r
    svg.append('line').attr('x1', M.left).attr('x2', M.left + IW).attr('y1', IH * 0.35).attr('y2', IH * 0.35)\r
      .attr('stroke', 'var(--border)').attr('stroke-width', 1).attr('stroke-dasharray', '4,4')\r
\r
    // Labels\r
    svg.append('text').attr('x', M.left + 4).attr('y', M.top + 10).attr('fill', colors[3]).attr('font-size', '10px').text('CFR %')\r
    svg.append('text').attr('x', M.left + 4).attr('y', M.top + IH * 0.35 + 10).attr('fill', colors[0]).attr('font-size', '10px').text('Case Count')\r
\r
    // X axis\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top + IH})\`)\r
      .call(d3.axisBottom(x).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-primary)').attr('font-size', '11px'))\r
\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top - 10})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '14px').attr('font-weight', 'bold').text('Case Fatality Rate by Age Group')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};