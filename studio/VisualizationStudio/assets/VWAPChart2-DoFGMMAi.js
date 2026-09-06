var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, colors } from './utils'\r
export const meta = {\r
  id: 'vwapchart2',\r
  title: 'V W A P Chart2',\r
  desc: 'V W A P Chart2 — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'VWAPChart2',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","v-w-a-p-chart2"],\r
}\r
\r
export default function VWAPChart2({ data: customData }) {\r
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
    let cumPV=0, cumV=0\r
    const vw = pts.map(d=>{\r
      const typ=(d.high+d.low+d.close)/3\r
      const vol=Math.abs(d.close-d.open)+1\r
      cumPV+=typ*vol; cumV+=vol\r
      return { date:d.date, v:cumPV/cumV }\r
    })\r
    g.append('path').datum(pts).attr('d', d3.line().x(d=>xc(d)).y(d=>y(d.close)).curve(d3.curveMonotoneX)).attr('fill','none').attr('stroke','#94a3b8').attr('stroke-width',1.5)\r
    g.append('path').datum(vw).attr('d', d3.line().x(d=>x(d.date)+x.bandwidth()/2).y(d=>y(d.v)).curve(d3.curveMonotoneX)).attr('fill','none').attr('stroke','#06b6d4').attr('stroke-width',2.5)\r
    g.append('text').attr('x',W-M.right).attr('y',M.top-4).attr('text-anchor','end').attr('fill','#06b6d4').attr('font-size','8px').text('VWAP')\r
    g.append('text').attr('x',W-M.right).attr('y',M.top+8).attr('text-anchor','end').attr('fill','#94a3b8').attr('font-size','8px').text('Close')\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};