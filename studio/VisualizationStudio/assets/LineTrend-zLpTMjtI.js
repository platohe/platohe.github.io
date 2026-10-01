var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'line-trend',\r
  title: 'Line Trend',\r
  desc: 'Line Trend — a lines chart visualization',\r
  category: 'Lines',\r
  component: 'LineTrend',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["lines","line-trend"],\r
}\r
\r
export default function LineTrend({ data: customData }) {\r
  const ref = useRef(null)\r
  const DEFAULT_DATA = [{"x":0,"y":46.011},{"x":1,"y":49.483},{"x":2,"y":58.525},{"x":3,"y":61.697},{"x":4,"y":61.748},{"x":5,"y":70.266},{"x":6,"y":72.732},{"x":7,"y":81.247},{"x":8,"y":88.655},{"x":9,"y":89.723}]\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
    const margin = { top: 25, right: 20, bottom: 35, left: 40 }\r
    const w = W - margin.left - margin.right, h = H - margin.top - margin.bottom\r
    const x = d3.scaleLinear().domain(d3.extent(data, d => d.x)).range([0, w])\r
    const y = d3.scaleLinear().domain(d3.extent(data, d => d.y)).range([h, 0])\r
    const g = svg.append('g').attr('transform', \`translate(\${margin.left},\${margin.top})\`)\r
    g.append('path').datum(data).attr('d', d3.line().x(d => x(d.x)).y(d => y(d.y)).curve(d3.curveCatmullRom)).attr('fill', 'none').attr('stroke', colors[0]).attr('stroke-width', 2.5)\r
    g.selectAll('.pt').data(data).join('circle').attr('cx', d => x(d.x)).attr('cy', d => y(d.y)).attr('r', 4).attr('fill', colors[0]).attr('stroke', 'var(--bg)').attr('stroke-width', 1.5)\r
    g.append('g').attr('transform', \`translate(0,\${h})\`).call(d3.axisBottom(x).ticks(6)).call(gr => gr.select('.domain').remove()).call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '9px'))\r
    g.append('g').call(d3.axisLeft(y).ticks(5)).call(gr => gr.select('.domain').remove()).call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '9px'))\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};