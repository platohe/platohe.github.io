var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, colors } from './utils'\r
export const meta = {\r
  id: 'periodogram-date',\r
  title: 'Periodogram Date',\r
  desc: 'Periodogram Date — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'PeriodogramDate',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","periodogram-date"],\r
}\r
\r
export default function PeriodogramDate({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = [{"date":"2024-01-01","value":42}]\r
    const freqs = d3.range(1,16).map(k=>({ f:k, p: 1/(k*k) + (k===3?0.5:0) + Math.abs(Math.sin(k*1.7))*0.05 }))\r
    const x = d3.scaleLinear().domain([0,16]).range([M.left,W-M.right])\r
    const y = d3.scaleLinear().domain([0,d3.max(freqs,d=>d.p)*1.15]).range([H-M.bottom,M.top])\r
    const g = svg.append('g')\r
    g.append('path').datum(freqs).attr('d', d3.area().x(d=>x(d.f)).y0(y(0)).y1(d=>y(d.p)).curve(d3.curveBasis)).attr('fill',colors[0]).attr('opacity',0.18)\r
    g.append('path').datum(freqs).attr('d', d3.line().x(d=>x(d.f)).y(d=>y(d.p)).curve(d3.curveBasis)).attr('fill','none').attr('stroke',colors[0]).attr('stroke-width',2)\r
    freqs.forEach(F=>{\r
      if(F.p>0.3){ g.append('circle').attr('cx',x(F.f)).attr('cy',y(F.p)).attr('r',3.5).attr('fill','#ef4444')\r
        g.append('text').attr('x',x(F.f)).attr('y',y(F.p)-6).attr('text-anchor','middle').attr('fill','#ef4444').attr('font-size','7px').text('peak f='+F.f) }\r
    })\r
    g.append('g').attr('transform','translate(0,'+(H-M.bottom)+')').call(d3.axisBottom(x).ticks(8).tickSize(0).tickPadding(5)).call(s=>s.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','8px'))\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};