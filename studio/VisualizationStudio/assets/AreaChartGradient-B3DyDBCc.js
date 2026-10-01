var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'area-chart-gradient',\r
  title: 'Area Chart Gradient',\r
  desc: 'Area Chart Gradient — a areas chart visualization',\r
  category: 'Areas',\r
  component: 'AreaChartGradient',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["areas","area-chart-gradient"],\r
}\r
\r
export default function AreaChartGradient({ data: customData }) {\r
  const ref = useRef(null)\r
  const DEFAULT_DATA = [{"month":"Jan","value":36.011},{"month":"Feb","value":39.483},{"month":"Mar","value":48.525},{"month":"Apr","value":51.697},{"month":"May","value":51.748},{"month":"Jun","value":60.266},{"month":"Jul","value":62.732},{"month":"Aug","value":71.247},{"month":"Sep","value":78.655},{"month":"Oct","value":79.723},{"month":"Nov","value":82.499},{"month":"Dec","value":93.821}]\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
    const margin = { top: 25, right: 20, bottom: 35, left: 40 }\r
    const w = W - margin.left - margin.right, h = H - margin.top - margin.bottom\r
    const x = d3.scalePoint().domain(data.map(d => d.month)).range([0, w]).padding(0.5)\r
    const y = d3.scaleLinear().domain([0, d3.max(data, d => d.value) * 1.1]).range([h, 0])\r
    const g = svg.append('g').attr('transform', \`translate(\${margin.left},\${margin.top})\`)\r
    const defs = svg.append('defs')\r
    const grad = defs.append('linearGradient').attr('id', 'ag2').attr('x1', '0%').attr('y1', '0%').attr('x2', '0%').attr('y2', '100%')\r
    grad.append('stop').attr('offset', '0%').attr('stop-color', colors[0]).attr('stop-opacity', 0.5)\r
    grad.append('stop').attr('offset', '100%').attr('stop-color', colors[0]).attr('stop-opacity', 0.02)\r
    g.append('path').datum(data).attr('d', d3.area().x(d => x(d.month)).y0(h).y1(d => y(d.value)).curve(d3.curveCatmullRom)).attr('fill', 'url(#ag2)')\r
    g.append('path').datum(data).attr('d', d3.line().x(d => x(d.month)).y(d => y(d.value)).curve(d3.curveCatmullRom)).attr('fill', 'none').attr('stroke', colors[0]).attr('stroke-width', 2.5)\r
    g.selectAll('.pt').data(data).join('circle').attr('cx', d => x(d.month)).attr('cy', d => y(d.value)).attr('r', 4).attr('fill', colors[0]).attr('stroke', 'var(--bg)').attr('stroke-width', 1.5)\r
    g.append('g').attr('transform', \`translate(0,\${h})\`).call(d3.axisBottom(x).tickSize(0).tickPadding(8)).call(gr => gr.select('.domain').remove()).call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '10px'))\r
    g.append('g').call(d3.axisLeft(y).ticks(5)).call(gr => gr.select('.domain').remove()).call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '9px'))\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};