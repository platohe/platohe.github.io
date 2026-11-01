var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, colors } from './utils'\r
export const meta = {\r
  id: 'fibonacci-retracement-chart',\r
  title: 'Fibonacci Retracement Chart',\r
  desc: 'Fibonacci Retracement Chart — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'FibonacciRetracementChart',\r
  complexity: 'beginner',\r
  interactivity: ["animate"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","fibonacci-retracement-chart"],\r
}\r
\r
export default function FibonacciRetracementChart({ data: customData }) {\r
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
    ;[[1,'#94a3b8'],[0.618,'#10b981'],[0.5,'#f59e0b'],[0.382,'#f97316'],[0.236,'#ef4444']].forEach(L=>{\r
      const price = lo+(hi-lo)*L[0]\r
      g.append('line').attr('x1',M.left).attr('x2',W-M.right).attr('y1',y(price)).attr('y2',y(price)).attr('stroke',L[1]).attr('stroke-dasharray','5,4').attr('opacity',0.8)\r
      g.append('text').attr('x',W-M.right-2).attr('y',y(price)-3).attr('text-anchor','end').attr('fill',L[1]).attr('font-size','8px').text((L[0]*100)+'%')\r
    })\r
    g.append('path').datum(pts).attr('d', d3.line().x(d=>xc(d)).y(d=>y(d.close)).curve(d3.curveMonotoneX)).attr('fill','none').attr('stroke','#334155').attr('stroke-width',1.6).attr('opacity',0.55)\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};