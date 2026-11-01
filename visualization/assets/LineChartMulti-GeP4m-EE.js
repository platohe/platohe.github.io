var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'line-chart-multi',\r
  title: 'Line Chart Multi',\r
  desc: 'Line Chart Multi — a lines chart visualization',\r
  category: 'Lines',\r
  component: 'LineChartMulti',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["lines","line-chart-multi"],\r
}\r
\r
export default function LineChartMulti({ data: customData }) {\r
  const ref = useRef(null)\r
  const DEFAULT_DATA = [{"month":"Jan","A":30,"B":45},{"month":"Feb","A":35,"B":50},{"month":"Mar","A":45,"B":55},{"month":"Apr","A":40,"B":60},{"month":"May","A":55,"B":65},{"month":"Jun","A":60,"B":70}]\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
    const keys = Object.keys(data[0]).filter(k => k !== 'month')\r
    const margin = { top: 25, right: 50, bottom: 35, left: 40 }\r
    const w = W - margin.left - margin.right, h = H - margin.top - margin.bottom\r
    const x = d3.scalePoint().domain(data.map(d => d.month)).range([0, w]).padding(0.5)\r
    const y = d3.scaleLinear().domain([0, d3.max(data, d => d3.max(keys, k => d[k])) * 1.1]).range([h, 0])\r
    const g = svg.append('g').attr('transform', \`translate(\${margin.left},\${margin.top})\`)\r
    keys.forEach((k, ki) => {\r
      g.append('path').datum(data).attr('d', d3.line().x(d => x(d.month)).y(d => y(d[k])).curve(d3.curveCatmullRom)).attr('fill', 'none').attr('stroke', colors[ki % colors.length]).attr('stroke-width', 2.5)\r
      const last = data[data.length - 1]\r
      g.append('circle').attr('cx', x(last.month)).attr('cy', y(last[k])).attr('r', 4).attr('fill', colors[ki % colors.length]).attr('stroke', 'var(--bg)').attr('stroke-width', 1.5)\r
      g.append('text').attr('x', x(last.month)).attr('y', y(last[k]) - 10).attr('text-anchor', 'middle').attr('fill', colors[ki % colors.length]).attr('font-size', '9px').attr('font-weight', 600).text(last[k])\r
    })\r
    g.append('g').attr('transform', \`translate(0,\${h})\`).call(d3.axisBottom(x).tickSize(0).tickPadding(8)).call(gr => gr.select('.domain').remove()).call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '10px'))\r
    g.append('g').call(d3.axisLeft(y).ticks(5)).call(gr => gr.select('.domain').remove()).call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '9px'))\r
    const lg = svg.append('g').attr('transform', 'translate(' + (W - 85) + ',14)')\r
    keys.forEach((k, i) => {\r
      lg.append('rect').attr('width', 10).attr('height', 10).attr('rx', 2).attr('fill', colors[i % colors.length]).attr('opacity', 0.8)\r
      lg.append('text').attr('x', 15).attr('y', 9).attr('fill', 'var(--text-secondary)').attr('font-size', '9px').text(k)\r
    })\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};