var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, colors } from './utils'\r
export const meta = {\r
  id: 'atrbands-chart',\r
  title: 'A T R Bands Chart',\r
  desc: 'A T R Bands Chart — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'ATRBandsChart',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","a-t-r-bands-chart"],\r
}\r
\r
export default function ATRBandsChart({ data: customData }) {\r
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
    const y = d3.scaleLinear().domain([lo*0.96,hi*1.04]).range([H-M.bottom,M.top])\r
    const g = svg.append('g')\r
\r
    const atrs=pts.map((d,i)=>{ const pc=i>0?pts[i-1].close:d.open; return Math.max(d.high-d.low,Math.abs(d.high-pc),Math.abs(d.low-pc)) })\r
    const envU=atrs.map((a,i)=>pts[i].close+a*1.3), envL=atrs.map((a,i)=>pts[i].close-a*1.3)\r
    g.append('path').datum(envU.map((s,i)=>[xc(pts[i]),y(s)])).attr('d',d3.line().x(d=>d[0]).y(d=>d[1]).curve(d3.curveMonotoneX)).attr('fill','none').attr('stroke',colors[1]).attr('stroke-dasharray','4,3')\r
    g.append('path').datum(envL.map((s,i)=>[xc(pts[i]),y(s)])).attr('d',d3.line().x(d=>d[0]).y(d=>d[1]).curve(d3.curveMonotoneX)).attr('fill','none').attr('stroke',colors[1]).attr('stroke-dasharray','4,3')\r
    g.append('path').datum(envU.map((s,i)=>[xc(pts[i]),y(s),y(envL[i])])).attr('d',d3.area().x(d=>d[0]).y0(d=>d[1]).y1(d=>d[2]).curve(d3.curveMonotoneX)).attr('fill',colors[1]).attr('opacity',0.08)\r
        pts.forEach(d=>{\r
      const col=d.close>=d.open?'#10b981':'#ef4444'\r
      g.append('line').attr('x1',xc(d)).attr('x2',xc(d)).attr('y1',y(d.high)).attr('y2',y(d.low)).attr('stroke',col)\r
      g.append('rect').attr('x',x(d.date)).attr('y',y(Math.max(d.open,d.close))).attr('width',x.bandwidth()).attr('height',Math.max(1,Math.abs(y(d.open)-y(d.close)))).attr('fill',col).attr('opacity',0.9)\r
    })\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};