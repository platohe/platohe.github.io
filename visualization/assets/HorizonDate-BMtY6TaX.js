var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M } from './utils'\r
export const meta = {\r
  id: 'horizon-date',\r
  title: 'Horizon Date',\r
  desc: 'Horizon Date — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'HorizonDate',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","horizon-date"],\r
}\r
\r
export default function HorizonDate({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = [{"date":"2024-01-01","value":42},{"date":"2024-01-02","value":38},{"date":"2024-01-03","value":45},{"date":"2024-01-04","value":52},{"date":"2024-01-05","value":48},{"date":"2024-01-06","value":61},{"date":"2024-01-07","value":55},{"date":"2024-01-08","value":67}]\r
    const data = (customData && customData[0] && customData[0].date) ? customData : DEFAULT_DATA\r
    const parse = d3.timeParse('%Y-%m-%d')\r
    const pts = data.map(d=>({ date: parse(d.date), value: d.value }))\r
    const x = d3.scaleTime().domain(d3.extent(pts,d=>d.date)).range([M.left,W-M.right])\r
    const bandMax = Math.max(10, d3.max(pts,d=>d.value)/2)\r
    const y = d3.scaleLinear().domain([0,bandMax]).range([H-M.bottom,M.top])\r
    const g = svg.append('g')\r
    const palette = ['#bfdbfe','#60a5fa','#1d4ed8']\r
    for(let b=0;b<3;b++){\r
      const clip = pts.map(p=>({ date:p.date, v: Math.max(0, Math.min(bandMax, p.value-b*bandMax)) }))\r
      if(!clip.some(c=>c.v>0)) continue\r
      g.append('path').datum(clip).attr('d', d3.area().x(d=>x(d.date)).y0(y(0)).y1(d=>y(d.v)).curve(d3.curveMonotoneX)).attr('fill',palette[b]).attr('opacity',0.45+b*0.25)\r
    }\r
    g.append('g').attr('transform','translate(0,'+(H-M.bottom)+')').call(d3.axisBottom(x).ticks(4).tickSize(0).tickPadding(6)).call(s=>s.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','8px'))\r
    g.append('text').attr('x',M.left).attr('y',M.top-6).attr('fill','var(--text-secondary)').attr('font-size','9px').text('Horizon bands · step '+Math.round(bandMax))\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};