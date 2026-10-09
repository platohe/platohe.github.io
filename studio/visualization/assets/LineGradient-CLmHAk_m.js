var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'line-gradient',\r
  title: 'Line Gradient',\r
  desc: 'Line Gradient — a lines chart visualization',\r
  category: 'Lines',\r
  component: 'LineGradient',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["lines","line-gradient"],\r
}\r
\r
export default function LineGradient({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"x":0,"y":46.011},{"x":1,"y":54.071},{"x":2,"y":65.354},{"x":3,"y":66.647},{"x":4,"y":59.934},{"x":5,"y":57.235},{"x":6,"y":45.555},{"x":7,"y":39.232},{"x":8,"y":33.519},{"x":9,"y":25.173},{"x":10,"y":23.321},{"x":11,"y":34.71},{"x":12,"y":41.869},{"x":13,"y":47.372},{"x":14,"y":55.112},{"x":15,"y":63.767},{"x":16,"y":66.653},{"x":17,"y":62.076},{"x":18,"y":48.281},{"x":19,"y":43.205}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
    const margin = { top: 30, right: 30, bottom: 35, left: 45 }\r
    const w = W - margin.left - margin.right\r
    const h = H - margin.top - margin.bottom\r
\r
    const x = d3.scaleLinear().domain(d3.extent(data, d => d.x)).range([0, w])\r
    const y = d3.scaleLinear().domain(d3.extent(data, d => d.y)).range([h, 0])\r
\r
    const g = svg.append('g').attr('transform', \`translate(\${margin.left},\${margin.top})\`)\r
\r
    // Gradient defs\r
    const defs = svg.append('defs')\r
    const grad = defs.append('linearGradient').attr('id', 'lg').attr('x1', '0%').attr('y1', '0%').attr('x2', '0%').attr('y2', '100%')\r
    grad.append('stop').attr('offset', '0%').attr('stop-color', colors[0]).attr('stop-opacity', 0.6)\r
    grad.append('stop').attr('offset', '100%').attr('stop-color', colors[0]).attr('stop-opacity', 0.02)\r
\r
    // Area with gradient\r
    g.append('path')\r
      .datum(data)\r
      .attr('d', d3.area().x(d => x(d.x)).y0(h).y1(d => y(d.y)).curve(d3.curveCatmullRom))\r
      .attr('fill', 'url(#lg)')\r
\r
    // Line\r
    g.append('path')\r
      .datum(data)\r
      .attr('d', d3.line().x(d => x(d.x)).y(d => y(d.y)).curve(d3.curveCatmullRom))\r
      .attr('fill', 'none').attr('stroke', colors[0]).attr('stroke-width', 2.5)\r
\r
    // Dots\r
    g.selectAll('.pt').data(data).join('circle')\r
      .attr('cx', d => x(d.x)).attr('cy', d => y(d.y)).attr('r', 3.5)\r
      .attr('fill', colors[0]).attr('stroke', 'var(--bg)').attr('stroke-width', 1.5)\r
\r
    g.append('g').attr('transform', \`translate(0,\${h})\`)\r
      .call(d3.axisBottom(x).ticks(6)).call(gr => gr.select('.domain').remove())\r
      .call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '9px'))\r
\r
    g.append('g').call(d3.axisLeft(y).ticks(5)).call(gr => gr.select('.domain').remove())\r
      .call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '9px'))\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};