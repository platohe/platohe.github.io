var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'nelson-aalen',\r
  title: 'Nelson Aalen',\r
  desc: 'Nelson Aalen — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'NelsonAalen',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","nelson-aalen"],\r
}\r
\r
export default function NelsonAalen({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"time":15,"events":4,"atRisk":100},{"time":45,"events":3,"atRisk":95},{"time":75,"events":5,"atRisk":90},{"time":105,"events":4,"atRisk":85},{"time":135,"events":1,"atRisk":80},{"time":165,"events":3,"atRisk":75},{"time":195,"events":2,"atRisk":70},{"time":225,"events":4,"atRisk":65},{"time":255,"events":5,"atRisk":60},{"time":285,"events":3,"atRisk":55},{"time":315,"events":2,"atRisk":50},{"time":345,"events":5,"atRisk":45},{"time":375,"events":4,"atRisk":40},{"time":405,"events":2,"atRisk":35},{"time":435,"events":1,"atRisk":30},{"time":465,"events":3,"atRisk":25},{"time":495,"events":4,"atRisk":20},{"time":525,"events":4,"atRisk":15},{"time":555,"events":1,"atRisk":10},{"time":585,"events":3,"atRisk":10}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
\r
    const x = d3.scaleLinear().domain(d3.extent(data, d => d.time)).range([0, IW])\r
    let cumHazard = 0\r
    const points = data.map(d => {\r
      const h = d.events / d.atRisk\r
      cumHazard += h\r
      return { time: d.time, hazard: +cumHazard.toFixed(3) }\r
    })\r
\r
    const y = d3.scaleLinear().domain([0, d3.max(points, d => d.hazard) * 1.1]).range([IH, 0])\r
\r
    // Grid\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(-IW).tickPadding(0))\r
      .call(g => g.select('.domain').remove).call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.4)).call(g => g.selectAll('text').remove()).lower()\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisBottom(x).ticks(5).tickSize(-IH).tickPadding(0))\r
      .call(g => g.select('.domain').remove).call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.4)).call(g => g.selectAll('text').remove()).lower()\r
\r
    // Step function (Nelson-Aalen is a step function)\r
    let pathD = \`M\${x(points[0].time)},\${y(0)}\`\r
    points.forEach((p, i) => {\r
      if (i === 0) pathD = \`M\${x(p.time)},\${y(0)} L\${x(p.time)},\${y(p.hazard)}\`\r
      else pathD += \` L\${x(p.time)},\${y(p.hazard)}\`\r
      if (i < points.length - 1) pathD += \` L\${x(points[i + 1].time)},\${y(p.hazard)}\`\r
    })\r
\r
    svg.append('path').attr('d', pathD).attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('fill', 'none').attr('stroke', colors[0]).attr('stroke-width', 2.5)\r
\r
    // Points\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .selectAll('circle').data(points).join('circle')\r
      .attr('cx', d => x(d.time)).attr('cy', d => y(d.hazard)).attr('r', 4)\r
      .attr('fill', colors[0]).attr('stroke', '#fff').attr('stroke-width', 1)\r
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
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text('Time')\r
    svg.append('text').attr('transform', \`translate(12,\${M.top + IH/2}) rotate(-90)\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text('Cumulative Hazard H(t)')\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top - 10})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '14px').attr('font-weight', 'bold').text('Nelson-Aalen Cumulative Hazard')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};