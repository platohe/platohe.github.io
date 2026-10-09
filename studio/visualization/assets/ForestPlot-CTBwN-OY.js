var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH } from './utils'\r
\r
export const meta = {\r
  id: 'forest-plot',\r
  title: 'Forest Plot',\r
  desc: 'Forest Plot — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'ForestPlot',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","forest-plot"],\r
}\r
\r
export default function ForestPlot({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"name":"Study A","estimate":0.75,"ciLow":0.6,"ciHigh":0.9,"weight":30,"study":"Smith 2020"},{"name":"Study B","estimate":0.82,"ciLow":0.7,"ciHigh":0.94,"weight":25,"study":"Jones 2019"},{"name":"Study C","estimate":0.68,"ciLow":0.55,"ciHigh":0.81,"weight":20,"study":"Lee 2021"},{"name":"Study D","estimate":0.9,"ciLow":0.8,"ciHigh":1,"weight":15,"study":"Wang 2022"},{"name":"Study E","estimate":0.78,"ciLow":0.65,"ciHigh":0.91,"weight":18,"study":"Chen 2020"},{"name":"Study F","estimate":0.85,"ciLow":0.72,"ciHigh":0.98,"weight":22,"study":"Kim 2021"}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
\r
    const y = d3.scaleBand()\r
      .domain(data.map(d => d.name))\r
      .range([0, IH])\r
      .padding(0.3)\r
\r
    const x = d3.scaleLinear()\r
      .domain([0.4, 1.1])\r
      .range([0, IW])\r
\r
    const g = svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
\r
    // Reference line at 0.75\r
    g.append('line')\r
      .attr('x1', x(0.75)).attr('x2', x(0.75))\r
      .attr('y1', 0).attr('y2', IH)\r
      .attr('stroke', 'var(--text-secondary)').attr('stroke-dasharray', '4,4').attr('stroke-width', 1)\r
\r
    // CI bars\r
    data.forEach((d, i) => {\r
      const cy = y(d.name) + y.bandwidth() / 2\r
      // CI line\r
      g.append('line')\r
        .attr('x1', x(d.ciLow)).attr('x2', x(d.ciHigh))\r
        .attr('y1', cy).attr('y2', cy)\r
        .attr('stroke', '#6366f1').attr('stroke-width', 2).attr('stroke-opacity', 0.7);\r
      // CI caps\r
      [d.ciLow, d.ciHigh].forEach(v => {\r
        g.append('line')\r
          .attr('x1', x(v)).attr('x2', x(v))\r
          .attr('y1', cy - 5).attr('y2', cy + 5)\r
          .attr('stroke', '#6366f1').attr('stroke-width', 2).attr('stroke-opacity', 0.7)\r
      })\r
      // Point estimate\r
      g.append('circle')\r
        .attr('cx', x(d.estimate)).attr('cy', cy)\r
        .attr('r', Math.sqrt(d.weight) * 1.2)\r
        .attr('fill', '#6366f1').attr('stroke', 'var(--bg)').attr('stroke-width', 1.5)\r
    })\r
\r
    // X axis\r
    g.append('g')\r
      .attr('transform', \`translate(0,\${IH})\`)\r
      .call(d3.axisBottom(x).ticks(6).tickFormat(d => d.toFixed(2)).tickSize(0).tickPadding(8))\r
      .call(gr => gr.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '8px'))\r
\r
    // Y axis labels\r
    g.append('g')\r
      .call(d3.axisLeft(y).tickSize(0).tickPadding(8))\r
      .call(gr => gr.select('.domain').remove())\r
      .call(gr => gr.selectAll('text').attr('fill', 'var(--text-primary)').attr('font-size', '8px').attr('font-weight', '500'))\r
\r
    // Study labels\r
    data.forEach(d => {\r
      g.append('text')\r
        .attr('x', -6).attr('y', y(d.name) + y.bandwidth() / 2)\r
        .attr('text-anchor', 'end').attr('dominant-baseline', 'middle')\r
        .attr('fill', 'var(--text-secondary)').attr('font-size', '7px')\r
        .text(d.study)\r
    })\r
\r
    // Legend\r
    const legY = IH + 22\r
    g.append('text').attr('x', 0).attr('y', legY)\r
      .attr('fill', 'var(--text-secondary)').attr('font-size', '7px').text('OR=0.75')\r
    g.append('circle').attr('cx', IW - 30).attr('cy', legY - 3)\r
      .attr('r', 4).attr('fill', '#6366f1').attr('stroke', 'var(--bg)').attr('stroke-width', 1)\r
    g.append('text').attr('x', IW - 24).attr('y', legY).attr('fill', 'var(--text-secondary)').attr('font-size', '7px').text('Weight')\r
  }, [customData])\r
\r
  return (\r
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\r
      <svg ref={ref} viewBox={\`0 0 \${W} \${H}\`} style={{ width: '100%', height: '100%', maxWidth: '500px' }} />\r
    </div>\r
  )\r
}\r
`;export{e as default};