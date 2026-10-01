var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, colors } from './utils'\r
export const meta = {\r
  id: 'candlestick-pattern-detector',\r
  title: 'Candlestick Pattern Detector',\r
  desc: 'Candlestick Pattern Detector — a lines chart visualization',\r
  category: 'Lines',\r
  component: 'CandlestickPatternDetector',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-transition"],\r
  tags: ["lines","candlestick-pattern-detector"],\r
}\r
\r
export default function CandlestickPatternDetector({ data: customData }) {\r
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
        pts.forEach(d=>{\r
      const col=d.close>=d.open?'#10b981':'#ef4444'\r
      g.append('line').attr('x1',xc(d)).attr('x2',xc(d)).attr('y1',y(d.high)).attr('y2',y(d.low)).attr('stroke',col)\r
      g.append('rect').attr('x',x(d.date)).attr('y',y(Math.max(d.open,d.close))).attr('width',x.bandwidth()).attr('height',Math.max(1,Math.abs(y(d.open)-y(d.close)))).attr('fill',col).attr('opacity',0.92)\r
    })\r
    pts.forEach((d,i)=>{\r
      const body=Math.abs(d.close-d.open), range=d.high-d.low||0.001\r
      let tag=null,col=null\r
      if(body/range<0.12){tag='DOJI';col='#f59e0b'}\r
      else if(i>0){ const pd=pts[i-1]; if(d.close>d.open&&pd.close<pd.open&&d.close>=pd.open&&d.open<=pd.close){tag='ENGULF';col='#6366f1'} }\r
      if(tag){ g.append('rect').attr('x',xc(d)-16).attr('y',y(d.high)-16).attr('width',32).attr('height',11).attr('fill',col).attr('rx',2)\r
        g.append('text').attr('x',xc(d)).attr('y',y(d.high)-8).attr('text-anchor','middle').attr('fill','#fff').attr('font-size','6.5px').text(tag) }\r
    })\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};