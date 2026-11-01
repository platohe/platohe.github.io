var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, colors } from './utils'\r
export const meta = {\r
  id: 'donchian-channels',\r
  title: 'Donchian Channels',\r
  desc: 'Donchian Channels — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'DonchianChannels',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","donchian-channels"],\r
}\r
\r
export default function DonchianChannels({ data: customData }) {\r
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
    const up = pts.map((d,i)=> d3.max(pts.slice(Math.max(0,i-1),i+1), q=>q.high))\r
    const dn = pts.map((d,i)=> d3.min(pts.slice(Math.max(0,i-1),i+1), q=>q.low))\r
    const ch = up.map((u,i)=>[xc(pts[i]), y(u), y(dn[i])])\r
    g.append('path').datum(ch).attr('d', d3.area().x(d=>d[0]).y0(d=>d[1]).y1(d=>d[2]).curve(d3.curveMonotoneX)).attr('fill',colors[1]).attr('opacity',0.12)\r
    g.append('path').datum(ch).attr('d', d3.line().x(d=>d[0]).y(d=>d[1]).curve(d3.curveStepAfter)).attr('fill','none').attr('stroke',colors[1]).attr('stroke-width',1.5)\r
    g.append('path').datum(ch).attr('d', d3.line().x(d=>d[0]).y(d=>d[2]).curve(d3.curveStepAfter)).attr('fill','none').attr('stroke',colors[1]).attr('stroke-width',1.5)\r
    g.append('path').datum(pts).attr('d', d3.line().x(d=>xc(d)).y(d=>y(d.close)).curve(d3.curveMonotoneX)).attr('fill','none').attr('stroke','#334155').attr('stroke-width',1.6)\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};