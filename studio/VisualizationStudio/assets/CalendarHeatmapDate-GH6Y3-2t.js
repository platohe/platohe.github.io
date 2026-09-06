var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'calendar-heatmap-date',\r
  title: 'Calendar Heatmap Date',\r
  desc: 'Calendar Heatmap Date — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'CalendarHeatmapDate',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-color"],\r
  tags: ["bars","calendar-heatmap-date"],\r
}\r
\r
export default function CalendarHeatmapDate({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = [{"date":"2024-01-01","value":42},{"date":"2024-01-08","value":55},{"date":"2024-01-15","value":38}]\r
    const data = (customData && customData[0]?.date) ? customData : DEFAULT_DATA\r
    const parse=d3.timeParse('%Y-%m-%d')\r
    const pts=data.map(d=>({date:parse(d.date),value:d.value}))\r
    const cell=14, cols=8, g=svg.append('g').attr('transform','translate(20,30)')\r
    const c=d3.scaleSequential(d3.interpolateYlOrRd).domain([0,60])\r
    pts.forEach((d,i)=>{ const col=i%cols, row=Math.floor(i/cols); g.append('rect').attr('x',col*cell).attr('y',row*cell).attr('width',cell-2).attr('height',cell-2).attr('fill',c(d.value)).attr('rx',2); g.append('text').attr('x',col*cell+cell/2).attr('y',row*cell+cell/2+4).attr('text-anchor','middle').attr('fill',d.value>30?'#fff':'#111').attr('font-size','7px').text(d.value)})\r
    g.selectAll('text.day').data(['Mon','Wed','Fri']).join('text').attr('x',-8).attr('y',(d,i)=>i*28+10).attr('text-anchor','end').attr('fill','var(--text-secondary)').attr('font-size','7px').text(d=>d)\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};