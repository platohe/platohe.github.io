var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'lift-chart',\r
  title: 'Lift Chart',\r
  desc: 'Lift Chart — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'LiftChart',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","lift-chart"],\r
}\r
\r
export default function LiftChart({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"bin":1,"lift":7.77},{"bin":2,"lift":4.75},{"bin":3,"lift":3.3},{"bin":4,"lift":2.49},{"bin":5,"lift":2},{"bin":6,"lift":1.67},{"bin":7,"lift":1.43},{"bin":8,"lift":1.25},{"bin":9,"lift":1.11},{"bin":10,"lift":1}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0 && customData[0]?.lift !== undefined) ? customData : DEFAULT_DATA\r
\r
    const x = d3.scaleBand().domain(data.map(d => d.bin)).range([0, IW]).padding(0.3)\r
    const y = d3.scaleLinear().domain([0, d3.max(data, d => d.lift) * 1.2]).range([IH, 0])\r
\r
    const baseRate = 0.15\r
    const randomLine = 1 / baseRate\r
\r
    // Grid\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(-IW).tickPadding(0))\r
      .call(g => g.select('.domain').remove()).call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.4)).call(g => g.selectAll('text').remove()).lower()\r
\r
    // Random baseline\r
    svg.append('line').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('x1', 0).attr('x2', IW).attr('y1', y(1)).attr('y2', y(1))\r
      .attr('stroke', colors[2]).attr('stroke-width', 1.5).attr('stroke-dasharray', '6,4')\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW - 40},\${M.top + y(1) - 6})\`)\r
      .attr('fill', colors[2]).attr('font-size', '9px').text('Random')\r
\r
    // Bars\r
    data.forEach((d, i) => {\r
      const barH = IH - y(d.lift)\r
      svg.append('rect').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
        .attr('x', x(d.bin)).attr('y', y(d.lift)).attr('width', x.bandwidth())\r
        .attr('height', barH).attr('fill', colors[i % colors.length]).attr('opacity', 0.8).attr('rx', 2)\r
    })\r
\r
    // Line connecting tops\r
    const line = d3.line().x(d => x(d.bin) + x.bandwidth() / 2).y(d => y(d.lift)).curve(d3.curveMonotoneX)\r
    svg.append('path').datum(data).attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('d', line).attr('fill', 'none').attr('stroke', colors[0]).attr('stroke-width', 2)\r
\r
    // Points\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .selectAll('circle').data(data).join('circle')\r
      .attr('cx', d => x(d.bin) + x.bandwidth() / 2).attr('cy', d => y(d.lift)).attr('r', 4)\r
      .attr('fill', colors[0]).attr('stroke', '#fff').attr('stroke-width', 1)\r
\r
    // Value labels\r
    data.forEach(d => {\r
      svg.append('text').attr('transform', \`translate(\${M.left + x(d.bin) + x.bandwidth()/2},\${M.top + y(d.lift) - 8})\`)\r
        .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '9px').text('x' + d.lift.toFixed(1))\r
    })\r
\r
    // Axes\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top + IH})\`)\r
      .call(d3.axisBottom(x).tickSize(0).tickPadding(6))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '10px').text(d => 'Decile ' + d))\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top + IH + 28})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text('Decile (by predicted score)')\r
    svg.append('text').attr('transform', \`translate(12,\${M.top + IH/2}) rotate(-90)\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text('Lift')\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top - 10})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '14px').attr('font-weight', 'bold').text('Lift Chart')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};