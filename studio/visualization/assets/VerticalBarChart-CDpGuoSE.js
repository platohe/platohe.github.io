var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'vertical-bar-chart',\r
  title: 'Vertical Bar Chart',\r
  desc: 'Vertical Bar Chart — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'VerticalBarChart',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis","d3-shape"],\r
  tags: ["bars","vertical-bar-chart"],\r
}\r
\r
export default function VerticalBarChart({ data: customData }) {\r
  const ref = useRef(null)\r
  const DEFAULT_DATA = [{"label":"Apples","value":120},{"label":"Bananas","value":80},{"label":"Cherries","value":150},{"label":"Dates","value":60},{"label":"Elderberries","value":90}]\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
    const margin = { top: 25, right: 20, bottom: 35, left: 35 }\r
    const w = W - margin.left - margin.right, h = H - margin.top - margin.bottom\r
    const x = d3.scaleBand().domain(data.map(d => d.label)).range([0, w]).padding(0.3)\r
    const y = d3.scaleLinear().domain([0, d3.max(data, d => d.value) * 1.1]).range([h, 0])\r
    const g = svg.append('g').attr('transform', \`translate(\${margin.left},\${margin.top})\`)\r
    g.selectAll('rect').data(data).join('rect').attr('x', d => x(d.label)).attr('y', d => y(d.value)).attr('width', x.bandwidth()).attr('height', d => h - y(d.value)).attr('fill', (d, i) => colors[i % colors.length]).attr('opacity', 0.85).attr('rx', 3)\r
    g.append('g').attr('transform', \`translate(0,\${h})\`).call(d3.axisBottom(x).tickSize(0).tickPadding(8)).call(gr => gr.select('.domain').remove()).call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '10px'))\r
    g.append('g').call(d3.axisLeft(y).ticks(5)).call(gr => gr.select('.domain').remove()).call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '9px'))\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};