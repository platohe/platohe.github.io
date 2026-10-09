var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, colors } from './utils'\r
export const meta = {\r
  id: 'coverage-area-date',\r
  title: 'Coverage Area Date',\r
  desc: 'Coverage Area Date — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'CoverageAreaDate',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["bars","coverage-area-date"],\r
}\r
\r
export default function CoverageAreaDate({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = [{"date":"2024-01-01","value":42},{"date":"2024-01-02","value":38},{"date":"2024-01-03","value":45},{"date":"2024-01-04","value":52},{"date":"2024-01-05","value":48},{"date":"2024-01-06","value":61},{"date":"2024-01-07","value":55},{"date":"2024-01-08","value":67}]\r
    const data = (customData && customData[0] && customData[0].date) ? customData : DEFAULT_DATA\r
    const parse = d3.timeParse('%Y-%m-%d')\r
    const pts = data.map(d=>({ date: parse(d.date), value: d.value }))\r
    const x = d3.scaleTime().domain(d3.extent(pts,d=>d.date)).range([M.left,W-M.right])\r
    const y = d3.scaleLinear().domain([0, d3.max(pts,d=>d.value)*1.35]).range([H-M.bottom,M.top])\r
    const g = svg.append('g')\r
    const upper = pts.map(p=>({date:p.date,v:p.value*1.18})), lower = pts.map(p=>({date:p.date,v:p.value*0.82}))\r
    const areaData = upper.map((u,i)=>({date:u.date, v0:u.v, v1:lower[i].v}))\r
    g.append('path').datum(areaData).attr('d', d3.area().x(d=>x(d.date)).y0(d=>y(d.v0)).y1(d=>y(d.v1)).curve(d3.curveMonotoneX)).attr('fill','none')\r
    const bandPts = upper.map((u,i)=>[x(u.date), y(u.v), y(lower[i].v)])\r
    g.append('path').datum(bandPts).attr('d', d3.area().x(d=>d[0]).y0(d=>d[1]).y1(d=>d[2]).curve(d3.curveMonotoneX)).attr('fill',colors[2]).attr('opacity',0.25)\r
    g.append('path').datum(pts).attr('d', d3.line().x(d=>x(d.date)).y(d=>y(d.value)).curve(d3.curveMonotoneX)).attr('fill','none').attr('stroke',colors[0]).attr('stroke-width',2.2)\r
    g.append('g').attr('transform','translate(0,'+(H-M.bottom)+')').call(d3.axisBottom(x).ticks(4).tickSize(0).tickPadding(6)).call(s=>s.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','8px'))\r
    g.append('text').attr('x',M.left).attr('y',M.top-6).attr('fill',colors[2]).attr('font-size','9px').text('+/-18% coverage band')\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};