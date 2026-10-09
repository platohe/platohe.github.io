var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, colors } from './utils'\r
export const meta = {\r
  id: 'difference-area-date',\r
  title: 'Difference Area Date',\r
  desc: 'Difference Area Date — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'DifferenceAreaDate',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["bars","difference-area-date"],\r
}\r
\r
export default function DifferenceAreaDate({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = [{"date":"2024-01-01","value":42},{"date":"2024-01-02","value":38},{"date":"2024-01-03","value":45},{"date":"2024-01-04","value":52},{"date":"2024-01-05","value":48},{"date":"2024-01-06","value":61},{"date":"2024-01-07","value":55},{"date":"2024-01-08","value":67}]\r
    const data = (customData && customData[0] && customData[0].date) ? customData : DEFAULT_DATA\r
    const parse = d3.timeParse('%Y-%m-%d')\r
    const pts = data.map(d=>({ date: parse(d.date), value: d.value }))\r
    const baseline = d3.mean(pts,d=>d.value)\r
    const diffs = pts.map(p=>({ date:p.date, d: p.value-baseline }))\r
    const x = d3.scaleTime().domain(d3.extent(diffs,d=>d.date)).range([M.left,W-M.right])\r
    const y = d3.scaleLinear().domain(d3.extent(diffs,d=>d.d)).nice().range([H-M.bottom,M.top])\r
    const g = svg.append('g')\r
    g.append('path').datum(diffs).attr('d', d3.area().x(d=>x(d.date)).y0(y(0)).y1(d=>y(Math.max(0,d.d))).curve(d3.curveMonotoneX)).attr('fill',colors[2]).attr('opacity',0.65)\r
    g.append('path').datum(diffs).attr('d', d3.area().x(d=>x(d.date)).y0(y(0)).y1(d=>y(Math.min(0,d.d))).curve(d3.curveMonotoneX)).attr('fill',colors[3]).attr('opacity',0.65)\r
    g.append('line').attr('x1',M.left).attr('x2',W-M.right).attr('y1',y(0)).attr('y2',y(0)).attr('stroke','var(--border)')\r
    g.append('g').attr('transform','translate(0,'+(H-M.bottom)+')').call(d3.axisBottom(x).ticks(4).tickSize(0).tickPadding(6)).call(s=>s.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','8px'))\r
    g.append('text').attr('x',M.left+4).attr('y',M.top+10).attr('fill',colors[2]).attr('font-size','8px').text('above mean')\r
    g.append('text').attr('x',M.left+4).attr('y',H-M.bottom-8).attr('fill',colors[3]).attr('font-size','8px').text('below mean')\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};