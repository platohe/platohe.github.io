var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'gantt-chart',\r
  title: 'Gantt Chart',\r
  desc: 'Gantt Chart — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'GanttChart',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","gantt-chart"],\r
}\r
\r
export default function GanttChart({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"task":"Architecture Spec","start":1,"end":5,"progress":1,"type":"Design"},{"task":"Core Engine Dev","start":4,"end":12,"progress":0.85,"type":"Dev"},{"task":"API Integration","start":8,"end":16,"progress":0.6,"type":"Dev"},{"task":"UI/UX Polish","start":12,"end":20,"progress":0.4,"type":"Design"},{"task":"QA & Load Testing","start":16,"end":23,"progress":0.2,"type":"QA"},{"task":"Cloud Deployment","start":21,"end":26,"progress":0,"type":"DevOps"}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0)\r
      ? customData\r
      : DEFAULT_DATA\r
\r
    const width = W\r
    const height = H\r
\r
    const margin = { top: 35, right: 35, bottom: 30, left: 95 }\r
    const plotW = width - margin.left - margin.right\r
    const plotH = height - margin.top - margin.bottom\r
\r
    const x = d3.scaleLinear()\r
      .domain([0, d3.max(data, d => d.end) || 30])\r
      .range([0, plotW])\r
\r
    const y = d3.scaleBand()\r
      .domain(data.map(d => d.task))\r
      .range([0, plotH])\r
      .padding(0.35)\r
\r
    const g = svg.append('g').attr('transform', \`translate(\${margin.left},\${margin.top})\`)\r
\r
    // Grid\r
    g.append('g')\r
      .attr('transform', \`translate(0,\${plotH})\`)\r
      .call(d3.axisBottom(x).ticks(8).tickFormat(d => \`Day \${d}\`).tickSize(-plotH).tickPadding(6))\r
      .call(gr => gr.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(gr => gr.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-dasharray', '2,2').attr('stroke-opacity', 0.4))\r
      .call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '6.5px'))\r
\r
    // Y Axis Task Names\r
    g.append('g')\r
      .call(d3.axisLeft(y).tickSize(0).tickPadding(8))\r
      .call(gr => gr.select('.domain').remove())\r
      .call(gr => gr.selectAll('text').attr('fill', 'var(--text-primary)').attr('font-size', '7px').attr('font-weight', '500'))\r
\r
    const typeColors = {\r
      Design: '#a855f7',\r
      Dev: '#3b82f6',\r
      QA: '#f59e0b',\r
      DevOps: '#10b981',\r
    }\r
\r
    // Render Gantt Task Bars\r
    data.forEach(d => {\r
      const yPos = y(d.task)\r
      const xStart = x(d.start)\r
      const barWidth = x(d.end) - xStart\r
      const barHeight = y.bandwidth()\r
      const color = typeColors[d.type] || '#6366f1'\r
\r
      // Base background bar\r
      g.append('rect')\r
        .attr('x', xStart)\r
        .attr('y', yPos)\r
        .attr('width', barWidth)\r
        .attr('height', barHeight)\r
        .attr('fill', color)\r
        .attr('fill-opacity', 0.25)\r
        .attr('stroke', color)\r
        .attr('stroke-width', 1)\r
        .attr('rx', 3)\r
\r
      // Completed Progress fill\r
      if (d.progress > 0) {\r
        g.append('rect')\r
          .attr('x', xStart)\r
          .attr('y', yPos)\r
          .attr('width', barWidth * d.progress)\r
          .attr('height', barHeight)\r
          .attr('fill', color)\r
          .attr('rx', 3)\r
      }\r
\r
      // Percentage label inside or next to bar\r
      g.append('text')\r
        .attr('x', xStart + barWidth + 5)\r
        .attr('y', yPos + barHeight / 2 + 2.5)\r
        .attr('fill', 'var(--text-secondary)')\r
        .attr('font-size', '6.5px')\r
        .attr('font-family', 'var(--font-mono)')\r
        .text(\`\${Math.round(d.progress * 100)}%\`)\r
    })\r
\r
    // Header\r
    svg.append('text')\r
      .attr('x', 14)\r
      .attr('y', 16)\r
      .attr('fill', 'var(--text-primary)')\r
      .attr('font-size', '8.5px')\r
      .attr('font-weight', '600')\r
      .text('Gantt Project Timeline & Progress Schedule')\r
  }, [customData])\r
\r
  return (\r
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\r
      <svg ref={ref} viewBox={\`0 0 \${W} \${H}\`} style={{ width: '100%', height: '100%', maxWidth: '500px' }} />\r
    </div>\r
  )\r
}\r
`;export{e as default};