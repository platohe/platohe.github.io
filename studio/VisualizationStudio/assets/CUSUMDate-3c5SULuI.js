var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, colors } from './utils'\r
export const meta = {\r
  id: 'cusumdate',\r
  title: 'C U S U M Date',\r
  desc: 'C U S U M Date — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'CUSUMDate',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","c-u-s-u-m-date"],\r
}\r
\r
export default function CUSUMDate({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = [{"date":"2024-01-01","value":42},{"date":"2024-01-02","value":38},{"date":"2024-01-03","value":45},{"date":"2024-01-04","value":52},{"date":"2024-01-05","value":48},{"date":"2024-01-06","value":61},{"date":"2024-01-07","value":55},{"date":"2024-01-08","value":67}]\r
    const data = (customData && customData[0] && customData[0].date) ? customData : DEFAULT_DATA\r
    const parse = d3.timeParse('%Y-%m-%d')\r
    const pts = data.map(d=>({ date: parse(d.date), value: d.value }))\r
    const target=d3.mean(pts,d=>d.value)\r
    let cs=0; const cum=pts.map(p=>{ cs+=p.value-target; return {date:p.date,v:cs} })\r
    const x = d3.scaleTime().domain(d3.extent(cum,d=>d.date)).range([M.left,W-M.right])\r
    const y = d3.scaleLinear().domain(d3.extent(cum,d=>d.v)).nice().range([H-M.bottom,M.top])\r
    const g = svg.append('g')\r
    g.append('path').datum(cum).attr('d', d3.line().x(d=>x(d.date)).y(d=>y(d.v)).curve(d3.curveMonotoneX)).attr('fill','none').attr('stroke',colors[0]).attr('stroke-width',2.2)\r
    g.append('path').datum(cum).attr('d', d3.area().x(d=>x(d.date)).y0(y(0)).y1(d=>y(d.v)).curve(d3.curveMonotoneX)).attr('fill',colors[0]).attr('opacity',0.12)\r
    const thr=cum[cum.length-1].v*0.75\r
    g.append('line').attr('x1',M.left).attr('x2',W-M.right).attr('y1',y(thr)).attr('y2',y(thr)).attr('stroke','#ef4444').attr('stroke-dasharray','4,3')\r
    g.append('text').attr('x',W-M.right-2).attr('y',y(thr)-3).attr('text-anchor','end').attr('fill','#ef4444').attr('font-size','7px').text('decision limit')\r
    g.append('line').attr('x1',M.left).attr('x2',W-M.right).attr('y1',y(0)).attr('y2',y(0)).attr('stroke','var(--border)')\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};