var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'index-chart',\r
  title: 'Index Chart',\r
  desc: 'Index Chart — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'IndexChart',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","index-chart"],\r
}\r
\r
export default function IndexChart({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"month":"Jan","A":100,"B":115,"C":121},{"month":"Feb","A":113,"B":116,"C":129},{"month":"Mar","A":123,"B":114,"C":125},{"month":"Apr","A":129,"B":111,"C":113},{"month":"May","A":130,"B":108,"C":101},{"month":"Jun","A":127,"B":104,"C":96},{"month":"Jul","A":121,"B":101,"C":102},{"month":"Aug","A":114,"B":100,"C":119},{"month":"Sep","A":109,"B":101,"C":140},{"month":"Oct","A":107,"B":105,"C":157},{"month":"Nov","A":111,"B":110,"C":165},{"month":"Dec","A":119,"B":117,"C":161}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
    const seriesKeys = Object.keys(data[0]).filter(k => k !== 'date' && k !== 'month')\r
    const timeKey = data[0].month !== undefined ? 'month' : 'date'\r
\r
    const x = d3.scalePoint().domain(data.map(d => d[timeKey])).range([0, IW]).padding(0.5)\r
    const validVals = data.flatMap(d => seriesKeys.map(k => d[k]).filter(v => typeof v === 'number' && !isNaN(v) && isFinite(v)))\r
    const yDomain = d3.extent(validVals)\r
    const y = d3.scaleLinear().domain(Array.isArray(yDomain) && isFinite(yDomain[0]) && isFinite(yDomain[1]) ? yDomain : [90, 140]).range([IH, 0])\r
\r
    // Grid\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(-IW).tickPadding(0))\r
      .call(g => g.select('.domain').remove()).call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.4)).call(g => g.selectAll('text').remove()).lower()\r
\r
    const line = d3.line()\r
      .x(d => x(d[timeKey]))\r
      .y(d => y(d[seriesKeys[0]]))\r
      .curve(d3.curveMonotoneX)\r
\r
    seriesKeys.forEach((key, i) => {\r
      const l = d3.line().x(d => x(d[timeKey])).y(d => y(d[key])).curve(d3.curveMonotoneX)\r
      svg.append('path').datum(data).attr('transform', \`translate(\${M.left},\${M.top})\`)\r
        .attr('d', l).attr('fill', 'none').attr('stroke', colors[i % colors.length]).attr('stroke-width', 2.5)\r
\r
      // End dot\r
      const last = data[data.length - 1]\r
      const cx = x(last[timeKey]), cy = y(last[key])\r
      if (!isNaN(cx) && isFinite(cx) && !isNaN(cy) && isFinite(cy)) {\r
        svg.append('circle').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
          .attr('cx', cx).attr('cy', cy).attr('r', 4)\r
          .attr('fill', colors[i % colors.length]).attr('stroke', '#fff').attr('stroke-width', 1.5)\r
\r
        // Label\r
        svg.append('text').attr('transform', \`translate(\${M.left + cx + 6},\${M.top + cy + 4})\`)\r
          .attr('fill', colors[i % colors.length]).attr('font-size', '10px').attr('font-weight', 'bold').text(key + ': ' + last[key])\r
      }\r
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
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top + IH + 28})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text('Month')\r
    svg.append('text').attr('transform', \`translate(12,\${M.top + IH/2}) rotate(-90)\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text('Index (base=100)')\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top - 10})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '14px').attr('font-weight', 'bold').text('Index Chart (Normalized)')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};