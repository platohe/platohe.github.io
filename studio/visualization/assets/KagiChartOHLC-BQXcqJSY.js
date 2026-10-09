var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, colors } from './utils'\r
export const meta = {\r
  id: 'kagi-chart-ohlc',\r
  title: 'Kagi Chart O H L C',\r
  desc: 'Kagi Chart O H L C — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'KagiChartOHLC',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","kagi-chart-o-h-l-c"],\r
}\r
\r
export default function KagiChartOHLC({ data: customData }) {\r
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
    const rev = ((hi-lo)/6)||1\r
    let dir=1, ext=pts[0].close\r
    const tps=[ext]\r
    pts.forEach(d=>{\r
      const c=d.close\r
      if(dir>0){ if(c>ext){ ext=c } else if(c<=ext-rev){ tps.push(ext); tps.push(c); dir=-1; ext=c } }\r
      else { if(c<ext){ ext=c } else if(c>=ext+rev){ tps.push(ext); tps.push(c); dir=1; ext=c } }\r
    })\r
    tps.push(ext)\r
    const kx = d3.scaleLinear().domain([0,tps.length-1]).range([M.left+30,W-M.right-10])\r
    for(let i=1;i<tps.length;i++){\r
      const up = tps[i]>tps[i-1]\r
      g.append('line').attr('x1',kx(i-1)).attr('y1',y(tps[i-1])).attr('x2',kx(i)).attr('y2',y(tps[i])).attr('stroke', up?'#111827':'#ef4444').attr('stroke-width', up?4:1.5)\r
    }\r
    g.append('text').attr('x',M.left).attr('y',M.top-6).attr('fill','var(--text-secondary)').attr('font-size','9px').text('Kagi · reversal '+rev.toFixed(1))\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};