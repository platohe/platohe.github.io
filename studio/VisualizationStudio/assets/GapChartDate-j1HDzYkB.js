var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M } from './utils'\r
export const meta = {\r
  id: 'gap-chart-date',\r
  title: 'Gap Chart Date',\r
  desc: 'Gap Chart Date — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'GapChartDate',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","gap-chart-date"],\r
}\r
\r
export default function GapChartDate({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = [{"date":"2024-01-01","value":42},{"date":"2024-01-02","value":38},{"date":"2024-01-03","value":45},{"date":"2024-01-04","value":52},{"date":"2024-01-05","value":48},{"date":"2024-01-06","value":61},{"date":"2024-01-07","value":55},{"date":"2024-01-08","value":67}]\r
    const data = (customData && customData[0] && customData[0].date) ? customData : DEFAULT_DATA\r
    const n = data.length\r
    const parse = d3.timeParse('%Y-%m-%d')\r
    const x = d3.scaleTime().domain(d3.extent(data,d=>parse(d.date))).range([M.left,W-M.right])\r
    const y = d3.scaleLinear().domain([0, d3.max(data,d=>d.value)*1.15]).range([H-M.bottom,M.top])\r
    const bw = (W-M.left-M.right)/n*0.55\r
    const g = svg.append('g')\r
    for(let i=1;i<n;i++){\r
      const prev=data[i-1].value, cur=data[i].value\r
      const up = cur>=prev\r
      g.append('rect').attr('x',x(parse(data[i].date))-bw/2).attr('y',Math.min(y(cur),y(prev))).attr('width',bw).attr('height',Math.max(2,Math.abs(y(cur)-y(prev)))).attr('fill', up?'#10b981':'#ef4444').attr('opacity',0.8).attr('rx',2)\r
      g.append('circle').attr('cx',x(parse(data[i-1].date))).attr('cy',y(prev)).attr('r',2).attr('fill','var(--border)')\r
    }\r
    g.append('g').attr('transform','translate(0,'+(H-M.bottom)+')').call(d3.axisBottom(x).ticks(4).tickSize(0).tickPadding(6)).call(s=>s.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','8px'))\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};