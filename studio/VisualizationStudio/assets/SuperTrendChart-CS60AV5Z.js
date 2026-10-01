var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, colors } from './utils'\r
export const meta = {\r
  id: 'super-trend-chart',\r
  title: 'Super Trend Chart',\r
  desc: 'Super Trend Chart — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'SuperTrendChart',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","super-trend-chart"],\r
}\r
\r
export default function SuperTrendChart({ data: customData }) {\r
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
    let dir=1, prevUp=null, prevDn=null, prevClose=null\r
    const line=[]\r
    pts.forEach(d=>{\r
      const hl2=(d.high+d.low)/2\r
      const pc = prevClose==null?d.close:prevClose\r
      const tr = Math.max(d.high-d.low, Math.abs(d.high-pc), Math.abs(d.low-pc))\r
      const up=hl2+tr*0.8, dn=hl2-tr*0.8\r
      if(prevUp!=null){ if(d.close<prevDn) dir=-1; else if(d.close>prevUp) dir=1 }\r
      line.push({ date:d.date, v: dir>0?dn:up, dir })\r
      prevUp=up; prevDn=dn; prevClose=d.close\r
    })\r
    g.append('path').datum(pts).attr('d', d3.line().x(d=>xc(d)).y(d=>y(d.close)).curve(d3.curveMonotoneX)).attr('fill','none').attr('stroke','#94a3b8').attr('stroke-width',1.4)\r
    for(let i=1;i<line.length;i++){\r
      g.append('line').attr('x1',xc(pts[i-1])).attr('y1',y(line[i-1].v)).attr('x2',xc(pts[i])).attr('y2',y(line[i].v)).attr('stroke', line[i].dir>0?'#10b981':'#ef4444').attr('stroke-width',2.5)\r
    }\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};