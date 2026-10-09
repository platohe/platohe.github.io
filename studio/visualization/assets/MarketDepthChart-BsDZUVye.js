var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, colors } from './utils'\r
export const meta = {\r
  id: 'market-depth-chart',\r
  title: 'Market Depth Chart',\r
  desc: 'Market Depth Chart — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'MarketDepthChart',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","market-depth-chart"],\r
}\r
\r
export default function MarketDepthChart({ data: customData }) {\r
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
    const mid=y((hi+lo)/2)\r
    const bids=pts.map(d=>({p:d.low,v:d.close>=d.open?2:1}))\r
    const asks=pts.map(d=>({p:d.high,v:d.close>=d.open?1:2}))\r
    g.append('path').datum(bids.map((b,i)=>[M.left+i*((W-M.left-M.right)/pts.length),y(b.p)])).attr('d',d3.area().x(d=>d[0]).y0(mid).y1(d=>d[1]).curve(d3.curveStepAfter)).attr('fill',colors[2]).attr('opacity',0.35)\r
    g.append('path').datum(asks.map((b,i)=>[M.left+i*((W-M.left-M.right)/pts.length),y(b.p)])).attr('d',d3.area().x(d=>d[0]).y0(mid).y1(d=>d[1]).curve(d3.curveStepAfter)).attr('fill',colors[3]).attr('opacity',0.35)\r
    g.append('line').attr('x1',M.left).attr('x2',W-M.right).attr('y1',mid).attr('y2',mid).attr('stroke','var(--border)').attr('stroke-width',1.5)\r
    g.append('text').attr('x',M.left+4).attr('y',mid-5).attr('fill',colors[2]).attr('font-size','8px').text('BIDS')\r
    g.append('text').attr('x',M.left+4).attr('y',mid+12).attr('fill',colors[3]).attr('font-size','8px').text('ASKS')\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};