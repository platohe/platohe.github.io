var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, colors } from './utils'\r
export const meta = {\r
  id: 'shewhart-date',\r
  title: 'Shewhart Date',\r
  desc: 'Shewhart Date — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'ShewhartDate',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","shewhart-date"],\r
}\r
\r
export default function ShewhartDate({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = [{"date":"2024-01-01","value":42},{"date":"2024-01-02","value":38},{"date":"2024-01-03","value":45},{"date":"2024-01-04","value":52},{"date":"2024-01-05","value":48},{"date":"2024-01-06","value":61},{"date":"2024-01-07","value":55},{"date":"2024-01-08","value":67}]\r
    const data = (customData && customData[0] && customData[0].date) ? customData : DEFAULT_DATA\r
    const parse = d3.timeParse('%Y-%m-%d')\r
    const pts = data.map(d=>({ date: parse(d.date), value: d.value }))\r
    const mean=d3.mean(pts,d=>d.value), sd=d3.deviation(pts,d=>d.value)||1\r
    const x = d3.scaleTime().domain(d3.extent(pts,d=>d.date)).range([M.left,W-M.right])\r
    const y = d3.scaleLinear().domain([mean-4*sd,mean+4*sd]).range([H-M.bottom,M.top])\r
    const g = svg.append('g')\r
    ;[[3,'UCL'],[-3,'LCL']].forEach(L=>{\r
      g.append('line').attr('x1',M.left).attr('x2',W-M.right).attr('y1',y(mean+L[0]*sd)).attr('y2',y(mean+L[0]*sd)).attr('stroke','#ef4444').attr('stroke-dasharray','4,3')\r
      g.append('text').attr('x',W-M.right-2).attr('y',y(mean+L[0]*sd)-3).attr('text-anchor','end').attr('fill','#ef4444').attr('font-size','7px').text(L[1])\r
    })\r
    ;[[1,'+1σ'],[-1,'-1σ']].forEach(L=>{\r
      g.append('line').attr('x1',M.left).attr('x2',W-M.right).attr('y1',y(mean+L[0]*sd)).attr('y2',y(mean+L[0]*sd)).attr('stroke','var(--border)').attr('stroke-dasharray','2,4')\r
      g.append('text').attr('x',M.left+2).attr('y',y(mean+L[0]*sd)-3).attr('fill','var(--text-secondary)').attr('font-size','7px').text(L[1])\r
    })\r
    g.append('line').attr('x1',M.left).attr('x2',W-M.right).attr('y1',y(mean)).attr('y2',y(mean)).attr('stroke',colors[0])\r
    pts.forEach(p=>{\r
      const z=(p.value-mean)/sd\r
      g.append('circle').attr('cx',x(p.date)).attr('cy',y(p.value)).attr('r', z>=2||z<=-2 ? 5 : 3).attr('fill', Math.abs(z)>=2 ? '#ef4444' : colors[0]).attr('stroke','#fff')\r
    })\r
    g.append('text').attr('x',M.left).attr('y',M.top-6).attr('fill','var(--text-secondary)').attr('font-size','9px').text('Shewhart zone rules')\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};