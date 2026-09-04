var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, colors } from './utils'\r
export const meta = {\r
  id: 'lag-plot-date',\r
  title: 'Lag Plot Date',\r
  desc: 'Lag Plot Date — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'LagPlotDate',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","lag-plot-date"],\r
}\r
\r
export default function LagPlotDate({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = [{"date":"2024-01-01","value":42},{"date":"2024-01-02","value":38},{"date":"2024-01-03","value":45},{"date":"2024-01-04","value":52},{"date":"2024-01-05","value":48},{"date":"2024-01-06","value":61},{"date":"2024-01-07","value":55},{"date":"2024-01-08","value":67}]\r
    const data = (customData && customData[0] && customData[0].date) ? customData : DEFAULT_DATA\r
    const vals = data.map(d=>d.value)\r
    const pairs = vals.slice(1).map((b,i)=>({ a: vals[i], b }))\r
    const lo = Math.min(d3.min(pairs,d=>d.a), d3.min(pairs,d=>d.b))-3\r
    const hi = Math.max(d3.max(pairs,d=>d.a), d3.max(pairs,d=>d.b))+3\r
    const x = d3.scaleLinear().domain([lo,hi]).range([M.left,W-M.right])\r
    const y = d3.scaleLinear().domain([lo,hi]).range([H-M.bottom,M.top])\r
    const g = svg.append('g')\r
    g.append('line').attr('x1',x(lo)).attr('y1',y(lo)).attr('x2',x(hi)).attr('y2',y(hi)).attr('stroke','var(--border)').attr('stroke-dasharray','4,4')\r
    pairs.forEach(p=> g.append('circle').attr('cx',x(p.a)).attr('cy',y(p.b)).attr('r',4).attr('fill',colors[0]).attr('opacity',0.75).attr('stroke','#fff'))\r
    const ma = d3.mean(pairs,d=>d.a), mb = d3.mean(pairs,d=>d.b)\r
    let cov=0,va=0,vb=0\r
    pairs.forEach(p=>{ cov+=(p.a-ma)*(p.b-mb); va+=(p.a-ma)*(p.a-ma); vb+=(p.b-mb)*(p.b-mb) })\r
    const r = cov/Math.sqrt((va*vb)||1)\r
    g.append('text').attr('x',W-M.right-4).attr('y',M.top+12).attr('text-anchor','end').attr('fill','var(--text-secondary)').attr('font-size','10px').text('lag-1 r = '+r.toFixed(2))\r
    g.append('g').attr('transform','translate(0,'+(H-M.bottom)+')').call(d3.axisBottom(x).ticks(4).tickSize(0).tickPadding(6)).call(s=>s.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','8px'))\r
    g.append('g').attr('transform','translate('+M.left+',0)').call(d3.axisLeft(y).ticks(4).tickSize(0).tickPadding(6)).call(s=>s.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','8px'))\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};