var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, colors } from './utils'\r
export const meta = {\r
  id: 'gann-fan-chart',\r
  title: 'Gann Fan Chart',\r
  desc: 'Gann Fan Chart — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'GannFanChart',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","gann-fan-chart"],\r
}\r
\r
export default function GannFanChart({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = [{"date":"2024-01-01","open":100,"high":105,"low":98,"close":103},{"date":"2024-01-02","open":103,"high":108,"low":102,"close":107},{"date":"2024-01-03","open":107,"high":110,"low":104,"close":106}]\r
    const data = (customData && customData[0] && customData[0].open !== undefined) ? customData : DEFAULT_DATA\r
    const parse = d3.timeParse('%Y-%m-%d')\r
    const pts = data.map(d=>({ ...d, date: parse(d.date) }))\r
    const hi = d3.max(pts,d=>d.high), lo = d3.min(pts,d=>d.low)\r
    const x = d3.scaleBand().domain(pts.map(d=>d.date)).range([M.left,W-M.right]).padding(0.3)\r
    const xc = d=>x(d.date)+x.bandwidth()/2\r
    const y = d3.scaleLinear().domain([lo*0.97,hi*1.03]).range([H-M.bottom,M.top])\r
    const g = svg.append('g')\r
\r
    let ai=0; pts.forEach((d,i)=>{ if(d.low<pts[ai].low) ai=i })\r
    const ax=xc(pts[ai]), ay=y(pts[ai].low)\r
    ;[['1x8',M.top],['1x4',M.top+(H-M.top-M.bottom)*0.25],['1x2',(M.top+H-M.bottom)/2],['1x1',H-M.bottom]].forEach(T=>{\r
      g.append('line').attr('x1',ax).attr('y1',ay).attr('x2',W-M.right).attr('y2',T[1]).attr('stroke',colors[2]).attr('stroke-width',1.2).attr('opacity',0.7)\r
      g.append('text').attr('x',W-M.right-26).attr('y',T[1]-3).attr('fill','var(--text-secondary)').attr('font-size','7px').text(T[0])\r
    })\r
    g.append('line').attr('x1',ax).attr('x2',ax).attr('y1',M.top).attr('y2',H-M.bottom).attr('stroke','var(--border)').attr('stroke-dasharray','2,3')\r
    g.append('circle').attr('cx',ax).attr('cy',ay).attr('r',4).attr('fill','#f59e0b')\r
    g.append('path').datum(pts).attr('d', d3.line().x(d=>xc(d)).y(d=>y(d.close)).curve(d3.curveMonotoneX)).attr('fill','none').attr('stroke','#334155').attr('stroke-width',1.5).attr('opacity',0.6)\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};