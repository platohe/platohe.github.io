var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH } from './utils'\r
\r
export const meta = {\r
  id: 'strip-plot',\r
  title: 'Strip Plot',\r
  desc: 'Strip Plot — a dots chart visualization',\r
  category: 'Dots',\r
  component: 'StripPlot',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["dots","strip-plot"],\r
}\r
\r
export default function StripPlot({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"group":"Group A","values":[12,18,24,28,33,38,42,48,52,58,65,70]},{"group":"Group B","values":[25,30,38,44,50,55,62,68,74,80,88]},{"group":"Group C","values":[8,15,22,29,35,42,50,57,64,72,80,92,98]},{"group":"Group D","values":[40,48,55,60,66,72,78,85,90,95]}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
\r
    const allVals = data.flatMap(d => d.values)\r
    const x = d3.scaleLinear()\r
      .domain([d3.min(allVals) - 5, d3.max(allVals) + 5])\r
      .range([0, IW])\r
\r
    const y = d3.scaleBand()\r
      .domain(data.map(d => d.group))\r
      .range([0, IH])\r
      .padding(0.3)\r
\r
    const color = d3.scaleOrdinal(['#38bdf8', '#10b981', '#f59e0b', '#ec4899'])\r
      .domain(data.map(d => d.group))\r
\r
    const g = svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
\r
    g.append('g').call(d3.axisLeft(y).tickSize(0).tickPadding(8))\r
      .call(gr => gr.select('.domain').remove())\r
      .call(gr => gr.selectAll('text').attr('fill', 'var(--text-primary)').attr('font-size', '8px').attr('font-weight', '500'))\r
\r
    g.append('g').attr('transform', \`translate(0,\${IH})\`)\r
      .call(d3.axisBottom(x).ticks(7).tickSize(-IH).tickPadding(6))\r
      .call(gr => gr.select('.domain').remove())\r
      .call(gr => gr.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-dasharray', '2,2').attr('stroke-opacity', 0.4))\r
      .call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '7px'))\r
\r
    data.forEach(d => {\r
      const cy = y(d.group) + y.bandwidth() / 2\r
      const col = color(d.group)\r
\r
      // Group baseline\r
      g.append('line')\r
        .attr('x1', x(d3.min(d.values))).attr('x2', x(d3.max(d.values)))\r
        .attr('y1', cy).attr('y2', cy)\r
        .attr('stroke', col).attr('stroke-opacity', 0.25).attr('stroke-width', 1)\r
\r
      // IQR box\r
      const q1 = d3.quantile(d.values.sort(d3.ascending), 0.25)\r
      const q3 = d3.quantile(d.values.sort(d3.ascending), 0.75)\r
      g.append('rect')\r
        .attr('x', x(q1)).attr('y', cy - 6)\r
        .attr('width', x(q3) - x(q1)).attr('height', 12)\r
        .attr('fill', col).attr('fill-opacity', 0.1)\r
        .attr('stroke', col).attr('stroke-width', 1)\r
\r
      // Median\r
      const med = d3.median(d.values)\r
      g.append('line')\r
        .attr('x1', x(med)).attr('x2', x(med))\r
        .attr('y1', cy - 7).attr('y2', cy + 7)\r
        .attr('stroke', col).attr('stroke-width', 2.5)\r
\r
      // Jittered points\r
      d.values.forEach(v => {\r
        const jitter = (Math.random() - 0.5) * y.bandwidth() * 0.6\r
        g.append('circle')\r
          .attr('cx', x(v)).attr('cy', cy + jitter)\r
          .attr('r', 2.8).attr('fill', col).attr('fill-opacity', 0.75)\r
          .attr('stroke', 'none')\r
      })\r
    })\r
\r
    svg.append('text').attr('x', 14).attr('y', 16)\r
      .attr('fill', 'var(--text-primary)').attr('font-size', '8.5px').attr('font-weight', '600')\r
      .text('Strip Plot with Jitter, IQR Box & Median Line')\r
  }, [customData])\r
\r
  return (\r
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\r
      <svg ref={ref} viewBox={\`0 0 \${W} \${H}\`} style={{ width: '100%', height: '100%', maxWidth: '500px' }} />\r
    </div>\r
  )\r
}\r
`;export{e as default};