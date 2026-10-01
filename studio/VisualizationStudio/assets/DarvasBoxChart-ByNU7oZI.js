var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, colors } from './utils'\r
export const meta = {\r
  id: 'darvas-box-chart',\r
  title: 'Darvas Box Chart',\r
  desc: 'Darvas Box Chart — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'DarvasBoxChart',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","darvas-box-chart"],\r
}\r
\r
export default function DarvasBoxChart({ data: customData }) {\r
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
    const box=(a,b,color)=>{\r
      const seg=pts.slice(a,b+1); if(!seg.length) return\r
      const top=d3.max(seg,d=>d.high), bot=d3.min(seg,d=>d.low)\r
      const x1=x(seg[0].date), x2=x(seg[seg.length-1].date)+x.bandwidth()\r
      g.append('rect').attr('x',x1).attr('y',y(top)).attr('width',Math.max(8,x2-x1)).attr('height',Math.max(6,y(bot)-y(top))).attr('fill','none').attr('stroke',color).attr('stroke-width',2).attr('stroke-dasharray','6,3')\r
    }\r
    box(0,Math.min(1,pts.length-1),'#f59e0b')\r
    box(Math.max(0,pts.length-2),pts.length-1,'#6366f1')\r
    g.append('path').datum(pts).attr('d', d3.line().x(d=>xc(d)).y(d=>y(d.close)).curve(d3.curveMonotoneX)).attr('fill','none').attr('stroke','#334155').attr('stroke-width',1.8)\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};