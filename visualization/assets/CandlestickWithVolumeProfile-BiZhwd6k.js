var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, colors } from './utils'\r
export const meta = {\r
  id: 'candlestick-with-volume-profile',\r
  title: 'Candlestick With Volume Profile',\r
  desc: 'Candlestick With Volume Profile — a lines chart visualization',\r
  category: 'Lines',\r
  component: 'CandlestickWithVolumeProfile',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-transition"],\r
  tags: ["lines","candlestick-with-volume-profile"],\r
}\r
\r
export default function CandlestickWithVolumeProfile({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = [{"date":"2024-01-01","open":100,"high":105,"low":98,"close":103},{"date":"2024-01-02","open":103,"high":108,"low":102,"close":107},{"date":"2024-01-03","open":107,"high":110,"low":104,"close":106}]\r
    const data = (customData && customData[0]?.open!==undefined) ? customData : DEFAULT_DATA\r
    const parse = d3.timeParse('%Y-%m-%d')\r
    const pts = data.map(d=>({...d, date:parse(d.date)}))\r
    const x = d3.scaleBand().domain(pts.map(d=>d.date)).range([M.left,W-M.right]).padding(0.3)\r
    const y = d3.scaleLinear().domain([d3.min(pts,d=>d.low)*0.97,d3.max(pts,d=>d.high)*1.03]).range([H-M.bottom,M.top])\r
    const g = svg.append('g')\r
    const bw = x.bandwidth()\r
    pts.forEach((d,i)=>{\r
      const col = d.close>=d.open?'#10b981':'#ef4444'\r
      g.append('line').attr('x1',x(d.date)+bw/2).attr('x2',x(d.date)+bw/2).attr('y1',y(d.high)).attr('y2',y(d.low)).attr('stroke',col).attr('stroke-width',1)\r
      g.append('rect').attr('x',x(d.date)).attr('y',y(Math.max(d.open,d.close))).attr('width',bw).attr('height',Math.max(1,Math.abs(y(d.open)-y(d.close)))).attr('fill',col).attr('opacity',0.7999999999999999)\r
      \r
      g.append('line').attr('x1',x(d.date)).attr('x2',x(d.date)+bw).attr('y1',y(d.high+2+i%3)).attr('y2',y(d.high+2+i%3)).attr('stroke','#6366f1').attr('stroke-dasharray','2,2')\r
      \r
    })\r
    g.append('text').attr('x',W/2).attr('y',M.top-4).attr('text-anchor','middle').attr('fill','var(--text-secondary)').attr('font-size','7px').text('CandlestickWithVolumeProfile')\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};