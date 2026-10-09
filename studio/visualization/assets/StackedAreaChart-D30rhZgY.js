var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'stacked-area-chart',\r
  title: 'Stacked Area Chart',\r
  desc: 'Stacked Area Chart — a areas chart visualization',\r
  category: 'Areas',\r
  component: 'StackedAreaChart',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["areas","stacked-area-chart"],\r
}\r
\r
export default function StackedAreaChart({ data: customData }) {\r
  const ref = useRef(null)\r
  const DEFAULT_DATA = [{"month":"Jan","A":30,"B":20,"C":15},{"month":"Feb","A":40,"B":25,"C":18},{"month":"Mar","A":55,"B":35,"C":22},{"month":"Apr","A":50,"B":40,"C":20},{"month":"May","A":65,"B":45,"C":25},{"month":"Jun","A":70,"B":50,"C":28}]\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
    // Derive time key and stack keys from data shape\r
    const timeKey = data[0] && data[0].month !== undefined ? 'month'\r
      : data[0] && data[0].date !== undefined ? 'date'\r
      : data[0] && data[0].time !== undefined ? 'time'\r
      : null\r
    const keys = Object.keys(data[0]).filter(k => k !== timeKey && typeof data[0][k] === 'number')\r
    const margin = { top: 25, right: 30, bottom: 35, left: 40 }\r
    const w = W - margin.left - margin.right, h = H - margin.top - margin.bottom\r
    const x = d3.scalePoint().domain(data.map(d => d[timeKey])).range([0, w]).padding(0.5)\r
    const y = d3.scaleLinear().domain([0, d3.max(data, d => d3.sum(keys, k => d[k])) * 1.1]).range([h, 0])\r
    const g = svg.append('g').attr('transform', \`translate(\${margin.left},\${margin.top})\`)\r
    const stack = d3.stack().keys(keys).offset(d3.stackOffsetNone)\r
    stack(data).forEach((serie, si) => {\r
      g.append('path').datum(serie).attr('d', d3.area().x(d => x(d.data[timeKey])).y0(d => y(d[0])).y1(d => y(d[1])).curve(d3.curveCatmullRom)).attr('fill', colors[si % colors.length]).attr('opacity', 0.8)\r
    })\r
    g.append('g').attr('transform', \`translate(0,\${h})\`).call(d3.axisBottom(x).tickSize(0).tickPadding(8)).call(gr => gr.select('.domain').remove()).call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '10px'))\r
    g.append('g').call(d3.axisLeft(y).ticks(5)).call(gr => gr.select('.domain').remove()).call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '9px'))\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};