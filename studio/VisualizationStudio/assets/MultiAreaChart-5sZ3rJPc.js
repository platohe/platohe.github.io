var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'multi-area-chart',\r
  title: 'Multi Area Chart',\r
  desc: 'Multi Area Chart — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'MultiAreaChart',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["bars","multi-area-chart"],\r
}\r
\r
export default function MultiAreaChart({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"month":"Jan","A":30,"B":45,"C":20},{"month":"Feb","A":35,"B":50,"C":25},{"month":"Mar","A":45,"B":55,"C":30},{"month":"Apr","A":40,"B":60,"C":35},{"month":"May","A":55,"B":65,"C":40},{"month":"Jun","A":60,"B":70,"C":50},{"month":"Jul","A":65,"B":75,"C":45}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
    const keys = Object.keys(data[0]).filter(k => k !== 'month')\r
    const margin = { top: 30, right: 50, bottom: 35, left: 40 }\r
    const w = W - margin.left - margin.right\r
    const h = H - margin.top - margin.bottom\r
\r
    const x = d3.scalePoint().domain(data.map(d => d.month)).range([0, w]).padding(0.5)\r
    const y = d3.scaleLinear().domain([0, d3.max(data, d => d3.max(keys, k => d[k])) * 1.1]).range([h, 0])\r
\r
    const g = svg.append('g').attr('transform', \`translate(\${margin.left},\${margin.top})\`)\r
\r
    keys.forEach((k, i) => {\r
      g.append('path')\r
        .datum(data)\r
        .attr('d', d3.line()\r
          .x(d => x(d.month))\r
          .y(d => y(d[k]))\r
          .curve(d3.curveCatmullRom))\r
        .attr('fill', 'none').attr('stroke', colors[i % colors.length]).attr('stroke-width', 2.2)\r
\r
      // End dot\r
      const last = data[data.length - 1]\r
      g.append('circle')\r
        .attr('cx', x(last.month)).attr('cy', y(last[k])).attr('r', 4)\r
        .attr('fill', colors[i % colors.length]).attr('stroke', 'var(--bg)').attr('stroke-width', 1.5)\r
      g.append('text')\r
        .attr('x', x(last.month)).attr('y', y(last[k]) - 10)\r
        .attr('text-anchor', 'middle').attr('fill', colors[i % colors.length]).attr('font-size', '9px').attr('font-weight', 600)\r
        .text(last[k])\r
    })\r
\r
    // Legend\r
    const lg = svg.append('g').attr('transform', 'translate(' + (W - 90) + ',14)')\r
    keys.forEach((k, i) => {\r
      lg.append('rect').attr('width', 10).attr('height', 10).attr('rx', 2)\r
        .attr('fill', colors[i % colors.length]).attr('opacity', 0.8)\r
      lg.append('text').attr('x', 15).attr('y', 9)\r
        .attr('fill', 'var(--text-secondary)').attr('font-size', '9px').text(k)\r
    })\r
\r
    g.append('g').attr('transform', \`translate(0,\${h})\`)\r
      .call(d3.axisBottom(x).tickSize(0).tickPadding(8))\r
      .call(gr => gr.select('.domain').remove())\r
      .call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '10px'))\r
\r
    g.append('g').call(d3.axisLeft(y).ticks(5).tickSize(-w).tickPadding(6))\r
      .call(gr => gr.select('.domain').remove())\r
      .call(gr => gr.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.3))\r
      .call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '9px'))\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};