var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'scatter-bubble',\r
  title: 'Scatter Bubble',\r
  desc: 'Scatter Bubble — a dots chart visualization',\r
  category: 'Dots',\r
  component: 'ScatterBubble',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["dots","scatter-bubble"],\r
}\r
\r
export default function ScatterBubble({ data: customData }) {\r
  const ref = useRef(null)\r
  const DEFAULT_DATA = [{"name":"A","x":20,"y":30,"r":15},{"name":"B","x":40,"y":70,"r":25},{"name":"C","x":60,"y":45,"r":10},{"name":"D","x":80,"y":85,"r":30}]\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
    const margin = { top: 25, right: 20, bottom: 35, left: 40 }\r
    const w = W - margin.left - margin.right, h = H - margin.top - margin.bottom\r
    const x = d3.scaleLinear().domain(d3.extent(data, d => d.x)).range([0, w])\r
    const y = d3.scaleLinear().domain(d3.extent(data, d => d.y)).range([h, 0])\r
    const r = d3.scaleSqrt().domain(d3.extent(data, d => d.r)).range([5, 25])\r
    const g = svg.append('g').attr('transform', \`translate(\${margin.left},\${margin.top})\`)\r
    g.selectAll('circle').data(data).join('circle').attr('cx', d => x(d.x)).attr('cy', d => y(d.y)).attr('r', d => r(d.r)).attr('fill', (d, i) => colors[i % colors.length]).attr('opacity', 0.7).attr('stroke', 'var(--bg)').attr('stroke-width', 1.5)\r
    g.append('g').attr('transform', \`translate(0,\${h})\`).call(d3.axisBottom(x).ticks(5)).call(gr => gr.select('.domain').remove()).call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '9px'))\r
    g.append('g').call(d3.axisLeft(y).ticks(5)).call(gr => gr.select('.domain').remove()).call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '9px'))\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};