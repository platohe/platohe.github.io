var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'punchcard',\r
  title: 'Punchcard',\r
  desc: 'Punchcard — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'Punchcard',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","punchcard"],\r
}\r
\r
export default function Punchcard({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"day":"Mon","hour":0,"value":11},{"day":"Mon","hour":1,"value":9},{"day":"Mon","hour":2,"value":14},{"day":"Mon","hour":3,"value":12},{"day":"Mon","hour":4,"value":6},{"day":"Mon","hour":5,"value":10},{"day":"Mon","hour":6,"value":7},{"day":"Mon","hour":7,"value":11},{"day":"Mon","hour":8,"value":14},{"day":"Mon","hour":9,"value":37},{"day":"Mon","hour":10,"value":20},{"day":"Mon","hour":11,"value":21},{"day":"Mon","hour":12,"value":26},{"day":"Mon","hour":13,"value":35},{"day":"Mon","hour":14,"value":42},{"day":"Mon","hour":15,"value":41},{"day":"Mon","hour":16,"value":29},{"day":"Mon","hour":17,"value":18},{"day":"Mon","hour":18,"value":14},{"day":"Mon","hour":19,"value":10},{"day":"Mon","hour":20,"value":14},{"day":"Mon","hour":21,"value":5},{"day":"Mon","hour":22,"value":11},{"day":"Mon","hour":23,"value":4},{"day":"Tue","hour":0,"value":7},{"day":"Tue","hour":1,"value":5},{"day":"Tue","hour":2,"value":6},{"day":"Tue","hour":3,"value":13},{"day":"Tue","hour":4,"value":10},{"day":"Tue","hour":5,"value":4},{"day":"Tue","hour":6,"value":6},{"day":"Tue","hour":7,"value":14},{"day":"Tue","hour":8,"value":10},{"day":"Tue","hour":9,"value":41},{"day":"Tue","hour":10,"value":21},{"day":"Tue","hour":11,"value":15},{"day":"Tue","hour":12,"value":17},{"day":"Tue","hour":13,"value":32},{"day":"Tue","hour":14,"value":47},{"day":"Tue","hour":15,"value":42},{"day":"Tue","hour":16,"value":24},{"day":"Tue","hour":17,"value":18},{"day":"Tue","hour":18,"value":16},{"day":"Tue","hour":19,"value":8},{"day":"Tue","hour":20,"value":13},{"day":"Tue","hour":21,"value":14},{"day":"Tue","hour":22,"value":10},{"day":"Tue","hour":23,"value":6},{"day":"Wed","hour":0,"value":7},{"day":"Wed","hour":1,"value":8},{"day":"Wed","hour":2,"value":5},{"day":"Wed","hour":3,"value":12},{"day":"Wed","hour":4,"value":12},{"day":"Wed","hour":5,"value":12},{"day":"Wed","hour":6,"value":15},{"day":"Wed","hour":7,"value":5},{"day":"Wed","hour":8,"value":15},{"day":"Wed","hour":9,"value":36},{"day":"Wed","hour":10,"value":28},{"day":"Wed","hour":11,"value":12},{"day":"Wed","hour":12,"value":18},{"day":"Wed","hour":13,"value":31},{"day":"Wed","hour":14,"value":44},{"day":"Wed","hour":15,"value":41},{"day":"Wed","hour":16,"value":28},{"day":"Wed","hour":17,"value":21},{"day":"Wed","hour":18,"value":15},{"day":"Wed","hour":19,"value":13},{"day":"Wed","hour":20,"value":15},{"day":"Wed","hour":21,"value":7},{"day":"Wed","hour":22,"value":12},{"day":"Wed","hour":23,"value":6},{"day":"Thu","hour":0,"value":10},{"day":"Thu","hour":1,"value":14},{"day":"Thu","hour":2,"value":5},{"day":"Thu","hour":3,"value":16},{"day":"Thu","hour":4,"value":11},{"day":"Thu","hour":5,"value":15},{"day":"Thu","hour":6,"value":9},{"day":"Thu","hour":7,"value":11},{"day":"Thu","hour":8,"value":8},{"day":"Thu","hour":9,"value":38},{"day":"Thu","hour":10,"value":21},{"day":"Thu","hour":11,"value":19},{"day":"Thu","hour":12,"value":20},{"day":"Thu","hour":13,"value":37},{"day":"Thu","hour":14,"value":50},{"day":"Thu","hour":15,"value":43},{"day":"Thu","hour":16,"value":33},{"day":"Thu","hour":17,"value":21},{"day":"Thu","hour":18,"value":19},{"day":"Thu","hour":19,"value":11},{"day":"Thu","hour":20,"value":8},{"day":"Thu","hour":21,"value":5},{"day":"Thu","hour":22,"value":12},{"day":"Thu","hour":23,"value":8},{"day":"Fri","hour":0,"value":13},{"day":"Fri","hour":1,"value":15},{"day":"Fri","hour":2,"value":5},{"day":"Fri","hour":3,"value":10},{"day":"Fri","hour":4,"value":14},{"day":"Fri","hour":5,"value":6},{"day":"Fri","hour":6,"value":16},{"day":"Fri","hour":7,"value":6},{"day":"Fri","hour":8,"value":13},{"day":"Fri","hour":9,"value":40},{"day":"Fri","hour":10,"value":20},{"day":"Fri","hour":11,"value":15},{"day":"Fri","hour":12,"value":19},{"day":"Fri","hour":13,"value":39},{"day":"Fri","hour":14,"value":44},{"day":"Fri","hour":15,"value":37},{"day":"Fri","hour":16,"value":28},{"day":"Fri","hour":17,"value":21},{"day":"Fri","hour":18,"value":18},{"day":"Fri","hour":19,"value":14},{"day":"Fri","hour":20,"value":9},{"day":"Fri","hour":21,"value":6},{"day":"Fri","hour":22,"value":14},{"day":"Fri","hour":23,"value":8},{"day":"Sat","hour":0,"value":4},{"day":"Sat","hour":1,"value":13},{"day":"Sat","hour":2,"value":12},{"day":"Sat","hour":3,"value":15},{"day":"Sat","hour":4,"value":15},{"day":"Sat","hour":5,"value":7},{"day":"Sat","hour":6,"value":11},{"day":"Sat","hour":7,"value":10},{"day":"Sat","hour":8,"value":6},{"day":"Sat","hour":9,"value":5},{"day":"Sat","hour":10,"value":12},{"day":"Sat","hour":11,"value":13},{"day":"Sat","hour":12,"value":7},{"day":"Sat","hour":13,"value":7},{"day":"Sat","hour":14,"value":8},{"day":"Sat","hour":15,"value":4},{"day":"Sat","hour":16,"value":7},{"day":"Sat","hour":17,"value":16},{"day":"Sat","hour":18,"value":11},{"day":"Sat","hour":19,"value":16},{"day":"Sat","hour":20,"value":6},{"day":"Sat","hour":21,"value":6},{"day":"Sat","hour":22,"value":11},{"day":"Sat","hour":23,"value":8},{"day":"Sun","hour":0,"value":9},{"day":"Sun","hour":1,"value":9},{"day":"Sun","hour":2,"value":9},{"day":"Sun","hour":3,"value":12},{"day":"Sun","hour":4,"value":9},{"day":"Sun","hour":5,"value":8},{"day":"Sun","hour":6,"value":15},{"day":"Sun","hour":7,"value":8},{"day":"Sun","hour":8,"value":10},{"day":"Sun","hour":9,"value":11},{"day":"Sun","hour":10,"value":11},{"day":"Sun","hour":11,"value":11},{"day":"Sun","hour":12,"value":7},{"day":"Sun","hour":13,"value":8},{"day":"Sun","hour":14,"value":8},{"day":"Sun","hour":15,"value":8},{"day":"Sun","hour":16,"value":12},{"day":"Sun","hour":17,"value":7},{"day":"Sun","hour":18,"value":6},{"day":"Sun","hour":19,"value":12},{"day":"Sun","hour":20,"value":8},{"day":"Sun","hour":21,"value":5},{"day":"Sun","hour":22,"value":8},{"day":"Sun","hour":23,"value":5}]\r
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
    const margin = { top: 35, right: 25, bottom: 25, left: 45 }\r
    const plotW = width - margin.left - margin.right\r
    const plotH = height - margin.top - margin.bottom\r
\r
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']\r
    const hours = d3.range(24)\r
\r
    const x = d3.scalePoint()\r
      .domain(hours)\r
      .range([0, plotW])\r
      .padding(0.5)\r
\r
    const y = d3.scalePoint()\r
      .domain(days)\r
      .range([0, plotH])\r
      .padding(0.5)\r
\r
    const rScale = d3.scaleSqrt()\r
      .domain([0, d3.max(data, d => d.value) || 50])\r
      .range([0, 6.5])\r
\r
    const g = svg.append('g').attr('transform', \`translate(\${margin.left},\${margin.top})\`)\r
\r
    // Hour X Axis\r
    g.append('g')\r
      .attr('transform', \`translate(0,\${plotH + 4})\`)\r
      .call(d3.axisBottom(x).tickValues([0, 4, 8, 12, 16, 20]).tickFormat(d => \`\${d}h\`))\r
      .call(gr => gr.select('.domain').remove())\r
      .call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '6.5px'))\r
\r
    // Day Y Axis\r
    g.append('g')\r
      .call(d3.axisLeft(y).tickSize(0).tickPadding(8))\r
      .call(gr => gr.select('.domain').remove())\r
      .call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '7px').attr('font-weight', '500'))\r
\r
    // Grid lines\r
    days.forEach(d => {\r
      g.append('line')\r
        .attr('x1', 0).attr('x2', plotW)\r
        .attr('y1', y(d)).attr('y2', y(d))\r
        .attr('stroke', 'var(--border)')\r
        .attr('stroke-dasharray', '1,3')\r
        .attr('stroke-opacity', 0.4)\r
    })\r
\r
    // Punch circles\r
    g.selectAll('circle')\r
      .data(data)\r
      .join('circle')\r
      .attr('cx', d => x(d.hour))\r
      .attr('cy', d => y(d.day))\r
      .attr('r', d => rScale(d.value))\r
      .attr('fill', '#38bdf8')\r
      .attr('fill-opacity', 0.85)\r
      .attr('stroke', '#0284c7')\r
      .attr('stroke-width', 0.5)\r
\r
    // Header\r
    svg.append('text')\r
      .attr('x', 14)\r
      .attr('y', 16)\r
      .attr('fill', 'var(--text-primary)')\r
      .attr('font-size', '8.5px')\r
      .attr('font-weight', '600')\r
      .text('24/7 Activity Punchcard Matrix')\r
  }, [customData])\r
\r
  return (\r
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\r
      <svg ref={ref} viewBox={\`0 0 \${W} \${H}\`} style={{ width: '100%', height: '100%', maxWidth: '500px' }} />\r
    </div>\r
  )\r
}\r
`;export{e as default};