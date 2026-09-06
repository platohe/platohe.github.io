var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, colors } from './utils'\r
export const meta = {\r
  id: 'fan-chart-date',\r
  title: 'Fan Chart Date',\r
  desc: 'Fan Chart Date — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'FanChartDate',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","fan-chart-date"],\r
}\r
\r
export default function FanChartDate({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = [{"date":"2024-01-01","value":42},{"date":"2024-01-02","value":48},{"date":"2024-01-03","value":55}]\r
    const data = (customData && customData[0]?.date) ? customData : DEFAULT_DATA\r
    const parse=d3.timeParse('%Y-%m-%d')\r
    const pts=data.map(d=>({date:parse(d.date),value:d.value}))\r
    const x=d3.scaleTime().domain(d3.extent(pts,d=>d.date)).range([M.left,W-M.right])\r
    const y=d3.scaleLinear().domain([0,80]).range([H-M.bottom,M.top])\r
    const g=svg.append('g')\r
    const upper=pts.map(d=>({date:d.date,value:d.value*1.3})), lower=pts.map(d=>({date:d.date,value:d.value*0.7}))\r
    const area=d3.area().x(d=>x(d.date)).y0(d=>y(d.value*0.7)).y1(d=>y(d.value*1.3)).curve(d3.curveBasis)\r
    g.append('path').datum(pts).attr('d',area).attr('fill',colors[1]).attr('opacity',0.2)\r
    g.append('path').datum(pts).attr('d',d3.line().x(d=>x(d.date)).y(d=>y(d.value)).curve(d3.curveMonotoneX)).attr('fill','none').attr('stroke',colors[0]).attr('stroke-width',2)\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};