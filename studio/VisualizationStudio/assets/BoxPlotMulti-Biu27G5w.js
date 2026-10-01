var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'box-plot-multi',\r
  title: 'Box Plot Multi',\r
  desc: 'Box Plot Multi — a analysis chart visualization',\r
  category: 'Analysis',\r
  component: 'BoxPlotMulti',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["analysis","box-plot-multi"],\r
}\r
\r
export default function BoxPlotMulti({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"group":"A","min":5,"q1":20,"median":35,"q3":50,"max":65,"outliers":[75,80]},{"group":"B","min":10,"q1":30,"median":45,"q3":55,"max":70,"outliers":[]},{"group":"C","min":15,"q1":25,"median":40,"q3":55,"max":60,"outliers":[5,70]}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
    const margin = { top: 30, right: 30, bottom: 40, left: 40 }\r
    const w = W - margin.left - margin.right\r
    const h = H - margin.top - margin.bottom\r
\r
    const allVals = data.flatMap(d => [d.min, d.q1, d.median, d.q3, d.max, ...d.outliers])\r
    const y = d3.scaleLinear().domain([d3.min(allVals) - 5, d3.max(allVals) + 5]).range([h, 0])\r
    const x = d3.scaleBand().domain(data.map(d => d.group)).range([0, w]).padding(0.4)\r
    const boxW = x.bandwidth() * 0.6\r
\r
    const g = svg.append('g').attr('transform', \`translate(\${margin.left},\${margin.top})\`)\r
\r
    data.forEach(d => {\r
      const cx = x(d.group) + x.bandwidth() / 2\r
      const col = colors[data.indexOf(d) % colors.length]\r
\r
      // Whiskers\r
      g.append('line').attr('x1', cx).attr('x2', cx).attr('y1', y(d.min)).attr('y2', y(d.q1))\r
        .attr('stroke', col).attr('stroke-width', 1.5)\r
      g.append('line').attr('x1', cx).attr('x2', cx).attr('y1', y(d.q3)).attr('y2', y(d.max))\r
        .attr('stroke', col).attr('stroke-width', 1.5)\r
      g.append('line').attr('x1', cx - 8).attr('x2', cx + 8).attr('y1', y(d.min)).attr('y2', y(d.min))\r
        .attr('stroke', col).attr('stroke-width', 1.5)\r
      g.append('line').attr('x1', cx - 8).attr('x2', cx + 8).attr('y1', y(d.max)).attr('y2', y(d.max))\r
        .attr('stroke', col).attr('stroke-width', 1.5)\r
\r
      // Box\r
      g.append('rect')\r
        .attr('x', cx - boxW / 2).attr('y', y(d.q3))\r
        .attr('width', boxW).attr('height', y(d.q1) - y(d.q3))\r
        .attr('fill', col).attr('opacity', 0.2).attr('stroke', col).attr('stroke-width', 1.5).attr('rx', 2)\r
\r
      // Median\r
      g.append('line')\r
        .attr('x1', cx - boxW / 2).attr('x2', cx + boxW / 2)\r
        .attr('y1', y(d.median)).attr('y2', y(d.median))\r
        .attr('stroke', col).attr('stroke-width', 2.5)\r
\r
      // Mean dot\r
      const mean = (d.min + d.q1 + d.median + d.q3 + d.max) / 5\r
      g.append('circle').attr('cx', cx).attr('cy', y(mean)).attr('r', 3)\r
        .attr('fill', col).attr('stroke', 'var(--bg)').attr('stroke-width', 1)\r
\r
      // Outliers\r
      d.outliers.forEach(o => {\r
        g.append('circle').attr('cx', cx + (Math.random() - 0.5) * 10).attr('cy', y(o)).attr('r', 3)\r
          .attr('fill', 'none').attr('stroke', col).attr('stroke-width', 1.5)\r
      })\r
    })\r
\r
    g.append('g').attr('transform', \`translate(0,\${h})\`)\r
      .call(d3.axisBottom(x).tickSize(0).tickPadding(8))\r
      .call(gr => gr.select('.domain').remove())\r
      .call(gr => gr.selectAll('text').attr('fill', 'var(--text)').attr('font-size', '11px').attr('font-weight', 600))\r
\r
    g.append('g').call(d3.axisLeft(y).ticks(6).tickSize(-w).tickPadding(6))\r
      .call(gr => gr.select('.domain').remove())\r
      .call(gr => gr.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.3))\r
      .call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '9px'))\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};