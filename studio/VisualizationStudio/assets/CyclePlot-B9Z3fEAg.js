var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'cycle-plot',\r
  title: 'Cycle Plot',\r
  desc: 'Cycle Plot — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'CyclePlot',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","cycle-plot"],\r
}\r
\r
export default function CyclePlot({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']\r
    const years = [2018, 2019, 2020, 2021, 2022, 2023, 2024]\r
    const season = [10, 12, 20, 35, 50, 65, 75, 70, 45, 30, 18, 12]\r
    const DEFAULT = years.flatMap(y => months.map((m, i) => ({ year: y, month: m, value: Math.max(5, Math.min(95, 50 + (season[i] - 38) + (y - 2018) * 2.2 + (Math.random() * 10 - 5))) })))\r
    const data0 = Array.isArray(customData) && customData.length ? customData : DEFAULT\r
    // Editor/default data may arrive as {month,v} rows without a year; normalize to\r
    // {year,month,value}, coerce numbers, drop unusable rows, fall back to DEFAULT.\r
    const toNum=n=>{const x=Number(n);return Number.isFinite(x)?x:null}\r
    const normalized=data0.flatMap(d=>{\r
      if(!d||typeof d!=='object')return []\r
      const m=months.includes(d.month)?d.month:(months.includes(d.label)?d.label:null)\r
      const value=toNum(d.value??d.v)\r
      if(!m||value===null)return []\r
      let year=toNum(d.year); if(year===null)year=2024\r
      return [{year, month:m, value}]\r
    })\r
    const data=normalized.length?normalized:DEFAULT\r
    const margin = { top: 28, right: 58, bottom: 26, left: 38 }\r
    const width = W - margin.left - margin.right\r
    const height = H - margin.top - margin.bottom\r
    // Derive year domain from data; pad a degenerate single-year domain so scales stay finite\r
    const yearsInData = d3.sort([...new Set(data.map(d => d.year))])\r
    const [y0d, y1d] = d3.extent(yearsInData)\r
    const x = d3.scaleLinear().domain(y0d === y1d ? [y0d - 0.5, y1d + 0.5] : [y0d, y1d]).range([0, width])\r
    const y = d3.scaleLinear().domain([0, 100]).range([height, 0])\r
    const color = d3.scaleOrdinal(colors).domain(months)\r
    const g = svg.append('g').attr('transform', \`translate(\${margin.left},\${margin.top})\`)\r
    g.append('g').call(d3.axisLeft(y).ticks(5).tickSize(-width).tickPadding(8))\r
      .call(g2 => g2.select('.domain').remove())\r
      .call(g2 => g2.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-dasharray', '2,3'))\r
      .call(g2 => g2.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '9px'))\r
    g.append('g').attr('transform', \`translate(0,\${height})\`).call(d3.axisBottom(x).ticks(Math.min(yearsInData.length, 14)).tickFormat(d3.format('d')).tickSize(0).tickPadding(6))\r
      .call(g2 => g2.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g2 => g2.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '9px'))\r
    const byMonth = d3.group(data, d => d.month)\r
    months.forEach(m => {\r
      const vals = (byMonth.get(m) || []).sort((a, b) => a.year - b.year)\r
      const line = d3.line().x(d => x(d.year)).y(d => y(d.value)).curve(d3.curveMonotoneX)\r
      g.append('path').datum(vals).attr('d', line).attr('fill', 'none').attr('stroke', color(m)).attr('stroke-width', 1.8)\r
      g.selectAll(\`circle-\${m}\`).data(vals).join('circle')\r
        .attr('cx', d => x(d.year)).attr('cy', d => y(d.value)).attr('r', 2.5)\r
        .attr('fill', color(m)).attr('stroke', 'var(--bg)').attr('stroke-width', 0.8)\r
      const last = vals[vals.length - 1]\r
      if (last) g.append('text').attr('x', x(last.year) + 4).attr('y', y(last.value) + 3).attr('fill', color(m)).attr('font-size', '7px').attr('font-weight', 600).text(m)\r
    })\r
    svg.append('text').attr('x', 200).attr('y', 14).attr('text-anchor', 'middle').attr('fill', 'var(--text)').attr('font-size', '11px').attr('font-weight', 600).text('Cycle Plot — Monthly Seasonality')\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};