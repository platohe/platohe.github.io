var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'headcount-trend',\r
  title: 'Headcount Trend',\r
  desc: 'Headcount Trend — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'HeadcountTrend',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","headcount-trend"],\r
}\r
\r
export default function HeadcountTrend({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"month":"Jan","hires":21,"terminations":10,"open":129},{"month":"Feb","hires":22,"terminations":9,"open":130},{"month":"Mar","hires":18,"terminations":11,"open":139},{"month":"Apr","hires":20,"terminations":9,"open":144},{"month":"May","hires":22,"terminations":10,"open":142},{"month":"Jun","hires":20,"terminations":11,"open":151},{"month":"Jul","hires":15,"terminations":10,"open":158},{"month":"Aug","hires":16,"terminations":11,"open":155},{"month":"Sep","hires":18,"terminations":8,"open":162},{"month":"Oct","hires":23,"terminations":11,"open":165},{"month":"Nov","hires":17,"terminations":12,"open":175},{"month":"Dec","hires":23,"terminations":10,"open":179}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
    const x = d3.scaleBand().domain(data.map(d => d.month)).range([0, IW]).padding(0.3)\r
    const maxVal = d3.max(data, d => Math.max(d.hires, d.terminations, d.open)) || 1\r
    const y = d3.scaleLinear().domain([0, maxVal * 1.1]).range([IH, 0])\r
\r
    // Grid\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(-IW).tickPadding(0))\r
      .call(g => g.select('.domain').remove()).call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.4)).call(g => g.selectAll('text').remove()).lower()\r
\r
    // Open headcount (area)\r
    const area = d3.area().x(d => x(d.month) + x.bandwidth() / 2).y0(y(0)).y1(d => y(d.open)).curve(d3.curveMonotoneX)\r
    svg.append('path').datum(data).attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('d', area).attr('fill', colors[2]).attr('fill-opacity', 0.2)\r
\r
    // Hires line\r
    const hiresLine = d3.line().x(d => x(d.month) + x.bandwidth() / 2).y(d => y(d.hires)).curve(d3.curveMonotoneX)\r
    svg.append('path').datum(data).attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('d', hiresLine).attr('fill', 'none').attr('stroke', colors[0]).attr('stroke-width', 2)\r
\r
    // Terminations line\r
    const termLine = d3.line().x(d => x(d.month) + x.bandwidth() / 2).y(d => y(d.terminations)).curve(d3.curveMonotoneX)\r
    svg.append('path').datum(data).attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('d', termLine).attr('fill', 'none').attr('stroke', colors[3]).attr('stroke-width', 2)\r
\r
    // Dots\r
    data.forEach(d => {\r
      svg.append('circle').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
        .attr('cx', x(d.month) + x.bandwidth() / 2).attr('cy', y(d.hires)).attr('r', 4)\r
        .attr('fill', colors[0]).attr('stroke', '#fff').attr('stroke-width', 1)\r
      svg.append('circle').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
        .attr('cx', x(d.month) + x.bandwidth() / 2).attr('cy', y(d.terminations)).attr('r', 4)\r
        .attr('fill', colors[3]).attr('stroke', '#fff').attr('stroke-width', 1)\r
    })\r
\r
    // Axes\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top + IH})\`)\r
      .call(d3.axisBottom(x).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '10px'))\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    // Legend\r
    const lg = svg.append('g').attr('transform', \`translate(\${M.left + IW - 90},\${M.top + 8})\`)\r
    lg.append('circle').attr('cx', 6).attr('cy', 4).attr('r', 4).attr('fill', colors[0])\r
    lg.append('text').attr('x', 16).attr('y', 8).text('Hires').attr('fill', 'var(--text-secondary)').attr('font-size', '10px')\r
    lg.append('circle').attr('cx', 6).attr('cy', 22).attr('r', 4).attr('fill', colors[3])\r
    lg.append('text').attr('x', 16).attr('y', 26).text('Terminations').attr('fill', 'var(--text-secondary)').attr('font-size', '10px')\r
    lg.append('rect').attr('x', 0).attr('y', 36).attr('width', 12).attr('height', 8).attr('fill', colors[2]).attr('opacity', 0.3)\r
    lg.append('text').attr('x', 16).attr('y', 44).text('Open Headcount').attr('fill', 'var(--text-secondary)').attr('font-size', '10px')\r
\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top - 10})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '14px').attr('font-weight', 'bold').text('Headcount Trend with Churn')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};