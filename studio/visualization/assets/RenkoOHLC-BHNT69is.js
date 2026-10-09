var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, colors } from './utils'\r
export const meta = {\r
  id: 'renko-ohlc',\r
  title: 'Renko O H L C',\r
  desc: 'Renko O H L C — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'RenkoOHLC',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","renko-o-h-l-c"],\r
}\r
\r
export default function RenkoOHLC({ data: customData }) {\r
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
    const bs=((hi-lo)/8)||1\r
    let last=pts[0].close; const bricks=[]\r
    pts.forEach(d=>{ let gd=0; while(d.close>=last+bs&&gd<6){bricks.push({o:last,c:last+bs});last+=bs;gd++} gd=0; while(d.close<=last-bs&&gd<6){bricks.push({o:last,c:last-bs});last-=bs;gd++} })\r
    if(!bricks.length) bricks.push({o:last,c:last+bs})\r
    const bx=d3.scaleBand().domain(bricks.map((_,i)=>i)).range([M.left,W-M.right]).padding(0.22)\r
    bricks.forEach(b=>{ const up=b.c>=b.o\r
      g.append('rect').attr('x',bx(bricks.indexOf(b))).attr('y',y(Math.max(b.o,b.c))).attr('width',bx.bandwidth()).attr('height',Math.max(3,Math.abs(y(b.o)-y(b.c)))).attr('fill',up?'#10b981':'#ef4444').attr('stroke','var(--border)') })\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};