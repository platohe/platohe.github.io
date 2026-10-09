var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'gantt_chart',\r
  title: 'Gantt_ Chart',\r
  desc: 'Gantt_ Chart — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'Gantt_Chart',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","gantt_-chart"],\r
}\r
\r
export default function Gantt_Chart({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"task":"Design","start":1,"end":3,"deps":[],"color":"#6366f1"},{"task":"Prototype","start":3,"end":6,"deps":["Design"],"color":"#f59e0b"},{"task":"Backend","start":4,"end":8,"deps":["Design"],"color":"#10b981"},{"task":"Frontend","start":6,"end":10,"deps":["Prototype"],"color":"#ef4444"},{"task":"Testing","start":8,"end":12,"deps":["Backend","Frontend"],"color":"#8b5cf6"},{"task":"Deploy","start":12,"end":13,"deps":["Testing"],"color":"#06b6d4"}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0 && customData[0]?.task !== undefined)\r
      ? customData.map(d => ({ ...d, deps: Array.isArray(d.deps) ? d.deps : [] }))\r
      : DEFAULT_DATA\r
    const names = data.map(d => d.task)\r
    const y = d3.scaleBand().domain(names).range([0, IH]).padding(0.3)\r
    const x = d3.scaleLinear().domain([0, d3.max(data, d => d.end) + 1]).range([0, IW])\r
    const barH = y.bandwidth()\r
\r
    // Grid\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisTop(x).ticks(8).tickSize(-IH).tickPadding(0))\r
      .call(g => g.select('.domain').remove()).call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.4)).call(g => g.selectAll('text').remove()).lower()\r
\r
    // Bars\r
    data.forEach(d => {\r
      svg.append('rect').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
        .attr('x', x(d.start)).attr('y', y(d.task)).attr('width', Math.max(1, x(d.end) - x(d.start)))\r
        .attr('height', barH).attr('fill', d.color || colors[0]).attr('opacity', 0.8).attr('rx', 3)\r
\r
      // Task label\r
      svg.append('text').attr('x', M.left - 4).attr('y', y(d.task) + barH / 2 + 4)\r
        .attr('text-anchor', 'end').attr('fill', 'var(--text-primary)').attr('font-size', '10px').text(d.task)\r
    })\r
\r
    // Dependency arrows\r
    data.forEach(d => {\r
      d.deps.forEach(dep => {\r
        const depData = data.find(dd => dd.task === dep)\r
        if (depData) {\r
          const x1 = x(depData.end) + M.left\r
          const y1 = y(depData.task) + barH / 2 + M.top\r
          const x2 = x(d.start) + M.left - 5\r
          const y2 = y(d.task) + barH / 2 + M.top\r
          const midY = (y1 + y2) / 2\r
          const path = \`M\${x1},\${y1} L\${(x1+x2)/2},\${y1} L\${(x1+x2)/2},\${y2} L\${x2},\${y2}\`\r
          svg.append('path').attr('d', path).attr('fill', 'none').attr('stroke', 'var(--text-secondary)').attr('stroke-width', 1).attr('opacity', 0.5)\r
          // Arrow head\r
          svg.append('polygon').attr('points', \`\${x2},\${y2} \${x2+4},\${y2-3} \${x2+4},\${y2+3}\`)\r
            .attr('fill', 'var(--text-secondary)').attr('opacity', 0.5)\r
        }\r
      })\r
    })\r
\r
    // X axis\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top + IH})\`)\r
      .call(d3.axisBottom(x).ticks(8).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text(d => 'Wk ' + d))\r
\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top + IH + 28})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text('Weeks')\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top - 10})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '14px').attr('font-weight', 'bold').text('Gantt Chart with Dependencies')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};