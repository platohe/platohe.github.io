var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'gap-statistic',\r
  title: 'Gap Statistic',\r
  desc: 'Gap Statistic — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'GapStatistic',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","gap-statistic"],\r
}\r
\r
export default function GapStatistic({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"k":1,"gap":2.253,"se":0.122},{"k":2,"gap":1.752,"se":0.133},{"k":3,"gap":1.122,"se":0.126},{"k":4,"gap":0.836,"se":0.131},{"k":5,"gap":0.779,"se":0.124},{"k":6,"gap":0.421,"se":0.144},{"k":7,"gap":0.441,"se":0.115},{"k":8,"gap":0.181,"se":0.125},{"k":9,"gap":0.258,"se":0.131},{"k":10,"gap":0.001,"se":0.124}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
\r
    const x = d3.scaleLinear().domain(d3.extent(data, d => d.k)).range([0, IW])\r
    const y = d3.scaleLinear().domain([d3.min(data, d => d.gap - d.se) - 0.1, d3.max(data, d => d.gap + d.se) * 1.1]).range([IH, 0])\r
\r
    // Grid\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(-IW).tickPadding(0))\r
      .call(g => g.select('.domain').remove).call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.4)).call(g => g.selectAll('text').remove()).lower()\r
\r
    // Error bars\r
    data.forEach(d => {\r
      svg.append('line').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
        .attr('x1', x(d.k)).attr('x2', x(d.k)).attr('y1', y(d.gap - d.se)).attr('y2', y(d.gap + d.se))\r
        .attr('stroke', colors[0]).attr('stroke-width', 1.5)\r
      svg.append('line').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
        .attr('x1', x(d.k) - 4).attr('x2', x(d.k) + 4).attr('y1', y(d.gap - d.se)).attr('y2', y(d.gap - d.se))\r
        .attr('stroke', colors[0]).attr('stroke-width', 1.5)\r
      svg.append('line').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
        .attr('x1', x(d.k) - 4).attr('x2', x(d.k) + 4).attr('y1', y(d.gap + d.se)).attr('y2', y(d.gap + d.se))\r
        .attr('stroke', colors[0]).attr('stroke-width', 1.5)\r
    })\r
\r
    // Line\r
    const line = d3.line().x(d => x(d.k)).y(d => y(d.gap)).curve(d3.curveMonotoneX)\r
    svg.append('path').datum(data).attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('d', line).attr('fill', 'none').attr('stroke', colors[0]).attr('stroke-width', 2.5)\r
\r
    // Points\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .selectAll('circle').data(data).join('circle')\r
      .attr('cx', d => x(d.k)).attr('cy', d => y(d.gap)).attr('r', 4)\r
      .attr('fill', colors[0]).attr('stroke', '#fff').attr('stroke-width', 1.5)\r
\r
    // Elbow annotation\r
    const elbowK = data.reduce((best, d, i) => i === 0 ? d : (d.gap < best.gap ? d : best), data[0])\r
    if (elbowK.gap < d3.max(data, d => d.gap) * 0.5) {\r
      svg.append('text').attr('x', M.left + x(elbowK.k) + 6).attr('y', M.top + y(elbowK.gap) - 6)\r
        .attr('fill', colors[3]).attr('font-size', '10px').text('k=' + elbowK.k)\r
    }\r
\r
    // Axes\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top + IH})\`)\r
      .call(d3.axisBottom(x).ticks(5).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top + IH + 28})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text('Number of Clusters (k)')\r
    svg.append('text').attr('transform', \`translate(12,\${M.top + IH/2}) rotate(-90)\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text('Gap Statistic')\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top - 10})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '14px').attr('font-weight', 'bold').text('Gap Statistic Plot')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};