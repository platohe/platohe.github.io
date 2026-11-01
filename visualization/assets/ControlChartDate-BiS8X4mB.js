var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, colors } from './utils'\r
export const meta = {\r
  id: 'control-chart-date',\r
  title: 'Control Chart Date',\r
  desc: 'Control Chart Date — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'ControlChartDate',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","control-chart-date"],\r
}\r
\r
export default function ControlChartDate({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = [{"date":"2024-01-01","value":42},{"date":"2024-01-02","value":50},{"date":"2024-01-03","value":38}]\r
    const data = (customData && customData[0]?.date) ? customData : DEFAULT_DATA\r
    const parse=d3.timeParse('%Y-%m-%d')\r
    const pts=data.map(d=>({date:parse(d.date),value:d.value}))\r
    const x=d3.scaleTime().domain(d3.extent(pts,d=>d.date)).range([M.left,W-M.right])\r
    const y=d3.scaleLinear().domain([30,70]).range([H-M.bottom,M.top])\r
    const mean=d3.mean(pts,d=>d.value), sd=d3.deviation(pts,d=>d.value)||5\r
    const g=svg.append('g')\r
    g.append('line').attr('x1',M.left).attr('x2',W-M.right).attr('y1',y(mean)).attr('y2',y(mean)).attr('stroke',colors[0]).attr('stroke-width',1.5)\r
    g.append('line').attr('x1',M.left).attr('x2',W-M.right).attr('y1',y(mean+3*sd)).attr('y2',y(mean+3*sd)).attr('stroke','#ef4444').attr('stroke-dasharray','4,4')\r
    g.append('line').attr('x1',M.left).attr('x2',W-M.right).attr('y1',y(mean-3*sd)).attr('y2',y(mean-3*sd)).attr('stroke','#ef4444').attr('stroke-dasharray','4,4')\r
    g.append('path').datum(pts).attr('d',d3.line().x(d=>x(d.date)).y(d=>y(d.value))).attr('fill','none').attr('stroke',colors[0]).attr('stroke-width',1.8)\r
    g.selectAll('circle').data(pts).join('circle').attr('cx',d=>x(d.date)).attr('cy',d=>y(d.value)).attr('r',3).attr('fill',d=> Math.abs(d.value-mean)>2*sd?'#ef4444':colors[0])\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};