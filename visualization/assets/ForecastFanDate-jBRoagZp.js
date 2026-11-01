var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, colors } from './utils'\r
export const meta = {\r
  id: 'forecast-fan-date',\r
  title: 'Forecast Fan Date',\r
  desc: 'Forecast Fan Date — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'ForecastFanDate',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","forecast-fan-date"],\r
}\r
\r
export default function ForecastFanDate({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = [{"date":"2024-01-01","value":42},{"date":"2024-01-02","value":38},{"date":"2024-01-03","value":45},{"date":"2024-01-04","value":52},{"date":"2024-01-05","value":48},{"date":"2024-01-06","value":61},{"date":"2024-01-07","value":55},{"date":"2024-01-08","value":67}]\r
    const data = (customData && customData[0] && customData[0].date) ? customData : DEFAULT_DATA\r
    const parse = d3.timeParse('%Y-%m-%d')\r
    const pts = data.map(d=>({ date: parse(d.date), value: d.value }))\r
    const cut = Math.max(2, Math.floor(pts.length*0.6))\r
    const hist = pts.slice(0,cut), fut = pts.slice(cut-1)\r
    const x = d3.scaleTime().domain(d3.extent(pts,d=>d.date)).range([M.left,W-M.right])\r
    const maxU = d3.max(fut,(p,j)=>p.value*(1+0.08*j+0.05))\r
    const y = d3.scaleLinear().domain([0, Math.max(maxU, d3.max(hist,d=>d.value))*1.1]).range([H-M.bottom,M.top])\r
    const g = svg.append('g')\r
    const cone = fut.map((p,j)=>({ date:p.date, u:p.value*(1+0.08*j+0.05), l:p.value*(1-(0.06*j+0.04)), m:p.value }))\r
    g.append('path').datum(cone).attr('d', d3.area().x(d=>x(d.date)).y0(d=>y(d.l)).y1(d=>y(d.u)).curve(d3.curveMonotoneX)).attr('fill',colors[1]).attr('opacity',0.22)\r
    g.append('path').datum(cone).attr('d', d3.line().x(d=>x(d.date)).y(d=>y(d.m)).curve(d3.curveMonotoneX)).attr('fill','none').attr('stroke',colors[1]).attr('stroke-dasharray','5,4')\r
    g.append('path').datum(hist).attr('d', d3.line().x(d=>x(d.date)).y(d=>y(d.value)).curve(d3.curveMonotoneX)).attr('fill','none').attr('stroke',colors[0]).attr('stroke-width',2.2)\r
    const div = hist[hist.length-1].date\r
    g.append('line').attr('x1',x(div)).attr('x2',x(div)).attr('y1',M.top).attr('y2',H-M.bottom).attr('stroke','var(--border)').attr('stroke-dasharray','3,3')\r
    g.append('text').attr('x',x(div)+4).attr('y',M.top+10).attr('fill','var(--text-secondary)').attr('font-size','8px').text('forecast >')\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};