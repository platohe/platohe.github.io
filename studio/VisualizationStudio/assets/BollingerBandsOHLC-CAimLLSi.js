var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, colors } from './utils'\r
export const meta = {\r
  id: 'bollinger-bands-ohlc',\r
  title: 'Bollinger Bands O H L C',\r
  desc: 'Bollinger Bands O H L C — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'BollingerBandsOHLC',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","bollinger-bands-o-h-l-c"],\r
}\r
\r
export default function BollingerBandsOHLC({ data: customData }) {\r
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
    const closes = pts.map(d=>d.close)\r
    const roll = closes.map((_,i)=>{\r
      const win = closes.slice(Math.max(0,i-2), i+1)\r
      return { sma: d3.mean(win), sd: d3.deviation(win)||0 }\r
    })\r
    const upA = roll.map((r,i)=>[xc(pts[i]), y(r.sma+2*r.sd)])\r
    const dnA = roll.map((r,i)=>[xc(pts[i]), y(Math.max(lo*0.96,r.sma-2*r.sd))])\r
    const bandPts = upA.map((p,i)=>p.concat(dnA[i]))\r
    g.append('path').datum(bandPts).attr('d', d3.area().x(d=>d[0]).y0(d=>d[1]).y1(d=>d[3]).curve(d3.curveMonotoneX)).attr('fill',colors[0]).attr('opacity',0.15)\r
    g.append('path').datum(roll.map((r,i)=>[xc(pts[i]),y(r.sma)])).attr('d', d3.line().x(d=>d[0]).y(d=>d[1]).curve(d3.curveMonotoneX)).attr('fill','none').attr('stroke',colors[0]).attr('stroke-width',1.8)\r
    pts.forEach((d,i)=> g.append('circle').attr('cx',xc(d)).attr('cy',y(d.close)).attr('r',3).attr('fill','#334155'))\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};