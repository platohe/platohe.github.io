var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'stacked-horizontal-bar',\r
  title: 'Stacked Horizontal Bar',\r
  desc: 'Stacked Horizontal Bar — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'StackedHorizontalBar',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["bars","stacked-horizontal-bar"],\r
}\r
\r
export default function StackedHorizontalBar({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"year":"2019","web":30,"mobile":45,"desktop":20},{"year":"2020","web":40,"mobile":55,"desktop":25},{"year":"2021","web":55,"mobile":60,"desktop":30},{"year":"2022","web":70,"mobile":65,"desktop":35},{"year":"2023","web":85,"mobile":70,"desktop":40}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
    // Derive time key and stack keys from data shape\r
    const timeKey = data[0] && (data[0].year !== undefined || data[0].label !== undefined)\r
      ? (data[0].year !== undefined ? 'year' : 'label')\r
      : null\r
    const keys = Object.keys(data[0]).filter(k => k !== timeKey && typeof data[0][k] === 'number')\r
\r
    const margin = { top: 30, right: 50, bottom: 30, left: 50 }\r
    const w = W - margin.left - margin.right\r
    const rowH = (H - margin.top - margin.bottom) / data.length\r
    const barH = rowH * 0.6\r
\r
    const total = d3.max(data, d => d3.sum(keys, k => d[k]))\r
    const x = d3.scaleLinear().domain([0, total * 1.1]).range([0, w])\r
    const y = d3.scaleBand().domain(data.map(d => d[timeKey])).range([0, H - margin.top - margin.bottom]).padding(0.2)\r
\r
    const g = svg.append('g').attr('transform', \`translate(\${margin.left},\${margin.top})\`)\r
\r
    const stack = d3.stack().keys(keys)\r
    const stacked = stack(data)\r
\r
    stacked.forEach((serie, si) => {\r
      g.selectAll(\`.bar-\${si}\`).data(serie).join('rect')\r
        .attr('x', 0).attr('y', d => y(d.data[timeKey]))\r
        .attr('width', d => x(d[1] - d[0])).attr('height', y.bandwidth())\r
        .attr('fill', colors[si % colors.length]).attr('opacity', 0.85).attr('rx', si === keys.length - 1 ? 2 : 0)\r
    })\r
\r
    g.append('g').attr('transform', \`translate(0,\${H - margin.top - margin.bottom})\`)\r
      .call(d3.axisBottom(x).ticks(5)).call(gr => gr.select('.domain').remove())\r
      .call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '9px'))\r
\r
    g.append('g').call(d3.axisLeft(y).tickSize(0).tickPadding(8))\r
      .call(gr => gr.select('.domain').remove())\r
      .call(gr => gr.selectAll('text').attr('fill', 'var(--text)').attr('font-size', '10px').attr('font-weight', 500))\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};